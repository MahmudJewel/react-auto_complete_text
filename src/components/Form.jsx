import "../assets/form.css"
import EventHandling from "./EventHandling";
import ApiText from "./ApiText";

import { useEffect } from "react";

const Form = () => {
    const {changingText, values} = EventHandling();
    const {searchCountries, loadApi, countryMatches} = ApiText();

    const print=()=>{
        console.log('Status ok: ', countryMatches);
    }

    useEffect(()=>{
        // print();
        loadApi();
    })

  return (
    <div>
      {/* <form onSubmit=""> */}
        <div className="container d-flex justify-content-center py-5">
          <div className="card mt-4 col-md-8 shadow card-style">
            <div className="card-title mt-3 ">
              <h2 className="text-success text-center">Auto Complete Text </h2>
            </div>
            <div className="card-body col-md-8 m-auto">
            
            <div className="mb-4">
              <input
                className="form-control text-center p-2"
                type="text"
                placeholder="Enter your text"
                name="text"
                onChange={(e)=>searchCountries(e.target.value)}
              />
            </div>
            </div>
          </div>
        </div>
      {/* </form> */}
    </div>
  );
};

export default Form; 