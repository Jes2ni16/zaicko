'use client';

import styles from './page.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';  
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


export default function ClientHome() {
  const [currentURL, setCurrentURL] = useState("");
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Get the current URL from window.location
    const url = window.location.href;
    const urlAfterClient = url.split('/client/')[1]; 
    
    // Set the extracted URL to the state
    setCurrentURL(urlAfterClient || "URL not found");

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
    }


  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!clientData) {
    return <p>No client data found.</p>;
  }


  return (
    <div className={styles.page1}>
      <div className={styles.imgContainer}>
        <Image src={clientData.background} width={2560} height={1440} alt="Image description" />
        <Link href={`/client/${clientData.url}/listing`} className={styles.linkList}>My Listings</Link>
        <p>Current URL after  {currentURL}</p>
        <p>Current URL after: {currentURL}</p>
        <h2>Client Information</h2>
        <p><strong>Name:</strong> {clientData.name}</p>
        <p><strong>Email:</strong> {clientData.email}</p>
        <p><strong>Phone:</strong> {clientData.phone}</p>
        <p><strong>Address:</strong> {clientData.address}</p>
        <p><strong>Background:</strong> </p>
        <p><strong>Facebook:</strong> {clientData.fb}</p>
        <p><strong>TikTok:</strong> {clientData.tiktok}</p>
        <p><strong>Instagram:</strong> {clientData.instagram}</p>
        <p><strong>YouTube:</strong> {clientData.youtube}</p>
        <p><strong>Background (Mobile):</strong> {clientData.background_mobile}</p>
      </div>
    </div>
  );
}
