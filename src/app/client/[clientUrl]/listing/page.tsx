'use client';


import { useEffect, useState } from 'react';

import axios from 'axios';

interface ClientData {
  name: string;
  email: string;
  phone: string;
  address: string;
  background: string;
  fb: string;
  tiktok: string;
  instagram: string;
  youtube: string;
  background_mobile: string;
  url: string;
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

const ClientListing = () => {
  const [currentURL, setCurrentURL] = useState<string>('');
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const [lists, setLists] = useState<ListData[]>([]); // State for storing lists
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Get the current URL
    const url = window.location.href;
    
    // Extract the part of the URL after /client/ and before /listing
    const match = url.match(/\/client\/(.*?)\/listing/);
    const urlAfterClient = match ? match[1] : null;

    // Set the extracted URL to the state
    setCurrentURL(urlAfterClient || 'URL not found');

    if (urlAfterClient) {
      axios
        .get(`https://zaiko-server.vercel.app/api/clients/url/${urlAfterClient}`)
        .then((response) => {
          setClientData(response.data); // Set client data
          setLoading(false);
        })
        .catch((err) => {
          setError(`Failed to fetch client data: ${err}`);
          setLoading(false);
        });
    }
  }, []);

  useEffect(() => {
    if (currentURL) {
      const fetchLists = async () => {
        try {
          const response = await axios.get(
            `https://zaiko-server.vercel.app/api/lists`,
            {
              params: { client: currentURL }, // Assuming you're using the client URL or ID as the query
            }
          );
          setLists(response.data); // Set the fetched lists
          setLoading(false);
        } catch (err) {
          setError(`Failed to fetch lists: ${err}`);
          setLoading(false);
        }
      };

      fetchLists();
    }
  }, [currentURL]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Client Listings</h1>
      {clientData ? (
        <div>
          <h2>{clientData.name}</h2>
          <p>Email: {clientData.email}</p>
          <p>Phone: {clientData.phone}</p>
          <p>Address: {clientData.address}</p>
          {/* Add other client information as needed */}
        </div>
      ) : (
        <p>No client data found</p>
      )}
      <h3>Listings</h3>
      {lists.length > 0 ? (
        <ul>
          {lists.map((list) => (
            <li key={list._id}>
              <h4>{list.list_type}</h4>
              <p>City: {list.city}</p>
              <p>Price: {list.price}</p>
              <p>Room Number: {list.room_number}</p>
              {/* Add more list details as needed */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No listings available for this client.</p>
      )}
    </div>
  );
};

export default ClientListing;
