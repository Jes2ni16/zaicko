
import { Metadata } from 'next'
import FullImage from '../fullScreenImg';
import styles from '../page.module.css';
import Image from 'next/image';



export const generateMetadata = async ({ params }: { params: Promise<{ clientUrl: string }>;}): Promise<Metadata>  => {
 
    const {clientUrl} = await params;
  
    const client = await fetch(`https://zaiko-server.vercel.app/api/clients/url/${clientUrl}`).then((res) => res.json());
  
    return {
      title: `TURNBERRY PLACE 2  | ${client.name} `,
     description: 'Turnberry Place 2: pre-selling townhouses in Mactan We have few units left. It&rsquo;s 3 minutes drive to Mactan International Airport.',
       openGraph: {
         title: `TURNBERRY PLACE 2 | ${client.name}`,
          description: 'Turnberry Place 2: pre-selling townhouses in Mactan We have few units left. It&rsquo;s 3 minutes drive to Mactan International Airport.',
        images: ['https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739595118/1_1_wbhet9.webp'],
        url:`https://zaiko.website/client/${client.url}/featured/tierra-alta`,
        type:'website'
    },
  }
  }




export default function TierraAlta() {

    return (
        <div className={styles.body1}>

            <Image src='https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739595118/1_1_wbhet9.webp' width={500} height={500} className={styles.heroImage} alt='' sizes="(max-width: 1540px) 100vw, 1540px" />

            <section className={styles.section}>
<h1>TURNBERRY PLACE 2 IN PUSOK, LAPU-LAPU CITY</h1>
<p><strong>Turnberry Place 2: pre-selling townhouses in Mactan We have few units left. It&rsquo;s 3 minutes drive to Mactan International Airport.</strong></p>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739595118/124583261_720882148783592_6990554049029502711_n-1-300x188_aeg38k.webp" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />
</section>
<hr />
<section className={styles.section}>
<h2>LOCATION ADVANTAGE:</h2>
<ul>
<li><strong>Located in a quite residential area</strong></li>
<li><strong>2- minute drive to 2<sup>nd</sup>&nbsp;Mactan Bridge Marina Mall, Savemore Supermarket, Gaisano Island Mall, Island Central Mall, Mactan Airport.</strong></li>
<li><strong>10 steps to Public transport</strong></li>
<li><strong>Within 1km away from Schools, Churches, Hospitals and more!</strong></li>
</ul>
<p><strong>Site Development Map and Vicinity Map (Click the thumbnail to enlarge)</strong></p>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739595117/FB-AGENT-BROCHURE-REVISED-TP2-1-300x222_izsoc7.webp" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
</section>
<hr />
<section className={styles.section}>
<h3><strong>2 STOREY TOWNHOUSE</strong></h3>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739595118/2-STOREY-TURNBERRY-PLACE-2-BLOCK-A-1-300x137_plkwjy.webp" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
<h2><strong>HOUSE DETAILS:</strong></h2>
<ul>
<li><strong>2- Storey Townhouse</strong></li>
<li><strong>3- Bedrooms</strong></li>
<li><strong>2- Toilet and Bath</strong></li>
<li><strong>1- Powder Room</strong></li>
<li><strong>1- Carpark</strong></li>
<li><strong>Lot Area: 46 sqm</strong></li>
<li><strong>Floor Area: 88 sqm</strong></li>
</ul>
<p><strong>Total Contract Price: 5,125,000</strong></p>
<ul>
<li><strong>20% Down payment: 1,025,000</strong></li>
<li><strong>Reservation Fee: 50,000.00</strong></li>
<li><strong>Net Equity: 975,000</strong></li>
<li><strong>Monthly Equity: 81,250.00 in 12 months</strong></li>
<li><strong>80% Remaining Balance thru Bank Financing</strong></li>
<li><strong>Loanable Amount: 4,100,000</strong></li>
<li><strong>Estimated Monthly Amortization- 30,568 for 20 years</strong></li>
<li><strong>SPOTCASH PAYMENT 5% DISCOUNT</strong></li>
</ul>
<p><strong>ESTIMATED MONTHLY AMORTIZATION FOR BANK FINANCING</strong></p>
<p><strong>5 YEARS 6.88% 58,338.66</strong><br/><strong>10 YEARS 9.50% 29,884.37</strong><br/><strong>15 YEARS 10.50% 20,104.00</strong><br/><strong>20 YEARS 12.00% 15,283.33 </strong></p>
<h3><strong>2 STOREY TOWNHOUSE CORNER UNIT&nbsp;</strong></h3>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739595118/1_1_wbhet9.webp" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
<h3><strong>HOUSE DETAILS: READY FOR OCCUPANCY</strong></h3>
<ul>
<li><strong>2- Storey Townhouse</strong></li>
<li><strong>3- Bedrooms</strong></li>
<li><strong>2- Toilet and Bath</strong></li>
<li><strong>1- Powder Room</strong></li>
<li><strong>1- Carpark</strong></li>
<li><strong>Lot Area: 46 sqm</strong></li>
<li><strong>Floor Area: 88 sqm</strong></li>
</ul>
<p><strong>Total Contract Price: 5,275,000</strong></p>
<ul>
<li><strong>20% Down payment: 1,055,000 SPOTCASH</strong></li>
<li><strong>Reservation Fee: 50,000.00</strong></li>
<li><strong>Less 3% Discount: 31,650</strong></li>
<li><strong>Net Equity: 1,055,000</strong></li>
<li><strong>80% Remaining Balance thru Bank Financing</strong></li>
<li><strong>Loanable Amount: 4,220,000</strong></li>
<li><strong>SPOTCASH PAYMENT 5% DISCOUNT</strong></li>
</ul>
</section>
<hr />
<p><strong>ESTIMATED MONTHLY AMORTIZATION FOR BANK FINANCING</strong></p>
<p><strong>5 YEARS 6.88% 58,338.66</strong><br/><strong>10 YEARS 9.50% 29,884.37</strong><br/><strong>15 YEARS 10.50% 20,104.00</strong><br/><strong>20 YEARS 12.00% 15,283.33 </strong></p>
<h3>Turnberry Place 2 MODEL UNIT</h3>
<div className={styles.flexImage}>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739595118/250072295_585716102581186_9039705550708107786_n-225x300_esk4hv.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739595117/249892895_558243141933605_447405568441081534_n-225x300_neucdc.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739595118/247578514_637236380632602_4554424490798875305_n-225x300_okgla6.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739595117/249466005_683635422599773_756756299667461800_n-223x300_bfhmrv.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739595117/250111738_486982292329524_2065759636748792024_n-223x300_ajrdum.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739595117/249698107_1264861950605312_8586610385709516507_n-223x300_xfourc.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739595117/248823075_398383208573740_2193883874384689627_n-223x300_rw0rzv.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739595117/248226514_596847201439972_4145061067205268635_n-223x300_rzcze0.webp"/>
</div>

    </div >
)
}
