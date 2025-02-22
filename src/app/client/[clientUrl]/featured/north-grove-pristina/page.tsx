

import styles from '../page.module.css';
import Image from 'next/image';
import ProjectsImage from '../projectsImage';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Metadata } from 'next';



export const generateMetadata = async ({ params }: { params: Promise<{ clientUrl: string }>;}): Promise<Metadata>  => {
 
  const {clientUrl} = await params;

  const client = await fetch(`https://zaiko-server.vercel.app/api/clients/url/${clientUrl}`).then((res) => res.json());

  return {
    title: `North Grove at Pristina Town  | ${client.name} `,
   description: 'North Grove at Pristina Town offers a peaceful, garden-inspired condominium living in Cebu. Discover Lumina and Terra towers with modern amenities, surrounded by nature’s tranquility.',
     openGraph: {
       title: `North Grove at Pristina Town  | ${client.name}`,
        description: 'North Grove at Pristina Town offers a peaceful, garden-inspired condominium living in Cebu. Discover Lumina and Terra towers with modern amenities, surrounded by nature’s tranquility.',
      images: ['https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605900/9-NORTH-GROVE_okraor.jpg'],
      url:`https://zaiko.website/client/${client.url}/featured/north-grove-pristina`,
      type:'website'
  },
}
}


