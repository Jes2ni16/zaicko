'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import axios from 'axios';
import { Button, Stack } from '@mui/material'; // Import MUI Button and Stack

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
  const [lists, setLists] = useState<ListData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedListType, setSelectedListType] = useState<string>(''); // State to store selected list type filter

  useEffect(() => {
    // Extract the part of the URL after /client/ and before /listing
    const url = window.location.href;
    const match = url.match(/\/client\/(.*?)\/listing/);
    const urlAfterClient = match ? match[1] : null;

    if (urlAfterClient) {
      setCurrentURL(urlAfterClient);
    } else {
      setError('Invalid URL format.');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!currentURL) return;

        // Fetch client data and lists concurrently
        const [clientResponse, listResponse] = await Promise.all([
          axios.get(`https://zaiko-server.vercel.app/api/clients/url/${currentURL}`),
          axios.get(`https://zaiko-server.vercel.app/api/lists`, {
            params: { clientUrl: currentURL },
          }),
        ]);

        setClientData(clientResponse.data);
        setLists(listResponse.data);
      } catch (err) {
        setError('Failed to load data. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentURL]);

  // Filtered lists based on selected list type
  const filteredLists = selectedListType
    ? lists.filter((list) => list.list_type === selectedListType)
    : lists;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div
      className={styles.page1}
      style={{
        backgroundImage: clientData?.background
          ? `url(${clientData.background})`
          : 'none',
      }}
    >
      <div className={styles.lists}>
        <Stack direction="column" spacing={2} sx={{ marginRight: 2 }}>
          <Button
            variant={selectedListType === 'Brokerage' ? 'contained' : 'outlined'}
            onClick={() => setSelectedListType('Brokerage')}
          >
            Brokerage
          </Button>
          <Button
            variant={selectedListType === 'Developmental' ? 'contained' : 'outlined'}
            onClick={() => setSelectedListType('Developmental')}
          >
            Developmental
          </Button>
          <Button
            variant={selectedListType === 'Rental' ? 'contained' : 'outlined'}
            onClick={() => setSelectedListType('Rental')}
          >
            Rental
          </Button>
        </Stack>

        {filteredLists && filteredLists.length > 0 ? (
          <div className={styles.tableContainer} style={{ marginLeft: '220px' }}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Unit Type</th>
                  <th>City</th>
                  <th>Price</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>
                {filteredLists.map((list) => (
                  <tr key={list._id}>
                    <td>{list.unit_type || 'N/A'}</td>
                    <td>{list.city || 'N/A'}</td>
                    <td>{list.price ? `$${list.price}` : 'N/A'}</td>
                    <td>{list.list_owner || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className={styles.noListings}>No listings found for this client.</p>
        )}
      </div>
    </div>
  );
};

export default ClientListing;
