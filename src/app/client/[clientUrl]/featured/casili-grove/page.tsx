
import { Metadata } from 'next'
import FullImage from '../fullScreenImg';
import styles from '../page.module.css';
import Image from 'next/image';



  export const generateMetadata = async ({ params }: { params: Promise<{ clientUrl: string }>;}): Promise<Metadata>  => {
 
    const {clientUrl} = await params;
  
    const client = await fetch(`https://zaiko-server.vercel.app/api/clients/url/${clientUrl}`).then((res) => res.json());
  
  
    return {
      title: `CASA MIRA SOUTH NAGA CITY, CEBU | ${client.name} `,
     description: 'Named the 2018 Best Housing Development in Cebu, this well-designed economic community is set on a scenic rolling terrain 60 to 100 meters above sea level, offering stunning views and 45% open spaces.',
       openGraph: {
         title: `CASA MIRA SOUTH NAGA CITY, CEBU | ${client.name}`,
          description: 'Named the 2018 Best Housing Development in Cebu, this well-designed economic community is set on a scenic rolling terrain 60 to 100 meters above sea level, offering stunning views and 45% open spaces.',
        images: ['https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739104319/photo-townhouse-model-b-1_o4p0av.webp'],
        url:`https://zaiko.website/client/${client.url}/featured/casa-mira-south`,
        type:'website'
    },
  }
  }
  
  export default function CasiliGrove() {
    return (
    <div className={styles.body1}>

<Image src='https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739104319/photo-townhouse-model-b-1_o4p0av.webp' width={500} height={500} className={styles.heroImage} alt='' sizes="(max-width: 1540px) 100vw, 1540px"/>

<section className={styles.section}>
<h1>CASA MIRA SOUTH NAGA CITY, CEBU</h1>
<p>Awarded as 2018&rsquo;s Best Housing Development (Cebu), this beautifully designed economic community sits on a rolling terrain 60 to 100 meters above sea level that boasts expansive views and 45% open spaces.</p>
<p>It features a grand entrance that is right beside the national highway and generously offers more with its three amenity areas all for the community to enjoy. At Casa Mira South there&rsquo;s MORE for the family.</p>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739104311/photo-clubhouse-retail_gi7zj8.webp"  alt="" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
</section>
<hr />

<section className={styles.section}>
<h2>ACCESSBILITY &amp; LANDMARKS:</h2>
<p>Just 14 kms away or 30 minutes via car from the South Road Properties.</p>
<p>&spades; Along the National Road (Accessible thru PUJs &amp; PUVs)</p>
<p>&spades; Few minutes going to:</p>
<ul>
<li>Mall</li>
<li>Groceries</li>
<li>Market</li>
<li>Schools</li>
<li>Restaurants</li>
<li>Pharmacies</li>
<li>Hospitals</li>
</ul>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739106414/464307193_8579523115462248_2292966776145292370_n_icbtzx.jpg"  alt="" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />
</section>
<hr />

<section className={styles.section}>
<h2>AMENITIES &amp; FACILITIES:</h2>
<ul>
<li>Grand Entrance</li>
<li>2 Entrances with Guardhouse</li>
<li>Main Amenity Area</li>
<li>Drop-off Pavilion</li>
<li>Grand Community Clubhouse</li>
<li>Retail Area</li>
<li>Function Room</li>
<li>Adult &amp; Kiddie Pool</li>
<li>Multi-purpose Court</li>
<li>Two Secondary Amenity Areas</li>
<li>Pavilion</li>
<li>Multi-purpose Court</li>
<li>Retail Area</li>
<li>Chapel with Function Hall</li>
<li>Landscape Parks &amp; Open Spaces</li>
<li>Street Lighting</li>
<li>Perimeter Fence</li>
<li>Overhead Water Tank</li>
<li>Sewage Treatment Facility</li>
<li>Material Recovery Facility</li>
<li>20 meter wide main road</li>
<li>24 Hour Security</li>
<li>Property Management Services</li>
</ul>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739104312/1-1_avrl1o.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739104312/2-1_uinxsf.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739104311/5_wnppw0.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739105443/6_l81d0q.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739104312/2_rtp77l.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739104311/photo-clubhouse-retail_gi7zj8.webp"  alt="" />
</div>
</section>
<hr />

<section className={styles.section}>
<h3><strong>MODEL UNITS:</strong></h3>
<ol>
<li>TOWNHOUSE A&amp;B</li>
<li>TOWNHOUSE C</li>
</ol>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739104311/3_uehfbw.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739104312/photo-townhouse-model-b-1-1_vf6091.webp"  alt="" />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739104311/photo-townhouse-model-c-1-1_tzhp27.webp"  alt=""  />
</div>
</section>
<hr />

<section className={styles.section}>
<h2>UNIT DETAILS &amp; COMPUTATION:</h2>
<h3>TOWNHOUSE A</h3>
<p>Unit Details:</p>
<ul>
<li>2 Bedrooms</li>
<li>1 Toilet &amp; Bath</li>
<li>Balconette</li>
<li>Carport</li>
<li>Service Area</li>
</ul>
<p><strong>Ground Floor:</strong></p>
<ul>
<li>Carport</li>
<li>Living Area</li>
<li>Dining Area</li>
<li>Kitchen Area</li>
<li>Service Area</li>
</ul>
<p><strong>Second Floor:</strong></p>
<ul>
<li>Bedroom 1</li>
<li>Bedroom</li>
<li>Common Toilet &amp; Bath</li>
<li>Hallway</li>
</ul>
<p>LOT AREA: 42 sq.m.</p>
<p>FLOOR AREA: 36.2 sq.m.</p>
<h3>SAMPLE COMPUTATION THROUGH BANK/PAG-IBIG:</h3>
<p>TOTAL CONTRACT PRICE:&nbsp;<strong>Php 1,702,228.47</strong></p>
<p>RESERVATION FEE:&nbsp;<strong>Php 10,000.00</strong></p>
<p>&spades; 12% Downpayment spread over&nbsp;<strong>30</strong>&nbsp;months:</p>
<ul>
<li><strong>Php 5,900.00/month</strong></li>
</ul>
<p>&spades; 88% Balance paid in CASH/BANK FINANCING:&nbsp;<strong>Php 1,354,724.98</strong></p>
<ul>
<li><strong>20 years: Php 14,447/month</strong></li>
</ul>
<p>or</p>
<p>&spades; 88% through PAG-IBIG<em>&nbsp;(subject for approval and assessment)</em>:<strong>&nbsp;Php 1,354,724.98</strong></p>
<ul>
<li>30 years:&nbsp;<strong>Php 8,341.27/month</strong></li>
</ul>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739104312/photo-townhouse-model-b-1-1_vf6091.webp"  alt="" />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739104320/townhouse-a-1_hiwpps.webp"  alt=""  />
</div>
</section>
<hr />

<section className={styles.section}>
<h2>TOWNHOUSE A END:</h2>
<p>Lot Area: 58.00 sq.m.</p>
<p>Floor Area: 36.2 sq.m.</p>
<p><strong>Ground Floor:</strong></p>
<ul>
<li>Carport</li>
<li>Living Area</li>
<li>Dining Area</li>
<li>Kitchen Area</li>
<li>Service Area</li>
</ul>
<p><strong>Second Floor:</strong></p>
<ul>
<li>Bedroom 1</li>
<li>Bedroom</li>
<li>Common Toilet &amp; Bath</li>
<li>Hallway</li>
</ul>
<h4>SAMPLE COMPUTATION THROUGH BANK/PAGIBIG:</h4>
<p>TOTAL CONTRACT PRICE:&nbsp;<strong>Php 1,971,438.10</strong></p>
<p>RESERVATION FEE:&nbsp;<strong>Php 10,000.00</strong></p>
<p>&diams; 12% Downpayment spread over&nbsp;<strong>30</strong>&nbsp;months:</p>
<ul>
<li><strong>Php 6,900.00/month</strong></li>
</ul>
<p>&diams; 88% Balance paid in CASH/BANK FINANCING:&nbsp;<strong>Php 1,578,696.32</strong></p>
<ul>
<li><strong>20 years: Php 16,836/month</strong></li>
</ul>
<p>or</p>
<p>&diams; 88% through PAG-IBIG<em>&nbsp;(subject for approval and assessment)</em>:&nbsp;<strong>Php 1,578,696.32</strong></p>
<ul>
<li>30 years:&nbsp;<strong>Php9,720.30/month</strong></li>
</ul>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739104320/1-2-scaled_woebof.webp"  alt="" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
</section>
<hr />

<section className={styles.section}>
<h3>TOWNHOUSE B</h3>
<p>Unit Details:</p>
<ul>
<li>2 Bedrooms</li>
<li>1 Toilet &amp; Bath</li>
<li>1 Powder Room</li>
<li>Balconette</li>
<li>Carport</li>
<li>Service Area</li>
</ul>
<p><strong>Ground Floor:</strong></p>
<ul>
<li>Carport</li>
<li>Living Area</li>
<li>Dining Area</li>
<li>Kitchen Area</li>
<li>Service Area</li>
<li>Powder Room</li>
</ul>
<p><strong>Second Floor:</strong></p>
<ul>
<li>Bedroom 1</li>
<li>Bedroom 2</li>
<li>Common Toilet &amp; Bath</li>
<li>Hallway</li>
</ul>
<h4>SAMPLE COMPUTATION THROUGH BANK/PAG-IBIG</h4>
<p>Lot Area: 48.00 sq.m.</p>
<p>Floor Area: 46.25 sq.m.</p>
<p>TOTAL CONTRACT PRICE:&nbsp;<strong>Php 2,091,336.33</strong></p>
<p>RESERVATION FEE:&nbsp;<strong>Php 10,000.00</strong></p>
<p>&diams;&nbsp;<strong>12%</strong>&nbsp;Downpayment spread over 30 months:</p>
<ul>
<li><strong>Php 7,400.00/month</strong></li>
</ul>
<p>&diams;&nbsp;<strong>88%</strong>&nbsp;Balance paid in CASH/BANK FINANCING:&nbsp;<strong>Php 1,676,807.86</strong></p>
<ul>
<li><strong>20 years: Php 17,882/month</strong></li>
</ul>
<p>or</p>
<p>&diams; 88% through PAG-IBIG<em>&nbsp;(subject for approval and assessment)</em>:&nbsp;<strong>Php 1,676,807.86</strong></p>
<ul>
<li>30 years:&nbsp;<strong>Php 10,324.39/month</strong></li>
</ul>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739104312/photo-townhouse-model-b-1-1_vf6091.webp"   alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739104312/photo-townhouse-model-b-1-1_vf6091.webp"  alt="" />
</div>
</section>

<hr />
<section className={styles.section}>
<h3>TOWNHOUSE B END UNIT:</h3>
<p>Unit Details:</p>
<ul>
<li>2 Bedrooms</li>
<li>1 Toilet &amp; Bath</li>
<li>1 Powder Room</li>
<li>Balconette</li>
<li>Carport</li>
<li>Service Area</li>
</ul>
<p><strong>Ground Floor:</strong></p>
<ul>
<li>Carport</li>
<li>Living Area</li>
<li>Dining Area</li>
<li>Kitchen Area</li>
<li>Service Area</li>
<li>Powder Room</li>
</ul>
<p><strong>Second Floor:</strong></p>
<ul>
<li>Bedroom 1</li>
<li>Bedroom 2</li>
<li>Common Toilet &amp; Bath</li>
<li>Hallway</li>
</ul>
<h4>SAMPLE COMPUTATION THROUGH BANK/PAG-IBIG</h4>
<p>Lot Area: 61.00 sq.m.</p>
<p>Floor Area: 46.25 sq.m.</p>
<p>TOTAL CONTRACT PRICE:&nbsp;<strong>Php 2,692,331.28</strong></p>
<p>RESERVATION FEE:<em>&nbsp;Php 10,000.00</em></p>
<p>&diams; 12% Downpayment spread over 30 months:</p>
<ul>
<li><strong>Php 9,400.0/month</strong></li>
</ul>
<p>&diams; 88% Balance paid in CASH/BANK FINANCING:&nbsp;<strong>Php 2,137,936.37</strong></p>
<ul>
<li><strong>20 years: Php 22,800/month</strong></li>
</ul>
<p>or</p>
<p>&diams; 88% through PAG-IBIG<em>&nbsp;(subject for approval and assessment)</em>:&nbsp;<strong>Php 2,137,936.37</strong></p>
<ul>
<li>30 years:&nbsp;<strong>Php 13,163.64/month</strong></li>
</ul>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739104321/CMS-UNIT-B-END-UNITweb-scaled_elfmsp.webp"  alt="" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />

</section>


    </div>
)
}
