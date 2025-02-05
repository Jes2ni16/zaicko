
import styles from './page.module.css';
import Image from 'next/image';
import ProjectsImage from '../projectsImage';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Urban Deca Homes | Affordable Urban Living in Mandaue City',
  description: 'Urban Deca Homes offers affordable living in Mandaue City with easy access to malls, universities, and businesses. Enjoy modern amenities and a prime location at an affordable price.',
  openGraph: {
    title: 'Urban Deca Homes | Affordable Urban Living in Mandaue City',
    description: 'Located in the heart of Mandaue City, Urban Deca Homes provides affordable, quality condos with modern amenities, perfect for urban living close to everything you need.',
    images: ['https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172068/ge2cJUG_ioh2hu.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urban Deca Homes | Affordable Urban Living in Mandaue City',
    description: 'Experience affordable and comfortable living at Urban Deca Homes in Mandaue City with easy access to major commercial, business, and leisure spots.',
    images: ['https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172068/ge2cJUG_ioh2hu.webp'],
  },
}



export default function UrbanDeca() {

  const first = [
     { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172068/ge2cJUG_ioh2hu.webp', alt: 'Urban Image' },
    { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172067/wPZUahz_m0psvn.webp', alt: 'Urban Featured 2' },
    ]

    const floor = [
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172066/s81aacv_n4xvdv.webp', alt: 'Urban floor 1' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172065/iykC9Vs_hswz2z.webp', alt: 'Urban floor 3' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172064/LmdIqV9_gctlz6.webp', alt: 'Urban floor 4' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172065/T2G2raR_hpisix.webp', alt: 'Urban floor 2' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172064/S4eGT8D_ldijg1.webp', alt: 'Urban floor 5' },
    ]


    const amenities = [
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172064/lDPRu2L_qf9ieh.webp', alt: 'Urban amenities 1' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172063/bGolAMJ_x4dhtc.webp', alt: 'Urban amenities 2' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172062/k9iELcU_rj53iu.webp', alt: 'Urban amenities 3' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172062/zMmkUEo_oyoxnj.webp', alt: 'Urban amenities 4' },
    ]

    const dress = [
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172062/pEgVuqK_gxqbox.webp', alt: 'Urban dress 1' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172062/xSgZuGj_mtmepq.webp', alt: 'Urban dress 2' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172061/9ytKS8X_yvjjdm.webp', alt: 'Urban dress 3' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172061/HN4hiab_qkwk7j.webp', alt: 'Urban dress 5' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172060/LdnJtFZ_iotyqe.webp', alt: 'Urban dress 6' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172060/Yg9AlkV_mhr1yb.webp', alt: 'Urban dress 7' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172059/pxuy894_sqfyea.webp', alt: 'Urban dress 4' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172059/YiQrfkv_rc6a7t.webp', alt: 'Urban dress 8' },
    ]

    const deliverable = [
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172059/nnE0mC1_pvmnt0.webp', alt: 'deliverable 1' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172059/id1wJyl_azj1qc.webp', alt: 'deliverable 2' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172058/nArCONQ_omdpq7.webp', alt: 'deliverable 3' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172058/OGVPkz7_pbc8kh.webp', alt: 'deliverable 4' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172058/C9sTnZC_zrm8ze.webp', alt: 'deliverable 5' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171931/JaXROJc_qqumwp.webp', alt: 'deliverable 6' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171923/qcHUeNw_mqyvjo.webp', alt: 'deliverable 7' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171922/P5ZozU3_mub5of.webp', alt: 'deliverable 8' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171922/vMWGxEA_q5fi6n.webp', alt: 'deliverable 9' },
    ]

    
    const site = [
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171922/2qguy9k_fv5ij2.webp', alt: 'Site Image 1' },
      { src: 'https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738171921/ZRQykkB_uxbrkp.webp', alt: 'Site Image 2' },
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
    <Image src='https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172068/ge2cJUG_ioh2hu.webp' width='500' height={700} alt='URBAN DECA MANDAUE'/>
</div>
<div className={styles.submin}>
  
<h2 className={styles.subTitle}>Urban Living in the Business District of Mandaue</h2>
<h1 className='text-center'>URBAN DECA HOMES</h1>
    <h2 className='my-5'>Enjoy urban living within the business district of Mandaue City. Homeowners have close and easy access to malls, universities, churches, a hospital, international airport, as well as business and commercial districts in the metro.</h2>
    <div className='' style={{margin:'20px auto'}}>
        <p style={{fontSize:'18px', fontWeight:'bold'}}>Project Location:</p>
        <p style={{fontSize:'18px', }}>Near AS Fortuna St. | P. Basubas St. Tipolo Mandaue City</p>
    </div>
</div>
        </div>

<div className={styles.hr}></div>


<div className={styles.intro}>
<h2>URBAN DECA HOMES</h2>
<p>
Live in a home with modern amenities and unbeatable location at a price you can afford. Urban Deca Homes Banilad is a quality addition to the 8990 Holdings, Inc. brand. Our community consists of three towers spanning 18,880 square meters of prime area along A.S. Fortuna in Barangay Banilad. A big part of the space is set aside for open spaces so families will have a venue for outdoor recreation and entertainment activities. The UDH Banilad residential development lives up to the 8990 promise of quality and durable homes at affordable prices. Our condos are equipped with modern conveniences, including four elevators per building, generator sets in case of power outages, pressurized water tanks, tiled and lighted hallways, and four air blowers per floor. To ensure the safety and security of unit owners, smoke detectors, fire alarms and sprinkler systems, emergency lights, and CCTVs are provided in all towers.
</p>
<div className={styles.img}>
<ProjectsImage images={first} />
</div>

</div>

<div className={styles.location}>
<p>Location</p>
<div className={styles.img}>
<Image src='https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738172066/yJgMc6z_aktx79.webp' width='700' height={700} alt='UrbanDeca RESIDENCES'/>
</div>
</div>

<div className={styles.floor}>
<h3>Floor Plans</h3>
<div className={styles.imgContainer}>
<div className=''>
<ProjectsImage images={floor} />
</div>
</div>

</div>

<div className={styles.projectDetails}>
<h2>PROJECT DETAILS</h2>


<p>UDH Banilad topped off its second tower in November 2022 and is on its way to building the third condominium in the community. A typical building floor will have a mix of the different unit types while individual unit designs follow a space-saving, rectangular plan. Parking will be on a ground level of each tower, separate facility, and outdoor with the following arrangements: parking building – 145 slots; Tower 1 – 112 slots; Tower 2 – 112 slots; Tower 3 – 92 slots; and outdoor – 84 slots. There will be a total 545 slots for cas and 100 for motorcycles. The three towers will feature a total of 3,264 units divided into the following floor areas:</p>

<div className={styles.details}>
<p>2-Bedroom A – 35.57 square meters </p>
<p>2-Bedroom B – 30.60 square meters
</p>
<p>2-Bedroom C – 35.06 square meters</p>
<p>3-Bedroom – 42.07 square meters</p>
</div>


</div>

<div className={styles.amenities}>
<h2>Amenities</h2>
<p style={{fontSize:'20px'}}>You can enjoy our wide range of amenities.</p>

<div className={styles.imgs}>
<ProjectsImage images={amenities} />
</div>
</div>


<div className={styles.dress}>
<h2>Sample Dress Units</h2>

<div className={styles.imgs}>
<ProjectsImage images={dress} />
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
