import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import SietHeader from "../components/Header/siteHeader";
import LookArt from "../components/LookArt/LookArt";
import Bio from "../components/Bio/Bio";
import ContactForm from "../components/ContactForm/ContactForm";
import FadeInSection from "../components/FadeFunc/FadeFunc";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anita Machura</title>
        <meta
          name="description"
          content="Straona malarstwa Anity Mchury znakomitej artystki"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SietHeader />
      <FadeInSection>
        <LookArt fileName="plewbig" />
      </FadeInSection>
      <FadeInSection>
      <LookArt fileName="gnoznezjabig" /></FadeInSection>
      <FadeInSection>
      <LookArt fileName="jest_superbig" /></FadeInSection>
      <FadeInSection>
      <LookArt fileName="matkabig" /></FadeInSection>
      <FadeInSection>
      <LookArt fileName="autoportret-z-maskamibig" /></FadeInSection>
      <FadeInSection>
      <LookArt fileName="melancholikbig" /></FadeInSection>
      <FadeInSection>
      <LookArt fileName="miłoscbig" /></FadeInSection>
      <FadeInSection>
      <LookArt fileName="autoportretzkrolikiembig" /></FadeInSection>
      <FadeInSection>
      <LookArt fileName="melancholjabig" /></FadeInSection>
      <FadeInSection>
      <LookArt fileName="autoportretbig" /></FadeInSection>
      <FadeInSection>
      <LookArt fileName="wedrowiec" /></FadeInSection>
      <FadeInSection>
      <LookArt fileName="reminiscencje" /></FadeInSection>
      <FadeInSection>

      <Bio /></FadeInSection>
      <FadeInSection>

      <ContactForm /></FadeInSection>
      
    </div>
  );
}
