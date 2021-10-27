import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import './about.css';


const About = () => {
    return (
        <div>                      
             <div className="row container-fluid">

             <h2 className="fw-bolder">About us</h2>
            <Bounce left>
                 <p>The Sibsha Hospital is a nonprofit American academic medical center focused on integrated health care, education, and research. </p>
           </Bounce>
           <Bounce left>
                 <p>Search Dental and eye treatment Clinic In New York, Top Results From Trusted Resources. Search Dental and eye Clinic In New York, Get Expert Advice and Curated Content on Searchley. Explore the Best Info Now. 100+ Unique Results. Find All Info You Want. Quick Answers. Useful & Relevant.</p>
           </Bounce>
           <Zoom right>
           <h1 className=" mt-5">More about us</h1>
           </Zoom>
                <h1 className="fw-bolder mt-3">Why Choose Sibsha Hospital?</h1>
                {/* <p className="fw-bolder fs-5">
                    More experience
                 </p> */}
                


 <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-3 col-md-2 col-sm-12">
                     <h3>More experience </h3>
                     <p>Every year, more than a million people come to Mayo Clinic for care. Our highly specialized experts are deeply experienced in treating rare and complex conditions.</p>
                    </div>

                    <div className="col-lg-3 col-md-2 col-sm-12">
                     <h3 className="me-5">The right answers</h3>
                            <p>
                              Successful treatment starts with an accurate diagnosis, and our experts take the time to get it right. A team of specialists will listen to your needs and evaluate your condition from every angle to make the very best plan for you.  
                        </p>
                    </div>


                    <div className="col-lg-3 col-md-2 col-sm-12">
                     <h3 className="ms-3">Seamless care</h3>
                    <p>At sibsha hospital, every aspect of your care is coordinated and teams of experts work together to provide exactly the care you need. What might take months elsewhere can often be done in days here.</p>
                    </div>

                    <div className="col-lg-3 col-md-2 col-sm-12">
                     <h3 className="ms-3">Unparalleled expertise</h3>
                            <p>
                                sibsha hospital experts are some of the best in the world. In the U.S. News & World Report rankings of top hospitals,sibsha hospital is consistently ranked among the top hospitals in the nation.
                    </p>
                    </div>
                    
                    
                    
                </div>
                </div>

                 <button className="mb-5 mt-5 w-25 m-auto fw-bolder btn">More About Us</button>
             </div> 
            </div> 
                        
    );
};

export default About;