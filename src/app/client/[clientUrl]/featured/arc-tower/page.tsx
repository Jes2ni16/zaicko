
import { Metadata } from 'next'
import FullImage from '../fullScreenImg';
import styles from '../page.module.css';
import Image from 'next/image';




 
export const generateMetadata = async ({ params }: { params: Promise<{ clientUrl: string }>;}): Promise<Metadata>  => {
 
  const {clientUrl} = await params;

  const client = await fetch(`https://zaiko-server.vercel.app/api/clients/url/${clientUrl}`).then((res) => res.json());



  return {
    title: `ARC TOWER RESIDENCES | ${clientUrl} `,
   description: 'Arc Tower Residences is a project that will have residential condo, office and hotel components &ndash; will rise at N. Bacalso Avenue corner V. Rama Street in Cebu City.',
     openGraph: {
       title: `ARC TOWER RESIDENCES  | ${client.name}`,
        description: 'Arc Tower Residences is a project that will have residential condo, office and hotel components &ndash; will rise at N. Bacalso Avenue corner V. Rama Street in Cebu City.',
      images: ['https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349021/arc_ovvsa3.jpg'],
      url:`https://zaiko.website/client/${client.url}/featured/arc-tower`,
      type:'website'
  },
}
}
 


  
  export default function Clarendon() {
 
    return (
    <div className={styles.body1}>
<Image src='https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349021/arc_ovvsa3.jpg' width={500} height={500} className={styles.heroImage} alt=''/>

<section className={styles.section}>
<h1>ARC TOWER RESIDENCES </h1>
<p>Arc Tower Residences&nbsp;is a project that will have residential condo, office and hotel components &ndash; will rise at N. Bacalso Avenue corner V. Rama Street in Cebu City. The first phase will see the rise of a retail and residential tower, while the second tower will house a hotel as well as retail and residential units. The third tower will serve as the office component of the whole mixed-use project, which will also have retail units at the lower level.</p>
<p>Come Home to a Place where quality living is GUARANTEED.</p>
<h4>SITE DEVELOPMENT PLAN &amp; DESIGN PARTNERS</h4>
<p>With distinct architectural design and amenities designed by LPPA and Broadway Malyan, leaders and innovators in the real estate industry- our design partners enable us to deliver only the best when it comes to residential living.</p>
<ul>
<li>Land Area: 8851 sq.m.</li>
<li>No.of Buildings: 3 Towers</li>
<li>No. of Residential Units: 697 Units (Tower 1)</li>
<li>No. of Residential Floors: 17 Flors (Tower 1)</li>
<li>Unit Area Range: 22.20 to 25.87 sq.m.</li>
</ul>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349021/arc_ovvsa3.jpg"  alt=""  className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"  />
</section>

<hr />
<section className={styles.section}>
<h2>LOCATION &amp; ACCESSIBILITY:</h2>
<ul>
<li>240 m Adventist Hospital</li>
<li>400 m University of San Carlos</li>
<li>500 m Cebu City Medical Center</li>
<li>900 m Cebu Institute of Technology</li>
<li>1.2 km Gaisano Capital South</li>
<li>1.3 km University of Cebu</li>
<li>1.4 km University of San Jose</li>
<li>1.6 km College of Technological Sciences</li>
<li>1.9 km Vicente Sotto Medical Center</li>
<li>2.1 km Robinsons Fuente / Cybergate</li>
<li>2.2 km Chong Hua Hospital</li>
<li>2.6 km Cebu-Cordova Link Expressway</li>
<li>2.9 km SM Seaside</li>
<li>14 km Mactan-Cebu Int&rsquo;l Airport</li>
</ul>
<p><strong>UNIVERSITY SCHOOLS</strong></p>
<ul>
<li>San Carlos Main,&nbsp;San Jose Recoletos,&nbsp;San Carlos Girls Highschool, ACT, University of Cebu METC, Cebu Institute of Technology, Salazar Institute of Technology, and more</li>
</ul>
<p><strong>HOSPITALS:</strong></p>
<ul>
<li>Cebu Doctors Hospital, Sacred Heart Hospital, Cebu City Medical Center, Miller Hospital, Vicente Sotto Hospital, and Chong Chua Hospital</li>
</ul>
<p><strong>MALLS:</strong></p>
<ul>
<li>Elizabeth Mall, Gaisano Metro, SM City, SM Seaside, Robinson Galleria</li>
</ul>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349021/ARCMAP_bruhil.jpg"  alt="" className={styles.fullImage} height={800}   sizes="(max-width: 1540px) 100vw, 1540px"/>
</section>

<hr />
<section className={styles.section}>
<h2>AMENITIES &amp; FACILITIES:</h2>
<p><strong>LIFE OF LEISURE</strong></p>
<p>Quality living starts with two floors of amenities that aim to bring everyday leisure. Enjoy spaces for rest and recreation with your well-being in mind.</p>
<ul>
<li>25 meter Swimming Pool and Sun Deck</li>
<li>Kiddie Pool</li>
<li>Fitness Gym</li>
<li>Conference/Function Room</li>
<li>Sky Garden</li>
<li>Viewing Deck</li>
<li>Work Space and Study Lounge</li>
<li>Individual Mail Boxes</li>
<li>Main Lobby with Reception Area</li>
</ul>
<h4>BUILDING FEATURES:</h4>
<ul>
<li>4 Levels of Podium Parking</li>
<li>4 High Speed Elevator</li>
<li>Elevator Keycard Access</li>
<li>24-Hour Security System</li>
<li>100% Back-up Power</li>
<li>Fire Alarm System and Sprinkles in all areas</li>
<li>Wi-Fi Selected Amenity Areas</li>
<li>Material Recovery Facility</li>
<li>Complete Information Directory</li>
<li>2 Fire Exit Stairs</li>
<li>&nbsp;Landscaped Areas</li>
<li>5-Storey Commercial Space</li>
</ul>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349021/retail_hwpbkd.jpg"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349020/gym_pakyqe.jpg" alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349021/lobby-1_dcyuve.jpg"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349020/pool_skv7pu.jpg" alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349020/pool2_qnldhm.jpg"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349020/workplace_mjwfmj.jpg" alt=""  />
</div>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349020/6TH-FLOOR-AMENITY-AREA_p7ckbi.jpg"  alt=""   className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
</section>
<hr />
<section className={styles.section}>
<h2><strong>UNIT FEATURES AND DELIVERABLE:</strong></h2>
<ul>
<li>Porcelain Tiles in all Dwelling Areas</li>
<li>Painted Walls and Ceilings</li>
<li>Universal Type Convenience Outlet</li>
<li>Grease Trap</li>
<li>Smoke Detection System &amp; Sprinkler System</li>
<li>High Quality Toilet &amp; Bath Features and Accessories</li>
<li>Complete Lighting Fixtures</li>
<li>Kitchen Countertop</li>
<li>Upper and Lower Cabinets</li>
</ul>
<p><strong>Other Provisions:</strong></p>
<ul>
<li>Individual Electric And Water Meter</li>
<li>Provision for Cable TV, Telephone and Microwave</li>
<li>Provision for Induction Cooktop and Microwave</li>
<li>Ventilation for Kitchen and Toilets</li>
<li>Provision for Window Type Air Conditioner</li>
<li>Provision for Water Heater in Toilet</li>
<li>Washer/Dryer Provision for each Unit</li>
</ul>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349019/3-2_fds8lf.jpg" alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349019/2-4_n5kisc.jpg"  alt="" />
</div>
</section>

<hr />
<section className={styles.section}>
<h2>UNIT DETAILS AND COMPUTATION:</h2>
<p>FLOOR AREA: 22.2 sq.m.</p>
<ul>
<li>Living/Dining Area</li>
<li>Bedroom Area</li>
<li>Kitchen Area</li>
<li>Toilet &amp; Bath</li>
</ul>
<h4>SAMPLE SPECIAL COMPUTATION THROUGH BANK FINANCING:</h4>
<p>TOTAL CONTRACT PRICE:&nbsp;<strong>Php 4,283,881.60</strong></p>
<p><em>RESERVATION FEE:&nbsp;Php 30,000.00</em></p>
<p>Transfer Charge:&nbsp;<strong>Php&nbsp;</strong><strong>344,240.49</strong></p>
<div>&spades; Special Equity net of Reservation in<strong>&nbsp;6 months</strong>:&nbsp;<strong>Php 70,456.98</strong></div>
<ul>
<li><strong>Php&nbsp;6,742.83/month</strong></li>
</ul>
<div></div>
<p>&spades;&nbsp;Balance through Bank Financing including the Transfer Charge:&nbsp;<strong>Php&nbsp;4,557,665.11</strong></p>
<ul>
<li>20 years<strong>: ₱38,122.13/month (est.)</strong></li>
</ul>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349019/FLOOR-PLAN-1-e1699262676626_jfvxpx.png"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349020/12-2_l55cgv.jpg"  alt="" />

</div>
</section>

<hr />
<section className={styles.section}>
<h3>STUDIO MODEL UNIT:</h3>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349020/12-2_l55cgv.jpg"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349019/2-21_afalt8.jpg" alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349019/1-19_bmismr.jpg"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349019/3-17_rfirbi.jpg"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349018/5-15_iknose.jpg"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349018/10-4_zkheh2.jpg"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349018/11-2_naxykk.jpg"  alt=""  />
    <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349018/15-1_ynftm6.jpg"  alt=""  />
    <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349017/16-2_wunyxf.jpg"  alt=""  />
    <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349018/17_lnpxt4.jpg"  alt=""  />
    <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349017/9-5_e0qc2l.jpg" alt=""  />
    <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349016/6-14_cgbifa.jpg"  alt=""  />
    <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349016/8-10_axr2xz.jpg"  alt=""  />
    <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349016/7-10_tvjcns.jpg"  alt=""  />
    <FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349017/4-16_jzamcb.jpg"  alt=""  />
    </div>
</section>

<hr />
<section className={styles.section}>
<h3>1 Year Money-Back Guarantee</h3>
<p>With our 1-year money-back guarantee, you can put all your questions to rest. We know that buying a new home comes with a lot of questions like &ldquo;What&rsquo;s life like here?&rdquo; or &ldquo;Is this the best I can get for my money?&rdquo; At Arc Towers, we encourage you to find out the answers for yourself.</p>
<p>Move in and experience the quality of life you&rsquo;ve always wanted. Should you grow unsatisfied within the first year of your stay for whatever reason, you will get your money back. That is our guarantee &mdash; an exclusive promise that we give at ABC Prime.</p>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738349017/Typical-Flr-Plan-for-Combined-units_nrnuoz.png"  alt=""  className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />
</section>

    </div>
)
}
