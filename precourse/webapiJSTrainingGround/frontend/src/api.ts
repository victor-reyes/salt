const BASE_URL = 'http://localhost:3000/api/developers';

const getAllDevs = async () => {
  const response = await fetch(BASE_URL);
  const json = await response.json();
  return json;
};

const getDevById = async (id: number) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  const json = await response.json();
  return json;
};

export const api = {
  getAllDevs,
  getDevById,
};
