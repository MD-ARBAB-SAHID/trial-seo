import Styles from "./WhoAreWe.module.css";
import Block from "./Block/Block";

const data = [
  {
    title: "Who Are We ?",
    description:
    [ "We, TEKMentors, are a small group of IIT and IIM alumni who have a unique blend of practitioners – who have spent significant time working within IT organizations and who understand the needs of the technocrats and organizations. And we have built detailed understanding of the technologies to impart knowledge to the teams. We specialize in helping others adopt these tools, technologies, processes for some underlying business purpose."],
     
      className:`${Styles["who-are-we"]}`
  },
  {
    title: "Our Vision",
    description:["We enable minds to learn, aspire and progress through technology, engineering & knowledge to explore new possibilities in the digitally disrupted world."],
    className:`${Styles["our-vision"]}`
  },
 {
   title:"Our Philosophy",
   description:[
    "Focus on Outcomes and Impact.",
    "Ask questions rather than giving advice.",
    "Give actionable, specific feedback."

   ],
   className:`${Styles["our-vision"]}`
 }
];
const WhoAreWe = () => {
  return (
    <div >
      {data.map((data, index) => {
        return (
          <Block
            key={index}
            title={data.title}
            description={data.description}
            className={data.className}
          />
        );
      })}
    </div>
  );
};

export default WhoAreWe;
