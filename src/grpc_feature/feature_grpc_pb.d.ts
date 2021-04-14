// package: feature
// file: feature.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as feature_pb from "./feature_pb";

interface IFeatureService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    set: IFeatureService_ISet;
    del: IFeatureService_IDel;
    search: IFeatureService_ISearch;
    train: IFeatureService_ITrain;
}

interface IFeatureService_ISet extends grpc.MethodDefinition<feature_pb.SetRequest, feature_pb.SetReply> {
    path: "/feature.Feature/Set";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<feature_pb.SetRequest>;
    requestDeserialize: grpc.deserialize<feature_pb.SetRequest>;
    responseSerialize: grpc.serialize<feature_pb.SetReply>;
    responseDeserialize: grpc.deserialize<feature_pb.SetReply>;
}
interface IFeatureService_IDel extends grpc.MethodDefinition<feature_pb.DelRequest, feature_pb.DelReply> {
    path: "/feature.Feature/Del";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<feature_pb.DelRequest>;
    requestDeserialize: grpc.deserialize<feature_pb.DelRequest>;
    responseSerialize: grpc.serialize<feature_pb.DelReply>;
    responseDeserialize: grpc.deserialize<feature_pb.DelReply>;
}
interface IFeatureService_ISearch extends grpc.MethodDefinition<feature_pb.SearchRequest, feature_pb.SearchReply> {
    path: "/feature.Feature/Search";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<feature_pb.SearchRequest>;
    requestDeserialize: grpc.deserialize<feature_pb.SearchRequest>;
    responseSerialize: grpc.serialize<feature_pb.SearchReply>;
    responseDeserialize: grpc.deserialize<feature_pb.SearchReply>;
}
interface IFeatureService_ITrain extends grpc.MethodDefinition<feature_pb.TrainRequest, feature_pb.TrainReply> {
    path: "/feature.Feature/Train";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<feature_pb.TrainRequest>;
    requestDeserialize: grpc.deserialize<feature_pb.TrainRequest>;
    responseSerialize: grpc.serialize<feature_pb.TrainReply>;
    responseDeserialize: grpc.deserialize<feature_pb.TrainReply>;
}

export const FeatureService: IFeatureService;

export interface IFeatureServer extends grpc.UntypedServiceImplementation {
    set: grpc.handleUnaryCall<feature_pb.SetRequest, feature_pb.SetReply>;
    del: grpc.handleUnaryCall<feature_pb.DelRequest, feature_pb.DelReply>;
    search: grpc.handleUnaryCall<feature_pb.SearchRequest, feature_pb.SearchReply>;
    train: grpc.handleUnaryCall<feature_pb.TrainRequest, feature_pb.TrainReply>;
}

export interface IFeatureClient {
    set(request: feature_pb.SetRequest, callback: (error: grpc.ServiceError | null, response: feature_pb.SetReply) => void): grpc.ClientUnaryCall;
    set(request: feature_pb.SetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: feature_pb.SetReply) => void): grpc.ClientUnaryCall;
    set(request: feature_pb.SetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: feature_pb.SetReply) => void): grpc.ClientUnaryCall;
    del(request: feature_pb.DelRequest, callback: (error: grpc.ServiceError | null, response: feature_pb.DelReply) => void): grpc.ClientUnaryCall;
    del(request: feature_pb.DelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: feature_pb.DelReply) => void): grpc.ClientUnaryCall;
    del(request: feature_pb.DelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: feature_pb.DelReply) => void): grpc.ClientUnaryCall;
    search(request: feature_pb.SearchRequest, callback: (error: grpc.ServiceError | null, response: feature_pb.SearchReply) => void): grpc.ClientUnaryCall;
    search(request: feature_pb.SearchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: feature_pb.SearchReply) => void): grpc.ClientUnaryCall;
    search(request: feature_pb.SearchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: feature_pb.SearchReply) => void): grpc.ClientUnaryCall;
    train(request: feature_pb.TrainRequest, callback: (error: grpc.ServiceError | null, response: feature_pb.TrainReply) => void): grpc.ClientUnaryCall;
    train(request: feature_pb.TrainRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: feature_pb.TrainReply) => void): grpc.ClientUnaryCall;
    train(request: feature_pb.TrainRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: feature_pb.TrainReply) => void): grpc.ClientUnaryCall;
}

export class FeatureClient extends grpc.Client implements IFeatureClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public set(request: feature_pb.SetRequest, callback: (error: grpc.ServiceError | null, response: feature_pb.SetReply) => void): grpc.ClientUnaryCall;
    public set(request: feature_pb.SetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: feature_pb.SetReply) => void): grpc.ClientUnaryCall;
    public set(request: feature_pb.SetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: feature_pb.SetReply) => void): grpc.ClientUnaryCall;
    public del(request: feature_pb.DelRequest, callback: (error: grpc.ServiceError | null, response: feature_pb.DelReply) => void): grpc.ClientUnaryCall;
    public del(request: feature_pb.DelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: feature_pb.DelReply) => void): grpc.ClientUnaryCall;
    public del(request: feature_pb.DelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: feature_pb.DelReply) => void): grpc.ClientUnaryCall;
    public search(request: feature_pb.SearchRequest, callback: (error: grpc.ServiceError | null, response: feature_pb.SearchReply) => void): grpc.ClientUnaryCall;
    public search(request: feature_pb.SearchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: feature_pb.SearchReply) => void): grpc.ClientUnaryCall;
    public search(request: feature_pb.SearchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: feature_pb.SearchReply) => void): grpc.ClientUnaryCall;
    public train(request: feature_pb.TrainRequest, callback: (error: grpc.ServiceError | null, response: feature_pb.TrainReply) => void): grpc.ClientUnaryCall;
    public train(request: feature_pb.TrainRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: feature_pb.TrainReply) => void): grpc.ClientUnaryCall;
    public train(request: feature_pb.TrainRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: feature_pb.TrainReply) => void): grpc.ClientUnaryCall;
}
