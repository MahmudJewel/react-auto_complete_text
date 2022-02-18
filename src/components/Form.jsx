import "../assets/form.css";
// import EventHandling from "./EventHandling";
import ApiText from "./ApiText";

import { useState, useEffect } from "react";

const Form = () => {
  // const {changingText, values} = EventHandling();
  const {searchCountries, loadApi, countryMatches, countries} = ApiText();

  // useEffect(() => {
  //   loadApi();
  // }, []);

  console.log("all: ", countries);
  return (
    <div>
      {/* <form onSubmit=""> */}
      <div className="container d-flex justify-content-center pt-5">
        <div className="card mt-4 col-md-8 shadow card-style">
          <div className="card-title mt-3 ">
            <h2 className="text-success text-center">Auto Complete Text </h2>
          </div>
          <div className="card-body col-md-8 m-auto">
            <div className="mb-4">
              <input
                className="form-control text-center p-2"
                type="text"
                placeholder="Enter country name"
                name="text"
                onChange={(e) => searchCountries(e.target.value)}
              />
            </div>
            <div>{/* Hello */}</div>
          </div>
        </div>
      </div>
      {countryMatches &&
        countryMatches.map((item, index) => (
          <div key={index} className="container pt-1 d-flex justify-content-center">
            <div className="card mt-1 col-md-6 shadow ">
              <h3 className="text-center">{item.name.common}</h3>
            </div>
          </div>
        ))}

      {/* </form> */}
    </div>
  );
};

export default Form;
