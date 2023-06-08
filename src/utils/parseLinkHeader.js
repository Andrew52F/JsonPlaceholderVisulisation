/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line max-len
// export const getPagesCount = (linkString) => Number(linkString.split(',')[2].match(/\?(.*?)>/)[1].split('&').filter((item) => item.startsWith('_page'))[0].split('=')[1]);

export const getPagesCount = (linkString) => {
  const link = linkString.match(/<([^>]+)>;\s*rel="last"/g)[0].split(';')[0].slice(1, -1);
  const url = new URL(link);
  const pageValue = url.searchParams.get('_page');
  return Number(pageValue);
};
