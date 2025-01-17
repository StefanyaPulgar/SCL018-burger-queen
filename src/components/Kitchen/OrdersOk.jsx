
import React, { useContext, useEffect, useState } from "react";
import {
    doc,
  collection,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import db from "../../firebase";

const OrderOk = () => {

    const [orderOk, setOrderOk] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "orders"), orderBy("orderTime", "asc"));
        onSnapshot(
          q,
          (QuerySnapshot) => {
            const arrayOrders = QuerySnapshot.docs.map((doc) => {
              return { ...doc.data(), id: doc.id };
            });
            setOrderOk(arrayOrders);
          },
          (error) => {
            console.log(error);
          }
        );
      }, []);
    
      const arrayOrder = [...orderOk]; //total de ordenes
      const pendingOrder = arrayOrder.filter((e) => {
        return e.status === "Finalizado";
      });

      const changeStatus = async (id) => {
        const statusCook = doc(db, "orders", id);
        await updateDoc(statusCook, {
          status: "Entregado"
        })
        console.log("listeilor")
      }

return(
    <section className="w-screen md:h-screen sm:h-full bg-[#00332f]  ">
      <h1 className="flex justify-center text-2xl text-white py-3">Pedidos pendientes para entregar</h1>
      <div className=" flex flex-wrap gap-3 sm:justify-center ">
        {pendingOrder.map((order) => (
          <div className="bg-emerald-200 w-60 m-2 p-2 rounded-md border-opacity-60 border-2 border-indigo-500" key={order.id}>
            <h1 className="text-xl flex justify-center">Para la mesa {order.table} </h1>
            <hr/>
            <p><strong>Hora del pedido: </strong>  {order.orderTime}</p>
            <p> <strong>Cliente:  </strong>{order.client}</p>
            <p><strong>Resumen del pedido: </strong></p>
            {order.order.map((e) => (
              <li key={e.id}>
                
                |{e.count}| {e.name}
              </li>
            ))}
            <p><strong>Total:  </strong> $ {order.totalAmount}</p>
            <div className="flex justify-center mt-2">
            <button 
            onClick={()=> {changeStatus(order.id)}}
            className="p-1 font-weight: 500 shadow-md bg-indigo-500 rounded-md hover:bg-indigo-700 text-white">Entregado</button>

            </div>
          </div>
        ))}
      </div>
    </section>
)
}

export default OrderOk;