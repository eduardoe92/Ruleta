import { useState } from 'react';
import Roulette from './components/Roulette';
import RandomNumberDisplay from './components/RandomNumberDisplay';
import { getRandomNumber } from './services/api';

const numberColorMapping = {
  "#FF5733": [1, 10],
  "#C70039": [11, 20],
  "#900C3F": [21, 30],
  "#581845": [31, 40],
  "#9CBA7F": [41, 50],
  "#FFC300": [51, 60],
  "#FF6F61": [61, 70],
  "#6A1B9A": [71, 80],
  "#00ACC1": [81, 90],
  "#4CAF50": [91, 100],
};

const App = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [error, setError] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpin = async (color) => {
    setIsSpinning(true);
    try {
      const number = await getRandomNumber();
      const range = numberColorMapping[color];
      if (range) {
        setRandomNumber(number);
        setError(null);
      } else {
        setError('Color no encontrado');
      }
    } catch (error) {
      setError('Error al obtener un número aleatorio');
      console.error('Error al obtener un número aleatorio:', error);
    } finally {
      setIsSpinning(false);
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-xl font-bold text-white md:text-4xl">Ruleta</h1>
      {error && <div className="error">{error}</div>}
      <Roulette onSpin={handleSpin} isSpinning={isSpinning} />
      <RandomNumberDisplay number={randomNumber} isSpinning={isSpinning} />
    </div>
  );
};

export default App;
