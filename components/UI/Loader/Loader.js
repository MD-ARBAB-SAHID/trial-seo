
import Image from "next/image";
import { useEffect } from "react";
const Loader = ()=>{
    useEffect(()=>{
        const timer = setTimeout(function() {
            document.getElementById("loader").classList.add("disp-none")
          }, 1800);
          return () => {
            clearTimeout(timer);
        }
    },[])

    return(
        <div id="loader" >
        <div className="loader" ><img src="https://tekmentors.com/wp-content/themes/tech-new/images/logo-n.png" alt="Loading "/></div>
        </div>
    )
}
export default Loader;