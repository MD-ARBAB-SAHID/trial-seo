import Head from "next/head"
import PdfViewer from "../../components/Case Studies/PdfViewer";
import OuterCard from "../../components/UI/OuterCard"
const Homepage = ()=>{
    return (         <div> 
    <Head>
            <title>React TEK ARBAB </title>
            <meta name="description" content="REACT TEK ARBAB " />
     
        </Head>
        <OuterCard>
           
        
          <PdfViewer pdf={"./pdf/RBS.pdf"} pages={2} />
        
      </OuterCard>

    </div>)
}

export default Homepage;