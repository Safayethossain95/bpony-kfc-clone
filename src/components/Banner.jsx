

const Banner = () => {
  return (
    <>
     <div className="bannerimg responsive-box rounded-[36px]">
                <div className="shade "></div>
                <div className="upper absolute p-[50px] h-full flex items-start justify-end flex-col">
                  <h6 className="text-[52px] text-white font-bold z-5 mb-[20px]">
                  KFC Ainabulak
                  </h6>
                  <div className="flex">
                    <div
                      className="flex mr-[8px] items-center gap-2 bg-white bg-opacity-80 cursor-pointer duration-300 hover:bg-opacity-90 pt-[8px] pr-[18px] pb-[8px] pl-[8px]
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
                    <div className="div flex items-center gap-2 bg-white bg-opacity-80 hover:bg-opacity-90 duration-300 px-3 py-2 rounded-[16px] shadow-md">
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
    </>
  )
}

export default Banner