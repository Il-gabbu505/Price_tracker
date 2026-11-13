export const submitEntry = async (payload) => {
  const response = await fetch('https://price-tracker-bsyb.onrender.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  
  if (!response.ok) {
    throw new Error('Failed to save entry');
  }
  return response.json();
};