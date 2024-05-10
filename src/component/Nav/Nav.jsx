import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navbar  bg-[#DCC69C] lg:h-[130px] md:h-[100px] bg-gray-10 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
               <li>
              <Link to={'/'}>Home</Link >
            </li>
            </ul>
          </div>
         <Link to={'/'}> <a className=" text-5xl font-[600]">--COZI--</a></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[20px] font-[400]">
            <li>
              <Link to={'/'}>Home</Link >
            </li>
           
          </ul>
        </div>
        <div className="navbar-end space-x-3">
        <Link to={'/login'}> <button  className="btn btn-sm lg:btn md:btn lg:text-[16px] md:text-[14px]">Log In</button></Link>
   <Link to={'/reg'}> <button className="btn btn-sm lg:btn md:btn lg:text-[16px] md:text-[14px]">Registration</button></Link>
    <button className="btn btn-sm lg:btn md:btn lg:text-[16px] md:text-[14px]">Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
