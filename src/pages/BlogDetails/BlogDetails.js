import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import UseAuth from '../../hooks/UseAuth';
import { Carousel } from 'react-bootstrap';
import Rating from 'react-rating';


const BlogDetails = () => {

    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams({});
    const { allContexts } = UseAuth()
    const { user } = allContexts
    const [selected, setSelected] = useState({});

    const [reviews, setReviews] = useState([])



    useEffect(() => {
        fetch(`https://afternoon-meadow-22769.herokuapp.com/blogs/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setSelected(data)
                reset(data)

            });
    }, [id, reset]);




    useEffect(() => {
        fetch(`https://afternoon-meadow-22769.herokuapp.com/review/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setReviews(data)
                reset(data)

            });
    }, [id, reset]);



    const onSubmit = data => {
        data.blogId = id
        data.userName = user.displayName
        data.email = user.email


        fetch(`https://afternoon-meadow-22769.herokuapp.com/addReview`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)

                alert('order confirmed')
            });

    };



    return (
        <div className=" custom-body  bg-dark ">
            <div className='container p-4 bg-secondary mx-auto row  align-items-center bg-dark '>
                <div className=" col-md-12 bg-dark text-white">
                    <div className="card custom-cart mb-3 bg-dark text-white pt-3">
                        <img src={selected.img} className="card-img-top w-50 mx-auto" alt="..." />
                        <div className="card-body">
                            <h1 className="card-title text-center"> {selected.place}</h1>
                            <p className="card-text"> {selected.desc}</p>
                            <p className="card-text"> <b className="text-primary">Transportation: </b>{selected.transportation}</p>
                            <p className="card-text"><b className="text-primary">Rating : </b>{selected.rating}</p>
                           
                        </div>
                    </div>
                </div>



<section>
    <div className="">
        <div className="row">
        <div className='col-md-6 add-service d-flex '>
            
                    <div className="  text-dark pb-5 pt-1 justify-content-center">
                        <div className="text-center text-danger pt-5 pb-3">
                            <h4 >Customer Reviews</h4>
                        </div>
                        <hr />






   {reviews?.map(
                                    review =>
                                    <li>
                                    <h6 className="color-white text-white"><i class="fas fa-arrow-right"></i> Name : {review?.name}</h6>
                                    <p>{review?.time}</p>
                                    <br />
                                                    <p>  {review?.review}</p>
                                    </li>
   )
}

             
                    </div>
                </div>


                <div className='col-md-6 add-service d-flex justify-content-center'>
               
               <br />
               
                   <form onSubmit={handleSubmit(onSubmit)}
                       className="contact1-form validate-form">
            <h3 className="text-white mb-4">Submit Your Review here</h3>

                       <div className="wrap-input1 validate-input " data-validate="Name is required">
                           <input className="input1 " value={user.displayName} {...register("name")} />
                       </div>

                       <div className="wrap-input1 validate-input" data-validate="Message is required">
                           <textarea className="input1 " placeholder="Description"{...register("review",)} />
                           <span className="shadow-input1"></span>
                       </div><div className="wrap-input1 validate-input " data-validate="Name is required">
                           <input className="input1 " min="1" max="5" placeholder="rating" type="number" {...register("rating")} />
                       </div>

                       <div className="container-contact1-form-btn">
                           <button type='submit' className="contact1-form-btn">
                               <span>
                                   Post Review
                                   <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                               </span>
                           </button>
                       </div>
                   </form>
               </div>
        </div>
    </div>
</section>


              
                
           


            </div >
        </div>
    );
};


export default BlogDetails;

