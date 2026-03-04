import './cars.css'
import { Routes, Route } from 'react-router-dom';
import Vehicle from "./Vehicle";
import CarDetails from './details';

const App = () => {
  const allCars = [
    { id: 1, name: "Tesla Model 3", year: 2024, price: 40000, color: "Red", mileage: "2000 km", fuelType: "Electric" },
    { id: 2, name: "Porsche Taycan", year: 2024, price: 90000, color: "Black", mileage: "1500 km", fuelType: "Electric" },
    { id: 3, name: "Honda Civic", year: 2018, price: 15000, color: "Blue", mileage: "80000 km", fuelType: "Petrol" },
    { id: 4, name: "Toyota Corolla", year: 2015, price: 10000, color: "Silver", mileage: "120000 km", fuelType: "Petrol" },
  ];

  const newCars = allCars.filter(car => car.year >= 2024);
  const usedCars = allCars.filter(car => car.year < 2024);

  const showCars = (cars) => {
    return cars.map((car) => (
      <Vehicle key={car.id} id={car.id} name={car.name} year={car.year} price={car.price} />
    ))
  };

  return (
    <Routes>
      <Route path="/" element={
        <div className="car-list">
          <div className="old-cars">
            <h2>Used</h2>
            {showCars(usedCars)}
          </div>
          <div className="new-cars">
            <h2>New</h2>
            {showCars(newCars)}
          </div>
        </div>
      } />
      <Route path="/car/:id" element={<CarDetails cars={allCars} />} />
    </Routes>
  )
};

export default App;
