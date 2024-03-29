// package: feature
// file: feature.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class StatusRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StatusRequest): StatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatusRequest;
    static deserializeBinaryFromReader(message: StatusRequest, reader: jspb.BinaryReader): StatusRequest;
}

export namespace StatusRequest {
    export type AsObject = {
    }
}

export class StatusReply extends jspb.Message { 
    getId(): number;
    setId(value: number): StatusReply;
    getStatus(): number;
    setStatus(value: number): StatusReply;
    getRole(): number;
    setRole(value: number): StatusReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatusReply.AsObject;
    static toObject(includeInstance: boolean, msg: StatusReply): StatusReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatusReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatusReply;
    static deserializeBinaryFromReader(message: StatusReply, reader: jspb.BinaryReader): StatusReply;
}

export namespace StatusReply {
    export type AsObject = {
        id: number,
        status: number,
        role: number,
    }
}

export class Data extends jspb.Message { 
    getKey(): string;
    setKey(value: string): Data;
    clearVList(): void;
    getVList(): Array<number>;
    setVList(value: Array<number>): Data;
    addV(value: number, index?: number): number;
    getSparsev(): string;
    setSparsev(value: string): Data;
    clearCollectionsList(): void;
    getCollectionsList(): Array<string>;
    setCollectionsList(value: Array<string>): Data;
    addCollections(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Data.AsObject;
    static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Data;
    static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
}

export namespace Data {
    export type AsObject = {
        key: string,
        vList: Array<number>,
        sparsev: string,
        collectionsList: Array<string>,
    }
}

export class SetRequest extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Data>;
    setDataList(value: Array<Data>): SetRequest;
    addData(value?: Data, index?: number): Data;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetRequest): SetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetRequest;
    static deserializeBinaryFromReader(message: SetRequest, reader: jspb.BinaryReader): SetRequest;
}

export namespace SetRequest {
    export type AsObject = {
        dataList: Array<Data.AsObject>,
    }
}

export class SetReply extends jspb.Message { 
    getNstored(): number;
    setNstored(value: number): SetReply;
    getNerror(): number;
    setNerror(value: number): SetReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetReply.AsObject;
    static toObject(includeInstance: boolean, msg: SetReply): SetReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetReply;
    static deserializeBinaryFromReader(message: SetReply, reader: jspb.BinaryReader): SetReply;
}

export namespace SetReply {
    export type AsObject = {
        nstored: number,
        nerror: number,
    }
}

export class DelRequest extends jspb.Message { 
    clearKeyList(): void;
    getKeyList(): Array<string>;
    setKeyList(value: Array<string>): DelRequest;
    addKey(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DelRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DelRequest): DelRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DelRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DelRequest;
    static deserializeBinaryFromReader(message: DelRequest, reader: jspb.BinaryReader): DelRequest;
}

export namespace DelRequest {
    export type AsObject = {
        keyList: Array<string>,
    }
}

export class DelReply extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DelReply.AsObject;
    static toObject(includeInstance: boolean, msg: DelReply): DelReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DelReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DelReply;
    static deserializeBinaryFromReader(message: DelReply, reader: jspb.BinaryReader): DelReply;
}

export namespace DelReply {
    export type AsObject = {
    }
}

export class SearchRequest extends jspb.Message { 
    getN(): number;
    setN(value: number): SearchRequest;
    clearVList(): void;
    getVList(): Array<number>;
    setVList(value: Array<number>): SearchRequest;
    addV(value: number, index?: number): number;
    getSparsev(): string;
    setSparsev(value: string): SearchRequest;
    getCollection(): string;
    setCollection(value: string): SearchRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SearchRequest): SearchRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchRequest;
    static deserializeBinaryFromReader(message: SearchRequest, reader: jspb.BinaryReader): SearchRequest;
}

export namespace SearchRequest {
    export type AsObject = {
        n: number,
        vList: Array<number>,
        sparsev: string,
        collection: string,
    }
}

export class SearchReply extends jspb.Message { 
    clearDistancesList(): void;
    getDistancesList(): Array<number>;
    setDistancesList(value: Array<number>): SearchReply;
    addDistances(value: number, index?: number): number;
    clearKeysList(): void;
    getKeysList(): Array<string>;
    setKeysList(value: Array<string>): SearchReply;
    addKeys(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchReply.AsObject;
    static toObject(includeInstance: boolean, msg: SearchReply): SearchReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchReply;
    static deserializeBinaryFromReader(message: SearchReply, reader: jspb.BinaryReader): SearchReply;
}

export namespace SearchReply {
    export type AsObject = {
        distancesList: Array<number>,
        keysList: Array<string>,
    }
}

export class TrainRequest extends jspb.Message { 
    getProportion(): number;
    setProportion(value: number): TrainRequest;
    getForce(): boolean;
    setForce(value: boolean): TrainRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrainRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TrainRequest): TrainRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrainRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrainRequest;
    static deserializeBinaryFromReader(message: TrainRequest, reader: jspb.BinaryReader): TrainRequest;
}

export namespace TrainRequest {
    export type AsObject = {
        proportion: number,
        force: boolean,
    }
}

export class TrainReply extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrainReply.AsObject;
    static toObject(includeInstance: boolean, msg: TrainReply): TrainReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrainReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrainReply;
    static deserializeBinaryFromReader(message: TrainReply, reader: jspb.BinaryReader): TrainReply;
}

export namespace TrainReply {
    export type AsObject = {
    }
}
