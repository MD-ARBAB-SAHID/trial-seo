import Head from "next/head"
import Blog1 from "../../components/Blogs/BlogList/Blog1";
const BlogDetails = ()=>{
    return (
        <>
        <Head>
        <title>TEKMentors | Accelerating the Digital journey from the Old to the New Economy in the post Covid era</title>
        <meta name="description" content="This Blog is about how the digital journey has  accelarated after the covid era." />
        <meta name="keywords" content="Technology,Digital,Economy,Covid,Corona,Organizations,post covid,Company" />
        <meta name="author" content="Dev P. Yadav" />
      </Head>
    <Blog1/>
    </>
    )
}

export default BlogDetails;