import './App.css'
import React, {useState} from 'react';

const App = () => {
    const [userdata, setuserdata] = useState({});
    const inputEvent = (event) => {
        const {value, name} = event.target;

        setuserdata((preValue) => {
            return{
                ...preValue,
                [name]: value,
            }
        })
    }
    const submition = (event) => {
        event.preventDefault();
        alert('Form Submited');
    }
    
    return (
        <> <div>
                <form onSubmit={submition}>
                    <h1>Hello {userdata.name}</h1>  
                    <input type='text' name='name' onChange={inputEvent} value={userdata.name} placeholder='Enter Name' />
                    <input type='password' name='password' onChange={inputEvent} value={userdata.password} placeholder='Enter Password' />
                    <input type='email' name='email' onChange={inputEvent} value={userdata.email} placeholder='Enter Email' autoComplete='false' />
                    <input type='number' name='age' onChange={inputEvent} value={userdata.age} placeholder='Enter Age' />
                    <input type='date' name='b-date' onChange={inputEvent} value={userdata.birth} placeholder='Enter Birthdate' />
                    <button type='submit'>Submit</button>
                </form>
        </div> </>
    )
}

export default App;