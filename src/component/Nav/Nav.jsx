import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import toast from "react-hot-toast";

const Nav = () => {
  const {logout,person} = useContext(AuthContext)

  function logOutNav(){
    logout()
    .then(()=>{
      toast("loged Out")
    })
  }

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
            <li>
              <Link to={'/rooms'}>Rooms</Link >
            </li>
            <li>
              <Link to={'/myBookings'}>My Bookings</Link >
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
            <li>
              <Link to={'/rooms'}>Rooms</Link >
            </li>
            <li>
              <Link to={'/myBookings'}>My Bookings</Link >
            </li>
           
          </ul>
        </div>
     
        <div className="navbar-end ">
        {person ? (
        <div >
          <button onClick={logOutNav} className="btn btn-outline ">
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex">
          <div className="navbar-end">
            <Link to={"/login"}>
              <button  className="btn  btn-outline ">Log In</button>
            </Link>
          </div>
          <div >
            <Link to={"/register"}>
              <button className="btn btn-outline ">Sign Up</button>
            </Link>
          </div>
        </div>
      )}

        </div>
    
      </div>
    </div>
  );
};

export default Nav;
