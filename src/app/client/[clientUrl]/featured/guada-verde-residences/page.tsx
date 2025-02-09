
import { Metadata } from 'next'
import FullImage from '../fullScreenImg';
import styles from '../page.module.css';
import Image from 'next/image';




  export const generateMetadata = async ({ params }: { params: Promise<{ clientUrl: string }>;}): Promise<Metadata>  => {
 
    const {clientUrl} = await params;
  
    const client = await fetch(`https://zaiko-server.vercel.app/api/clients/url/${clientUrl}`).then((res) => res.json());
  
    return {
      title: `GUADA VERDE RESIDENCES in GUADALUPE | ${client.name} `,
     description: 'Guada Verde Residences offers a vibrant suburban lifestyle in the heart of the city, providing the perfect home for a refreshed living experience at Sterling Land.',
       openGraph: {
         title: `GUADA VERDE RESIDENCES in GUADALUPE | ${client.name}`,
          description: 'Guada Verde Residences offers a vibrant suburban lifestyle in the heart of the city, providing the perfect home for a refreshed living experience at Sterling Land.',
        images: ['https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807600/306534238_3215994575285619_7109149711564738505_n-e1692175229196_rkwvae.webp'],
        url:`https://zaiko.website/client/${client.url}/featured/guada-verde-residences`,
        type:'website'
    },
  }
  }


