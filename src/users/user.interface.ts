export interface BaseUser {
    name: string;
    email: string;
    password: string;
}

export interface User extends BaseUser {
    id: number;
}

export interface NewUser extends BaseUser {
    id: number;
    token: string;
}