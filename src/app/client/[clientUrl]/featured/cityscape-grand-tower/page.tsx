
import { Metadata } from 'next'
import FullImage from '../fullScreenImg';
import styles from '../page.module.css';
import Image from 'next/image';




  export const generateMetadata = async ({ params }: { params: Promise<{ clientUrl: string }>;}): Promise<Metadata>  => {
 
    const {clientUrl} = await params;
  
    const client = await fetch(`https://zaiko-server.vercel.app/api/clients/url/${clientUrl}`).then((res) => res.json());
  
    return {
      title: `CITYSCAPE GRAND TOWER | ${client.name} `,
     description: 'Cityscape Grand Tower is a 34-storey residential condominium offering premium amenities designed for ultimate comfort, convenience, and satisfaction.',
       openGraph: {
         title: `CITYSCAPE GRAND TOWER | ${client.name}`,
          description: 'Cityscape Grand Tower is a 34-storey residential condominium offering premium amenities designed for ultimate comfort, convenience, and satisfaction.',
        images: ['https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739097546/301114756_368002265500033_2370525403385187361_n_z3zrvj.webp'],
        url:`https://zaiko.website/client/${client.url}/featured/cityscape-grand-tower`,
        type:'website'
    },
  }
  }


  
  export default function CityscapeGrand() {
    return (
    <div className={styles.body1}>

<Image src='https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739097546/301114756_368002265500033_2370525403385187361_n_z3zrvj.webp' width={500} height={500} className={styles.heroImage} alt='' sizes="(max-width: 1540px) 100vw, 1540px"/>

<section className={styles.section}>
<h1>CITYSCAPE GRAND TOWER</h1>
<p><strong>Cityscape Grand Tower</strong>&nbsp;is a 34-storey residential condominium with ultimate amenities designed to deliver comfort, convenience and satisfaction.</p>
<ul>
<li>It has 384 units, which are composed of Studio, 1 Bedroom, and 2 Bedrooms units.</li>
<li>Parking are located in the basement and podium which are also for sale.</li>
<li>It is strategically located in the middle of business and leisure centers. It takes few steps going to Cebu Business Park, Ayala Center and 5 star hotels in Cebu.</li>
</ul>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739096787/4_1_pggbkv.webp"  alt="" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"  />
</section>

<hr />
<section className={styles.section}>
<h2>LOCATION AND ACCESSIBILITY:</h2>
<p>5 minutes away from:</p>
<ul>
<li>Churches</li>
<li>Schools</li>
<li>Corporate and government offices</li>
</ul>
<p>30 minutes going to and from:</p>
<ul>
<li>MCIAA and seaport areas in Cebu</li>
</ul>
<ul>
<li>650 meters to Ayala Center Cebu</li>
<li>1.3 km to Fuente Osmena</li>
<li>1.9 km to Robinsons Galleria</li>
<li>2km to IT Park</li>
<li>3km to SM City</li>
<li>6.1km to CCLEX</li>
<li>6.6 km to SM Seaside</li>
<li>13.6km to Mactan-Cebu International Airport</li>
</ul>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739096787/15_rb24jf.webp"  alt="" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />
</section>

<hr />
<section className={styles.section}>
<h2>BUILDING FEATURES:</h2>
<ul>
<li>&nbsp;Main Entrance with revolving door</li>
<li>&nbsp;Lobby and reception desk</li>
<li>&nbsp;3 High-Speed Elevators</li>
<li>&nbsp;24-Hour standby generator</li>
<li>&nbsp;24-Hour security services</li>
<li>&nbsp;CCTV monitoring system</li>
<li>&nbsp;Fire Alarm System</li>
</ul>
<h3>BUILDING AMENITIES:</h3>
<ul>
<li>&nbsp;Rentable spaces for commercial use</li>
<li>&nbsp;Conference and Function Rooms</li>
<li>&nbsp;Swimming Pool</li>
<li>&nbsp;Parking Area</li>
</ul>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739096788/2_wcw5bs.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739096788/3_cufbrt.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739096787/4_1_pggbkv.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739096786/5_oxyopx.webp"  alt="" />
</div>
</section>

<hr />
<section className={styles.section}>
<h2>DELIVERABLE:</h2>
<ul>
<li>Painted walls, ceiling, and partitions</li>
<li>&nbsp;Floor Tiles</li>
<li>&nbsp;Kitchen Countertop with splashboard</li>
<li>&nbsp;Tiled Toilet &amp; Bath with water closet, lavatory, and exhaust fan</li>
<li>&nbsp;Some units have balcony with sliding door</li>
</ul>
<h3><strong>PROVISIONS:</strong></h3>
<ul>
<li>&nbsp;Fixed recessed down lights</li>
<li>&nbsp;Electrical Outlets</li>
<li>&nbsp;Smoke Detector</li>
<li>&nbsp;Water Sprinkler</li>
<li>&nbsp;Telephone and CATV Line</li>
<li>&nbsp;Split-type AC outlet</li>
</ul>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739096787/7_pqmqot.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739096787/8_gtbnhe.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739096786/13-1_aidhym.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739096787/10-1_sdp6lf.webp" alt=""  />
</div>
</section>

<hr />
<section className={styles.section}>
<h2>DETAILS AND COMPUTATION:</h2>
<p>FLOOR AREA: 21.85 sq.m.</p>
<ul>
<li>Living Area</li>
<li>Dining Area</li>
<li>Bedroom Area</li>
<li>Kitchen Area</li>
<li>Common Toilet &amp; Bath</li>
</ul>
<h4>SAMPLE COMPUTATION (RENT-TO-OWN):</h4>
<p><strong>TOTAL CONTRACT PRICE: Php 3,868,750.00</strong></p>
<p><em>RESERVATION FEE: Php 20,000.00</em></p>
<p>ADVANCE PAYMENT + Move-in Fees:&nbsp;<strong>Php 208,181.25</strong></p>
<p>&spades; EQUITY payable in 12 Months: Php 300,000.00</p>
<ul>
<li><strong>Php 25,000.00/month</strong></li>
</ul>
<p>&spades; BALANCE through BANK FINANCING: Php 3,558,750.00</p>
<ul>
<li>20 years:&nbsp;<strong>Php 29,766.81/month&nbsp;</strong></li>
</ul>
<p>Required GMI:&nbsp;<strong>Php 85,048.03/month</strong></p>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739096787/8_gtbnhe.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739096895/16_kyqzyt.webp"  alt=""/>
</div>
</section>

    </div>
)
}
