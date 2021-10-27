import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const ServiceDetails = () => {
    const {serviceId}= useParams();

    const [details, setDetails] = useState([])
    useEffect(()=>{
        fetch('/fakeData.json')
        .then(res=> res.json())
        .then(data=>setDetails(data))
    },[])

     const serviceDetail= details.filter(dt=> dt.id === parseInt(serviceId) );
    
    return (
        
        <div  className="container w-75 h-25 justify-content-center">
            <div className="row col-sm-12">
                {
                    serviceDetail ? (serviceDetail.map(service=>(
                        <div class="card mb-3">
                            <img src={service.image} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">{service.title}</h5>
                                <p class="card-text">{service.description}</p> 
                                <h2>Cost: ${service.cost}</h2>               
                            </div>
                        </div>
                    )
                    )) : <p>Data Not found</p>
                }
            </div>
        </div>
    );
};

export default ServiceDetails;