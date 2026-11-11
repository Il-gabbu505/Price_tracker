export default function ProductList({ products, setProducts }) {
  const handleProductChange = (index, field, value) => {
    const newProducts = [...products];
    newProducts[index][field] = value;
    setProducts(newProducts);
  };

  const addProduct = () => {
    setProducts([...products, { name: '', price: '' }]);
  };

  return (
    <div>
      <label><strong>Logged Products:</strong></label>
      {products.map((product, index) => (
        <div key={index} style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <input 
            type="text" 
            placeholder="Product Name" 
            required 
            value={product.name} 
            onChange={(e) => handleProductChange(index, 'name', e.target.value)}
            style={{ flex: 1, padding: '8px' }}
          />
          <input 
            type="number" 
            step="0.01" 
            placeholder="Price" 
            required 
            value={product.price} 
            onChange={(e) => handleProductChange(index, 'price', e.target.value)}
            style={{ width: '100px', padding: '8px' }}
          />
        </div>
      ))}
      <button type="button" onClick={addProduct} style={{ marginTop: '10px', padding: '8px' }}>
        + Add Another Product
      </button>
    </div>
  );
}