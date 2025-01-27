'use client';

import { useEffect, useState } from 'react';
import CardList from '../../../components/cards';
import styles from './page.module.css';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';

interface ClientData {
projects:string[];
}

export default function FeaturedProjects() {
  const [currentURL, setCurrentURL] = useState<string>('');
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const url = window.location.href;
    const match = url.match(/\/client\/(.*?)\/featured/);
    let urlAfterClient = match ? match[1] : null;
  
    if (urlAfterClient) {
      axios
        .get(`https://zaiko-server.vercel.app/api/clients/url/${urlAfterClient}`)
        .then((response) => {
          setClientData(response.data); // Assuming the response contains client data
          setLoading(false);
        })
        .catch((err) => {
          setError(`Failed to fetch client data: ${err}`);
          setLoading(false);
        });

      urlAfterClient = urlAfterClient.replace(/\d+/g, "").toUpperCase();
      setCurrentURL(urlAfterClient);
    }else {
      setError('Invalid URL format.');
      setLoading(false);
    }

  }, []);




    return (
      <div className={styles.page}>
      {/* Back Button */}
      <IconButton
        component="a"
        href="listing"
        color="primary"
        aria-label="go back"
        sx={{
          position: 'absolute',
          backgroundColor: '#000',
          color: '#fff',
          width: 30,
          height: 30,
          top: '10px',
          borderRadius: '50%',
          '&:hover': {
            backgroundColor: '#333', // Darker shade for hover
          },
        }}
      >
        <ArrowBackIcon />
      </IconButton>

      {/* Header */}
      <div className={styles.header}>
        <h1>{currentURL ? `${currentURL}'s Featured Projects` : 'Featured Projects'}</h1>
      </div>

      {/* Content */}
      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {clientData && clientData.projects && clientData.projects.length > 0 ? (
        <CardList client={clientData} />
      ) : (
        !loading && !error && <p>No projects found.</p>
      )}
    </div>
  );

  ;}