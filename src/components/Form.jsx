import { useState } from "react";
import GnsysStyles from "../styles/GnsysStyles.module.css";
import Card from "./Card.jsx";
import Error from "./Error.jsx";
import expresiones from "../utility/expressions.js";

function Form() {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [customer, setCstuomer] = useState({
    nameComplete: "",
    favoriteHero: "",
    age: 0,
  });

  const handleNameComplete = (e) => {
    setCstuomer({ ...customer, nameComplete: e.target.value });
  };

  const handlefavoriteHero = (e) => {
    setCstuomer({ ...customer, favoriteHero: e.target.value });
  };

  const handleAge = (e) => {
    setCstuomer({ ...customer, age: e.target.value });
  };

  const resetForm = () => {
    setCstuomer({
      nameComplete: "",
      favoriteHero: "",
      age: 0,
    });
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      customer.nameComplete.trim().length >= 3 &&
      customer.nameComplete[0] !== " " &&
      expresiones.name.test(customer.nameComplete) &&
      customer.favoriteHero.trim().length >= 6 &&
      expresiones.age.test(customer.age)
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      {show ? (
        <Card inputData={customer} />
      ) : (
        <>
          <form onSubmit={handleSubmit} className={GnsysStyles.form}>
            <label>Nombre Completo:</label>
            <input
              type="text"
              placeholder="Ingrese su nombre"
              value={customer.nameComplete}
              onChange={handleNameComplete}
            />

            <label>Personaje Favorito:</label>
            <input
              type="text"
              placeholder="Ingrese su personaje favorito"
              value={customer.favoriteHero}
              onChange={handlefavoriteHero}
            />

            <label>Ingrese su Edad:</label>
            <input
              type="number"
              placeholder=""
              value={customer.age}
              onChange={handleAge}
            />

            <button>Enviar</button>
          </form>

          <button onClick={resetForm}>Clear Form</button>
        </>
      )}

      {error ? <Error /> : null}
    </>
  );
}

export default Form;