export default function NorthGrove () {

  const northGrove = [
     { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605901/16-roof-deck_djktsv.jpg', alt: 'North Grove Pristina Image 1' },
    { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605900/18-LUMINA-TOWER-ZEN-GARDEN_katfyw.jpg', alt: 'North Grove Pristina Image 2' },
    { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605900/9-NORTH-GROVE_okraor.jpg', alt: 'North Grove Pristina Image 2' },
    ]

    const location = [
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738646707/11-LOCATION_1_r6osgy.jpg', alt: 'North Grove Pristina Image 1' },
    
     ]
 

    const amenities1 = [
        { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605900/15-SHARED-AMENITIES_ktnb29.jpg', alt: 'North Grove Pristina amenities' },
       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605901/16-lappool_sttjmg.jpg', alt: 'North Grove Pristina Image 2' },
       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605900/16-kids-play-area_uqt6v3.jpg', alt: 'North Grove Pristina amenities' },
       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605901/16-meditation_yoga-room_w7mtlu.jpg', alt: 'North Grove Pristina amenities' },
       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605897/16-clubhouse_doopwe.jpg', alt: 'North Grove Pristina amenities' },
       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605898/17-retail-area_hdcaqi.jpg', alt: 'North Grove Pristina amenities' },
       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605898/17-retail-area1_axxqbd.jpg', alt: 'North Grove Pristina amenities' },
       ]

       const amenities2 = [
        { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738644856/19-LUMINA-GAME-ROOM_uksbea.jpg', alt: 'North Grove Pristina amenities' },
       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738644856/18-LUMINA_HALLWAY_1_f1olot.jpg', alt: 'North Grove Pristina Image 2' },
       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738644856/18-LUMINA-TOWER-ENTRY_1_qacrbt.jpg', alt: 'North Grove Pristina amenities' },
       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738644856/18-LUMINA-LOBBY-AREA_1_dqa3wi.jpg', alt: 'North Grove Pristina amenities' },
       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738644856/18-LUMINA-LOUNGE_1_yh4n0s.jpg', alt: 'North Grove Pristina amenities' },
       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605900/18-LUMINA-TOWER-ZEN-GARDEN_katfyw.jpg', alt: 'North Grove Pristina amenities' },
       ]

       
       const amenities3 = [
        { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605897/5-lounge-terra_vxgvox.jpg', alt: 'North Grove Pristina amenities' },
       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605899/3-lobby-entrance_ybucks.jpg', alt: 'North Grove Pristina Image 2' },
       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605898/6-gym-terra_db9vwk.jpg', alt: 'North Grove Pristina amenities' },
       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605898/7-pocket-garden_o4ydkf.jpg', alt: 'North Grove Pristina amenities' },
       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605897/4-lobby-tierra_amb56p.jpg', alt: 'North Grove Pristina amenities' },
       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605898/8-hallway-terra_jheprq.jpg', alt: 'North Grove Pristina amenities' },
       ]

       const unitDetails1 = [
        { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605903/studio_lip2lq.jpg', alt: 'North Grove Pristina amenities' },
       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605903/23-LUMINA-1-BEDROOM-DELIVERABLE_od1luk.jpg', alt: 'North Grove Pristina Image 2' },
       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605903/23-LUMINA-1-BEDROOM-DELIVERABLE1_muflbn.jpg', alt: 'North Grove Pristina amenities' },
       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605903/22-LUMINA-STUDIO-UNIT_yvs0wd.jpg', alt: 'North Grove Pristina amenities' },
       ]

       const unitDetails2 = [
        { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605902/studio-dressed-up-1_pvmecu.jpg', alt: 'North Grove Pristina amenities' },
       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605903/studio_lip2lq.jpg', alt: 'North Grove Pristina Image 2' },
       ]

       const floor = [
        { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605902/22-LUMINA-STUDIO-UNIT-1_dxossn.jpg', alt: 'North Grove Pristina amenities' },
       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605902/23-LUMINA-1-BEDROOM-DELIVERABLE2-1_ei5ll8.jpg', alt: 'North Grove Pristina Image 2' },

       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605902/studio_fp_stsezn.jpg', alt: 'North Grove Pristina Image 2' },
       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605901/23-LUMINA-STUDIO-COMBINE_ofgr5o.jpg', alt: 'North Grove Pristina Image 2' },
       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605903/23-LUMINA-STUDIO-FP_bjyrmf.jpg', alt: 'North Grove Pristina Image 2' },
       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605902/23-LUMINA-1-BEDROOM_g8xrph.jpg', alt: 'North Grove Pristina Image 2' },
       { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605902/23-LUMINA-3-STUDIOS-COMBINE_hgjenx.jpg', alt: 'North Grove Pristina Image 2' },
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
    <Image src='https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738605900/9-NORTH-GROVE_okraor.jpg' width='500' height={700} alt='North grove Pristina'/>
</div>
<div className={styles.submin}>
    <h1 className='text-center'>NORTH GROVE AT PRISTINA TOWN</h1>
    <p className='my-5'>North Grove at Pristina Town is a garden-inspired residential condominium development designed to offer a serene lifestyle, allowing Cebuanos to experience the perfect balance of modern condo living and the soothing tranquility of nature. It provides a peaceful retreat where the comforts of contemporary living meet the calmness of nature’s embrace.</p>
    <div className='' style={{marginTop:'20px'}}>
        <p style={{fontSize:'18px', fontWeight:'bold'}}>Project Location:</p>
        <p style={{fontSize:'18px', }}>Brgy. Bacayan, Cebu City.</p>
    </div>
</div>
        </div>

<div className={styles.hr}></div>


<div className={styles.intro}>
<h2>NORTH GROVE AT PRISTINA TOWN</h2>
<p>
The development features two distinctive towers, Lumina and Terra, thoughtfully crafted to blend harmoniously with the natural surroundings. These towers symbolize the balance between contrasts, creating living spaces where diverse lifestyles can coexist and thrive.
</p>
<div className={styles.img}>
<ProjectsImage images={northGrove} />
</div>

</div>

<div className={styles.containers}>
<h2>Location</h2>
<ul>
  <li>1.3 km to Cebu International School</li>
<li> 1.5 km to Tabor Hills</li>
<li> 1.3km to Maria Montessori International School</li>
<li>1.6km to Robinsons Supermarket Talamban Time Square </li>
<li> 1.7km to Cebu North General Hospital</li>
<li>1.71km to San Isidro Parish Church </li>
<li>2.5km to Gaisano Grand Talamban </li>
<li> 2.9km to Sacred Heart Ateneo De Cebu</li>
<li>3.3km to D’Family Park </li>
<li>3.6km to University of San Carlos – Talamban Campus </li>
<li> 1 Bus ride to Ayala Mall, IT Park & Colon</li>
</ul>
<div className={styles.locationImg}>
<ProjectsImage images={location} />
</div>
</div>

<div className={styles.containers}>
<h2>PROJECT DETAILS:</h2>

<div className={styles.details}>
    <p>LUMINA TOWER (TOWER 1) </p>
    <ul>
        <li> 12 Floors</li>
        <li>Studio – 386 Units </li>
        <li> One-Bedroom – 63 Units</li>
        <li> Parking – 87 Slots</li>
    </ul>
<p>TERRA TOWER (TOWER 2) </p>
    <ul>
        <li> 16 Floors</li>
        <li>Studio – 643 Units </li>
        <li> Parking: 100 Slots</li>
    </ul>

<p>FEATURES:</p>
<ul>
  <li>Retail Spaces </li>
  <li> Separate & independent residential lobbies per tower</li>
  <li> Multiple passenger elevators per tower</li>
  <li>Inter-connected amenity/communal areas </li>
  <li> Dedicated pedestrian drop zones per tower</li>
  <li>Podium level retail and residential parking </li>
  <li>Sky Garden Decks </li>
  <li>Combinable units </li>
  <li> Large windows for Lumina Tower</li>
  <li> Unit Balconies (all 1 Bedroom units & Selected studio units of Lumina Tower)</li>
  <li> Hybrid (window/split) accu provisions for all 1 Bedroom Units & selected studio units of Lumina Tower</li>
  <li> Garbage Holding room per residential Floor</li>
  <li> 100% back-up power</li>
  <li> 24/7 Security system</li>
  <li> Property management services</li>
</ul>
</div>
</div>


<div className={styles.containers}>
<h2>AMENITIES AND FACILITIES:</h2>

<div className={styles.details}>
<p>SHARED AMENITIES:</p>
<ol>
    <li>Walkway </li>
    <li> Wet Chaise Lounge </li>
    <li> Lap Pool </li>
    <li> Kiddie Pool
    </li>
    <li> Pool Deck</li>
    <li> Outdoor Shower</li>
    <li>Multipurpose Deck </li>
    <li> Seatwall</li>
    <li>Kids Play Area </li>
    <li>Mother’s Watch </li>
    <li>Fitness Station </li>
    <li> Yoga Station</li>
    <li>Seating Area </li>
    <li> Access Ramp</li>
    <li>Lounging Area </li>
    <li> Pocket Garden</li>
</ol>
<p>RETAIL SPACES:</p>
<span>Podium Type Retail Area with an expansive 1,800 sq.m. Supermarket Area and 1,908 sq.m. potential space for fresh concepts that residents will enjoy.</span>
<p>LIVING SPACES</p>
<span>
Designed to provide residents with generous access to both nature and urban conveniences – all within a serene environment that fosters a well-balanced lifestyle.</span>

</div>
<ProjectsImage images={amenities1} />
</div>

<div className={styles.containers}>
<h2>LUMINA TOWER AMENITIES & FACILITIES:</h2>
<p>Lumina Tower has expansive green space, lower floor density and exclusive premier garden amenities. Design takes inspiration from the light coastal palette and the sweeping forms that are created when light meets waters.</p>
<div className={styles.details}>
<p>Exclusive Premier Amenities include:</p>
<ul>
    <li>Lobby </li>
    <li>Fitness Gym </li>
    <li> Game Room</li>
    <li>Zen Garden </li>
    <li>Sky Garden Deck </li>
    <li> Lounge Deck</li>
    <li>Multi-Purpose Deck </li>
</ul>

</div>
<ProjectsImage images={amenities2} />
</div>
  

<div className={styles.containers}>
<h2>TERRA TOWER AMENITIES & FACILITIES:</h2>
<p>Terra Tower has a vibrant and active vibe. Design is influenced from the tone of the forest, protected landscapes and replicates the natural rigid forms of the abundant naturescapes.</p>
<div className={styles.details}>
    <p>Exclusive Premier Amenities Include: </p>
    <ul>
        <li>Fitness Gym </li>
        <li>Lobby </li>
        <li> Lounge</li>
        <li>Pocket Gardens </li>
        <li>Multi-Purpose Deck </li>
    </ul>
</div>

<ProjectsImage images={amenities3} />

</div>

<div className={styles.containers}>
<h2>UNIT DETAILS AND FEATURES:</h2>
<p><strong>LUMINA TOWER: </strong></p>
<p>Residential Units offered are Studio, One-Bedroom Units and One Bedroom Garden Units ranging from 24 to 35.14 sq.m with full height windows.</p>
<div className={styles.details}>
<ul>
    <li> Painted walls, partition and ceiling</li>
    <li> Vinyl plank flooring (1 BR Unit – Bedroom Area)</li>
    <li>Homogeneous tiles (Kitchen l Dining l Living) </li>
    <li> Non-slip ceramic tiles (T&B Balcony)</li>
    <li> Complete T&B fixtures with shower heater power provision only</li>
    <li> Full height window</li>
    <li> Kitchen base cabinets only with granite countertop</li>
    <li>Provision for kitchen exhaust </li>
    <li> Fire smoke detector and suppression system</li>
    <li>Hybrid (window/split) ACCU provisions </li>
    <li>Telephone, internet ready and CATV </li>
</ul>
</div>
<ProjectsImage images={unitDetails1} />
<p><strong>TERRA TOWER:</strong></p>
<p>Residential Units offered are all Studio Units with size range from 22.75 to 25.37 sq.m.</p>
<div className={styles.details}>
<ul>
<li>Painted walls, partition and ceiling </li>
<li> Ceramic tiles flooring</li>
<li>Ceramic non-slip floor tiles for T&B and balcony </li>
<li>Complete T&B fixtures with shower heater power provision only </li>
<li> Standard size casement windows</li>
<li> Kitchen base cabinets only with granite countertop</li>
<li> Provision kitchen exhaust</li>
<li> Fire smoke detector and suppression system</li>
<li> Air conditioning opening and outlet only</li>
<li>Telephone, internet ready and CATV </li>
</ul>
</div>
<ProjectsImage images={unitDetails2} />
</div>

<div className={styles.containers}>
<h2>Floor Plan</h2>
<div className={styles.imgs}>
<ProjectsImage images={floor} />
</div>
</div>


    </div>
  );
}
