'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
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
  const [lists, setLists] = useState<ListData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
            params: { client: currentURL },
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.page1}>
      <div className={styles.imgContainer}>
        {clientData?.background ? (
          <Image
            src={clientData.background}
            width={2560}
            height={1440}
            alt={`${clientData.name}'s background`}
          />
        ) : (
          <p>Background image not available.</p>
        )}
      </div>
      <div className={styles.lists}>
        <h2>Listings</h2>
        {lists.length > 0 ? (
          <ul>
            {lists.map((list) => (
              <li key={list._id}>
                <h3>{list.list_type}</h3>
                <p>City: {list.city}</p>
                <p>Price: {list.price}</p>
                <p>Owner: {list.list_owner}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No listings found for this client.</p>
        )}
      </div>
    </div>
  );
};

export default ClientListing;
