import Form from "./Form";
import Results from "./Results";
import img from "../couple.jpeg";
import { useState, useEffect } from "react";

const Playground = () => {
    const [activity, setActivity] = useState('');
    const [userChoice, setUserChoice] = useState(null);
    useEffect(()=>{
        const url = new URL('https://www.boredapi.com/api/activity/')
        url.search = new URLSearchParams({
            type: userChoice
        })
        fetch(url)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                setActivity(data);
            })
    },[userChoice])

    const selectActivity = (event, chosenActivity ) => {
        event.preventDefault();
        setUserChoice(chosenActivity);
    }
    return (
        <>
        <Form handleSubmit={selectActivity}/>
        <Results show={activity}/>
        <div className="imgDiv">
            <img src={img} alt="illustration of a couple drinking wine together" />
        </div>
        </>
    );
}

export default Playground;