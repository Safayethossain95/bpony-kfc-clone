/* eslint-disable react-hooks/exhaustive-deps */


import {useState,useEffect} from 'react'
const Homepage = () => {
 
  const tabs = [
    {
      id: "tab1",
      label: "What's new",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gra vida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      id: "tab2",
      label: "Solo Baskets",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis ac urna gravida, at consequat nisi posuere. Aenean sollicitudin elit at erat faucibus vehicula. Morbi tincidunt risus vel vehicula ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      id: "tab3",
      label: "Combo",
      content:
        "Suspendisse potenti. Phasellus interdum, turpis sit amet ultricies mollis, nisi sapien mattis tortor, eget vehicula tortor nunc vel mauris. Donec efficitur risus eu velit vestibulum blandit. Donec lacinia nec mi ut vehicula. Mauris bibendum erat nec nisi efficitur, a pellentesque nisi lobortis.",
    },
  ];
  const [activeTab, setActiveTab] = useState("tab1");
  
   // Track the active tab
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px 0px 0px', threshold: 0.1 } // Adjust -100px for offset
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
      console.log(element.offsetTop + 'px')
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(id)
      
    }
  };
 
  return (
    <>
     {/* <div className="h-[80px]"></div> */}
    <div className="container h-screen w-full overflow-y-scroll  mr-0">
      <div className="grid relative grid-cols-1 md:grid-cols-[2.5fr_7fr_2.5fr]">
        {/* Sidebar */}
        <div className="sidebar  h-[calc(100vh-80px)]  p-4 rounded-lg">
         

          <div  className="div  w-[232px] h-full  fixed top-[90px]">
          <ul className="pt-[50px]">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                onClick={() => handleScrollTo(tab.id)}
                className={`h-[48px] ps-[14px] flex items-center rounded-lg cursor-pointer hover:bg-white/50 duration-300 
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
              <h6 className="text-[48px] text-white font-bold z-50">
                KFC Baizar Mall
              </h6>
              <div className="flex">
              <div className="flex mr-[8px] items-center gap-2 bg-white bg-opacity-80 pt-[8px] pr-[18px] pb-[8px] pl-[8px]
              rounded-[16px] shadow-md">
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

                  <div className="text-black text-[20px] leading-5 font-semibold">4.3</div>
                  <div className="text-gray-500 text-xs leading-5">200+</div>
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
            <div
            
              key={tab.id}
              id={tab.id}
              className="mb-8 py-4"
            >
              {tab.label === "What's new" ? (
                <div className="flex items-center  bg-[#E4F2DC] text-green-700 rounded-lg">
                  <div className="flex items-center justify-center  text-white">
                    <img
                      className="w-auto h-[72px]"
                      src="https://eda.yandex/images/3816972/0a6904a5dbf6de2762626985e3fc860b.png"
                      alt=""
                    />
                  </div>
                  <span className="ml-3 text-sm font-medium">
                    Free delivery — on any order
                  </span>
                </div>
              ) : (
               <>
               <div className={`foodwrapper `} >
                <h3 className="text-[32px] font-bold mb-[20px]">{tab.label}</h3>
                <div  className={`grid  grid-cols-4 gap-3`}>

                <div className={`mycard  bg-white rounded-[24px] shadow-md  p-[12px]`}>
                  <img className="w-full h-48 object-cover rounded-[24px]" src="https://eda.yandex/images/3793239/5bb2e868478071eb191df91fca266e25-216x188.jpeg" alt="KFC Bucket"/>
                  <div className="">
                    <div className="font-bold text-[24px]">4 250 ₸</div>
                    <p className="text-gray-700 text-base">
                      Basket S: wings, strips, nuggets
                    </p>
                  </div>
                  <div className=" text-center mt-[38px]">
                    <button className="bg-[#F5F4F2] w-full  rounded-[18px] justify-center text-black flex items-center p-3  focus:outline-none focus:shadow-outline">
                      <img className="mb-[-3px]" src="/assets/plusicon.png" alt="" /> <span className="ms-[8px] font-medium">Add</span>
                    </button>
                  </div>
                </div>

                <div className="mycard bg-white rounded-[24px] shadow-md overflow-hidden p-[12px]">
                  <img className="w-full h-48 object-cover rounded-[24px]" src="https://eda.yandex/images/3793239/5bb2e868478071eb191df91fca266e25-216x188.jpeg" alt="KFC Bucket"/>
                  <div className="">
                    <div className="font-bold text-[24px]">4 250 ₸</div>
                    <p className="text-gray-700 text-base">
                      Basket S: wings, strips, nuggets
                    </p>
                  </div>
                  <div className=" text-center mt-[38px]">
                    <button className="bg-[#F5F4F2] w-full  rounded-[18px] justify-center text-black flex items-center p-3  focus:outline-none focus:shadow-outline">
                      <img className="mb-[-3px]" src="/assets/plusicon.png" alt="" /> <span className="ms-[8px] font-medium">Add</span>
                    </button>
                  </div>
                </div>

                <div className="mycard bg-white rounded-[24px] shadow-md overflow-hidden p-[12px]">
                  <img className="w-full h-48 object-cover rounded-[24px]" src="https://eda.yandex/images/3793239/5bb2e868478071eb191df91fca266e25-216x188.jpeg" alt="KFC Bucket"/>
                  <div className="">
                    <div className="font-bold text-[24px]">4 250 ₸</div>
                    <p className="text-gray-700 text-base">
                      Basket S: wings, strips, nuggets
                    </p>
                  </div>
                  <div className=" text-center mt-[38px]">
                    <button className="bg-[#F5F4F2] w-full  rounded-[18px] justify-center text-black flex items-center p-3  focus:outline-none focus:shadow-outline">
                      <img className="mb-[-3px]" src="/assets/plusicon.png" alt="" /> <span className="ms-[8px] font-medium">Add</span>
                    </button>
                  </div>
                </div>

                <div className="mycard bg-white rounded-[24px] shadow-md overflow-hidden p-[12px]">
                  <img className="w-full h-48 object-cover rounded-[24px]" src="https://eda.yandex/images/3793239/5bb2e868478071eb191df91fca266e25-216x188.jpeg" alt="KFC Bucket"/>
                  <div className="">
                    <div className="font-bold text-[24px]">4 250 ₸</div>
                    <p className="text-gray-700 text-base">
                      Basket S: wings, strips, nuggets
                    </p>
                  </div>
                  <div className=" text-center mt-[38px]">
                    <button className="bg-[#F5F4F2] w-full  rounded-[18px] justify-center text-black flex items-center p-3  focus:outline-none focus:shadow-outline">
                      <img className="mb-[-3px]" src="/assets/plusicon.png" alt="" /> <span className="ms-[8px] font-medium">Add</span>
                    </button>
                  </div>
                </div>

                <div className="mycard bg-white rounded-[24px] shadow-md overflow-hidden p-[12px]">
                  <img className="w-full h-48 object-cover rounded-[24px]" src="https://eda.yandex/images/3793239/5bb2e868478071eb191df91fca266e25-216x188.jpeg" alt="KFC Bucket"/>
                  <div className="">
                    <div className="font-bold text-[24px]">4 250 ₸</div>
                    <p className="text-gray-700 text-base">
                      Basket S: wings, strips, nuggets
                    </p>
                  </div>
                  <div className=" text-center mt-[38px]">
                    <button className="bg-[#F5F4F2] w-full  rounded-[18px] justify-center text-black flex items-center p-3  focus:outline-none focus:shadow-outline">
                      <img className="mb-[-3px]" src="/assets/plusicon.png" alt="" /> <span className="ms-[8px] font-medium">Add</span>
                    </button>
                  </div>
                </div>

                <div className="mycard bg-white rounded-[24px] shadow-md overflow-hidden p-[12px]">
                  <img className="w-full h-48 object-cover rounded-[24px]" src="https://eda.yandex/images/3793239/5bb2e868478071eb191df91fca266e25-216x188.jpeg" alt="KFC Bucket"/>
                  <div className="">
                    <div className="font-bold text-[24px]">4 250 ₸</div>
                    <p className="text-gray-700 text-base">
                      Basket S: wings, strips, nuggets
                    </p>
                  </div>
                  <div className=" text-center mt-[38px]">
                    <button className="bg-[#F5F4F2] w-full  rounded-[18px] justify-center text-black flex items-center p-3  focus:outline-none focus:shadow-outline">
                      <img className="mb-[-3px]" src="/assets/plusicon.png" alt="" /> <span className="ms-[8px] font-medium">Add</span>
                    </button>
                  </div>
                </div>

                <div className="mycard bg-white rounded-[24px] shadow-md overflow-hidden p-[12px]">
                  <img className="w-full h-48 object-cover rounded-[24px]" src="https://eda.yandex/images/3793239/5bb2e868478071eb191df91fca266e25-216x188.jpeg" alt="KFC Bucket"/>
                  <div className="">
                    <div className="font-bold text-[24px]">4 250 ₸</div>
                    <p className="text-gray-700 text-base">
                      Basket S: wings, strips, nuggets
                    </p>
                  </div>
                  <div className=" text-center mt-[38px]">
                    <button className="bg-[#F5F4F2] w-full  rounded-[18px] justify-center text-black flex items-center p-3  focus:outline-none focus:shadow-outline">
                      <img className="mb-[-3px]" src="/assets/plusicon.png" alt="" /> <span className="ms-[8px] font-medium">Add</span>
                    </button>
                  </div>
                </div>

                </div>
               </div>
               </>
              )}
            </div>
          ))}
        
        </div>
        <div className=" h-[90px] bg-gray-50 p-4 mt-[110px] rounded-[24px] m-4">
          <h3 className="text-[24px] font-bold">Cart</h3>
        </div>
      </div>
    </div>
    </>
  );
};

export default Homepage;
