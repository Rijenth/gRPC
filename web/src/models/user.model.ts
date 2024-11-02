import { ConvertPhoneNumberToHumanReadable } from "../composables/ConvertPhoneNumberToHumanReadable";
import { ConvertTimestampToHumanReadable } from "../composables/ConvertTimestampToHumanReadable";
import { Timestamp } from "../generated/google/protobuf/timestamp";
import { User } from "../generated/user";

export default class UserModel implements User {
  public id: number;
  public username: string;
  public email: string;
  public firstName: string;
  public lastName: string;
  public dateOfBirth?: Timestamp;
  public address: string;
  public phoneNumber: string;
  public createdAt?: Timestamp;
  public updatedAt?: Timestamp;
  public lastLogin?: Timestamp;
  public isActive: boolean;
  public isAdmin: boolean;
  public profilePicture: string;
  public bio: string;

  constructor(user: User) {
    this.id = user.id;
    this.username = user.username;
    this.email = user.email;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.dateOfBirth = user.dateOfBirth;
    this.address = user.address;
    this.phoneNumber = user.phoneNumber;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
    this.lastLogin = user.lastLogin;
    this.isActive = user.isActive;
    this.isAdmin = user.isAdmin;
    this.profilePicture = user.profilePicture;
    this.bio = user.bio;
  }

  public getDateOfBirth(): string {
    return ConvertTimestampToHumanReadable(this.dateOfBirth);
  }

  public getCreatedAt(): string {
    return ConvertTimestampToHumanReadable(this.createdAt);
  }

  public getUpdatedAt(): string {
    return ConvertTimestampToHumanReadable(this.updatedAt);
  }

  public getLastLogin(): string {
    return ConvertTimestampToHumanReadable(this.lastLogin);
  }

  public getPhoneNumber(): string {
    return ConvertPhoneNumberToHumanReadable(this.phoneNumber);
  }
}
