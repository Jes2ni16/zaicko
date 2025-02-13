
import { Metadata } from 'next'
import FullImage from '../fullScreenImg';
import styles from '../page.module.css';
import Image from 'next/image';




 
export const generateMetadata = async ({ params }: { params: Promise<{ clientUrl: string }>;}): Promise<Metadata>  => {
 
  const {clientUrl} = await params;

  const client = await fetch(`https://zaiko-server.vercel.app/api/clients/url/${clientUrl}`).then((res) => res.json());



  return {
    title: `Pueblo de Oro | ${client.name} `,
   description: 'Discover the perfect blend of comfort and convenience at Pueblo de Oro Park Place II Subdivision, located near the 3rd bridge in Babag 2, Lapu-lapu City, Cebu.',
     openGraph: {
       title: `Pueblo de Oro | ${client.name}`,
        description: 'Discover the perfect blend of comfort and convenience at Pueblo de Oro Park Place II Subdivision, located near the 3rd bridge in Babag 2, Lapu-lapu City, Cebu.',
      images: ['https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739382072/pueblo-de-oro-06_zb60h6.webp'],
      url:`https://zaiko.website/client/${client.url}/featured/pueblo-de-oro`,
      type:'website'
  },
}
}
 
  
  export default function Clarendon() {
 
    return (
    <div className={styles.body1}>
<Image src='https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739382072/pueblo-de-oro-06_zb60h6.webp' width={500} height={500} className={styles.heroImage} alt='' sizes="(max-width: 1540px) 100vw, 1540px" />

<section className={styles.section}>
<h1>Pueblo de Oro Subdivision for Sale</h1>
<p><strong><em>Pueblo de Oro Subdivision for Sale</em></strong></p>
<p>- Babag 2, Lapu-lapu City, Cebu City</p>
<ul>
<li>PUEBLO DE ORO Single Detached</li>
<li>PUEBLO DE ORO Single Attached</li>
<li>PUEBLO DE ORO Duplex</li>
<li>PUEBLO DE ORO Townhouse</li>
</ul>
<p>Discover the perfect blend of comfort and convenience at Pueblo de Oro Park Place II Subdivision, located near the 3rd bridge in Babag 2, Lapu-lapu City, Cebu. We&apos;re proud to offer Single Attached and Townhouse House and Lot units that cater to your every need. Enjoy living in a community that provides a perfect balance of modern amenities and natural surroundings. Whether you&apos;re looking for a starter home or upgrading to a bigger space, we have something for everyone. Don&apos;t miss this incredible opportunity to invest in a property that guarantees a lifetime of satisfaction and fulfillment. Contact us today to schedule a viewing and experience the Pueblo de Oro lifestyle!</p>
<p>PARK PLACE II<br/>Park Place II takes the great ideas developed in the Park Place Cebu Twin Homes and improves on them even further. The result is a newer project that boasts of ultra-modern design and an unparalleled view of the Mactan channel. Here, you are sure to enjoy the delights of an&nbsp;affordable house for sale in Cebu&nbsp;with additional unparalleled perks.</p>
<p>The community of Park Place II is master-planned with privacy in mind. Hence, only a&nbsp;limited number of homes&nbsp;are in here &mdash; letting residents experience an exclusive lifestyle in Cebu. Here, spacious living effortlessly takes place with floor area from 65 sqm and lot areas from 88 sqm.</p>
<p>Just like the signature Pueblo de Oro approach to homebuilding that anticipates buyer&rsquo;s present and future needs, Park Place II gives residents the flexibility to design the unit interiors according to budget and function.</p>
<p>When it comes to aesthetics, stunning landscapes adorn Park Place II. You get to wake up to the laid-back southern Cebu views while being surrounded by the Camotes, Malapascua, and Mactan islands. To add to that, you can access the full-sized basketball/volleyball court, and children&rsquo;s playground anytime.</p>
<p>You and your family are a few blocks away from lazing around immaculate beaches and colorful reefs. With public markets and premium shopping malls just a few minutes away, everything you need is just a stroll away. Let&rsquo;s not forget that being near Mactan Cebu International Airport means a quick getaway is easy and hassle-free. What more will you look for in an affordable house for sale in Cebu?</p>
<p>Pueblo de Oro Park Place II in 7WCR+VR Lapu-Lapu City, 6015 Cebu, PH<br/>With an unparalleled view of Mactan, this home at Park Place II gives you the freedom to customize your home according to your taste and budget.</p>
</section>
<hr />
<section className={styles.section}>
<p>AMENITIES:</p>
<ul>
<li>Main Entrance Gate (20 meters wide).</li>
<li>Individual Gate for the Residential villages</li>
<li>Perimeter Fence</li>
<li>Guardhouse.</li>
<li>Swimming Pool</li>
<li>Concrete road and alleys</li>
<li>Concrete curbs and gutters</li>
<li>Landscaped parks and playground.</li>
</ul>
<p>Pueblo de Oro invites you to experience luxurious waterfront living in Lapu-Lapu City, Cebu. With convenient access to the 3rd bridge and flexible payment options including spot cash, bank financing, and our in-house financing for those who may not qualify for traditional loans, owning your dream home by the sea is easier than ever. Contact us today to learn more about our exclusive community and find the perfect home for you and your family.</p>
<div className={styles.flexImage}>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739382075/pueblo-de-oro-12_arfj5j.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739382072/pueblo-de-oro-11_ymaaff.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739382072/pueblo-de-oro-10_kvmoiu.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739382071/pueblo-de-oro-08_asoeh0.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739382072/pueblo-de-oro-09_klkbdd.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739382071/pueblo-de-oro-04_hwkcja.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739382071/pueblo-de-oro-01_qykksr.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739382071/pueblo-de-oro-03_cixqpa.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739382070/pueblo-de-oro-19_akg2x5.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739382070/pueblo-de-oro-16_itsnkj.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739382069/pueblo-de-oro-18_ajwpq3.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739382069/pueblo-de-oro-13_bblxqg.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739382069/pueblo-de-oro-15_xs7m8f.webp"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739382069/pueblo-de-oro-17_qlkgk9.webp"/>
</div>

</section>
<hr />
<h2><strong>PUEBLO DE ORO PARKPLACE 2 SITE</strong></h2>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739382072/pueblo-de-oro-07_v7jc0k.webp" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
<hr/>

<section className={styles.section}>
<h3>PUEBLO DE ORO Single Detached</h3>
<p>For Sale: Own a luxurious Tanya Model single-detached home in the prestigious Pueblo de Oro Park Place II, Lapu-Lapu City, Cebu. Experience the epitome of modern living with spacious interiors, top-notch amenities, and a serene environment. Don&apos;t miss this opportunity to elevate your lifestyle. Inquire now!</p>
<ul>
<li>Floor area: 108.50 sqm</li>
<li>Lot area: 176 sqm</li>
<li>3 Bedroom</li>
<li>1 Utility room</li>
<li>2 Toilet and Bath.</li>
<li>Living</li>
<li>Dining.</li>
<li>Kitchen</li>
<li>Service yard.</li>
<li>Lanai</li>
<li>Balcony</li>
<li>1 Carport provision for 2.</li>
</ul>
<hr/>
<ol>
<li>Selling price: PhP 14,415,615</li>
<li>Total contract price: PhP 17,154,581 including VAT and transfer of title charges.</li>
<li>Reservation fee: PhP 80,000.</li>
<li>Equity with 0% interest payable in;<br/>&emsp; ◦ 18 months: PhP 90,858/month.</li>
<li>Balance through spot cash or bank financing: PhP 15,439,123.<br/>ESTIMATED Monthly Amortization, this may slightly vary in actual bank computation:<br/>&emsp; ◦ 5 years: PhP 309,368/month<br/>&emsp; ◦ 10 years: PhP 183,265/month.<br/>&emsp; ◦ 15 years: PhP 143,122/month<br/>&emsp; ◦ 20 years: PhP 124,376/month.</li>
<li>Transfer charges: PhP 1,009,093 already included in the total contract price and was included evenly in the monthly amortization. This is for title processing and registration.</li>
</ol>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739382070/pueblo-de-oro-single-detached_ntgujp.webp" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739382070/pueblo-de-oro-single-detached-2_obpdrw.webp" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>

<hr/>
<h3>PUEBLO DE ORO Single Attached</h3>
<p>For Sale: Own a stylish Hazel model single-attached home in the prestigious Pueblo de Oro Park Place II, Lapu-Lapu City, Cebu. Enjoy modern living spaces, a serene environment, and top-notch amenities. Don&apos;t miss this opportunity to elevate your lifestyle. Inquire now!</p>
<ul>
<li>Floor area: 106.50 sqm</li>
<li>Lot area: 88 sqm</li>
<li>3 Bedroom</li>
<li>1 Utility room.</li>
<li>2 Toilet and Bath.</li>
<li>Living</li>
<li>Dining.</li>
<li>Kitchen</li>
<li>Service area.</li>
<li>Provision for office space</li>
<li>Balcony</li>
<li>1 Carport provision for 2.</li>
</ul>
<ol>
<li>Selling price: PhP 6,906,200</li>
<li>Total contract price: PhP 8,287,440 including VAT and transfer of title charges.</li>
<li>Reservation fee: PhP 40,000.</li>
<li>10% Equity with 0% interest payable in;<br/>&emsp; ◦ 24 months: PhP 50,130/month.</li>
<li>Balance through spot cash or bank financing: PhP 7,044,324.<br/>ESTIMATED Monthly Amortization, this may slightly vary in actual bank computation:<br/>&emsp; ◦ 5 years: PhP 182,724/month<br/>&emsp; ◦ 10 years: PhP 78,206/month.<br/>&emsp; ◦ 15 years: PhP 59,444/month<br/>&emsp; ◦ 20 years: PhP 50,468/month.</li>
<li>Transfer charges: PhP 552,496 already included in the total contract price and was included evenly in the monthly amortization. This is for title processing and registration.</li>
</ol>

<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739382070/pueblo-de-oro-single-attached_jwg42o.webp" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>



<hr/>


<h3>PUEBLO DE ORO Duplex</h3>
<p>SOLD OUT - Pueblo de Oro duplex unit for sale at Babag 2, Lapu-lapu City, Cebu.</p>

<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739382070/pueblo-de-oro-duplex_bhg1dj.webp"  className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>

<hr/>

<h3>PUEBLO DE ORO Townhouse</h3>
<p>SOLD OUT - Towhouse for sale at La Aldea del Mar subdivision Pueblo de Oro in Babag Lapu-lapu City Cebu Philippines..</p>


<p>Invest in a stunning seafront house and lot at Pueblo de Oro. With both ready-to-occupy and almost-ready-to-occupy units available, you can move in sooner than you think. Located at the base of the 3rd bridge, this prime property offers easy access to Cebu City and the upcoming airport skyway. As real estate values continue to rise, now is the perfect time to secure your future. Whether you&apos;re looking for an investment opportunity, a business location, or a beautiful residential home, Pueblo de Oro is the ideal choice. Don&rsquo;t miss out on this incredible opportunity &ndash; reserve your unit today!</p>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739382071/pueblo-de-oro-townhouse_lgyed9.webp" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
</section>
<hr/>
<section className={styles.section}>
<h2>PUEBLO DE ORO SUBDIVISION PRICE LIST</h2>
<FullImage alt='' src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739382069/pueblo-de-oro-price-list_bauyex.webp"/>
</section>

</div>
)
}
