import React, { useEffect, useState } from 'react';
import UseAuth from '../../hooks/UseAuth';
import './AllOrder.css'





const AllOrders = () => {
    const [orders, setOrders] = useState([])
    const { allContexts } = UseAuth()

    const [status, setStatus] = useState('')
    const { user } = allContexts
    useEffect(() => {
        fetch(`https://afternoon-meadow-22769.herokuapp.com/allBlogs`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user?.email]);


    const handleUpdate = (id) => {
        fetch(`https://afternoon-meadow-22769.herokuapp.com/statusUpdate/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        alert('update')
    }

    const handleSelectValue = (e) => {
        const statusData = (e.target.value).toLowerCase()
        setStatus(statusData)
    }



    console.log(orders);
    return (

        < div className="container all-order-container" >
            <div className="text-center pb-3">
                <h1 className="mb-5 text-center pt-5 text-white">Total Blogs <span className="text-danger">{orders.length}</span>  </h1>
            </div>

            <table className="table text-center table-responsive table-secondary" style={{ width: "100%" }}>
                <thead  >
                    <tr className="bg-primary text-dark mb-3 p-2" style={{ border: "1px solid red" }}>

                        <th >Number</th>
                        <th >Place</th>
                        <th >Location</th>
                        <th >Image</th>
                        <th >Price</th>
                        <th >Transportation</th>
                        <th >Status</th>
                        <th >Update</th>
                    </tr>
                </thead>
                {orders?.map((order, index) => (
                    <tbody key={order._id}>
                        <tr role="row" style={{ border: "2px solid gray" }} >
                            <th scope="row">{index + 1}</th>
                            <td>{order.place}</td>
                            <td>{order.location}</td>
                            <td><img style={{ width: "70px", height: "50px" }} src={order.img} alt="" /></td>
                            <td>{order.price}</td>
                            <td>{order.transportation}</td>
                            <td>
                                <div >
                                    <select onChange={handleSelectValue} className="pending p-2 ">
                                        <option defaultValue={order.status}>{order.status}</option>
                                        
                                        <option defaultValue="pending">Cancelled</option>
                                        <option defaultValue="approved">Approved</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleUpdate(order._id)}>update</button>
                            </td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div >











    );
};


export default AllOrders;