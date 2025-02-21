
import { Metadata } from 'next'
import FullImage from '../fullScreenImg';
import styles from '../page.module.css';





  export const generateMetadata = async ({ params }: { params: Promise<{ clientUrl: string }>;}): Promise<Metadata>  => {
 
    const {clientUrl} = await params;
  
    const client = await fetch(`https://zaiko-server.vercel.app/api/clients/url/${clientUrl}`).then((res) => res.json());
  
    return {
      title: `LA BELLEZAH HOMES TREA COMPOSTELA | ${client.name} `,
     description: 'Discover the beauty of serene living at La Bellezah Homes Trea, an exceptional residential development by&nbsp Myvan Properties and Development Inc.',
       openGraph: {
         title: `LA BELLEZAH HOMES TREA COMPOSTELA | ${client.name}`,
          description: 'Discover the beauty of serene living at La Bellezah Homes Trea, an exceptional residential development by Myvan Properties and Development Inc.',
        images: ['https://res.cloudinary.com/dnh0z6fm7/image/upload/v1740104060/cover-3_ppqlc2.jpg'],
        url:`https://zaiko.website/client/${client.url}/featured/la-bellezah-compostela`,
        type:'website'
    },
  }
  }


export default function GuadaVerde(){

return(
    <div className={styles.body1}>

<FullImage src='https://res.cloudinary.com/dnh0z6fm7/image/upload/v1740104060/cover-3_ppqlc2.jpg' width={500} height={500} className={styles.heroImage} alt='' sizes="(max-width: 1540px) 100vw, 1540px"/>

<section className={styles.section}>
<h1>LA BELLEZAH HOMES TREA COMPOSTELA</h1>
<p>Discover the beauty of serene living at&nbsp;<strong>La Bellezah Homes Trea</strong>, an exceptional residential development by&nbsp;<strong>Myvan Properties and Development Inc.</strong>, located in Barangay Cabadiangan, Compostela, Cebu. Perfectly blending modern design, functionality, and nature, La Bellezah Homes Trea offers the perfect space for families, professionals, and retirees seeking a peaceful retreat without compromising convenience.</p>
</section>
<hr />
<section className={styles.section}>
<h2>Project Details</h2>
<p>Nestled in Barangay Cabadiangan, Compostela, Cebu, this exclusive development features 61 meticulously designed 3-bedroom townhouses. Each unit boasts a floor area of 45-50 square meters and sits on a 40-square-meter lot, offering a perfect balance of space and functionality. Complete with a dedicated parking slot, these homes provide modern living comfort in a tranquil community setting.</p>
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1740104059/project-details_ldtatq.jpg" alt="" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />
</section>
<hr />
<section className={styles.section}>
<h2>Why Choose La Bellezah Homes Trea?</h2>
<p><strong>1. Prime Location</strong></p>
<p>La Bellezah Homes Trea is strategically situated in Compostela, just a short drive from Cebu City, making it an ideal choice for those who value accessibility. Enjoy proximity to essential establishments such as schools, hospitals, shopping centers, and recreation spots while being surrounded by the serene charm of countryside living.</p>
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1740104059/location_e9jvr7.jpg" alt="" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />
<p><strong>2. Thoughtfully Designed Homes</strong></p>
<p>Each home in La Bellezah Homes Trea is designed with comfort and practicality in mind. Whether you&rsquo;re starting a family or looking for a peaceful retirement haven, the modern architecture and efficient layouts ensure a home that suits your needs and lifestyle.</p>
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1740104058/7-open-space_m5dink.jpg" alt="" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />
<p><strong>3. Amenities That Elevate Your Lifestyle</strong></p>
<p>Experience a community where relaxation and leisure are at the forefront. La Bellezah Homes Trea boasts well-planned amenities, including:</p>
<ul>
<li>A clubhouse for gatherings and events.</li>
<li>Landscaped parks and gardens.</li>
<li>A children&rsquo;s playground for your little ones to enjoy.</li>
<li>24/7 security to ensure peace of mind for all residents.</li>
</ul>
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1740104058/amenities-1_lowdop.jpg" alt="" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />
<p><strong>4. Quality Construction by Myvan Properties</strong></p>
<p>Myvan Properties and Development Inc. is known for its commitment to delivering quality and innovative residential projects. With La Bellezah Homes Trea, you can trust that your home is built with superior craftsmanship and materials that stand the test of time.</p>
<div className={styles.flexImage}>
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1740104060/cover-3_ppqlc2.jpg" alt="" />
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1740104059/2-floor-plan_lm48su.jpg" alt="" />
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1740104059/4-parks_bbytey.jpg" alt="" />
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1740104060/3-site-development-plan_g5sgkv.jpg" alt="" />
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1740104059/5-dining-room_xvkme8.jpg" alt="" />
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1740104060/6-bathroom_pcnexr.jpg" alt="" />
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1740104058/design-1_hsnmzt.jpg" alt="" />
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1740104059/8-inclusions_ibvnhh.jpg" alt="" />
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1740104059/0029_xpibaq.jpg" alt="" />
</div>
</section>
<hr />
<section className={styles.section}>
<h2>Live Close to Nature, Yet Connected to Everything</h2>
<p>Imagine waking up to the gentle breeze and lush greenery while staying connected to modern conveniences. La Bellezah Homes Trea offers the best of both worlds&mdash;an escape from the city&rsquo;s hustle and bustle without feeling disconnected.</p>
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1740104058/9-0027-1_x72jyw.jpg" alt="" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />
</section>
<hr />
<section className={styles.section}>
<h2>Invest in Your Dream Home Today</h2>
<p>Whether you&rsquo;re looking for a long-term residence or a valuable real estate investment, La Bellezah Homes Trea presents a unique opportunity to own a home in one of Compostela&rsquo;s most promising communities. Flexible payment terms and competitive pricing make it easier than ever to turn your dream into reality.</p>
<div>
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1740104058/pag-ibig-indicative-price_ynefnu.jpg" alt="" />
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1740104060/bank-financing-indicative-price_gp9wwq.jpg" alt="" />
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1740104060/pag-ibig-loan-sc_gnifvv.png" alt="" />
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1740104060/bank-loan-sc_uc8y6w.png" alt="" />
</div>
</section>

    </div>
)
}
