
import { Metadata } from 'next'
import FullImage from '../fullScreenImg';
import styles from '../page.module.css';
import Image from 'next/image';



  export const generateMetadata = async ({ params }: { params: Promise<{ clientUrl: string }>;}): Promise<Metadata>  => {
 
    const {clientUrl} = await params;
  
    const client = await fetch(`https://zaiko-server.vercel.app/api/clients/url/${clientUrl}`).then((res) => res.json());
  
  
  
    return {
      title: `BREEZA COVES MACTAN PHASE 2 | ${client.name} `,
     description: 'Part of the Breeza communities in Mactan, Breeza Coves is the second development under this prestigious series. Located on a 1.36-hectare lot in Barangay Babag, Lapu-Lapu City, it continues the brand’s commitment to offering spacious, low-density homes that are even larger than the first Breeza project.',
       openGraph: {
         title: `BREEZA COVES MACTAN PHASE 2 | ${client.name}`,
          description: 'Part of the Breeza communities in Mactan, Breeza Coves is the second development under this prestigious series. Located on a 1.36-hectare lot in Barangay Babag, Lapu-Lapu City, it continues the brand’s commitment to offering spacious, low-density homes that are even larger than the first Breeza project.',
        images: ['https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996878/Anthony-Townhouse-scaled_p7tdu1.webp'],
        url:`https://zaiko.website/client/${client.url}/featured/breeza-coves-lapu`,
        type:'website'
    },
  }
  }
   
  
  export default function Clarendon() {
    return (
    <div className={styles.body1}>

<Image src='https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996878/Anthony-Townhouse-scaled_p7tdu1.webp' width={500} height={500} className={styles.heroImage} alt=''/>

<section className={styles.section}>
<h1>BREEZA COVES MACTAN PHASE 2</h1>
<p><strong>Breeza Coves Mactan</strong>&nbsp;is a new subdivision soon to rise in Timpolok Rd., Babag 1, Lapu-Lapu City.</p>
<p>Part of the series of Breeza communities in Mactan, Breeza Coves is one of the second projects under this umbrella. It sits on a 1.36- hectare lot in Barangay Babag, Lapu-Lapu City. Upholding its brand of offering a low-density community, the residential community will have homes that are designed to be bigger than the first Breeza project.</p>
<p>Located in the Historic Resort Resort City, which is known for its first-class resorts and hotels, Breeza Coves offers the same luxury with its array of amenities and facilities such as a clubhouse, parks and playgrounds, and a pool.</p>
<p>It&rsquo;s time to dream even bigger-enjoy generously cut lots and more floor spaces with<strong>&nbsp;Breeza Coves Mactan.</strong></p>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996878/Anthony-Townhouse-scaled_p7tdu1.webp"  alt=""  className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
</section>

<hr />
<section className={styles.section}>
<h2>ACCESSIBILITY &amp; LANDMARKS:</h2>
<p><strong>Breeza Coves Mactan</strong>&nbsp;is situated at Timpolok Road, Brgy. Babag 1, Lapu-Lapu City. With its accessibility to Mactan-Cebu International Airport and the on-going construction of Cordova-Cebu Link Expressway (Cebu&rsquo;s 3rd Bridge), Breeza Coves is a top-notch project in terms of investment.</p>
<ul>
<li>2.7 km Lapu-Lapu Public Market</li>
<li>2.7 km La Nueva Supermarket</li>
<li>2.9 km PHILSCA</li>
<li>3.2 km Super Metro</li>
<li>3.4 km Lapu-Lapu PUJ Terminal</li>
<li>3.7 km Cebu-Cordova Link Expressway</li>
<li>3.7 km 1st Bridge / Osme&ntilde;a Bridge</li>
<li>4.3 km Mactan Doctors&rsquo; Hospital</li>
<li>4.6 km University of Cebu</li>
<li>4.8 km Island Central Mactan</li>
<li>6.9 km Gaisano Grand Mall</li>
<li>7.9 km Mactan-Cebu Int&rsquo;l Airport</li>
</ul>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996878/BREEZA-COVES-VICINITY-MAP_eii7ez.webp" alt="" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />
</section>

<hr />
<section className={styles.section}>
<h2>AMENITIES &amp; FACILITIES:</h2>
<p>A modern-inspired design of houses where exclusivity and comfort are merged. Sprawling in a 1.36-hectare property in the island of Mactan is a low-density community with wide open-spaces. Exceed your dream home expectations &ndash; island living above and beyond.</p>
<p>Breeza Coves will also have what Priland calls the Priland Advantage, provisions for utilities and fixtures that aren&rsquo;t always immediately available in other developers&rsquo; projects.</p>
<ul>
<li>24 Hour Security</li>
<li>Gated Entrance With Guardhouse</li>
<li>Perimeter Fence</li>
<li>Swimming Pool</li>
<li>Clubhouse</li>
<li>Basketball Court</li>
<li>Parks and Playground</li>
<li>Drainage System</li>
</ul>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996879/1-4_pggrtb.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996879/2-6_ebkc44.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996878/3-5_rtrerf.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996878/4-6_z3qnb5.webp"  alt=""  />
</div>
</section>

<hr />
<section className={styles.section}>
<h2><strong>UNIT DETAILS &amp; COMPUTATION:</strong></h2>
<p><strong>TOWNHOUSE MID</strong></p>
<p>Floor Area: 96.22 sq.m.<br />Total Lot Area: 56.25 sq.m.</p>
<ul>
<li>Townhouse Middle Unit</li>
<li>3 Bedrooms</li>
<li>1 Powder Room</li>
<li>2 Toilet &amp; Bath</li>
<li>2 Carports</li>
</ul>
<p><strong>Ground Floor:</strong></p>
<ul>
<li>Living Area</li>
<li>Dining Area</li>
<li>Kitchen Area</li>
<li>Powder Room</li>
<li>Service Area</li>
<li>Carport</li>
</ul>
<p><strong>Second Floor:</strong></p>
<ul>
<li>Bedroom 1</li>
<li>Bedroom 2</li>
<li>Master&rsquo;s Bedroom with own Balcony</li>
<li>Master&rsquo;s Bedroom with own T&amp;B</li>
<li>Common T&amp;B</li>
</ul>
<h3>SAMPLE COMPUTATION THROUGH BANK FINANCING</h3>
<p>TOTAL CONTRACT PRICE (TCP):&nbsp;<strong>Php 6,846,544.00</strong></p>
<p>RESERVATION FEE:&nbsp;<em>Php 30,000.00</em></p>
<p>&hearts;<strong>&nbsp;15%</strong>&nbsp;Equity Net of Reservation Payable&nbsp;<strong>48</strong>&nbsp;months:&nbsp;<strong>Php 996,981.60</strong></p>
<ul>
<li><strong>Php 20,770.45/month</strong></li>
</ul>
<p>&hearts;&nbsp;<strong>85%</strong>&nbsp;Balance Through Bank Financing:&nbsp;<strong>Php 5,819,562.40</strong></p>
<ul>
<li>20 years:<strong>₱64,078.39/month<em>&nbsp;(estimate)</em></strong></li>
</ul>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996878/BREEZA-COVE_TH-RIGHT_mid_vo1zh4.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996877/BREEZA-COVE_TH-LEFT_mid_chgdwo.webp"  alt="" />
</div>
</section>

<hr />
<section className={styles.section}>
<h3>TOWNHOUSE END</h3>
<p>Floor Area: 96.22&nbsp;q.m.<br />Total Lot Area: 80.58&nbsp;sq.m.</p>
<ul>
<li>Townhouse End Unit</li>
<li>3 Bedrooms</li>
<li>1 Powder Room</li>
<li>2 Toilet &amp; Bath</li>
<li>2 Carports</li>
</ul>
<p><strong>Ground Floor:</strong></p>
<ul>
<li>Living Area</li>
<li>Dining Area</li>
<li>Kitchen Area</li>
<li>Powder Room</li>
<li>Service Area</li>
<li>2 Carports</li>
</ul>
<p><strong>Second Floor:</strong></p>
<ul>
<li>Bedroom 1</li>
<li>Bedroom 2</li>
<li>Master&rsquo;s Bedroom with own Balcony</li>
<li>Master&rsquo;s Bedroom with own T&amp;B</li>
<li>Common T&amp;B</li>
</ul>
<h3>SAMPLE COMPUTATION THROUGH BANK FINANCING</h3>
<p>TOTAL CONTRACT PRICE (TCP):<strong>&nbsp;Php 7,926,820.00</strong></p>
<p>RESERVATION FEE:&nbsp;<em>Php 30,000.00</em></p>
<p>&hearts;<strong>&nbsp;15%</strong>&nbsp;Equity Net of Reservation Payable&nbsp;<strong>48</strong>&nbsp;months: Php 1,159,023.00</p>
<ul>
<li><strong>Php 24,146.31/month</strong></li>
</ul>
<p>&hearts;&nbsp;<strong>85%</strong>&nbsp;Balance Through Bank Financing:&nbsp;<strong>Php 6,737,797.00</strong></p>
<ul>
<li><strong>20years: ₱74,188.94/month</strong></li>
</ul>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996900/BREEZA-COVE_TH-RIGHT_end_l98mkd.webp"  alt="" />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996904/BREEZA-COVE_TH-LEFT_end_vr9jh8.webp"  alt=""  />

<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996916/14_wrb5nd.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996918/16_mmaljd.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996917/15_uqsgml.webp"  alt="" />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996915/13_mxtq5y.webp"  alt="" />

</div>
</section>

<hr />
<section className={styles.section}>
<h2>PROJECT RENDERING:</h2>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996919/4_1_jmgj6j.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996920/5_trb0gr.webp" alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996920/6_wovasb.webp" alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996914/7_i12aiv.webp" alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996915/8_vwxrx8.webp" alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996918/16_mmaljd.webp" alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996917/15_uqsgml.webp" alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996916/14_wrb5nd.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996915/13_mxtq5y.webp"  alt=""  />
</div>
</section>

<hr />
<section className={styles.section}>
<h2>DELIVERABLE:</h2>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996936/3-6_h2p722.webp"   alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996932/5-9_peepgt.webp"   alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996933/7-7_w0l9vs.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996937/4-7_jvujgv.webp" alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996932/6-7_omk3mk.webp"  alt=""/>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996935/8-7-e1647918418542_x4iv8u.webp"  alt=""  />
</div>
</section>
<hr />

<section className={styles.section}>
<h2>SITE DEVELOPMENT:</h2>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738996935/34ccb409-8320-4d1a-ac26-994e86c24ee5_kk8juv.webp"  alt=""  className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
</section>

    </div>
)
}
