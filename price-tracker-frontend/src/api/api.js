export const submitEntry = async (payload) => {
  const response = await fetch('http://localhost:3000/api/entries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  
  if (!response.ok) {
    throw new Error('Failed to save entry');
  }
  return response.json();
};