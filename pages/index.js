import Head from "next/head";

import styles from "../styles/Home.module.scss";

import SietHeader from "../components/Header/siteHeader";
import LookArt from "../components/LookArt/LookArt";
import Bio from "../components/Bio/Bio";
import ContactForm from "../components/ContactForm/ContactForm";
import FadeInSection from "../components/FadeFunc/FadeFunc";
import Footer from "../components/Footer/Footer";

const Home = (props) => {
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
        <LookArt fileName="plewbig" title='Plew' > opis opis <br/> enter</LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="gnoznezjabig" title='Plew'> opis opis <br/> enter</LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="jest_superbig" title='Plew'> opis opis <br/> enter</LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="matkabig" title='Plew' > opis opis <br/> enter</LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="autoportret-z-maskamibig" title='Plew' > opis opis <br/> enter</LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="melancholikbig" title='Plew'> opis opis <br/> enter</LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="miłoscbig" title='Plew'> opis opis <br/> enter</LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="autoportretzkrolikiembig" title='Plew'> opis opis <br/> enter</LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="melancholjabig" title='Plew'> opis opis <br/> enter</LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="autoportretbig" title='Plew'> opis opis <br/> enter</LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="wedrowiec" title='Plew'> opis opis <br/> enter</LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="reminiscencje" title='Plew'> opis opis <br/> enter</LookArt>
      </FadeInSection>
      <FadeInSection>
        <Bio />
      </FadeInSection>
      <FadeInSection>
        <ContactForm formKey={props.formKey}/>
      </FadeInSection>

      <Footer />
    </div>
  );
}

export default Home;


export const getStaticProps = async () => {


  return {
    props: {
      formKey: process.env.NEXT_PUBLIC_ENDP,
    },
  };
};