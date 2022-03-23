import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/footer"
import Head from "next/head";
const Layout =(props)=>{
    return(
        <>
  <Head>
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/faviconfavicon-16x16.png" />
<link rel="manifest" href="/favicon/site.webmanifest" />

  </Head>
        <NavBar />
        <div>
     
            {props.children}
        </div>
        <Footer />
        </>
    )
}


export default Layout;