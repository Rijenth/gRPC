import { UserType } from "../types/user.type";

export default class User {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    address: string;
    phoneNumber: string;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
    profilePicture: string;
    bio: string;

    constructor(data: UserType) {
        this.id = data.id;
        this.username = data.username;
        this.email = data.email;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.dateOfBirth = new Date(data.dateOfBirth);
        this.address = data.address;
        this.phoneNumber = data.phoneNumber;
        this.createdAt = new Date(data.createdAt);
        this.updatedAt = new Date(data.updatedAt);
        this.isActive = data.isActive;
        this.profilePicture = data.profilePicture;
        this.bio = data.bio;
    }
}