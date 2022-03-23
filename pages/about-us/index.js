import Head from "next/head";
import WhoAreWe from "../../components/AboutUs/AboutUs";
const AboutUsPage = ()=>{
   return( <>
 <Head>
    
        <title>TEKMentors | About </title>
        <meta name="description" content="TEKMentors is a technology consulting and training organization operating within the areas of Engineering excellence, DevOps and Automation, Agile and Quality Engineering. " />
        <meta name="keywords" content="technology, IT , digital,organizations , technocrats , engineering , knowledge,digitally,IIT,IIM" />
      </Head>
        <WhoAreWe />
    </>)
}
export default AboutUsPage