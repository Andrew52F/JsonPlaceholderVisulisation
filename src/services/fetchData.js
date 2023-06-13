/* eslint-disable no-promise-executor-return */
import axios from 'axios';

const delay = (time) => new Promise((res) => setTimeout(res, time));

const getJSONPlaceholderData = async (endpoint, params) => {
  const request = await axios.get(`https://jsonplaceholder.typicode.com/${endpoint}`, { params });
  await delay(500);
  return request;
};

export default getJSONPlaceholderData;
