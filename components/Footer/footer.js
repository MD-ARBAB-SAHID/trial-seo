import Styles from "./footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
const Footer = ()=>{
    return (
        <footer className={`w-100 py-4 flex-shrink-0 ${Styles["footer"]}`}>
        <div className="container py-4">
            <div className="row gy-4 ">
                <div className="col-lg-4 col-md-6">
                    <h5 className="h1 text-white">TEKMentors</h5>
                    <p className="small text-muted">Your partner in the digital enablement journey.</p>
                    <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved.</p>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Quick links</h5>
                    <ul className="list-unstyled text-muted">
                        <li>
                        <Link href="/"   ><a className={Styles["footer-link"]}>Home</a></Link>
                        </li>
                        <li><Link href="/about-us" ><a className={Styles["footer-link"]}>About</a></Link></li>
                        <li><Link href="/industries" ><a className={Styles["footer-link"]}>Industries</a></Link></li>
                        <li><Link href="/contact-us" ><a className={Styles["footer-link"]}>Contact Us</a></Link></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Resources</h5>
                    <ul className="list-unstyled text-muted">
                        <li><Link href="/blog" ><a className={Styles["footer-link"]}>Blog</a></Link></li>
                        <li><Link href="/case-study" ><a className={Styles["footer-link"]}>Case Study</a></Link></li>
                        <li><Link href="/terms-of-use" ><a className={Styles["footer-link"]}>Terms Of Use</a></Link></li>
                        
                    </ul>
                </div>
    
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Socials</h5>
                    <ul className="list-unstyled text-muted">
                    
                        <li className={Styles["icon-font"]}>


      
                       <a href="https://twitter.com/MentorsTek" target="_blank" rel="noreferrer" className={Styles["footer-link"]} > <FontAwesomeIcon icon={faTwitter} style={{width:"1em",height:"1em" ,marginRight:"8px" }} />Twitter</a>
                     
                        </li>
                     <li className={Styles["icon-font"]}>  <a  target="_blank" rel="noreferrer" className={Styles["footer-link"]} href="https://www.linkedin.com/company/tekmentors/" > <FontAwesomeIcon icon={faLinkedin} style={{width:"1em",height:"1em",marginRight:"8px" }} />LinkedIn</a></li>
           
                    </ul>
                  
                </div>            <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Recent Blogs</h5>
                    <ul className="list-unstyled text-muted">
                        <li><Link href="/blog/Blog4" ><a className={Styles["footer-link"]}>Building Value Delivery teams</a></Link></li>
                        <li><Link href="/blog/Blog3" ><a className={Styles["footer-link"]}>Operating Model in Industrial Age 4.0</a></Link></li>
                      
                    </ul>
                </div>

            </div>
        </div>
    </footer>
    )
}

export default Footer;
