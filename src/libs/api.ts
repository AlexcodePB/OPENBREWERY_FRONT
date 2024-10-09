export async function getBars() {
  const response = await fetch("https://api.openbrewerydb.org/v1/breweries");
  return response.json();
}

export async function getBarsByState(state: string) {
  const response = await fetch(
    `https://api.openbrewerydb.org/v1/breweries?by_state=${state}`
  );
  return response.json();
}

export async function getBarById(id: string) {
  const response = await fetch(
    `https://api.openbrewerydb.org/v1/breweries?by_ids=${id}`
  );
  if (!response.ok) {
    throw new Error("Error fetching bar data");
  }
  return response.json();
}
