import React, { useState } from 'react'
import './home.css';
export default function Home() {
  const [menu,setMenu]=useState("Home")
  return (
    <div>
      <div class="star">
        <img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287603/Src/ldl3kwnzs2dm1z4knwlv.png" id="sun"/>
        <div class="mars"><p id="earth">Get 5% off on your first order,<u id="wed">Promo:ORDER5</u></p></div>
        <div class="bob"><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287601/Src/n39uv7sil3zmk8afrles.png" id="hp"/><p id="shri">Regent Street,<u>A4</u>,A4201,London,UK&nbsp;&nbsp;<u id="lion">Change Location</u></p></div>
        <div class="radha"><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287599/Src/rskucnqh93bze6xxmhth.png" id="kite"/></div>
      </div>
      <div class="real">
        <img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287600/Src/order.png" id="youth"/>
        <div class="monu">
          <ul class="nav">
          <li onClick={()=>setMenu("Home")} class={menu==="Home"?"active":""}>Home</li>
          <li onClick={()=>setMenu("Browse Menu")} class={menu==="Browse Menu"?"active":""}>Browse Menu</li>
          <li onClick={()=>setMenu("Special Offers")} class={menu==="Special Offers"?"active":""}>Special Offers</li>
          <li onClick={()=>setMenu("Restaurants")} class={menu==="Restaurants"?"active":""}>Restaurants</li>
          <li onClick={()=>setMenu("Track Order")} class={menu==="Track Order"?"active":""}>Track Order</li>
        </ul>
        
        <button id="iphone"><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287602/Src/pdiwim1ai4ojchetrxek.png" id="hat"/><a href='/' id='dew'>Login/Signup</a></button>
        </div>
      </div>
      <div class="rat">
        <div class="food">
          <p id="cat">Order Restaurant food,takeaway and groceries </p>
          <p id="dog">Feast Your Senses,</p>
          <p id="tom">Fast and Fresh</p>
          <p id="you">Enter a postcode to see what we deliver</p>
          <form>
            <input type="text" id="eat" placeholder='&nbsp;&nbsp;e.g. EC4R 3TE'/>
            <button id="owl">search</button>
          </form>
          <div class="hen"><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287598/Src/rbsbgki8yqmylmh774tr.png" id="ink"/>
          </div>
          <div class="no"><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287600/Src/gd6tbwcu1ibpiopx74qj.png" id="lol"/></div>
        </div>
        <div class="yes"><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287599/Src/npblz45wws8ewnoxrvzy.png" id="run"/></div>
      </div>
      <div class="yoyo">
        <p id="red">Upto- 40% Order.uk exclusive deals</p>
        <div class="gun">
        <ul class="flute">
          <li>Vegan</li>
          <li>Sushi</li>
          <li id="nir">Pizza & Fast food</li>
          <li>othes</li>
        </ul>
        </div>
        <div class="mom">
          <ul class="dad">
            <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287600/Src/zhwwc8cjn1ybggme04ip.png" id="cow1"/></li>
            <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287601/Src/lacbbpct7dlbsc8zqc8y.png" id="cow2"/></li>
            <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287602/Src/o3ysqid1qnauwa44yr4x.png" id="cow3"/></li>
          </ul>
        </div>
      </div>
      <div class="item">
        <p id="king">Order.uk Popular Categories</p>
        <div class="hanu">
          <ul class="youtube">
            <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287600/Src/x73w4i7b12autn7kuefb.png" id="fox1"/><p id="tip1">Burgers & Fast food<p id="paw1">21 Restaurants</p></p></li>
            <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287601/Src/gqrnt0pq1yi2sq7gzp4f.png" id="fox2"/><p id="tip2">Salads<p id="paw2">32 Restaurants</p></p></li>
            <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287602/Src/h4wgvd1k0b5mbl2yjrdb.png" id="fox3"/><p id="tip3">Pasta & Casuals<p id="paw3">4 Restaurants</p></p></li>
            <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287602/Src/nxqf0gjpncni42zps0ep.png" id="fox4"/><p id="tip4">Pizza<p id="paw4">32 Restaurants</p></p></li>
            <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287602/Src/ad2nvs15qtbagfqks2p6.png" id="fox5"/><p id="tip5">Breakfast<p id="paw5">4 Restaurants</p></p></li>
            <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287603/Src/rect6.png" id="fox6"/><p id="tip6">Soups<p id="paw6">32 Restaurants</p></p></li>
          </ul>
        </div>
      </div>
      <div class="rose">
        <p id="gun">Popular Restaurants</p>
        <div class="live">
          <ul class="space">
            <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287596/Src/hxisnxkmebfjxvijrk21.png" id="web1"/></li>
            <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287596/Src/iraflv6dsl0cjzzw32fk.png" id="web2"/></li>
            <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287596/Src/bqfhcskqjkwdnojzkdjz.png" id="web3"/></li>
            <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287597/Src/liexm4lbb6qwdrqqvdxd.png" id="web4"/></li>
            <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287597/Src/oupdsrxdyqubz3ozmegk.png" id="web5"/></li>
            <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287598/Src/ov41uwvlltta07tj6txg.png" id="web6"/></li>
          </ul>
        </div>
      </div>
      <div class="ball">
        <img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287600/Src/order.png" id="nandi"/><p id="cup">ing is more</p>
        <button id="dom"><u id="col">Personalised</u> & Instant</button>
        <p id="gol">Download the Order.uk app for faster ordering</p>
        <img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287600/Src/pxykbstckab2hh25vtgh.png" id="vax"/>
        <div class="faty"><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287597/Src/s1czgnar4xviapyiss9p.png" id="bal2"/></div>

      </div>
      <div class="ram">
        <div class="knot">
          <ul class="mon">
            <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287599/Src/ezuingdvynv2lgjs70c5.png" id="ind1"/></li>
            <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287598/Src/d1tazu1rkvbhoavwn61a.png" id="ind2"/></li>
          </ul>
        </div>
      </div>
      <div class="gobar">
        <p id="jack">Know more about us!</p>
        <div class="sam">
          <ul class="doc">
            <li>Frequent Questions</li>
            <li>Who we are?</li>
            <li>Partner Program</li>
            <li>Help & Support</li>
          </ul>
        </div>
        <div class="sona">
          <button id="mona">How does Order.UK work?</button>
          <div class="prt">
            <ul class="scr">
              <li>What payment methods are accepted?</li>
              <li>&nbsp;&nbsp;&nbsp;Can I track my order in real-time?</li>
              <li>&nbsp;&nbsp;Are there any special discounts or<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;promotion available?</li>
              <li>&nbsp;&nbsp;&nbsp;Is Order.UK available in my area?</li>
            </ul>
          </div>
          <div class="pig">
            <ul class="xay">
              <li>
                <div class="sar1">
                 <img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287599/Src/cprujbyc8jvtxqblaeut.png" id="egg1"/>
                 <p id="kaj">Place an Order!</p>

                </div>
              </li>
              <li><div class="sar2">
              <img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287599/Src/ksjohrtrcftvm6ex2na7.png" id="egg2"/>
              <p id="kaj">Track Progress</p>

              </div></li>
              <li><div class="sar3">
              <img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287598/Src/eflbyi7qf2focrkol1we.png" id="egg3"/>
              <p id="kaj">Get your Order!</p>

              </div></li>
              
            </ul>
          </div>
          <div class="gom">
            <p id="flow">Order.uk simplifies the food ordering process.Browse through our diverse menu,<br/>selectyour favourite dishes,and proceed to checkout.Your delicious meal will be <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;on its way to your doorstep in no more time!</p>
          </div>
        </div>
      </div>
      <div class="gum">
        <ul class="fan">
          <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287597/Src/jyebhphhaawfew5akvg8.png" id="tea1"/></li>
          <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287597/Src/pjbanbw46rppta8bvbsa.png" id="tea2"/></li>
          <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287598/Src/u6uevzokb6ybba0knxah.png" id="tea3"/></li>
          <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287598/Src/sbcgr6ey07k3h7vgbqdi.png" id="tea4"/></li>
        </ul>
      </div>
      <div class="intel">
        <img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287601/Src/un9kpffgcnkshfyh1zuv.png" id="sia"/>
      </div>
      <div class="me"><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287597/Src/s1czgnar4xviapyiss9p.png" id="sia2"/></div>
      <p id="lakh1">Company # 490039-445,Registered with<br/>House of companies.</p>
      <p id="boys">Get Exclusive Deals in your Inbox</p>
      <form>
        <label for="email"></label>
        <input type="text" id="girls" placeholder='&nbsp;&nbsp;youremail@gmail.com'/>
        <button id="babys">Subscribe</button>
        <p id="dells">we wont spam read our <u>email policy</u></p>
       </form>
        <ul class="salt">
          <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287598/Src/pxeg3lilmoei94ppuo0h.png"/></li>
          <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287602/Src/d1tzyzt2g5qy06x5uajz.png"/></li>
          <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287603/Src/itdfvjktmqmymymbmqme.png"/></li>
          <li><img src="https://res.cloudinary.com/dvz6tbgxx/image/upload/v1733287603/Src/ep40ek2uuqvtc8dvm1nl.png"/></li>
        </ul>
        <p id="cir">Legal Pages</p>
        <ul class="sir">
          <li><u>Terms and conditions</u></li>
          <li><u>Privacy</u></li>
          <li><u>Cookies</u></li>
          <li><u>Modern Slavery Statement</u></li>
        </ul>
        <p id="cir1">Important Links</p>
        <ul class="sir1">
          <li><u>Get help</u></li>
          <li><u>Add your restaurant</u></li>
          <li><u>Sign up to deliver</u></li>
          <li><u>Create a bussines account</u></li>
        </ul>
        <div class="tab">
          <p id="cam">Order.uk Copyright 2024,All Right Reserved</p>
          <ul class="mam1">
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li>Pricing</li>
            <li>Do not sell or share my personel information</li>
          </ul>
        </div>
    </div>
  )
}

