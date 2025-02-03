import { ClientData, ProjectData } from './types'  // We'll create this next

export async function getClientByUrl(clientUrl: string) {
  const response = await fetch(
    `https://zaiko-server.vercel.app/api/clients/url/${clientUrl}`,
    {
      next: { revalidate: 3600 }
    }
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch client data');
  }
  
  return response.json() as Promise<ClientData>;
}

export async function getProjectByName(projectName: string) {
  const response = await fetch(
    `https://zaiko-server.vercel.app/api/projects/${projectName}`,
    {
      next: { revalidate: 3600 }
    }
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch project data');
  }
  
  return response.json() as Promise<ProjectData>;
}