/* eslint-disable import/prefer-default-export */
export const getPathName = () => window.location.pathname;
export const getParameters = () => {
  const search = window.location.search.substring(1);
  return JSON.parse(`{"${decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`);
};
