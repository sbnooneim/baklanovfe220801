import { useEffect, useState } from 'react';
import './App.css';
import { Chart } from './chart/Chart';

const getRandomNumber = (min: number, max: number) => {
  return Number((Math.random() * (max - min + 1) + min).toFixed(1));
};

const generateRandomData = () => {
  return new Array(Math.floor(getRandomNumber(1, 10))).fill(0).map((_, i) => {
    return { name: `Random label${i}`, time: getRandomNumber(1, 10) };
  });
};

export const mockData = [
  { name: 'Landing Page', time: 7.4 },
  { name: 'Configurator', time: 0.2 },
  { name: 'Check-out', time: 7.0 },
  { name: 'Deal', time: 3.8 },
];

function App() {
  const [data, setData] = useState(mockData);

  const generateAndSetRandomData = () => {
    setData(generateRandomData());
  };

  useEffect(() => {
    const tId = setInterval(() => {
      generateAndSetRandomData();
    }, 30000);

    return () => clearInterval(tId);
  }, []);

  return (
    <div className='app'>
      <Chart data={data} />
      <button onClick={generateAndSetRandomData}>Generate random data</button>
    </div>
  );
}

export default App;
