
import React, {useState} from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import './LoginPage.css'

function LoginPage() {
  const [memberValues, setMemberValues] = useState([]);

  const [active, setActive] = useState(true)

  const login = member => {
      const newMember = {
          email: member.email,
          password: member.password
      };
      setMemberValues([...memberValues, newMember]);
  };


  

  return ( 

      <div >
        <div>
            <button className={`Button ${ active ? 'active' : ''}`} onClick={() => setActive(true)} >Login</button>
            <button className={`Button ${active ? '' : 'active'}`} onClick={() => setActive(false)}>Register</button>
        </div>
    
        <div>    
            <div className={`loginCard ${active ?'activeTab':'tabContent'}`}>
                <h5>Login</h5>
                <LoginForm login={login} />    
            </div>
            <div className={`loginCard ${active ?'tabContent':'activeTab'}`}>
                <h5>Register</h5>
                <RegistrationForm setActive = {setActive} />
            </div> 
       
        </div>
      
      </div>

 

  );
}


export default LoginPage;
