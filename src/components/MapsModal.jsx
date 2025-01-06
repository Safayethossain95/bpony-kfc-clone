/* eslint-disable react/prop-types */

const MapsModal = ({isOpenMaps,dispatch,toggleClose,toggleMapsOpen,clearCart}) => {
  return (
   <>
   {isOpenMaps && (
           <div
             onClick={() => dispatch(toggleClose())}
             className="fixed justify-center items-center inset-0 flex  right-0 bg-black bg-opacity-50 z-50"
           >
             <div
               onClick={(e) => e.stopPropagation()}
               className="bg-white relative min-w-[962px] h-[500px] p-[20px] overflow-auto  rounded-[30px] shadow-lg "
             >
               {/* Close button */}
               <h5 className="absolute top-3 left-4 text-[23px] font-bold ">
                 Enter Delivery Address
               </h5>
               <p className="absolute top-11 left-4 text-[14px] ">
                 Or else how will we know where to deliver?
               </p>
               <button
                 onClick={() => {
                   dispatch(toggleMapsOpen());
                   dispatch(clearCart());
                 }}
                 className="absolute top-3 right-2 px-3 py-1  text-gray-400 rounded"
               >
                 Close
               </button>
               <div className=" mt-[70px] w-full">
                 {" "}
                 {/* Wrapper with scrolling */}
                 {/* {cart.length!==0&&<div className="div flex justify-between  mt-3">
                 <p className="text-[18px] font-medium">Service fee</p>
                 <p className="text-[20px] font-semibold">NaN ₸</p>
                 </div>} */}
                 <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.9087840542206!2d-79.48918781516208!3d43.65006609659147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b36883360d2b9%3A0x222775b413b4afc2!2s23%20Jane%20St%2C%20Toronto%2C%20ON%20M6S%203Y3%2C%20Canada!5e0!3m2!1sen!2sbd!4v1735397846761!5m2!1sen!2sbd"
                   width="900"
                   height="450"
                   style={{ border: 0 }}
                   allowFullScreen
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                   title="Google Map"
                 ></iframe>
                 {/* </div> */}
               </div>
             </div>
           </div>
         )}
   </>
  )
}

export default MapsModal