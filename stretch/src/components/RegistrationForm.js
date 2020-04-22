import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const RegistrationForm = props => {

    const [user, setUser] = useState({
        username: '',
        password: '',
        passwordConfirm: '',
        department: '',
        passError: '',
        successMess: ''
    });

    const handleChanges = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    
    const validate = () => {
        let passError = "";
        const specialCharRegex = /[\W\s]/g;
        const specialCharTest = user.password.match(specialCharRegex)
        if (user.password !== user.passwordConfirm) {
          passError = "passwords must match";
        } else if ( user.password.length < 6) {
            passError = "password must be 6 characters"
        } else if (user.password.includes(specialCharTest || '  ') === true) {
            passError = "passwords cannot contain spaces or special characters"
        }
    
        if (passError) {
          setUser({...user, passError});
          return false;
        }
    
        return true;
      };

    const submitForm = e => {
        e.preventDefault();
        const isValid = validate();
        const userCredentials = { user_name: user.username, password: user.password, department: user.department }
        if(isValid) {
            axiosWithAuth()
                .post('/auth/register', userCredentials)
                .then(res => {
                    console.log(res)
                    let successMess = 'Registration Successful'
                    setUser({...user, successMess})
                    setTimeout(() => {
                       props.setActive(true) 
                    }, 1000)
                })
                .catch( err => console.log(err) );
           
            
        }

    }


        

  return (
    <div>
     <h5>Register New User</h5>
        <form onSubmit={submitForm}>
            <div>
                <label htmlFor="username"> UserName: </label>
                <div>
                    <input id='username' type='text' name='username' onChange={handleChanges} placeholder=' UserName' value={user.username} required />
                </div>
                
            </div>
            <div>
                <label htmlFor="department"> Department: </label>
                <div>
                    <input id='department' type='text' name='department' onChange={handleChanges} placeholder=' Department' value={user.department} required />
                </div>
                
            </div>
            <div>
                <label htmlFor="Password"> Password: </label>
                <div>
                    <input id='Password' name='password' type='password' onChange={handleChanges} placeholder=' Password' value={user.password} required />
                </div>
            </div>
            <div>
                <label htmlFor="passwordConfirm"> Confirm  Password: </label>
                <div>
                    <input id='passwordConfirm' name='passwordConfirm' type='password' onChange={handleChanges} placeholder=' Confirm Password' value={user.passwordConfirm} required />
                </div>
            </div>
            <div>
                {user.passError}
                {user.successMess}
            </div>
        <div>
          <button type='submit'> Sign-up </button>
        </div>
      </form>
    </div>
  );
}


export default RegistrationForm;
