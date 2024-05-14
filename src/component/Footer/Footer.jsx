import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#36271F] mt-[500px] md:mt-0 lg:mt-[120px] h-[80vh] w-full">
      <div className="w-full   text-[#947948] p-2 md:p-5 lg:p-[40px] space-y-10">
        <h1 className="text-[34px] md:text-[44px] lg:text-[54px] font-[700] text-center">
          --COZI--
        </h1>

        {/* mama */}
        <div>
          <ul className="flex space-x-8 w-[99%] items-center justify-center text-[20px]">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/rooms"}>Rooms</Link>
            </li>
            <li>
              <Link to={"/myBookings"}>My Bookings</Link>
            </li>
            <li>
              <Link to={'/about'}>About Us</Link >
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-[24px]  md:text-[34px] lg:text-[44px] font-[700] text-center">
            CONTACT US
          </h1>
          <h1 className="text-[18px] text-center mt-4">
            Reception: +880 12283222
          </h1>
          <h1 className="text-[18px] text-center mt-4">
            Office: +880 19283884
          </h1>
          <h1 className="text-[18px] text-center mt-4">E-mail: cozi@lol.com</h1>
          <h1 className="text-[18px] text-center mt-4">Address: Gazipur</h1>
        </div>
      </div>
      
      <footer className="footer footer-center p-4 bg-[#36271F] text-[#947948]">
        <aside>
          <p>Copyright © 2024 - All right reserved by SAKIB Industries Ltd.</p>
        </aside>
      </footer>
     
    </div>
  );
};

export default Footer;
