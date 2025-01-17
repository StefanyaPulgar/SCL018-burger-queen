import React, { useState, useContext } from "react";
import items from "../data.json";
import ShoppingCart from "./ShoppingCart.jsx";
import { ContextProducts } from "../../App.jsx";

const NavMenu = () => {
  const globalContext = useContext(ContextProducts);

  const filteredProducts = items.productos.filter((e) => e.type === "Menu");

  const [menuItems, setMenuitems] = useState(filteredProducts);
 
  const filterData = (option) => {

    // eslint-disable-next-line default-case
    switch (option) {
      case "Menu":
        const menu = items.productos.filter((e) => e.type === option);
        setMenuitems(menu);
        break; 
      case "Bebestible":
        const drinks = items.productos.filter((e) => e.type === option);
        setMenuitems(drinks);
        break;
      case "Promociones":
        const promotions = items.productos.filter((e) => e.type === option);
        setMenuitems(promotions);
        break;
    }
  };

  return (
    <>
      <section className="w-screen">
        <div className="space-x-6 flex justify-center h-10">
          <button
            type="button"
            className="p-2  font-weight: 500 shadow-md bg-[#ff8000] rounded-md active:bg-[#e76f3d] text-white"
            onClick={() => filterData("Menu")}
          >
            Menu principal
          </button>
          <button
            type="button"
            className="p-2  font-weight: 500 shadow-md bg-[#ff8000] rounded-md active:bg-[#e76f3d] text-white"
            onClick={() => filterData("Bebestible")}
          >
            Bebestible
          </button>
          <button
            type="button"
            className="p-2  font-weight: 500 shadow-md bg-[#ff8000] rounded-md active:bg-[#e76f3d] text-white"
            onClick={() => filterData("Promociones")}
          >
            Promociones
          </button>
        </div>
        <div className="grid md:grid-cols-[2fr,1fr] gap-4 p-4 h-auto">
          <section className="grid   content-between md:grid-cols-3 gap-3	">
            {menuItems.map((producto, index) => (
              <div className=" border-1 border-[#008c82] bg-[#004d47] rounded h-full shadow-md text-white" key={index}> {/*key se debe incluir para crear listas de elementos, ayuda a identificar si los items han cambiado */}
                <div className="flex justify-center ">
                  <h1 className="py-1"><strong>{producto.name} </strong></h1>
                </div>
                <div className="grid sm:grid-cols-4 md:grid-col-9  p-1 gap-2">
                  <div className="sm:col-span-2 ">
                    <img className="rounded shadow-md sm:w-[60%]" src={producto.img} alt="products"/>
                  </div>
                  <div className="sm:col-span-2   divide-y divide-[#eeee02]">
                    <p className="pb-2">{producto.description}</p>
                    <p className="flex justify-center pt-2"><strong>${producto.price} </strong></p>
                    
                  </div>
                  <div className="flex sm:col-start-3 justify-center sm:px-10 md:px-8">
                    <button onClick={()=> globalContext.addCarrito(producto)} className="flex items-end justify-end sm:px-4 md:px-2 py-1   font-weight: 500 shadow-md bg-[#008e00] rounded-md hover:bg-[#00c600] text-white">
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <div className=" h-min w-full sm:hidden">
            <ShoppingCart/>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavMenu;

