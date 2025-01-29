'use client';

import styles from './page.module.css';
import Image from 'next/image';
import ProjectsImage from '../../../../components/projectsImage';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function LeMenda() {

  const leMenda = [
     { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171260/8g0sKQZ_xjltap.webp', alt: 'Le Menda Image 1' },
    { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171259/vP0ZwPw_djyifh.webp', alt: 'Le Menda Image 2' },
    { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171260/W4IKSJQ_tgpo1e.webp', alt: 'Le Menda Image 3' },
    ]

    const floor = [
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171259/YQjmQ5f_ej7lix.webp', alt: 'Le Menda floor 1' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171259/NXUjLiR_fzb29s.webp', alt: 'Le Menda floor 2' },
    ]

    const site = [
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171256/o8KYAcB_ycjza4.webp', alt: 'lemenda site 1' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171256/vP0ZwPw_1_zzhakr.webp', alt: 'lemenda site 2' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171256/85CFWCG_cxomls.webp', alt: 'lemenda site 3' },
    ]

    const amenities = [
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171258/qNuLS51_izcjvj.webp', alt: 'Le menda amenities 1' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171258/RnaCnzi_thuy25.webp', alt: 'Le menda amenities 2' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171258/BhSbdaf_b03iwe.webp', alt: 'Le menda amenities 3' },
    ]
    const deliverable = [
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171257/OEAnRfB_pofp6e.webp', alt: 'deliverable lemenda 1' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171257/0aUGfFu_kk0yup.webp', alt: 'deliverable lemenda 2' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171256/R7uqnO5_wssyzw.webp', alt: 'deliverable lemenda 3' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171257/8oAiI2N_py1hgs.webp', alt: 'deliverable lemenda 4' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171257/78DB6f5_qr2aon.webp', alt: 'deliverable lemenda 5' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171256/BNmblJv_vcnxxi.webp', alt: 'deliverable lemenda 6' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171256/zcp1M1x_ohgol5.webp', alt: 'deliverable lemenda 7' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171256/J3siTxa_xbk4ad.webp', alt: 'deliverable lemenda 8' },
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
    <Image src='https://i.imgur.com/W4IKSJQ.jpg' width='500' height={700} alt='Le Menda-Busay'/>
</div>
<div className={styles.submin}>
  <p style={{textAlign:'center', margin:'10px auto', color:'#0E6543'}}>Where beauty meets convenience and luxury.</p>
    <h1 className='text-center'>Le Menda-Busay</h1>
    <h2 className='my-5'>Le Menda Residences is a luxurious residential development located in Busay, Cebu, Philippines. Situated in the picturesque mountains of Cebu, it offers residents breathtaking views of the city skyline and the surrounding natural beauty.</h2>
    <div className='' style={{marginTop:'20px'}}>
        <p style={{fontSize:'18px', fontWeight:'bold'}}>Project Location:</p>
        <p style={{fontSize:'18px', }}>Plazaville Subdivision, Veterans Drive, Busay Cebu City</p>
    </div>
</div>
        </div>

<div className={styles.hr}></div>


<div className={styles.intro}>
<h2>Le Menda-Busay</h2>
<p>
The development boasts of modern amenities and facilities, catering to the needs and preferences of its residents. These amenities may include swimming pools, fitness centers, landscaped gardens, recreational areas, and more. Le Menda Residences aims to provide a serene and upscale living environment while still being conveniently located near urban conveniences. It&apos;s an ideal choice for those seeking a peaceful retreat away from the hustle and bustle of the city without sacrificing modern comforts.
</p>
<div className={styles.img}>
<ProjectsImage images={leMenda} />
</div>

</div>

<div className={styles.location}>
<h3>Location</h3>
<p>
Situated in Plazaville Subdivision, Veterans Drive, Busay Cebu City, Leading tourist destinations, restaurants, premier malls and major establishments are a few meters away this shows how accessible and ideal the location.
</p>
<div className={styles.img}>
<Image src='https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171259/PmA9gVV_hay78z.webp' width='700' height={700} alt='Le Menda-Busay Location'/>
</div>
</div>

<div className={styles.floor}>
<h3>Floor Plans</h3>
<p>
Le Menda Residences aims to provide a serene and upscale living environment while still being conveniently located near urban conveniences. It&apos;s an ideal choice for those seeking a peaceful retreat away from the hustle and bustle of the city without sacrificing modern comforts.
</p>
<ul>
  <li>
  Cebu Hilltop Hotel
  </li>
  <li> Marco Polo Hotel</li>
  <li> Tops Restobar</li>
  <li> Mercedes Benz</li>
  <li> Ford Cebu</li>
  <li>BMW </li>
<li>Dolce </li>
<li> Bellini</li>
<li>Anzani </li>
<li> 
JY Square Mall</li>
<li> Waterfront Hotel</li>
<li>Asiatown IT Park</li>
</ul>
<div className={styles.imgContainer}>
  <h4 style={{marginBottom:'10px'}}>1 Bedroom</h4>

<ProjectsImage images={floor} />
</div>


</div>

<div className={styles.buildingFeatures}>
<h2>Building Features</h2>

<div className={styles.details}>
<p>Unit Inclusions</p>
<ul>
  <li>ome Theatre System with 40″ Smart TV</li>
  <li>TV Stand</li>
  <li>Split AC Unit</li>
  <li>Ward Drobe</li>
  <li>Dresser</li>
  <li>Bed</li>
  <li>Bed Side Table</li>
</ul>
<p>Utilities</p>
<ul>
  <li>24/7 Security</li>
  <li>Smoke Detectors & Sprinklers</li>
  <li>Standby Back-up Power</li>
  <li>Water Treatment Facility</li>
  <li>Garbage Chute</li>
</ul>
<p>Fixtures</p>
<ul>
  <li>Smoke detectors</li>
  <li>Intercom System</li>
  <li>Sprinklers</li>
  <li>Range Hood</li>
  <li>Shower Enclosure</li>
  <li>Vanity</li>
</ul>
<p>Complete Furnishing</p>
<ul>
  <li>Living</li>
  <li>Dining</li>
  <li>Kitchen</li>
  <li>Entertainment</li>
  <li>Bedroom</li>
</ul>

</div>
</div>

<div className={styles.amenities}>
<h2>Amenities</h2>
<ul>
  <li>Lobby</li>
  <li>Reception Area</li>
  <li>Admin office</li>
  <li>Security room</li>
  <li>CCTV</li>
  <li>Postal box area</li>
<li>Pre-function area with seats</li>
<li>Day care centre</li>
<li>Community hall</li>
<li>Gym and fitness center</li>
<li>Theater room</li>
<li> Computer/ game room</li>
<li>Table tennis/ billiard room </li>
<li>Swimming pool</li>
<li>Kiddie pool</li>
<li>Sauna room</li>
<li>Changing room</li>
<li>Outdoor shower area</li>
<li>BBQ area</li>
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

<div className={styles.site}>
<h2>Site Pictures</h2>
<div className={styles.imgs}>
<ProjectsImage images={site} />
</div>
</div>


    </div>
  );
}
