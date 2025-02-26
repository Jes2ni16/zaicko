import { ReactNode } from 'react'
import styles from './page.module.css';
import Link from 'next/link';
import ChatIcon from '@mui/icons-material/Chat';
import { Fab } from '@mui/material';

interface ClientData {
    name: string
    address: string
    phone: string
    fb: string
    email: string
  }


  export default async function FeaturedLayout({ children, params }:{children: ReactNode, params: Promise<{ clientUrl: string }> }) {
    const resolvedParams = await params;
    const getClientData = async (): Promise<ClientData> => {
      const response = await fetch(`https://zaiko-server.vercel.app/api/clients/url/${resolvedParams.clientUrl}`, {
        cache: 'force-cache', // Changed from next.revalidate to cache option
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      if (!response.ok) {
        throw new Error('Failed to fetch client data')
      }
      
      return response.json()
    }
    const clientData = await getClientData()
    const fbUrl = clientData.fb;
    const fbUsername = fbUrl.split('/').pop(); 

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
          <p>Facebook: <Link href={clientData.fb} className={styles.fbLink}>Click here</Link></p>
          <div className={styles.messageContainer}>
          <Fab
      color="primary"
      aria-label="message"
      href={`https://m.me/${fbUsername}`}  target="_blank"  // Replace with your desired URL
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
        </section>

      </div>


    )
  }