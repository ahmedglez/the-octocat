import { urlFetch } from '../constants';

const fetchUsers = async (user) => {
    const response = await fetch(`${urlFetch}${user}`, {
    method: 'GET',
  });
  const data = await response.json();
  return data;
};

export { fetchUsers };
