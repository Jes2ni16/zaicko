'use client';

import { useEffect, useState } from 'react';
import CardList from '../../../components/cards';
import styles from './page.module.css';



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
<div className={styles.header}>
    <h1>{currentURL}&apos;s Featured Projects</h1>
</div>
<CardList />

    </div>);
  }