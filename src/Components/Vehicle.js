const Vehicle = ({ name, year, price }) => {
  return (
    <div className="vehicle-card">
      <h3>{name}</h3>
      <p>Year: {year}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Vehicle;