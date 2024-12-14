'use client';

import { useRouter } from 'next/router';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function ClientUrl() {
  // Use useRouter to access query params
  const router = useRouter();
  const { ClientUrl } = router.query; // Extract the dynamic route parameter

  // Render loading message if the query param is not available yet (because of client-side rendering)
  if (!ClientUrl) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.page1}>
      <div className={styles.leftSide}>
        {/* Optimized Image Component */}
        <Image src="/jesua.png" alt="Jesua Garlet" width={500} height={500} priority />
        <Link href="/asas" className={styles.leftLink}>
          My Listings
        </Link>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.name}>
          <h1>Jesua Garlet</h1>
          <p>Real Estate Specialist</p>
        </div>

        {/* Dynamic Content */}
        <ul>
          <li>PRC LICENSED AND DSHUD REGISTERED</li>
          <li>Number: 09662996401</li>
          <li>Email: jesuagarletbesthomes@gmail.com</li>
          <li>Website: BeuatifulHomesPH.com</li>
          <li>Address: Cebu City Cebu</li>
          {/* Display the dynamic ClientUrl parameter */}
          <li>{ClientUrl}</li>
        </ul>
      </div>
    </div>
  );
}
