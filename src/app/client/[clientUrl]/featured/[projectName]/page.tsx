// import React from 'react';
// import Image from 'next/image';
// import styles from './page.module.css';

// interface LocationDescription {
//   title: string;
//   ul: string[];
//   _id: { $oid: string };
// }

// interface ProjectData {
//   _id: { $oid: string };
//   projectUrl: string;
//   projectImg: string;
//   projectLocation: string;
//   title: string;
//   description: string;
//   location: {
//     locationText: string;
//     descriptions: LocationDescription[];
//     img: string;
//   };
//   amenitiesFacilities: {
//     description: string;
//     ul: string[];
//     imgs: string[];
//   };
//   unitDetails: {
//     text: string;
//     details: Array<{
//       title: string;
//       ul: string[];
//       imgs: string[];
//       _id: { $oid: string };
//     }>;
//   };
//   buildingFeatures: {
//     text: string;
//     details: Array<{
//       title: string;
//       ul: string[];
//       _id: { $oid: string };
//     }>;
//   };
//   unitDeliverable: {
//     text: string;
//     ul: string[];
//     imgs: string[];
//   };
//   floorPlan: string[];
// }

// async function getProjectData(projectName: string) {
//     try {
//       const res = await fetch(`https://zaiko-server.vercel.app/api/projects/${projectName}`, {
//         next: { revalidate: 3600 }, // Cache for 1 hour
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
      
//       if (!res.ok) {
//         if (res.status === 404) {
//           throw new Error('Project not found');
//         }
//         throw new Error(`Failed to fetch project: ${res.status} ${res.statusText}`);
//       }
      
//       return res.json();
//     } catch (error) {
//       console.error('Error fetching project data:', error);
//       throw error;
//     }
//   }

//   type PageProps = {
//     params: {
//       projectName: string;
//       clientUrl: string;
//     };
//     searchParams: { [key: string]: string | string[] | undefined };
//   };

//   export default async function ProjectPage({ params }: PageProps) {
//     try {
//       // Get the project name directly from the URL
//       const projectName = decodeURIComponent(params.projectName.toString());
  
//       const project: ProjectData = await getProjectData(projectName);
      
//       if (!project) {
//         throw new Error('Project not found');
//       }
  
//     return (
//       <div className={styles.container}>
//         {/* Hero Section */}
//         <div className={styles.heroSection}>
//           <Image
//             src={project.projectImg}
//             alt={project.title}
//             width={1200}
//             height={600}
//             className={styles.heroImage}
//           />
//           <h1 className={styles.title}>{project.title}</h1>
//           <p className={styles.location}>{project.projectLocation}</p>
//           <p className={styles.description}>{project.description}</p>
//         </div>
  
//         {/* Location Section */}
//         <section className={styles.section}>
//           <h2 className={styles.sectionTitle}>Location</h2>
//           <div className={styles.locationGrid}>
//             <div className={styles.locationDetails}>
//               {project.location.descriptions.map((desc) => (
//                 <div key={desc._id.$oid} className={styles.locationBlock}>
//                   {desc.title && <h3 className={styles.locationTitle}>{desc.title}</h3>}
//                   <ul className={styles.locationList}>
//                     {desc.ul.map((item, i) => (
//                       <li key={i}>{item}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//             <div className={styles.locationMap}>
//               <Image
//                 src={project.location.img}
//                 alt="Location Map"
//                 width={600}
//                 height={400}
//                 className={styles.mapImage}
//               />
//             </div>
//           </div>
//         </section>
  
//         {/* Amenities Section */}
//         <section className={styles.section}>
//           <h2 className={styles.sectionTitle}>Amenities & Facilities</h2>
//           <p className={styles.amenitiesDescription}>
//             {project.amenitiesFacilities.description}
//           </p>
//           <ul className={styles.amenitiesList}>
//             {project.amenitiesFacilities.ul.map((amenity, index) => (
//               <li key={index} className={styles.amenityItem}>
//                 <span className={styles.bullet}>•</span>
//                 {amenity}
//               </li>
//             ))}
//           </ul>
//           <div className={styles.amenitiesGrid}>
//             {project.amenitiesFacilities.imgs.map((img, index) => (
//               <Image
//                 key={index}
//                 src={img}
//                 alt={`Amenity ${index + 1}`}
//                 width={400}
//                 height={300}
//                 className={styles.amenityImage}
//               />
//             ))}
//           </div>
//         </section>
  
//         {/* Floor Plans Section */}
//         <section className={styles.section}>
//           <h2 className={styles.sectionTitle}>Floor Plans</h2>
//           <div className={styles.floorPlanGrid}>
//             {project.floorPlan.map((plan, index) => (
//               <Image
//                 key={index}
//                 src={plan}
//                 alt={`Floor Plan ${index + 1}`}
//                 width={600}
//                 height={400}
//                 className={styles.floorPlanImage}
//               />
//             ))}
//           </div>
//         </section>
//       </div>
//     );
//   } catch (error) {
//     // You might want to add proper error handling UI here
//     return (
//       <div className={styles.errorContainer}>
//         <h1>Error Loading Project</h1>
//         <p>{error instanceof Error ? error.message : 'An unknown error occurred'}</p>
//       </div>
//     );
//   }
// }

