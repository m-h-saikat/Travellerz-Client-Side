import React from 'react';

import { NavLink } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';
import spinner from '../../../assets/spinner.gif'

const HomeServices = () => {
    const { services } = UseAuth()
    const homeServices = services.slice(0, 6)
    return (
        <div className="py-5">
            <div className="text-center pt-5 pb-3">
                <h3 style={{ fontSize: "60px" }}>Our  Blogs </h3>
            </div>
            <div className="container text-black mt-5 mb-5" >
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {
                        services.length === 0 ?
                            <div className=" justify-content-center w-100 d-flex">
                                <img src={spinner} alt="" />
                            </div>
                            :

                            homeServices?.map(service => <div className="col" key={service._id} >
                                <div className="card custom-cart h-100 p-3 hover">
                                    <img src={service.img} className="img-fluid rounded-start w-100" alt="..." />
                                    <div className="card-body">
                                        <h2 className="card-title text-center">{service.place}</h2> 
                                        <h5>Location : {service.location}</h5>
                                     
                                        <h5>Transportation : {service.transportation}</h5>
                                        <h5>Date & Time : {service.time}</h5>
                                        <br />
                                        <p className="card-text">{service.desc}</p>
                                    </div>
                                    <div className="card-footer  text-center">
                                        <h4 className="p-2 text-danger my-2">Price $: {service.price}</h4>
                                        <NavLink to={`/blogs/${service._id}`} className="btn btn-primary btn-lg  text-light   rounded btn-block"> Blog Details</NavLink>
                                    </div>
                                </div>
                            </div>)
                    }

                </div>
            </div >
        </div>
    );
};

export default HomeServices;