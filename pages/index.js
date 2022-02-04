import Head from "next/head";

import styles from "../styles/Home.module.scss";

import SietHeader from "../components/Header/siteHeader";
import LookArt from "../components/LookArt/LookArt";
import Bio from "../components/Bio/Bio";
import ContactForm from "../components/ContactForm/ContactForm";
import FadeInSection from "../components/FadeFunc/FadeFunc";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anita Machura</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Strona malarstwa Anity Mchury znakomitej artystki"
        />
        <meta
          name="author"
          content="Code: Kuba Koder = Jakub Grzegorzek, Design: Anita Machura"
        />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&display=swap" rel="stylesheet" /> 
      </Head>

      <SietHeader />
      <FadeInSection>
        <LookArt fileName="plewbig" />
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="gnoznezjabig" />
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="jest_superbig" />
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="matkabig" />
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="autoportret-z-maskamibig" />
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="melancholikbig" />
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="miłoscbig" />
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="autoportretzkrolikiembig" />
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="melancholjabig" />
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="autoportretbig" />
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="wedrowiec" />
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="reminiscencje" />
      </FadeInSection>
      <FadeInSection>
        <Bio />
      </FadeInSection>
      <FadeInSection>
        <ContactForm />
      </FadeInSection>

      <Footer />
    </div>
  );
}
