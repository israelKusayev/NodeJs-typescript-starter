import { hashPassword } from './../utils/common';

export function getUserByEmail(email: string) {
  // TODO: Remove fake data, and go to db and get the real user
  return Promise.resolve({ id: '123', email, password: '1234' });
}

export function getUserById(id: string) {
  // TODO: Remove fake data, and go to db and get the real user
  return Promise.resolve({ id, email: 'fake@mock.com', password: '1234' });
}

export async function create(user: { email: string; password: string }) {
  user.password = await hashPassword(user.password);

  // TODO: create the user in db
}
