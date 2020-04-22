
import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const DashboardPage = props => {
    const [info, setInfo] = useState([])
    const token = window.localStorage.getItem('token');
    function getData(token){
        axiosWithAuth()
        .get('/users/', token)
        .then(res => {
            setInfo(res.data.users)
        });
    }
    useEffect(() => {
       getData(token)
      }, [token]);

      console.log(info)
  return (
    <div>
        <button onClick={() => {window.localStorage.removeItem('token')}}>Logout</button>
      {info.map( i => {
          return(
          <div>
           <h1>{i.user_name}</h1>
           <h4>{i.department}</h4>
          </div>
          )
      })}
    </div>
  );
};


export default (DashboardPage);
