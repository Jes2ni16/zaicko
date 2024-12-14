"use client";

import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';

export default function PostPage() {
  const router = useRouter();
  const { url } = router.query; // Access dynamic parameter (e.g., 'url')

  console.log(router.query); // Log the dynamic query params

  return (
    <div className={styles.page1}>
      <div className={styles.leftSide}>
        {/* Optimized Image */}
        <Image src="/jesua.png" alt="Jesua Garlet" width={500} height={500} priority />
        {/* Link */}
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
          <li>Number: 09662996401 - {url}</li>
          <li>Email: jesuagarletbesthomes@gmail.com</li>
          <li>Website: BeuatifulHomesPH.com</li>
          <li>Address: Cebu City Cebu</li>
        </ul>
      </div>
    </div>
  );
}
