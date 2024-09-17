const BASE_URL = 'http://localhost:3000/api/developers';

type Dev = {
  id: number;
  name: string;
  email: string;
};
const getAllDevs = async () => {
  const response = await fetch(BASE_URL);
  const devs: Dev[] = await response.json();
  return devs;
};

const deleteDev = async (id: number) => {
  const response = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });

  if (!response.ok)
    throw new Error(`Failed to delete developer with error ${response.status} because of ${response.statusText}`);

  return response.status;
};

const addDev = async (name: string, email: string) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email }),
  });

  if (!response.ok)
    throw new Error(`Failed to add developer with error ${response.status} because of ${response.statusText}`);

  return (await response.json()) as Dev;
};

const updateDev = async (dev: Dev) => {
  const response = await fetch(`${BASE_URL}/${dev.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: dev.name, email: dev.email }),
  });

  if (!response.ok)
    throw new Error(`Failed to update developer with error ${response.status} because of ${response.statusText}`);

  return (await response.json()) as Dev;
};

export const api = {
  getAllDevs,
  deleteDev,
  addDev,
  updateDev,
};
