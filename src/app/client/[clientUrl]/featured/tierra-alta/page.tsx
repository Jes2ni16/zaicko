
import { Metadata } from 'next'
import FullImage from '../fullScreenImg';
import styles from '../page.module.css';
import Image from 'next/image';


export const metadata: Metadata = {
    title: 'TIERRA ALTA in SAN FERNANDO, CEBU',
    description: 'Tierra Altais a new hot spot where new Dream Home is located. Embraced wide range of greenies, breathtaking mountain side &amp; Seaview.',
    openGraph: {
        title: 'TIERRA ALTA in SAN FERNANDO | Luxury Townhouses',
        description: 'It is a Mountainside Dream Home',
        images: ['https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738812484/TIERRA-1536x818_yjqvnd.webp'],
    },
}


export default function TierraAlta() {

    return (
        <div className={styles.body1}>

            <Image src='https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738812484/TIERRA-1536x818_yjqvnd.webp' width={500} height={500} className={styles.heroImage} alt='' />


            <section className={styles.section}>
            <h1>TIERRA ALTA in SAN FERNANDO, CEBU</h1>
            <p>It is a Mountainside Dream Home!</p>
            <p>Tierra Altais a new &ldquo;hot spot&rdquo; where new Dream Home is located. Embraced wide range of greenies, breathtaking mountain side &amp; Seaview.</p>
            <p>Tierra Alta features it&rsquo;s unique characteristic of design.</p>
           </section>
<hr />
           <section className={styles.section}>
            <h2>PROJECT DETAILS:</h2>
            <ul>
                <li>Location: Brgy. Pitalo, San Fernando, Cebu</li>
                <li>Land Area: 2.8 hectares development</li>
                <li>With Flat &amp; Inclined Area</li>
                <li>With Seaview and Mountain View</li>
                <li>Around 253 beautiful houses</li>
                <li>Land marks: beside Miracle Crusade Church, before Alberlyn Project</li>
            </ul>
            <p><em>Disclaimer:</em></p>
            <p>The developer will exert its best effort to conform to the specifications and plans specified herein. However, the developer reserves the right, without prior notice, to alter and change the specifications and plan as may deem to maintain the feasibility of the project.</p>
            <p>This is a preselling project &amp; development.</p>
        <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738810729/AMENITY1_ockq7n.webp" alt=""  className={styles.fullImage}  sizes="(max-width: 1540px) 100vw, 1540px"/>
            </section>
            <hr />
            <section className={styles.section}>
            <h3>ACCESSIBILITY &amp; LOCATION:</h3>
            <ul>
                <li>2km to Libor Port</li>
                <li>2.8 km to Notre Dame Academy</li>
                <li>5.8 km to Savemore Naga</li>
                <li>6 km to Baywalk Naga</li>
                <li>8.9 km to South General Hospital</li>
            </ul>
            <h3>𝗧𝗿𝗮𝗻𝘀𝗽𝗼𝗿𝘁𝗮𝘁𝗶𝗼𝗻 𝗗𝗲𝘁𝗮𝗶𝗹𝘀:</h3>
            <ul>
                <li>&nbsp;Motorcycle and Tricycle from subdivision to highway</li>
                <li>&nbsp;PUJ (Public Utility Jeep) going to schools, malls and hospitals</li>
            </ul>
            <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738810730/VISINITY-MAP-scaled-e1721913835328_napcev.webp"   alt=""  className={styles.fullImage}  sizes="(max-width: 1540px) 100vw, 1540px"/>
            </section>
            <hr />
            <section className={styles.section}>
            <h2>AMENITIES AND FACILITIES:</h2>
            <ul>
                <li>CLUBHOUSE</li>
                <li>POOL AREA</li>
                <li>SILT POND</li>
                <li>PARKS AND PLAYGROUND</li>
                <li>LANDSCAPE (developer lot only)</li>
                <li>PERIMETERED SUBDIVISION</li>
                <li>ENTRANCE GATE</li>
                <li>GUARD HOUSE</li>
                <li>WATER TANK in designated area</li>
            </ul>
            <div className={styles.flexImage}       >
         <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738810721/AMENITY_bytves.webp"   alt=""  />
               <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738810729/AMENITY1_ockq7n.webp"  alt="" />
            </div>
            </section>
            <hr />
            <section className={styles.section}>
            <h2>MODEL UNITS:</h2>
            <ol>
                <li>BEA &ndash; 2-STOREY TOWNHOUSE&nbsp;(SOLD OUT)</li>
                <li>DIANA &ndash; 2-STOREY TOWNHOUSE</li>
                <li>ODE &ndash; SINGLE DETACHED UNIT&nbsp;(SOLD OUT)</li>
                <li>AYA A &ndash; SINGLE DETACHED&nbsp;(SOLD OUT)</li>
                <li>AYA B &ndash; SINGLE DETACHED&nbsp;(SOLD OUT)</li>
                <li>AIRI &ndash; SINGLE DETACHED</li>
            </ol>
            <div className={styles.flexImage}>
               <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738810722/AIRI-scaled_y0z38l.webp"   alt=""/>
               <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738810721/DIANABEA1_hgomnf.webp"  alt="" />
          <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738810721/AYA-scaled_wuauqc.webp"  alt="" />
             <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738810721/ODE-1-scaled_d8iz20.webp"   alt="" />
            </div>
            </section>
            <hr />
            <section className={styles.section}>
            <h2>UNIT DETAILS AND COMPUTATION:</h2>
            <h4>BEA &ndash; 2-STOREY TOWNHOUSE (sold out)<br /></h4>
            <p>2 Bedrooms; 2 Toilet &amp; Bath Townhouse</p>
            <h5>Unit Details:</h5>
            <p>Ground Floor:</p>
            <ul>
                <li>Living Area</li>
                <li>Dining Area</li>
                <li>Kitchen</li>
                <li>Toilet &amp; Bath</li>
                <li>Stair</li>
                <li>Parking</li>
                <li>Porch</li>
                <li>Service Area</li>
            </ul>
            <p>Second Floor:</p>
            <ul>
                <li>BD1</li>
                <li>BD2</li>
                <li>Hallway</li>
                <li>Stair</li>
                <li>Common Toilet &amp; Bath</li>
                <li>Balconette</li>
            </ul>
            <h3>SAMPLE PRICE AND COMPUTATION:</h3>
            <h4>Bea Inner Unit:</h4>
            <p>LOT AREA: 48 sq.m.</p>
            <p>FLOOR AREA: 63 sq.m.</p>
            <p>TOTAL PACKAGE PRICE:&nbsp;Php&nbsp;</p>
            <p>Reservation Fee:&nbsp;Php 30,000.00</p>
            <p>Transfer &amp; Misc. Fees:&nbsp;Php&nbsp;</p>
            <p>&spades; Equity, Net of Reservation Fee payable in months:</p>
            <ul>
                <li>Php/month</li>
            </ul>
            <p>&spades; 90% Balance Through Bank Financing:&nbsp;Php&nbsp;</p>
           <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738810721/DIANABEA1_hgomnf.webp" alt=""  className={styles.fullImage}  sizes="(max-width: 1540px) 100vw, 1540px"/>
            <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738810739/BEA-FLOOR-PLAN1-scaled_mv5g0w.webp"   alt=""  className={styles.fullImage}  sizes="(max-width: 1540px) 100vw, 1540px"/>
            <hr />
            <h3>DIANA &ndash; 2-STOREY TOWNHOUSE</h3>
            <p>3 Bedrooms; 2 Toilet &amp; Bath Townhouse</p>
            <h5>Unit Details:</h5>
            <p>Ground Floor:</p>
            <ul>
                <li>Living Area</li>
                <li>Dining Area</li>
                <li>Kitchen</li>
                <li>Toilet &amp; Bath</li>
                <li>Stair</li>
                <li>Parking</li>
                <li>Porch</li>
                <li>Service Area</li>
            </ul>
            <p>Second Floor:</p>
            <ul>
                <li>B (1)</li>
                <li>B (2)</li>
                <li>Master&rsquo;s BD</li>
                <li>Hallway</li>
                <li>Stair</li>
                <li>Common Toilet &amp; Bath</li>
                <li>Balconette</li>
            </ul>
            <h3>SAMPLE PRICE AND COMPUTATION:</h3>
            <h4>Diana Inner Unit:</h4>
            <p>LOT AREA: 48 sq.m.</p>
            <p>FLOOR AREA: 66 sq.m.</p>
            <p>TOTAL PACKAGE PRICE:&nbsp;Php 2,964,192.00</p>
            <p>Reservation Fee:&nbsp;Php 30,000.00</p>
            <p>Transfer &amp; Misc. Fees:&nbsp;Php 296,419.20</p>
            <p>&spades; 10% Equity, Net of Reservation Fee payable in&nbsp;<u>24</u>months:&nbsp;Php 296,419.20</p>
            <ul>
                <li>Php 11,100.80/month</li>
            </ul>
            <p>&spades; 90% Balance Through Bank Financing:&nbsp;Php 2,667,772.8</p>
            <p>Estimated Monthly Amortization Through Bank:</p>
            <ul>
                <li>20 years: Php&nbsp;<em>₱22,314.32/month</em></li>
            </ul>
            <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738810721/DIANABEA1_hgomnf.webp"   alt="" className={styles.fullImage} />
            <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738810734/DIANA-FLOOR-PLAN1-scaled_cunku5.webp" alt=""className={styles.fullImage}  sizes="(max-width: 1540px) 100vw, 1540px" />
            <hr />
            <h3>AYA B &ndash; 2-STOREY SINGLE DETACHED (SOLD OUT)</h3>
            <p>3 Bedrooms; 2 Toilet &amp; Bath; 1 Carport; Single Detached House and Lot with Balcony</p>
            <h5>Unit Details:</h5>
            <p>Ground Floor:</p>
            <ul>
                <li>Living Area</li>
                <li>Dining/Kitchen Area</li>
                <li>Toilet &amp; Bath</li>
                <li>Stairs</li>
                <li>Parking</li>
                <li>Porch</li>
                <li>Service Area</li>
            </ul>
            <p>Second Floor:</p>
            <ul>
                <li>BR 1</li>
                <li>BR 2</li>
                <li>Master&rsquo;s Bedroom</li>
                <li>Hallway</li>
                <li>Stair</li>
                <li>Common Toilet &amp; Bath</li>
                <li>Balcony</li>
            </ul>
            <h3>SAMPLE PRICE AND COMPUTATION:</h3>
            <p>LOT AREA: 100 sq.m.</p>
            <p>FLOOR AREA: 92 sq.m.</p>
            <p>TOTAL PACKAGE PRICE:&nbsp;Php&nbsp;</p>
            <p>Reservation Fee:&nbsp;Php 30,000.00</p>
            <p>Transfer &amp; Misc. Fees:&nbsp;Php 0</p>
            <p>&spades; 10% Equity, Net of Reservation Fee payable in&nbsp;30months:&nbsp;Php</p>
            <p>&spades; 90% Balance Through Bank Financing:&nbsp;Php&nbsp;</p>
            <p>Estimated Monthly Amortization Through Bank:</p>
            <ul>
                <li>20 years: Php</li>
            </ul>
            <div className={styles.flexImage}>
               <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738810721/AYA-scaled_wuauqc.webp"   alt=""  />
              <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738810738/AYA-FLOOR-PLAN1_pgudke.webp"   alt="" />
            </div>
            </section>
            <hr />
            <section className={styles.section}>
            <h3>AIRI &ndash; 2-STOREY SINGLE DETACHED</h3>
            <p>4 Bedrooms; 3 Toilet &amp; Bath; 1 Carport Single Detached House and Lot with Balcony</p>
            <h5>Unit Details:</h5>
            <p>Ground Floor:</p>
            <ul>
                <li>Living Area</li>
                <li>Dining Area</li>
                <li>Kitchen Area</li>
                <li>Guest Room</li>
                <li>Toilet &amp; Bath</li>
                <li>Stairs</li>
                <li>Parking</li>
                <li>Porch</li>
                <li>Service Area</li>
            </ul>
            <p>Second Floor:</p>
            <ul>
                <li>B1</li>
                <li>B2</li>
                <li>Master&rsquo;s Bedroom</li>
                <li>Master&rsquo;s Bedroom T&amp;B</li>
                <li>Hallway</li>
                <li>Stair</li>
                <li>Common Toilet &amp; Bath</li>
                <li>Balcony</li>
            </ul>
            <h3>SAMPLE PRICE AND COMPUTATION:</h3>
            <p>LOT AREA: 120 sq.m.</p>
            <p>FLOOR AREA: 114 sq.m.</p>
            <p>TOTAL PACKAGE PRICE:&nbsp;Php 5,988,480.00</p>
            <p>Reservation Fee:&nbsp;Php 30,000.00</p>
            <p>Transfer &amp; Misc. Fees:&nbsp;Php 479,078.40</p>
            <p>&spades; 10% Equity, Net of Reservation Fee payable in&nbsp;24months:&nbsp;Php 598,848.00</p>
            <ul>
                <li>Php 23,702.00/month</li>
            </ul>
            <p>&spades; 90% Balance Through Bank Financing:&nbsp;Php 5,389,632.00</p>
            <ul>
                <li>Est. 20years:&nbsp;<em>₱45,081.04/month</em></li>
            </ul>
            <div className={styles.flexImage}>
              <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738810722/AIRI-scaled_y0z38l.webp"   alt=""/>
             <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738810737/AIRI-FLOOR-PLAN-1-scaled_zu8p9m.webp"  alt="" />
            </div>
            </section>
            <hr />
            <section className={styles.section}>
            <h3>ODE &ndash; 2-STOREY SINGLE ATTACHED &ndash; SOLD OUT</h3>
            <p>3 Bedrooms; 2 Toilet &amp; Bath Single Detached Unit</p>
            <h5>Unit Details:</h5>
            <p>Ground Floor:</p>
            <ul>
                <li>Living Area</li>
                <li>Dining Area</li>
                <li>Kitchen</li>
                <li>Toilet &amp; Bath</li>
                <li>Stair</li>
                <li>Parking</li>
                <li>Option Patio/Parking 2</li>
                <li>Porch</li>
                <li>Optional Service Area</li>
            </ul>
            <p>Second Floor:</p>
            <ul>
                <li>Bed Room 1</li>
                <li>BR 2</li>
                <li>Masters Bedroom with own Balcony</li>
                <li>Hallway</li>
                <li>Stair</li>
                <li>Common Toilet &amp; Bath</li>
            </ul>
            <h3>SAMPLE PRICE AND COMPUTATION:</h3>
            <p>LOT AREA: 100 sq.m.</p>
            <p>FLOOR AREA: 80 sq.m.</p>
            <p>TOTAL PACKAGE PRICE:&nbsp;Php&nbsp;</p>
            <p>Reservation Fee:&nbsp;Php 30,000.00</p>
            <p>Transfer &amp; Misc. Fees:&nbsp;Php&nbsp;</p>
            <p>&spades; 10% Equity, Net of Reservation Fee payable in&nbsp;30months:</p>
            <ul>
                <li>Php&nbsp;</li>
            </ul>
            <p>&spades; 90% Balance Through Bank Financing:&nbsp;Php&nbsp;</p>
            <p>Estimated Monthly Amortization Through Bank:</p>
            <div className={styles.flexImage}>
               <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738810735/odesingleattached_yycmdy.webp"alt="" />
          <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738810736/odesingleattachedfp_in7nqx.webp"   alt=""  />
            </div>
            </section>

            <hr />
            <section className={styles.section}>
            <h2>CONSTRUCTION UPDATE:</h2>
            <div className={styles.flexImage}>
               <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738810741/324975964_3017671175204420_6762067821912366093_n_dgjh8t.webp" alt="" />
             <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738810741/296855552_597919548479273_6283979787434499717_n_iacojx.webp" alt=""  />
              <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738810744/296478489_604457621201579_541005253426984487_n_wbinpv.webp" alt=""  />
              <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738810743/292399680_596638185363576_8987911468189246569_n_qdxbwt.webp" alt="" />
            </div>
            </section>

            <hr />
       
            <section className={styles.section}>
            <h2>AVAILABLE UNITS:</h2>
           <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738810742/TIERRA-ALTAY-JULY-252024_c5wgfo.webp" alt=""  className={styles.fullImage}  sizes="(max-width: 1540px) 100vw, 1540px" />
            </section>



    </div >
)
}
