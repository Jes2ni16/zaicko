
import { Metadata } from 'next'
import FullImage from '../fullScreenImg';
import styles from '../page.module.css';
import Image from 'next/image';




  export const generateMetadata = async ({ params }: { params: Promise<{ clientUrl: string }>;}): Promise<Metadata>  => {
 
    const {clientUrl} = await params;
  
    const client = await fetch(`https://zaiko-server.vercel.app/api/clients/url/${clientUrl}`).then((res) => res.json());
  
    return {
      title: `Mivela Garden Residences  | ${client.name} `,
     description: 'The 6th addition to Cebu Landmasters Best-Selling Garden Series, this development is poised to blossom into a modern garden residential community in Cebu City, set to redefine the concept of garden living.',
       openGraph: {
         title: `Mivela Garden Residences  | ${client.name}`,
          description: 'The 6th addition to Cebu Landmasters Best-Selling Garden Series, this development is poised to blossom into a modern garden residential community in Cebu City, set to redefine the concept of garden living.',
        images: ['https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739293567/Screenshot_2019_0924_172038_tapvwe.webp'],
        url:`https://zaiko.website/client/${client.url}/featured/mivela-residences`,
        type:'website'
    },
  }
  }
  
  


  
  export default function MactanPlains() {
    return (
    <div className={styles.body1}>

<Image src='https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739293567/Screenshot_2019_0924_172038_tapvwe.webp' width={500} height={500} className={styles.heroImage} alt=''/>

<section className={styles.section}>
<h1>Mivela Garden Residences</h1>
<p><strong>Location: Banilad, Cebu City</strong></p>
<p><strong>Mivela Garden Residences</strong>&nbsp;is 6th of the Best-Selling Garden Series of Cebu Landmasters that is set to bloom as a modern garden residential community in Cebu City and will redefine garden living.</p>
<p>This development is where you can relish lush greeneries and wide open spaces while enjoying the comforts of urban living with its strategic location and community features that are of high standards. It is tucked strategically at Banilad, Cebu City where major establishments providing urban comforts is within near distance yet still maintains its serene and refreshing ambiance.</p>
<p>It has amenities &amp; facilities that are were well-designed and thought of to bring the vision of the fastest-selling residential condo in Metro Cebu- The Mivela Garden Residences.</p>
<p>HLURB LS NO : 034522 | BLDG. 1: 035672 | BLDG. 2: 035669 | BLDG. 3: 035670 | BLDG. 4: 035671</p>
<p><strong>About the Project:</strong></p>
<p>Developer : Cebu Landmasters Inc.<br/>Project Type : Residential Condominium<br/>Total Land Area : 1.26 hectares<br/>No. of Parking Units : 507 Units<br/>No. of Buildings : 4 Residential Towers</p>
<ul>
<li>Tower 1 &ndash; 384 units</li>
<li>Tower 2 &ndash; 505 units</li>
<li>Tower 3 &ndash; 360 units</li>
<li>Tower 4 &ndash; 336 units</li>
</ul>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739293567/Screenshot_2019_0924_172038_tapvwe.webp" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
<p>Situated at the prime Banilad Estate of Cebu City, it is within a 1-kilometer radius to major establishments:</p>
<ul>
<li>400m from Montebello Villa Hotel</li>
<li>600m from Gaisano Country Mall</li>
<li>700m from Banilad Town Center</li>
<li>700m from UC Banilad</li>
<li>900m from Camp Lapu-Lapu Hospital</li>
<li>1 km from Adoration Convent of Divine Peace</li>
<li>800m from Streetscape Mall</li>
<li>900m from PAREF Southcrest</li>
<li>1 km from Cebu IT Park</li>
</ul>
<h2><strong>Community Amenities:</strong></h2>
<ul>
<li>Gate and Guardhouse</li>
<li>Lobby Lounge</li>
<li>Multi-level Clubhouse with Lap Pool</li>
<li>Pavilion with Swimming Pool</li>
<li>Perimeter Fence</li>
<li>Retail Area</li>
<li>Gym</li>
<li>Zen Garden</li>
<li>Pedestrian Pathways and Jogging Paths</li>
<li>Wi-Fi Hotspots in Amenity Areas</li>
<li>Function Room</li>
<li>Outdoor Lounges</li>
<li>Designated Parking Spaces</li>
<li>24 hour CCTV Security System</li>
</ul>
<h2><strong>Building Features:</strong></h2>
<ul>
<li>Balcony in selected units</li>
<li>All units are combinable</li>
<li>5m wide corridors</li>
<li>3 Passenger elevators for Tower 1, 3 &amp; 4</li>
<li>6 Passenger elevators for Tower 2</li>
<li>100% Back-up Power</li>
<li>Garbage holding room per floor</li>
<li>24/7 Security System</li>
<li>Ample parking space</li>
<li>Property Management Services</li>
</ul>
</section>
<hr />
<section className={styles.section}>
<h2><strong>Unit Features:</strong></h2>
<ul>
<li>Painted walls, partitions and ceilings</li>
<li>Tiled flooring</li>
<li>Tiled toilet and bath with complete bathroom fixtures</li>
<li>Kitchen sink with countertop</li>
<li>Kitchen base cabinet</li>
<li>Installed fire detection and suppression system</li>
<li>Provision for kitchen exhaust</li>
<li>Provision for window type air conditioning unit</li>
<li>Provision for telephone, cable and internet</li>
<li>Provision for water heater</li>
</ul>
<h3>IMPORTANT NOTES:</h3>
<ul>
<li>Investment range are SUBJECT to change without prior notice.</li>
<li>Investment range does NOT include move-in fees, applicable utility connections and other related charges, but not limited to, electrical, water and telephone/ internet connections, and association dues.</li>
<li>Investment range EXCLUDES any and all financial and incidental charges related to loan releases including, but not limited to, fire insurance, mortgage redemption insurance, etc.</li>
<li>The buyer MAY NOT move-in their unit/s until the Total Investment and the utility charges and loan related charges stated above have been fully paid.</li>
</ul>
</section>
<hr/>

<section className={styles.section}>
<h2><strong>Available Units</strong></h2>
<h3>1 Bedroom Unit</h3>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739293567/eZy_watermark_24-09-2019_08-45-41-455x500_xhvqqf.webp" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
<h3>1 Bedroom (T4)</h3>
<p>Floor Area: </p>
<p><strong>55.31 sqm.</strong></p>
<br />
<p>Investment range:</p>
<p><strong>Php 9,171,360 &ndash; 9,888,156</strong></p>
<hr/>
<h3>1 Bedroom (T4)</h3>
<p>Floor Area:</p>
<p><strong>47.76 sqm.</strong></p>
<br />
<p>Investment range:</p>
<p><strong>Php 7,921,368 &ndash; 8,497,116</strong></p>

</section>
<hr/>
<section className={styles.section}>
<h2><strong>Gallery</strong></h2>
<div className={styles.flexImage}>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739293567/1-8_p63jhp.webp"/>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739293567/2-9_mz0u8d.webp"/>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739293567/7-2-1_bvvs8t.webp"/>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739293566/3-1_cirpyf.webp"/>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739293566/5-1_zvpmkn.webp"/>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739293566/4-1_ahkbrx.webp"/>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739293566/4-4_ts5a8x.webp"/>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739293566/3-5_calg0j.webp"/>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739293566/5-4_wpnurr.webp"/>
</div>
<hr/>
<h4><strong>Vicinity Map</strong></h4>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739293567/vmap_hive25.webp"/>

</section>

    </div>
)
}
