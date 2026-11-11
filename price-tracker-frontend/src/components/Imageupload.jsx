export default function ImageUpload({ imageBase64, setImageBase64 }) {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label><strong>Upload Image (Shelf/Receipt):</strong></label><br />
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageUpload} 
        required 
      />
      {imageBase64 && <p style={{ color: 'green', fontSize: '12px' }}>Image loaded successfully.</p>}
    </div>
  );
}