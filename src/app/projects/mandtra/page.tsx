'use client';

import styles from './page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

export default function Mandtra() {


  return (
    <div className={styles.body}>
        <div className={styles.headPart}>
<div className={styles.img}>
    <Image src='https://i.imgur.com/6jjNq8v.jpg' width='500' height={700} alt='MANDTRA RESIDENCES'/>
</div>
<div className={styles.submin}>
    <h1 className='text-center'>MANDTRA RESIDENCE</h1>
    <h2 className='my-5'>Mandtra Residences sets the standard of Cebuano Living at the heart of its industrial heritage.</h2>
    <div className='d-flex align-items-center'>
        <p className='mb-2'>Project Location: </p>
        <h2 className='ms-4 text-bold'>Near AS Fortuna St. | P. Basubas St. Tipolo Mandaue City</h2>
    </div>
</div>
        </div>

<div className={styles.hr}></div>


<div className={styles.secondFold}>
<h2>MANDTRA RESIDENCES</h2>
<p>
MANDTRA RESIDENCES is an urban tropical living built for the well balanced Cebuano life. Rooted living because of Cebuano traditions, Cebuano craftmanship and artistry. Modern and well balanced living as it brings warmth of a home in the midst of a busy city. Located at P. Basubas St. Tipolo, Mandaue Cebu City. A joint venture under Cebu Homegrown Developers, Inc. Owned and Managed by Cebu Landmasters, Inc. In partnership with Ixidor Holdings Inc.
</p>
<div className="d-flex align-items-center flex-wrap gap-5">
<Image src='https://i.imgur.com/6jjNq8v.jpg' width='300' height={300} alt='MANDTRA RESIDENCES'/>
<Image src='https://i.imgur.com/xqXLrSI.jpg'  width='300' height={300} alt='MANDTRA RESIDENCES'/>
<Image src='https://i.imgur.com/1sDAOHS.png'  width='300' height={300} alt='MANDTRA RESIDENCES'/>
</div>

</div>

<div className={styles.thirdFold}>
<p>Location</p>
<div className={styles.img}>
<Image src='https://i.imgur.com/5A5RVck.png' width='700' height={700} alt='MANDTRA RESIDENCES'/>
</div>
</div>


    </div>
  );
}
