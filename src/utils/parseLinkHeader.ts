/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line max-len

export const getPagesCount = (linkString: string): number | null => {
  const matchLast = linkString.match(/<([^>]+)>;\s*rel="last"/g);
  if (matchLast && matchLast.length) {
    const link = matchLast[0].split(';')[0].slice(1, -1);
    const url = new URL(link);
    const pageValue = url.searchParams.get('_page');
    if (pageValue !== null) {
      return Number(pageValue);
    }
  }
  return null;
};
