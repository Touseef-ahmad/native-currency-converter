export const fetchExchangeRates = async (base, quote) => {
  try {
    const data = await fetch(
      `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${quote}`,
    );
    return data.json();
  } catch (error) {
    return error;
  }
};
