

import styles from './page.module.css';
import Link from 'next/link';  
import Image from 'next/image';
import { Metadata } from 'next'

interface ClientData {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  background?: string;
  fb?: string;
  tiktok?: string;
  instagram?: string;
  website?:string;
  youtube?: string;
  background_mobile?: string;
  image?:string;
  image_mobile?:string;
  url?: string;
}


export const generateMetadata = async ({ params }: { params: Promise<{ clientUrl: string }>;}): Promise<Metadata>  => {
 
  const {clientUrl} = await params;

  const client = await fetch(`https://zaiko-server.vercel.app/api/clients/url/${clientUrl}`).then((res) => res.json());



  return {
    title: `${client.name} DigiCard `,
   description: `This is a digital business card for ${client.name}, offering a quick way to connect and access contact details and get the list of inventory.`,
     openGraph: {
       title: `${client.name} DigiCard`,
        description: `This is a digital business card for ${client.name}, offering a quick way to connect and access contact details and get the list of inventory.`,
      images: [`${client.image}`],
      url:`https://zaiko.website/client/${client.url}`,
      type:'website'
  },
}
}
 

export async function generateStaticParams() {
  try {
    const res = await fetch('https://zaiko-server.vercel.app/api/clients');
    if (!res.ok) {
      return [];
    }
    const clients = await res.json();
    
    return clients.map((client: ClientData) => ({
      clientUrl: client.url,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}


async function getClient(clientUrl: string): Promise<ClientData> {
  const res = await fetch(
    `https://zaiko-server.vercel.app/api/clients/url/${clientUrl}`,
    { next: { revalidate: 60 } } // Revalidate every hour
  );
  
  if (!res.ok) {
    return null;
  }
  
  return res.json();
}

export default async function ClientHome({ params }: { params: Promise<{ clientUrl: string }>;}) {

  const resolvedParams = await params;
  const clientData = await getClient(resolvedParams.clientUrl);
  

  if (!clientData) {
    return <h1>Not Found</h1>;
  }



  return (
    <div className={styles.body}>
      <div className={styles.page1}>
        <div className={styles.imgContainer}>
          <Image src={clientData.image} width={3656} height={2520} alt={clientData.name}  />
          <Link 
            href={`/client/${clientData.url}/listing`} 
            className={styles.linkList}
            prefetch={true} 
          >
            <span>My Listings</span>
          </Link>
          <div className={styles.socLinks}>
            {clientData.tiktok && (
              <Link href={clientData.tiktok}><Image src={'/tiktok.webp'} width={30} height={30} alt='tiktok image'/></Link>
            )}
            {clientData.fb && (
              <Link href={clientData.fb} style={{padding:'3px'}}><Image src={'/facebook.png'} width={30} height={30} alt='facebook image'/></Link>
            )}
            {clientData.youtube && (
              <Link href={clientData.youtube}><Image src={'/youtube.png'} width={30} height={30} alt='youtube image'/></Link>
            )}
            {clientData.instagram && (
              <Link href={clientData.instagram}><Image src={'/InstagramIcon.png'} width={30} height={30} alt='instagram image'/></Link>
            )}
              {clientData.website&& (
              <Link href={clientData.website}><Image src={'/internet.webp'} width={30} height={30} alt='instagram image'/></Link>
            )}
          </div>

        </div>
      </div>

      <div className={styles.page2}>
        <div className={styles.imgContainer}>
          <Image src={clientData.image_mobile} width={2778} height={1284} alt="Image description"   priority />
          <Link 
            href={`/client/${clientData.url}/listing`} 
            className={styles.linkList}
            prefetch={true}
          >
            <span>My Listings</span>
          </Link>
          <div className={styles.socLinks1}>
            {clientData.tiktok && (
              <Link href={clientData.tiktok}><Image src={'/tiktok.webp'} width={30} height={30} alt='tiktok image'/></Link>
            )}
            {clientData.fb && (
              <Link href={clientData.fb} style={{padding:'3px'}}><Image src={'/facebook.png'} width={30} height={30} alt='facebook image'/></Link>
            )}
            {clientData.youtube && (
              <Link href={clientData.youtube}><Image src={'/youtube.png'} width={30} height={30} alt='youtube image'/></Link>
            )}
            {clientData.instagram && (
              <Link href={clientData.instagram}><Image src={'/InstagramIcon.png'} width={30} height={30} alt='instagram image'/></Link>
            )}
                          {clientData.website&& (
              <Link href={clientData.website}><Image src={'/internet.webp'} width={30} height={30} alt='instagram image'/></Link>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
