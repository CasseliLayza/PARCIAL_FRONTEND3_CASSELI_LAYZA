function InputData({ customerData }) {
  return (
    <>
      {customerData.map((obj, idx) => {
        let k = Object.keys(obj)[0];
        return (
          <h3 key={idx}>
            {k == "nameComplete"
              ? `Nombre completo: ${obj.nameComplete}`
              : k == "favoriteHero"
              ? `Personaje favorito: ${obj.favoriteHero}`
              : k == "age"
              ? `edad: ${obj.age}`
              : ""}
          </h3>
        );
      })}
    </>
  );
}

export default InputData;
