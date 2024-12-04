import { useState,createContext} from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import Sign from './components/sign';

export const UserContext=createContext(null)
function App() {
  const [user,setUser]=useState(false);

  return (
    <>
    <BrowserRouter>
    <UserContext.Provider value={{user:user,setUser:setUser}}>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/sign" element={<Sign/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="*" element={<Login/>}/>  
    </Routes>
    </UserContext.Provider>
    </BrowserRouter>
    </>
  )
}

export default App
