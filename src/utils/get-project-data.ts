export async function getProjectData(projectName: string) {
  const response = await fetch(`https://pm25.lass-net.org/API-1.0.0/project/${projectName}/latest/`);

  if(!response.ok) {
    throw new Error('Failed to fetch project details');
  }

  const data = response.json();

  return data;
}