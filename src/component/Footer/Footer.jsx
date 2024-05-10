

const Footer = () => {
    return (
        <div className="bg-[#36271F] h-[80vh] w-full flex flex-column-reverse  md:flex-row lg:flex-row">
            <div className="w-full md:w-[50%] lg:w-[50%] border text-[#947948] p-2 md:p-5 lg:p-[40px] space-y-10">
                <h1 className="text-[34px] md:text-[44px] lg:text-[54px] font-[700] text-center">--COZI--</h1>

                {/* mama */}
              <div className="flex space-x-8 w-[99%] items-center justify-center">
                <h1 className="text-[22px]">home</h1>
                <h1 className="text-[22px]">home</h1>
                <h1 className="text-[22px]">home</h1>
                <h1 className="text-[22px]">home</h1>
                <h1 className="text-[22px]">home</h1>
              </div>
              <div>
              <h1 className="text-[24px]  md:text-[34px] lg:text-[44px] font-[700] text-center">CONTACT US</h1>
              <h1 className="text-[18px] text-center mt-4">Reception: +880 12283222</h1>
              <h1 className="text-[18px] text-center mt-4">Office: +880 19283884</h1>
              <h1 className="text-[18px] text-center mt-4">E-mail: cozi@lol.com</h1>
              <h1 className="text-[18px] text-center mt-4">Address: Gazipur</h1>






              </div>
            </div>
            <div className="w-full md:w-[50%] lg:w-[50%]"></div>
            
        </div>
    );
};

export default Footer;