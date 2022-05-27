import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Home = () => {

  return (
    <>
      <section className="w-screen h-screen bg-[#fffee6]">
        <div className="flex justify-center items-center h-2/4">
          <img src={logo} alt="" className="md:h-[40%] sm:h-[20%]  " />
        </div>
        <div className="w-full h-2/4 flex flex-col items-center p-5 gap-5 ">
        <Link to="/waiter">
          <button
            type="button"
            className="p-2 font-weight: 500 shadow-md bg-[#ff8000] rounded-md hover:bg-[#e76f3d] text-white"
          >
            Acceso Garzon
          </button>
          </Link>
          <Link to="/kitchen">
            <button
              type="button"
              className=" p-2  font-weight: 500 shadow-md bg-[#ff0080] rounded-md hover:bg-indigo-700 text-white"
            >
              Acceso Cocina
            </button>
          </Link>
        </div>
      </section>
      
    </>
  );
};
export default Home;
