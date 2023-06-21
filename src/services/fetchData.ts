/* eslint-disable max-len */
/* eslint-disable no-promise-executor-return */
import axios from 'axios';
import {
  IUserInfoRaw, IComment, IPost, FetchResponse,
} from '../types';

const delay = (time: number) => new Promise((res) => setTimeout(res, time));

const getJSONPlaceholderData = async (endpoint: string, params: URLSearchParams = new URLSearchParams()): Promise<FetchResponse> => {
  const request = await axios.get<IPost[] | IComment[] | IUserInfoRaw>(`https://jsonplaceholder.typicode.com/${endpoint}`, { params });
  await delay(500);
  return request;
};

export default getJSONPlaceholderData;
