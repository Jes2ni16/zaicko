'use client';

 // Remove useRouter since it's not needed
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface PostPageProps {
  params: {
    url: string; // Dynamic URL parameter
  };
}

export default function PostPage({ params }: PostPageProps) {
  const { url } = params; // Retrieve the dynamic URL parameter directly
console.log('asas')

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
          {/* Display URL if available */}
          {url && (
            <li>
              <strong>Entered URL: </strong>{url}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
