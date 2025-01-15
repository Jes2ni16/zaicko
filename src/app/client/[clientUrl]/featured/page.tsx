'use client';

import { useEffect, useState } from 'react';
import CardList from '../../../components/cards';
import styles from './page.module.css';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function FeaturedProjects() {
  const [currentURL, setCurrentURL] = useState<string>('');


  useEffect(() => {
    const url = window.location.href;
    const match = url.match(/\/client\/(.*?)\/featured/);
    let urlAfterClient = match ? match[1] : null;
  
    if (urlAfterClient) {
      urlAfterClient = urlAfterClient.replace(/\d+/g, "").toUpperCase();
      setCurrentURL(urlAfterClient);
    }
  }, []);
    return (
    <div className={styles.page}>
 <IconButton
  component="a"
  href={`listing`}
  color="primary"
  aria-label="go back"
  sx={{
    position: 'absolute',
    backgroundColor: '#000', 
    color: '#fff', // Icon colo
    width: 30, 
    height: 30, 
    top:'10px',
    borderRadius: '50%', // Make it a circle
    '&:hover': {
      backgroundColor: 'primary.dark', // Darker shade on hover
    },
  }}
>
  <ArrowBackIcon />
</IconButton>
<div className={styles.header}>
    <h1>{currentURL}&apos;s Featured Projects</h1>
</div>
<CardList />

    </div>);
  }