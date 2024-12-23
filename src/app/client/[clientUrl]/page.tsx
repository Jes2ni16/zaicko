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
  image:string;
  image_mobile:string;
  url: string;
}


export default function ClientHome() {

  const [clientData, setClientData] = useState<ClientData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Get the current URL from window.location
    const url = window.location.href;
    const urlAfterClient = url.split('/client/')[1]; 
    


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
        <Image src={clientData.image} width={2560} height={1440} alt="Image description" />
        <Link href={`/client/${clientData.url}/listing`} className={styles.linkList}>My Listings</Link>
      </div>
    </div>
  );
}
