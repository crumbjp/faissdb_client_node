// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var feature_pb = require('./feature_pb.js');

function serialize_feature_DelReply(arg) {
  if (!(arg instanceof feature_pb.DelReply)) {
    throw new Error('Expected argument of type feature.DelReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_feature_DelReply(buffer_arg) {
  return feature_pb.DelReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_feature_DelRequest(arg) {
  if (!(arg instanceof feature_pb.DelRequest)) {
    throw new Error('Expected argument of type feature.DelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_feature_DelRequest(buffer_arg) {
  return feature_pb.DelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_feature_SearchReply(arg) {
  if (!(arg instanceof feature_pb.SearchReply)) {
    throw new Error('Expected argument of type feature.SearchReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_feature_SearchReply(buffer_arg) {
  return feature_pb.SearchReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_feature_SearchRequest(arg) {
  if (!(arg instanceof feature_pb.SearchRequest)) {
    throw new Error('Expected argument of type feature.SearchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_feature_SearchRequest(buffer_arg) {
  return feature_pb.SearchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_feature_SetReply(arg) {
  if (!(arg instanceof feature_pb.SetReply)) {
    throw new Error('Expected argument of type feature.SetReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_feature_SetReply(buffer_arg) {
  return feature_pb.SetReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_feature_SetRequest(arg) {
  if (!(arg instanceof feature_pb.SetRequest)) {
    throw new Error('Expected argument of type feature.SetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_feature_SetRequest(buffer_arg) {
  return feature_pb.SetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_feature_TrainReply(arg) {
  if (!(arg instanceof feature_pb.TrainReply)) {
    throw new Error('Expected argument of type feature.TrainReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_feature_TrainReply(buffer_arg) {
  return feature_pb.TrainReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_feature_TrainRequest(arg) {
  if (!(arg instanceof feature_pb.TrainRequest)) {
    throw new Error('Expected argument of type feature.TrainRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_feature_TrainRequest(buffer_arg) {
  return feature_pb.TrainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var FeatureService = exports.FeatureService = {
  set: {
    path: '/feature.Feature/Set',
    requestStream: false,
    responseStream: false,
    requestType: feature_pb.SetRequest,
    responseType: feature_pb.SetReply,
    requestSerialize: serialize_feature_SetRequest,
    requestDeserialize: deserialize_feature_SetRequest,
    responseSerialize: serialize_feature_SetReply,
    responseDeserialize: deserialize_feature_SetReply,
  },
  del: {
    path: '/feature.Feature/Del',
    requestStream: false,
    responseStream: false,
    requestType: feature_pb.DelRequest,
    responseType: feature_pb.DelReply,
    requestSerialize: serialize_feature_DelRequest,
    requestDeserialize: deserialize_feature_DelRequest,
    responseSerialize: serialize_feature_DelReply,
    responseDeserialize: deserialize_feature_DelReply,
  },
  search: {
    path: '/feature.Feature/Search',
    requestStream: false,
    responseStream: false,
    requestType: feature_pb.SearchRequest,
    responseType: feature_pb.SearchReply,
    requestSerialize: serialize_feature_SearchRequest,
    requestDeserialize: deserialize_feature_SearchRequest,
    responseSerialize: serialize_feature_SearchReply,
    responseDeserialize: deserialize_feature_SearchReply,
  },
  train: {
    path: '/feature.Feature/Train',
    requestStream: false,
    responseStream: false,
    requestType: feature_pb.TrainRequest,
    responseType: feature_pb.TrainReply,
    requestSerialize: serialize_feature_TrainRequest,
    requestDeserialize: deserialize_feature_TrainRequest,
    responseSerialize: serialize_feature_TrainReply,
    responseDeserialize: deserialize_feature_TrainReply,
  },
};

exports.FeatureClient = grpc.makeGenericClientConstructor(FeatureService);
