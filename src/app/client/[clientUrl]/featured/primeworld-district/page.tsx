

import styles from './page.module.css';
import Image from 'next/image';
import ProjectsImage from '../projectsImage';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Metadata } from 'next';



export const metadata: Metadata = {
  title: 'Primeworld District | Resort-Style Community in Mactan, Cebu',
  description: 'Primeworld District in Brgy. Agus, Lapu-Lapu City offers resort-style living with premium amenities and residences, including studio, 1-bedroom, 2-bedroom units, and villas.',
  openGraph: {
    title: 'Primeworld District | Resort-Style Community in Mactan, Cebu',
    description: 'Primeworld District offers a lifetime vacation lifestyle in a resort-style community in Brgy. Agus, Lapu-Lapu City. Experience luxury living with great amenities and a serene environment.',
    images: ['https://i.imgur.com/E6f9qeu.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Primeworld District | Resort-Style Community in Mactan, Cebu',
    description: 'Primeworld District brings resort-style living to Brgy. Agus, Mactan. Enjoy luxury living with various unit options and world-class amenities.',
    images: ['https://i.imgur.com/E6f9qeu.jpg'],
  },
}


export default function Mandtra() {

  const first = [
     { src: 'https://i.imgur.com/zRvnUxn.jpg', alt: 'PRIMEWORLD DISTRICT 1' },
    { src: 'https://i.imgur.com/THZxV7X.jpg', alt: 'PRIMEWORLD DISTRICT 2' },
    { src: 'https://i.imgur.com/E6f9qeu.jpg', alt: 'PRIMEWORLD DISTRICT 3' },
    ]

    const floorBldg = [
      { src: 'https://i.imgur.com/fdxZTfG.jpg', alt: 'Building 1' },
      { src: 'https://i.imgur.com/lhjPmpt.jpg', alt: 'Building 2' },
      { src: 'https://i.imgur.com/32hApQG.jpg', alt: 'Building 3' },
    ]

    const floor1Bd = [
      { src: 'https://i.imgur.com/x0VnXsz.jpg', alt: 'Floor two 1' },
      { src: 'https://i.imgur.com/2qhoQ5i.jpg', alt: 'Floor two 2' },
      { src: 'https://i.imgur.com/JLzvYgl.jpg', alt: 'Floor two 3' },
      { src: 'https://i.imgur.com/SjJL0s4.jpg', alt: 'Floor two 4' },
    ]



    const floor2Bd = [
      { src: 'https://i.imgur.com/sr4Uw8F.jpg', alt: 'Floor one 1' },
      { src: 'https://i.imgur.com/nf4NDpt.jpg', alt: 'Floor one 2' },
    ]

    const floorVilla = [
      { src: 'https://i.imgur.com/K0rY7Cv.jpg', alt: 'Villa floor 1' },
    ]

    const amenities= [
      { src: 'https://i.imgur.com/dFsWW1R.jpg', alt: 'Amenities 1' },
      { src: 'https://i.imgur.com/6xFQ6Eu.jpg', alt: 'Amenities 2' },
      { src: 'https://i.imgur.com/M2ScwZM.jpg', alt: 'Amenities 3' },
      { src: 'https://i.imgur.com/V5WVwhL.jpg', alt: 'Amenities 4' },
      { src: 'https://i.imgur.com/E6f9qeu.jpg', alt: 'Amenities 5' },
    ]


    const dress2 = [
      { src: 'https://i.imgur.com/KBI2gcX.jpg', alt: 'dress 1' },
      { src: 'https://i.imgur.com/F0bibbY.jpg', alt: 'dress 2' },
      { src: 'https://i.imgur.com/Z97Adtm.jpg', alt: 'dress 3' },
    ]

    const dressStandard = [
      { src: 'https://i.imgur.com/FW7A7PD.jpg', alt: 'Dress standard 1' },
      { src: 'https://i.imgur.com/bAmQxLL.jpg', alt: 'Dress standard 2' },
    ]



    
    const site = [
      { src: 'https://i.imgur.com/V1AXdbK.png', alt: 'Site Image 1' },
      { src: 'https://i.imgur.com/D10Jm5b.jpg', alt: 'Site Image 2' },
      { src: 'https://i.imgur.com/hW9Q1r2.jpg', alt: 'Site Image 2' },
      { src: 'https://i.imgur.com/APDUqKo.jpg', alt: 'Site Image 2' },
      { src: 'https://i.imgur.com/zmdLt0v.jpg', alt: 'Site Image 2' },
    ]

  return (
    <div className={styles.body}>

        <div className={styles.headPart}>
        <IconButton
  component="a"
  href={`./`}
  color="primary"
  aria-label="go back"
  sx={{
    position: 'absolute',
    backgroundColor: '#000', 
    color: '#fff', // Icon colo
    width: 30, 
    height: 30, 
    top:'10px',
    left:'10px',
    borderRadius: '50%', // Make it a circle
    '&:hover': {
      backgroundColor: 'primary.dark', // Darker shade on hover
    },
  }}
>
  <ArrowBackIcon />
</IconButton>
<div className={styles.img}>
    <Image src='https://i.imgur.com/E6f9qeu.jpg' width='500' height={700} alt='PRIMEWORLD DISTRICT'/>
</div>
<div className={styles.submin}>
<h2 className={styles.subTitle}>Come home to lifelong vacation in this resort-style community in Brgy. Agus, Lapu-Lapu City, Mactan, Cebu</h2>
<h1 className='text-center'>PRIMEWORLD DISTRICT</h1>
    <h2 className='my-5'>At Primeworld District, residents don’t have to leave home to enjoy summer activities. Facilities to match any premium resort are found on the amenity area, promising outdoor fun all year round.</h2>
    <div className='' style={{margin:'20px auto'}}>
        <p style={{fontSize:'18px', fontWeight:'bold'}}>Project Location:</p>
        <p style={{fontSize:'18px', }}>Ibabao Gisi - Agus Rd., Lapu Lapu City , Cebu</p>
    </div>
</div>
        </div>

<div className={styles.hr}></div>


<div className={styles.intro}>
<h2>PRIMEWORLD DISTRICT</h2>
<p>
The flagship project of Primeworld Land Holdings Incorporated in the Island of Mactan, province of Cebu. The resort themed vertical community development is designed to offer not only permanent residential accommodation but also hotelier assistance to everyone. It will also be a great place for foreigners who wish to retire in Mactan, Cebu.
</p>
<div className={styles.img}>
<ProjectsImage images={first} />
</div>

</div>

<div className={styles.location}>
<h2>Location</h2>
<div className={styles.details}>

  <div style={{display:'flex'}}><p>20 mins.</p>
  <h4>Mactan Cebu Intenrational Airport (MCIA)</h4></div>


  <div style={{display:'flex'}}><p>7 mins.</p>
  <h4>Mactan Doctor&apos;s Hospital</h4></div>


  <div style={{display:'flex'}}><p>12 mins.</p>
  <h4>Lapu-Lapu Best Beaches</h4></div>


  <div style={{display:'flex'}}><p>4 mins.</p>
  <h4>Gaisano Grand Mall Mactan</h4></div>


  <div style={{display:'flex'}}><p>11 mins.</p>
  <h4>
  Lapu-Lapu Cebu International College, Bangkal</h4></div>

</div>

<div className={styles.img}>
<Image src='https://i.imgur.com/VbPOdIU.png' width='700' height={700} alt='MANDTRA RESIDENCES'/>
</div>
</div>

<div className={styles.floor}>
<h3>Floor Plans</h3>
<div className={styles.details}>

  <div className={styles.card}>
    <div className={styles.cardInner}>
      <div className={styles.cardHeader}>
        <div className={styles.headerLeft}>
          <h3 className={styles.title}>Standard Studio | 1 Bedroom</h3>
        </div>
        <div className={styles.headerRight}>
          <h3 className={styles.area}>21.25 sqm</h3>
        </div>
      </div>
      <div className={styles.cardBody}>
        <ul className={styles.cardList}>
          <li>Bedroom</li>
          <li>Living/Dining Area</li>
          <li>Kitchen</li>
          <li>Toilet &amp; Bath</li>
        </ul>
      </div>
    </div>
  </div>

  <div className={styles.card}>
    <div className={styles.cardInner}>
      <div className={styles.cardHeader}>
        <div className={styles.headerLeft}>
          <h3 className={styles.title}>Superior Studio | 1 Bedroom with Balcony</h3>
        </div>
        <div className={styles.headerRight}>
          <h3 className={styles.area}>24.30 sqm</h3>
        </div>
      </div>
      <div className={styles.cardBody}>
        <ul className={styles.cardList}>
          <li>Bedroom</li>
          <li>Living/Dining Area</li>
          <li>Kitchen</li>
          <li>Toilet &amp; Bath</li>
          <li>Balcony</li>
        </ul>
      </div>
    </div>
  </div>

  <div className={styles.card}>
    <div className={styles.cardInner}>
      <div className={styles.cardHeader}>
        <div className={styles.headerLeft}>
          <h3 className={styles.title}>2 Bedroom Condo</h3>
        </div>
        <div className={styles.headerRight}>
          <h3 className={styles.area}>24.30 sqm</h3>
        </div>
      </div>
      <div className={styles.cardBody}>
        <ul className={styles.cardList}>
          <li>Master Bedroom</li>
          <li>Master Toilet &amp; Bath</li>
          <li>Bedroom 2</li>
          <li>Living/Dining Area</li>
          <li>Kitchen</li>
          <li>Foyer</li>
          <li>Toilet &amp; Bath</li>
          <li>Balcony</li>

        </ul>
      </div>
    </div>
  </div>

  <div className={styles.card}>
    <div className={styles.cardInner}>
      <div className={styles.cardHeader}>
        <div className={styles.headerLeft}>
          <h3 className={styles.title}>The Villas</h3>
        </div>
        <div className={styles.headerRight}>
          <h3 className={styles.area}>21.25 sqm</h3>
        </div>
      </div>
      <div className={styles.cardBody}>
        <h5>Ground floor</h5>
        <ul className={styles.cardList}>
          <li>Living/Dining Kitchen Area</li>
          <li>Toilet & Bath 1</li>
          <li>Bedroom 2 or Office</li>
        </ul>
        <h5>Second Floor</h5>
        <ul className={styles.cardList}>
          <li>Master Bedroom</li>
          <li>Master Toilet & Bath</li>
          <li>Bedroom 3</li>
          <li>Bedroom 4</li>
          <li>Toilet & Bath 2</li>
          <li>Balcony</li>
        </ul>
      </div>
    </div>
  </div>

</div>

<div className={styles.imgContainer}>
  <h3>Building Floor Plan</h3>
<ProjectsImage images={floorBldg} />
</div>
<div className={styles.imgContainer}>
  <h3>1 Bedroom</h3>
<ProjectsImage images={floor1Bd} />
</div>
<div className={styles.imgContainer}>
  <h3>2 Bedroom</h3>
<ProjectsImage images={floor2Bd} />
</div>
<div className={styles.imgContainer}>
  <h3>Villa</h3>
<ProjectsImage images={floorVilla} />
</div>



</div>

<div className={styles.amenities}>
<h2>Amenities</h2>
<ul>
  <li>Resort Style AmenitiesMultiple swimming pools with Jacuzzi, Leisure pool and Lap pool</li>
<li>Grand lobby with Alfresco</li>
<li>Outdoor activities</li>
<li>Gym</li>
<li>Function room and open event space</li>
<li>Commercial area</li>
<li>3 Passenger elevator and 1 cargo per tower</li>
</ul>

<div className={styles.imgs}>
<ProjectsImage images={amenities} />
</div>
</div>


<div className={styles.dress}>
<h2>Sample Dress Units</h2>

<div className={styles.imgs}>
  <h3>2 Bedroom</h3>
<ProjectsImage images={dress2} />
</div>
<div className={styles.imgs}>
  <h3>Standard Studio 1BR</h3>
<ProjectsImage images={dressStandard} />
</div>
</div>


<div className={styles.site}>
<h2>Site Pictures</h2>
<div className={styles.imgs}>
<ProjectsImage images={site} />
</div>
</div>


    </div>
  );
}
