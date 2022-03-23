import TermsOfUse from "../../components/TermsAndConditions/TermsOfUse"
import  Head  from "next/head"
const TermsOfUsePage = ()=>{
    return(
        <>
        <Head>
          <title>TEKMentors | Terms Of Use</title>
          <meta name="description" content="This Page is related to the TERMS OF USE of TEKMentors' Website." />
          <meta name="keywords" content="Terms, Usage , TEKMentors , Restrictions , Disclaimer , Warranty , Monitoring ,Trademarks,Viruses,Third party" />
        </Head>
        <TermsOfUse />
        
      </>
    )
}
export default TermsOfUsePage