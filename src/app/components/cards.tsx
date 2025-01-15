import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Grid, CardMedia, Divider } from '@mui/material';

interface CardData {
  title: string;
  description: string;
  image: string;
  link: string;
}

const cardData: CardData[] = [
  {
    title: 'MANDTRA RESIDENCES',
    description: 'Mandtra Residences sets the standard of Cebuano Living at the heart of its industrial heritage.',
    image: 'https://i.imgur.com/6jjNq8v.jpg', // Replace with your image URL
    link: '#'
  },
  {
    title: 'URBAN DECA HOMES',
    description: 'Enjoy urban living within the business district of Mandaue City. Homeowners have close and easy access to malls, universities, churches, a hospital, international airport, as well as business and commercial districts in the metro.',
    image: 'https://i.imgur.com/ge2cJUG.jpg', // Replace with your image URL
    link: '#'
  },
  {
    title: 'PRIMEWORLD DISTRICT',
    description: 'At Primeworld District, residents don’t have to leave home to enjoy summer activities. Facilities to match any premium resort are found on the amenity area, promising outdoor fun all year round.',
    image: 'https://i.imgur.com/E6f9qeu.jpg', 
    link: '#'
  }
];

const CardList: React.FC = () => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {cardData.map((data, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              maxWidth: 345,
              boxShadow: 3,
            }}
          >
            {/* Card Image */}
            <CardMedia
              component="img"
              height="240"
              image={data.image}
              alt={data.title}
            />
            <CardContent
              sx={{
                flexGrow: 1, // Ensures this section stretches to fill space equally
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start", // Aligns title and description to the top
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
            <CardActions sx={{justifyContent:'center',display:'flex'}}>
              <Button size="small" href={data.link} sx={{backgroundColor:'#0E6543', color:'#fff', padding:'10px',}}>
                Project Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
export default CardList;
