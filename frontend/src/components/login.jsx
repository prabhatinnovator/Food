import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css'
import { UserContext } from '../App';
export default function Login() {
  const navigate=useNavigate()
  const{user,setUser}=useContext(UserContext)
  function getdata(event){
    event.preventDefault();
    const data=new FormData(event.target);
    const senddata={
      email:data.get("email"),
      password:data.get("password"),

    }
    //Create code for calling  Api and Api will return email,password
    const result={email:data.get("email"),address:"Delhi",orderid:"no order yet"}
    setUser(result)
    navigate("/Home")
  }
  return (

    <div>
      <div class="food">
        <img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287600/Src/order.png" id="star"/>
        <div class="momos">
            <p id="sun">Welcome Back<img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287601/Src/sfligr23uzpcjp33bkaf.png" id="moon"/></p>
            <p id="mercury">Today is a new day. It's your day. You shape it.<br/>Sign in to start ordering.</p>
            <div class="noon"><form onSubmit={getdata}>
              <label for="email">Email</label><br/>
              <input type="text" id="pluto" name="email" placeholder='Example@email.com' required/><br/>
              <label for="password">Password</label><br/>
              <input type="character" id="ceres" name ="password"placeholder='At least 8 characters'required/><br/><br/>
              <button>Sign in</button>
            </form><br/>
            <p id="solar">Don't you have an account?<a href="/sign" target="_parent" id="pole">Sign up</a></p>
            </div>
        </div>
        <div class="koyto"><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287599/Src/bfcdakgxtetavcxvb9df.png" id="makemake"/></div>
        
        <img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287597/Src/s1czgnar4xviapyiss9p.png" id="tam"/>
        </div>
      <div class="earth">
        <img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287601/Src/un9kpffgcnkshfyh1zuv.png" id="golf"/>
        <div class="raju">
        <p id="camt">Order.uk Copyright 2024,All Right Reserved</p>
          <ul class="mamt">
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li>Pricing</li>
            <li>Do not sell or share my personel information</li>
          </ul>
        </div>

      </div>
      <div class="yut"><p id="hat">Company # 490039-445,Registered with,<br/>House of companies</p></div>   
      <p id="jic">Get Exclusive in your Inbox</p>
      <form>
        <label for="email"></label>
        <input type="text" id="goa" placeholder='&nbsp;&nbsp;youremail@gmail.com'/>
        <button id="bomby">Subscribe</button>
        <p id="deli">we wont spam read our <u>email policy</u></p>
       </form>   
       <ul class="salt1">
          <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287598/Src/pxeg3lilmoei94ppuo0h.png" id="rekh"/></li>
          <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287602/Src/d1tzyzt2g5qy06x5uajz.png" id="rekh"/></li>
          <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287603/Src/itdfvjktmqmymymbmqme.png" id="rekh"/></li>
          <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287603/Src/ep40ek2uuqvtc8dvm1nl.png" id="rekh"/></li>
        </ul>
        <p id="cirt">Legal Pages</p>
        <ul class="sirt">
          <li><u>Terms and conditions</u></li>
          <li><u>Privacy</u></li>
          <li><u>Cookies</u></li>
          <li><u>Modern Slavery Statement</u></li>
        </ul>
        <p id="cirt1">Important Links</p>
        <ul class="sirt1">
          <li><u>Get help</u></li>
          <li><u>Add your restaurant</u></li>
          <li><u>Sign up to deliver</u></li>
          <li><u>Create a bussines account</u></li>
        </ul>


    </div>
  )
}
