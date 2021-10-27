import React from 'react';
import img1 from '../../../images/doctors/main1.jpg'
import img2 from '../../../images/doctors/main2.jpg'
import img3 from '../../../images/doctors/main3.jpg'
import img4 from '../../../images/doctors/main4.jpg'

const Doctors = () => {
    return (
        <div>
            <h2>Doctor</h2>
            <div class="row row-cols-1 row-cols-md-2 g-4">

             <div class="col">
                <div class="card">
                <img src={img2} alt="" />
                <div class="card-body">
                            <h5 class="card-title">Dr.beldon</h5>
                            
                            <p>beladon@gmail.com</p>
                            <p>5678934023</p>
                            <p>4523, ceint clair river,USA</p>
                            
                </div>
                </div>
            </div>


            <div class="col">
                <div class="card">
                <img src={img1} alt="" />      
                <div class="card-body">
                            <h5 class="card-title">Dr Merina.den</h5>
                             <p>merinaden@gmail.com</p>
                            <p>5475868397</p>
                            <p>1701,Red Bud Ln,USA</p>
                </div>
                </div>
            </div>
           
                
             <div class="col">
                <div class="card">
                    <img src={img4} alt="" />
                <div class="card-body">
                            <h5 class="card-title">Dr.ana khan</h5>
                             <p>anakhan@gmail.com</p>
                            <p>76035634056</p>
                            <p>1270,peach St,USA</p>
                </div>
                </div>
            </div>


            <div class="col">
                <div class="card">
                <img src={img3} alt="" />      
                <div class="card-body">
                            <h5 class="card-title">Dr. Jhonathos swift</h5>
                             <p>jhonathos@gmail.com</p>
                            <p>72969340763</p>
                            <p>141,Route 125,USA</p>
                </div>
                </div>
                </div>
                
            
            
         </div>
        </div>
    );
};

export default Doctors;