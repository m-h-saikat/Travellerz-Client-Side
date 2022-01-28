import React, { useState } from 'react';


import CustomerAddToDatabase from './AddToDatabase/CustomerAddToDatabase/CustomerAddToDatabase';
import MyBlogs from './MyBlogs/MyBlogs';


const CustomerDashboard = () => {

    const [active, setActive] = useState('My orders')

    return (
        <div className="row admin bg-dark text-white">
            <div className="d-flex flex-column flex-shrink-0 bg-light vh-100 col-md-1 col-3">
                <ul className="nav nav-pills nav-flush flex-column mb-auto vh-100 text-center bg-dark text-white ">
                    <li className="nav-link py-3 border-bottom text-white" onClick={() => setActive('My orders')}><i class="fas fa-blog"></i><small>My Blogs</small> </li>


                    <li className="nav-link py-3 border-bottom text-white" onClick={() => setActive('AddToDatabase')}> <i className="fas fa-vote-yea"></i><small>Add Blog</small> </li>



                </ul>
            </div>
            <div className="col-md-11 col-9" >
                {
                    (active === 'My orders' && <MyBlogs></MyBlogs>) ||


                    (active === 'AddToDatabase' && <CustomerAddToDatabase></CustomerAddToDatabase>)


                }
            </div>
        </div>
    );
};

export default CustomerDashboard;