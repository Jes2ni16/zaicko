"use client";

import { useState, useEffect } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Tooltip,
  TableRow,
  IconButton,
  TextField,
  TablePagination,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import axios from "axios";
import AddListComponent from "../components/createList";
import styles from "./page.module.css";
import EditListModal from "../components/editList";
import Link from "next/link";
import { useRouter } from 'next/navigation'; 

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
  owner: string;
  createdAt: string;
  client: { _id: string; name: string };
}

const ManageLists = () => {
  const [lists, setLists] = useState<ListData[]>([]);
  const [filteredLists, setFilteredLists] = useState<ListData[]>([]); // To store the filtered list
  const [searchQuery, setSearchQuery] = useState(""); // To store the search query
  const [selectedList, setSelectedList] = useState<ListData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  // Pagination State
  const [page, setPage] = useState(0); // Current page number
  const [rowsPerPage, setRowsPerPage] = useState(5); // Rows per page

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
        window.location.href = '/';
      
      }
    };

    checkLoginStatus();
  }, [router]);
  
  useEffect(() => {
    fetchLists();
  }, []);
  

  const fetchLists = async () => {
    try {
      const response = await axios.get("https://zaiko-server.vercel.app/api/lists");
      const sortedLists = response.data.sort((a: ListData, b: ListData) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(); // Newest first
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
      await axios.delete(
        `https://zaiko-server.vercel.app/api/lists/${id}`,
        {
          withCredentials: true, // Include cookies with the request
        }
      );
      fetchLists(); // Refresh the list after deletion
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
    filterLists(query); // Apply the filter based on the search query
  };

  const filterLists = (query: string) => {
    if (!query) {
      setFilteredLists(lists); // Show all lists if search query is empty
    } else {
      const filtered = lists.filter((list) =>
        [
          list.list_type,
          list.unit_type,
          list.city,
          list.barangay,
          list.fb_link,
          list.room_number,
          list.list_owner,
          list.client?.name,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase())
      );
      setFilteredLists(filtered);
    }
  };

  const handlePageChange = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page
  };
  const logout = async () => {
    try {
      // Call the backend to clear the cookie
      await axios.post('https://zaiko-server.vercel.app/api/users/logout', {}, { withCredentials: true });
      
      // Redirect the user to the login page
      window.location.href = '/'; // Adjust the path as per your app
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Something went wrong while logging out. Please try again.');
    }
  };

  return (
    <div className={styles.page}>
      <Typography variant="h4" gutterBottom>
        Manage Lists
      </Typography>
      <button onClick={logout}>Logout</button>
      <div className={styles.linkToTable}>
        <Link href="/admin">Add a Client</Link>
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
      <TableContainer
        style={{
          maxHeight: "100%", // Set a fixed height for the table body
          overflowY: "auto", // Enable vertical scrolling
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Owner</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>List Type</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Unit Type</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>City</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Barangay</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Price</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Facebook Link</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Room Number</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>List Owner</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredLists
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) // Paginate the rows
              .map((list) => (
                <TableRow key={list._id}>
                  <TableCell>{list.client.name}</TableCell>
                  <TableCell>{list.list_type}</TableCell>
                  <TableCell>{list.unit_type}</TableCell>
                  <TableCell>{list.city}</TableCell>
                  <TableCell>{list.barangay}</TableCell>
                  <TableCell>{list.price}</TableCell>
                  <TableCell>
                    <Tooltip title={list.fb_link} arrow>
                      <span
                        style={{
                          display: "block",
                          width: "200px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {list.fb_link}
                      </span>
                    </Tooltip>
                  </TableCell>
                  <TableCell>{list.room_number}</TableCell>
                  <TableCell>{list.list_owner}</TableCell>
                  <TableCell>
                    <IconButton edge="end" onClick={() => handleEdit(list)}>
                      <Edit />
                    </IconButton>
                    <IconButton edge="end" onClick={() => handleDelete(list._id)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={filteredLists.length}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={[5, 10, 25]} // Options for rows per page
      />
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
