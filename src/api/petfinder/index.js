export const getPets = async (type = '', query = '') => {
  const searchParams = new URLSearchParams({ type, query });
  const requestUrl = `/petadopter/animals?${searchParams.toString()}`;

  const response = await fetch(requestUrl, {
    method: 'GET'
  });

  const json = await response.json();

  return json;
};

export const getPetDetails = async (id) => {
  const requestUrl = `/petadopter/animals/${id}`;
  const response = await fetch(requestUrl, {
    method: 'GET'
  });

  const json = await response.json();

  return json;
};

export const getPetTypes = async () => {
  const requestUrl = `/petadopter/types`;
  const response = await fetch(requestUrl, {
    method: 'GET'
  });

  const json = await response.json();

  return json;
};
