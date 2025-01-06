/* eslint-disable react/prop-types */


const MainContent = ({tabs,dispatch,addToCart}) => {
  return (
    <>
    {tabs.map((tab) => (
                    <div key={tab.id} id={tab.id} className="mb-8 py-4">
                      {tab.id === "tab1" ? (
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
                                            dispatch(addToCart({...item,quantity:1}))
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
    </>
  )
}

export default MainContent