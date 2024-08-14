import "../styles/Card.css";
import InputData from "./InputData";

function Card({ inputData }) {
  const customerData = Object.entries(inputData).map(([key, value]) => ({
    [key]: value,
  }));
  return (
    <>
      <div className="mensajeConfirmacion">
        <h2>
          Muchas Gracias! por registrarse con nosotros los datos ingresados
          fueron los siguientes:
        </h2>
      </div>
      <div className="datos-ingresados">
        <InputData customerData={customerData} />
      </div>
    </>
  );
}

export default Card;
