import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Typography, TextField, Button } from '@mui/material';

// Define the types for the schema
interface FormData {
  title: string;
  description: string;
  locationDescription1Title: string;
  locationDescription1Ul: string;
  locationDescription2Title: string;
  locationDescription2Ul: string;
  locationDescription3Title: string;
  locationDescription3Ul: string;
  locationDescription4Title: string;
  locationDescription4Ul: string;
  locationImg: string;
  projectDetailsUl: string;
  projectDetailsImgs: string;
  amenitiesFacilitiesDescription: string;
  amenitiesFacilitiesUl: string;
  amenitiesFacilitiesImgs: string;
  unitDetailsText: string;
  unitDetailsDetails1Title: string;
  unitDetailsDetails1Ul: string;
  unitDetailsDetails1Imgs: string;
  unitDetailsDetails2Title: string;
  unitDetailsDetails2Ul: string;
  unitDetailsDetails2Imgs: string;
  unitDetailsDetails3Title: string;
  unitDetailsDetails3Ul: string;
  unitDetailsDetails3Imgs: string;
  siteUpdateTitle: string;
  siteUpdateImgs: string;
}

const CreateProperty: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    locationDescription1Title: '',
    locationDescription1Ul: '',
    locationDescription2Title: '',
    locationDescription2Ul: '',
    locationDescription3Title: '',
    locationDescription3Ul: '',
    locationDescription4Title: '',
    locationDescription4Ul: '',
    locationImg: '',
    projectDetailsUl: '',
    projectDetailsImgs: '',
    amenitiesFacilitiesDescription: '',
    amenitiesFacilitiesUl: '',
    amenitiesFacilitiesImgs: '',
    unitDetailsText: '',
    unitDetailsDetails1Title: '',
    unitDetailsDetails1Ul: '',
    unitDetailsDetails1Imgs: '',
    unitDetailsDetails2Title: '',
    unitDetailsDetails2Ul: '',
    unitDetailsDetails2Imgs: '',
    unitDetailsDetails3Title: '',
    unitDetailsDetails3Ul: '',
    unitDetailsDetails3Imgs: '',
    siteUpdateTitle: '',
    siteUpdateImgs: '',
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Send a POST request to the backend API
    await fetch('/api/properties', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    // Redirect to the property list page after creation
    router.push('/');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add New Property
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Basic Property Information */}
        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        {/* Location Fields */}
        <TextField
          label="Location Description 1 Title"
          name="locationDescription1Title"
          value={formData.locationDescription1Title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Location Description 1 UL"
          name="locationDescription1Ul"
          value={formData.locationDescription1Ul}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Location Description 2 Title"
          name="locationDescription2Title"
          value={formData.locationDescription2Title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Location Description 2 UL"
          name="locationDescription2Ul"
          value={formData.locationDescription2Ul}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Location Description 3 Title"
          name="locationDescription3Title"
          value={formData.locationDescription3Title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Location Description 3 UL"
          name="locationDescription3Ul"
          value={formData.locationDescription3Ul}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Location Description 4 Title"
          name="locationDescription4Title"
          value={formData.locationDescription4Title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Location Description 4 UL"
          name="locationDescription4Ul"
          value={formData.locationDescription4Ul}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Location Image URL"
          name="locationImg"
          value={formData.locationImg}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        {/* Project Details */}
        <TextField
          label="Project Details UL"
          name="projectDetailsUl"
          value={formData.projectDetailsUl}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Project Details Image URLs"
          name="projectDetailsImgs"
          value={formData.projectDetailsImgs}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        {/* Amenities and Facilities */}
        <TextField
          label="Amenities Facilities Description"
          name="amenitiesFacilitiesDescription"
          value={formData.amenitiesFacilitiesDescription}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Amenities Facilities UL"
          name="amenitiesFacilitiesUl"
          value={formData.amenitiesFacilitiesUl}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Amenities Facilities Images"
          name="amenitiesFacilitiesImgs"
          value={formData.amenitiesFacilitiesImgs}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        {/* Unit Details */}
        <TextField
          label="Unit Details Text"
          name="unitDetailsText"
          value={formData.unitDetailsText}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        {/* Details 1 */}
        <TextField
          label="Unit Details 1 Title"
          name="unitDetailsDetails1Title"
          value={formData.unitDetailsDetails1Title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Unit Details 1 UL"
          name="unitDetailsDetails1Ul"
          value={formData.unitDetailsDetails1Ul}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Unit Details 1 Images"
          name="unitDetailsDetails1Imgs"
          value={formData.unitDetailsDetails1Imgs}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        {/* Repeat for Details 2 and 3 similar to the above */}

        {/* Site Update */}
        <TextField
          label="Site Update Title"
          name="siteUpdateTitle"
          value={formData.siteUpdateTitle}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Site Update Images"
          name="siteUpdateImgs"
          value={formData.siteUpdateImgs}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Add Property
        </Button>
      </form>
    </Container>
  );
};

export default CreateProperty;
