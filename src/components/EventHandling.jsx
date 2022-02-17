

const EventHandling = () =>{
    const changingText = (e) =>{
        console.log('you entered', e.target.value);
    }

    return {changingText};
}

export default EventHandling;