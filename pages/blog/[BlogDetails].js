
import Head from "next/head";
import { useRouter } from 'next/router'
import Blog1 from "../../components/Blogs/BlogList/Blog1";
import Blog2 from "../../components/Blogs/BlogList/Blog2";
import Blog3 from "../../components/Blogs/BlogList/Blog3";
import Blog4 from "../../components/Blogs/BlogList/Blog4";
import LazyLoader from "../../components/UI/LazyLoader/LazyLoader"
const BlogDetails = ()=>{

    const router = useRouter()
  const blogNo  = router.query.BlogDetails;
 
        if(blogNo==="Blog1")
        {
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
        else if(blogNo==="Blog2")
        {
            return (<>
                  <Head>
                <title>TEKMentors | From surviving to thriving in a Digitally Powered World  the Old Economy Way</title>
                <meta name="description" content="This Blog is about how digitalization has changed the whole world." />
                <meta name="keywords" content="Technology, Digital ,world , Economy , Operation  , Skills,Summary,Business" />
                <meta name="author" content="Dev P. Yadav" />
              </Head>
            <Blog2/>
            </>)
        }
        else if(blogNo==="Blog3")
        {
            return (<>
                <Head>
              <title>TEKMentors | Operating Model in Industrial Age 4.0</title>
              <meta name="description" content="This Blog is about the operating model which has been used in the industries in modern era." />
              <meta name="keywords" content="Technology, Digital , Consulting , Leadership , Business , AI , Skills ,Planning,learning,Summary,industry" />
              <meta name="author" content="Dev P. Yadav" />
            </Head>
          <Blog3/>
          </>) 
        }
        else if(blogNo==="Blog4")
        {
            return (<>
                <Head>
              <title>TEKMentors | Building Value Delivery teams</title>
              <meta name="description" content=" A few simple steps to build value delivery teams that can create the right impact for the business and its customers." />
              <meta name="keywords" content="Business,Customers,Leadership,Team Lead,Leader,Teams" />
              <meta name="author" content="Dev P. Yadav" />
            </Head>
          <Blog4/>
          </>) 
        }
       return (<LazyLoader />)
    
}
export default BlogDetails;