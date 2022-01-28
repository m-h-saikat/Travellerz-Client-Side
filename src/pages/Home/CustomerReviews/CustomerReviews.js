import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Rating from 'react-rating';
import './CustomerReviews.css'


const CustomerReviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`https://afternoon-meadow-22769.herokuapp.com/allReviews`)
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <div className="  text-white pb-5 pt-1 p-5 bg-dark">
            <div className="text-center pt-5 pb-3">
           
                <h2 className="mx-auto text-center About-header py-3 " >Customer Reviews</h2>

            </div>
      
            <Carousel>
                {
                    reviews?.map(
                        review =>
                            <Carousel.Item key={review._id}>
                                <div className=" bg-secondary d-flex justify-content-center py-3 px-5 text-center review-slider rounded ">
                                    <div className="w-50">
                                     
                                        <h3 className="color-white">{review?.name}</h3>
                                        <br />
                                        <p>  {review?.review}</p>

                                        <Rating className="star"
                                            initialRating={Number(review.rating)}
                                            emptySymbol="far fa-star icon-color"
                                            fullSymbol="fas fa-star icon-color"
                                            readonly></Rating>
                                    </div>
                                </div>
                            </Carousel.Item>
                    )
                }

            </Carousel>

        </div>
    );
};

export default CustomerReviews;