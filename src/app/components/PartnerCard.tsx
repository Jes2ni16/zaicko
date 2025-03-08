import React from 'react';
import { Card, CardContent, Typography, Button, CardMedia } from '@mui/material';

const PartnershipCard = ({ partner }) => {
  return (
    <Card sx={{ maxWidth: 500, margin: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image={partner.logo}
        alt={partner.name}
      />
      <CardContent>
        <Typography variant="h6">{partner.name}</Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {partner.description}
        </Typography>
        <Button size="small" color="primary" href={partner.link}>
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default PartnershipCard;
