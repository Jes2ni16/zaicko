

import styles from './page.module.css';
import Link from 'next/link';  
import Image from 'next/image';


interface ClientData {
  name: string;
  email: string;
  phone: string;
  address: string;
  background: string;
  fb: string;
  tiktok: string;
  instagram: string;
  youtube: string;
  background_mobile: string;
  image:string;
  image_mobile:string;
  url: string;
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
    { next: { revalidate: 3600 } } // Revalidate every hour
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
          <Image src={clientData.image} width={2560} height={1440} alt={clientData.name}  />
          <Link 
            href={`/client/${clientData.url}/listing`} 
            className={styles.linkList}
            prefetch={true} // Add explicit prefetch
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
          </div>
          <div className={styles.fma}>
            <Link href='https://findmyagent.net'>
              <Image src='/fma.png' width={40} height={30} alt="find my agent Logo" />
            </Link>
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
          </div>
          <div className={styles.fma}>
            <Link href='https://findmyagent.net'>
              <Image src='/fma.png' width={25} height={20} alt="find my agent Logo" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
