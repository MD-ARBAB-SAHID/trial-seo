import Slider from "../components/Home/Slider/Slider";
import Section1 from "../components/Home/Section1/Section1";
import Section2 from "../components/Home/Section2/Section2";
import Loader from "../components/UI/Loader/Loader";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>TEKMentors | Home</title>
        <meta name="description" content="TEKMentors is a technology consulting and training organization operating within the areas of Engineering excellence, DevOps and Automation, Agile and Quality Engineering. " />
        <meta name="keywords" content="Technology, Consulting , Training , Engineering , DevOps , Automation , Agile ,Digital,World" />
      </Head>
      <Loader />
      <Slider />
    
      <Section1 />
      <Section2 />
    </>
  )
}
