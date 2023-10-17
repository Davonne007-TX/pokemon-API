export const fetchPokemonById = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
};
