import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './GetAllUsers.css'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './redux/counterSlice';

function GetAllUsers() {
    const [getdata, setGetData] = useState([]);
  const dispatch = useDispatch();

    const getUsers = ()=>{
        axios
          .get("https://dummyjson.com/users")
          .then((response) => setGetData(response.data.users)); // if the data is like {users:{},{}}
    }
    console.log(getdata);
    useEffect(()=>{
        getUsers();
    },[]);
    const addDev =()=>{
        dispatch(increment());
        
    }

  return (
    <div className='Profile-Container'>
      {getdata.map((d, index) => (
        <div className='Profile-card' key={index}>
          <img src={d.image} alt={d.firstName} />
          <h1>
            {d.firstName} {d.lastName}
          </h1>
          <h3>{d.email}</h3>
          <button onClick={addDev} className='Btn-hire'>Add to hire</button>
        </div>
      ))}
    </div>
  );
}

export default GetAllUsers
