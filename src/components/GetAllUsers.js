import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './GetAllUsers.css'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './redux/counterSlice';

function GetAllUsers() {
    const [getdata, setGetData] = useState([]);
    const [user,setUser] =useState([]);
    const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

    const getUsers = ()=>{
        axios
          .get("https://dummyjson.com/users" )
          .then((response) => setGetData(response.data.users)); // if the data is like {users:{},{}}
    }
   const findUser = (value) => {
     axios
       .get("https://dummyjson.com/users/search?q=" + value)
       .then((response) => setUser(response.data.users))
       .catch((err) => console.error(err));
   };

    console.log(getdata,"getdata");
    useEffect(()=>{
        getUsers();
    },[]);
    const addDev =()=>{
        dispatch(increment());
        
    }
  
    console.log(user, "users");
   const searchUser = (value) => {
     setSearchTerm(value);
     if (value.trim()) {
       findUser(value);
     } else {
       setUser([]);
     }
   };


  return (
    <div className="Profile-Container">
      <div>
        <h1>Search user</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => searchUser(e.target.value)}
        />

        {user.map((user, index) => (
          <p key={index}>{user.firstName}</p>
        ))}
      </div>
      {getdata.map((d, index) => (
        <div className="Profile-card" key={index}>
          <img src={d.image} alt={d.firstName} />
          <h1>
            {d.firstName} {d.lastName}
          </h1>
          <h3>{d.email}</h3>
          <button onClick={addDev} className="Btn-hire">
            Add to hire
          </button>
        </div>
      ))}
    </div>
  );
}

export default GetAllUsers
