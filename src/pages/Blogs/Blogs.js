import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import './Services.css'
import spinner from '../../assets/spinner.gif'
import ReactPaginate from 'react-paginate';
import './Blogs.css'



const Blogs = () => {
    const [services, setServices] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    const [filter, setFilter] = useState('')
    const size = 10;


    useEffect(() => {
        fetch(`https://afternoon-meadow-22769.herokuapp.com/blogs?page=${page}&&size=${size}&&filter=${filter}`)
            .then(res => res.json())
            .then(data => {
                setServices(data.blogs)
                const count = data.count;
                const pageNumber = Math.ceil(count / size)
                setPageCount(pageNumber)
            })
    }, [page, filter])


    const handlePageChange = (data) => {
        setPage(data.selected);
    }
    const handleSelectValue = (e) => {
        setFilter(e.target.value.toLowerCase())
    }


    return (
        <div className="bg-dark">
            <div className="row py-3 ">
            <div className="d-flex mx-auto justify-content-center ">  <div>  <h3 className="k mx-3 text-white ">Please Choose Your Category</h3></div>
                <div className="select">
                    <select onChange={handleSelectValue} className="pending p-1 px-5 bg-primary text-white h5 rounded">
                        <option defaultValue=''>All</option>
                        <option defaultValue="air">Air</option>
                        <option defaultValue="cruise">cruise</option>
                        <option defaultValue="road">road</option>
                    </select>
                </div></div>

            </div>
            <h2>{services?.desc}</h2>
            <div className="container text-black mt-5 pb-4" >
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services?.length === 0 ?
                            <div className=" justify-content-center w-100 d-flex">
                                <img src={spinner} alt="" />
                            </div>
                            :

                            services?.map(service => <div className="col" key={service._id} >
                                <div className="card custom-cart h-100 hover">
                                    <img src={service.img} className="img-fluid rounded-start w-100" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title mb-3 text-danger text-center"> {service.place}</h4>
                                        <h6 className="card-text"> <span className="text-primary">Location:</span> {service.location}</h6>
                                        <h6 className="card-text"><span className="text-primary">Transportation:</span> {service.transportation}</h6>
                                        <h6 className="card-text"><span className="text-primary">Date And Time :</span> {service.time}</h6>
                                        <br />
                                        <p className="card-text text-justify">{service.desc}</p>

                                    </div>
                                    <div className="card-footer  text-center">
                                        <h3 className="text-danger p-2 my-2">Price : {service.price}</h3>
                                        <NavLink to={`/blogs/${service._id}`} className="btn btn-primary btn-lg text-light   rounded btn-block">Blog Details</NavLink>

                                    </div>
                                </div>
                            </div>)
                    }

                </div>

                <div className="d-flex mt-5">
                    <div className='mx-auto'>


                        <ReactPaginate
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            marginPagesDisplayed={3}
                            pageRangeDisplayed={3}
                            pageCount={pageCount}
                            onPageChange={handlePageChange}
                            containerClassName='pagination'
                            pageClassName='page-item'
                            pageLinkClassName='page-link'
                            previousClassName='page-link'
                            nextClassName='page-link'
                            breakClassName='page-item'
                            breakLinkClassName='page-link'
                            activeClassName='active'
                        />

                    </div>
                </div>
            </div >
        </div>
    );
};

export default Blogs;