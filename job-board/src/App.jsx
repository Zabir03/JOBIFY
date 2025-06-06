import { RouterProvider, createBrowserRouter } from "react-router-dom";


//import { BrowserRouter as Router } from 'react-router-dom';
//import styled from 'styled-components';
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
  //EditJob,
} from "./pages";



const router = createBrowserRouter([
  { 
    
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />, // Error route at the root level
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AddJob />,
          },
          { path: "stats", element: <Stats /> },
          {
            path: "all-jobs",
            element: <AllJobs />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />;
      <HomeLayout />
    </>
  );
}
export default App;
