import Link from "next/link"
import Head from "next/head"
const newsPage = ()=>{
    return (  <>
        <Head>
        <title>React lola</title>
        <meta name="description" content="Browse a huge list of highly active React meetups" />
    </Head>
    <ul>

            <li>
                <Link href="/news/lola">Lola</Link>
            </li>
        </ul>
        </>
    )

}

export default newsPage;