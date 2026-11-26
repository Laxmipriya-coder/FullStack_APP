import React from 'react'
import { RouterProvider} from 'react-router-dom';
import routes from './routes/routes';
import Register from '../src/pages/Register'
import Login from '../src/pages/Login'

function App() {
  return (
    <>
    <RouterProvider router={routes}/>
    {/* <Register/> */}
    {/* <Login/> */}
    </>
  )
}

export default App;