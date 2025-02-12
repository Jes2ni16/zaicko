
import { Metadata } from 'next'
import FullImage from '../fullScreenImg';
import styles from '../page.module.css';
import Image from 'next/image';




 
export const generateMetadata = async ({ params }: { params: Promise<{ clientUrl: string }>;}): Promise<Metadata>  => {
 
  const {clientUrl} = await params;

  const client = await fetch(`https://zaiko-server.vercel.app/api/clients/url/${clientUrl}`).then((res) => res.json());



  return {
    title: `Amani Grand Resort | ${client.name} `,
   description: 'Amani Grand Resort Residences blends Cebu vibrant cultural heritage with its dynamic modernity. Enjoy a tranquil retreat in thoughtfully designed living spaces that prioritize comfort, happiness, and well-being.',
     openGraph: {
       title: `Amani Grand Resort  | ${client.name}`,
        description: 'Amani Grand Resort Residences blends Cebu vibrant cultural heritage with its dynamic modernity. Enjoy a tranquil retreat in thoughtfully designed living spaces that prioritize comfort, happiness, and well-being.',
      images: ['https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739330331/Amani-Grand_Perspective-5_s4ljgr.webp'],
      url:`https://zaiko.website/client/${client.url}/featured/amani-mactan`,
      type:'website'
  },
}
}
 


  
  export default function AmaniMactan() {
 
    return (
    <div className={styles.body1}>
<Image src='https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739330331/Amani-Grand_Perspective-5_s4ljgr.webp' width={500} height={500} className={styles.heroImage} alt=''/>

<section className={styles.section}>
<h1>Amani Grand Resort Residences</h1>
<p>Amani Grand Resort Residences offers the perfect balance of Cebu&rsquo;s rich cultural heritage and its fast-paced, modern landscape. Experience a serene sanctuary with peaceful living spaces designed for happiness and well-being. Whether you&rsquo;re seeking a tranquil retreat or a vibrant urban connection, this is where your dream of a sensible and fulfilling home becomes a reality.</p>
<p>📍&nbsp;<em>Pusok Rd., Lapu-Lapu City</em><br/>💰&nbsp;<em>Preselling starts at ₱3,000,000</em><br/>🌟&nbsp;<em>Price Range: ₱2.6M &ndash; ₱4.7M</em></p>
<div>
<iframe title="Amani Mactan" src="https://www.youtube.com/embed/8RauU3GeFzA?feature=oembed"    className={styles.square}  allowFullScreen={true}></iframe>

</div>
</section>
<hr/>
<section className={styles.section}>
<h2>🏗️ Project Details:</h2>
<ul>
<li>🛠️ Developer: Grand Land</li>
<li>🔄 Project Status:&nbsp;<em>Preselling</em>&nbsp;|&nbsp;<em>Ready for Occupancy</em></li>
<li>🏢 Total Floors: 7 Floors</li>
<li>🏘️ Total Units: Approx. 200+/Building</li>
<li>🌏 Total Land Area: 2.2 Hectares</li>
</ul>

<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739330331/Amani-Grand_Perspective-5_s4ljgr.webp" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739330331/AmaniGrand_building5_3-1024x683-1_yywtkl.webp" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>

<hr/>
<h4><strong>✨ Unit Features:</strong></h4>
<ul>
<li>✅ Wood Vinyl Tiles</li>
<li>✅ Painted Wall Finishes</li>
<li>✅ Complete Toilet and Bath</li>
<li>✅ Kitchen Cabinets</li>
<li>✅ Provision for Washing Machine and Water Heater</li>
<li>✅ Provisions for CATV and Telephones</li>
<li>✅ Fire Alarm &amp; Protection System</li>
</ul>
</section>
<hr/>
<section className={styles.section}>
<h2>🏢 Building Features:</h2>
<ul>
<li>🏢 Reception/Lobby Area</li>
<li>🪴 Atrium</li>
<li>🛗 Two Elevators per Building</li>
<li>🚗 Parking Provisions</li>
<li>🌱 Building Landscapes</li>
<li>🌟 Balcony in All Units</li>
<li>🔥 Fire Alarm System with Smoke &amp; Heat Detectors</li>
</ul>
</section>
<hr/>
<section className={styles.section}>
<h2><strong>🌴 Premium Amenities:</strong></h2>
<ul>
<li>🛡️ 24/7 Security &amp; Guardhouse</li>
<li>🏬 Retail Spaces, Hotel &amp; Office Areas</li>
<li>🅿️ Parking Area</li>
<li>🚗 Drop-off Pavilion</li>
<li>🏊&zwj;♂️ Lap Pool</li>
<li>💦 Wading Pool &amp; Pond</li>
<li>🏠 Clubhouse &amp; Multi-purpose Hall</li>
<li>🌸 Landscaped Gardens</li>
<li>🛝 Kiddie Playground</li>
<li>🏋️ Indoor Gym</li>
<li>🏃 Jogging Path</li>
<li>☀️ Gazebos</li>
</ul>
<div className={styles.flexImage} >
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739330331/Amani-Grand_Perspective_aunlnk.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739330331/Amani-Grand_Perspective-7_stew5s.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739330330/Amani-Grand_Perspective-11-1170x648-1-1024x567_glb2ym.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739330330/Amani-Grand_Perspective-8_obuh2q.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739330331/Amani-Grand_Perspective-13-947x648-1_fubbbv.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739330330/Amani-Grand_Perspective-12_dhivnh.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739330330/Amani-Grand_Perspective-10_baczkn.webp"/>
</div>
</section>
<hr/>
<section className={styles.section}>
<h2><strong>Unit Layouts:</strong></h2>
<h3><em>Studio Unit</em></h3>
<div>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739330330/8181426_orig_czeaoq.webp" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />
</div>
<ul>
<li><strong>Floor Area:</strong>&nbsp;27 sqm</li>
<li><strong>Configuration:</strong>&nbsp;0 Bedroom | 1 Bathroom</li>
</ul>
</section>
<hr/>
<section className={styles.section}>
<h3><em>1-Bedroom Unit</em></h3>
<div>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739330330/5899916_orig_n1zhvv.webp" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
</div>
<ul>
<li><strong>Floor Area:</strong>&nbsp;40 sqm</li>
<li><strong>Configuration:</strong>&nbsp;1 Bedroom | 1 Bathroom</li>
</ul>
</section>
<hr/>
<p><strong>✨ Discover Amani Grand Resort Residences &mdash; Your Perfect Retreat in the Heart of Lapu-Lapu City.</strong><br/>Ready to live in harmony with nature? 🌱 Let&rsquo;s make your dream home a reality! Res</p>




    </div>
)
}
