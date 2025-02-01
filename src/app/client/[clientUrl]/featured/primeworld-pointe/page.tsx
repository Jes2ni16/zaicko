'use client';

import styles from '../page.module.css';
import Image from 'next/image';
import ProjectsImage from '../../../../components/projectsImage';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function primeworld () {

  const primeworld = [
     { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738173933/270301887_461699735341168_9135717747189606447_n_jhr9e4.jpg', alt: 'Prime World Pointe Image 1' },
    { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738174530/prime-pointe-condo-Lahug-Cebu-City-near-IT-Park-1_l3lmku.jpg', alt: 'Prime World Pointe Image 2' },
    ]

    const floor1 = [
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738173931/1brwithout-balcony_su0ssp.jpg', alt: 'Prime World Pointe floor 1' },
    ]

    const floor12 = [
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738173932/1-bedroom-with-balcony_wj52jz.jpg', alt: 'Prime World Pointe floor 1' },
    ]

    const floor2 = [
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738173930/2-bedroomswithout-balcony_ipxcwy.jpg', alt: 'Prime World Pointe floor 1' },
    ]
    const floor22 = [
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738173931/2-bedroomswithbalcony_talyrt.jpg', alt: 'Prime World Pointe floor 1' },
    ]

    const site = [
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738173927/Picture5-1_gn1bpd.jpg', alt: 'primeworld pointe 1' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738173927/Picture6_dgs2tg.jpg', alt: 'primeworld pointe 2' },
      
    ]
    const amenities = [
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738173930/gym_nnlydw.png', alt: 'Prime World Pointe amenities 1' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738173930/playground_yggvt9.png', alt: 'Prime World Pointe amenities 2' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738173930/kiddie-pool_g9azpg.png', alt: 'Prime World Pointe amenities 3' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738173929/lap-pool_nvh9g7.png', alt: 'Prime World Pointe amenities 3' },
    ]
    const deliverable = [
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738173928/286620144_968055350481419_8819633400261860055_n_yvken2.jpg', alt: 'deliverable primeworld pointe  1' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738173927/286123101_1705770093104596_2743704841932748885_n_jhngim.jpg', alt: 'deliverable primeworld pointe  2' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738173927/286126569_5530676790323831_2698128286113275864_n_z3wece.jpg', alt: 'deliverable primeworld pointe  3' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738173927/289674236_743886623601333_672982415938648794_n_anlvw2.jpg', alt: 'deliverable primeworld pointe  4' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738173927/289666889_1692441141116961_2822414527976692237_n_rlzqkz.jpg', alt: 'deliverable primeworld pointe  5' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738173926/289701785_566155381709282_518278216432200901_n_pvqouz.jpg', alt: 'deliverable primeworld pointe  6' },
    
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
    <Image src='https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738173933/270301887_461699735341168_9135717747189606447_n_jhr9e4.jpg' width='500' height={700} alt='PRIMEWORLD POINTE LAHUG'/>
</div>
<div className={styles.submin}>
    <h1 className='text-center'>PRIMEWORLD POINTE LAHUG</h1>
    <h2 className='my-5'>Primeworld believes that every Filipino deserves a good life, starting with a good home. We have made it our mission to develop quality homes in safe communities where Filipinos can thrive and live a good life.</h2>
    <div className='' style={{marginTop:'20px'}}>
        <p style={{fontSize:'18px', fontWeight:'bold'}}>Project Location:</p>
        <p style={{fontSize:'18px', }}>La Guardia 1st St., Lahug, Cebu City</p>
    </div>
</div>
        </div>

<div className={styles.hr}></div>


<div className={styles.intro}>
<h2>PRIMEWORLD POINTE LAHUG</h2>
<p>
Primeworld Land’s projects are not only economical, they’re also well situated. Primeworld Pointe Lahug is a 22-story condo near Cebu IT Park that is set to rise on First St. in Barangay Apas, just a few minutes walk away from the IT Park. The 1,000-square-meter development will have a total of 374 units, with 22 units per floor, and 72 parking lots.
</p>
<div className={styles.img}>
<ProjectsImage images={primeworld} />
</div>

</div>

<div className={styles.containers}>
<h2>Location</h2>
<ul>
  <li>1 minute going to University of Southern Philippines Foundation</li>
  <li>2 minutes going to Restaurants</li>
  <li>3 minutes going to JY Square & IT Park</li>
  <li>5 minutes going to UP Cebu</li>
  <li>6 minutes going to Ayala</li>
  <li>8 minutes to Perpetual Soccour Hospital</li>
  <li>9 minutes going to UC Banilad Campus</li>
  <li>12 minutes going to University of San Carlos Talamban</li>
  <li>12 minutes going to SM City Cebu</li>
  <li>18 minutes going to UCMed</li>
  <li>34 minutes going to Mactan-Cebu International Airport</li>
</ul>
<div className={styles.img}>
<Image src='https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738173930/map_shcf7f.jpg' width='700' height={700} alt='PRIMEWORLD POINTE LAHUG Location'/>
</div>
</div>

<div className={styles.containers}>
<h2>BUILDING ORIENTATION:</h2>

<div className={styles.details}>
<ul>
  <li>Ground Floor to 5th Floor – Parking Area</li>
  <li>6th Floor – AMENITY AREA</li>
  <li>7TH to PENTHOUSE – RESIDENTIAL UNIT</li>

</ul>
<p>UNIT OFFERINGS:</p>
<ul>
  <li>1 BEDROOM WITHOUT BALCONY</li>
  <li>1 BEDROOM WITH BALCONY </li>
  <li>2 BEDROOMS WITHOUT BALCONY
  </li>
  <li>2 BEDROOMS WITH BALCONY</li>
  <li>3 BEDROOMS WITH BALCONY</li>
  <li>Parking</li>
</ul>
<p>UNIT DETAILS & DELIVERABLE:</p>
<ul>
  <li>Painted Walls and Ceilings</li>
  <li>Complete Bathroom Fixture</li>
  <li>Bedroom Glass Partition for 1BR
  </li>
  <li>Bedroom Wall Partition for 2BR</li>
  <li>Overhead and Base kitchen Cabinet</li>
  <li>ParkingCeramic Floor Tiles</li>
</ul>

</div>
</div>


<div className={styles.containers}>
<h3>Floor Plans</h3>
<div className={styles.imgContainer}>
  <h4 style={{marginBottom:'10px'}}>1-Bedroom without Balcony</h4>
  <p>Floor Area: 21 sq.m.</p>
  <ul>
    <li>Living Area</li>
    <li>Dining Area</li>
    <li>Kitchen</li>
    <li>Toilet & Bath</li>
    <li>Bedroom 1</li>
  </ul>
<ProjectsImage images={floor1} />
</div>
<div className={styles.imgContainer}>
  <h4 style={{marginBottom:'10px'}}>1-Bedroom with Balcony</h4>
  <p>Floor Area: 23-26 sq.m.</p>
  <ul>
  <li>Living Area</li>
    <li>Dining Area</li>
    <li>Kitchen</li>
    <li>Toilet & Bath</li>
    <li>Bedroom </li>
    <li>Balcony</li>
  </ul>
<ProjectsImage images={floor12} />
</div>
<div className={styles.imgContainer}>
  <h4 style={{marginBottom:'10px'}}> 2-Bedroom without Balcony</h4>
  <p>Floor Area: 23-26 sq.m.</p>
  <ul>
  <li>Living Area</li>
    <li>Dining Area</li>
    <li>Kitchen</li>
    <li>2 Toilet & Bath</li>
    <li>Bedroom 1</li>
    <li>Bedroom 2</li>
  </ul>
<ProjectsImage images={floor2} />
</div>
<div className={styles.imgContainer}>
  <h4 style={{marginBottom:'10px'}}>2-Bedrooms with Balcony</h4>
  <p>Floor Area: 54 sq.m.</p>
  <ul>
  <li>Living Area</li>
    <li>Dining Area</li>
    <li>Kitchen</li>
    <li>2 Toilet & Bath</li>
    <li>Bedroom 1</li>
    <li>Bedroom 2</li>
    <li>Balcony</li>
  </ul>
<ProjectsImage images={floor22} />
</div>
</div>
  

<div className={styles.containers}>
<h2>Amenities</h2>
<ul>
  <li>GYM</li>
  <li>PLAYGROUND</li>
  <li>LAP POOL</li>
  <li>KIDDIE POOL</li>
  <li>LOUNGE POOL</li>
  <li>FUNCTION ROOMS</li>
</ul>
<div className={styles.imgs}>
<ProjectsImage images={amenities} />
</div>
</div>

<div className={styles.deliverable}>
<h2>Deliverable Unit</h2>
<div className={styles.imgs}>
<ProjectsImage images={deliverable} />
</div>
</div>

<div className={styles.containers}>
<h2>Site Pictures</h2>
<div className={styles.imgs}>
<ProjectsImage images={site} />
</div>
</div>


    </div>
  );
}
