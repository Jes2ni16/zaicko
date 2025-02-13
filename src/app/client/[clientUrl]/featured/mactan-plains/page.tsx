
import { Metadata } from 'next'
import FullImage from '../fullScreenImg';
import styles from '../page.module.css';
import Image from 'next/image';




  export const generateMetadata = async ({ params }: { params: Promise<{ clientUrl: string }>;}): Promise<Metadata>  => {
 
    const {clientUrl} = await params;
  
    const client = await fetch(`https://zaiko-server.vercel.app/api/clients/url/${clientUrl}`).then((res) => res.json());
  
    return {
      title: `MACTAN PLAINS RESIDENCES  | ${client.name} `,
     description: 'Mactan Plains Residences is ideally located just steps from Sto. Niño Mactan Parish Church, with easy access to office towers, shopping centers, grocery stores, and retail shops in Mactan Newtown',
       openGraph: {
         title: `MACTAN PLAINS RESIDENCES  | ${client.name}`,
          description: 'Mactan Plains Residences is ideally located just steps from Sto. Niño Mactan Parish Church, with easy access to office towers, shopping centers, grocery stores, and retail shops in Mactan Newtown',
        images: ['https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738985396/MPR-Exterior-Perspective-e1697029239646_jksjbb.webp'],
        url:`https://zaiko.website/client/${client.url}/featured/mactan-plains`,
        type:'website'
    },
  }
  }
  
  


  
  export default function MactanPlains() {
    return (
    <div className={styles.body1}>

<Image src='https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738985396/MPR-Exterior-Perspective-e1697029239646_jksjbb.webp' width={500} height={500} className={styles.heroImage} alt='' sizes="(max-width: 1540px) 100vw, 1540px"/>

<section className={styles.section}>
<h1>MACTAN PLAINS RESIDENCES</h1>
<p>Mactan living reaches New Heights!</p>
<p>Grab the opportunity to own a place near&nbsp;home and work essentials.</p>
<p><strong>Mactan Plains Residences</strong>&nbsp;is just a few meters away from Sto. Ni&ntilde;o Mactan Parish Church and the different office towers, shopping centers, grocery, and retail shops in Mactan Newtown. It is also near industrial zones and education and leisure establishments such as the Mactan Export Processing Zone (MEPZ), Mactan-Cebu International Airport (MCIA), all levels of public and private schools, restaurants, and the famous white sand beaches in Lapu-lapu City.</p>
<p><strong>Mactan Plains Residences</strong>&nbsp;also offers amenities right next to your doorsteps. Homeowners shall have access to the Clubhouse with swimming pool, fitness gym, multi-purpose court, and many more.</p>
<p>It&rsquo;s 18-Storey Residential Condominium with approximately 340 units. It has a total Land Area of Approximately 1,206 sq.m.</p>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738985396/MPR-Exterior-Perspective-e1697029239646_jksjbb.webp"  alt=""  className={styles.fullImage}  />
</section>

<hr />
<section className={styles.section}>
<h2>ACCESSIBILITY &amp; LANDMARKS:</h2>
<p>MACTAN PLAINS is near&hellip;.</p>
<ul>
<li>Mactan Newtown, which has a combination of high-end office towers, luxury condominiums, schools, leisure amenities, retail shops, and hotels.</li>
<li>Sto. Nino Parish Church in Mactan</li>
<li>Mactan Export Processing Zone (MEPZ)</li>
<li>Mactan-Cebu International Airport</li>
<li>Bigfoot Film Academy of Mactan</li>
<li>Famous white sand beaches and restaurants in Mactan</li>
</ul>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738985395/4-3_lkgzk8.webp"  alt=""  className={styles.fullImage}/>
</section>

<hr />
<section className={styles.section}>
<h2><strong>AMENITIES:</strong></h2>
<ul>
<li>Access to Clubhouse with swimming Pool, Fitness gym, and Multi-Purpose Court</li>
<li>Individual Mailboxes</li>
<li>Three High Speed Elevators</li>
<li>Centralized garbage collection area with segregated garbage chutes</li>
<li>Main Lobby and Reception Area</li>
<li>Fire Alarm and Sprinkler system</li>
<li>Basement and Ground Floor Parking</li>
<li>Standby Generator</li>
</ul>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738985394/ELEVATOR-LOBBY_miarhb.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738985396/MAIN-LOBBY_ydo46t.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738985396/POOL-AREA_sqn7jq.webp" alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738985396/CLUBHOUSE_ilnyxq.webp"  alt=""  />
</div>
</section>

<hr />
<section className={styles.section}>
<h2>UNIT TYPES:</h2>
<ol>
<li>STUDIO</li>
<li>STUDIO WITH BALCONY</li>
</ol>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738986113/Studio-with-Balcony-3_4-Top-View-01232019-1-scaled-e1697028795824_svt7z3.webp"  alt="" />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738986113/Studio-3_4-Top-View-01232019-1-scaled-e1697028213776_xlgou2.webp"  alt="" />
</div>
</section>
<hr />

<section className={styles.section}>
<h2>UNIT FEATURES:</h2>
<ul>
<li>Melamine board kitchen cabinets with stainless steel sink and granite countertop</li>
<li>Melamine board bedroom closets</li>
<li>Telephone and CATV provisions</li>
<li>Electrical provision for portable water heater at the shower area</li>
<li>Bathroom fixtures and accessories</li>
<li>Exhaust fan installed in toilet &amp; bath</li>
<li>Electrical provision for filter-type range hood</li>
<li>Non-LPG, purely electrical provision for cooking</li>
<li>Fire Alarm and smoke detector in each unit</li>
<li>Painted cement walls and ceilings</li>
<li>Tiled main flooring</li>
<li>Ceramic Floor and Wall tiles for the toilet and bath</li>
</ul>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738986113/actual1_pm83oo.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738986114/MPR-Interior-Perspective-01232019-05_s1h8ad.webp"  alt="" />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738986113/actual2_xo6gxb.webp" alt="" />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738986114/MPR-Interior-Perspective-01232019-03_wl7xmn.webp" alt=""  />

</div>
</section>

<hr />
<section className={styles.section}>
<h2>DETAILS AND COMPUTATIONS:</h2>
<h3>STUDIO UNIT</h3>
<p>FLOOR AREA: 25.24 sq.m.</p>
<ul>
<li>Living &amp; Dining Area</li>
<li>Bedroom Area</li>
<li>Kitchen Area</li>
<li>Toilet &amp; Bath</li>
</ul>
<h3>SAMPLE COMPUTATION THROUGH PAG-IBIG FINANCING:</h3>
<p>TOTAL CONTRACT PRICE:&nbsp;<strong>Php 2,787,400.00</strong></p>
<p>RESERVATION FEE:&nbsp;Php 10,000.00</p>
<p>&spades; 5.65% Equity Net of Reservation Fee Payable in 12 months: Php 147,400.00</p>
<ul>
<li><strong>Php 12,283.33/month</strong></li>
</ul>
<p>&spades; 94.35% Balance through Pag-ibig Financing:&nbsp;<strong>Php 2,630,000.00</strong></p>
<ul>
<li><strong>30 years: Php 16,193.36/month</strong></li>
</ul>
<p>Note: Transfer Charge and Move-in Fees are not included in the Price amounting:</p>
<ul>
<li><em>Transfer Charge: Php 195,118.00</em></li>
<li><em>Move-in Fee: Php 45,000.00</em></li>
</ul>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738986113/Studio-3_4-Top-View-01232019-1-scaled-e1697028213776_xlgou2.webp"   alt="" className={styles.fullImage}/>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738986123/3-8_rhwszk.webp"  alt="" className={styles.fullImage} />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738986124/4-5_lihtlt.webp" alt="" className={styles.fullImage}/>
</section>

<hr />
<section className={styles.section}>
<h3>STUDIO UNIT with BALCONY</h3>
<p>FLOOR AREA: 29.72 sq.m.</p>
<ul>
<li>Living &amp; Dining Area</li>
<li>Bedroom Area</li>
<li>Kitchen Area</li>
<li>Toilet &amp; Bath</li>
</ul>
<h3>SAMPLE COMPUTATION THROUGH PAG-IBIG FINANCING:</h3>
<p>TOTAL CONTRACT PRICE:&nbsp;<strong>Php 3,131,100.00</strong></p>
<p>RESERVATION FEE:&nbsp;Php 10,000.00</p>
<p>&spades; 5% Equity Net of Reservation Fee Payable in 12 months: Php 146,555.00</p>
<ul>
<li><strong>Php 12,212.92/month</strong></li>
</ul>
<p>&spades; 95% Balance through Pag-ibig Financing + Loanable Charges:&nbsp;<strong>Php 3,153,000.00</strong></p>
<ul>
<li><strong>30 years: Php 19,413.56/month</strong></li>
</ul>
<p>Note: Transfer Charge and Move-in Fees are not included in the Price amounting:</p>
<ul>
<li><em>Balance Transfer Charge: Php 40,722.00</em></li>
<li><em>Move-in Fee: Php 45,000.00</em></li>
</ul>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738986113/Studio-with-Balcony-3_4-Top-View-01232019-1-scaled-e1697028795824_svt7z3.webp" alt=""  />

<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738986122/5-8_v5uvjx.webp" alt="" />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738986123/1-9_pgjtvj.webp"  alt="" />
</section>
<hr />
<section className={styles.section}>
<h2>CONSTRUCTION UPDATE:</h2>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738986123/CONSTRUCTION-UPDATE-2023_ea90af.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738986123/Mactan-Plains-Residences-Construction-Update-as-of-July-25-2023-HiRes-1-scaled_trbopl.webp"  alt='' />
</div>
</section>

<hr />
<section className={styles.section}>
<h4>VIEW ORIENTATIONS:</h4>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738986132/NORTH-VIEW_feresj.webp" alt="" />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738986132/NORTHEAST_vhw5fm.webp" alt="" />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738986131/SOUTHWEST_zk0n6d.webp" alt='' />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738986131/SOUTHVIEW_pflrsc.webp"  alt="" />
</div>
</section>

    </div>
)
}
