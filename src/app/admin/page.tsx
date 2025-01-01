"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  TablePagination,
  CircularProgress,
  Snackbar,
  DialogTitle,
  DialogActions,
} from '@mui/material';
import CreateClientComponent from '../components/creatClient'; // Import the new form component
import { Delete as DeleteIcon } from '@mui/icons-material';
import { useRouter } from 'next/navigation'; 


interface Client {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  url: string;
  background: string;
  background_mobile: string;
  fb: string;
  tiktok: string;
  instagram: string;
  image: string;
  image_mobile: string;
  youtube: string;
  createdAt: string; 
}

const ClientManagement = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const [clientToDelete, setClientToDelete] = useState<string | null>(null); 
  const [selectedClient, setSelectedClient] = useState<Client | null>(null); // Track selected client for editing
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const [page, setPage] = useState<number>(0); // Page state for pagination
  const [rowsPerPage, setRowsPerPage] = useState<number>(5); // Rows per page for pagination
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false); // Snackbar for success/failure messages
  const router = useRouter();


  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get(
          'https://zaiko-server.vercel.app/api/users/', // URL to check if the user is logged in
          { withCredentials: true }
        );

        if (response.status === 200) {
        }
      } catch (error) {
        console.log('User is not logged in.', error);
        router.push('/');
      }
    };

    checkLoginStatus();
  }, [router]);


  // Fetch Clients from the server
  const fetchClients = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://zaiko-server.vercel.app/api/clients'); // Adjust API route as needed
      
      // Sort clients by createdAt in descending order
      const sortedClients = response.data.sort((a: Client, b: Client) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      
      setClients(sortedClients);
      setError(null); // Reset error state if successful
    } catch (error) {
      console.error('Error fetching clients:', error);
      setError('Failed to load clients.');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchClients();
  }, []);

  // Handle success after adding or updating a client
  const handleSuccess = () => {
    fetchClients(); // Refresh the clients list after adding or editing a client
    setOpen(false);  // Close the dialog
    setSelectedClient(null); // Reset the selected client
    setOpenSnackbar(true); // Show success snackbar
  };

  const confirmDeleteClient = (clientId: string) => {
    setClientToDelete(clientId);
    setConfirmDelete(true); // Open confirmation dialog
  };

  // Handle Delete Client
  const handleDelete = async () => {
    try {
      if (clientToDelete) {
        await axios.delete(`https://zaiko-server.vercel.app/api/clients/${clientToDelete}`, {
          withCredentials: true,
        });
        setOpenSnackbar(true);
        fetchClients();
      }
    } catch (error) {
      console.error('Error deleting client:', error);
      setError('Failed to delete client.');
    } finally {
      setConfirmDelete(false); // Close confirmation dialog
      setClientToDelete(null);
    }
  };

  // Open the dialog for creating or editing a client  
  const handleOpenDialog = (client?: Client) => {
    setSelectedClient(client || null); // If client is passed, edit it, otherwise create new
    setOpen(true);
  };

  // Handle Pagination change
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // Handle Rows per page change
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page when rows per page changes
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Client Management
      </Typography>
      <Button variant="contained" color="primary" onClick={() => handleOpenDialog()}>
        Add Client
      </Button>
      {/* Loading Indicator */}
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Snackbar
          open={true}
          autoHideDuration={6000}
          message={error}
          onClose={() => setError(null)}
        />
      ) : (
        <>
          <TableContainer component={Paper} sx={{ marginTop: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Url</TableCell>
                  <TableCell>Actions</TableCell> {/* Added Actions column */}
                  </>
                </TableRow>
              </TableHead>
              <TableBody>
                {clients
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((client) => (
                    <TableRow key={client._id}>
                      <>
                      <TableCell>{client.name}</TableCell>
                      <TableCell>{client.email}</TableCell>
                      <TableCell>{client.phone}</TableCell>
                      <TableCell>{client.address}</TableCell>
                      <TableCell>{client.url}</TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          color="secondary"
                          onClick={() => handleOpenDialog(client)} // Open dialog with client data for editing
                        >Edit</Button>
                        {/* Delete Button */}
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={() => confirmDeleteClient(client._id)} // Call delete handler
                          sx={{ marginLeft: 1 }} >
                          <DeleteIcon />
                        </Button>
                      </TableCell> {/* Edit and Delete button columns */}
                      </>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={clients.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
    <Dialog
        open={confirmDelete}
        onClose={() => setConfirmDelete(false)}
      >
        <DialogTitle>Are you sure you want to delete this client?</DialogTitle>
        <DialogActions>
          <Button onClick={() => setConfirmDelete(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
        </>
      )}
      {/* Add or Edit Client Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}   PaperProps={{
    sx: {
      width: '900px', // Set modal width
      maxWidth: '900px', // Ensure no overflow
    },
  }}>
        <CreateClientComponent
          client={selectedClient} // Pass selected client data for editing
          onClose={() => setOpen(false)} // Close the dialog
          onSuccess={handleSuccess}    // Handle success callback
        />
      </Dialog>

      {/* Success Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        message="Client successfully added, updated, or deleted"
        onClose={() => setOpenSnackbar(false)}
      />
    </Container>
  );
};

export default ClientManagement;
