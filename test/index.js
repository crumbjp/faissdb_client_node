'use strict';
const _ = require('lodash');
const FaissdbReplicaSet = require("index").ReplicaSet;
const N = 300;

const normalize = (vector) => {
  let l = Math.pow(_.reduce(vector, (r, v) => r + v*v, 0), 0.5);
  return vector.map(v => v/l);
};

const sleep = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));

let faissdbClient = new FaissdbReplicaSet({
  connects: [{
    host: "localhost",
    port: 20021
  }, {
    host: "localhost",
    port: 20022
  }, {
    host: "localhost",
    port: 20023
  }],
  debug: true,
  logger: {
    info: console.log
  }
});
faissdbClient.init();

(async () => {
  let delKeys = [];
  let inputs = [];
  for(let i = 0; i < N; i++){
    let key = `k${i}`;
    let collections = [];
    if(i%3 == 0) {
      collections = ['weekly'];
    }
    if(i%2 == 0) {
      delKeys.push(key);
    }
    inputs.push({
      key: key,
      v: normalize([i, N-i]),
      collections: collections,
    });
  }
  let searchResults = await faissdbClient.search('', 10, normalize([30, 70]));
  console.log("first search", _.zip(searchResults[0], searchResults[1]));
  try {
    console.log('set');
    await faissdbClient.set(inputs);
    console.log('train');
    await faissdbClient.train(1);
  } catch(e) {
    console.log(e);
  }
  try {
    searchResults = await faissdbClient.search('', 10, normalize([30, 70]));
    console.log("main", _.zip(searchResults[0], searchResults[1]));
    searchResults = await faissdbClient.search('weekly', 10, normalize([30, 70]));
    console.log("weekly", _.zip(searchResults[0], searchResults[1]));
  } catch (e) {
    console.log(e);
  }
  try {
    console.log('del');
    await faissdbClient.del(delKeys);
    searchResults = await faissdbClient.search('', 10, normalize([30, 70]));
    console.log("DELed", _.zip(searchResults[0], searchResults[1]));
  } catch (e) {
    console.log(e);
  }
  for(let i = 0; i < 10; i++) {
    try {
      await sleep(2000);
      searchResults = await faissdbClient.search('', 10, normalize([30, 70]));
      console.log("Sleeped", _.zip(searchResults[0], searchResults[1]));
    } catch (e) {
      console.log(e);
    }
  }
  process.exit(1);
})();
