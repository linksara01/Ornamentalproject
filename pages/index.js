import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import FishList from '../components/FishList';
import styles from '../styles/Home.module.css'
import Product from './Product/[id]';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ร้านซื้อขายปลาสวยงาม</title>
        <meta name="description" content="ซื้อขายปลาสวยงามในหาดใหญ่" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Featured />
     <FishList />
    </div>
  );
}
