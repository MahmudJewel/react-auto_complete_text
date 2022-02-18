// no need fo this app 


import { useState } from "react";

const EventHandling = () =>{
    const initial = {text:""};
    const [values, setValues] = useState(initial);
    
    const changingText = (e) =>{
        const {name, value} = e.target;
        setValues({
            ... values,
            [name]:value,
        })
        // console.log('you entered', values);
    }

    return {changingText, values};
}

export default EventHandling;