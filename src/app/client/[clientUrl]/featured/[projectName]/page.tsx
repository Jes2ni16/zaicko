import { ImageGallery } from './ImageGallery';
// import { getClientByUrl, getProjectByName } from './api'
import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook'; // Add this import at the top with other imports



export interface ClientData {
  _id?: { $oid: string };
  name?: string;
  email?: string;
  phone?: string;
  fb?: string;
}

export interface LocationDescription {
  title?: string;
  ul?: string[];
  _id?: { $oid: string };
}

export interface ProjectData {
  _id?: { $oid: string };
  projectUrl?: string;
  projectImg?: string;
  projectLocation?: string;
  title?: string;
  description?: string;
  location?: {
    locationText?: string;
    descriptions?: LocationDescription[];
    img?: string;
  };
  amenitiesFacilities?: {
    description?: string;
    ul?: string[];
    imgs?: string[];
  };
  unitDetails: {
    text?: string;
    details?: Array<{
      title?: string;
      ul?: string[];
      imgs?: string[];
      _id?: { $oid: string };
    }>;
  };
  buildingFeatures?: {
    text?: string;
    details?: Array<{
      title?: string;
      ul?: string[];
      _id?: { $oid: string };
    }>;
  };
  unitDeliverable?: {
    text?: string;
    ul?: string[];
    imgs?: string[];
  };
  floorPlan?: string[];
  siteUpdate?: {
    title: string;
    imgs: string[];
  };
}




export const dynamicParams = true;

