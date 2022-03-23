import Styles from "./Contact.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = ()=>{

    return (
        <div className={Styles["contact2"]}  id="contact">
  <div className="container">
    <div className={`row ${Styles["contact-container"]}`}>
      <div className="col-lg-12">
        <div className={`card ${Styles["card-shadow"]} border-0 mb-4`}>
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-box p-4">
                <h1 className={`title ${Styles["heading"]}`}>Contact Us</h1>
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input className="form-control" type="text" placeholder="name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input className="form-control" type="text" placeholder="email" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input className="form-control" type="text" placeholder="phone" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input className="form-control" type="text" placeholder="location" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-3">
                       
                        <textarea className="form-control" rows="5" placeholder="message" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className={`btn ${Styles["btn-danger-gradiant"]} mt-3 mb-3 text-white border-0 py-2 px-3`} onClick={()=>{window.alert("Your message Successfully sent")}}><span> SUBMIT NOW <i className="ti-arrow-right"></i></span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className={`col-lg-4 ${Styles["bg-image"]}`} >
              <div className={`${Styles["detail-box"]} p-4`}>
                <h5 className="text-white font-weight-light mb-3">ADDRESS</h5>
                <p className="text-white op-7">91 Springboard Business Hub Pvt Ltd,
                  <br />90b Delhi - Jaipur Expressway,Sector 18, Gurugram - 12001,
                  <br />Haryana, India</p>
                <h5 className="text-white font-weight-light mb-3 mt-4">CALL US</h5>
                <p className="text-white op-7">+91-9958777467,
                  <br />+91-9560309998</p>
                <div className={`${Styles["round-social"]} light`}>
                
                  <a href="https://twitter.com/MentorsTek" className="text-decoration-none text-white ">
                  <FontAwesomeIcon icon={faTwitter} style={{width:"2em",height:"3em"}}/>
                  </a>
                  <a href="https://www.linkedin.com/company/tekmentors/" className="text-decoration-none text-white ">
                  <FontAwesomeIcon icon={faLinkedin} style={{width:"2em",height:"3em"}}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default Contact;