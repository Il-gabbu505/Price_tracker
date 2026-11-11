import { useState } from 'react';
import ImageUpload from './components/Imageupload';
import ProductList from './components/ProductList';
import { submitEntry } from './api/api';
import './App.css'; 

function App() {
  const [supermarketName, setSupermarketName] = useState('');
  const [products, setProducts] = useState([{ name: '', price: '' }]);
  const [imageBase64, setImageBase64] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { supermarketName, products, imageBase64 };

    try {
      await submitEntry(payload);
      alert('Entry saved successfully!');
      setSupermarketName('');
      setProducts([{ name: '', price: '' }]);
      setImageBase64('');
    } catch (error) {
      console.error('Error saving entry:', error);
      alert('Failed to save entry.');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Supermarket Price Tracker</h1>
      
      <form onSubmit={handleSubmit} className="form-card">
        
        <div className="form-group">
          <label>Supermarket Name:</label>
          <input 
            type="text" 
            required 
            placeholder="e.g., Whole Foods, Aldi"
            value={supermarketName} 
            onChange={(e) => setSupermarketName(e.target.value)} 
          />
        </div>

        <ImageUpload 
          imageBase64={imageBase64} 
          setImageBase64={setImageBase64} 
        />
        
        <ProductList 
          products={products} 
          setProducts={setProducts} 
        />

        <button type="submit" className="btn-submit">
          Save Entry
        </button>

      </form>
    </div>
  );
}

export default App;