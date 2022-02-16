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
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <SietHeader />
      <FadeInSection>
        <LookArt fileName="plewbig" title="Plew" id='art' >
         
          Z cyklu „Czarne słońca, czarna żółć”
          <br />
          <br />
          80x100 cm
          <br />
          <br />
          farba olejna na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="gnoznezjabig" title="Gnoznezja">
        
          Z cyklu „Czarne słońca, czarna żółć”
          <br />
          <br />
          100x140 cm
          <br />
          <br />
          farba olejna na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="jest_superbig" title="Jest super">
          
          Z cyklu „Czarne słońca, czarna żółć”
          <br />
          <br />
          110x140 cm
          <br />
          <br />
          farba olejna na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="matkabig" title="Matka">
        Z cyklu „Czarne słońca, czarna żółć”
          <br />
          <br />
          46x55 cm
          <br />
          <br />
          farba olejna na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="autoportret-z-maskamibig" title="Autoportet z maskami">
        Z cyklu „Czarne słońca, czarna żółć”
          <br />
          <br />
          100x70 cm
          <br />
          <br />
          farba olejna na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="melancholikbig" title="Melancholik">
        Z cyklu „Czarne słońca, czarna żółć”
          <br />
          <br />
          60x80 cm
          <br />
          <br />
          farba olejna na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="miłoscbig" title="Miłość">
          Z cyklu „Czarne słońca, czarna żółć”
          <br />
          <br />
          70x100 cm
          <br />
          <br />
          farba olejna na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="autoportretzkrolikiembig" title="Autoportret z królikiem">
          Z cyklu „Czarne słońca, czarna żółć”
          <br />
          <br />
          60x80 cm
          <br />
          <br />
          farba olejna na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="melancholjabig" title="Melancholja">
          Z cyklu „Czarne słońca, czarna żółć”
          <br />
          <br />
          200x140 cm
          <br />
          <br />
          farba olejna na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="autoportretbig" title="Autoportret">
          Z cyklu „Czarne słońca, czarna żółć”
          <br />
          <br />
          60x50 cm
          <br />
          <br />
          farba olejna na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="wedrowiec" title="Wędrowiec">
          Z cyklu „Czarne słońca, czarna żółć”
          <br />
          <br />
          100x140 cm
          <br />
          <br />
          farba olejna na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName="reminiscencje" title="Reminiscencje">
          Z cyklu „Czarne słońca, czarna żółć”
          <br />
          <br />
          140x180 cm
          <br />
          <br />
          farba olejna na płótnie
        </LookArt>
      </FadeInSection>
      
        <Bio />
      
        <ContactForm formKey={props.formKey} />
      

      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  return {
    props: {
      formKey: process.env.NEXT_PUBLIC_ENDP,
    },
  };
};
