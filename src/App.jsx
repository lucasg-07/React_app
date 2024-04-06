import {BrowserRouter, Routes,Route} from 'react-router-dom'
import IndexLogin from './pages/LoginPage/IndexLogin'
import IndexUser from './pages/UserPage/IndexUser'
import IndexHome from './pages/HomePage/indexHome'
import RoutePrivate from './routes/RoutePrivate'
import AuthContext from './contexts/AuthContext'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react'
import FormUser from './pages/UserPage/FormUser'


function App() {
  
  let logged = false;
  if(localStorage.getItem('sisdoe@token')) {
    logged = true
  }
  const[isLogged, setIsLogged] = useState(logged);



  return (
    <AuthContext.Provider value={{isLogged,setIsLogged}}>

    <BrowserRouter>

      <Routes>
       
           <Route path="/" element={
            <RoutePrivate >
              <IndexHome/>
            </RoutePrivate>}/>

           <Route path="/user" element={
            <RoutePrivate>
              <IndexUser/>
            </RoutePrivate>}/>
            
           <Route path="/user/new" element={
            <RoutePrivate>
              <FormUser/>
            </RoutePrivate>}/>
        <Route path="/login" element={<IndexLogin/>}></Route>

      </Routes>

    </BrowserRouter>

    </AuthContext.Provider>
  )
}

export default App
