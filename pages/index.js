import Head from 'next/head'
import Navbar from '../Comps/Navbar';
import Footer from '../Comps/Footer';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninjas List | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}> HomePage</h1>  
      <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <Link href="/ninjas">
        <a className={styles.btn}> See Ninjas Listing</a>
      </Link>
    </div>
    </>
  )
}
