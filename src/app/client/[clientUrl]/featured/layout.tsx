import { ReactNode } from 'react'
import styles from './page.module.css';
import Link from 'next/link';
import ChatIcon from '@mui/icons-material/Chat';
import { Fab } from '@mui/material';

interface ClientData {
    name: string
    address: string
    phone: string
    fb?: string
    email: string
  }

  export const revalidate = 21600; 

  export default async function FeaturedLayout({ children, params }:{children: ReactNode, params: Promise<{ clientUrl: string }> }) {
    const resolvedParams = await params;
    const getClientData = async (): Promise<ClientData> => {
      const response = await fetch(`https://zaiko-server.vercel.app/api/clients/url/${resolvedParams.clientUrl}`, {

      })
      
      if (!response.ok) {
        throw new Error('Failed to fetch client data')
      }
      
      const data = await response.json();

      // Ensure the object has the expected properties
      if (!data || !data.phone || !data.email || !data.name) {
        throw new Error('Missing expected client data properties');
      }
      return data;  
    }
    const clientData = await getClientData()
    const fbUrl = clientData.fb;
    const fbUsername = fbUrl ? fbUrl.split('/').pop() : '';

    return (
      <div>
        <section className="featured-layout">
          {children}
        </section>
        <hr />
        <section className={styles.footer}>
          <h2 >{clientData.name}</h2>
          <p>Phone: {clientData.phone}</p>
          <p>Email: {clientData.email}</p>
          {fbUrl && (
          <p>
            Facebook: <Link href={fbUrl} className={styles.fbLink}>Click here</Link>
          </p>
        )}
          {fbUrl && fbUsername && (
          <div className={styles.messageContainer}>
            <Fab
              color="primary"
              aria-label="message"
              href={`https://m.me/${fbUsername}`} target="_blank"
              sx={{
                position: 'fixed',
                bottom: 16,
                right: 16,
                zIndex: 1000,
              }}
            >
              <ChatIcon />
            </Fab>
          </div>
        )}
        </section>

      </div>


    )
  }