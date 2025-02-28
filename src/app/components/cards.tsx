'use client';
import React, { useEffect, useState } from 'react';
import { Typography,  Grid, } from '@mui/material';
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




const CardList:  React.FC<CardListProps> = ({ client }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('/projects.json');
        
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
    
        const data = await response.json();
        
        // Make sure the data structure is as expected
        if (!data.projects || !Array.isArray(data.projects)) {
          throw new Error('Invalid project data');
        }
    
        // This filtering is correct - it directly matches project.id with client.projects
        const filteredProjects = data.projects.filter((project: Project) =>
          Array.isArray(client?.projects) && client.projects.includes(project.id)
        );
    
        setProjects(filteredProjects);
      } catch (err) {
        setError('Failed to load projects');
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    if (client?.projects?.length) {
      fetchProjects();
    }
  }, [client]);


  if (loading) {
    return <Typography>Loading projects...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!projects.length) {
    return <Typography>No projects found.</Typography>;
  }

  return (
    <Grid container spacing={3} justifyContent="center">
      {projects.map((project) => (
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
