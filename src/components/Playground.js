import Form from "./Form";
import Results from "./Results";
import img from "../couple.jpeg";
import { useState, useEffect } from "react";

const Playground = () => {
    const [ activity, setActivity ] = useState();
    const [userChoice, setUserChoice] = useState(null);
    useEffect(()=>{
        const url = new URL('http://www.boredapi.com/api/activity/')
        console.log(url)
        url.search = new URLSearchParams({
            type: userChoice
        })
        fetch(url)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                console.log(data.activity);
                setActivity(data);
            })
    },[userChoice])

    const selectActivity = (event, chosenActivity ) => {
        event.preventDefault();
        console.log(chosenActivity);
        setUserChoice(chosenActivity);
    }
    return (
        <>
        <Form handleSubmit={selectActivity}/>
        <Results show={activity}/>
        <div>
            <img src={img} />
        </div>
        </>
    );
}

export default Playground;