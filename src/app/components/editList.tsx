"use client";

import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Autocomplete, FormControl, InputLabel, Select,MenuItem  } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Client {
  _id: string;
  name: string;
}

interface ListData {
  _id: string;
  list_type: string;
  unit_type: string;
  city: string;
  barangay: string;
  price: string;
  fb_link: string;
  room_number: string;
  list_owner: string;
  client: { _id: string; name: string };
}

interface EditListModalProps {
  open: boolean;
  list: ListData | null;
  onClose: () => void;
  onSuccess: () => void;
}

const EditListModal = ({ open, list, onClose, onSuccess }: EditListModalProps) => {
  const [listType, setListType] = useState<string>('');
  const [unitType, setUnitType] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [barangay, setBarangay] = useState<string>('');
  const [price, setPrice] = useState("");
  const [fbLink, setFbLink] = useState<string>('');
  const [roomNumber, setRoomNumber] = useState<string>('');
  const [listOwner, setListOwner] = useState<string>('');
  const [clientId, setClientId] = useState<Client | undefined>(undefined); // Updated to Client | undefined
  const [clients, setClients] = useState<Client[]>([]);

  // Fetch clients on modal open
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('https://zaiko-server.vercel.app/api/clients');
        setClients(response.data);
        
        // If list is available, set the clientId
        if (list && list.client) {
          const matchedClient = clients.find((client) => client._id === list.client._id);
          setClientId(matchedClient || undefined); // Set the matched client or undefined
        }
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

    if (open) {
      fetchClients();
    }
  }, [open, list]); // Re-fetch clients and update clientId when modal is opened or list changes

  // Populate the form fields if the list is available
  useEffect(() => {
    if (list) {
      setListType(list.list_type);
      setUnitType(list.unit_type);
      setCity(list.city);
      setBarangay(list.barangay);
      setPrice(list.price);
      setFbLink(list.fb_link);
      setRoomNumber(list.room_number);
      setListOwner(list.list_owner);
    }
  }, [list]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!clientId) {
      alert('Please select a client before submitting.');
      return;
    }

    const updatedList = {
      list_type: listType,
      unit_type: unitType,
      city,
      barangay,
      price,
      fb_link: fbLink,
      room_number: roomNumber,
      list_owner: listOwner,
      clientId: clientId._id, // Send the client ID
    };

    try {
      if (list && list._id) {
        await axios.put(
          `https://zaiko-server.vercel.app/api/lists/${list._id}`,
          updatedList,
          { withCredentials: true }
        );
        onSuccess();
      }
      
    } catch (error) {
      console.error('Error updating list:', error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit List</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
        <Autocomplete
  value={clientId || null} // Fallback to null if clientId is undefined
  onChange={(e, newValue) => setClientId(newValue || undefined)} // Handle case where newValue is null
  options={clients}
  getOptionLabel={(option) => option?.name || 'Unknown Client'}
  isOptionEqualToValue={(option, value) => option._id === value?._id}
  renderInput={(params) => (
    <TextField {...params} label="Client" fullWidth required />
  )}
/>
          <FormControl fullWidth margin="normal" required>
      <InputLabel id="list-type-label">List Type</InputLabel>
      <Select
        labelId="list-type-label"
        value={listType}
        onChange={(e) => setListType(e.target.value)}
      >
        <MenuItem value="Rental">Rental</MenuItem>
        <MenuItem value="Brokerage">Brokerage</MenuItem>
        <MenuItem value="Development">Development</MenuItem>
      </Select>
    </FormControl>
    <FormControl fullWidth margin="normal" required>
      <InputLabel id="unit-type-label">Unit Type</InputLabel>
      <Select
        labelId="unit-type-label"
        value={unitType}
        onChange={(e) => setUnitType(e.target.value)}
      >
        <MenuItem value="Condo">Condo</MenuItem>
        <MenuItem value="House">House</MenuItem>
        <MenuItem value="Commercial">Commercial</MenuItem>
        <MenuItem value="Lot">Lot</MenuItem>
      </Select>
    </FormControl>
          <TextField
            label="City"
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            margin="normal"
          />
          <TextField
            label="Barangay"
            fullWidth
            value={barangay}
            onChange={(e) => setBarangay(e.target.value)}
            required
            margin="normal"
          />
        <TextField
          label="Price"
          fullWidth
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          margin="normal"
        />
          <TextField
            label="Facebook Link"
            fullWidth
            value={fbLink}
            onChange={(e) => setFbLink(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Room Number"
            fullWidth
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            margin="normal"
          />
          <TextField
            label="List Owner"
            fullWidth
            value={listOwner}
            onChange={(e) => setListOwner(e.target.value)}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Update
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EditListModal;
