import { useRouter } from 'next/router';
import {useState, useEffect} from 'react';
import Head from 'next/head';

const HomePage = () => {
  
  const router = useRouter();
  const [data, setData] = useState({ status:'init' });

  return (
    <div className="container">
      <Head><title>Elaine Costa</title></Head>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <div><img src="./images/logo.png" /></div>
        <div style={{display:'flex', fontSize:'1.4rem'}}>
          <div>Home</div>
          <div>Research</div>
          <div>Bio</div>
          <div>Home</div>
        </div>
        <div style={{display:'flex'}}>
          <div>G</div>
          <div>L</div>
        </div>
      </div>
      <div style={{display:'flex', background:'#EEE', marginTop:'2rem'}}>
        
        <div><img src="./images/name.png" /></div>
        <div><img src="./images/photo.png" /></div>
        <div style={{marginTop:'-3rem'}}><img src="./images/welcome.png" /></div>
      </div>
    </div>
  )
}

export default HomePage