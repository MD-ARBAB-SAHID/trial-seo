import { useRouter } from "next/router";
import Head from "next/dist/next-server/lib/head";
const DetailPage = ()=>{
    const router = useRouter();
   
    return(
        <>
          <Head>
        <title>React lola</title>
        <meta name="description" content="Browse a huge list of highly active React meetups" />
    </Head>
        <h1>Detail Page</h1>
        </>
    )
}

export default DetailPage;