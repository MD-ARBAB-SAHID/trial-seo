import { useEffect, useState } from "react"
import BlogCard from "./BlogCard"
import Styles from "./BlogFooter.module.css"
const Arr = ([
    {   id:"Blog4",
    heading:"Building Value Delivery teams",
    author:"Dev P. Yadav",
    date:"March 21 2022"
},   
{   id:"Blog3",
    heading:"Operating Model in Industrial Age 4.0",
    author:"Dev P. Yadav",
    date:"February 6 2021"
},
{   id:"Blog2",
    heading:"From surviving to thriving in a Digitally Powered World - the Old Economy Way",
    author:"Dev P. Yadav",
    date:"January 22 2021"
},
{   id:"Blog1",
    heading:"Accelerating the Digital journey from the Old to the New Economy in the post Covid era",
    author:"Dev P. Yadav",
    date:"December 15 2020"
}

])

const buttonsArr = [
    {
        id:1,
        
    },
    {
        id:2
    }
]
const BlogList = ()=>{
    const [page,setPage] = useState(1);
    const [blogArr,setBlogArr] = useState([]);
    useEffect(()=>{
            
            const startingIndex = 3*page-3;
            const endingIndex = 3*page;
          
            const filteredArray = Arr.filter((blog,index)=>{
                return index>=startingIndex && index<endingIndex
            })
            setBlogArr(filteredArray);
           
    
   
    },[page])
 
return (
    <>
    <div className={Styles["blog-list"]}>
    {
        blogArr.map((blog,index)=>{
            return <BlogCard author={blog.author} id={blog.id} date={blog.date} key={index} heading={blog.heading} />
        })
    
    }
    </div>
    <div  className={Styles["button-list"]}>
       {
           buttonsArr.map((b,index)=>{
               return (<button key={index}  onClick={()=>{setPage(b.id)}} className={`${Styles.actions} ${page===b.id && Styles["actions-active"]}`}>{b.id}</button>)
           })
       }
    </div>
    </>
)
}


export default BlogList