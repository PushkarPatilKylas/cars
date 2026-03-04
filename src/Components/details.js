import { useParams, useNavigate } from 'react-router-dom';
import './cars.css';

const CarDetails = ({ cars }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find(c => c.id === parseInt(id));

  if (!car) {
    return <div className="details-container">Car not found</div>;
  }

  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back
      </button>
      <div className="details-card">
        <h1>{car.name}</h1>
        <div className="details-info">
          <p><strong>Price:</strong> ${car.price}</p>
          <p><strong>Year:</strong> {car.year}</p>
          <p><strong>Color:</strong> {car.color}</p>
          <p><strong>Mileage:</strong> {car.mileage}</p>
          <p><strong>Fuel Type:</strong> {car.fuelType}</p>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;