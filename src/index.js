'use strict';

const _ = require('lodash');

const FeatureGrpc = require('./grpc_feature/feature_grpc_pb');
const Feature = require('./grpc_feature/feature_pb');
const FeatureClient = FeatureGrpc.FeatureClient;
const GrpcJs = require('@grpc/grpc-js');

class Client {
  constructor(options) {
    this.host = options.host;
    this.port = options.port;
  }

  init() {
    this.client = new FeatureClient(
      `${this.host}:${this.port}`,
      GrpcJs.credentials.createInsecure(),
      {
        "grpc.keepalive_time_ms": 3000,
        "grpc.keepalive_timeout_ms": 1000,
        "grpc.keepalive_permit_without_calls": 1,
        "grpc.max_send_message_length": 100*1024*1024,
      }
    );
  }

  _request(method, req) {
    return new Promise((resolve, reject) => {
      this.client[method](req, (err, resp) => {
        if(err) {
          return reject(err);
        }
        resolve(resp);
      });
    });
  }

  toSparse(obj) {
    return _.map(obj, (v, k) => `${k}:${obj[k]}`).join(',');
  }

  /*
   * datas: [data]
   * data: {
   *   key: string
   *   v: `dense vector array` or `sparse vector object`
   *   collections: `[string] index names`
   * }
  */
  async set(inputs) {
    let setRequest = new Feature.SetRequest();
    for(let input of inputs) {
      let data = new Feature.Data();
      data.setKey(input.key);
      if(_.isArray(input.v)) {
        data.setVList(input.v);
      } else {
        data.setSparsev(this.toSparse(input.v));
      }
      data.setCollectionsList(input.collections);
      setRequest.addData(data);
    }
    let reply = await this._request('set', setRequest);
    return [reply.getNstored(), reply.getNerror()];
  }

  async train(proportion, force = false) {
    let trainRequest = new Feature.TrainRequest();
    trainRequest.setProportion(proportion);
    trainRequest.setForce(force);
    await this._request('train', trainRequest);
  }

  async del(keys) {
    let delRequest = new Feature.DelRequest();
    delRequest.setKeyList(keys);
    await this._request('del', delRequest);
  }

  /*
   * v: `dense vector array` or `sparse vector object`
   * collections: string target index name
  */
  async search(collection, n, v) {
    let searchRequest = new Feature.SearchRequest();
    searchRequest.setCollection(collection);
    searchRequest.setN(n);
    if(_.isArray(v)) {
      searchRequest.setVList(v);
    } else {
      searchRequest.setSparsev(this.toSparse(v));
    }
    let reply = await this._request('search', searchRequest);
    return [reply.getKeysList(), reply.getDistancesList()];
  }
}

module.exports = Client;
