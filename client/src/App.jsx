import React, { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectRouter from './components/auth/ProtectRouter';
import Notfound from './pages/Notfound';

// used for dynamic importing the home component only when it is needed.
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Groups = lazy(() => import("./pages/Groups"));
const Chat = lazy(() => import("./pages/Chat"))

let user = true;


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectRouter user={user} />}>
          <Route path='/' element={<Home />} />
          <Route path='/chat/:chatId' element={<Chat />} />
          <Route path='/groups' element={<Groups />} />

        </Route>
        <Route path='/login' element={
          <ProtectRouter user={!user}>
            <Login />
          </ProtectRouter>
        } />

        <Route path='*' element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
