import { useState } from "react";
// import default react-pdf entry
import { Document, Page, pdfjs } from "react-pdf";
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from "../pdf-worker";
import Styles from "./PdfViewer.module.css"
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer(props) {
    const {pages,pdf} = props;

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
 const changePageInc = ()=>{
     setPageNumber((prev)=>prev+1);
 }
 const changePageDec = ()=>{
    setPageNumber((prev)=>prev-1);
}

    return (
    
     <div className={Styles["pdf-view"]}>
  <Document
    file={pdf}
    onLoadSuccess={onDocumentLoadSuccess}
  
   
    
  >

    <Page pageNumber={pageNumber} className={Styles["pages"]}  />
    <p>Page {pageNumber} of {numPages}</p>
  
  </Document>
  <div className={Styles["actions"]}>
  {pageNumber!==1 && <button className={Styles["previous"]} onClick={changePageDec} >Previous</button>}
  {pageNumber!==pages && <button className={Styles["next"]} onClick={changePageInc} disabled={pageNumber===pages && true}>Next</button>}
  </div>

</div>
   
  
     
    );

 
}
