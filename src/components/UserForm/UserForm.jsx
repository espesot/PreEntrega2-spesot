import React from 'react'
import { useState } from 'react'
import InputForm from './InputForm';
import { createBuyOrden } from '../service/firebase'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export default function UserForm({ cart, getTotalPrice, clearCart }) {
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: ""
    })

    function onInputChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value;
        let newUserData = { ...userData }
        newUserData[name] = value
        setUserData(newUserData)
    }


    function onSubmit(evt) {
        evt.preventDefault();
    

    const ordenData = {
        buyerData: userData,
        cart: cart,
        total: getTotalPrice(),
        date: new Date(),
    }

    createBuyOrden(ordenData).then((respuesta) => {
        Swal.fire({
            title: 'Thanks👌!!!',
            text: 'Gracias por elegirnos',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(result => {
            clearCart()
            navigate("/")
        })
    });
    }
    return (
        <form onSubmit={onSubmit}>
            <InputForm value={userData.name} title="Nombre" name="name" required={true} onChange={onInputChange} />
            <InputForm value={userData.email} title="Eail" name="email" required={true} onChange={onInputChange} />
            <InputForm value={userData.phone} title="Telefono" name="phone" required={true} onChange={onInputChange} />

            <button
                type="submit">
                Crear orden
            </button>
        </form>
    );
}
