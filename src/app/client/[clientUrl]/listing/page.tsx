'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import axios from 'axios';
import LinkIcon from '@mui/icons-material/Link';
import Link from 'next/link'; 
import { Button,  Stack, Slider, Typography } from '@mui/material';


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
  url: string;
}

interface ListData {
  _id: string;
  list_type: string;
  unit_type: string;
  city: string;
  barangay: string;
  price: string;
  fb_link: string;
  room_number: string;
  list_owner: string;
  client: { _id: string; name: string };
  createdAt: string; 
}

const ClientListing = () => {
  const [currentURL, setCurrentURL] = useState<string>('');
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const [lists, setLists] = useState<ListData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedListType, setSelectedListType] = useState<string>('Brokerage');
  const [priceRange, setPriceRange] = useState<number[]>([0, 0]); // Adjusted initial state
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);

  useEffect(() => {
    const url = window.location.href;
    const match = url.match(/\/client\/(.*?)\/listing/);
    const urlAfterClient = match ? match[1] : null;

    if (urlAfterClient) {
      setCurrentURL(urlAfterClient);
    } else {
      setError('Invalid URL format.');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!currentURL) return;

        const [clientResponse, listResponse] = await Promise.all([
          axios.get(`https://zaiko-server.vercel.app/api/clients/url/${currentURL}`),
          axios.get(`https://zaiko-server.vercel.app/api/lists`, {
            params: { clientUrl: currentURL },
          }),
        ]);

        setClientData(clientResponse.data);
        const fetchedLists = listResponse.data;

        const sortedLists = fetchedLists.sort((a: ListData, b: ListData) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

        setLists(sortedLists);

        // Calculate dynamic min and max prices
        const prices = fetchedLists.map((list: ListData) => parseFloat(list.price) || 0);
        const min = Math.min(...prices);
        const max = Math.max(...prices);

        setMinPrice(min);
        setMaxPrice(max);
        setPriceRange([min, max]); // Set the initial price range
      } catch (err) {
        setError('Failed to load data. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentURL]);

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const filteredLists = lists
    .filter((list) => (selectedListType ? list.list_type === selectedListType : true))
    .filter((list) => {
      const price = parseFloat(list.price);
      return price >= priceRange[0] && price <= priceRange[1];
    });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    
    <div
      className={styles.page1}
      style={{
        backgroundImage: clientData?.background
          ? `url(${clientData.background})`
          : 'none',
      }}
    >
      <div className={styles.header}><h1>My Listings</h1> 
    
    <Link href={`/client/${currentURL}/`}  className={styles.back}>Back to Home</Link>
 
        
        
        </div>

      <div className={styles.lists}>
        <Stack direction="column" spacing={2} sx={{ marginRight: 2 ,width:'20%'}}>
          <Typography gutterBottom>Price Range</Typography>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={minPrice}
            max={maxPrice}
            step={100}
          />
          <Typography>
            &#8369; {priceRange[0]} - &#8369; {priceRange[1]}
          </Typography>
          <Button
            variant={selectedListType === 'Brokerage' ? 'contained' : 'outlined'}
            onClick={() => setSelectedListType('Brokerage')}
          >
            Brokerage
          </Button>
          <Button
            variant={selectedListType === 'Development' ? 'contained' : 'outlined'}
            onClick={() => setSelectedListType('Development')}
          >
            Development
          </Button>
          <Button
            variant={selectedListType === 'Rental' ? 'contained' : 'outlined'}
            onClick={() => setSelectedListType('Rental')}
          >
            Rental
          </Button>
        </Stack>

        {filteredLists && filteredLists.length > 0 ? (
          <div className={styles.tableContainer} style={{ marginLeft: '10px' }}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Unit Type</th>
                  <th>City</th>
                  <th>Location</th>
                  <th>Rooms</th>
                  <th>Price</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {filteredLists.map((list) => (
                  <tr key={list._id}>
                    <td>{list.unit_type || 'N/A'}</td>
                    <td>{list.city || 'N/A'}</td>
                    <td>{list.barangay || 'N/A'}</td>
                    <td>{list.room_number || 'N/A'}</td>
                    <td>{list.price ? `₱ ${list.price}` : ''}</td>
                    <td>
                      <Link href={list.fb_link} target="_blank" rel="noopener noreferrer">
                        <LinkIcon sx={{ verticalAlign: 'middle', color:'#1565c0' }} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className={styles.noListings}>Soon to be posted</p>
        )}
      </div>
    </div>
  );
};

export default ClientListing;
