// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "user.proto" (package "user", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "./google/protobuf/timestamp";
/**
 * @generated from protobuf message user.User
 */
export interface User {
    /**
     * @generated from protobuf field: int32 id = 1;
     */
    id: number;
    /**
     * @generated from protobuf field: string username = 2;
     */
    username: string;
    /**
     * @generated from protobuf field: string email = 3;
     */
    email: string;
    /**
     * @generated from protobuf field: string first_name = 4;
     */
    firstName: string;
    /**
     * @generated from protobuf field: string last_name = 5;
     */
    lastName: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp date_of_birth = 6;
     */
    dateOfBirth?: Timestamp;
    /**
     * @generated from protobuf field: string address = 7;
     */
    address: string;
    /**
     * @generated from protobuf field: string phone_number = 8;
     */
    phoneNumber: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 9;
     */
    createdAt?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp updated_at = 10;
     */
    updatedAt?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp last_login = 11;
     */
    lastLogin?: Timestamp;
    /**
     * @generated from protobuf field: bool is_active = 12;
     */
    isActive: boolean;
    /**
     * @generated from protobuf field: bool is_admin = 13;
     */
    isAdmin: boolean;
    /**
     * @generated from protobuf field: string profile_picture = 14;
     */
    profilePicture: string;
    /**
     * @generated from protobuf field: string bio = 15;
     */
    bio: string;
}
/**
 * @generated from protobuf message user.GetUserByUsername
 */
export interface GetUserByUsername {
    /**
     * @generated from protobuf field: string username = 1;
     */
    username: string;
}
/**
 * @generated from protobuf message user.UserResponse
 */
export interface UserResponse {
    /**
     * @generated from protobuf field: user.User user = 1;
     */
    user?: User;
}
/**
 * @generated from protobuf message user.Empty
 */
export interface Empty {
}
/**
 * @generated from protobuf message user.GetAllUsersResponse
 */
export interface GetAllUsersResponse {
    /**
     * @generated from protobuf field: repeated user.User users = 1;
     */
    users: User[];
}
/**
 * @generated from protobuf message user.CreateUserRequest
 */
export interface CreateUserRequest {
    /**
     * @generated from protobuf field: string username = 1;
     */
    username: string;
    /**
     * @generated from protobuf field: string password = 2;
     */
    password: string;
    /**
     * @generated from protobuf field: string email = 3;
     */
    email: string;
    /**
     * @generated from protobuf field: string first_name = 4;
     */
    firstName: string;
    /**
     * @generated from protobuf field: string last_name = 5;
     */
    lastName: string;
    /**
     * @generated from protobuf field: string date_of_birth = 6;
     */
    dateOfBirth: string;
    /**
     * @generated from protobuf field: string address = 7;
     */
    address: string;
    /**
     * @generated from protobuf field: string phone_number = 8;
     */
    phoneNumber: string;
    /**
     * @generated from protobuf field: string profile_picture = 9;
     */
    profilePicture: string;
    /**
     * @generated from protobuf field: string bio = 10;
     */
    bio: string;
}
/**
 * @generated from protobuf message user.UpdateUserRequest
 */
export interface UpdateUserRequest {
    /**
     * @generated from protobuf field: int32 id = 1;
     */
    id: number;
    /**
     * @generated from protobuf field: string username = 2;
     */
    username: string;
    /**
     * @generated from protobuf field: string email = 3;
     */
    email: string;
    /**
     * @generated from protobuf field: string first_name = 4;
     */
    firstName: string;
    /**
     * @generated from protobuf field: string last_name = 5;
     */
    lastName: string;
    /**
     * @generated from protobuf field: string date_of_birth = 6;
     */
    dateOfBirth: string;
    /**
     * @generated from protobuf field: string address = 7;
     */
    address: string;
    /**
     * @generated from protobuf field: string phone_number = 8;
     */
    phoneNumber: string;
    /**
     * @generated from protobuf field: string profile_picture = 9;
     */
    profilePicture: string;
    /**
     * @generated from protobuf field: string bio = 10;
     */
    bio: string;
    /**
     * @generated from protobuf field: bool is_active = 11;
     */
    isActive: boolean;
    /**
     * @generated from protobuf field: bool is_admin = 12;
     */
    isAdmin: boolean;
}
/**
 * @generated from protobuf message user.DeleteUserRequest
 */
export interface DeleteUserRequest {
    /**
     * @generated from protobuf field: int32 id = 1;
     */
    id: number;
}
/**
 * @generated from protobuf message user.DeleteUserResponse
 */
