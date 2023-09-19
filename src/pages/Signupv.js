import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../components/Template'
import Last from '../components/Last'
const Signupv = ({setIsLoggedIn}) => {
  return (
    <div className='bg-sky-200 w-[1550px]'>
 <Template 
      
      title="Empower small businesses to thrive"
      desc1="Improve your business for today, tomorrow, and beyond."
      desc2="Suavy to future-proof your career."
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
      />
      <Last></Last>
    </div>
   
  )
}

export default Signupv
