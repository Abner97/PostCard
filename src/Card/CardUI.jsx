import React from "react";
import img1 from "../assets/panama.jpg";
import "./card-style.css";

const Card = (props) => {
  return (
    <div class="d-flex w-100  justify-content-center align-items-center">
      <div class="card  h-75 w-75 mb-3">
        <div class="row  d-flex h-100  no-gutters justify-content-center">
          <div class=" d-flex w-50 align-items-center view  ">
            <img
              src={img1}
              class="card-img-top w-100 h-100"
              alt="Card image cap"
            ></img>
          </div>

          <div class=" card-body  ">
            <h1 class="card-title">Saludos desde Panamá  <i
              class="em em-flag-pa"
              aria-role="presentation"
              aria-label="Panama Flag"
            ></i></h1>
           
            {/* <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p> */}
            <form>
              <div class="form-group row">
                <label for="text" class="col-sm-5 col-form-label">
                  From: Abraham
                </label>
            </div>
            <div class="form-group row">
                <label for="text" class="col-sm-1 col-form-label">
                  To: 
                </label>
                <input type="text" class="col-sm-6 form-control" placeholder="Fulano"></input>
            </div>
              <div class="form-group">
                
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="11"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
