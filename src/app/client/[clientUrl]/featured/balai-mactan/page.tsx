
import { Metadata } from 'next'
import FullImage from '../fullScreenImg';
import styles from '../page.module.css';
import Image from 'next/image';





  export const generateMetadata = async ({ params }: { params: Promise<{ clientUrl: string }>;}): Promise<Metadata>  => {
 
    const {clientUrl} = await params;
  
    const client = await fetch(`https://zaiko-server.vercel.app/api/clients/url/${clientUrl}`).then((res) => res.json());
  
  
  
    return {
      title: `BALAI in Mactan | ${client.name} `,
     description: 'Balai by Be Residences in Punta Engano offers a luxurious seaside living experience for all. This 19-story residential resort is strategically located amidst the prestigious resorts in Punta Engano, Mactan, providing residents with stunning views and unparalleled access to the best of coastal living.',
       openGraph: {
         title: `BALAI in Mactan | ${client.name}`,
          description: 'Balai by Be Residences in Punta Engano offers a luxurious seaside living experience for all. This 19-story residential resort is strategically located amidst the prestigious resorts in Punta Engano, Mactan, providing residents with stunning views and unparalleled access to the best of coastal living.',
        images: ['https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088653/15_olozq8.webp'],
        url:`https://zaiko.website/client/${client.url}/featured/balai-mactan`,
        type:'website'
    },
  }
  }
   
  
  export default function BalaiMactan() {
    return (
    <div className={styles.body1}>

<Image src='https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088653/15_olozq8.webp' width={500} height={500} className={styles.heroImage} alt=''sizes="(max-width: 1540px) 100vw, 1540px" />

<section className={styles.section}>
<h1>BALAI BY BE RESIDENCES IN PUNTA ENGANO MACTAN</h1>
<p>Balai by Be Residences is catering to the basic need of the Filipino to own a home. &ldquo;Aduna koy Akoa&hellip; Aduna tay Atoa&hellip; Sa lugar sa adunahan&hellip; Aduna koy&hellip; Balai</p>
<p>It&nbsp;is our first residential condo offering in this segment, located a few meters away from BE Resort Mactan.</p>
<p>Balai by Be Residences in Punta Engano is a Seaside Living for Everyone. It is a 19-storey residential resort situated along the high-end resorts in Punta Engano, Mactan. It is a space designed like baskets carefully woven in time. Each unit crafted to your needs &amp; mine.</p>
<p>&ldquo;Come Home to Fresh Air and your own view of the sea, every single day.&rdquo;</p>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088653/15_olozq8.webp"  alt=""  className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />
</section>

<hr />
<section className={styles.section}>
<h2>ACCESSIBILITY &amp; LOCATION</h2>
<ul>
<li>196m &ndash; Movenpick Mactan</li>
<li>345 m &ndash; Be Resort Mactan</li>
<li>651 m &ndash; Shangrila Mactan</li>
<li>1 km &ndash; Emerald Bay Resort &amp; Casino</li>
<li>1.6 km &ndash; Sheraton Mactan</li>
<li>1.8 km &ndash; Rockwell Mactan</li>
<li>2.7 km &ndash; Amisa</li>
</ul>
<h3>SITE/LOCATION DETAILS:</h3>
<ul>
<li>55 m &ndash; Main Road</li>
<li>47.5 m &ndash; Lot Frontage</li>
<li>41.2 M &ndash; Lot Depth</li>
<li>North East Facing Front</li>
<li>So West &ndash; Sea Grove</li>
<li>North View &ndash; Left Coast</li>
<li>East View &ndash; West Coast</li>
<li>West View &ndash; Mactan Shrine</li>
<li>South View &ndash; Movenpick</li>
</ul>
<h3>LOCATION ADVANTAGE:</h3>
<ul>
<li>High Average Rental Rate at 1,200.00/sq.m.</li>
<li>High Property Market Value</li>
<li>High Capital Appreciation at 10% p.a.</li>
<li>Low Neighborhood Vacancy Rate</li>
<li>Close to High-End Resorts, commercial establishments, Mactan Cebu International Airport, Tourist Destinations for Island Hopping Adventure.</li>
</ul>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088653/MAP_pwlr71.webp"  alt="" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088653/5-8_dpzfpp.webp"  alt="" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />
</section>

<hr />
<section className={styles.section}>
<h2>FEATURES AND AMENITIES:</h2>
<ul>
<li>Dayon means Welcome<br />&ndash; Kiddie Pool<br />&ndash; Lap Pool<br />&ndash; Sunken Lounge<br />&ndash; Wet Deck<br />&ndash; Indoor &amp; Outdoor shower rooms</li>
<li>Duwa means Play<br />&ndash; Semi-covered Playground<br />&ndash; Creative Nooks<br />&ndash; Multi-function Halls<br />&ndash; Activity Area for events &amp; Outdoor Exercise</li>
<li>Obra means Work<br />&ndash; Work Spaces<br />&ndash; Semi-covered community space and a non-active multipurpose area for home work and outdoor study</li>
<li>Tapok means Gather<br />&ndash; Performance Stage<br />&ndash; Lounge Area<br />&ndash; Semi-covered community space, and a non-active multipurpose ideal as a meet-up space or small events</li>
</ul>
<h4><strong>BE SAFE and SECURE</strong></h4>
<ul>
<li>Residential Lobby with 24/7 security</li>
<li>2 High-Speed Elevators</li>
<li>WIFI in lobby and &lsquo;Obra&rsquo;</li>
<li>Tiered open space locations</li>
<li>Standby generator and sprinkler system</li>
<li>Fire detection and alarm system</li>
<li>CCTV in public areas</li>
<li>Materials recovery facility</li>
</ul>
<h3>BE UNIQUE</h3>
<p>Leasable self-storage spaces. Basket weave like facade as tribute to Cebuano craftsmanship</p>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088653/balai_leasable-storage_hq3olt.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088653/dayon_as4pmg.webp" alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088652/tapok_1_wnydkk.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088653/duwa_af00la.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088652/obra_kzsnrv.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088652/tapok_ewwirw.webp"  alt=""  />
</div>
</section>

<hr />
<section className={styles.section}>
<h2>UNIT SPECIFICATIONS:</h2>
<p><strong>WALLS</strong></p>
<ul>
<li>Exterior &amp; Interior Painted Finished</li>
</ul>
<p><strong>FLOOR</strong></p>
<ul>
<li>Common Area / Bedroom : Vinyl Wood Planks</li>
<li>Toilet &amp; Bath: Ceramic Tiles</li>
</ul>
<p><strong>CEILING</strong></p>
<ul>
<li>Common Area: Painted Slab Soffit</li>
<li>Toilet &amp; Bath: Painted</li>
</ul>
<p><strong>WINDOW</strong></p>
<ul>
<li>Common Area &amp; Bedroom: Awning Window</li>
</ul>
<p><strong>DOOR</strong></p>
<ul>
<li>Main &amp; Bedroom: Solid Panel Door</li>
<li>Toilet &amp; Bath: PVC door with Louvers</li>
</ul>
<p><strong>DOOR LOCKSETS</strong></p>
<ul>
<li>Main, Bedroom, and Toilet: Tubular Door Knob</li>
</ul>
<p><strong>KITCHEN</strong></p>
<ul>
<li>Counter: Laminate</li>
<li>Base Cabinet: Modular Type</li>
<li>Sink: Single Tub Stainless Steel Sink</li>
</ul>
<p><strong>TOILET &amp; BATH</strong></p>
<ul>
<li>Wall: Ceramic Tiles</li>
<li>Floor: Ceramic Tiles</li>
<li>Shower Set: Single Faucet and shower</li>
<li>Water Closet: Water Closet</li>
<li>Lavatory: Wall-hung type</li>
</ul>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088653/1-bedroom_qmqnw7.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088653/2-bedrooms-1_tq79ep.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088652/studio-deluxe-1_nt5yns.webp"  alt="" />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088652/STUDIO-DELUXE_sy6m4x.webp"  alt="" />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088652/studio-2_evjinj.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088651/studio1-2_kucmzv.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088653/yarden-bedroom_mfl3c8.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088653/yarden-garden-area_apedwt.webp"  alt="" />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088653/yarden-home-office_nqqyn5.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088670/yarden-kitchen_vewmcn.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088671/yarden-living-dining_frsp5l.webp"  alt="" />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088709/yarden_1_xu4ocv.webp"  alt="" />
</div>
</section>

<hr />
<section className={styles.section}>
<h2>UNIT DETAILS AND COMPUTATION:</h2>
<h4>STUDIO UNIT</h4>
<ul>
<li>3X7m Gen. Room Dimension</li>
<li>3.24 sq.m. Toilet Clear Dimension</li>
<li>Living/Bedroom Area</li>
<li>Dining Area</li>
<li>Toilet &amp; Bath</li>
</ul>
<h4>SAMPLE COMPUTATION:</h4>
<p>Floor Area:&nbsp;<strong>21 sq.m.</strong></p>
<p><strong>TOTAL CONTACT PRICE (TCP): Php 3,371,000.00</strong></p>
<p>RESERVATION FEE: Php 20,000.00</p>
<p>&spades; 15% Downpayment payable in&nbsp;<strong>33</strong>&nbsp;months:</p>
<ul>
<li><strong>Php 14,717.00/month</strong></li>
</ul>
<p>&spades; 85% Balance Through Bank Financing:<strong>&nbsp;Php 2,865,350.00</strong></p>
<ul>
<li><strong>Php 30,791/month</strong>&nbsp;<em>(est. for 15 years)</em></li>
</ul>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088652/studio-2_evjinj.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088713/Studio-BLA_bpatom.webp"  alt=""  />
</div>

</section>

<hr />
<section className={styles.section}>
<h2>STUDIO DELUXE UNIT</h2>
<ul>
<li>3.8X7m Gen. Room Dimension</li>
<li>3.24 sq.m. Toilet Clear Dimension</li>
<li>Plank Type Vinyl Floor</li>
<li>Ceramic Toilet Floor</li>
<li>Modular Kit Cab</li>
<li>Bachelor &amp; Bachelorette</li>
<li>Start-up Family</li>
<li>Shared Space</li>
<li>Transient</li>
</ul>
<h3><strong>Unit Details:</strong></h3>
<ul>
<li>Living Area</li>
<li>Bedroom Area</li>
<li>Dining Area</li>
<li>Kitchen Area</li>
<li>Toilet &amp; Bath</li>
</ul>
<h3>SAMPLE COMPUTATION:</h3>
<p>Floor Area:<strong>&nbsp;28.02&nbsp;sq.m.</strong></p>
<p><strong>TOTAL CONTACT PRICE (TCP): Php 4,945,000.00</strong></p>
<p><strong>RESERVATION FEE: Php 20,000.00</strong></p>
<p>&spades;<strong>&nbsp;15%</strong>&nbsp;Downpayment payable in&nbsp;<strong>33</strong>&nbsp;months:</p>
<ul>
<li><strong>Php 21,871.00/month</strong></li>
</ul>
<p>&spades;<strong>&nbsp;85%</strong>&nbsp;Balance Through Bank Financing:&nbsp;<strong>Php 4,203,250.00</strong></p>
<ul>
<li><strong>Php 45,168.00/month</strong>&nbsp;<em>(est. for 15 years)</em></li>
</ul>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088673/studio-deluxe-2_ngewbb.webp"   alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088673/STUDIO-DELUXEFP_n4fgl6.webp"  alt="" />
</div>
</section>

<hr />
<section className={styles.section}>
<h3>1-BEDROOM UNIT</h3>
<ul>
<li>Living Area</li>
<li>Dining Area</li>
<li>Kitchen Area</li>
<li>Toilet &amp; Bath</li>
<li>Bedroom</li>
</ul>
<h3>SAMPLE COMPUTATION:</h3>
<p>Floor Area:<strong>&nbsp;38.52 sq.m.</strong></p>
<p><strong>TOTAL CONTACT PRICE (TCP): Php 6,891,000.00</strong></p>
<p><strong>RESERVATION FEE: Php 30,000.00</strong></p>
<p>&spades;<strong>&nbsp;15%</strong>&nbsp;Downpayment payable in&nbsp;<strong>33</strong>&nbsp;months:</p>
<ul>
<li><strong>Php 30,414.00/month</strong></li>
</ul>
<p>&spades;<strong>&nbsp;85%</strong>&nbsp;Balance Through Bank Financing:&nbsp;<strong>Php 5,857,350.00</strong></p>
<ul>
<li><strong>Php 62,943/month</strong>&nbsp;<em>(est. for 15 years)</em></li>
</ul>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088671/1-bedroom-1_bqxaal.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088672/1BR-BLA_pxrlvk.webp"  alt="" />
</div>
</section>

<hr />
<section className={styles.section}>
<h3>2-BEDROOM UNIT &ndash; SOLD OUT</h3>
<ul>
<li>Living Area</li>
<li>Dining Area</li>
<li>Kitchen Area</li>
<li>Bedroom 1</li>
<li>Bedroom 2</li>
</ul>
<h4>SAMPLE PRICE COMPUTATION:</h4>
<p>Floor Area: 56.70 sq.m.</p>
<p>TOTAL CONTACT PRICE (TCP): Php</p>
<p><em>Reservation Fee: Php&nbsp;</em></p>
<p>&spades; 15% Downpayment payable in&nbsp;<strong>33</strong>&nbsp;months:</p>
<ul>
<li><strong>Php&nbsp;</strong></li>
</ul>
<p>&spades; 85% Balance Through Bank Financing: Php</p>
<ul>
<li>Php /month&nbsp;<em>(est. for 15 years)</em></li>
</ul>
<div>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088653/2-bedrooms-1_tq79ep.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088672/2BR-BLA_srohxa.webp"  alt="" />
</div>
</section>
<hr />
<section className={styles.section}>
<h2>YARDEN UNIT</h2>
<p><strong>Ground Floor:</strong></p>
<ul>
<li>Living Area: 14 sq.m.</li>
<li>Dining Area</li>
<li>Kitchen Area: 1.20 sq.m.</li>
<li>Toilet &amp; Bath: 3.91 sq.m.</li>
<li>YARDEN: 9 sq.m.</li>
</ul>
<p><strong>Second Floor:</strong></p>
<ul>
<li>Sleeping Area: 18.20 sq.m.</li>
<li>Bedroom</li>
<li>Home-Office</li>
</ul>
<h3>SAMPLE PRICE COMPUTATION:</h3>
<p>Floor Area: 51 sq.m.</p>
<p>TOTAL CONTACT PRICE (TCP): Php 8,831,000.00</p>
<p>RESERVATION FEE: Php 50,000.00</p>
<p>&spades; 15% Downpayment payable in&nbsp;<strong>33</strong>&nbsp;months:</p>
<ul>
<li><strong>Php 38,626.00/month</strong></li>
</ul>
<p>&spades; 85% Balance Through Bank Financing:&nbsp;<strong>Php 7,506,350.00</strong></p>
<ul>
<li><strong>Php 80,664.00/month&nbsp;<em>(est. for 15 years)</em></strong></li>
</ul>
<div className={styles.flexImage}
>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088709/Yarden-BLA_hxmjvk.webp"  alt="" />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088709/yarden_1_xu4ocv.webp" alt="" />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088710/yarden-garden-area_1_qwvd4g.webp" alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088671/yarden-living-dining_frsp5l.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088653/yarden-home-office_nqqyn5.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088670/yarden-kitchen_vewmcn.webp" alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088668/yarden-bedroom_1_u244hs.webp" alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088666/Studio-TB_anxlyk.webp"  alt=""  />
</div>
<h3>SAMPLE PARKING COMPUTATION:</h3>
<p>Floor Area: 12.5 sq.m. &ndash; Lower Ground</p>
<p><strong>TOTAL CONTACT PRICE (TCP): Php 1,213,000.00</strong></p>
<p>RESERVATION FEE: Php 10,000.00</p>
<p>&spades; 15% Downpayment payable in&nbsp;<strong>33</strong>&nbsp;months:</p>
<ul>
<li><strong>Php 5,211.00/month</strong></li>
</ul>
<p>&spades; 85% Balance Through Bank Financing:&nbsp;<strong>Php 1,031,050.00</strong></p>
<ul>
<li><strong>Php 11,080.00/month&nbsp;<em>(est. for 15 years)</em></strong></li>
</ul>
<p><strong>Note:</strong></p>
<ol>
<li>All prices, terms and details contained herein are subject to change without prior notice. All reservations must be accompanied by a Buyer&rsquo;s Information Sheet, Reservation Agreement and Payment Schedule.</li>
<li>All scheduled payments shall be covered by POSTDATED CHECKS payable to BE RESIDENCES. All areas are approximate (+/-). Total Contract Price is inclusive of MCC &amp; VAT.</li>
<li>The Developer reserves the right to make corrections of errors that may be contained herein. Prices, terms and details are subject to verification by Benedict Ventures Inc.</li>
</ol>
</section>

<hr />
<section className={styles.section}>
<h2>VIEW AND ORIENTATION:</h2>
<div className={styles.flexImage}>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088667/View-SW_vuyheq.webp" alt="" />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088667/View-SE_jai0rc.webp" alt="" />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088666/View-NE_ezbvge.webp"  alt="" />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088667/View-NW_gqfvnx.webp" alt="" />

<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088712/map1_yglwt3.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088712/map2_ffib3t.webp"  alt=""  />
</div>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739088712/stacking-diagram_piwlsm.webp"  alt="" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />
</section>


    </div>
)
}
