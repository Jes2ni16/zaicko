'use client';

import React, { useState } from 'react';
import { Container, TextField, Button, Grid, Typography } from '@mui/material';
import axios from 'axios';

interface LocationDescription {
  title: string;
  ul: string[];
}

interface Location {
  locationText: string;
  descriptions: LocationDescription[];
  img: string;
}

interface ProjectDetails {
  ul: string[];
  imgs: string[];
}

interface AmenitiesFacilities {
  description: string;
  ul: string[];
  imgs: string[];
}

interface UnitDetail {
  title: string;
  ul: string[];
  imgs: string[];
}

interface UnitDetails {
  text: string;
  details: UnitDetail[];
}

interface SiteUpdate {
  title: string;
  imgs: string[];
}

interface FormData {
  title: string;
  projectUrl: string;
  description: string;
  location: Location;
  projectDetails: ProjectDetails;
  amenitiesFacilities: AmenitiesFacilities;
  unitDetails: UnitDetails;
  siteUpdate: SiteUpdate;
}

const CreateProperty: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    projectUrl: '',
    description: '',
    location: { locationText: '', descriptions: [{ title: '', ul: [''] }, { title: '', ul: [''] }, { title: '', ul: [''] }, { title: '', ul: [''] }], img: '' },
    projectDetails: { ul: [''], imgs: [''] },
    amenitiesFacilities: { description: '', ul: [''], imgs: [''] },
    unitDetails: { text: '', details: [{ title: '', ul: [''], imgs: [''] }, { title: '', ul: [''], imgs: [''] }, { title: '', ul: [''], imgs: [''] }] },
    siteUpdate: { title: '', imgs: [''] },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    // Check if the name includes a period (this indicates a nested field)
    if (name.includes('.')) {
      const [mainKey, subKey] = name.split('.');
  
      setFormData((prev) => {
        if (mainKey === 'location') {
          return {
            ...prev,
            location: {
              ...prev.location,
              [subKey]: value, // This updates the nested field (e.g., locationText)
            },
          };
        }
        return {
          ...prev,
          [name]: value, // For non-nested fields
        };
      });
    } else {
      // For non-nested fields, update normally
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handleLocationDescriptionChange = (index: number, field: 'title' | 'ul', value: string | string[]) => {
    const newDescriptions = [...formData.location.descriptions];
    if (field === 'title') {
      newDescriptions[index].title = value as string;
    } else if (field === 'ul') {
      newDescriptions[index].ul = Array.isArray(value) ? value : value.split(',');
    }
    setFormData((prev) => ({
      ...prev,
      location: { ...prev.location, descriptions: newDescriptions },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('https://zaiko-server.vercel.app/api/projects', formData, {
        headers: {
          'Content-Type': 'application/json', // Ensure the content type is JSON
        },
      });
      alert('Property created successfully!');
    } catch (error) {
      console.error('Error creating property:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add New Property
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* Basic Fields */}
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Project URL"
              name="projectUrl"
              value={formData.projectUrl}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>

          {/* Location Text */}
          <Grid item xs={12} sm={6} md={4}>
          <TextField
  label="Location Text"
  name="location.locationText" // This should reference locationText inside location object
  value={formData.location.locationText}
  onChange={handleChange} // This will update formData.location.locationText
  fullWidth
  margin="normal"
/>
          </Grid>

          {/* Location Descriptions */}
          {formData.location.descriptions.map((desc, index) => (
            <React.Fragment key={index}>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label={`Location Description Title ${index + 1}`}
                  name={`locationTitle${index + 1}`}
                  value={desc.title}
                  onChange={(e) => handleLocationDescriptionChange(index, 'title', e.target.value)}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={12}>
                <TextField
                  label={`Location Description UL ${index + 1}`}
                  name={`locationUL${index + 1}`}
                  value={desc.ul.join(', ')}
                  onChange={(e) => handleLocationDescriptionChange(index, 'ul', e.target.value)}
                  fullWidth
                  margin="normal"
                />
              </Grid>
            </React.Fragment>
          ))}

          {/* Project Details */}
          <Grid item xs={12} sm={6} md={12}>
            <TextField
              label="Project Details UL"
              name="projectDetailsUL"
              value={formData.projectDetails.ul.join(', ')}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  projectDetails: { ...prev.projectDetails, ul: e.target.value.split(',') },
                }))
              }
              fullWidth
              margin="normal"
            />
          </Grid>

          {/* Amenities & Facilities */}
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Amenities & Facilities Description"
              name="amenitiesFacilitiesDescription"
              value={formData.amenitiesFacilities.description}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  amenitiesFacilities: { ...prev.amenitiesFacilities, description: e.target.value },
                }))
              }
              fullWidth
              margin="normal"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Amenities & Facilities UL"
              name="amenitiesFacilitiesUL"
              value={formData.amenitiesFacilities.ul.join(', ')}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  amenitiesFacilities: { ...prev.amenitiesFacilities, ul: e.target.value.split(',') },
                }))
              }
              fullWidth
              margin="normal"
            />
          </Grid>

          {/* Unit Details */}
          {formData.unitDetails.details.map((detail, index) => (
            <React.Fragment key={index}>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label={`Unit Detail Title ${index + 1}`}
                  name={`unitDetailTitle${index + 1}`}
                  value={detail.title}
                  onChange={(e) =>
                    setFormData((prev) => {
                      const newDetails = [...prev.unitDetails.details];
                      newDetails[index].title = e.target.value;
                      return { ...prev, unitDetails: { ...prev.unitDetails, details: newDetails } };
                    })
                  }
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label={`Unit Detail UL ${index + 1}`}
                  name={`unitDetailUL${index + 1}`}
                  value={detail.ul.join(', ')}
                  onChange={(e) =>
                    setFormData((prev) => {
                      const newDetails = [...prev.unitDetails.details];
                      newDetails[index].ul = e.target.value.split(',');
                      return { ...prev, unitDetails: { ...prev.unitDetails, details: newDetails } };
                    })
                  }
                  fullWidth
                  margin="normal"
                />
              </Grid>
            </React.Fragment>
          ))}

          {/* Site Update */}
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Site Update Title"
              name="siteUpdateTitle"
              value={formData.siteUpdate.title}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  siteUpdate: { ...prev.siteUpdate, title: e.target.value },
                }))
              }
              fullWidth
              margin="normal"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Site Update Images"
              name="siteUpdateImgs"
              value={formData.siteUpdate.imgs.join(', ')}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  siteUpdate: { ...prev.siteUpdate, imgs: e.target.value.split(',') },
                }))
              }
              fullWidth
              margin="normal"
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Create Property
        </Button>
      </form>
    </Container>
  );
};

export default CreateProperty;
