

import { Metadata } from 'next';
import styles from './page.module.css';
import Image from 'next/image';
import ProjectsImage from '../projectsImage';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export const metadata: Metadata = {
  title: 'Mandtra Residences | Urban Tropical Living in Cebu',
  description: 'Mandtra Residences in Cebu City offers urban tropical living with modern and balanced designs. Explore 1-bedroom and studio units at the heart of Mandaue City, near AS Fortuna St. and P. Basubas St.',
  openGraph: {
    title: 'Mandtra Residences | Urban Tropical Living in Cebu',
    description: 'Experience urban tropical living with Mandtra Residences, offering modern townhouses and amenities in Mandaue City, Cebu.',
    images: ['https://i.imgur.com/6jjNq8v.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mandtra Residences | Urban Tropical Living in Cebu',
    description: 'Mandtra Residences combines Cebuano craftsmanship with modern living in a strategic location near AS Fortuna St. and P. Basubas St. in Mandaue City.',
    images: ['https://i.imgur.com/6jjNq8v.jpg'],
  },
}


export const generateMetadata = async ({ params }: { params: Promise<{ clientUrl: string }>;}): Promise<Metadata>  => {
 
  const {clientUrl} = await params;

  const client = await fetch(`https://zaiko-server.vercel.app/api/clients/url/${clientUrl}`).then((res) => res.json());

  return {
    title: `Mandtra Residences   | ${client.name} `,
   description: 'Mandtra Residences in Cebu City combines urban living with a tropical touch, offering modern and thoughtfully designed spaces. Choose from stylish 1-bedroom and studio units, centrally located in Mandaue City, just moments from AS Fortuna St. and P. Basubas St., with easy access to shopping, dining, and more.',
     openGraph: {
       title: `Mandtra Residences   | ${client.name}`,
        description: 'Mandtra Residences in Cebu City combines urban living with a tropical touch, offering modern and thoughtfully designed spaces. Choose from stylish 1-bedroom and studio units, centrally located in Mandaue City, just moments from AS Fortuna St. and P. Basubas St., with easy access to shopping, dining, and more.',
      images: ['https://i.imgur.com/6jjNq8v.jpg'],
      url:`https://zaiko.website/client/${client.url}/featured/mandtra`,
      type:'website'
  },
}
}



export default function Mandtra() {

  const mandtra = [
     { src: 'https://i.imgur.com/6jjNq8v.jpg', alt: 'Mandtra Image 1' },
    { src: 'https://i.imgur.com/xqXLrSI.jpg', alt: 'Mandtra Image 2' },
    { src: 'https://i.imgur.com/1sDAOHS.png', alt: 'Mandtra Image 3' },
    ]

    const oneBedroom = [
      { src: 'https://i.imgur.com/IwAzT7X.jpg', alt: 'One bedroom 1' },
      { src: 'https://i.imgur.com/G360d6w.jpg', alt: 'One bedroom 2' },
    ]

    const studioUnit = [
      { src: 'https://i.imgur.com/TAuuzI0.jpg', alt: 'Studio unit 1' },
      { src: 'https://i.imgur.com/hy4UVQg.jpg', alt: 'Studio unit 2' },
      { src: 'https://i.imgur.com/9ektkrW.jpg', alt: 'Studio unit 3' },
      { src: 'https://i.imgur.com/7IYUAXT.jpg', alt: 'Studio unit 4' },
    ]

    const tower1 = [
      { src: 'https://i.imgur.com/MYprD1c.jpg', alt: 'Tower1 Image 1' },
      { src: 'https://i.imgur.com/cs9AyRX.jpg', alt: 'Tower1 Image 2' },
      { src: 'https://i.imgur.com/AruhKta.jpg', alt: 'Tower1 Image 3' },
      { src: 'https://i.imgur.com/HlbychQ.jpg', alt: 'Tower1 Image 4' },
      { src: 'https://i.imgur.com/yMNUJO6.jpg', alt: 'Tower1 Image 5' },
    ]
    const tower2 = [
      { src: 'https://i.imgur.com/qCh9Gz7.jpg', alt: 'Tower2 Image 1' },
      { src: 'https://i.imgur.com/aFTkeDr.jpg', alt: 'Tower2 Image 2' },
      { src: 'https://i.imgur.com/2R9xrO5.jpg', alt: 'Tower2 Image 3' },
      { src: 'https://i.imgur.com/LC0g6eE.jpg', alt: 'Tower2 Image 4' },
    ]
    const tower3 = [
      { src: 'https://i.imgur.com/Gm20Rpz.jpg', alt: 'Tower 3 Image 1' },
      { src: 'https://i.imgur.com/aVLlZ8S.jpg', alt: 'Tower 3 Image 2' },
      { src: 'https://i.imgur.com/fqas53G.jpg', alt: 'Tower 3 Image 3' },
      { src: 'https://i.imgur.com/2h2yZX0.jpg', alt: 'Tower 3 Image 4' },
      { src: 'https://i.imgur.com/NJ9CwUj.jpg', alt: 'Tower 3 Image 5' },
      { src: 'https://i.imgur.com/QokPemi.jpg', alt: 'Tower 3 Image 6' },
    ]
    const amenities = [
      { src: 'https://i.imgur.com/OpTcABy.png', alt: 'Mandtra amenities 1' },
      { src: 'https://i.imgur.com/zBkEiQk.png', alt: 'Mandtra amenities 2' },
      { src: 'https://i.imgur.com/XEaDYen.png', alt: 'Mandtra amenities 3' },
      { src: 'https://i.imgur.com/WvmrSjU.png', alt: 'Mandtra amenities 4' },
      { src: 'https://i.imgur.com/VhLb1GW.png', alt: 'Mandtra amenities 5' },
      { src: 'https://i.imgur.com/9iNLwp5.png', alt: 'Mandtra amenities 6' },
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
    <Image src='https://i.imgur.com/6jjNq8v.jpg' width='500' height={700} alt='MANDTRA RESIDENCES'/>
</div>
<div className={styles.submin}>

    <h1 className='text-center'>MANDTRA RESIDENCES</h1>
    <h2 className='my-5'>Mandtra Residences sets the standard of Cebuano Living at the heart of its industrial heritage.</h2>
    <div className='' style={{marginTop:'20px'}}>
        <p style={{fontSize:'18px', fontWeight:'bold'}}>Project Location:</p>
        <p style={{fontSize:'18px', }}>Near AS Fortuna St. | P. Basubas St. Tipolo Mandaue City</p>
    </div>
</div>
        </div>

<div className={styles.hr}></div>


<div className={styles.intro}>
<h2>MANDTRA RESIDENCES</h2>
<p>
MANDTRA RESIDENCES is an urban tropical living built for the well balanced Cebuano life. Rooted living because of Cebuano traditions, Cebuano craftmanship and artistry. Modern and well balanced living as it brings warmth of a home in the midst of a busy city. Located at P. Basubas St. Tipolo, Mandaue Cebu City. A joint venture under Cebu Homegrown Developers, Inc. Owned and Managed by Cebu Landmasters, Inc. In partnership with Ixidor Holdings Inc.
</p>
<div className={styles.img}>
<ProjectsImage images={mandtra} />
</div>

</div>

<div className={styles.location}>
<p>Location</p>
<div className={styles.img}>
<Image src='https://i.imgur.com/5A5RVck.png' width='700' height={700} alt='MANDTRA RESIDENCES'/>
</div>
</div>

<div className={styles.floor}>
<h3>Floor Plans</h3>
<div className={styles.imgContainer}>
  <h4 style={{marginBottom:'10px'}}>1 Bedroom</h4>
<div className=''>
<ProjectsImage images={oneBedroom} />
</div>
</div>
<div className={styles.imgContainer}>
  <h4 style={{marginBottom:'10px'}}>Studio Unit</h4>
<div className=''>
<ProjectsImage images={studioUnit} />
</div>
</div>
<div className={styles.imgContainer}>
  <h4>Tower 1</h4>
<div className={styles.tower1}>
<ProjectsImage images={tower1} />
</div>
</div>
<div className={styles.imgContainer}>
  <h4>Tower 2</h4>
<div className={styles.tower2}>
<ProjectsImage images={tower2} />
</div>
</div>
<div className={styles.imgContainer}>
  <h4>Tower 3</h4>
<div className={styles.tower3}>
<ProjectsImage images={tower3} />
</div>
</div>

</div>

<div className={styles.projectDetails}>
<h2>PROJECT DETAILS</h2>
<p style={{margin:'20px 0', fontSize:'18px'}}>
Residential Condominium with Retail Areas.
</p>
<div className={styles.details}>
<p>1.24 Hecatres</p>
<p>3 Residential Towers</p>
<p>3 Levels of Podium Parking (GR, 2nd, 3rd Floor)</p>
<p>Retail Component</p>
<p>PHASE 1: Residential Tower 1</p>
<ul>
  <li>26th Floor</li>
  <li>595 Units</li>
</ul>
<p>PHASE 2: Residentail TOwer 2 - TBA</p>
<p>PHASE 3 : Residential Tower 3 - TBA</p>
<p>BUILDING FEATURES</p>
<ul>
  <li>Lobby with Reception Area</li>
  <li>3 Passenger Elevators</li>
  <li>Mail Room</li>
  <li>24/7Security</li>
  <li>Combinable Units</li>
  <li>Garbage Holding Room per floor</li>
  <li>Administration Office</li>
  <li>Property Management Services</li>
  <li>Property Management Services</li>
</ul>
<p>UNIT FEATURES</p>
<ul>
  <li>Painted Wall, Partitions and Ceilings</li>
  <li>Vinyl Planks Flooring</li>
  <li>
  Ceramic Non-slip floor tiles for T & B and Balcony
  </li>
  <li>Complete Bathroom Fixtures with Provision for Shower Heater Outlet</li>
<li>Provision for Kitchen Base Cabinet with Granite Counter Top</li>
<li>Provision for Smoke Detector and Suppression System</li>
<li>Provision for Air-conditioning Opening and Outlet</li>
<li>Provision for Cable TV, Internet & Telephone Connection</li>
</ul>
<p>UNIT TYPES</p>
<ul>
  <li>Studio Unit</li>
  <li>1 Bedroom Unit</li>
</ul>
</div>

</div>

<div className={styles.amenities}>
<h2>Amenities</h2>
<p style={{fontSize:'20px'}}>Community Amenities</p>
<ul>
  <li>Sky Garden</li>
  <li>Retail Areas</li>
  <li>Adult & Kiddie Pool</li>
  <li>Jogging Paths</li>
  <li>Clubhouse</li>
  <li>Children&apos;s Playground</li>
<li>Shower Area</li>
<li>Function Hall</li>
<li>Chapel</li>
<li>Landscape Areas</li>
<li>Wellness Lounge</li>
</ul>
<div className={styles.imgs}>
<ProjectsImage images={amenities} />
</div>
</div>


<div className={styles.constUpdate}>
<h2>Construction Updates</h2>

<div className={styles.imgs}>
<ProjectsImage images={amenities} />
</div>
</div>

    </div>
  );
}
