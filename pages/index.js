import Link from "next/link"
import Head from "next/head"
import PdfViewer from "../components/PdfViewer";
import OuterCard from "../components/OuterCard"
const Homepage = ()=>{
    return (         <div> 
    <Head>
            <title>React TEK ARBAB </title>
            <meta name="description" content="REACT TEK ARBAB " />
     
        </Head>
        <OuterCard>
           
        
          <PdfViewer pdf={"./RBS.pdf"} pages={2} />
        
      </OuterCard>

    </div>)
}

export default Homepage;