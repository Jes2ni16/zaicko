'use client';
import React, { useState, ChangeEvent, FormEvent,useEffect } from 'react';
import { TextField, Button, Stack, Typography, Snackbar, Alert } from '@mui/material';
import axios from 'axios';

// Define interfaces for your data structure
interface PropertyData {
  projectUrl: string;
  projectName:string;
  description: string;
  image:string;
  location: { description: string; list: string[]; images: string[] };
  amenities: { description: string; list: string[]; images: string[] };
  building: { description: string; list: string[]; images: string[] };
  house_models: { description: string; list: string[]; images: string[] };
  sample_computation: { description: string; list: string[]; images: string[] };
  deliverables: { description: string; list: string[]; images: string[] };
  requirements:{ description: string; list: string[]; images: string[] };
}

interface PropertyFormProps {
  onSuccess: (message: string) => void; // Function to handle success
  onError: (message: string) => void;  
  propertyId?: string; // Optional property ID for editing
  existingPropertyData?: PropertyData;  // Function to handle error
}

const PropertyForm: React.FC<PropertyFormProps> = ({ onSuccess, onError,  propertyId, 
  existingPropertyData  }) => {
  const [propertyData, setPropertyData] = useState<PropertyData>({
    projectUrl: '',
    description: '',
    projectName:'',
    image:'',
    location: { description: '', list: [], images: [] },
    amenities: { description: '', list: [], images: [] },
    building: { description: '', list: [], images: [] },
    house_models: { description: '', list: [], images: [] },
    sample_computation: { description: '', list: [], images: [] },
    deliverables: { description: '', list: [], images: [] },
   requirements: { description: '', list: [], images: [] },
  });
  
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Control Snackbar visibility
  const [snackbarMessage, setSnackbarMessage] = useState(''); // Snackbar message
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success'); // Snackbar severity


  useEffect(() => {
    if (existingPropertyData) {
      setPropertyData(existingPropertyData);
    }
  }, [existingPropertyData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.includes('.')) {
      const [section, field] = name.split('.');

      // Handle list and images which should be arrays
      if (field === 'list' || field === 'images') {
        const updatedValue = value.split(',').map(item => item.trim()).filter(item => item !== '');
        setPropertyData(prevState => ({
          ...prevState,
          [section]: {
            ...prevState[section],
            [field]: updatedValue,
          },
        }));
      } else {
        setPropertyData(prevState => ({
          ...prevState,
          [section]: {
            ...prevState[section],
            [field]: value,
          },
        }));
      }
    } else {
        setPropertyData(prevState => ({
          ...prevState,
          [name]: value,
        }));
      
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (propertyId) {
        await axios.put(`https://zaiko-server.vercel.app/api/projects/${propertyId}`, propertyData);
        setSnackbarMessage('Property data updated successfully!');
      } else {
        await axios.post('https://zaiko-server.vercel.app/api/projects', propertyData);
        setSnackbarMessage('Property data submitted successfully!');
      }
      setSnackbarSeverity('success');
      setSnackbarOpen(true); // Open Snackbar on success
      onSuccess('Property data submitted/updated successfully!');
    } catch (error) {
      console.error(error);
      const errorMessage = error?.response?.data?.message || 'Error submitting/updating property data.';
      setSnackbarMessage(errorMessage);
      setSnackbarSeverity('error');
      setSnackbarOpen(true); // Open Snackbar on error
      onError(errorMessage);
    }
  };
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false); // Close the Snackbar
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>
        Add New Property
      </Typography>

      <Stack spacing={2}>
        <TextField
          fullWidth
          label="Project URL"
          name="projectUrl"
          value={propertyData.projectUrl}
          onChange={handleChange}
        />
           <TextField
          fullWidth
          label="Project Name"
          name="projectName"
          value={propertyData.projectName}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={propertyData.description}
          onChange={handleChange}
          multiline
          rows={4}
        />

        {/* Location Section */}
        <Typography variant="h6" gutterBottom>Location</Typography>
        <TextField
          fullWidth
          label="Location Description"
          name="location.description"
          value={propertyData.location.description}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Location List (comma separated)"
          name="location.list"
          value={propertyData.location.list.join(', ')}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Location Images (comma separated)"
          name="location.images"
          value={propertyData.location.images.join(', ')}
          onChange={handleChange}
        />

        {/* Amenities*/}
        <Typography variant="h6" gutterBottom>Amenities</Typography>
        <TextField
          fullWidth
          label="Amenity Description"
          name="amenities.description"
          value={propertyData.amenities.description}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Amenity List (comma separated)"
          name="amenities.list"
          value={propertyData.amenities.list.join(', ')}
          onChange={handleChange}
        />
               <TextField
          fullWidth
          label="Amenity Images (comma separated)"
          name="amenities.images"
          value={propertyData.amenities.images.join(', ')}
          onChange={handleChange}
        />

<Typography variant="h6" gutterBottom>Building Features</Typography>
        <TextField
          fullWidth
          label="Building Description"
          name="building.description"
          value={propertyData.building.description}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Building List (comma separated)"
          name="building.list"
          value={propertyData.building.list.join(', ')}
          onChange={handleChange}
        />
               <TextField
          fullWidth
          label="Building Images (comma separated)"
          name="building.images"
          value={propertyData.building.images.join(', ')}
          onChange={handleChange}
        />


<Typography variant="h6" gutterBottom>House Models</Typography>
        <TextField
          fullWidth
          label="House Model Description"
          name="house_models.description"
          value={propertyData.house_models.description}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="House Model List (comma separated)"
          name="house_models.list"
          value={propertyData.house_models.list.join(', ')}
          onChange={handleChange}
        />
               <TextField
          fullWidth
          label="House Model Images (comma separated)"
          name="house_models.images"
          value={propertyData.house_models.images.join(', ')}
          onChange={handleChange}
        />

      {/* Amenities*/}
      <Typography variant="h6" gutterBottom>Sample Computations</Typography>
        <TextField
          fullWidth
          label="Computations Description"
          name="sample_computation.description"
          value={propertyData.sample_computation.description}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Computations List (comma separated)"
          name="sample_computation.list"
          value={propertyData.sample_computation.list.join(', ')}
          onChange={handleChange}
        />
               <TextField
          fullWidth
          label="Computations Images (comma separated)"
          name="sample_computation.images"
          value={propertyData.sample_computation.images.join(', ')}
          onChange={handleChange}
        />

              {/* Amenities*/}
              <Typography variant="h6" gutterBottom>Deliverables</Typography>
        <TextField
          fullWidth
          label="Deliverables Description"
          name="deliverables.description"
          value={propertyData.deliverables.description}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Deliverables List (comma separated)"
          name="deliverables.list"
          value={propertyData.deliverables.list.join(', ')}
          onChange={handleChange}
        />
               <TextField
          fullWidth
          label="Deliverables Images (comma separated)"
          name="deliverables.images"
          value={propertyData.deliverables.images.join(', ')}
          onChange={handleChange}
        />


<Typography variant="h6" gutterBottom>Requirements</Typography>
        <TextField
          fullWidth
          label="Requirements Description"
          name="requirements.description"
          value={propertyData.requirements.description}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Requirements List (comma separated)"
          name="requirements.list"
          value={propertyData.requirements.list.join(', ')}
          onChange={handleChange}
        />
               <TextField
          fullWidth
          label="Requirements Images (comma separated)"
          name="requirements.images"
          value={propertyData.requirements.images.join(', ')}
          onChange={handleChange}
        />

   

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Stack>

      {/* Snackbar for success/error messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </form>
  );
};

export default PropertyForm;
