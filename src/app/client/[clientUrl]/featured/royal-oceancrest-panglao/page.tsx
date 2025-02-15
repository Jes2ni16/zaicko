
import { Metadata } from 'next'
import FullImage  from '../fullScreenImg';
import styles from '../page.module.css';
import Image from 'next/image';



export const generateMetadata = async ({ params }: { params: Promise<{ clientUrl: string }>;}): Promise<Metadata>  => {
 
    const {clientUrl} = await params;
  
    const client = await fetch(`https://zaiko-server.vercel.app/api/clients/url/${clientUrl}`).then((res) => res.json());
  
    return {
      title: `Royal Oceancrest Panglao  | ${client.name} `,
     description: 'Imagine a life surrounded by pristine white sand beaches, crystal-clear waters, and lush tropical scenery&mdash;all just steps from your doorstep.',
       openGraph: {
         title: `Royal Oceancrest Panglao | ${client.name}`,
          description: 'Imagine a life surrounded by pristine white sand beaches, crystal-clear waters, and lush tropical scenery&mdash;all just steps from your doorstep.',
        images: ['https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739630771/vlcsnap-2022-02-22-21h45m31s921_bminac.webp'],
        url:`https://zaiko.website/client/${client.url}/featured/royal-oceancrest-pangalao`,
        type:'website'
    },
  }
  }




