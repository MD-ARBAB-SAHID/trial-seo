import {Navbar,Container,Nav} from "react-bootstrap"
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css';
import Link from "next/link"
import {useRouter} from "next/router"
import Styles from "./navbar.module.css"
const NavBar = ()=>{

  const router = useRouter()
  
  const styleCss = {
    position:"absolute",
    top:"0",
    zIndex:"2",
    width:"100%",
  
  
  
  }
 
const path = router.pathname

    return (
  
 <Navbar collapseOnSelect expand="lg" bg={(path==="/" || path==="/blog" ) ? "":"black"} variant="dark" style={(path==="/" || path==="/blog" )? styleCss :{}} className={Styles.navbar}> 

  <Container>
  <Navbar.Brand className={Styles["navbar-brand"]}><Link href="/" ><a><img  src="/logos/logo.png" className={Styles["logo"]} alt="Logo"/></a></Link></Navbar.Brand>
  <Navbar.Brand className={Styles["navbar-brand"]}><Link href="/" >TEKMentors</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className={`me-auto`}>
 
      
      <Link href="/industries"  >
        <a className={`${Styles["nav-link"]} ${router.pathname==="/industries"  && Styles["active"]}`}>Industries</a>
      </Link>
    

    

      <Link href="/blog"  >
        <a className={`${Styles["nav-link"]} ${router.pathname==="/blog"  && Styles["active"]}`}>Blog</a>
      </Link>


      <Link href="/case-study"  >
        <a className={`${Styles["nav-link"]} ${router.pathname==="/case-study"  && Styles["active"]}`}>Case Study</a>
      </Link>


      <Link href="/contact-us"  >
      <a className={`${Styles["nav-link"]} ${router.pathname==="/contact-us"  && Styles["active"]}`}>Contact Us</a>
      </Link>


      
      <Link href="/about-us"  >
        <a className={`${Styles["nav-link"]} ${router.pathname==="/about-us"  && Styles["active"]}`}>About</a>
      </Link>

    
    </Nav>
 
  </Navbar.Collapse>
  </Container>
</Navbar>

    )
}

export default NavBar;