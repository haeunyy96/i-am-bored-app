import { useState } from 'react';
const Form = ({ handleSubmit }) => {

    const [userSelection, setUserSelection] = useState('');

    const handleChange = (event) => {
        setUserSelection(event.target.value);

    }
    return (
        <form action="" onSubmit={(event) => { handleSubmit(event, userSelection) }}>
            <label className="activityLabel" htmlFor="filtration">Choose a type of activity:</label>
            <br></br>
            <select id="filtration" onChange={handleChange} value={userSelection}>
                <option value="placeholder" disabled>Choose a type of activity:</option>
                <option value="education">Education</option>
                <option value="recreational">Recreational</option>
                <option value="social">Social</option>
                <option value="diy">DIY</option>
                <option value="charity">Charity</option>
                <option value="cooking">Cooking</option>
                <option value="relaxation">Relaxation</option>
                <option value="music">Music</option>
                <option value="busywork">Busywork</option>
            </select>
            <button>GO!</button>
        </form>
    );
}

export default Form;