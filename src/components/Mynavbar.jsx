const Mynavbar = () => {
  return (
    <>
     
      <div className="mynavbar fixed z-10 bg-[#F5F4F2] flex items-center h-[80px] w-full  shadow-md px-[24px]">
        <div className="lgoo">
          <img src="/assets/logo.png" alt="" />
        </div>
        <div className="search ms-[35px]">
          <div className="rounded-[17px] border-[#D0CFCE] border-2 px-4 py-2 bg-white w-[346px] flex items-center">
            <img src="/assets/searchicon.png" alt="" />
            <input type="text" placeholder="Find a restaurant" className="outline-none px-2 w-full" />
          </div>
        </div>
      </div>

    </>
  );
};

export default Mynavbar;
