'use client';

import styles from './page.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';  
import Image from 'next/image';
import axios from 'axios';
import { CircularProgress, Box } from '@mui/material';

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
    return  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Centers vertically and horizontally
    }}
  >
    <CircularProgress />
  </Box>
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!clientData) {
    return <p>No client data found.</p>;
  }


  return (
    <div className={styles.body}>
    <div className={styles.page1}>
      <div className={styles.imgContainer}>
        <Image src={clientData.image} width={2560} height={1440} alt={clientData.name} />
        <Link href={`/client/${clientData.url}/listing`} className={styles.linkList}>My Listings</Link>
   { clientData.tiktok || clientData.fb || clientData.instagram || clientData.youtube ? (<div className={styles.socLinks}>
      {clientData.tiktok? (<Link href={clientData.tiktok}><Image src={'/tiktok.webp'} width={50} height={50} alt='tiktok image'/></Link>):(<></>)}
      {clientData.fb? (<Link href={clientData.fb} style={{padding:'3px'}} ><Image src={'/facebook.png'} width={50} height={50} alt='facebook image'/></Link>):(<></>)}
      {clientData.youtube? (<Link href={clientData.youtube} ><Image src={'/youtube.png'} width={50} height={50} alt='youtube image'/></Link>):(<></>)}
      {clientData.instagram? (<Link href={clientData.instagram} ><Image src={'/instagramIcon.png'} width={50} height={50} alt='instagram image'/></Link>):(<></>)}

    </div>):<div></div> }
      <div className={styles.fma}>
      <Link href='https://findmyagent.net'>
      <Image src='/fma.png' width={40} height={30} alt="find my agent Logo" />
      </Link>
      </div>
      </div>
    </div>
    <div className={styles.page2}>
      <div className={styles.imgContainer}>
        <Image src={clientData.image_mobile} width={2560} height={1440} alt="Image description" />
        <Link href={`/client/${clientData.url}/listing`} className={styles.linkList}>My Listings</Link>
        <div className={styles.fma}>
      <Link href='https://findmyagent.net'>
      <Image src='/fma.png' width={25} height={20} alt="find my agent Logo" />
      </Link>
      </div>
      </div>
    </div>
    </div>
  );
}
