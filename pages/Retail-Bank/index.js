import Head from "next/head"
import PdfViewer from "../../components/Case Studies/PdfViewer";
import OuterCard from "../../components/UI/OuterCard"
const CaseDetails = ()=>{
    return (         <> 
    <Head>
    <title>
              TEKMentors | RETAIL BANK CASE STUDY
            </title>
            <meta
              name="description"
              content="Large bank within Middle East formed after merger of a Retail and a Digital bank ."
            />
            <meta
              name="keywords"
              content="Middle East, Consulting , Retail Bank , Technology , Banking Architecture , DevOps ,Cloud "
            />
        </Head>
        <OuterCard>
           
        
          <PdfViewer pdf={"/pdf/Bank.pdf"} pages={3} />
        
      </OuterCard>

    </>)
}

export default CaseDetails;