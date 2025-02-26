
import CardList from '../../../components/cards';
import styles from './page.module.css';



interface ClientData {
  projects: string[]; 
  url: string;
  name: string;
}

export async function generateStaticParams() {
  try {
    const res = await fetch('https://zaiko-server.vercel.app/api/clients');
    if (!res.ok) {
      return [];
    }
    const clients = await res.json();
    
    return clients.map((client: ClientData) => ({
      clientUrl: client.url, // Assuming the API returns a 'url' property for each client
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}


async function getClient(clientUrl: string): Promise<ClientData>  {
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
    <div className={styles.page}>

      {/* Header */}
      <div className={styles.header}>
        <h1>{ `${clientData.name}'s Featured Projects`}</h1>
      </div>

      {clientData.projects && clientData.projects.length > 0 ? (
        <CardList client={clientData} />
      ) : (
        <p>No projects found.</p>
      )}
    </div>
  );
}
