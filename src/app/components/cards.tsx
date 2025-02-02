import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Grid, CardMedia, Divider } from '@mui/material';

interface CardData {
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

const projectAliasMap: { [key: string]: string } = {
  'deca-banilad': 'URBAN DECA HOMES',
  mandtra: 'MANDTRA RESIDENCES',
  'prime-lapu': 'PRIMEWORLD DISTRICT',
  'lemenda-busay': 'Le Menda-Busay',
  'primeworld-pointe': 'PRIMEWORLD POINTE LAHUG',
};


const cardData: CardData[] = [
  {
    title: 'MANDTRA RESIDENCES',
    description: 'Mandtra Residences sets the standard of Cebuano Living at the heart of its industrial heritage.',
    image: 'https://i.imgur.com/6jjNq8v.jpg', 
    link: 'featured/mandtra'
  },
  {
    title: 'URBAN DECA HOMES',
    description: 'Enjoy urban living within the business district of Mandaue City. Homeowners have close and easy access to malls, universities, churches, a hospital, international airport, as well as business and commercial districts in the metro.',
    image: 'https://i.imgur.com/ge2cJUG.jpg', 
    link: 'featured/urban-deca-mandaue'
  },
  {
    title: 'PRIMEWORLD DISTRICT',
    description: 'At Primeworld District, residents don’t have to leave home to enjoy summer activities. Facilities to match any premium resort are found on the amenity area, promising outdoor fun all year round.',
    image: 'https://i.imgur.com/E6f9qeu.jpg', 
    link: 'featured/primeworld-district'
  },
  {
    title: 'Le Menda-Busay',
    description: 'Le Menda Residences is a luxurious residential development located in Busay, Cebu, Philippines. Situated in the picturesque mountains of Cebu, it offers residents breathtaking views of the city skyline and the surrounding natural beauty.',
    image: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171260/8g0sKQZ_xjltap.webp', 
    link: 'featured/le-menda-busay'
  },
  {
    title: 'PRIMEWORLD POINTE LAHUG',
    description: 'Primeworld believes that every Filipino deserves a good life, starting with a good home. We have made it our mission to develop quality homes in safe communities where Filipinos can thrive and live a good life.',
    image: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738173933/270301887_461699735341168_9135717747189606447_n_jhr9e4.jpg', 
    link: 'featured/primeworld-pointe'
  }
];

const CardList:  React.FC<CardListProps> = ({ client }) => {
  if (!client || !client.projects || client.projects.length === 0) {
    return <Typography>No projects found.</Typography>;
  }
  const filteredCards = cardData.filter((card) =>
    client.projects.some((alias) =>
      projectAliasMap[alias]?.toUpperCase() === card.title.toUpperCase()
    )
  );
  return (
    <Grid container spacing={3} justifyContent="center">
      {filteredCards.map((data, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={index}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
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
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start', // Aligns title and description to the top
              }}
            >
              <Typography variant="h5" component="h1">
                {data.title}
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1 }}
              >
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
                }}
              >
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
