import * as axios from 'axios';
import { API } from './config';

const getUsers = async function() {
  try {
    const response = await axios.get(`${API}/users`);

    let data = parseList(response);

    return data;
  } catch (err) {
    console.error(err.message);
    return [];
  }
};

const getUser = async function(id) {
  try {
    const response = await axios.get(`${API}/users/${id}`);
    let user = parseItem(response, 200);
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateUser = async function(user) {
  try {
    const response = await axios.put(`${API}/users/${user.id}`, user);
    const updatedUser = parseItem(response, 200);
    return updatedUser;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const parseList = response => {
  if (response.status !== 200) throw Error(response.message);
  if (!response.data) return [];
  let list = response.data;
  if (Array.isArray(list) == false) {
    list = [];
  }
  return list;
};

export const parseItem = (response, code) => {
  if (response.status !== code) throw Error(response.message);
  let item = response.data;
  if (item != null && Array.isArray(item) == false && typeof item != 'object') {
    item = undefined;
  }
  return item;
};

export const dataService = {
  getUsers,
  getUser,
  updateUser,
};
