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
        Coming soon...
      </div>
    </div>
  )
}

export default HomePage