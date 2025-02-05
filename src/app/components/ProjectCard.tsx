import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, CardMedia, Divider } from '@mui/material';


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
      <CardMedia
        component="img"
        height="240"
        image={data.image}
        alt={data.title}
      />
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