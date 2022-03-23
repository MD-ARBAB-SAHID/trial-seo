import Head from "next/head";
import WhoAreWe from "../../components/AboutUs/AboutUs";
const AboutUsPage = ()=>{
   return( <>
 <Head>
    
        <title>TEKMentors | About </title>
        <meta name="description" content="We, TEKMentors, are a small group of IIT and IIM alumni who have a unique blend of practitioners – who have spent significant time working within IT organizations and who understand the needs of the technocrats and organizations.We enable minds to learn, aspire and progress through technology, engineering & knowledge to explore new possibilities in the digitally disrupted world." />
        <meta name="keywords" content="technology, IT , digital,organizations , technocrats , engineering , knowledge,digitally,IIT,IIM" />
      </Head>
        <WhoAreWe />
    </>)
}
export default AboutUsPage