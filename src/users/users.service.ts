// src/users/users.service.ts

/**
 * Data Model Interfaces
 */
import { NewUser, BaseUser, User } from "./user.interface";
import { Users } from "./users.interface";
import * as jwt from "jsonwebtoken";

/**
 * In-Memory Store
 */
let users: Users = {
  1: {
    id: 1,
    name: "John",
    email: "john@email.com",
    password: "123"
  },
  2: {
    id: 2,
    name: "Jane",
    email: "jane@email.com",
    password: "321"
  },
  3: {
    id: 3,
    name: "Maria",
    email: "maria@email.com",
    password: "abc"
  }
};

/**
 * Service Methods
 */
export const findAll = async (): Promise<User[]> => Object.values(users);

export const find = async (id: number): Promise<User> => users[id];

export const create = async (newUser: BaseUser): Promise<NewUser> => {
  const id = new Date().valueOf();

  users[id] = {
    id,
    ...newUser,
  };

  const token: string = process.env.TOKEN_SECRET as string;
  function generateAccessToken(username: string) {
    return jwt.sign({username: username}, token, { expiresIn: '1800s'});
  }

  const generatedToken: string = generateAccessToken(users[id].email);

  const createdUser = {
    id,
    token: generatedToken,
    ...newUser
  }

  //return users[id];
  return createdUser;
};

export const update = async (
  id: number,
  userUpdate: BaseUser
): Promise<User | null> => {
  const user = await find(id);

  if (!user) {
    return null;
  }

  users[id] = { id, ...userUpdate };

  return users[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const user = await find(id);

  if (!user) {
    return null;
  }

  delete users[id];
};