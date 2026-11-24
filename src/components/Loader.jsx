import '../css/Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="cyber-spinner"></div>
      <p className="loader-text">Завантаження даних з сервера...</p>
    </div>
  );
};

export default Loader;