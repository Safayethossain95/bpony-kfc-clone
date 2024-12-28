import { useDispatch, useSelector } from "react-redux";
import { selectTotalPrice, toggleMapsOpen, toggleOpen } from "../store/exampleSlice";

const Mynavbar = () => {
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectTotalPrice);
  const cart = useSelector((state) => state.example.cart);
  return (
    <>
      <div className="mynavbar fixed z-10 bg-[#F5F4F2] flex items-center h-[80px] w-full  shadow-md px-[24px]">
        <div className="lgoo">
          <img src="/assets/logo.png" alt="" />
        </div>
        <div className="search ms-[35px]">
          <div className="rounded-[17px] border-[#D0CFCE] z-10 border-2 px-4 py-2 bg-white w-[346px] flex items-center">
            <img src="/assets/searchicon.png" alt="" />
            <input
              type="text"
              placeholder="Find a restaurant"
              className="outline-none px-2 w-full"
            />
          </div>
        </div>
        <div onClick={()=>dispatch(toggleMapsOpen())} className="location cursor-pointer h-[48px] ms-[12px] rounded-[17px] border-[#D0CFCE] z-10 border-2 px-4 py-2 bg-[#F5F4F2] w-[346px] flex items-center justify-between">
          <div className="div flex items-center">
          <img src="/assets/locationicon.png" alt="" />
          <p className="font-medium">Orama qalashyǵy, 16, entrance 2</p>
          </div>
          <img src="/assets/down.png" alt="" />
        </div>

        <div className="right ms-auto flex gap-4">
          <div className="flex">
            <img className="h-[48px]" src="/assets/notification.png" alt="" />
            <img className="h-[46px]" src="/assets/language.png" alt="" />
          </div>
          {cart?.length !== 0 && (
            <button
              onClick={() => dispatch(toggleOpen())}
              className="flex items-center space-x-2 bg-[#FCE000] text-black font-medium h-[50px] px-4 rounded-[16px]"
            >
              <img src="/assets/cartbuttonicon.png" alt="" />

              <span className="text-[20px]">{totalPrice}₸</span>
            </button>
          )}
        </div>
      </div>
      
    </>
  );
};

export default Mynavbar;
