const RandomNumberDisplay = ({ number, isSpinning }) => {
  return (
    <div className="mt-4 text-lg font-semibold text-white md:text-3xl">
      {!isSpinning && number !== null ? (
        <h2>🎉¡Número Aleatorio: {number}!🎉</h2>
      ) : (
        <h2>¡Gira la ruleta para ver el número!</h2>
      )}
    </div>
  );
};

export default RandomNumberDisplay;
