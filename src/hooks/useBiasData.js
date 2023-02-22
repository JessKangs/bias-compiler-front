export default function useBiasData() {
  
  const biasData = JSON.parse(localStorage.getItem('BIAS_DATA'));

  return biasData;
}
