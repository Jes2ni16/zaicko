import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Divider } from '@mui/material';
import Image from 'next/image';

interface ProjectCardProps {
  data: {
    title: string;
    description: string;
    image: string;
    link: string;
  };
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        maxWidth: 345,
        boxShadow: 3,
      }}
    >
  <div style={{ position: 'relative', width: '100%', height: 240 }}>
        <Image
          src={data.image}
          alt={data.title}
          width={345}  
          height={240} 
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" 
          style={{
            objectFit: 'cover', 
          }} 
        />
      </div>
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <Typography variant="h5" component="h1">
          {data.title}
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {data.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', display: 'flex' }}>
        <Button
          size="small"
          href={data.link}
          sx={{
            backgroundColor: '#0E6543',
            color: '#fff',
            padding: '10px',
            '&:hover': {
              backgroundColor: '#0a4d32',
            },
          }}
        >
          Project Details
        </Button>
      </CardActions>
    </Card>
  );
};