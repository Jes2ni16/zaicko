"use client";

import { useState, useEffect } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,TextField
} from "@mui/material";
import { Edit, Delete} from "@mui/icons-material";
import axios from "axios";
import AddListComponent  from "./components/createList";
import styles from './page.module.css'
import EditListModal from "./components/editList"; 
import Link from 'next/link';


interface ListData {
  _id: string;
  list_type: string;
  unit_type: string;
  city: string;
  barangay: string;
  fb_link: string;
  room_number: string;
  list_owner: string;
  owner: string;
  created_at:string;
  client:  { _id: string; name: string };  // Client can be either string (ID) or an object
}



const ManageLists = () => {
  const [lists, setLists] = useState<ListData[]>([]);
  const [selectedList, setSelectedList] = useState<ListData | null>(null);
  const [filteredLists, setFilteredLists] = useState<ListData[]>([]); // To store the filtered list
  const [searchQuery, setSearchQuery] = useState("");  // To store the search query
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/lists");
      const sortedLists = response.data.sort((a: ListData, b: ListData) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime(); // Newest first
      });
      setLists(sortedLists);
      setFilteredLists(sortedLists);
    } catch (error) {
      console.error("Error fetching lists:", error);
    }
  };

  const handleEdit = (list: ListData) => {
    setSelectedList(list);
    setIsModalOpen(true);
  };


  const handleDelete = async (id: string) => {
    try {
      // Perform the delete operation (API call or local state update)
      await axios.delete(`http://localhost:3001/api/lists/${id}`);
      // Refresh the list or update state after deletion
      fetchLists(); // This ensures the list is refreshed after deletion
    } catch (error) {
      console.error("Error deleting list:", error);
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSuccess = () => {
    setIsModalOpen(false);
    fetchLists(); // Refresh the list data
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterLists(query);  // Apply the filter based on the search query
  };


  const filterLists = (query: string) => {
    if (!query) {
      setFilteredLists(lists);  // If the search query is empty, show all lists
    } else {
      const filtered = lists.filter((list) => {
        return (
          (list.list_type?.toLowerCase().includes(query.toLowerCase()) || "") ||
          (list.unit_type?.toLowerCase().includes(query.toLowerCase()) || "") ||
          (list.city?.toLowerCase().includes(query.toLowerCase()) || "") ||
          (list.barangay?.toLowerCase().includes(query.toLowerCase()) || "") ||
          (list.fb_link?.toLowerCase().includes(query.toLowerCase()) || "") ||
          (list.room_number?.toLowerCase().includes(query.toLowerCase()) || "") ||
          (list.list_owner?.toLowerCase().includes(query.toLowerCase()) || "") ||
          (list.client?.name?.toLowerCase().includes(query.toLowerCase()) || "")
        );
      });
      setFilteredLists(filtered);  // Set filtered results to display
    }
  };
  return (
    <div className={styles.page}>
      <Typography variant="h4" gutterBottom>
        Manage Lists
      </Typography>
      <div className={styles.linkToTable}>
      <Link href="/admin">
        Add a Client
      </Link>
      </div>
      <AddListComponent onSuccess={handleSuccess} />
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={handleSearchChange}
        margin="normal"
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>List Type</TableCell>
              <TableCell>Unit Type</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Barangay</TableCell>
              <TableCell>Facebook Link</TableCell>
              <TableCell>Room Number</TableCell>
              <TableCell>List Owner</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredLists.map((list) => {
             
              return (
                <TableRow key={list._id}>
                  <TableCell>{list.list_type}</TableCell>
                  <TableCell>{list.unit_type}</TableCell>
                  <TableCell>{list.city}</TableCell>
                  <TableCell>{list.barangay}</TableCell>
                  <TableCell>{list.fb_link}</TableCell>
                  <TableCell>{list.room_number}</TableCell>
                  <TableCell>{list.list_owner}</TableCell>
                  <TableCell>{list.client.name}</TableCell>
                  <TableCell>
                    <IconButton edge="end" onClick={() => handleEdit(list)}>
                      <Edit />
                    </IconButton>
                    <IconButton edge="end" onClick={() => handleDelete(list._id)}>
        <Delete />
      </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <EditListModal
        open={isModalOpen}
        list={selectedList}
        onClose={handleClose}
        onSuccess={handleSuccess}
      />
    </div>
  );
};

export default ManageLists;
