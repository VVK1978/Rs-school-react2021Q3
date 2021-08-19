import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://the-one-api.dev/v2',
  timeout: 5000,
});

const headersConfig = {
  Accept: 'application/json',
  Authorization: `${process.env.REACT_APP_API_KEY}`,
};

const getSearchCharacters = async (data) => {
  const request = `/character?name=/${data.searchValue}/i&limit=${data.perPage}&page=${data.currentPage}&sort=${data.sortBy}:${data.sortDirection}`;
  try {
    return await axiosInstance
      .get(request, {
        headers: headersConfig,
      })
      .then((response) => response.data);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return false;
  }
};

export default getSearchCharacters;
