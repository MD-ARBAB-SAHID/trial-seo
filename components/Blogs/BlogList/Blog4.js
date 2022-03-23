import BlogContent from "../BlogTemplate/BlogContent";
import BlogDescription from "../BlogTemplate/BlogDescription";
import BlogImage from "../BlogTemplate/BlogImage";
import BlogSec1 from "../BlogTemplate/BlogSec1";
import BlogSec2 from "../BlogTemplate/BlogSec2";
const Blog3 = () => {
  return (
    <div id="blog-details">
    <BlogSec1 heading={"Building Value Delivery Teams"} author={"Dev P. Yadav"} date={"March 21 2022"}/>
      <BlogSec2 >
        <BlogDescription>
          <p>
          A few simple steps to build value delivery teams that can create the right impact for the business and its customers.
          </p>
        
        </BlogDescription>
        <div >
            <BlogImage src="https://tekmentors.s3.ap-south-1.amazonaws.com/blogs/teamwork.jpg" alt="Building Value Delivery Teams"/>
        
           <BlogContent >
           <h3>1. Ensure there is team alignment to business goals</h3>
        <p>
        Link the organization goals to team outcomes. Define the monthly experiments that the team is going to be working upon to produce the features. And agree on ways to measure team progress.
        </p>
       
           </BlogContent>
           <BlogContent>
               <h3>2. Provide support from the top</h3>
               <p>
               Once there is alignment between business goals and team outcomes, provide autonomy to the teams to carry out safe-to-learn experiments, supporting the team with minimal guard rails. Provide pyschological safety and remove the impediments to team progress.
               </p>
            
           </BlogContent>
           <BlogContent>
               <h3>3. Build multi disciplinary teams to reduce handoffs.</h3>
               <p>Start with small teams working on small slices of value needing small investments. Ex: The payments teams working on supporting the integration with the payment gateway.</p>
               <p>This way the time to learning, the time to deliver the outcomes and create the impact is sooner.</p>
         
           </BlogContent>
           <BlogContent>
               <h3>4. Define teams&#39;s ways of working </h3>
               <p><li>Identify the customer Value stream - from concept to cash</li> </p>
               <p><li>Visualize the flow of work for the team</li></p>
               <p><li>Build and measure in small, frequent learning cycles</li></p>
               <p><li>Aim to constantly improve the flow of work</li></p>
               <p><li>Optimize for Value delivery</li></p>
              
      
           </BlogContent>
           <BlogContent>
               <h3>5. Ensure decision making happens closer to the work</h3>
               <p>Empower team to take its own decisions not only on what to work but how to work and deliver value. This leads to sustainable pace, higher quality and improved team engagement.</p>
              
              
             
           </BlogContent>
           <BlogContent>
               <h3>6. Discover what the customer values through short feedback loops</h3>
               <p>The learning through customer feedback provides insights into the delivery and operational performance so that teams build the right thing in the right way.</p>
              
           </BlogContent>
          
       
        </div>
      </BlogSec2>
    </div>
  );
};
export default Blog3;
