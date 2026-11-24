const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    title: "NeuroEdge Base Capsule",
    category: "Wearable EMG",
    price: 1499,
    description: "Компактний ЕМГ-трекер для апаратної фіксації м'язової відмови та контролю гіпертрофії.",
    image: "/images/capsule169.png"
  },
  {
    id: 2,
    title: "NeuroEdge Pro Module",
    category: "Wearable EMG",
    price: 2999,
    description: "Розширена версія з підтримкою високоточного фільтрування шумів, додатковими режимами телеметрії та покращеним акумулятором.",
    image: "/images/in-progress.jpeg"
  },
  {
    id: 3,
    title: "NeuroEdge Pro Kit",
    category: "Development Kit",
    price: 2200,
    description: "Повний набір: капсула, комплект гідрогелевих електродів, зарядний кабель та модуль зв'язку.",
    image: "/images/in-progress.jpeg"
  }
];

app.get('/api/products', (req, res) => {
  const { category, search } = req.query;

  setTimeout(() => {
    let result = products;

    if (category && category !== 'All') {
      result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(searchLower) || 
        p.description.toLowerCase().includes(searchLower)
      );
    }

    res.json(result);
  }, 333);
});

app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  
  setTimeout(() => {
    const product = products.find(p => p.id === productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Товар не знайдено' });
    }
  }, 600);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});