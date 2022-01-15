export const apikey = "2bca59506cf5428e88c180cb42f9b6f2";
export const baseurl = "https://newsapi.org/v2";

export const getNewsApi = (countries) => {
  return `${baseurl}/top-headlines?country=${countries}&apiKey=${apikey}`;
};
export const getSourceApi = () => {
  return `${baseurl}/everything?q=everything&apiKey=${apikey}`;
};
