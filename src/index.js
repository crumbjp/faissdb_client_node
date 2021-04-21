'use strict';

const _ = require('lodash');

let Client = require('./client');
exports.Client = Client;

class ReplicaSet {
  constructor(options) {
    this.clients = _.map(options.connects, connect => new Client({connect: connect}));
    this.primary = null;
    this.secondaries = [];
    this.lastPrepare = null;
    this.prepareInterval = options.prepareInterval || 5000;
  }

  init() {
    _.each(this.clients, client => client.init());
  }

  _prepare() {
    return new Promise(async (resolve, reject) => {
      try {
        if(!this.lastPrepare || (this.lastPrepare + this.prepareInterval) < new Date().getTime()) {
          let promises = [];
          for(let client of this.clients) {
            if(!client.isPrimary() && !client.isSecondary()) {
              promises.push(client.status());
            }
          }
          try {
            await Promise.all(promises);
          } catch(e) {
            // Nothing to do
          }
          this.primary = null;
          this.secondaries = [];
          for(let client of this.clients) {
            if(client.isPrimary()) {
              this.primary = client;
            } else if(client.isSecondary()) {
              this.secondaries.push(client);
            }
          }
          this.lastPrepare = new Date().getTime();
        }
        resolve();
      } catch(e) {
        reject(e);
      }
    });
  }

  async set(inputs, options = {}) {
    await this._prepare();
    if(!this.primary) {
      throw "No primary found";
    }
    return this.primary.set(inputs, options);
  }

  async train(proportion, options = {}) {
    await this._prepare();
    if(!this.primary) {
      throw "No primary found";
    }
    return this.primary.train(proportion, options);
  }

  async del(keys, options = {}) {
    await this._prepare();
    if(!this.primary) {
      throw "No primary found";
    }
    return this.primary.del(keys, options);
  }

  async search(collection, n, v, options = {}) {
    await this._prepare();
    let client = _.chain(this.secondaries).filter(secondary => secondary.isReady()).sample().value();
    client = client || (this.primary.isReady() ? this.primary : null);
    if(!client) {
      throw "No valid node found";
    }
    return this.primary.search(collection, n, v, options);
  }
}

exports.ReplicaSet = ReplicaSet;