export interface DeleteUserResponse {
    /**
     * @generated from protobuf field: bool success = 1;
     */
    success: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class User$Type extends MessageType<User> {
    constructor() {
        super("user.User", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "email", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "first_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "last_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "date_of_birth", kind: "message", T: () => Timestamp },
            { no: 7, name: "address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "phone_number", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "created_at", kind: "message", T: () => Timestamp },
            { no: 10, name: "updated_at", kind: "message", T: () => Timestamp },
            { no: 11, name: "last_login", kind: "message", T: () => Timestamp },
            { no: 12, name: "is_active", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "is_admin", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "profile_picture", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "bio", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<User>): User {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = 0;
        message.username = "";
        message.email = "";
        message.firstName = "";
        message.lastName = "";
        message.address = "";
        message.phoneNumber = "";
        message.isActive = false;
        message.isAdmin = false;
        message.profilePicture = "";
        message.bio = "";
        if (value !== undefined)
            reflectionMergePartial<User>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: User): User {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 id */ 1:
                    message.id = reader.int32();
                    break;
                case /* string username */ 2:
                    message.username = reader.string();
                    break;
                case /* string email */ 3:
                    message.email = reader.string();
                    break;
                case /* string first_name */ 4:
                    message.firstName = reader.string();
                    break;
                case /* string last_name */ 5:
                    message.lastName = reader.string();
                    break;
                case /* google.protobuf.Timestamp date_of_birth */ 6:
                    message.dateOfBirth = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.dateOfBirth);
                    break;
                case /* string address */ 7:
                    message.address = reader.string();
                    break;
                case /* string phone_number */ 8:
                    message.phoneNumber = reader.string();
                    break;
                case /* google.protobuf.Timestamp created_at */ 9:
                    message.createdAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.createdAt);
                    break;
                case /* google.protobuf.Timestamp updated_at */ 10:
                    message.updatedAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.updatedAt);
                    break;
                case /* google.protobuf.Timestamp last_login */ 11:
                    message.lastLogin = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.lastLogin);
                    break;
                case /* bool is_active */ 12:
                    message.isActive = reader.bool();
                    break;
                case /* bool is_admin */ 13:
                    message.isAdmin = reader.bool();
                    break;
                case /* string profile_picture */ 14:
                    message.profilePicture = reader.string();
                    break;
                case /* string bio */ 15:
                    message.bio = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: User, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).int32(message.id);
        /* string username = 2; */
        if (message.username !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.username);
        /* string email = 3; */
        if (message.email !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.email);
        /* string first_name = 4; */
        if (message.firstName !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.firstName);
        /* string last_name = 5; */
        if (message.lastName !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.lastName);
        /* google.protobuf.Timestamp date_of_birth = 6; */
        if (message.dateOfBirth)
            Timestamp.internalBinaryWrite(message.dateOfBirth, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* string address = 7; */
        if (message.address !== "")
            writer.tag(7, WireType.LengthDelimited).string(message.address);
        /* string phone_number = 8; */
        if (message.phoneNumber !== "")
            writer.tag(8, WireType.LengthDelimited).string(message.phoneNumber);
        /* google.protobuf.Timestamp created_at = 9; */
        if (message.createdAt)
            Timestamp.internalBinaryWrite(message.createdAt, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp updated_at = 10; */
        if (message.updatedAt)
            Timestamp.internalBinaryWrite(message.updatedAt, writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp last_login = 11; */
        if (message.lastLogin)
            Timestamp.internalBinaryWrite(message.lastLogin, writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* bool is_active = 12; */
        if (message.isActive !== false)
            writer.tag(12, WireType.Varint).bool(message.isActive);
        /* bool is_admin = 13; */
        if (message.isAdmin !== false)
            writer.tag(13, WireType.Varint).bool(message.isAdmin);
        /* string profile_picture = 14; */
        if (message.profilePicture !== "")
            writer.tag(14, WireType.LengthDelimited).string(message.profilePicture);
        /* string bio = 15; */
        if (message.bio !== "")
            writer.tag(15, WireType.LengthDelimited).string(message.bio);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message user.User
 */
export const User = new User$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetUserByUsername$Type extends MessageType<GetUserByUsername> {
    constructor() {
        super("user.GetUserByUsername", [
            { no: 1, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GetUserByUsername>): GetUserByUsername {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.username = "";
        if (value !== undefined)
            reflectionMergePartial<GetUserByUsername>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetUserByUsername): GetUserByUsername {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string username */ 1:
                    message.username = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetUserByUsername, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string username = 1; */
        if (message.username !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.username);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message user.GetUserByUsername
 */
export const GetUserByUsername = new GetUserByUsername$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UserResponse$Type extends MessageType<UserResponse> {
    constructor() {
        super("user.UserResponse", [
            { no: 1, name: "user", kind: "message", T: () => User }
        ]);
    }
    create(value?: PartialMessage<UserResponse>): UserResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<UserResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserResponse): UserResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* user.User user */ 1:
                    message.user = User.internalBinaryRead(reader, reader.uint32(), options, message.user);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UserResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* user.User user = 1; */
        if (message.user)
            User.internalBinaryWrite(message.user, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message user.UserResponse
 */
export const UserResponse = new UserResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Empty$Type extends MessageType<Empty> {
    constructor() {
        super("user.Empty", []);
    }
    create(value?: PartialMessage<Empty>): Empty {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<Empty>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Empty): Empty {
        return target ?? this.create();
    }
    internalBinaryWrite(message: Empty, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message user.Empty
 */
export const Empty = new Empty$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAllUsersResponse$Type extends MessageType<GetAllUsersResponse> {
    constructor() {
        super("user.GetAllUsersResponse", [
            { no: 1, name: "users", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => User }
        ]);
    }
    create(value?: PartialMessage<GetAllUsersResponse>): GetAllUsersResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.users = [];
        if (value !== undefined)
            reflectionMergePartial<GetAllUsersResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAllUsersResponse): GetAllUsersResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated user.User users */ 1:
                    message.users.push(User.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetAllUsersResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated user.User users = 1; */
        for (let i = 0; i < message.users.length; i++)
            User.internalBinaryWrite(message.users[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message user.GetAllUsersResponse
 */
export const GetAllUsersResponse = new GetAllUsersResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateUserRequest$Type extends MessageType<CreateUserRequest> {
    constructor() {
        super("user.CreateUserRequest", [
            { no: 1, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "password", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "email", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "first_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "last_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "date_of_birth", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "phone_number", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "profile_picture", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "bio", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<CreateUserRequest>): CreateUserRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.username = "";
        message.password = "";
        message.email = "";
        message.firstName = "";
        message.lastName = "";
        message.dateOfBirth = "";
        message.address = "";
        message.phoneNumber = "";
        message.profilePicture = "";
        message.bio = "";
        if (value !== undefined)
            reflectionMergePartial<CreateUserRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateUserRequest): CreateUserRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string username */ 1:
                    message.username = reader.string();
                    break;
                case /* string password */ 2:
                    message.password = reader.string();
                    break;
                case /* string email */ 3:
                    message.email = reader.string();
                    break;
                case /* string first_name */ 4:
                    message.firstName = reader.string();
                    break;
                case /* string last_name */ 5:
                    message.lastName = reader.string();
                    break;
                case /* string date_of_birth */ 6:
                    message.dateOfBirth = reader.string();
                    break;
                case /* string address */ 7:
                    message.address = reader.string();
                    break;
                case /* string phone_number */ 8:
                    message.phoneNumber = reader.string();
                    break;
                case /* string profile_picture */ 9:
                    message.profilePicture = reader.string();
                    break;
                case /* string bio */ 10:
                    message.bio = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CreateUserRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string username = 1; */
        if (message.username !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.username);
        /* string password = 2; */
        if (message.password !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.password);
        /* string email = 3; */
        if (message.email !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.email);
        /* string first_name = 4; */
        if (message.firstName !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.firstName);
        /* string last_name = 5; */
        if (message.lastName !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.lastName);
        /* string date_of_birth = 6; */
        if (message.dateOfBirth !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.dateOfBirth);
        /* string address = 7; */
        if (message.address !== "")
            writer.tag(7, WireType.LengthDelimited).string(message.address);
        /* string phone_number = 8; */
        if (message.phoneNumber !== "")
            writer.tag(8, WireType.LengthDelimited).string(message.phoneNumber);
        /* string profile_picture = 9; */
        if (message.profilePicture !== "")
            writer.tag(9, WireType.LengthDelimited).string(message.profilePicture);
        /* string bio = 10; */
        if (message.bio !== "")
            writer.tag(10, WireType.LengthDelimited).string(message.bio);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message user.CreateUserRequest
 */
export const CreateUserRequest = new CreateUserRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateUserRequest$Type extends MessageType<UpdateUserRequest> {
    constructor() {
        super("user.UpdateUserRequest", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "email", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "first_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "last_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "date_of_birth", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "phone_number", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "profile_picture", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "bio", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "is_active", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "is_admin", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<UpdateUserRequest>): UpdateUserRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = 0;
        message.username = "";
        message.email = "";
        message.firstName = "";
        message.lastName = "";
        message.dateOfBirth = "";
        message.address = "";
        message.phoneNumber = "";
        message.profilePicture = "";
        message.bio = "";
        message.isActive = false;
        message.isAdmin = false;
        if (value !== undefined)
            reflectionMergePartial<UpdateUserRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateUserRequest): UpdateUserRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 id */ 1:
                    message.id = reader.int32();
                    break;
                case /* string username */ 2:
                    message.username = reader.string();
                    break;
                case /* string email */ 3:
                    message.email = reader.string();
                    break;
                case /* string first_name */ 4:
                    message.firstName = reader.string();
                    break;
                case /* string last_name */ 5:
                    message.lastName = reader.string();
                    break;
                case /* string date_of_birth */ 6:
                    message.dateOfBirth = reader.string();
                    break;
                case /* string address */ 7:
                    message.address = reader.string();
                    break;
                case /* string phone_number */ 8:
                    message.phoneNumber = reader.string();
                    break;
                case /* string profile_picture */ 9:
                    message.profilePicture = reader.string();
                    break;
                case /* string bio */ 10:
                    message.bio = reader.string();
                    break;
                case /* bool is_active */ 11:
                    message.isActive = reader.bool();
                    break;
                case /* bool is_admin */ 12:
                    message.isAdmin = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UpdateUserRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).int32(message.id);
        /* string username = 2; */
        if (message.username !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.username);
        /* string email = 3; */
        if (message.email !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.email);
        /* string first_name = 4; */
        if (message.firstName !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.firstName);
        /* string last_name = 5; */
        if (message.lastName !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.lastName);
        /* string date_of_birth = 6; */
        if (message.dateOfBirth !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.dateOfBirth);
        /* string address = 7; */
        if (message.address !== "")
            writer.tag(7, WireType.LengthDelimited).string(message.address);
        /* string phone_number = 8; */
        if (message.phoneNumber !== "")
            writer.tag(8, WireType.LengthDelimited).string(message.phoneNumber);
        /* string profile_picture = 9; */
        if (message.profilePicture !== "")
            writer.tag(9, WireType.LengthDelimited).string(message.profilePicture);
        /* string bio = 10; */
        if (message.bio !== "")
            writer.tag(10, WireType.LengthDelimited).string(message.bio);
        /* bool is_active = 11; */
        if (message.isActive !== false)
            writer.tag(11, WireType.Varint).bool(message.isActive);
        /* bool is_admin = 12; */
        if (message.isAdmin !== false)
            writer.tag(12, WireType.Varint).bool(message.isAdmin);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message user.UpdateUserRequest
 */
export const UpdateUserRequest = new UpdateUserRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteUserRequest$Type extends MessageType<DeleteUserRequest> {
    constructor() {
        super("user.DeleteUserRequest", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<DeleteUserRequest>): DeleteUserRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = 0;
        if (value !== undefined)
            reflectionMergePartial<DeleteUserRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteUserRequest): DeleteUserRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 id */ 1:
                    message.id = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: DeleteUserRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).int32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message user.DeleteUserRequest
 */
export const DeleteUserRequest = new DeleteUserRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteUserResponse$Type extends MessageType<DeleteUserResponse> {
    constructor() {
        super("user.DeleteUserResponse", [
            { no: 1, name: "success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<DeleteUserResponse>): DeleteUserResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.success = false;
        if (value !== undefined)
            reflectionMergePartial<DeleteUserResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteUserResponse): DeleteUserResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool success */ 1:
                    message.success = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: DeleteUserResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool success = 1; */
        if (message.success !== false)
            writer.tag(1, WireType.Varint).bool(message.success);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message user.DeleteUserResponse
 */
export const DeleteUserResponse = new DeleteUserResponse$Type();
/**
 * @generated ServiceType for protobuf service user.UserService
 */
export const UserService = new ServiceType("user.UserService", [
    { name: "Index", options: {}, I: Empty, O: GetAllUsersResponse },
    { name: "Get", options: {}, I: GetUserByUsername, O: UserResponse },
    { name: "Store", options: {}, I: CreateUserRequest, O: UserResponse },
    { name: "Patch", options: {}, I: UpdateUserRequest, O: UserResponse },
    { name: "Delete", options: {}, I: DeleteUserRequest, O: DeleteUserResponse }
]);
