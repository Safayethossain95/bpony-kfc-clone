/* eslint-disable react/prop-types */


const Cart = ({cart,dispatch,decrementQuantity,incrementQuantity,totalPrice}) => {
  return (
    <>
     <div className="  bg-white p-4 mt-[110px] hidden xl-1400:block fixed w-[21%]  h-[calc(100vh-130px)]    right-[5%] rounded-[24px] m-4 flex-col lg-flex-row">
                  <h3 className="text-[24px] font-bold relative">Cart</h3>
                  {cart?.length==0?
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
                    <div className="overflow-x-hidden overflow-y-auto w-full max-h-[calc(100%-200px)]"> {/* Wrapper with scrolling */}
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
                                    dispatch(decrementQuantity({ foodname: item.foodname,quantity: 1 }))
                                  }
                                  className="text-gray-500 text-[28px] font-semibold mb-[3px] hover:text-gray-800 px-2 pointer-events-auto"
                                >
                                  -
                                </button>
                                <span className="text-sm font-bold px-2">{item.quantity}</span>
                                <button
                                  onClick={() =>
                                  {dispatch(incrementQuantity({ foodname: item.foodname }));
                                }
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
                      {cart?.length!==0&&<div className="div flex justify-between  mt-3">
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
    </>
  )
}

export default Cart