

import {   Grid, } from '@mui/material';
import { ProjectCard } from './ProjectCard';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}
interface Client {
  projects: string[];
}
interface CardListProps {
  client: Client; 
}


async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch('http://localhost:3000/projects.json');

    // Log the response to see its status and headers
    console.log('Response status:', response.status);
    if (!response.ok) {
      throw new Error(`Failed to fetch projects. Status: ${response.status}`);
    }

    const data = await response.json();
    return data.projects; // Assuming the JSON has a "projects" field
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}
const CardList:  React.FC<CardListProps> = async({ client }) => {

  const projects = await fetchProjects(); // Fetch project data
  const filteredProjects = projects.filter((project) =>
    client.projects.includes(project.id)
  );


  return (
    <Grid container spacing={3} justifyContent="center">
      {filteredProjects.map((project) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={project.id}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <ProjectCard data={project} />
        </Grid>
      ))}
    </Grid>
  );
};
export default CardList;
