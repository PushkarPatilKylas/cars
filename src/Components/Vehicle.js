import { Link } from 'react-router-dom';

const Vehicle = ({ id, name, year, price }) => {
  return (
    <Link to={`/car/${id}`} className="vehicle-link">
      <div className="vehicle-card">
        <h3>{name}</h3>
        <p>Year: {year}</p>
        <p>Price: ${price}</p>
      </div>
    </Link>
  );
};

export default Vehicle;