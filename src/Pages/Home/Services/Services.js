import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {

    const [serviecs, setServices] = useState([])

    useEffect(()=>{
        fetch('/fakeData.json')
        .then(res=> res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div className="container-fluid mt-5">
            <h1 className="fw-bolder" style={{color:"#9892da"}}>Health Care Services</h1>
         
            <div className="row pb-5">
                    {
                            serviecs?.map((service, index) => <ServiceCard
                            services={service}
                            key={index}
                            
                            ></ServiceCard>)
                    }
            </div>
          
        </div>
    );
};

export default Services;