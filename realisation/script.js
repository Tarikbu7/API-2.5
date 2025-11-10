let allCars = [];

const carsData = [
  { id: 1, name: "Toyota Camry 2024", brand: "Toyota", type: "eco", price: 39480, year: 2024, acceleration: "0–100 km/h : 8.3s", transmission: "auto", image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500" },
  { id: 2, name: "Honda Accord 2024", brand: "Honda", type: "eco", price: 36438, year: 2024, acceleration: "0–100 km : 7.5s", transmission: "Automatic", image: "https://images-stag.jazelc.com/uploads/theautopian-m2en/IMG_5958-71-scaled-e1712172089987.jpg" },
  { id: 3, name: "Bugatti Chiron 2016", brand: "Bugatti", type: "super", price: 4356800 , year: 2016, acceleration: "0–100 km : 2.4s", transmission: "Automatic", image: "https://images.autox.com/uploads/2024/01/Bugatti-Chiron.jpg" },
  { id: 4, name: "Lamborghini Veneno 2013", brand: "Lamborghini", type: "super", price: 285000, year: 2013, acceleration: "0–100 km : 2.8s", transmission: "manual", image: "https://i.redd.it/yolsj0j5tc151.jpg" },
  { id: 5, name: "BMW M4", brand: "BMW", type: "sport", price: 56000, year: 2024, acceleration: "0–100 km/h : 3.5s", transmission: "Automatic", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500" },
  { id: 6, name: "Mercedes AMG GT", brand: "Mercedes", type: "sport", price: 175000, year: 2024, acceleration: "0–100 km/h : 3.2s", transmission: "Automatic", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500" },
  { id: 7, name: "Tesla Model 3", brand: "Tesla", type: "electric", price: 42490 , year: 2024, acceleration: "0–100 km/h : 5.1s", transmission: "Automatic", image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500" },
  { id: 8, name: "BMW iX", brand: "BMW", type: "electric", price: 77300, year: 2024, acceleration: "0–100 km/h : 6.1s", transmission: "Automatic", image: "https://hips.hearstapps.com/hmg-prod/images/2023-bmw-ix-m60-108-1653422436.jpg" },
  { id: 9, name: "Hyundai Sonata 2024", brand: "Hyundai", type: "eco", price: 34569, year: 2024, acceleration: "0–100 km/h : 8.6s", transmission: "Automatic", image: "https://cdn.motor1.com/images/mgl/m6n6A/s1/2020-hyundai-sonata.jpg" },
  { id: 10, name: "Ferrari SF90 Stradale", brand: "Ferrari", type: "super", price: 593950, year: 2019, acceleration: "0–100 km : 2.5s", transmission: "automatic", image: "https://hips.hearstapps.com/hmg-prod/images/2024-ferrari-sf90-xx-stradale-109-654a668fc71a3.jpg" },
  { id: 11, name: "Golf 8 R 2021", brand: "Volkswagen", type: "sport", price: 44846, year: 2021, acceleration: "0–100 km/h : 4.7s", transmission: "automatic", image: "https://www.chiptuning.com/media/wysiwyg/neuigkeiten/Fahrzeuge/PKW/VW/VW_Golf_8_R_bei_DTE_Systems.jpg" },
  { id: 12, name: "Kia EV3", brand: "Kia", type: "electric", price: 32700, year: 2024, acceleration: "0–100 km/h : 7.5s", transmission: "automatic", image: "https://www.topgear.com/sites/default/files/2024/12/DSC06239-Edit.jpg" }
];

function displayCars(cars) {
  const container = document.getElementById('cars');
  const loading = document.getElementById('loading');
  
  loading.style.display = 'none';

  if (cars.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:white; font-size:1.5em;">No cars available</p>';
    return;
  }

  container.innerHTML = cars.map(car => `
    <div class="car-card">
      <img src="${car.image}" alt="${car.name}">
      <div class="car-info">
        <span class="car-brand">${car.brand}</span>
        <h3>${car.name}</h3>
        <div class="car-specs">
          <span>📅 Year: ${car.year}</span><br>
          <span>⚙️ Acceleration: ${car.acceleration}</span><br>
          <span>🔄 Transmission: ${car.transmission}</span>
        </div>
        <button class="buy-btn" onclick="buyCar(${car.id})">Buy Now</button>
      </div>
    </div>
  `).join('');
}

function filterCars(type, event) {
  document.querySelectorAll('.filter button').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  const filtered = type === 'all' ? allCars : allCars.filter(car => car.type === type);
  displayCars(filtered);
}

function buyCar(id) {
  alert("Thanks for purchasing our Car 🚗");
}

function loadCars() {
  
  setTimeout(() => {
    allCars = carsData;
    displayCars(allCars);
  }, 2000);
}

loadCars();
