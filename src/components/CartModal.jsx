/* eslint-disable react/prop-types */


const CartModal = ({isOpen,dispatch,toggleClose,clearCart,decrementQuantity,incrementQuantity,cart,totalPrice}) => {
  return (
    <>
    {isOpen && (
        <div
          onClick={() => dispatch(toggleClose())}
          className="fixed inset-0 flex  right-0 bg-black bg-opacity-50 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-[425px] h-[500px] p-[20px] overflow-auto right-[80px] top-[80px] rounded-[30px] shadow-lg absolute"
          >
            {/* Close button */}
            <h5 className="absolute top-3 left-4 text-[23px] font-bold ">
              Cart
            </h5>
            <button
              onClick={() => {
                dispatch(toggleClose());
                dispatch(clearCart());
              }}
              className="absolute top-3 right-2 px-3 py-1  text-gray-400 rounded"
            >
              Clear
            </button>
            <div className=" mt-[70px] w-full">
              {" "}
              {/* Wrapper with scrolling */}
              <div className="h-[230px] overflow-y-scroll">
                {cart?.map((item, i) => {
                  const isLastItem = i === cart.length - 1;
                  return (
                    <div
                      key={i}
                      className={`flex mt-[25px] items-center justify-between  w-full max-w-lg pb-4 ${
                        isLastItem ? "border-b-2" : "border-b-0"
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
                          isLastItem ? "last:border-b-0" : ""
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
                              dispatch(
                                decrementQuantity({ foodname: item.foodname })
                              )
                            }
                            className="text-gray-500 text-[28px] font-semibold mb-[3px] hover:text-gray-800 px-2 pointer-events-auto"
                          >
                            -
                          </button>
                          <span className="text-sm font-bold px-2">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              dispatch(
                                incrementQuantity({ foodname: item.foodname })
                              )
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
                  <div className="flex items-center justify-between">
                    <div className="wrapper w-[53px] h-[53px] rounded-[16px] bg-[#F5f4f2] flex justify-center items-center">
                      <img src="/assets/caricon.png" alt="" />
                    </div>
                    <div className="ml-[10px]">
                      <p className=" leading-4 text-[14px] text-black font-semibold">
                        Delivery 0 ₸
                      </p>
                      <p className=" leading-4 text-[14px] font-semibold text-[#7fd04d] ">
                        upto free 600 ₸{" "}
                      </p>
                    </div>
                  </div>
                  <div className="moreinfo">
                    <img src="/assets/moreinfo.png" alt="" />
                  </div>
                </div>
                <div className=" mt-[20px] button h-[56px] left-[0px]  bottom-[0px] mb-[20px] rounded-[16px] w-[calc(100%-20px)] px-[20px] bg-[#FCE000]">
                  <div className="flex justify-between h-full  items-center">
                    <p className="text-black text-[18px] font-semibold">Next</p>
                    <p className="text-black text-[23px] font-bold">
                      {totalPrice} ₸
                    </p>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CartModal