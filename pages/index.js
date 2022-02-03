import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss';

import SietHeader from '../components/Header/siteHeader';
import LookArt from '../components/LookArt/LookArt';
import Bio from '../components/Bio/Bio';
import ContactForm from '../components/ContactForm/ContactForm';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anita Machura</title>
        <meta name="description" content="Straona malarstwa Anity Mchury znakomitej artystki" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <SietHeader/>

      <LookArt fileName='plewbig'/>
      <LookArt fileName='gnoznezjabig'/>
      <LookArt fileName='jest_superbig'/>
      <LookArt fileName='matkabig'/>
      <LookArt fileName='autoportret-z-maskamibig'/>
      <LookArt fileName='melancholikbig'/>
      <LookArt fileName='miłoscbig'/>
      <LookArt fileName='autoportretzkrolikiembig'/>
      <LookArt fileName='melancholjabig'/>
      <LookArt fileName='autoportretbig'/>
      <LookArt fileName='wedrowiec'/>
      <LookArt fileName='reminiscencje'/>

      <Bio/>

      <ContactForm/>
     
    </div>
  )
}
