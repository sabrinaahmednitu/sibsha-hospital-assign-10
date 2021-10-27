import React from 'react';
import './contact.css'
import img2 from '../../../images/icon/500_F_183343747_7Rfc2EwYBPJchAJ0SVLuDvHAwZPA9sp6.jpg'
import img1 from '../../../images/icon/500_F_219101232_9gYB191gBUCxTSE455FUkmQB1MioqtVp.jpg'
import img3 from '../../../images/icon/address-concept-illustration_114360-321.jpg'
import img4 from'../../../images/icon/5124556.jpg'
const Contact = () => {
    return (

        <div className="contact-body">
            <h2 className=" pt-5">Contact With Us </h2>
            <div className="card-group pt-3 ">
                <div className="card">
                    <img src={img1}  alt="" />
                    <div className="card-body">
                    <h5 className="card-title">Contact shibsa hospital</h5>
                    <p className="card-text">+1 (514) 367-5678 <br />+1 (514) 735-4704</p>
                    </div>
                </div>
                <div className="card">
                <img src={img2} alt="" />
                    <div className="card-body">
                    <h5 className="card-title">Email Address</h5>
                        <p className="card-text">Sibshahospital@gmail.com <br />
                        Sibsha@gmail.com
                        </p>
                    </div>
                </div>
                <div className="card">
                <img src={img3}  alt="" />
                    <div className="card-body">
                    <h5 className="card-title">Location</h5>
                    <p className="card-text">6890 Blvd, The Bronx, NY 1058 New York,<br />  USA</p>
                    </div>
                </div>
            </div>
            <div className="mt-5" >
                <h5> <p>You can easily contact us at anytime through the above phone number <br /> or email id. <br /> or you can come to the hospital and contact us directly after seeing the  location of the hospital</p></h5>
                <img className="contact-img" src={img4} alt="" />
               
            </div>
      </div>
    );
};

export default Contact;