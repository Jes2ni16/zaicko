"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, Autocomplete, Grid, FormControl, InputLabel, Select,MenuItem } from "@mui/material";

interface Client {
  _id: string;
  name: string;
}

interface List {
  list_type: string;
  unit_type: string;
  city: string;
  barangay: string;
  price: string;
  fb_link: string;
  room_number: string;
  list_owner: string;
  clientId?: string;
}

interface AddListProps {
  onSuccess: () => void;
}

const AddListComponent = ({ onSuccess }: AddListProps) => {
  const [listType, setListType] = useState("");
  const [unitType, setUnitType] = useState("");
  const [city, setCity] = useState("");
  const [barangay, setBarangay] = useState("");
  const [price, setPrice] = useState("");
  const [fbLink, setFbLink] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [listOwner, setListOwner] = useState("");
  const [clients, setClients] = useState<Client[]>([]);
  const [clientId, setClientId] = useState<Client | null>(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get("https://zaiko-server.vercel.app/api/clients");
        if (Array.isArray(response.data)) {
          setClients(response.data);
        } else {
          console.error("Invalid response format: data should be an array");
        }
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };
    fetchClients();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!clientId) {
      alert("Please select a client before submitting.");
      return;
    }

    const listData: List = {
      list_type: listType,
      unit_type: unitType,
      city,
      barangay,
      price,
      fb_link: fbLink,
      room_number: roomNumber,
      list_owner: listOwner,
      clientId: clientId._id,
    };

    try {
      await axios.post(
        "https://zaiko-server.vercel.app/api/lists",
        listData,
        { withCredentials: true }
      );
      onSuccess();
      // Reset form
      setListType("");
      setUnitType("");
      setCity("");
      setBarangay("");
      setPrice("");
      setFbLink("");
      setRoomNumber("");
      setListOwner("");
      setClientId(null);
    } catch (error) {
      console.error("Error creating list:", error);
    }
  };

  return (
    <div>
      <h2>Add New List</h2>
      <form onSubmit={handleSubmit}>
  <Grid container spacing={2}>
    {/* First Row */}
    <Grid container item xs={12} spacing={2}>
      <Grid item xs={3}>
      <Autocomplete
          value={clientId}
          onChange={(e, newValue) => setClientId(newValue || null)}
          options={clients}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Client"
              fullWidth
              required
              margin="normal"
            />
          )}
        />
      </Grid>
      <Grid item xs={3}>
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
      </Grid>
      <Grid item xs={3}>
      <FormControl fullWidth margin="normal" required>
      <InputLabel id="unit-type-label">Unit Type</InputLabel>
      <Select
        labelId="unit-type-label"
        value={unitType}
        onChange={(e) => setUnitType(e.target.value)}
      >
        <MenuItem value="Condo">Condo</MenuItem>
        <MenuItem value="Apartment">Apartment</MenuItem>
        <MenuItem value="House">House</MenuItem>
        <MenuItem value="Commercial">Commercial</MenuItem>
        <MenuItem value="Lot">Lot</MenuItem>
      </Select>
    </FormControl>
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="City"
          fullWidth
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          margin="normal"
        />
      </Grid>
    </Grid>

    {/* Second Row */}
    <Grid container item xs={12} spacing={2}>
      <Grid item xs={3}>
        <TextField
          label="Barangay"
          fullWidth
          value={barangay}
          onChange={(e) => setBarangay(e.target.value)}
          required
          margin="normal"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="Price"
          fullWidth
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          margin="normal"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="Facebook Link"
          fullWidth
          value={fbLink}
          onChange={(e) => setFbLink(e.target.value)}
          margin="normal"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="Room Number"
          fullWidth
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
          margin="normal"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="List Owner"
          fullWidth
          value={listOwner}
          onChange={(e) => setListOwner(e.target.value)}
          margin="normal"
        />
      </Grid>
    </Grid>

    {/* Submit Button */}
    <Grid container item xs={12} justifyContent="flex-end">
      <Button type="submit" color="primary" variant="contained">
        Create
      </Button>
    </Grid>
  </Grid>
</form>
    </div>
  );
};

export default AddListComponent;
