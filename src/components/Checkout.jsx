import { addDoc, doc, collection, getFirestore, updateDoc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { CartContext } from "./context/CartContext";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useContext } from "react";


const Checkout = () => {
    const {cart, clear, sumTotal} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer: {name:nombre, phone:telefono, email:email},
            items: cart.map(item => ({title:item.name, id:item.id, price:item.price, quantity:item.quantity,  total:item.quantity * item.price})),
            Total: sumTotal(),
            order_date: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            

            cart.forEach(item => {
                let producto = doc(db, "products", item.id);
                getDoc(producto).then((snapShot) => {
                    updateDoc(producto, {stock:snapShot.data().stock - item.quantity});
                });
            });
                        
            clear();
        });
    }

    
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre y Apellido:</label>
                            <input type="text" className="form-control" placeholder="Ingrese su Nombre" onInput={(e) => {setNombre(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label for="phone" className="form-label">Teléfono:</label>
                            <input type="number" className="form-control" id="phone" placeholder="342-476-7722" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email:</label>
                            <input type="text" className="form-control" id="email" placeholder="Ingrese su Email" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-warning" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <table className="table">                                
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><Link to={"/item/"+item.id}><img style={{borderRadius:"50%", border:"solid 2px "  }} src={item.image1} alt={item.name} width={80} /></Link></td>
                                    <td className="align-middle">{item.name}</td>
                                    <td className="align-middle text-end">{item.quantity}</td>
                                    <td className="align-middle text-end">${item.quantity * item.price}</td>
                                </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-end"><b>Total</b></td>
                                <td className="text-end text-success"><b>${sumTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>    
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                {orderId !== "" ? <Navigate to={"/thankyou/" + orderId} /> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;