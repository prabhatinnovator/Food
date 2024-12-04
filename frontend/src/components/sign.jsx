import React,{useContext} from 'react'
import'./sign.css'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';


export default function Sign() {
  const navigate=useNavigate()
  const{user,setUser}=useContext(UserContext)
  function getdata(event){
    event.preventDefault();
    const data=new FormData(event.target);
    const senddata={
      name:data.get('name'),
      number:data.get('phone number'),
      email:data.get("email"),
      password:data.get("password"),

    }
    const result={email:data.get("email"),address:"Delhi",orderid:"no order yet"}

    setUser(result)
    navigate("/home")
  }
  return (
    <div>
      <div class="food1">
        <img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287600/Src/order.png" id="star1"/>
        <div class="momos1">
            <p id="sun1">Welcome Back<img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287601/Src/sfligr23uzpcjp33bkaf.png" id="moon1"/></p>
            <p id="mercury1">Today is a new day. It's your day. You shape it.<br/>Sign in to start ordering.</p><br/>
            <div class="noon1"><form onSubmit={getdata}>
            <label for="email">Name</label><br/>
            <input type="text" id="pluto1" name="email" placeholder='&nbsp;&nbsp;e.g. John A'required/><br/>
            <label for="email">Phone Number</label><br/>
              <input type="number" id="pluto1" name="email" placeholder='&nbsp;&nbsp;Enter your 10 digit mobile number'required/><br/>
              <label for="email">Email</label><br/>
              <input type="text" id="pluto1" name="email" placeholder='&nbsp;&nbsp;Example@email.com'required/><br/>
              <label for="password">Password</label><br/>
              <input type="character" id="ceres1" name ="password"placeholder='&nbsp;&nbsp;At least 8 characters'required/><br/><br/>
              <button>Sign Up</button>
            </form><br/>
            <p id="solar1">Already have an account?<a href="/" target="_parent" id="pole1">Sign In</a></p>
            </div>
        </div>
        <div class="koyto1"><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287599/Src/bfcdakgxtetavcxvb9df.png" id="makemake1"/></div>
        
        <img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287597/Src/s1czgnar4xviapyiss9p.png" id="tam1"/>
        </div>
      <div class="earth1">
        <img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287601/Src/un9kpffgcnkshfyh1zuv.png" id="golf1"/>
        <div class="raju1">
        <p id="camt1">Order.uk Copyright 2024,All Right Reserved</p>
          <ul class="mamt1">
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li>Pricing</li>
            <li>Do not sell or share my personel information</li>
          </ul>
        </div>

      </div>
      <div class="yut1"><p id="hat1">Company # 490039-445,Registered with,<br/>House of companies</p></div>   
      <p id="jic1">Get Exclusive in your Inbox</p>
      <form>
        <label for="email"></label>
        <input type="text" id="goa1" placeholder='&nbsp;&nbsp;youremail@gmail.com'/>
        <button id="bomby1">Subscribe</button>
        <p id="deli1">we wont spam read our <u>email policy</u></p>
       </form>   
       <ul class="salt2">
          <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287598/Src/pxeg3lilmoei94ppuo0h.png" id="rekh1"/></li>
          <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287602/Src/d1tzyzt2g5qy06x5uajz.png" id="rekh1"/></li>
          <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287603/Src/itdfvjktmqmymymbmqme.png" id="rekh1"/></li>
          <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287603/Src/ep40ek2uuqvtc8dvm1nl.png" id="rekh1"/></li>
        </ul>
        <p id="cirt2">Legal Pages</p>
        <ul class="sirt2">
          <li><u>Terms and conditions</u></li>
          <li><u>Privacy</u></li>
          <li><u>Cookies</u></li>
          <li><u>Modern Slavery Statement</u></li>
        </ul>
        <p id="cirt3">Important Links</p>
        <ul class="sirt3">
          <li><u>Get help</u></li>
          <li><u>Add your restaurant</u></li>
          <li><u>Sign up to deliver</u></li>
          <li><u>Create a bussines account</u></li>
        </ul>


    </div>
  )
}

  

