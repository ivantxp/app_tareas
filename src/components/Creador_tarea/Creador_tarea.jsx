import { useState } from "react";
const Creador = () => {
    const [ingreso, useIngrese] = useState("");
    function agregar(event) {
        useIngrese(event.target.value);
    }
    function guardar() {
        console.log(ingreso);
    }
    return (
        <>
            <input
                type="text"
                name=""
                id="input"
                value={ingreso}
                placeholder="ingresar tarea"
                onChange={agregar}
            />
            <button onClick={guardar}>crear tarea</button>
        </>
    );
};
export default Creador;
