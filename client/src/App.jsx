import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectRouter from './components/auth/ProtectRouter';
import Notfound from './pages/Notfound';
import { LayoutLoader } from './components/layout/Loaders';
import MessageManagement from './pages/Admin/MessageManagement';

// used for dynamic importing the home component only when it is needed.
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Groups = lazy(() => import("./pages/Groups"));
const Chat = lazy(() => import("./pages/Chat"))
const Adminlogin = lazy(() => import("./pages/Admin/Adminlogin"));
const Dashboard = lazy(() => import("./pages/Admin/Dashboard"));
const UserManagement = lazy(() => import("./pages/Admin/UserManagement"));
const ChatManagement = lazy(() => import("./pages/Admin/ChatManagement"));
const MessagesManagement = lazy(() => import("./pages/Admin/MessageManagement"));

let user = true;


const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
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

          <Route path='/admin' element={<Adminlogin />} />
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/users' element={<UserManagement />} />
          <Route path='/admin/chats' element={<ChatManagement />} />
          <Route path='/admin/messsages' element={<MessagesManagement />} />

          <Route path='*' element={<Notfound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
