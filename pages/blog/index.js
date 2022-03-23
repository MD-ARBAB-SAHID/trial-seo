import Blog from "../../components/Blogs/Blog";
import Head from "next/head";
const BlogPage = ()=>{
    return (<>
     <Head>

        <title>TEKMentors | Blog </title>
        <meta name="description" content="Thought Leadership on buildng digital strategies, modernizing infrastructure and digitizing the end-user experience" />
        <meta name="keywords" content="Blog,TEKMEentors Blog,TEKMentors,Digital,consulting,technology,DevOps,Automation,CI,CD" />
      </Head>
 <Blog />
    </>
       
    )
}
export default BlogPage;