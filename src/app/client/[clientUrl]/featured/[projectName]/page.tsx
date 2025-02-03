// import { ImageGallery } from './ImageGallery';
// import { getClientByUrl, getProjectByName } from './api'
import React from 'react';
// import styles from './page.module.css';
// import Link from 'next/link';
// import FacebookIcon from '@mui/icons-material/Facebook'; // Add this import at the top with other imports

export const dynamicParams = true;

export async function generateStaticParams() {
  return [{projectUrl:'arc-tower-cebu'}]
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{projectUrl: string}>;
}) {
  const {projectUrl} = await params;
  
    return (
//         <div className={styles.container}>

//           {/* Hero Section */}
//           <div className={styles.heroSection} >
//           {project.projectImg && (
//           <ImageGallery 
//             src={project.projectImg}
//             alt={project.title || 'Project Image'}
//             width={1200}
//             height={600}
//             className={styles.heroImage}
//             priority
//           />
//         )}
//             <h1 className={styles.title}>{project.title}</h1>
//             <p className={styles.description}>{project.description}</p>
//             <p className={styles.location}>Project Location: {project.projectLocation}</p>
//           </div>
    
// <hr className={styles.hr} />

//           {/* Location Section */}
//           <section className={styles.section}>
//             <h2 className={styles.sectionTitle}>Location</h2>
//             <div className={styles.locationGrid}>
//               <div className={styles.locationDetails}>
//                 {project.location.descriptions.map((desc,index) => (
//                   <div key={index} className={styles.locationBlock}>
//                     {desc.title && <h3 className={styles.locationTitle}>{desc.title}</h3>}
//                     <ul className={styles.locationList}>
//                       {desc.ul.map((item, i) => (
//                         <li key={i}>{item}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//               <div className={styles.locationMap}>
//               {project.location?.img && (
//     <ImageGallery 
//       src={project.location.img}
//       alt="Location Map"
//       width={600}
//       height={400}
//       className={styles.mapImage}
//     />
//   )}
//               </div>
//             </div>
//           </section>
//           <hr className={styles.hr} />
//           {/* Amenities Section */}
//           <section className={styles.section}>
//             <h2 className={styles.sectionTitle}>Amenities & Facilities</h2>
//             <p className={styles.amenitiesDescription}>
//               {project.amenitiesFacilities.description}
//             </p>
//             <ul className={styles.amenitiesList}>
//               {project.amenitiesFacilities.ul.map((amenity, index) => (
//                 <li key={index} className={styles.amenityItem}>
//                   {amenity}
//                 </li>
//               ))}
//             </ul>
//             <div className={styles.imageContainer}>
//               {project.amenitiesFacilities.imgs.map((img, index) => (
//                 <ImageGallery 
//                   key={index}
//                   src={img}
//                   alt={`Amenity ${index + 1}`}
//                   width={400}
//                   height={300}
//                   className={styles.amenityImage}
//                 />
//               ))}
//             </div>
//           </section>
    
//           <hr className={styles.hr} />

//           {/* Floor Plans Section */}
//           <section className={styles.section}>
//             <h2 className={styles.sectionTitle}>Floor Plans</h2>
//             <div className={styles.imageContainer}>
//               {project.floorPlan.map((plan, index) => (
//                 <ImageGallery 
//                   key={index}
//                   src={plan}
//                   alt={`Floor Plan ${index + 1}`}
//                   width={600}
//                   height={400}
//                   className={styles.floorPlanImage}
//                 />
//               ))}
//             </div>
//           </section>

//              {/* Unit Details Section */}
//              {project.unitDetails && (project.unitDetails.text || (project.unitDetails.details && project.unitDetails.details.length > 0)) && (
//             <>
//               <hr className={styles.hr} />
//               <section className={styles.section}>
//                 <h2 className={styles.sectionTitle}>Unit Details</h2>
//                 {project.unitDetails.text && (
//                   <p className={styles.sectionDescription}>{project.unitDetails.text}</p>
//                 )}
//                 {project.unitDetails.details && project.unitDetails.details.length > 0 && (
//                   <div className={styles.detailsGrid}>
//                     {project.unitDetails.details.map((detail, index) => (
//                       <div key={index} className={styles.detailBlock}>
//                         {detail.title && <h3 className={styles.detailTitle}>{detail.title}</h3>}
//                         {detail.ul && detail.ul.length > 0 && (
//                           <ul className={styles.detailList}>
//                             {detail.ul.map((item, i) => (
//                               <li key={i}>{item}</li>
//                             ))}
//                           </ul>
//                         )}
//                         {detail.imgs && detail.imgs.length > 0 && (
//                                     <div className={styles.imageContainer}>
//                             {detail.imgs.map((img, i) => (
//                               <ImageGallery 
//                                 key={i}
//                                 src={img}
//                                 alt={`${detail.title} Image ${i + 1}`}
//                                 width={400}
//                                 height={300}
//                                 className={styles.detailImage}
//                               />
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </section>
//             </>
//           )}


//                  {/* Building Features Section */}
//           {project.buildingFeatures && (project.buildingFeatures.text || (project.buildingFeatures.details && project.buildingFeatures.details.length > 0)) && (
//             <>
//               <hr className={styles.hr} />
//               <section className={styles.section}>
//                 <h2 className={styles.sectionTitle}>Building Features</h2>
//                 {project.buildingFeatures.text && (
//                   <p className={styles.sectionDescription}>{project.buildingFeatures.text}</p>
//                 )}
//                 {project.buildingFeatures.details && project.buildingFeatures.details.length > 0 && (
//                   <div className={styles.featuresGrid}>
//                     {project.buildingFeatures.details.map((feature, index) => (
//                       <div key={index} className={styles.featureBlock}>
//                         {feature.title && <h3 className={styles.featureTitle}>{feature.title}</h3>}
//                         {feature.ul && feature.ul.length > 0 && (
//                           <ul className={styles.featureList}>
//                             {feature.ul.map((item, i) => (
//                               <li key={i}>{item}</li>
//                             ))}
//                           </ul>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </section>
//             </>
//           )}

  

//            {/* Unit Deliverable Section */}
//            {project.unitDeliverable && (project.unitDeliverable.text || project.unitDeliverable.ul?.length > 0 || project.unitDeliverable.imgs?.length > 0) && (
//             <>
//               <hr className={styles.hr} />
//               <section className={styles.section}>
//                 <h2 className={styles.sectionTitle}>Unit Deliverable</h2>
//                 {project.unitDeliverable.text && (
//                   <p className={styles.sectionDescription}>{project.unitDeliverable.text}</p>
//                 )}
//                 {project.unitDeliverable.ul && project.unitDeliverable.ul.length > 0 && (
//                   <ul className={styles.deliverableList}>
//                     {project.unitDeliverable.ul.map((item, index) => (
//                       <li key={index}>{item}</li>
//                     ))}
//                   </ul>
//                 )}
//                 {project.unitDeliverable.imgs && project.unitDeliverable.imgs.length > 0 && (
//                   <div className={styles.deliverableImages}>
//                     {project.unitDeliverable.imgs.map((img, index) => (
//                       <ImageGallery 
//                         key={index}
//                         src={img}
//                         alt={`Deliverable Image ${index + 1}`}
//                         width={400}
//                         height={300}
//                         className={styles.deliverableImage}
//                       />
//                     ))}
//                   </div>
//                 )}
//               </section>
//             </>
//           )}

//                     {/* Site Update Section */}
//                     {project.siteUpdate && project.siteUpdate.imgs.length > 0 && (
//             <>
//               <hr className={styles.hr} />
//               <section className={styles.section}>
//                 <h2 className={styles.sectionTitle}>Site Updates</h2>
//                 {project.siteUpdate.title && (
//                   <h3 className={styles.siteUpdateTitle}>{project.siteUpdate.title}</h3>
//                 )}
//                 <div className={styles.imageContainer}>
//                   {project.siteUpdate.imgs.map((img, index) => (
//                     <ImageGallery 
//                       key={index}
//                       src={img}
//                       alt={`Site Update ${index + 1}`}
//                       width={400}
//                       height={300}
//                       className={styles.siteUpdateImage}
//                     />
//                   ))}
//                 </div>
//               </section>
//             </>
//           )}

// <hr className={styles.hr} />
//               <section className={styles.section}>
//                 <h2 className={styles.sectionTitle}>Interested? Contact me: </h2>
//             <p>Email: {client.email}</p>
//             <p>Phone: {client.phone}</p>
//             <p><Link href={client.fb} style={{display:'flex', gap:'10px'}}> <FacebookIcon className={styles.socialIcon} /> Visit me on Facebook</Link></p>
            
      
//               </section>
          
//         </div>
<h1>project url is: {projectUrl}</h1>
      );
  }




