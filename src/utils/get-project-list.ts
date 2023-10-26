export async function getProjectList() {
  const response = await fetch('https://pm25.lass-net.org/API-1.0.0/project/all/');

  if(!response.ok) {
    throw new Error('Failed to fetch projects');
  }

  const data = response.text();

  return data;
}