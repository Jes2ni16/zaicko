'use client';

import styles from './page.module.css';
import Image from 'next/image';
import ProjectsImage from '..//../components/projectsImage';

export default function Mandtra() {

  const first = [
     { src: 'https://i.imgur.com/ge2cJUG.jpg', alt: 'Image 1' },
    { src: 'https://i.imgur.com/wPZUahz.jpg', alt: 'Image 2' },
    ]

    const floor = [
      { src: 'https://i.imgur.com/s81aacv.jpg', alt: 'Image 1' },
      { src: 'https://i.imgur.com/iykC9Vs.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/T2G2raR.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/LmdIqV9.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/S4eGT8D.jpg', alt: 'Image 2' },
    ]


    const amenities = [
      { src: 'https://i.imgur.com/lDPRu2L.jpg', alt: 'Image 1' },
      { src: 'https://i.imgur.com/bGolAMJ.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/zMmkUEo.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/k9iELcU.jpg', alt: 'Image 2' },
    ]

    const dress = [
      { src: 'https://i.imgur.com/pEgVuqK.jpg', alt: 'Image 1' },
      { src: 'https://i.imgur.com/xSgZuGj.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/9ytKS8X.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/HN4hiab.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/LdnJtFZ.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/Yg9AlkV.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/pxuy894.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/YiQrfkv.jpg', alt: 'Image 2' },
    ]

    const deliverable = [
      { src: 'https://i.imgur.com/nnE0mC1.jpg', alt: 'Image 1' },
      { src: 'https://i.imgur.com/id1wJyl.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/OGVPkz7.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/C9sTnZC.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/nArCONQ.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/JaXROJc.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/qcHUeNw.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/P5ZozU3.jpg', alt: 'Image 2' },
      { src: 'https://i.imgur.com/vMWGxEA.jpg', alt: 'Image 2' },
    ]

    
    const site = [
      { src: 'https://i.imgur.com/2qguy9k.png', alt: 'Image 1' },
      { src: 'https://i.imgur.com/ZRQykkB.jpg', alt: 'Image 2' },
    ]





  return (
    <div className={styles.body}>
        <div className={styles.headPart}>
<div className={styles.img}>
    <Image src='https://i.imgur.com/6jjNq8v.jpg' width='500' height={700} alt='MANDTRA RESIDENCES'/>
</div>
<div className={styles.submin}>
<h2 className={styles.subTitle}>Urban Living in the Business District of Mandaue</h2>
<h1 className='text-center'>URBAN DECA HOMES</h1>
    <h2 className='my-5'>Enjoy urban living within the business district of Mandaue City. Homeowners have close and easy access to malls, universities, churches, a hospital, international airport, as well as business and commercial districts in the metro.</h2>
    <div className='d-flex align-items-center'>
        <p className='mb-2'>Project Location: </p>
        <h2 className='ms-4 text-bold'>NNear AS Fortuna St. | P. Basubas St. Tipolo Mandaue City</h2>
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
<Image src='https://i.imgur.com/yJgMc6z.jpg' width='700' height={700} alt='MANDTRA RESIDENCES'/>
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
