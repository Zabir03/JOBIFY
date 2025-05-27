import { Outlet } from 'react-router-dom';
const HomeLayout = () => {
  return (
    <>
        {/* <p>This is home </p> */}
        <Outlet />
      
    </>
  );
};
export default HomeLayout;