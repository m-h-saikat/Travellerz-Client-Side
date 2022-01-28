import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../hooks/UseAuth";
import "./AddToDatabase.css";

const AddToDatabase = () => {
  const { allContexts } = UseAuth();
  const { user } = allContexts;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.userName = user.displayName;
    data.email = user.email;
    data.status = "approved";
    axios
      .post("https://afternoon-meadow-22769.herokuapp.com/blogs", data)

      .then((res) => {
        if (res.data.insertedId) {
          alert("Added to Database successfully");
          reset();
        }
      });
  };

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const addZero = (num) => `${num}`.padStart(2, "0");

  const formatted =
    year +
    "-" +
    addZero(month + 1) +
    "-" +
    addZero(day) +
    " " +
    addZero(hours) +
    ":" +
    addZero(minutes);

  return (
    <div className="add-service">
      <div className="contact1">
        <div className="container-contact1 bg-dark text-white">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="contact1-form mx-auto validate-form"
          >
            <span className="contact1-form-title text-white">Add New Blog</span>

            <div
              className="wrap-input1 validate-input"
              data-validate="place is required"
            >
              <input
                className="input1"
                placeholder="Name"
                {...register("place", { required: true })}
              />
              <span className="shadow-input1"></span>
            </div>

            <div className="wrap-input1 validate-input" data-validate="url">
              <input
                className="input1"
                placeholder="Image URL"
                {...register("img")}
              />
              <span className="shadow-input1"></span>
            </div>
            <div
              className="wrap-input1 validate-input"
              data-validate="location is required"
            >
              <input
                className="input1"
                placeholder="Location"
                {...register("location", { required: true })}
              />
              <span className="shadow-input1"></span>
            </div>

            <div
              className="wrap-input1 validate-input"
              data-validate="rating is required"
            >
              <input
                className="input1"
                placeholder="Rating"
                type="number"
                {...register("rating")}
              />
              <span className="shadow-input1"></span>
            </div>
            <div
              className="wrap-input1 validate-input"
              data-validate="Subject is required"
            >
              <input
                className="input1"
                placeholder="Price"
                type="number"
                {...register("price")}
              />
              <span className="shadow-input1"></span>
            </div>

            <div
              className="wrap-input1 validate-input"
              data-validate="Message is required"
            >
              <textarea
                className="input1"
                placeholder="Description"
                {...register("desc")}
              />
              <span className="shadow-input1"></span>
            </div>

            <div
              className="wrap-input1 validate-input "
              data-validate="Name is required"
            >
              <input
                className="input1 "
                value={formatted}
                {...register("time")}
              />
            </div>

            <h3>Category:</h3>
            <br />

            <input
              {...register("transportation", { required: true })}
              type="radio"
              value="air"
            />
            <label htmlFor="">air</label>

            <hr />
            <input
              {...register("transportation", { required: true })}
              type="radio"
              value="cruise"
            />
            <label htmlFor="">Cruise</label>

            <hr />
            <input
              {...register("transportation", { required: true })}
              type="radio"
              value="road"
            />

            <label htmlFor="">road</label>

            <div className="container-contact1-form-btn">
              <button type="submit" className="contact1-form-btn">
                <span>Send Data</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToDatabase;

<input />;
