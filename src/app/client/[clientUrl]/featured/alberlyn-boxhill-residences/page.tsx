
import { Metadata } from 'next'
import FullImage from '../fullScreenImg';
import styles from '../page.module.css';
import Image from 'next/image';




 
export const generateMetadata = async ({ params }: { params: Promise<{ clientUrl: string }>;}): Promise<Metadata>  => {
 
  const {clientUrl} = await params;

  const client = await fetch(`https://zaiko-server.vercel.app/api/clients/url/${clientUrl}`).then((res) => res.json());



  return {
    title: `ALBERLYN BOXHILL RESIDENCES | ${client.name} `,
   description: 'Alberlyn Box Hill Residences offers a vision of refined living at an accessible price. While both feature the same style of Asian contemporary homes, they stand out by providing elegant yet affordable housing options.',
     openGraph: {
       title: `ALBERLYN BOXHILL RESIDENCES | ${client.name}`,
        description: 'Alberlyn Box Hill Residences offers a vision of refined living at an accessible price. While both feature the same style of Asian contemporary homes, they stand out by providing elegant yet affordable housing options.',
      images: ['https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677885/COMMUNITY_irduix.webp'],
      url:`https://zaiko.website/client/${client.url}/featured/alberlyn-boxhill-residences`,
      type:'website'
  },
}
}
 
  
  export default function AlberlynBoxhill() {
 
    return (
    <div className={styles.body1}>
<Image src='https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677885/COMMUNITY_irduix.webp' width={500} height={500} className={styles.heroImage} alt='' sizes="(max-width: 1540px) 100vw, 1540px"/>

<section className={styles.section}>
<h1>ALBERLYN BOXHILL ANNEX RESIDENCES</h1>
<p><strong>Alberlyn BoxHill Residences</strong>&nbsp;&ndash;is developed by AE International Construction and Development Corp. (developer of successful Alberlyn South in Rabaya St, Talisay City).</p>
<p>The difference between Alberlyn Box Hill Residences and Alberlyn South is the Athena model, now offering a cluster of six units instead of Cluster of 4 and also the Amenities. Here in Box Hill, more amenities like swimming pool and clubhouse are to be constructed.</p>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677885/COMMUNITY_irduix.webp" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
</section>
<hr/>
<section className={styles.section}>
<h2>PROMO!!!&nbsp;</h2>
<p>FREE KITCHEN SHOWCASE FOR BOXHILL RESIDENCES ANNEX</p>
<ul>
<li>7 cu. ref</li>
<li>Blender</li>
<li>Coffee Maker</li>
<li>Countertop Gas Range</li>
<li>Microwave Oven</li>
<li>Range Hood</li>
</ul>
<FullImage alt='' src="https://cebubestestate.com/wp-content/uploads/2021/05/ANNEX-PHASE-1-FREE-KITCHEN-SHOWCASE-1.jpg" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
</section>
<hr/>
<section className={styles.section}></section>
<h2>ACCESSIBILITY &amp; LANDMARKS:</h2>
<p>It is 3 to 5 minutes drive to Talisay City Hall and 10 minutes drive from the soon-to-rise SM Seaside City in SRP and also accessible to:</p>
<ul>
<li>Gaisano Capital, SRP</li>
<li>Gaisano Fiesta Mall Tabunok</li>
<li>Robinson&rsquo;s Supermarket</li>
<li>Talisay District Hospital</li>
<li>Church, Schools and Beaches</li>
</ul>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677876/8-2_fnyyie.jpg" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
<hr/>
<section className={styles.section}>
<h2>AMENITIES AND FACILITIES:</h2>
<ul>
<li>Swimming Pool</li>
<li>Clubhouse</li>
<li>Basketball Court</li>
<li>Children&rsquo;s playground</li>
<li>Exclusive Gated Community</li>
<li>Concrete Perimeter Fence</li>
<li>Elegant Guard house (24/7 Security)</li>
<li>Landscaped entrance</li>
<li>Landscaped units</li>
</ul>
<div className={styles.flexImage}>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677876/7-3_kavwzo.jpg"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677876/5-6_erijub.jpg"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677876/6-4_galn0q.jpg"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677877/4-5_uvv8aw.jpg"/>
</div>
</section>
<hr/>
<section className={styles.section}>
<h2>MODEL UNITS:</h2>
<ol>
<li>Townhouse (Aura)</li>
<li>Single Attached (Aphrodite)</li>
<li>Single Detached (Hera) (SOLD OUT)</li>
</ol>
<div className={styles.flexImage}>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677885/3-13_pwpriv.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677876/165521775_4205645722781672_7200625341562256923_n_rjsw8y.jpg"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677884/8-3-e1725898635468_nqcpjz.webp"/>
</div>
</section>
<hr/>
<section className={styles.section}>
<h2>UNIT DETAILS:</h2>
<p>LOT AREA: 50 sq.m.</p>
<p>FLOOR AREA: 50 sq.m.</p>
<ul>
<li>2-Storey Townhouse Unit</li>
<li>2 Bedrooms</li>
<li>1 Toilet &amp; Bath</li>
<li>Service Area</li>
<li>1 Carport</li>
</ul>
<h3>SAMPLE COMPUTATION through BANK FINANCING (ONGOING CONSTRUCTION):</h3>
<p>TOTAL CONTRACT PRICE:&nbsp;<strong>Php 4,988,000.00</strong></p>
<p>RESERVATION FEE:&nbsp;<em>Php 30,000.00</em></p>
<p>&spades; 10% EQUITY net of Reservation Fee payable in 6 months: Php 468,800.00</p>
<ul>
<li><strong>Php 78,133.33/month</strong></li>
</ul>
<p>&spades; 90% Balance through Bank Financing:&nbsp;<strong>Php 4,489,200.00</strong></p>
<ul>
<li><strong>25 years: Php 37,673.20/month&nbsp;</strong><em>(est.)</em></li>
</ul>
<div className={styles.flexImage}>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677875/1-19-e1699868004863_uwq8el.jpg"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677875/Capture_mnapla.jpg"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677884/8-3-e1725898635468_nqcpjz.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677875/178465477_3416141455152221_5828363636424494630_n_mrown7.jpg"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677875/179538193_3416141441818889_4058242657913703841_n_jzmod3.jpg"/>
</div>
</section>
<hr/>
<h3>APHRODITE 68 MODEL:</h3>
<p>Lot area: 75 sq.m.</p>
<p>Floor area: 68 sq.m.</p>
<ul>
<li>2-storey Single attached Unit</li>
<li>3 Bedrooms</li>
<li>2 Toilet &amp; bath</li>
<li>Living, Dining</li>
<li>Service Area</li>
<li>Carport</li>
<li>Porch</li>
<li>Balcony</li>
</ul>
<p><strong>SAMPLE COMPUTATION THROUGH BANK FINANCING (ONGOING CONSTRUCTION):</strong></p>
<p>TOTAL CONTRACT PRICE:&nbsp;<strong>Php 7,188,000.00</strong></p>
<p>Reservation Fee:&nbsp;<strong>Php 30,000.00</strong></p>
<p><strong>OPTION 1: 10/80 Payment Scheme</strong></p>
<p>&spades; 10% Equity payable in 12 months: Php 688,800.00</p>
<ul>
<li><strong>Php 57,400.00/month</strong></li>
</ul>
<p>&spades; 80% Balance thru Bank Financing:&nbsp;<strong>Php 6,469,200.00</strong></p>
<ul>
<li><strong>25 years: Php 54,289.29/month</strong>&nbsp;<em>(est.)</em></li>
</ul>
<hr/>
<p><strong>SAMPLE COMPUTATION THROUGH BANK FINANCING (PRE-SELLING):</strong></p>
<p>TOTAL CONTRACT PRICE:&nbsp;<strong>Php 7,488,000.00</strong></p>
<p>Reservation Fee:&nbsp;<strong>Php 30,000.00</strong></p>
<p><strong>OPTION 1: 10/80 Payment Scheme</strong></p>
<p>&spades; 10% Equity payable in 28 months: Php 718,800.00</p>
<ul>
<li><strong>Php 25,671.43/month</strong></li>
</ul>
<p>&spades; 80% Balance thru Bank Financing:&nbsp;<strong>Php 6,739,200.00</strong></p>
<ul>
<li><strong>25 years: Php 56,555.12/month</strong>&nbsp;<em>(est.)</em></li>
</ul>
<div className={styles.flexImage}>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677877/aphrodite_t7simh.jpg"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677875/Capture-1_pneksy.jpg"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677885/3-13_pwpriv.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677877/1-20_okzkna.jpg"/>
</div>
<hr/>
<h3>HERA 105 ETERNITY SERIES &ndash; SINGLE DETACHED (SOLD OUT)</h3>
<p>LOT AREA: 110 sq.m.</p>
<p>FLOOR AREA: 105 sq.m.</p>
<ul>
<li>3 Bedrooms</li>
<li>3 Toilet and Baths (Master&rsquo;s T&amp;B with bathtub)</li>
<li>Concrete partitions</li>
<li>Garage</li>
<li>Balcony</li>
</ul>
<div className={styles.flexImage}>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677876/165521775_4205645722781672_7200625341562256923_n_rjsw8y.jpg"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677885/Capture-2_o4cvsq.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677877/4-6_c7uzyb.jpg"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677876/5-7_rqgnui.jpg"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677876/6-5_hlq9tu.jpg"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677875/7-4_brxwr8.jpg"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677875/8-4_cnhzgk.jpg"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677876/9-2_qiombq.jpg"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677877/11-2_bfvtjl.jpg"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677877/12-2_ted9u0.jpg"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739677875/15-1_a67u1c.jpg"/>
</div>

</div>
)
}
