import styles from '@/app/page.module.css'
import { Grid } from '@mui/material';
import PartnershipCard from '@/app/components/PartnerCard';


const partners = [
  {
    name: 'Company One',
    logo: 'https://via.placeholder.com/200x100',
    description: 'A great company offering services.',
    link: '#',
  },
  {
    name: 'Company Two',
    logo: 'https://via.placeholder.com/200x100',
    description: 'Innovative solutions for businesses.',
    link: '#',
  },
  {
    name: 'Company Three',
    logo: 'https://via.placeholder.com/200x100',
    description: 'Reliable partner in the industry.',
    link: '#',
  },
];

const Login =() => {



  return (
<main className={styles.main}>
  <div className={styles.intro}>
<h1>
    Welcome to Zaiko Tech
</h1>
<h2>Digital Cards Make your transaction Easier</h2>
</div>

<div style={{maxWidth:'1800px', margin:'auto', marginTop:'5%'}}>
  <h2 style={{textAlign:'center', marginBottom:'30px'}}>In Partnership With</h2>
      <Grid container spacing={2} justifyContent="center">
        {partners.map((partner, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PartnershipCard partner={partner} />
          </Grid>
        ))}
      </Grid>
 
      </div>
</main>
  );
};

export default Login;
