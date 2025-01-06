/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decrementQuantity,
  incrementQuantity,
  loadCart,
  selectTotalPrice,
  toggleClose,
  toggleMapsOpen,
} from "../store/exampleSlice";
import axios from "axios";
import { tabsfr } from "../api/data";
import Banner from "../components/Banner";
import Cart from "../components/Cart";
import MainContent from "../components/MainContent";
import Sidebar from "../components/Sidebar";
import { backendAPI } from "../config/config";
import MapsModal from "../components/MapsModal";
import CartModal from "../components/CartModal";
const Homepage = () => {
  const [tabs, settabs] = useState(tabsfr);
  const [activeTab, setActiveTab] = useState("tab1");
  useEffect(() => {
    axios
      .get(`${backendAPI}/foodget`) 
      .then((response) => {
        if (response) {
          console.log(response.data);
          settabs(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("Intersecting:", entry.target.id, entry.isIntersecting);
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { rootMargin: "-70px 0px 0px 0px", threshold: 0.1 }
    );

    tabs.forEach((tab) => {
      const element = document.getElementById(tab.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: yPosition, behavior: "smooth" });
      setActiveTab(id);
    }
  };
  const cart = useSelector((state) => state.example.cart);

  const isOpen = useSelector((state) => state.example.isOpen);
  const isOpenMaps = useSelector((state) => state.example.isOpenMaps);
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectTotalPrice);

  async function loadcartme() {
    axios
      .get(`${backendAPI}/cartget`)
      .then((response) => {
        if (response) {
          console.log(response.data);
          dispatch(loadCart(response.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    loadcartme();
  }, []);

  return (
    <>
      <div className="  w-full   mr-0">
        <div className="container relative">
          <div className="grid relative min-w-[990px] xl-1400:grid-cols-[2.3fr_6.7fr_3fr] grid-cols-[3fr_9fr] lg:grid-cols-[3fr_9fr]">
            <Sidebar
              tabs={tabs}
              handleScrollTo={handleScrollTo}
              activeTab={activeTab}
            />
            <div className="rounded-lg p-3  pt-[110px] scrollbar-hide ">
              <Banner />
              <MainContent
                tabs={tabs}
                dispatch={dispatch}
                addToCart={addToCart}
              />
            </div>
            <Cart
              cart={cart}
              totalPrice={totalPrice}
              dispatch={dispatch}
              decrementQuantity={decrementQuantity}
              incrementQuantity={incrementQuantity}
            />
          </div>
        </div>
      </div>
      <MapsModal isOpenMaps={isOpenMaps} dispatch={dispatch} toggleClose={toggleClose} toggleMapsOpen={toggleMapsOpen} clearCart={clearCart}/>
      <CartModal isOpen={isOpen} dispatch={dispatch} toggleClose={toggleClose} clearCart={clearCart} decrementQuantity={decrementQuantity} incrementQuantity={incrementQuantity} cart={cart} totalPrice={totalPrice}/>
    </>
  );
};

export default Homepage;
