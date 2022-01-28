import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';
import spinner from '../../../assets/spinner.gif'

const HomeServices = () => {
    const { services } = UseAuth()
    const homeServices = services.slice(0, 6)
    return (
        <div className="bg-dark pb-2">
            <div className="text-center pt-5 pb-3 ">
            <h2 className="mx-auto text-center About-header py-3 " >Our Most Demandable Blogs</h2>
            </div>
            <div className="container text-black mt-5 mb-3" >
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
                                        <h3 className="card-title text-danger text-center">{service.place}</h3> 
                                        <h5><span className="text-primary">Location :</span> {service.location}</h5>
                                     
                                        <h5><span className="text-primary">Transportation : </span>{service.transportation}</h5>
                                        <h5><span className="text-primary">Date & Time :</span> {service.time}</h5>
                                        <br />
                                        <p className="card-text">{service.desc}</p>
                                    </div>
                                    <div className="card-footer  text-center">
                                        <h4 className="p-2 text-danger my-2">Price : {service.price}</h4>
                                        <NavLink to={`/blogs/${service._id}`} className="btn btn-primary  text-light   rounded btn-block"> Blog Details</NavLink>
                                    </div>
                                </div>
                            </div>)
                    }

                </div>
            </div >
           <div className="text-center"> <Nav.Link as={NavLink} to="/blogs"><h3><button className="btn btn-success">Explore More Blogs  <i class="fas fa-angle-double-right"></i><i class="fas fa-angle-double-right"></i><i class="fas fa-angle-double-right"></i></button> </h3></Nav.Link></div>
        </div>
    );
};

export default HomeServices;