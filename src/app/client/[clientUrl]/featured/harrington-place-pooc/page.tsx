
import { Metadata } from 'next'
import FullImage from '../fullScreenImg';
import styles from '../page.module.css';
import Image from 'next/image';




  export const generateMetadata = async ({ params }: { params: Promise<{ clientUrl: string }>;}): Promise<Metadata>  => {
 
    const {clientUrl} = await params;
  
    const client = await fetch(`https://zaiko-server.vercel.app/api/clients/url/${clientUrl}`).then((res) => res.json());
  
    return {
      title: `HARRINGTON PLACE POOC | ${client.name} `,
     description: 'A brand that merges quality housing&mdash;an idyllic experience where your dreams of homeownership come true&mdash;with affordability.',
       openGraph: {
         title: `HARRINGTON PLACE POOC | ${client.name}`,
          description: 'A brand that merges quality housing&mdash;an idyllic experience where your dreams of homeownership come true&mdash;with affordability.',
        images: ['https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739684248/Harrington-Place-House-and-Lot-in-Talisay-City-Cebu-9_cy9kth.jpg'],
        url:`https://zaiko.website/client/${client.url}/featured/harrington-place-pooc`,
        type:'website'
    },
  }
  }


export default function HarringtonPlace(){


return(
    <div className={styles.body1}>

<Image src='https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739684248/Harrington-Place-House-and-Lot-in-Talisay-City-Cebu-9_cy9kth.jpg' width={500} height={500} className={styles.heroImage} alt='' sizes="(max-width: 1540px) 100vw, 1540px"/>

<section className={styles.section}>
<h1>HARRINGTON PLACE POOC, TALISAY CITY CEBU</h1>
<p>Harrington Place Pooc is a brand that merges quality housing&mdash;an idyllic experience where your dreams of homeownership come true&mdash;with affordability.</p>
<p>The developments will be located in Pooc and Linao, Talisay Cebu&mdash;a zone of promising growth and dynamism. These projects will bring new life to the city. And a premium residence experience in a gated community for a fraction of the price you expect in a development of this quality.</p>
<p>Designed for a wide Filipino market, it is well-appointed, carefully planned, tastefully designed, and located accessibly&mdash;at a site where the second SRP project connecting the cities of Naga and Talisay passes through. The location makes it the perfect place to set up your living HQ, especially if you prefer convenience. Think of easy commutes suited to your busy lifestyle.</p>
<p>Harrington Place encompasses 1.7 hectares and a community of over 241 Units that has been thoughtfully designed as a residential area that combines nature&rsquo;s beauty with modern living.</p>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739683595/Slide6-2_yjyst5.jpg" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
</section>
<hr/>
<section className={styles.section}>
<h2>LOCATION AND ACCESSIBILITY:</h2>
<ul>
<li>&nbsp;550 meters to NearbySchools</li>
<li>&nbsp;1.3 km to Cebu South Coastal Road</li>
<li>&nbsp;2.1 km to Starmall</li>
<li>&nbsp;3km to Nearby Churches</li>
<li>&nbsp;4 km to Nearby Hospitals</li>
<li>&nbsp;7.5km to Il Corso Mall</li>
<li>&nbsp;8.2km to NUStar</li>
<li>&nbsp;10km to SM City Seaside</li>
<li>&nbsp;11km to CCLEX Bridge</li>
<li>&nbsp;25km to Mactan-Cebu International Airport</li>
</ul>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739683595/Slide3-2_q1b7z7.jpg" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
</section>
<hr/>
<section className={styles.section}>
<h2>AMENITIES AND FACILITIES:</h2>
<p>The current extensive infrastructure work in the area makes it an attractive buy for both homeowners and investors. What&rsquo;s more, Harrington Place Pooc has a:</p>
<ul>
<li>Grand gate with 24-hour security</li>
<li>Public utility vehicle drop-off area. A key feature that would distinguish the development from all others.</li>
<li>It is also surrounded by upscale residential developments&mdash;a neighbourhood that adds to the community&rsquo;s value, prestige, and long-term appeal.</li>
</ul>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739683593/Slide12-1_mdkxp3.jpg" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
</section>
<hr/>
<section className={styles.section}>
<h2>UNIT FEATURES AND SAMPLE COMPUTATION:</h2>
<ul>
<li>2-Storey Townhouse Units</li>
<li>Bedroom Space</li>
<li>Toilet &amp; Bath</li>
<li>Living Area</li>
<li>Fitted Kitchen</li>
<li>Dining Area</li>
<li>Carport</li>
</ul>
<p>LOT AREA: 36-50 sq.m.</p>
<p>FLOOR AREA: 58.4 sq.m.</p>
<p>SAMPLE COMPUTATION THROUGH BANK FINANCING ONLY:</p>
<p>BASE PRICE: Php 4,236,770.70</p>
<p>PROCESSING FEE: Php 611,229.30</p>
<p>TOTAL CONTRACT PRICE: Php 4,848,000.00</p>
<p>RESERVATION FEE: Php 30,000.00</p>
<p>&clubs; 10% DOWN PAYMENT net of Reservation Fee Payable in 18 months: Php 454,800.00</p>
<ul>
<li>Php 25,266.67/month</li>
</ul>
<p>&clubs; 90% BALANCE through Bank Financing: Php 4,363,200.00</p>
<ul>
<li>10 years:&nbsp;<strong>₱52,937.65/month</strong></li>
<li>20 years:&nbsp;<strong>₱36,495.55/month</strong></li>
</ul>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739683594/Slide7_nnjwsv.jpg" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
<div className={styles.flexImage}>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739683594/Slide8_c9rqzu.jpg"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739683594/Slide9-1_pjtnd2.jpg"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739683594/Slide10-1_z8r68t.jpg"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739683594/Slide5-1-1_mi1oxc.jpg"/>
</div>
</section>
<hr/>
<section className={styles.section}>
<h2>ACTUAL DELIVERABLE UNIT:</h2>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739683594/Slide11_r9hrbx.jpg" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
</section>
<hr/>
<section className={styles.section}>
<h2>SITE DEVELOPMENT PLAN:</h2>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739683594/Slide12_h1kxup.jpg" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
</section>

    </div>
)
}
