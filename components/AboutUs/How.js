import Block from "./Block/Block";
import Styles from "./How.module.css"
import WhyUs from "./WhyUs";
import WhatUs from "./What";
const How = () => {
  return (
    <div>
      <Block
        title="How ?"
        description={["We enable corporates, millennials and professionals to solve complex problems using our knowledge, facilitation skills, mentoring, and professional coaching skills. ","Coaching is a set of techniques and practices designed to help the coaches find the answers to their challenges themselves. It has the underlying premise that the coach already knows the answer. Mentoring, however, assumes that the mentor knows more than the mentee and is there to impart wisdom, experience, and knowledge in order for the mentee to succeed."]}


        className={Styles.how}
      />
      <WhyUs />
      <WhatUs />
    </div>
  );
};

export default How;
