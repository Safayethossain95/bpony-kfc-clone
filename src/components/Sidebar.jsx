/* eslint-disable react/prop-types */


const Sidebar = ({tabs,handleScrollTo,activeTab}) => {
     
     
  return (
    <>
    <div className="sidebar  h-[calc(100vh-80px)] pointer-events-none  p-4 rounded-lg">
              <div className="div  w-[220px] h-full  fixed top-[90px]">
                <ul className="pt-[50px] pointer-events-auto">
                <h3 className=" text-[18px] rounded-[16px] font-medium mb-[80px] bg-white h-[48px] ps-[14px]  flex items-center w-full">
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
    </>
  )
}

export default Sidebar