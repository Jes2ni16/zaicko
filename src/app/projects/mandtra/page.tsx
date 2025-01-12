'use client';

import styles from './page.module.css';
import Image from 'next/image';
import ProjectsImage from '..//../components/projectsImage';

export default function Mandtra() {

  const mandtra = [
     { src: 'https://i.imgur.com/6jjNq8v.jpg', alt: 'Image 1' },
    { src: 'https://i.imgur.com/xqXLrSI.jpg', alt: 'Image 2' },
    { src: 'https://i.imgur.com/1sDAOHS.png', alt: 'Image 3' },
    ]

    const oneBedroom = [
      { src: 'https://i.imgur.com/IwAzT7X.jpg', alt: 'Image 1' },
      { src: 'https://i.imgur.com/G360d6w.jpg', alt: 'Image 2' },
    ]

    const studioUnit = [
      { src: 'https://i.imgur.com/TAuuzI0.jpg', alt: 'Image 1' },
      { src: 'https://i.imgur.com/hy4UVQg.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/9ektkrW.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/7IYUAXT.jpg', alt: 'Image 2' },
    ]

    const tower1 = [
      { src: 'https://i.imgur.com/MYprD1c.jpg', alt: 'Image 1' },
      { src: 'https://i.imgur.com/cs9AyRX.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/AruhKta.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/HlbychQ.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/yMNUJO6.jpg', alt: 'Image 2' },
    ]
    const tower2 = [
      { src: 'https://i.imgur.com/qCh9Gz7.jpg', alt: 'Image 1' },
      { src: 'https://i.imgur.com/aFTkeDr.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/2R9xrO5.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/LC0g6eE.jpg', alt: 'Image 2' },
    ]
    const tower3 = [
      { src: 'https://i.imgur.com/Gm20Rpz.jpg', alt: 'Image 1' },
      { src: 'https://i.imgur.com/aVLlZ8S.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/fqas53G.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/2h2yZX0.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/NJ9CwUj.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/QokPemi.jpg', alt: 'Image 2' },
    ]
    const amenities = [
      { src: 'https://i.imgur.com/OpTcABy.png', alt: 'Image 1' },
      { src: 'https://i.imgur.com/zBkEiQk.png', alt: 'Image 2' },
      { src: 'https://i.imgur.com/XEaDYen.png', alt: 'Image 2' },
      { src: 'https://i.imgur.com/WvmrSjU.png', alt: 'Image 2' },
      { src: 'https://i.imgur.com/VhLb1GW.png', alt: 'Image 2' },
      { src: 'https://i.imgur.com/9iNLwp5.png', alt: 'Image 2' },
    ]


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
<div className="">
<ProjectsImage images={mandtra} />
</div>

</div>

<div className={styles.thirdFold}>
<p>Location</p>
<div className={styles.img}>
<Image src='https://i.imgur.com/5A5RVck.png' width='700' height={700} alt='MANDTRA RESIDENCES'/>
</div>
</div>

<div className={styles.fourthFold}>
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

<div className={styles.fifthFold}>
<h2>PROJECT DETAILS</h2>
<p style={{margin:'20px 0', fontSize:'20px'}}>
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