export default function TierraAlta() {

    return (
        <div className={styles.body1}>

            <Image src='https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739630771/vlcsnap-2022-02-22-21h45m31s921_bminac.webp' width={500} height={500} className={styles.heroImage} alt='' sizes="(max-width: 1540px) 100vw, 1540px" />

<section className={styles.section}>
<h1>Royal Oceancrest Panglao</h1>
<p>Welcome to&nbsp;<strong>Royal Oceancrest Panglao</strong>, where luxury meets tranquility in the heart of Bohol&rsquo;s breathtaking landscapes. Imagine a life surrounded by pristine white sand beaches, crystal-clear waters, and lush tropical scenery&mdash;all just steps from your doorstep. Our thoughtfully designed community offers a harmonious blend of modern living and natural beauty, providing an idyllic retreat for relaxation and adventure.</p>
<p>With top-tier amenities, exquisite unit designs, and a prime location minutes away from key attractions, Royal Oceancrest Panglao is not just a home; it&rsquo;s a lifestyle choice. Whether you&rsquo;re seeking a serene escape, an investment opportunity, or a place to build cherished memories with loved ones, your dream begins here. Don&rsquo;t miss the chance to embrace this exclusive tropical living experience&mdash;your paradise awaits! 🌅</p>
</section>
<hr/>
<section className={styles.section}>
<h2>Location</h2>
<p><strong>Brgy. San Isidro, Dauis, Bohol</strong></p>
<p><strong>Royal Oceancrest Panglao</strong>&nbsp;is nestled in the heart of Panglao Island, renowned for its pristine white sand beaches. This tropical paradise offers a serene escape, perfect for relaxation and leisure. With easy access to the island&rsquo;s stunning natural beauty and convenient proximity to modern essentials, Royal Oceancrest Panglao is truly the best of both worlds&mdash;relaxing island life with the conveniences of modern living! 🌴</p>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739630770/PHI-ROPA-Photo-3-Carousel_iohzkl.webp" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
</section>
<hr/>
<section className={styles.section}>
<h2>Project Details</h2>
<p>🏯&nbsp;<strong>Theme:</strong>&nbsp;Neo-Asian Minimalist<br/>🏢&nbsp;<strong>Development Type:</strong>&nbsp;Mid-Rise Condominium<br/>🏗️&nbsp;<strong>Completion Date:</strong>&nbsp;December 31, 2023<br/>🚧&nbsp;<strong>Completion Status:</strong>&nbsp;80% complete (Under Construction)<br/>🛏️&nbsp;<strong>Unit Types:</strong>&nbsp;Studio &amp; 1-Bedroom<br/>💰&nbsp;<strong>Price Range:</strong>&nbsp;PhP 2,800,000 &ndash; PhP 3,432,600<br/>📜&nbsp;<strong>LTS No.:</strong>&nbsp;LS-R07-22-006</p>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739630771/vlcsnap-2022-02-22-21h45m31s921_bminac.webp" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
</section>
<hr/>
<section className={styles.section}>
<h2>Community Amenities</h2>
<ul>
<li><strong>Infinity Pool</strong>: Take a dip and unwind while enjoying stunning views.</li>
<li><strong>Kiddie Pool</strong>: A fun and safe spot for the little ones to splash around.</li>
<li><strong>Clubhouse with Function Rooms</strong>: Perfect for gatherings and celebrations.</li>
<li><strong>Meditation Garden</strong>: Find peace and relaxation in this serene space.</li>
<li><strong>Guardhouse with Entrance</strong>: Security and privacy for residents.</li>
<li><strong>Play Area</strong>: A dedicated space for children to play and explore.</li>
<li><strong>Pocket Gardens</strong>: Enjoy lush greenery throughout the community.</li>
<li><strong>Fitness Gym</strong>: Stay active and healthy without leaving your home.</li>
</ul>
<div className={styles.flexImage}>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739630771/vlcsnap-2022-02-22-21h46m18s792-1_z3s3gp.webp"/>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739630771/vlcsnap-2022-06-29-12h14m12s580_olrk9v.webp"/>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739630771/vlcsnap-2022-06-29-12h14m41s537-1_lahwbf.webp"/>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739630771/vlcsnap-2022-06-29-12h22m31s621_aocnkx.webp"/>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739630770/avalon-fitness-gym-3_vtq96a.webp"/>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739630772/Yoga-scaled_hilzgo.webp"/>
</div>
</section>
<hr/>
<section className={styles.section}>
<h2>Building Amenities</h2>
<ul>
<li><strong>2 Elevator Units per Building</strong>: Convenient access for all residents.</li>
<li><strong>Wide Hallways</strong>: Spacious walkways for ease and comfort.</li>
<li><strong>Well-Ventilated Staircase</strong>: Designed for comfort and safety.</li>
<li><strong>Provisions for Telephone, Cable, and Internet</strong>: Stay connected with modern utilities.</li>
<li><strong>CCTV System</strong>: 24/7 surveillance for your peace of mind.</li>
<li><strong>Fire Alarm and Sprinkler System</strong>: Safety measures are in place for all units.</li>
<li><strong>Standby Generator Set</strong>: No worries about power outages.</li>
<li><strong>Overhead Water Tank</strong>: Reliable water supply for all residents.</li>
</ul>
<div className={styles.flexImage}>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739630770/2-elevator-units-per-building_01_dwnzcc.webp"/>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739630770/ELEVATOR-LOBBY_f0bp2v.webp"/>
</div>
</section>
<hr/>
<section className={styles.section}>
<h2>UNIT TYPES</h2>
<ul>
<li>Studio</li>
<li>1 Bedroom with Balcony</li>
</ul>
<div className={styles.flexImage}>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739630771/1-Bedroom-A-Bed-ROPA_ba6vck.webp"/>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739630772/1-Bedroom-A-Living-ROPA_khzlm8.webp"/>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739630772/1-Bedroom-w_-Balcony-Bed-ROPA-1_r7plqj.webp"/>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739630769/1-Bedroom-w_-Balcony-Living_eunaxw.webp"/>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739630770/STUDIO-VIEW-ROPA-1_hx3vrg.webp"/>
<FullImage alt="" src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739630770/STUDIO-VIEW-ROPA-2_nsalrk.webp"/>
</div>
</section>
<hr/>
<section className={styles.section}>
<h3><strong>Don&rsquo;t Miss Your Chance to Own a Slice of Paradise!</strong>&nbsp;🌴</h3>
<p>At&nbsp;<strong>Royal Oceancrest Panglao</strong>, you&rsquo;re not just investing in a home&mdash;you&rsquo;re investing in a lifestyle. Imagine waking up to the soothing sound of the ocean, enjoying world-class amenities, and living just steps away from Bohol&rsquo;s stunning white sand beaches. Whether you&rsquo;re looking for a serene retreat, a smart investment, or a place to build lasting memories with loved ones, this tropical haven has it all.</p>
<p>With&nbsp;<strong>affordable prices</strong>,&nbsp;<strong>luxurious amenities</strong>, and a&nbsp;<strong>prime location</strong>&nbsp;close to everything you need, Royal Oceancrest Panglao is the perfect blend of relaxation and modern living. This is your opportunity to live the life you&rsquo;ve always dreamed of.</p>
<p><strong>Secure your unit now</strong>&nbsp;and start living the exclusive lifestyle you deserve! 🌟</p>

<h4>Features</h4>
<ul>
<li>24-Hour Security with CCTV</li>
<li>Back up generator</li>
<li>Elevator</li>
<li>Fire Alarm</li>
<li>Fitness Gym</li>
<li>Swimming Pool</li>
</ul>
</section>

    </div >
)
}
