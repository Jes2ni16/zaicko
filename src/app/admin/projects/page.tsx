'use client';
import React, { useState, useEffect } from 'react';
import PropertyForm from './CreateProject';  // Import the PropertyForm component
import { Dialog, DialogActions, DialogContent, DialogTitle, Button,Box, Typography, Paper } from '@mui/material';

// Define the structure of the Property object
interface Property {
  _id: string;
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
  requirements: { description: string; list: string[]; images: string[] };
}

const ParentComponent: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [open, setOpen] = useState(false); // State to manage modal open/close
  const [isEditMode, setIsEditMode] = useState(false); // Toggle between create and edit mode
  const [propertyId, setPropertyId] = useState<string | null>(null); // Track the property ID when editing
  const [existingPropertyData, setExistingPropertyData] = useState<Property | null>(null); // Track the existing property data
  const [properties, setProperties] = useState<Property[]>([]); // State to hold fetched property data

  // Example fetch function (replace with your actual API endpoint)
  const fetchProperties = async () => {
    try {
      const response = await fetch('https://zaiko-server.vercel.app/api/projects');
      const data = await response.json();
      setProperties(data);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setErrorMessage('Failed to load properties');
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  // Handle success message from the PropertyForm component
  const handleSuccess = (message: string) => {
    setSuccessMessage(message); 
    setErrorMessage(null); 
    setOpen(false); 
    fetchProperties(); 
  };

  // Handle error message from the PropertyForm component
  const handleError = (message: string) => {
    setErrorMessage(message); 
    setSuccessMessage(null); 
  };

  // Open the modal in create mode
  const handleOpenCreateModal = () => {
    setIsEditMode(false);
    setPropertyId(null); 
    setExistingPropertyData(null); 
    setOpen(true);
  };

  // Open the modal in edit mode
  const handleOpenEditModal = (id: string, data: Property) => {
    setIsEditMode(true);
    setPropertyId(id); 
    setExistingPropertyData(data); 
    setOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '100vh', padding: '20px' }}
  >
    {/* Button to open the modal in create mode */}
    <Button variant="contained" color="primary" onClick={handleOpenCreateModal} sx={{ marginBottom: '20px' }}>
      Add New Property
    </Button>

    {/* Display the list of properties with Edit buttons */}
    <Box
      display="grid"
      gridTemplateColumns="1fr" 
      gap={2}
      sx={{ width: '100%', maxWidth: '800px' }}
    >
      {properties.map((property) => (
        <Paper key={property._id} sx={{ padding: '16px', borderRadius: '8px', boxShadow: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {property.projectName}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '16px' }}>
            {property.description}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => handleOpenEditModal(property._id, property)} 
          >
            Edit Property
          </Button>
        </Paper>
      ))}
    </Box>

    {/* Modal (Dialog) containing the PropertyForm */}
    <Dialog open={open} onClose={handleCloseModal} fullWidth maxWidth="md">
      <DialogTitle>{isEditMode ? 'Edit Property' : 'Add New Property'}</DialogTitle>
      <DialogContent>
        <PropertyForm
          onSuccess={handleSuccess}
          onError={handleError}
          propertyId={propertyId}
          existingPropertyData={existingPropertyData}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>

    {/* Display success or error message if present */}
    {successMessage && <Typography variant="body1" color="success.main">{successMessage}</Typography>}
    {errorMessage && <Typography variant="body1" color="error.main">{errorMessage}</Typography>}
  </Box>
  );
};

export default ParentComponent;
