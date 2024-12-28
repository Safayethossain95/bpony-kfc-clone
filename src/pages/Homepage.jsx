

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decrementQuantity,
  incrementQuantity,
  selectTotalPrice,
  toggleClose
} from "../store/exampleSlice";
import { tabs } from "../api/data";
const Homepage = () => {
 
  // const value = useSelector((state) => state.example.value);
  const cart = useSelector((state) => state.example.cart);
  const isOpen = useSelector((state) => state.example.isOpen);
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectTotalPrice);
  const [activeTab, setActiveTab] = useState("tab1");

  useEffect(()=>{
    console.log(isOpen)
  },[isOpen])
  useEffect(() => {
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px 0px 0px", threshold: 0.1 } // Adjust -100px for offset
    );

    tabs.forEach((tab) => {
      const element = document.getElementById(tab.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
      console.log(element.offsetTop + "px");
      element.scrollIntoView({ behavior: "smooth" });
      setActiveTab(id);
    }
  };
  

  return (
    <>
      {/* <div className="h-[80px]"></div> */}
      <div className=" h-screen w-full overflow-y-scroll  mr-0">
        <div className="container relative">
          <div className="grid relative min-w-[990px] xl-1400:grid-cols-[2.3fr_6.7fr_3fr] grid-cols-[3fr_9fr] lg:grid-cols-[3fr_9fr]">
            {/* Sidebar */}
            <div className="sidebar  h-[calc(100vh-80px)] pointer-events-none  p-4 rounded-lg">
              <div className="div  w-[220px] h-full  fixed top-[90px]">
                <ul className="pt-[50px] pointer-events-auto">
                <h3 className=" text-[18px] rounded-[16px] font-medium mb-[80px] bg-white h-[48px] ps-[14px] w-[230px] flex items-center  ">
                  <img className="w-[23px] mr-[12px]" src="/assets/leftarrow.png" alt="" />
                  All Restaurants</h3>
                <h3 className="ms-[15px] text-[20px] font-bold mb-[50px]">Menu</h3>
                  {tabs.map((tab) => (
                    <li
                      key={tab.id}
                      onClick={() => handleScrollTo(tab.id)}
                      className={`h-[48px] ps-[14px] flex items-center rounded-[16px] cursor-pointer hover:bg-white/50 duration-300 
                  ${activeTab === tab.id ? "bg-white font-bold" : ""}
                   `}
                    >
                      {tab.label}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="div"></div>
            </div>

            {/* Main Content */}
            <div className="rounded-lg p-3  pt-[110px] scrollbar-hide ">
              <div className="bannerimg responsive-box rounded-[36px]">
                <div className="shade "></div>
                <div className="upper absolute p-[50px] h-full flex items-start justify-end flex-col">
                  <h6 className="text-[52px] text-white font-bold z-5 mb-[20px]">
                  KFC Ainabulak
                  </h6>
                  <div className="flex">
                    <div
                      className="flex mr-[8px] items-center gap-2 bg-white bg-opacity-80 pt-[8px] pr-[18px] pb-[8px] pl-[8px]
              rounded-[16px] shadow-md"
                    >
                      <div className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-[32px] h-[32px] text-black"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        <div className="">
                          <div className="text-black text-[20px] leading-5 font-semibold">
                            4.3
                          </div>
                          <div className="text-gray-500 text-xs leading-5">
                            200+
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="div flex items-center gap-2 bg-white bg-opacity-80 px-3 py-2 rounded-[16px] shadow-md">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-[32px] h-[32px] text-black"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 4h2v6h-2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {tabs.map((tab) => (
                <div key={tab.id} id={tab.id} className="mb-8 py-4">
                  {tab.label === "What's new" ? (
                    <div className="flex items-center  bg-[#E4F2DC] text-green-700 rounded-lg">
                      <div className="flex items-center justify-center  text-white">
                        <img
                          className="w-auto h-[72px]"
                          src="https://eda.yandex/images/3816972/0a6904a5dbf6de2762626985e3fc860b.png"
                          alt=""
                        />
                      </div>
                      <span className="ml-3 text-[#72aa52] text-[19px] font-medium">
                        Free delivery - on any order
                      </span>
                    </div>
                  ) : (
                    <>
                      <div className={`foodwrapper `}>
                        <h3 className="text-[32px] font-bold mb-[20px]">
                          {tab.label}
                        </h3>
                        <div className={`grid  grid-cols-4 gap-3`}>
                          {tab?.items.map((item, i) => {
                            return (
                              <>
                                <div
                                  key={i}
                                  className={`mycard flex flex-col justify-between bg-white rounded-[24px] shadow-md  p-[12px]`}
                                >
                                  <img
                                    className="w-full h-48 object-cover rounded-[24px]"
                                    src={item.imgurl}
                                    alt="food kfc"
                                  />
                                  <div className="">
                                    <div className="font-bold text-[24px]">
                                      {item.price} {item.unit}
                                    </div>
                                    <p className="text-gray-700 text-base">
                                      {item.foodname}
                                    </p>
                                  </div>
                                  <div className=" text-center mt-[38px]">
                                    <button
                                      onClick={() => {
                                        dispatch(addToCart(item));
                                      }}
                                      className="bg-[#F5F4F2] w-full  rounded-[18px] justify-center text-black flex items-center p-3  focus:outline-none focus:shadow-outline"
                                    >
                                      <img
                                        className="mb-[-3px]"
                                        src="/assets/plusicon.png"
                                        alt=""
                                      />{" "}
                                      <span className="ms-[8px] font-medium">
                                        Add
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          

            <div className="  bg-white p-4 mt-[110px] hidden xl-1400:block fixed w-[21%]  h-[calc(100vh-130px)]    right-[5%] rounded-[24px] m-4 flex-col lg-flex-row">
              <h3 className="text-[24px] font-bold relative">Cart</h3>
              {cart.length==0?
              <>
              <div className="h-full  flex items-center justify-center">
                <div className="div flex flex-col">
                <img className="w-[98px] m-auto" src="https://avatars.mds.yandex.net/get-bunker/61205/a11b38948b6d328e2f739d602fa36b15b2680ba8/svg" alt="" />
              <p className=" text-[24px] font-bold px-[30px] text-center">Your cart is currently
              empty</p>
                </div>

              </div>
              </>
              
              :
              
              (
                <div className="overflow-y-scroll max-h-[calc(100%-200px)]"> {/* Wrapper with scrolling */}
                  {cart.map((item, i) => {
                    const isLastItem = i === cart.length - 1;
                    return (
                      <div
                        key={i}
                        className={`flex mt-[25px] items-center justify-between  w-full max-w-lg pb-4 ${
                          isLastItem ? 'border-b-2' : 'border-b-0'
                        }`}
                      >
                        <div className="flex-shrink-0">
                          <img
                            src={item.imgurl}
                            alt="Hot Dog"
                            className="w-[80%] h-16 rounded-[12px] object-cover"
                          />
                        </div>
              
                        <div
                          className={`border-b-2 ${
                            isLastItem ? 'last:border-b-0' : ''
                          } w-full justify-between items-center flex pb-4`}
                        >
                          <div className="px-4">
                            <h3 className="text-[13px]">{item.foodname}</h3>
                            <p className="text-[13px] font-bold">
                              {item.price} {item.unit}
                            </p>
                          </div>
              
                          <div className="flex items-center bg-gray-100 rounded-full px-3 h-[32px]">
                            <button
                              onClick={() =>
                                dispatch(decrementQuantity({ foodname: item.foodname }))
                              }
                              className="text-gray-500 text-[28px] font-semibold mb-[3px] hover:text-gray-800 px-2 pointer-events-auto"
                            >
                              -
                            </button>
                            <span className="text-sm font-bold px-2">{item.quantity}</span>
                            <button
                              onClick={() =>
                                dispatch(incrementQuantity({ foodname: item.foodname }))
                              }
                              className="text-gray-500 text-[28px] font-semibold mb-[3px] hover:text-gray-800 px-2 pointer-events-auto"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {cart.length!==0&&<div className="div flex justify-between  mt-3">
              <p className="text-[18px] font-medium">Service fee</p>
              <p className="text-[20px] font-semibold">NaN ₸</p>
              </div>}
                </div>
              )}
              
              <div className="div absolute rounded-[24px] bottom-[0px] w-[calc(100%)] left-0 bg-white p-[20px]">
              <div className="flex border-t pt-[12px] items-center w-[calc(100%)] left-0 px-[20px] bg-white justify-between absolute bottom-[90px]">
                <div className="flex items-center">
                <div className="wrapper w-[53px] h-[53px] rounded-[16px] bg-[#F5f4f2] flex justify-center items-center">
                  <img src="/assets/caricon.png" alt="" />

                </div>
                <div className="ml-[10px]">
                  <p className=" leading-4 text-[14px] text-black font-semibold">
                   Delivery 0 ₸ 
                  </p>
                  <p className=" leading-4 text-[14px] font-semibold text-[#7fd04d] ">upto free 600 ₸  </p>
                </div>
                </div>
                <div className="moreinfo">
                  <img src="/assets/moreinfo.png" alt="" />
                </div>
              </div>
              <div className="  button h-[56px] left-[20px] rounded-[16px] w-[calc(100%)] bg-[#FCE000]">
                
                <div className="flex justify-between h-full px-[20px] items-center">
                  <p className="text-black text-[18px] font-semibold">Next</p>
                  <p className="text-black text-[23px] font-bold">{totalPrice} ₸</p>
                </div>
              </div>
              </div>
            </div>
          
              
             
          </div>
        </div>
      </div>
        {/* Modal */}
        {isOpen &&  (
        <div onClick={() => dispatch(toggleClose())} className="fixed inset-0 flex  right-0 bg-black bg-opacity-50 z-50">

          
          <div
           onClick={(e) => e.stopPropagation()}
            className="bg-white w-[425px] h-[500px] p-[20px] overflow-auto right-[80px] top-[80px] rounded-[30px] shadow-lg absolute"
          >
            {/* Close button */}
            <h5 className="absolute top-3 left-4 text-[23px] font-bold ">Cart</h5>
            <button
              onClick={()=>{dispatch(toggleClose()); dispatch(clearCart())}}
              className="absolute top-3 right-2 px-3 py-1  text-gray-400 rounded"
            >
              Clear
            </button>
            <div className=" mt-[70px] w-full"> {/* Wrapper with scrolling */}
                 <div className="h-[230px] overflow-y-scroll">
                 {cart?.map((item, i) => {
                    const isLastItem = i === cart.length - 1;
                    return (
                      <div
                        key={i}
                        className={`flex mt-[25px] items-center justify-between  w-full max-w-lg pb-4 ${
                          isLastItem ? 'border-b-2' : 'border-b-0'
                        }`}
                      >
                        <div className="flex-shrink-0">
                          <img
                            src={item.imgurl}
                            alt="Hot Dog"
                            className="w-[80%] h-16 rounded-[12px] object-cover"
                          />
                        </div>
              
                        <div
                          className={`border-b-2 ${
                            isLastItem ? 'last:border-b-0' : ''
                          } w-full justify-between items-center flex pb-4`}
                        >
                          <div className="px-4">
                            <h3 className="text-[13px]">{item.foodname}</h3>
                            <p className="text-[13px] font-bold">
                              {item.price} {item.unit}
                            </p>
                          </div>
              
                          <div className="flex items-center bg-gray-100 rounded-full px-3 h-[32px]">
                            <button
                              onClick={() =>
                                dispatch(decrementQuantity({ foodname: item.foodname }))
                              }
                              className="text-gray-500 text-[28px] font-semibold mb-[3px] hover:text-gray-800 px-2 pointer-events-auto"
                            >
                              -
                            </button>
                            <span className="text-sm font-bold px-2">{item.quantity}</span>
                            <button
                              onClick={() =>
                                dispatch(incrementQuantity({ foodname: item.foodname }))
                              }
                              className="text-gray-500 text-[28px] font-semibold mb-[3px] hover:text-gray-800 px-2 pointer-events-auto"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                 </div>
                  {/* {cart.length!==0&&<div className="div flex justify-between  mt-3">
              <p className="text-[18px] font-medium">Service fee</p>
              <p className="text-[20px] font-semibold">NaN ₸</p>
              </div>} */}
              
               
              <div className="flex flex-col border-t pt-[12px] items-center w-[calc(100%)] left-0 px-[20px] bg-white justify-between absolute bottom-[0px] rounded-[24px]">
                <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-between" >
                <div className="wrapper w-[53px] h-[53px] rounded-[16px] bg-[#F5f4f2] flex justify-center items-center">
                  <img src="/assets/caricon.png" alt="" />

                </div>
                <div className="ml-[10px]">
                  <p className=" leading-4 text-[14px] text-black font-semibold">
                   Delivery 0 ₸ 
                  </p>
                  <p className=" leading-4 text-[14px] font-semibold text-[#7fd04d] ">upto free 600 ₸  </p>
                </div>
                </div>
                <div className="moreinfo">
                  <img src="/assets/moreinfo.png" alt="" />
                </div>
                </div>
                <div className=" mt-[20px] button h-[56px] left-[0px]  bottom-[0px] mb-[20px] rounded-[16px] w-[calc(100%-20px)] px-[20px] bg-[#FCE000]">
                
                <div className="flex justify-between h-full  items-center">
                  <p className="text-black text-[18px] font-semibold">Next</p>
                  <p className="text-black text-[23px] font-bold">{totalPrice} ₸</p>
                </div>
              </div>
              </div>
              {/* </div> */}
                
                </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;
