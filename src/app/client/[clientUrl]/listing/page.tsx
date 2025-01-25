'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import axios from 'axios';
import LinkIcon from '@mui/icons-material/Link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Button,  Slider, Typography, CircularProgress, Box, IconButton, Card} from '@mui/material';


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
  const [listsLoading, setListsLoading] = useState<boolean>(true);
  const [clientLoading, setClientLoading] = useState<boolean>(true);
  const [backgroundLoaded, setBackgroundLoaded] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedListType, setSelectedListType] = useState<string>('Rental');
  const [priceRange, setPriceRange] = useState<number[]>([0, 0]); // Adjusted initial state
  const [minPrice, setMinPrice] = useState<number>(0);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<number>(0);

  useEffect(() => {
    const url = window.location.href;
    const match = url.match(/\/client\/(.*?)\/listing/);
    const urlAfterClient = match ? match[1] : null;

    if (urlAfterClient) {
      setCurrentURL(urlAfterClient);
    } else {
      setError('Invalid URL format.');
      setClientLoading(false);
      setListsLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        if (!currentURL) return;

        const response = await axios.get(
          `https://zaiko-server.vercel.app/api/clients/url/${currentURL}`
        );
        setClientData(response.data);

        const img = new Image();
        img.src = response.data.background;
        img.onload = () => setBackgroundLoaded(true);
      } catch (err) {
        setError('Failed to load client data.');
        console.error(err);
      } finally {
        setClientLoading(false);
      }
    };

    const fetchLists = async (): Promise<void> => {
      try {
        if (!currentURL) return;

        const response = await axios.get<ListData[]>(
          `https://zaiko-server.vercel.app/api/lists`,
          { params: { client: currentURL } }
        );

        const fetchedLists = response.data;

        // Assign default prices where missing or invalid
        const processedLists: ListData[] = fetchedLists.map((list) => ({
          ...list,
          price: list.price && !isNaN(parseFloat(list.price)) ? list.price : '0',
        }));

        // Sort by createdAt
        const sortedLists = processedLists.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

        setLists(sortedLists);

        // Calculate price range
        const prices: number[] = processedLists.map((list) =>
          parseFloat(list.price) || 0
        );
        const min = Math.min(...prices);
        const max = Math.max(...prices);

        setMinPrice(min);
        setMaxPrice(max);
        setPriceRange([min, max]);
      } catch (err) {
        setError('Failed to load listings.');
        console.error(err);
      } finally {
        setListsLoading(false);
      }
    };

    fetchClientData();
    fetchLists();
  }, [currentURL]);

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };
  const uniqueCities = Array.from(new Set(lists.map((list) => list.city))).filter(
    (city) => city
  );

  const filteredLists: ListData[] = lists
    .filter((list) =>
      selectedListType ? list.list_type === selectedListType : true
    )
    .filter((list) => {
      const price: number = parseFloat(list.price) || 0; // Default to 0 if invalid
      return price >= priceRange[0] && price <= priceRange[1];
    })
    .filter((list) => (selectedCity ? list.city === selectedCity : true));

  if (listsLoading || clientLoading || !backgroundLoaded) return (<Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Centers vertically and horizontally
    }}
  >
    <CircularProgress />
  </Box>);
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.body}>
      <div
        className={styles.page1}
        style={{
          backgroundImage: clientData?.background
            ? `url(${clientData.background})`
            : 'none',
        }}
      >


        <div className={styles.container}>
        <div className={styles.header}>
        <Link href={`/client/${currentURL}/`} className={styles.back}>    <IconButton aria-label="home">
            <ArrowBackIcon sx={{
              color: 'white',
              border: '1px solid black',
              borderRadius: '50%',
              backgroundColor: 'black',
              padding: '3px',
              fontSize: '40px',
            }} />
          </IconButton></Link>
          <h1>My Listings</h1>
        </div>

        <div className={styles.lists}>
          <div className={styles.leftSide}>
          <div style={{ marginBottom: "10px" }}>
      <label htmlFor="city-select" style={{ display: "block", fontSize: '18px' }}>
        Select City:
      </label>
      <select
        id="city-select"
        value={selectedCity}
        onChange={handleCityChange}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "8px",
          border: "1px solid #ccc",color:'#0f0f0f',
          fontSize: "16px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <option value="">All Cities</option>
        {uniqueCities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>

          <hr />
            <div style={{display:'flex',flexDirection:'column', justifyContent:'center', textAlign:'center'}}>
            <Typography gutterBottom>Price Range</Typography>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={minPrice || 0}
              max={maxPrice}
              step={100}
              sx={{
                color: '#0f7f50', height: 7, width: '80%', margin: '0 auto',  padding:'5px 0 !important',
                '& .MuiSlider-thumb': {
                  backgroundColor: '#fff',
                  border: '3px solid #0f7f50',
                  width: 22,
                  height: 22,
  
                  boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
                }, '& .MuiSlider-rail': { backgroundColor: '#d0d0d0', },
                '& .MuiSlider-track': {
                  backgroundColor: '#0f7f50',
                },
              }}
            />
            <Typography>
              &#8369; {priceRange[0]} - &#8369; {priceRange[1]}
            </Typography>
            </div>
            <hr />
            <Box
      sx={{display: 'flex',gap: '10px',flexDirection:'column',marginRight: 2,marginBottom: '10px',width: '100%',justifyContent: 'center',
      }}
    >
      {['Rental','Brokerage', 'Development' ].map((type) => (
        <button
          key={type}
          onClick={() => setSelectedListType(type)}
          style={{
            padding: '10px 15px',
            fontSize: '18px',
            cursor: 'pointer',
            width:'100%',
            borderRadius: '5px',
            border: selectedListType === type ? '2px solid #383838' : '2px solid #D9D9D9',
            backgroundColor: selectedListType === type ? '#383838' : '#D9D9D9',
            color: selectedListType === type ? '#fff' : '#4c504d',
            transition: 'all 0.3s ease',
            boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)'
          }}
        >
          {type}
        </button>
      ))}
    </Box>
           <hr />
            <Typography style={{ fontSize: '20px', padding: '10px' }}>Discover my featured projects now!</Typography>
            <Link href={`/client/${currentURL}/featured`} className={styles.featuredBtn}  >
              Featured Projects
              <ApartmentIcon />
            </Link>
          </div>


          {listsLoading ? ( // Show loader when data is loading
  <div style={{ textAlign: 'center', marginTop: '20px' }}>
    <CircularProgress size={48} />
    <Typography variant="body1" style={{ marginTop: '8px' }}>
      Loading listings...
    </Typography>
  </div>
) : filteredLists.length > 0 ? (
  <div className={styles.cardContainer}>
    {filteredLists.map((list) => (
      <Card
        key={list._id}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '8px',
          gap: '8px',
          boxShadow: 2,
          width: '100%',
          margin: '0 auto',
          minHeight: '90px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {list.unit_type || 'Unknown Unit'}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {list.barangay},{list.city || ''}
          </Typography>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
          <Typography variant="body1" color="text.secondary">
            <strong>Rooms:</strong> {list.room_number || ''}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <strong>Price:</strong> {list.price ? `₱ ${list.price}` : ''}
          </Typography>
          <Link href={list.fb_link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" size="small" startIcon={<LinkIcon />}>
              View
            </Button>
          </Link>
        </div>
      </Card>
    ))}
  </div>
) : (
  <div style={{ textAlign: 'center', marginTop: '20px' }}>
    <Typography variant="body2">No listings available.</Typography>
  </div>
)}
          </div>

        </div>
      </div>



      <div
        className={styles.page2}
        style={{
          backgroundImage: clientData?.background_mobile
            ? `url(${clientData.background_mobile})`
            : 'none',
        }}
      >

<Link href={`/client/${currentURL}/`} className={styles.back}>    <IconButton aria-label="home">
            <ArrowBackIcon sx={{
              color: 'white',
              border: '1px solid black',borderRadius: '50%',backgroundColor: 'black',padding: '3px',fontSize: '30px',            }} />
          </IconButton></Link>
        <div className={styles.lists}>
        <div className={styles.header}>
          <h1 style={{ textAlign: 'start' }}>My Listings</h1>


          <Link href={`/client/${currentURL}/featured`} className={styles.featuredBtn}  >
            Featured Projects      <ApartmentIcon style={{ fontSize: 25, color: '#fff' }} />
          </Link>

        </div>
<div className='as'   style={{
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',borderRadius: '8px', 
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',padding: '3px 10px' , maxWidth:'600px',margin:'auto', marginBottom:'10px',
  }}>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '50%', margin: 'auto' }}>
              <Typography gutterBottom className={styles.sliderContainer} style={{ fontSize: '16px', display: 'block' }}>
                Price Range: <div style={{ fontSize: '14px' }}> &#8369; {priceRange[0]} - &#8369; {priceRange[1]} </div>
              </Typography>
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={minPrice || 0}
                max={maxPrice}
                step={100}
                sx={{
                  color: '#0f7f50', height: 3, width: '80%', margin: '0 auto',  padding:'5px 0 !important',
                  '& .MuiSlider-thumb': {
                    backgroundColor: '#fff',
                    border: '2px solid #0f7f50',
                    width: 12,
                    height: 12,
    
                    boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
                  }, '& .MuiSlider-rail': { backgroundColor: '#d0d0d0', },
                  '& .MuiSlider-track': {
                    backgroundColor: '#0f7f50',
                  },
                }}
              />
            </div>

            <div style={{ width: '50%' }}>
            <div style={{ maxWidth: "300px", margin: "0 auto" }}>
      <label htmlFor="city-select" style={{ display: "block", fontSize: '17px' }}>
        Select City
      </label>
      <select
        id="city-select"
        value={selectedCity}
        onChange={handleCityChange}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "8px",
          border: "1px solid #ccc",color:'#0f0f0f',
          fontSize: "16px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <option value="">All Cities</option>
        {uniqueCities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
            </div>
          </div>
          <hr />
    <Box
      sx={{
        display: 'flex',
        gap: '10px',
        marginRight: 2,
        marginBottom: '10px',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      {['Rental','Brokerage', 'Development' ].map((type) => (
        <button
          key={type}
          onClick={() => setSelectedListType(type)}
          style={{
            padding: '10px 15px',
            fontSize: '12px',
            cursor: 'pointer',
            maxWidth:'500px',
            width:'33%',
            borderRadius: '5px',
            border: selectedListType === type ? '2px solid #383838' : '2px solid #D9D9D9',
            backgroundColor: selectedListType === type ? '#383838' : '#D9D9D9',
            color: selectedListType === type ? '#fff' : '#4c504d',
            transition: 'all 0.3s ease',
            boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)'
          }}
        >
          {type}
        </button>
      ))}
    </Box>
          </div>
          {listsLoading ? ( 
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <CircularProgress size={48} />
              <Typography variant="body1" style={{ marginTop: '8px' }}>
                Loading listings...
              </Typography>
            </div>
          ) : filteredLists.length > 0 ? (
            <div className={styles.cardContainer} >
              {filteredLists.map((list) => (
                <Card
                  key={list._id}
                  sx={{
                    display: 'flex',flexDirection: 'column',padding: '8px',gap: '8px',boxShadow: 2,width: '100%',margin: '0 auto',
                    minHeight: '90px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {list.unit_type || 'Unknown Unit'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {list.barangay},{list.city || ''}
                    </Typography>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Rooms:</strong> {list.room_number || ''}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Price:</strong> {list.price ? `₱ ${list.price}` : ''}
                    </Typography>
                    <Link href={list.fb_link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                      <Button variant="contained" color="primary" size="small" startIcon={<LinkIcon />}>
                        View
                      </Button>
                    </Link>
                  </div>

                </Card>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Typography variant="body2">No listings available.</Typography>
            </div>
          )}



        </div>
      </div>


    </div>
  );
};

export default ClientListing;
