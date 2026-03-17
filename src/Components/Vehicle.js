import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Vehicle = ({ id, name, year, price }) => {
  const totalCars = useSelector((state) => state.cars.total);

  return (
    <Link to={`/car/${id}`} className="vehicle-link">
      <div className="vehicle-card">
        <h3>{name}</h3>
        <p>Year: {year}</p>
        <p>Price: ${price}</p>
        <div>Total cars: {totalCars}</div>
      </div>
    </Link>
  );
};

export default Vehicle;