export default function GuadaVerde(){

return(
    <div className={styles.body1}>

<Image src='https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807600/306534238_3215994575285619_7109149711564738505_n-e1692175229196_rkwvae.webp' width={500} height={500} className={styles.heroImage} alt=''/>
<section className={styles.section}>
<h1>GUADA VERDE RESIDENCES in GUADALUPE, CEBU CITY</h1> 
<p>Guada Verde Residences is a place you can come home to and experience good life at Sterling land. Experience  verdant suburban lifestyle in the heart of the inner city, GET YOUR  VERDANT SUBURBAN LIFESTYLE HOME.</p>
<p>&nbsp;</p>
<p>Following the resounding success of our flagship project, Minglanilla Highlands, the Santa Monica Estate Brand and the 25-storey Condominium skyline, Sterling Land Residences and Development inc, is committed to continuing its mission of elevating the Cebuano standard of living by creating God-loving, Neighbor-caring, and Nature-embracing community. With this in mind, Sterling Land is proud to present its latest project, Guada Verde Residences, featuring our latest lifestyle concept, the  Verdant Suburban Lifestyle&rdquo;. The essence of our latest lifestyle concept lies in its two elements,  Verdant&rdquo; and  Suburban.&rdquo; A key aspect of Guada Verde Residences will be the extensive presence of greenery all across the development, creating the calming ambiance reminiscent of the lush forests found in the countryside. Another element of Guada Verde Residences is the suburban atmosphere of the development.</p>
<FullImage   src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807600/306534238_3215994575285619_7109149711564738505_n-e1692175229196_rkwvae.webp"  alt=""  className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />
</section>
<hr />
<section className={styles.section}>
<h2>LOCATION AND ACCESSIBILITY:</h2>
<ul>
<li>6 minutes to Our Lady of Guadalupe Parish Church</li>
<li>3 minutes to CNT Lechon Guadalupe</li>
<li>3 minutes to Pharmacy</li>
<li>4 minutes to Puregold Guadalupe</li>
<li>4 minutes to Guadalupe Brgy.Hall</li>
<li>4 minutes to Guadalupe Elementary School</li>
<li>6 minutes to BANKS</li>
<li>6 minutes to Market Place</li>
<li>7 minutes to fast-food chains</li>
<li>10-12 minutes to nearest Hospitals (V.Sotto, Cebu Doc, CHH)</li>
<li>26 minutes to Pier 1</li>
<li>50 minutes to Mactan International Airport</li>
</ul>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807575/308474671_797217901589714_6053220932579264123_n-1_xdmxw6.webp"  alt=""  className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />
</section>

<hr />
<section className={styles.section}>
<h2>AMENITIES AND FACILITIES:</h2>
<ul>
<li>Entrance with Guardhouse</li>
<li>Perimeter Fence</li>
<li>Cemented Curbs &amp; Gutters</li>
<li>Linear Park and Garden</li>
<li>Drainage System</li>
<li>Water Treatment Facility</li>
<li>Overhead Water Tank</li>
</ul>
<div className={styles.flexImage}>

<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807583/337106315_1006458160598235_2929765103060094823_n-scaled_vjq8w5.webp" alt=""   />

<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807587/337281023_568247892067310_2350749062905703732_n-scaled_sv8bz1.webp"  alt=""   />
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807587/348368997_578719470979455_8312958974738732506_n-1-scaled_mzrlux.webp"   alt=""   />
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807588/337430666_940261223787959_2185249616236721767_n-scaled_mi61fy.webp"  alt=""   />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807591/349342491_143524662067005_6197515975993771713_n-scaled_bth0mp.webp"  alt=""   />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807585/337873263_524575249751462_8152199498268666455_n-scaled_i4adqx.webp"  alt=""   />
</div>
</section>
<hr />
<section className={styles.section}>
<h3>UNIT CLASSIFICATION:</h3>
<p>TOTAL NUMBER OF UNITS: 78 House and Lot</p>
<ol>
<li>MARIGOLD &ndash; Regular Unit (52 units)</li>
<li>JASMINE &ndash; Corner Unit (13 units)</li>
<li>PRIMROSE &ndash; End Unit (13 units)</li>
</ol>
<div className={styles.flexImage}>
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807581/1-2-scaled_q5gtba.webp"   alt=""   />

<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807584/4-2-scaled_u5jigy.webp"   alt=""   />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807580/306867130_509960394305385_739965525020727934_n-scaled_i0mnci.webp"   alt=""   />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807581/3-2-scaled_g7xgps.webp"  alt=""   />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807576/2-2-scaled_vgydux.webp"  alt=""   />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807587/348368997_578719470979455_8312958974738732506_n-1-scaled_mzrlux.webp"  alt=""   />

</div>
</section>
<hr />
<section className={styles.section}>
<h2>UNIT DETAILS &amp; COMPUTATION:</h2>
<p>&nbsp;</p>
<h4>MARIGOLD UNIT</h4>
<p>2-STOREY TOWNHOUSE</p>
<p>&nbsp;</p>
<ul>
<li>LOT AREA:&nbsp;<strong>60 sq.m.</strong></li>
<li>FLOOR AREA:&nbsp;<strong>99.43 sq.m.</strong></li>
<li>3 Bedrooms</li>
<li>2 Toilet &amp; Bath</li>
<li>1 Carport</li>
</ul>
<p>&nbsp;</p>
<p><strong>Ground Floor:</strong></p>
<ul>
<li>Single Carport</li>
<li>Entrance Porch</li>
<li>Living Area</li>
<li>Mini Home Office</li>
<li>Dining Area</li>
<li>Kitchen</li>
<li>Common Toilet &amp; Bath</li>
<li>Service Area</li>
</ul>
<p>&nbsp;</p>
<p><strong>Second Floor:</strong></p>
<ul>
<li>Hallway</li>
<li>Common Toilet &amp; Bath</li>
<li>Bedroom 2</li>
<li>Bedroom 3</li>
<li>Master&rsquo;s Bedroom</li>
<li>Master&rsquo;s Toilet &amp; Bath</li>
<li>Master&rsquo;s Balcony</li>
<li>Terrace</li>
</ul>
<p>&nbsp;</p>
<h4>SAMPLE COMPUTATION through BANK FINANCING:</h4>
<p><em>Note: Price change without further notice. My update is as of July 29, 2024</em></p>
<p>TOTAL CONTRACT PRICE:&nbsp;<strong>Php 8,990,900.00</strong></p>
<p>RESERVATION FEE:&nbsp;<em>Php 30,000.00</em></p>
<p>&nbsp;</p>
<p>&spades; 15% EQUITY&nbsp;net of Reservation Fee PAYABLE IN&nbsp;<strong>42</strong>&nbsp;MONTHS:&nbsp;<strong>Php 1,348,635.00</strong></p>
<ul>
<li><strong>Php 31,396.07/month</strong></li>
</ul>
<p>&nbsp;</p>
<p>&spades; 85% BALANCE&nbsp;THROUGH BANK FINANCING:</p>
<ul>
<li><strong>Php 7,642,265.00</strong></li>
</ul>
<div className={styles.flexImage} >

<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807592/ground-floorplan_tg23ca.webp" alt=""   />
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807599/second-floorplan_hakfx5.webp"  alt=""   />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807580/306867130_509960394305385_739965525020727934_n-scaled_1_meoseb.webp" alt=""/>

<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807584/4-2-scaled_u5jigy.webp"  alt="" />
</div>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807602/338712791_1163854135015843_6026060891568746940_n_pd22rj.webp" alt=""  className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>

</section>

<hr />
<section className={styles.section}>
<h2>HOUSE RENDERING</h2>
<p><strong>GROUND FLOOR:</strong></p>
<div className={styles.flexImage}  >

<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807593/ID_1-scaled_d8bwcd.webp"   alt="" />

<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807595/ID_2-scaled_i4r4jq.webp"  alt=""  />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807596/ID_3-scaled_fylw9d.webp"  alt="" />

<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807596/ID_4-scaled_snvcjq.webp"   alt=""   />


<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807598/ID_5-scaled_twitl0.webp"   alt=""   />


<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807599/ID_6-scaled_hvb28x.webp"   alt=""   />


<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807575/ID_7-scaled_ortdby.webp"   alt=""   />


</div>
<p><strong>MASTER&rsquo;S BEDROOM IDEAS:</strong></p>
<div className={styles.flexImage} >

<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807574/FSFS-1_kkckus.webp" alt=""  />

<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807579/MB_V3-scaled_qrzloj.webp"   alt=""   />

<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807584/MB_V8-scaled_vqkh26.webp"  alt=""   />

<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807576/MB_V7-scaled_jxdulr.webp"   alt=""   />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807578/MB_V5-scaled_uxrrlf.webp"   alt=""   />

<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807577/MB_V4-scaled_qjrum8.webp"  alt=""   />

<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807583/MB_V9-scaled_qn0efj.webp"   alt=""   />


<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807577/MB_V2-scaled_tevpbn.webp" alt=""   />


<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807576/MB_V1-scaled_ybxne5.webp"  alt=""   />


<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807576/MB_V6-scaled_nl6rtq.webp"   alt=""   />

</div>
<h3><strong>BEDROOM IDEAS:</strong></h3>
<div className={styles.flexImage} >

<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807575/BR3-scaled_lvmxw4.webp"   alt=""   />

<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807576/BR4-scaled_mufkzc.webp"  alt=""   />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807583/MB_V9-scaled_qn0efj.webp"   alt=""   />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807603/BR1.1-scaled_he7ldv.webp"  alt=""   />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807604/BR1-scaled_mqjknt.webp"   alt=""   />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807574/FSFS-1_kkckus.webp"  alt=""   />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807580/306867130_509960394305385_739965525020727934_n-scaled_i0mnci.webp"  alt=""   />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807596/ID_3-scaled_fylw9d.webp"   alt=""   />

</div>
</section>

<hr />
<section className={styles.section}>
<h3>ACTUAL SITE:</h3>
<div className={styles.flexImage}>

<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807603/345318044_255298560295549_1391085450596819621_n_afa2ju.webp"  alt=""  />


<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807585/345895763_621791836475597_2008805907068362700_n_egd0s0.webp"  alt=""  />

</div>
</section>

<hr />
<section className={styles.section}>
<h3>SUBDIVISION MASTER PLAN:</h3>
<FullImage   src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1738807592/364676449_274695571925902_8693657417294383989_n_o1qcqz.webp" alt=""  className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />
<hr />
</section>


    </div>
)
}
