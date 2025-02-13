
import { Metadata } from 'next'
import FullImage from '../fullScreenImg';
import styles from '../page.module.css';
import Image from 'next/image';




 
export const generateMetadata = async ({ params }: { params: Promise<{ clientUrl: string }>;}): Promise<Metadata>  => {
 
  const {clientUrl} = await params;

  const client = await fetch(`https://zaiko-server.vercel.app/api/clients/url/${clientUrl}`).then((res) => res.json());



  return {
    title: `128 Nivel Hills| ${client.name} `,
   description: 'Choose from a selection of spacious and elegantly designed unit types to suit your lifestyle needs, including the cozy Studio Unit, the luxurious 2 Bedroom with Maids Room, the sprawling 3 Bedroom with Maids Room, and the grand 4 Bedroom with Maids Room condo for sale.',
     openGraph: {
       title: `128 Nivel Hills | ${client.name}`,
        description: 'Choose from a selection of spacious and elegantly designed unit types to suit your lifestyle needs, including the cozy Studio Unit, the luxurious 2 Bedroom with Maids Room, the sprawling 3 Bedroom with Maids Room, and the grand 4 Bedroom with Maids Room condo for sale.',
      images: ['https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739210047/128NIVEL-11-05-2019-1-NIGHT-1200x1210-1-942x950_ssuua4.webp'],
      url:`https://zaiko.website/client/${client.url}/featured/128-nivel-hills`,
      type:'website'
  },
}
}
 
  
  export default function Clarendon() {
 
    return (
    <div className={styles.body1}>
<Image src='https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739210047/128NIVEL-11-05-2019-1-NIGHT-1200x1210-1-942x950_ssuua4.webp' width={500} height={500} className={styles.heroImage} alt='' sizes="(max-width: 1540px) 100vw, 1540px"/>


<section className={styles.section}>
<h1>128 Nivel Hills Condominium </h1>
<p>Lahug, Cebu City, Philippines</p>
<p><strong><em>128 condominium for sale in nivel hills</em></strong></p>
<p><mark>Reservation/purchasing of this unit can be done personally in the office OR online! All payments must be directly deposited to the 128 Nivel Hills&rsquo;s bank account.</mark></p>
<p>Tower 1 - Mixed-use tower with 222 condotel units and 346 residential units. Tower 2 - Purely residential tower with 613 units.</p>
<p><strong>128 Nivel Hills Condo Unit Types;</strong></p>
<ul>
<li>128 NIVEL HILLS Studio</li>
<li>128 NIVEL HILLS 2 Bedroom</li>
<li>128 NIVEL HILLS 3 Bedroom</li>
<li>128 NIVEL HILLS 4 Bedroom</li>
</ul>

<iframe title="128 Nivel hills video" src="https://www.youtube.com/embed/xeOoMgBeZRg?feature=oembed"    className={styles.square}  allowFullScreen={true}></iframe>

<p>Discover the epitome of luxury living with 128 Nivel Hills Condominium, now available for sale in the prestigious Lahug area of Cebu City, Philippines. Choose from a selection of spacious and elegantly designed unit types to suit your lifestyle needs, including the cozy Studio Unit, the luxurious 2 Bedroom with Maid&rsquo;s Room, the sprawling 3 Bedroom with Maid&rsquo;s Room, and the grand 4 Bedroom with Maid&rsquo;s Room condo for sale. Don&rsquo;t miss this rare opportunity to own a piece of paradise in one of the most sought-after locations in the Philippines. Contact us now to schedule a viewing and start living the dream at 128 Nivel Hills Condominium in Lahug, Cebu City.</p>
<p>OVERLOOKING METRO CEBU AND MT. BUSAY, SOON TO RISE IS CEBU&rsquo;s LATEST CONDO PROJECT -- 128 NIVEL HILLS!</p>
<p>Nivel Hills sits on a 8,470-square meter (sqm) lot atop the rolling terrain and it is a master-planned property poised to be the most sought-after address in Metro Cebu, sitting on an expensive property along Cebu Veteran&rsquo;s Drive, Nivel Hills, Lahug Cebu City.</p>
<p>128 Nivel Hills is located in 8VVV+9Q6, Nivel Hills, Cebu City, 6000 Cebu, PH. Experience&nbsp;gorgeous living spaces&nbsp;coupled with&nbsp;five-star amenities&nbsp;and modern convenience!</p>
<p>Cebu&rsquo;s only residential condominium development on a hilltop, 128 Nivel Hills Residences offers not just upscale living but also a stunning view of the southern metropolis</p>
<p>It is set to revolutionize cosmopolitan living with its world-class architecture and elegant design. The team behind the project is comprised of both experienced real estate industry members and highly-touted consultants, making this property poised to become the most sought-after address in Metro Cebu.</p>
<p>By combining architecture from the world-renowned Crone Partners of Australia and interior design by the legendary Manny Samson, 128 Nivel Hills seamlessly combines aesthetic beauty and function. Not only does the building have a design never before seen in these parts, the property itself exudes a lifestyle yet to be experienced here in the Philippines. All this comes together to let you experience life at its peak.</p>
<p>The whole Nivel Hills project is composed of two (2) towers and a branded hotel. The first tower is a mix of 210 condotel units and 346 residential units. While the second tower is purely a residential development boasting 613 units.Residents and guests are assured of exceptional living spaces, five-star amenities and modern conveniences.</p>
</section>

<hr />
<section className={styles.section}>
<h2>WHY 128 NIVEL HILLS?</h2>
<ol>
<li>EDUCATION: Get quality education in nearby educational institutions such as University of the Philippines -Cebu (2.5km/ 5mins) and Ceu Pelis Institute (350M/ 1min).</li>
<li>HEALTH CARE: Hospitals such as Chong Hua Hospital (2.6km/ 15mins) and Cebu DOctor&rsquo;s University Hospital (2.8km/ 16mins) are just a few kilometers away.</li>
<li>RECREATIONAL PARKS: Cebu Business Park and Cebu IT Park are just a few minutes away from the property where you can dine, shop, and meet up with friends and family members.</li>
<li>LANDMARKS AND FESTIVALS: Cebu is known to be the Queen City of the South being the center of trade and commerce but it also offers centuries old historical places and festivities such as the famous Sinulog Festival.</li>
<li>PRICE: Available through inquiry. Note that price, terms, discounts, and lot/unit availability are subject to change without prior notice.</li>
<li>Restaurants, car dealerships and other high-end establishments have moved into the area making this place the most vibrant and dynamic section of town.</li>
<li>It&rsquo;s a luxury address that has a panoramic view of the entire Cebu City.</li>
<li>It&rsquo;s neighborhood are landmarks of Cebu City such as the 5-star hotel-Marco Polo Plaza.</li>
<li>Nivel Hills offers an upscale living.</li>
<li>Nivel Hills has the most breath taking view of the mountains of Cebu, and Mactan Channel giving you the most relaxing ambiance.</li>
</ol>
<p>Nearby Establishments:</p>
<ol>
<li>Cebu Pelis Institute, 1 minute away.</li>
<li>University of the Philippines-Cebu, 5 minutes away.</li>
<li>Cebu IT Park, 9 minutes away.</li>
<li>Ayala Malls Center Cebu, 10 minutes away.</li>
<li>Cebu Business Park, 13 minutes away.</li>
<li>Cebu Country Club, 15 minutes away.</li>
</ol>
<p>Features and Amenities:</p>
<ol>
<li>Fitness Gym</li>
<li>Game Room</li>
<li>Spa and Wellness Center.</li>
<li>Pool Complex</li>
<li>Meeting Rooms</li>
<li>Open Lounge.</li>
</ol>
<p>Put your hard-earned money into real estate investments that will increase in value over time regardless of the economic situation.</p>
<p>RESERVATION FEES:</p>
<ul>
<li>Studio &ndash; PhP 25,000.</li>
<li>2 Bedroom &ndash; PhP 50,000.</li>
<li>3 Bedroom &ndash; PhP 100,000.</li>
<li>4 Bedroom &ndash; PhP 100,000.</li>
</ul>
<p>REQUIRED ADD-ONS:</p>
<ul>
<li>Condotel Furnishings (2nd floor to 12 floor): Studio &ndash; PhP 560,000.; 2 Bedroom &ndash; PhP 1,000,000.</li>
<li>Residential Units(14th Floor to 36th floor): Parking for 2 Br, 3Br &amp; 4Br &ndash; PhP 700,000.</li>
</ul>
<p>5.5% MISCELLANEOUS FEES: There shall be a 5.5% Miscellaneous Fee that will be added based on the Total Selling Price (net of Discounts and VAT, whenever applicable). It should be paid during the downpayment without interest. Thus, it should be computed equally on the number of months covering the downpayment. Please not that miscellaneous fees do not yet include the electricity and water meters for the condotel/ condominium unit. The electricity and water meters shall be billed to the buyers separately once unit are ready for turnover.</p>
<p>PAYMENT TERMS: Scheme 1:</p>
<ul>
<li>90% Cash, No reservation with applicable discounts.</li>
<li>15% discount if paid outright.</li>
<li>10% Discount if paid within 1 year on a monthly basis.</li>
<li>10% Balance upon availability/ issuance of CCT.</li>
</ul>
<p>Scheme 2:</p>
<ul>
<li>Reservation Fee &ndash; 51% to 89% Downpayment with applicable discounts.</li>
<li>12% Discount if paid outright or within 7 days from date of reservation.</li>
<li>10% Discount if paid within 30 days from the date of reservation.</li>
<li>7% Discount if paid within 60 days from the date of reservation.</li>
<li>Balance payable monthly in 60 months, no interest or payable in 5 to 10 years through in-house financing at 14% interest per annum or through Bank Financing at prevailing interest rate.</li>
</ul>
<p>Scheme 3:</p>
<ul>
<li>Reservation Fee &ndash; 25% to 50% Downpayment with applicable discounts.</li>
<li>10% Discount if paid outright or within 7 days from date of reservation.</li>
<li>7% Discount if paid within 30 days from the date of reservation.</li>
<li>5% Discount if paid within 60 days from the date of reservation.</li>
<li>Balance payable monthly in 60 months, no interest or payable in 5 to 10 years through in-house financing at 14% interest per annum or through Bank Financing at prevailing interest rate.</li>
</ul>
<p>Scheme 4:</p>
<ul>
<li>Reservation Fee:</li>
<li>25% to 50% Downpayment payable in 60 months, no interest.</li>
<li>Balance payable monthly in 5 to 10 years through in-house financing at 14% interest per annum or through Bank Financing at prevailing interest rate.</li>
</ul>
<p>Thus, LIVING IN NIVEL HILLS IS LUXURIOUS.</p>
</section>

<section className={styles.section}>
<p><strong>128 NIVEL HILLS SITE DEVELOPMENT PLAN:</strong></p>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739210047/128-nivel-hills-site-plan_omtfug.webp" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" alt='' />
</section>
<hr />
<section className={styles.section}>
<h2>SAMPLE COMPUTATION, PRICE RANGE, and MONTHLY AMORTIZATION </h2>
<p> This may vary depending floor location and where it is facing. Prices in CEBU-Real Estate Shop is the same as if you go directly to the sales office.</p>

</section>

<hr />
<section className={styles.section}>
<h3>128 NIVEL HILLS Studio</h3>
<p>For sale: A 28.012 sqm residential studio unit at 128 Nivel Hills Condo in Cebu City. Enjoy a modern lifestyle with stunning city views and excellent amenities. Ideal for first-time buyers or investors!</p>
<p><em>www.cebu-realestateshop.com</em></p>
<ul>
<li>Total selling price: PhP 3,739,108 14th floor unit 6.</li>
<li>Reservation fee: PhP 50,000.</li>
<li>25% Equity with 0% interest payable in; &emsp; ◦ 48 months: PhP 18,433/month.</li>
<li>75% Balance through spot cash or bank financing: PhP 2,804,331. ESTIMATED Monthly Amortization, this may slightly vary in actual bank computation: &emsp; ◦ 5 years: PhP 54,216/month &emsp; ◦ 10 years: PhP 31,134/month. &emsp; ◦ 15 years: PhP 23,665/month &emsp; ◦ 20 years: PhP 20,091/month.</li>
<li>Transfer charges: not included in the given total selling price above and to be paid before on/or upon turnover. This is for title processing and registration.</li>
<li>Other option: If buyers want their unit for business condotel, an additional of PhP 560,000 for furnishings</li>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739210047/128-nivel-hills-studio_xbeuk3.webp" alt="128 nivel hills studio for sale" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />
</ul>

<hr />

<h3>128 NIVEL HILLS 2 Bedroom</h3>
<p>For sale: Spacious 50.895 sqm 2-bedroom condo with a maid&rsquo;s room. Only one unit left at this price&mdash;don&rsquo;t miss this great opportunity!</p>
<ul>
<li>Total selling price: PhP 6,793,477 14th floor unit 14.</li>
<li>Reservation fee: PhP 100,000.</li>
<li>25% Equity with 0% interest payable in; &emsp; ◦ 48 months: PhP 33,299/month.</li>
<li>75% Balance through spot cash or bank financing: PhP 5,095,108. ESTIMATED Monthly Amortization, this may slightly vary in actual bank computation: &emsp; ◦ 5 years: PhP 98,503/month &emsp; ◦ 10 years: PhP 56,566/month. &emsp; ◦ 15 years: PhP 42,995/month &emsp; ◦ 20 years: PhP 36,503/month.</li>
<li>Transfer charges: is not included in the given total sellling price above and to be paid before on/or upon turnover. This is for title processing and registration.</li>
</ul>
<hr />
<p><em>https://www.cebu-realestateshop.com/condo-for-sale/128-nivel-hills</em></p>
<p>2 BEDROOM: 70.987 sqm</p>
<p>For sale: Condo-tel 2-bedroom unit with a maid&rsquo;s room, fully furnished with hotel-style interiors. Perfect for investment or personal use, offering both comfort and convenience!</p>
<ul>
<li>Total selling price: PhP 9,157,439 5th floor unit 1.</li>
<li>Reservation fee: PhP 100,000.</li>
<li>25% Equity with 0% interest payable in; &emsp; ◦ 48 months: PhP 45,612/month.</li>
<li>75% Balance through spot cash or bank financing: PhP 6,868,079. ESTIMATED Monthly Amortization, this may slightly vary in actual bank computation: &emsp; ◦ 5 years: PhP 132,779/month &emsp; ◦ 10 years: PhP 76,250/month. &emsp; ◦ 15 years: PhP 57,957/month &emsp; ◦ 20 years: PhP 49,205/month.</li>
<li>Transfer fee is not included in the given price. This is for title processing and registration.</li>
</ul>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739210048/128-nivel-hills-2-bedroom_qjynea.webp" alt="128 nivel hills 2 bedroom for sale" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />

<hr />


<h3>128 NIVEL HILLS 3 Bedroom</h3>
<p>For sale: Spacious 79.267 sqm 3-bedroom condo with a maid&rsquo;s room at 128 Nivel Hills Condominium, Cebu City. Enjoy modern living in a prime location with scenic views of Nivel Hills!</p>
<hr />
<p><em>https://www.cebu-realestateshop.com</em></p>
<ul>
<li>Total selling price: PhP 11,379,627 32nd floor unit 04.</li>
<li>Reservation fee: PhP 120,000.</li>
<li>25% Equity with 0% interest payable in; &emsp; ◦ 48 months: PhP 56,769/month.</li>
<li>75% Balance through spot cash or bank financing: PhP 8,534,721. ESTIMATED Monthly Amortization, this may slightly vary in actual bank computation: &emsp; ◦ 5 years: PhP 165,000/month &emsp; ◦ 10 years: PhP 94,753/month. &emsp; ◦ 15 years: PhP 72,021/month &emsp; ◦ 20 years: PhP 61,145/month.</li>
<li>Transfer fee is not included in the given price and to be paid on or before turnover. This is for title processing and registration.</li>
</ul>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739210048/128-nivel-hills-3-bedroom_hjlkof.webp" alt="128 nivel hills 3 bedroom for sale" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />


<hr />


<h5>128 NIVEL HILLS 4 Bedroom</h5>
<p>For sale: A 114.515 sqm 4-bedroom condo with a maid&rsquo;s room at 128 Nivel Hills Condominium, Cebu City, Philippines. Offering spacious living in a prime location with stunning views of Nivel Hills!</p>
<hr />
<p><em>https://www.cebu-realestateshop.com/</em></p>
<ul>
<li>Total selling price: PhP 16,696,316 36th floor unit 04.</li>
<li>Reservation fee: PhP 150,000.</li>
<li>25% Equity with 0% interest payable in; &emsp; ◦ 48 months: PhP 83,835/month.</li>
<li>75% Balance through spot cash or bank financing: PhP 12,522,237. ESTIMATED Monthly Amortization, this may slightly vary in actual bank computation: &emsp; ◦ 5 years: PhP 242,090/month &emsp; ◦ 10 years: PhP 139,023/month. &emsp; ◦ 15 years: PhP 105,670/month &emsp; ◦ 20 years: PhP 89,713/month.</li>
<li>Transfer fee: Not included in the given selling price and to be paid on or before turnover. This is for title processing and registration.</li>
</ul>
<hr /> 
<p>Invest in the future with a unit at 128 Nivel Hills. Real estate values are rising, making now the ideal time to secure your property. Whether youre seeking a profitable investment, a convenient Airbnb or Condotel, or a comfortable residential space, 128 Nivel Hills offers it all. Enjoy stunning views and a prime location. Reserve your unit today before prices increase!</p>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739210048/128-nivel-hills-4-bedroom_p9jbuj.webp" alt="128 nivel hills 4 bedroom for sale" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />
</section>



<hr />

<h2>128 NIVEL HILLS PRICE LIST</h2>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739210047/128-nivel-hills-price-list_oo117e.webp" alt="128 nivel hills price list" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739210047/128-nivel-hills-price-list-02_hkox1r.webp" alt="128 nivel hills price list - 02" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739210047/128-nivel-hills-price-list-03_t1if8v.webp" alt="128 nivel hills price list - 03" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />
<FullImage src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739210047/128-nivel-hills-price-list-04_vkc0u3.webp" alt="128 nivel hills price list - 04"  className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px"/>
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739210048/128-nivel-hills-price-list-05_tnfsg5.webp" alt="128 nivel hills price list - 05" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739210048/128-nivel-hills-price-list-06_q6vfhx.webp" alt="128 nivel hills price list - 06" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />
<FullImage  src="https://res.cloudinary.com/dnh0z6fm7/image/upload/v1739210048/128-nivel-hills-price-list-07_rjrkt9.webp" alt="128 nivel hills price list - 07" className={styles.fullImage} sizes="(max-width: 1540px) 100vw, 1540px" />


</div>
)
}
