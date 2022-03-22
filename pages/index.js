import Link from "next/link"
import Head from "next/head"
const Homepage = ()=>{
    return (         <div> 
    <Head>
            <title>React MeetUps</title>
            <meta name="description" content="Browse a huge list of highly active React meetups" />
        </Head>
    
    <Link href="/news/lola">Lola</Link></div>)
}

export default Homepage;