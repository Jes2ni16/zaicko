
import { Metadata } from 'next'
import FullImage from '../fullScreenImg';
import styles from '../page.module.css';
import Image from 'next/image';


  
  export const generateMetadata = async ({ params }: { params: Promise<{ clientUrl: string }>;}): Promise<Metadata>  => {
 
    const {clientUrl} = await params;
  
    const client = await fetch(`https://zaiko-server.vercel.app/api/clients/url/${clientUrl}`).then((res) => res.json());
  
    return {
      title: `Clarendon Residences Cebu City  | ${client.name} `,
     description: 'Explore Clarendon Residences in Cebu City, offering modern 2-3 storey townhouses with premium amenities and a prime location near SM Seaside.',
       openGraph: {
         title: `Clarendon Residences Cebu City  | ${client.name}`,
          description: 'Explore Clarendon Residences in Cebu City, offering modern 2-3 storey townhouses with premium amenities and a prime location near SM Seaside.',
        images: ['https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738692642/aldrich_dmmuaw.jpg'],
        url:`https://zaiko.website/client/${client.url}/featured/clarendon-residences`,
        type:'website'
    },
  }
  }




  export default function Clarendon() {
    return (
    <div className={styles.body1}>

<Image src='https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738692642/aldrich_dmmuaw.jpg' width={500} height={500} className={styles.heroImage} alt='' sizes="(max-width: 1540px) 100vw, 1540px"/>

<section className={styles.section}>
<h1>CLARENDON RESIDENCES CEBU CITY</h1>
<p>Clarendon Residences in Cebu City!! Embracing Modern and Sophisticated lifestyle!</p>
<ul>
<li>In England, Clarendon is associated with Palace</li>
<li>Medieval royal home</li>
<li>A city name in southern part of Jamaica hence Punta Princesa is also located in southern part of Cebu.</li>
</ul>
<p><strong>Brand Message</strong></p>
<ul>
<li>A modern take on a city residential property</li>
<li>Strong, bold and confident but also gentle, warm &amp; charming</li>
<li>Straightforward and functional</li>
<li>Aims to give homeowners simple access of facilities and services</li>
</ul>
<h2>PROJECT DETAILS:</h2>
<ul>
<li>TOTAL LAND AREA: 7,596 SQM.</li>
<li>No. of Townhouses: 63 Townhouses
<ul>
<li>Model Types: 2</li>
</ul>
</li>
</ul>
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738692642/aldrich_dmmuaw.jpg"  alt="" />
</section>

<hr />

<section className={styles.section}>
<h2>LOCATION AND ACCESSIBILITY:</h2>
<ul>
<li>400 meters to Don Bosco Technological College</li>
<li>1.1 km to Schools</li>
<li>1.2 km to Churches</li>
<li>1.5 km to Banks</li>
<li>2 km to Super Markets</li>
<li>2 km to Medical Centers and Hospitals</li>
<li>4 km to SM Seaside / CCLEX Cebu City</li>
<li>6 km to Port</li>
<li>18 km to Mactan International Airport</li>
</ul>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738692641/locationmap_q9el4q.jpg" sizes="(max-width: 1540px) 100vw, 1540px"  alt="" className={styles.fullImage} />
</section>
<hr />
<section className={styles.section}>
<h2>FACILITIES AND AMENITIES:</h2>
<ul>
<li>Clubhouse</li>
<li>Co-Working Space</li>
<li>Nursery Room</li>
<li>Playground</li>
<li>Open Air Gym</li>
</ul>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738692641/CLUBHOUSE-2_rou9cg.jpg"  alt="" sizes="(max-width: 1540px) 100vw, 1540px"  className={styles.fullImage} />
</section>
<hr />
<section className={styles.section}>
<h3>MODEL UNITS:</h3>
<ol>
<li>ALDRICH &ndash; 2-Storey Townhouse : 51 Units</li>
<li>ELDRIDGE &ndash; 3-storey Townhouse: 12 Units</li>
</ol>
<div className={styles.flexImage}>
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738692642/aldrich_dmmuaw.jpg" alt="" />
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738692642/eldridge_k4utm4.jpg" alt=""  />

</div>
</section>
<hr />

<section className={styles.section}>
<h3>UNIT DETAILS AND COMPUTATION:</h3>
<p><strong>ALDRICH:&nbsp;</strong>2-Storey Townhouse</p>
<p>Aldrich is one of those truly timeless names that has been universally loved for many years. This stand-out moniker derives from Old English meaning wise and ruler.</p>
<p><strong>HOUSE FEATURES:</strong></p>
<ul>
<li>Balcony</li>
<li>Incorporated Paved Parking Lot</li>
<li>Fiber Optic Ready</li>
<li>Design to have more Natural daylight</li>
</ul>
<p>LOT AREA: 60-98 sq.m.</p>
<p>FLOOR AREA: 82.76 sq.m.</p>
<p>Ground Floor:</p>
<ul>
<li>Garden Space</li>
<li>Parking</li>
<li>Living</li>
<li>Dining</li>
<li>Kitchen</li>
<li>Toilet &amp; Bath</li>
</ul>
<p>Second Floor:</p>
<ul>
<li>Master Bedroom with own Balcony</li>
<li>Bedroom 1</li>
<li>Bedroom 2</li>
<li>Toilet &amp; Bath</li>
</ul>
<p><strong>SAMPLE COMPUTATION through BANK FINANCING:</strong></p>
<p>TOTAL CONTRACT PRICE:&nbsp;<strong>Php 12,520,244.88</strong></p>
<p>RESERVATION FEE:&nbsp;<em>Php 35,000.00</em></p>
<p>&spades; 10% Equity/Downpayment net of Reservation Fee payable in 42 months: Php 1,217,024.48</p>
<ul>
<li><strong>Php 28,976.77/month</strong></li>
</ul>
<p>&spades; 90% BALANCE through BANK FINANCING:</p>
<ul>
<li><strong>Php 11,268,220.39</strong></li>
</ul>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738692642/aldrich_dmmuaw.jpg"  alt="" />
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738692641/aldrich-floor-plan_nxohxs.jpg" alt="" />
</div>

</section>
<hr />
<section className={styles.section}>
<p><strong>ELDRIDGE:&nbsp;</strong>3-Storey Townhouse</p>
<p>Originating from Old English, it means &ldquo;sage ruler&rdquo;, representing wisdom and leadership.</p>
<p><strong>HOUSE FEATURES:</strong></p>
<ul>
<li>Balcony</li>
<li>Incorporated Paved Parking Lot</li>
<li>Fiber Optic Ready</li>
<li>Design to have more Natural daylight</li>
</ul>
<p>LOT AREA: 51-70 sq.m.</p>
<p>FLOOR AREA: 104.48 sq.m.</p>
<p>Ground Floor:</p>
<ul>
<li>Garden Space</li>
<li>Parking</li>
<li>Living</li>
<li>Dining</li>
<li>Kitchen</li>
<li>Toilet &amp; Bath</li>
</ul>
<p>Second Floor:</p>
<ul>
<li>Hallway</li>
<li>Bedroom 2 with own Balcony</li>
<li>Bedroom 1</li>
<li>Common Toilet &amp; Bath</li>
</ul>
<p>Third Floor:</p>
<ul>
<li>Master Bedroom</li>
<li>Master Bedroom Balcony</li>
<li>Master Bedroom Walk-in Close</li>
<li>Master Bedroom Toilet &amp; Bath</li>
</ul>
<p><strong>SAMPLE COMPUTATION through BANK FINANCING:</strong></p>
<p>TOTAL CONTRACT PRICE:&nbsp;<strong>Php&nbsp;</strong></p>
<p>RESERVATION FEE:&nbsp;<em>Php 35,000.00</em></p>
<p>&spades; 10% Equity/Downpayment net of Reservation Fee payable in 42 months: Php</p>
<ul>
<li><strong>Php&nbsp;</strong></li>
</ul>
<p>&spades; 90% BALANCE through BANK FINANCING:</p>
<ul>
<li><strong>Php&nbsp;</strong></li>
</ul>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738692642/eldridge_k4utm4.jpg" alt="" />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738692641/eldridge-1_mhxfuq.jpg"alt="" />
</div>
</section>
<hr />
<section className={styles.section}>
<h2>SITE DEVELOPMENT PLAN:</h2>
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738692641/site-dev-map_atwpnb.jpg" alt=""  sizes="(max-width: 1540px) 100vw, 1540px" className={styles.fullImage}/>
</section>



    </div>
)
}
