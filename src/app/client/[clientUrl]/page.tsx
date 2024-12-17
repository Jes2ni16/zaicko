'use client';

import styles from './page.module.css';
import Link from 'next/link';  
import Image from 'next/image';
const RegisterForm: React.FC = () => {

 
  return (
    <div className={styles.page1}>
      <div className={styles.imgContainer}><Image src="/jesua.webp" width={2560} height={1440} alt="" />
      <Link href={'asas'} className={styles.linkList}> My Listings</Link>
      </div>

    </div>
  );
}

export default RegisterForm;