export async function generateStaticParams() {
  // Example: Return nested dynamic paths for clientUrl and projects
  return [
    { clientUrl: 'client-1', projects: 'arc-tower-cebu' },
    { clientUrl: 'client-1', projects: 'project-two' },
    { clientUrl: 'client-2', projects: 'project-three' },
  ];
}
export default async function ProjectPage({ params }:{params:Promise<{clientUrl:string, projectName:string}>}  ) {

  const { clientUrl, projectName } = await params;

  console.log(clientUrl,projectName)

  // Fetch project data based on the projectUrl
  const project:ProjectData | null = await fetchProjectData( projectName);
  const client:ClientData | null = await fetchClientData( clientUrl);

  if(!project || !client)return <h1>Data not found</h1>
    return (
        <div className={styles.container}>

          {/* Hero Section */}
          <div className={styles.heroSection} >
          {project.projectImg && (
          <ImageGallery 
            src={project.projectImg}
            alt={project.title || 'Project Image'}
            width={1200}
            height={600}
            className={styles.heroImage}
            priority
          />
        )}
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.description}>{project.description}</p>
            <p className={styles.location}>Project Location: {project.projectLocation}</p>
          </div>
    
<hr className={styles.hr} />

          {/* Location Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Location</h2>
            <div className={styles.locationGrid}>
              <div className={styles.locationDetails}>
                {project.location.descriptions.map((desc,index) => (
                  <div key={index} className={styles.locationBlock}>
                    {desc.title && <h3 className={styles.locationTitle}>{desc.title}</h3>}
                    <ul className={styles.locationList}>
                      {desc.ul.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className={styles.locationMap}>
              {project.location?.img && (
    <ImageGallery 
      src={project.location.img}
      alt="Location Map"
      width={600}
      height={400}
      className={styles.mapImage}
    />
  )}
              </div>
            </div>
          </section>
          <hr className={styles.hr} />
          {/* Amenities Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Amenities & Facilities</h2>
            <p className={styles.amenitiesDescription}>
              {project.amenitiesFacilities.description}
            </p>
            <ul className={styles.amenitiesList}>
              {project.amenitiesFacilities.ul.map((amenity, index) => (
                <li key={index} className={styles.amenityItem}>
                  {amenity}
                </li>
              ))}
            </ul>
            <div className={styles.imageContainer}>
              {project.amenitiesFacilities.imgs.map((img, index) => (
                <ImageGallery 
                  key={index}
                  src={img}
                  alt={`Amenity ${index + 1}`}
                  width={400}
                  height={300}
                  className={styles.amenityImage}
                />
              ))}
            </div>
          </section>
    
          <hr className={styles.hr} />

          {/* Floor Plans Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Floor Plans</h2>
            <div className={styles.imageContainer}>
              {project.floorPlan.map((plan, index) => (
                <ImageGallery 
                  key={index}
                  src={plan}
                  alt={`Floor Plan ${index + 1}`}
                  width={600}
                  height={400}
                  className={styles.floorPlanImage}
                />
              ))}
            </div>
          </section>

             {/* Unit Details Section */}
             {project.unitDetails && (project.unitDetails.text || (project.unitDetails.details && project.unitDetails.details.length > 0)) && (
            <>
              <hr className={styles.hr} />
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Unit Details</h2>
                {project.unitDetails.text && (
                  <p className={styles.sectionDescription}>{project.unitDetails.text}</p>
                )}
                {project.unitDetails.details && project.unitDetails.details.length > 0 && (
                  <div className={styles.detailsGrid}>
                    {project.unitDetails.details.map((detail, index) => (
                      <div key={index} className={styles.detailBlock}>
                        {detail.title && <h3 className={styles.detailTitle}>{detail.title}</h3>}
                        {detail.ul && detail.ul.length > 0 && (
                          <ul className={styles.detailList}>
                            {detail.ul.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        )}
                        {detail.imgs && detail.imgs.length > 0 && (
                                    <div className={styles.imageContainer}>
                            {detail.imgs.map((img, i) => (
                              <ImageGallery 
                                key={i}
                                src={img}
                                alt={`${detail.title} Image ${i + 1}`}
                                width={400}
                                height={300}
                                className={styles.detailImage}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </>
          )}


                 {/* Building Features Section */}
          {project.buildingFeatures && (project.buildingFeatures.text || (project.buildingFeatures.details && project.buildingFeatures.details.length > 0)) && (
            <>
              <hr className={styles.hr} />
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Building Features</h2>
                {project.buildingFeatures.text && (
                  <p className={styles.sectionDescription}>{project.buildingFeatures.text}</p>
                )}
                {project.buildingFeatures.details && project.buildingFeatures.details.length > 0 && (
                  <div className={styles.featuresGrid}>
                    {project.buildingFeatures.details.map((feature, index) => (
                      <div key={index} className={styles.featureBlock}>
                        {feature.title && <h3 className={styles.featureTitle}>{feature.title}</h3>}
                        {feature.ul && feature.ul.length > 0 && (
                          <ul className={styles.featureList}>
                            {feature.ul.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </>
          )}

  

           {/* Unit Deliverable Section */}
           {project.unitDeliverable && (project.unitDeliverable.text || project.unitDeliverable.ul?.length > 0 || project.unitDeliverable.imgs?.length > 0) && (
            <>
              <hr className={styles.hr} />
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Unit Deliverable</h2>
                {project.unitDeliverable.text && (
                  <p className={styles.sectionDescription}>{project.unitDeliverable.text}</p>
                )}
                {project.unitDeliverable.ul && project.unitDeliverable.ul.length > 0 && (
                  <ul className={styles.deliverableList}>
                    {project.unitDeliverable.ul.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
                {project.unitDeliverable.imgs && project.unitDeliverable.imgs.length > 0 && (
                  <div className={styles.deliverableImages}>
                    {project.unitDeliverable.imgs.map((img, index) => (
                      <ImageGallery 
                        key={index}
                        src={img}
                        alt={`Deliverable Image ${index + 1}`}
                        width={400}
                        height={300}
                        className={styles.deliverableImage}
                      />
                    ))}
                  </div>
                )}
              </section>
            </>
          )}

                    {/* Site Update Section */}
                    {project.siteUpdate && project.siteUpdate.imgs.length > 0 && (
            <>
              <hr className={styles.hr} />
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Site Updates</h2>
                {project.siteUpdate.title && (
                  <h3 className={styles.siteUpdateTitle}>{project.siteUpdate.title}</h3>
                )}
                <div className={styles.imageContainer}>
                  {project.siteUpdate.imgs.map((img, index) => (
                    <ImageGallery 
                      key={index}
                      src={img}
                      alt={`Site Update ${index + 1}`}
                      width={400}
                      height={300}
                      className={styles.siteUpdateImage}
                    />
                  ))}
                </div>
              </section>
            </>
          )}

<hr className={styles.hr} />
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Interested? Contact me: </h2>
            <p>Email: {client.email}</p>
            <p>Phone: {client.phone}</p>
            <p><Link href={client.fb} style={{display:'flex', gap:'10px'}}> <FacebookIcon className={styles.socialIcon} /> Visit me on Facebook</Link></p>
            
      
              </section>
          
        </div>

      );
  }



  // Helper function to fetch project data based on the URL
  async function fetchProjectData(projectName: string): Promise<ProjectData | null> {
    try {
      const res = await fetch(`https://zaiko-server.vercel.app/api/projects/${projectName}`);
      
      if (!res.ok) {
        throw new Error('Failed to fetch project data');
      }
  
      const data: ProjectData= await res.json();
      return data; // Returning project data if it's available
    } catch (error) {
      console.error('Error fetching project data:', error);
      return null; // Return null in case of error
    }
  }

  async function fetchClientData(clientUrl: string): Promise<ClientData | null> {
    try {
      const res = await fetch(`https://zaiko-server.vercel.app/api/clients/url/${clientUrl}`);
      
      if (!res.ok) {
        throw new Error('Failed to fetch client data');
      }
  
      const data: ClientData = await res.json();
      return data;
    } catch (error) {
      console.error('Error fetching client data:', error);
      return null;
    }
  }