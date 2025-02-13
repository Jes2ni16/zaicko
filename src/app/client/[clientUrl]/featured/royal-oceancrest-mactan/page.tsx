
import { Metadata } from 'next'
import FullImage from '../fullScreenImg';
import styles from '../page.module.css';
import Image from 'next/image';




 
export const generateMetadata = async ({ params }: { params: Promise<{ clientUrl: string }>;}): Promise<Metadata>  => {
 
  const {clientUrl} = await params;

  const client = await fetch(`https://zaiko-server.vercel.app/api/clients/url/${clientUrl}`).then((res) => res.json());



  return {
    title: `ROYAL OCEANCREST MACTAN | ${client.name} `,
   description: 'Designed to be the getaway of your dreams  a haven for you to relax and reconnect with yourself and your loved ones.',
     openGraph: {
       title: `ROYAL OCEANCREST MACTAN | ${client.name}`,
        description: 'Designed to be the getaway of your dreams  a haven for you to relax and reconnect with yourself and your loved ones.',
      images: ['https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739422117/building_bw0dmh.webp'],
      url:`https://zaiko.website/client/${client.url}/featured/royal-oceancrest-mactan`,
      type:'website'
  },
}
}
 
  
  export default function Clarendon() {
 
    return (
    <div className={styles.body1}>
<Image src='https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739422117/building_bw0dmh.webp' width={500} height={500} className={styles.heroImage} alt='' sizes="(max-width: 1540px) 100vw, 1540px" />

<section className={styles.section}>
<h1><strong>ROYAL OCEANCREST MACTAN</strong></h1>
<p><strong>Royal Oceancrest Mactan</strong>&nbsp;is armed with a healthy combination of well-constructed units, modern amenities, and a strategic location,&nbsp;<em>Royal Oceancrest Mactan</em>&nbsp;is in the unique position of being the first of its kind in Primary Homes.</p>
<p>A secure haven of wellness and leisure for investors</p>
<p><strong>Royal Oceancrest Mactan</strong>&nbsp;is designed to be the getaway of your dreams &ndash; a haven for you to relax and reconnect with yourself and your loved ones. It will provide you a resort-style living experience unlike anything you could ever get elsewhere.</p>
<p>Experience a tropical lifestyle and have easy access to new-world conveniences. You will get to enjoy both modern living and a tropical island vibe in Royal Oceancrest Mactan.</p>
<p><strong>Royal Oceancrest Mactan</strong>&nbsp;is an investment with track record of tried, tested, and trusted services in property development by a reliable real estate developer in Cebu. Choose from the flexible financing options and make Royal Oceancrest Mactan your gateway to financial strength.</p>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739422117/building_bw0dmh.webp" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />
</section>
<hr/>
<section className={styles.section}>
<h2>PROJECT DETAILS</h2>
<ul>
<li>Address: Sudtunggan Rd, Brgy. Basak, Lapu-lapu City, Cebu</li>
<li>Theme: Neo-Asian Minimalist</li>
<li>Land Area: 1.4 hectares</li>
<li>LTS No.: LS-07-20-011</li>
<li>Unit Types: Studio , 1 BR 2 BR, PS</li>
<li>Development Type: High Rise Condominium</li>
<li>Completion Status: 60% Complete</li>
<li>Progress Status: Under Construction</li>
</ul>
<div className={styles.flexImage}>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421685/entrance_wytrwc.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421686/leisure-amentiy_jtex1a.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739422617/chilling_upjixz.webp"/>
</div>
</section>
<hr/>
<section className={styles.section}>
<h2>LOCATION AND ACCESSIBILITY</h2>
<p>Sudtunggan Rd, Brgy. Basak, Lapu-lapu City, Cebu</p>
<p>Royal Oceancrest Mactan is strategically located right at the center of modern establishments in tropical island of Mactan and never too far from the buzzing business capital of Cebu.</p>
<ul>
<li>15 minutes from the Airport and Mepz</li>
<li>10 minutes from Beach Resorts</li>
<li>5 minutes from Mactan Doctor&rsquo;s Hospital</li>
<li>5 minutes from Grand Mall Mactan</li>
</ul>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421689/map-1_ipbla5.webp" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
</section>
<hr/>
<section className={styles.section}>
<h2>AMENITIES AND FACILITIES</h2>
<p>Immerse in Cebu&rsquo;s Tropical Vibe. Royal Oceancrest Mactan is fitted with modern amenities, thoughtfully planned for your health and wellness.</p>
<h3>LEISURE AMENITIES:</h3>
<ul>
<li>Commercial Area</li>
<li>Swimming Pool</li>
<li>Clubhouse with Function Rooms</li>
<li>Fitness Gym</li>
<li>Shooting Hoops</li>
<li>Play Area</li>
<li>Jogging Path</li>
<li>Guard House and Entrance</li>
<li>Manicured Gardens</li>
<li>Grilling Station</li>
<li>Bamboo Entrance</li>
</ul>
<h3>BUILDING AMENITIES:</h3>
<ul>
<li>2 elevator units per building</li>
<li>Wide hallways</li>
<li>Well ventilated staircase</li>
<li>Provisions to telephone cable and internet</li>
<li>Closed Circuit Television (CCTV) System</li>
<li>Fire alarm and sprinkler system with fire exits</li>
<li>Standby generator set</li>
<li>Overhead water tank</li>
</ul>
<div className={styles.flexImage}>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421693/Bamboo-Entrance_s71qdv.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739422617/Clubhouse-with-Function-Rooms_b23wrz.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421689/Play-Area_ivqkrp.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421686/Jogging-Path-with-Strolling-Lanes_u8j0b7.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421686/Manicured-Gardens_s5xmaw.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421689/Oceancrest-310-scaled_wuzwkv.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421685/ENDING-2-657x246-1_hsxbkl.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421690/SCENE-06-1024x384-1_irq7pz.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421690/SCENE-08-1-1024x384-1_ix1ohk.webp"/>
</div>
</section>
<hr/>
<section className={styles.section}>
<h2>UNIT TYPES:</h2>
<p>Built to cater your dynamic lifestyle, each home is designed to ensure easy functional living for you and your family.</p>
<ol>
<li>STUDIO</li>
<li>1 BEDROOM MID</li>
<li>1 BEDROOM A END</li>
<li>1 BEDROOM A MID</li>
<li>2 BEDROOMS</li>
</ol>
<div className={styles.flexImage}>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421677/162558204_10165451564715085_672224408677773638_o_t48knf.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421676/160939621_10165451564615085_8586174237204736089_o_qe5ip9.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421676/160900685_10165451564740085_3073475063707534843_o_mlw4zr.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421676/160213779_10165451564900085_3300933828015825293_o_au0yox.webp"/>
</div>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421679/building-a_nlackr.webp" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
</section>
<hr/>
<section className={styles.section}>
<h2>BUILDING TOWERS:</h2>
<ol>
<li>TOWER A</li>
<li>TOWER B</li>
<li>TOWER C</li>
<li>TOWER D</li>
</ol>
<div className={styles.flexImage}>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421680/tower-plan-1_uqphih.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421679/Slide13_jfyxip.webp"/>
</div>
</section>
<hr/>
<section className={styles.section}>
<h2>UNIT DETAILS</h2>
<p>Developed by your reliable partner, you are assured of the quality of all their quick move-in units.</p>
<p><em>TOWER A UNIT DELIVERABLE ARE BARE UNITS</em></p>
<h3>BARE UNIT FEATURES:</h3>
<ul>
<li>Primer Walls and Ceiling</li>
<li>Plain Cement Finish</li>
<li>Kitchen Counter with Sink</li>
<li>Under Counter Cabinets</li>
<li>Bedroom Partitions Not Included</li>
</ul>
<div className={styles.flexImage}>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421678/bare-scaled_wggdm2.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421677/bare1-scaled_jnvaq3.webp"/>
</div>
</section>
<hr/>
<section className={styles.section}>
<h2>DETAILS AND COMPUTATION:</h2>
<h3>STUDIO UNIT:</h3>
<h3>TOWER A</h3>
<h3>BARE UNIT</h3>
<ul>
<li>LIVING/BEDROOM AREA</li>
<li>DINING AREA</li>
<li>KITCHEN AREA</li>
<li>STUDY AREA</li>
<li>TOILET &amp; BATH</li>
</ul>
<p><strong>FLOOR AREA: 28 sq.m.</strong></p>
<h4><strong>SAMPLE COMPUTATION THROUGH BANK FINANCING:</strong></h4>
<p>SELLING PRICE:&nbsp;<strong>Php 1,941,136.70</strong></p>
<p>RESERVATION FEE<em>: Php 30,000.00</em></p>
<p>&spades;&nbsp;<strong>12%</strong>&nbsp;Downpayment of net of Reservation Fee Payable in&nbsp;<strong>3</strong>&nbsp;months: Php 202,936.40</p>
<ul>
<li><strong>Php 67,645.46/month</strong></li>
</ul>
<p>&spades;<strong>&nbsp;88</strong>% Balance thru Bank Financing:<strong>&nbsp;Php 1,708,200.30</strong></p>
<p><em>Note: Taxes and Other Related Charges are not included in the Price and that is payable in&nbsp;<strong>3</strong>&nbsp;months:</em></p>
<p><strong>Php 168,794.50</strong></p>
<ul>
<li><em>Php 56,264.83/month</em></li>
</ul>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421680/studio_m6xgco.webp" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
</section>
<hr/>
<section className={styles.section}>
<h2>1 BEDROOM A END</h2>
<h3>TOWER A</h3>
<h3>BARE UNIT</h3>
<ul>
<li>LIVING/BEDROOM AREA</li>
<li>DINING AREA</li>
<li>KITCHEN AREA</li>
<li>TOILET &amp; BATH</li>
</ul>
<h4>FLOOR AREA: 28 sq.m.</h4>
<h4><strong>SAMPLE COMPUTATION THROUGH BANK FINANCING:</strong></h4>
<p>SELLING PRICE:&nbsp;<strong>Php 1,975,977.62</strong></p>
<p>RESERVATION FEE<em>: Php 30,000.00</em></p>
<p>&spades;&nbsp;<strong>12%</strong>&nbsp;Downpayment of net of Reservation Fee Payable in&nbsp;<strong>3</strong>&nbsp;months: Php 207,117.31</p>
<ul>
<li><strong>Php 69,039.10/month</strong></li>
</ul>
<p>&spades;<strong>&nbsp;88</strong>% Balance thru Bank Financing:<strong>&nbsp;Php 1,738,860.30</strong></p>
<p><em>Note: Taxes and Other Related Charges are not included in the Price and that is payable in&nbsp;<strong>3</strong>&nbsp;months:</em></p>
<p><strong>Php 171,824.14</strong></p>
<ul>
<li><em>Php 57,274.71/month</em></li>
</ul>
<div  className={styles.flexImage}>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421673/5-5_la5wop.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421672/1BR-A-END-scaled_lqbgc3.webp"/>
</div>
</section>
<hr/>
<section className={styles.section}>
<h2>1 BEDROOM B</h2>
<h3>TOWER A</h3>
<h3>BARE UNIT</h3>
<ul>
<li>LIVING/BEDROOM AREA</li>
<li>DINING AREA</li>
<li>KITCHEN AREA</li>
<li>TOILET &amp; BATH</li>
</ul>
<h4>FLOOR AREA: 30 sq.m.</h4>
<h4><strong>SAMPLE COMPUTATION THROUGH BANK FINANCING:</strong></h4>
<p>SELLING PRICE:&nbsp;<strong>Php 2,080,500.36</strong></p>
<p>RESERVATION FEE<em>: Php 30,000.00</em></p>
<p>&spades;&nbsp;<strong>12%</strong>&nbsp;Downpayment of net of Reservation Fee Payable in&nbsp;<strong>3</strong>&nbsp;months:&nbsp;<strong>Php 219,660.04</strong></p>
<ul>
<li><strong>Php 73,220.01/month</strong></li>
</ul>
<p>&spades;<strong>&nbsp;88</strong>% Balance thru Bank Financing:<strong>&nbsp;Php 1,830,840.31</strong></p>
<p><em>Note: Taxes and Other Related Charges are not included in the Price and that is payable in&nbsp;<strong>3</strong>&nbsp;months:</em></p>
<p><strong>Php 180,913.08</strong></p>
<ul>
<li><em>Php 60,304.36/month</em></li>
</ul>
<div className={styles.flexImage}>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421674/12-2_sqwnva.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421672/1BR-B-scaled_caghmz.webp"/>
</div>
</section>
<hr/>
<section className={styles.section}>
<h2>2-BEDROOMS WITH FREE PARKING</h2>
<h3>TOWER A</h3>
<h3>BARE UNIT</h3>
<ul>
<li>LIVING/BEDROOM AREA</li>
<li>DINING AREA</li>
<li>KITCHEN AREA</li>
<li>TOILET &amp; BATH</li>
</ul>
<h3>FLOOR AREA: 60 sq.m.</h3>
<h4><strong>SAMPLE COMPUTATION THROUGH BANK FINANCING:</strong></h4>
<p>SELLING PRICE:&nbsp;<strong>Php 4,190,864.37</strong></p>
<p>RESERVATION FEE<em>: Php 30,000.00</em></p>
<p>&spades;&nbsp;<strong>12%</strong>&nbsp;Downpayment of net of Reservation Fee Payable in&nbsp;<strong>3</strong>&nbsp;months: Php 472,903.72</p>
<ul>
<li><strong>Php 157,634.57/month</strong></li>
</ul>
<p>&spades;<strong>&nbsp;88</strong>% Balance thru Bank Financing:<strong>&nbsp;Php 3,687,960.64</strong></p>
<p><em>Note: Taxes and Other Related Charges are not included in the Price and that is payable in&nbsp;<strong>3</strong>&nbsp;months:</em></p>
<p><strong>Php 364,422.99</strong></p>
<ul>
<li><em>Php 121,474.33/month</em></li>
</ul>
<div className={styles.flexImage}>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421668/2-Bedroom-w_-Balcony-Parking-1-768x456-1_k9yomj.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421673/2BR-scaled_baz8gt.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421671/20-1_mzduzp.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421670/15-2_a1ivm0.webp"/>
</div>
</section>
<hr/>
<section className={styles.section}>
<h2>MODEL/DRESS-UP UNIT:</h2>
<h3>1-BEDROOM</h3>
<div className={styles.flexImage}>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421669/10-3_jmmqzx.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421670/11-4_kljaft.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421674/12-2_sqwnva.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421669/9-2_b9ws3d.webp"/>
</div>
</section>
<hr/>
<section className={styles.section}>
<h3>2-BEDROOMS</h3>
<div className={styles.flexImage}>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421671/20-1_mzduzp.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421670/15-2_a1ivm0.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421670/16-3_e41x4h.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421671/18-2_k4cob2.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421670/15-2_a1ivm0.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421668/3-6_wtinvr.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421669/4-6_mkhiwa.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421669/6-8_crhbkc.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421673/7-7_vv331k.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421674/8-7_pswa7r.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421671/21-1_ubgffc.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739421674/14-3_spu7ro.webp"/>
</div>
</section>
<hr/>
<section className={styles.section}>
<h2>CONSTRUCTION UPDATE:</h2>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739423428/1-10-scaled_zwa8eo.webp" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
</section>


</div>
)
}
