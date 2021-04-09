'use strict';

const http = require('http');
const _ = require('lodash');

class Client {
  constructor(options) {
    this.host = options.host;
    this.port = options.port;
  }

  _request(method, path, body) {
    return new Promise((resolve, reject) => {
      let req = http.request({
        host: this.host,
        port: this.port,
        path: path,
        method: method,
      }, (res) => {
        if(res.statusCode != 200) {
          return reject(`Error ${res.statusCode}`);
        }
        let resp = "";
        res.on('data', (chunk) => {
          resp += chunk;
        });
        res.on('end', (chunk) => {
          resolve(resp);
        });
      });
      if(method == 'POST') {
        req.write(body);
      }
      req.end();
    });
  }

  async connect(){
    await this.status();
  }

  async status() {
    let resp = await this._request('GET', '/');
    return JSON.parse(resp);
  }

  async set(key, arr) {
    await this._request('POST', '/set', key + "\n" + arr.split(','));
  }

  async sset(key, obj) {
    await this._request('POST', '/sset', key + "\n" + _.map(obj, (v, k) => `${k}:${obj[k]}`).join(','));
  }

  async del(key) {
    await this._request('POST', '/del', key);
  }

  async search(n, arr) {
    let resp = await this._request('POST', '/search', `${n}` + "\n" + arr.split(','));
    return _.map(resp.trim().split("\n"), (line) => {
      return line.split(" ");
    });
  }

  async ssearch(n, obj) {
    let resp = await this._request('POST', '/ssearch', `${n}` + "\n" + _.map(obj, (v, k) => `${k}:${obj[k]}`).join(','));
    return _.map(resp.trim().split("\n"), (line) => {
      return line.split(" ");
    });
  }

  async train(proportion) {
    await this._request('POST', '/train', `${proportion}`);
  }

  async ftrain(proportion) {
    await this._request('POST', '/ftrain', `${proportion}`);
  }

  async sync() {
    await this._request('POST', '/sync');
  }
}

module.exports = Client;
