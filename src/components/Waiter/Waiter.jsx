import React, { useContext } from "react";
import Modal from "../Modal";
import CustomerData from "./CustomerData";
import NavMenu from "./NavMenu";
import { ContextProducts } from "../../App";
import { Link } from "react-router-dom";


const Waiter = () => {
  const globalContext = useContext(ContextProducts);
  const changeState = () => {
    globalContext.setStateModalEntry(false);
    globalContext.setStateModal(false)
  }

  return (
    <>
      <Modal
        title="Selecciona una opcion"
        state={globalContext.stateModalEntry}
        changeState={globalContext.setStateModalEntry}
      >
        <section className="">
          <div className="grid  justify-center gap-2 ">
            <button
              onClick={() => 
                globalContext.setStateModal(true)}
              type="button"
              className="w-auto btn btn-danger font-weight: 500 shadow-md bg-[#ff8000] rounded-md hover:bg-[#ff3d00] text-white"
            >
              Tomar Pedido
            </button>
            <Link to="/ordersOk">
            <button className=" btn btn-info p-2  font-weight: 500 shadow-md bg-[#ff0080] rounded-md hover:bg-[#db005c] text-white">
              Pedidos por entregar
            </button>
            </Link>
          </div>
        </section>
      </Modal>
      <Modal
        title="Ingreso de pedido"
        state={globalContext.stateModal}
        changeState={globalContext.setStateModal}
      >
        <form>
          <section className="flex md:items-center flex-col">
            <div className="">
              <h2 className="text-base  font-semibold border-b-2 mb-1">
                Ingrese nombre del cliente
              </h2>
              <input
                type="text"
                name="name"
                placeholder="Nombre Cliente"
                value={globalContext.name}
                onChange={(event) => globalContext.setName(event.target.value)} //recupera el valor de la entrada
              />
            </div>
            <div className="mt-2 ">
              <h2 className="mb-1 text-base font-semibold border-b-2 ">
              Ingrese numero de mesa
              </h2>
              <input
                type="number"
                name="number"
                placeholder="N° Mesa"
                value={globalContext.table}
                onChange={(event) => globalContext.setTable(event.target.value)}
              />
            </div>
           <div className="flex justify-center mt-3">
            <button
              onClick={() => changeState()}
              type="button"
              className="p-2  font-weight: 500 shadow-md bg-[#ff8000]  rounded-md hover:bg-[#ff3d00] last:text-white"
            >
              Ingresar
            </button>
            </div>
          </section> 
          
        </form>
      </Modal>
      <section className="bg-[#fffee6]">
        <CustomerData name={globalContext.name} number={globalContext.table} />
        <div className="flex justify-center gap-2 space-x-3 w-screen">
          <NavMenu />
        </div>
      </section>
    </>
  );
};

export default Waiter; 

