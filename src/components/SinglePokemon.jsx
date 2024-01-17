import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SinglePokemon({ pokemon }) {
  const [singlePokemon, setSinglePokemon] = useState("");

  //useNavigate
  const navigate = useNavigate();

  const backToPokedex = () => {
    navigate("/pokemon");
  };
  useEffect(() => {
    console.log("Selected Pokemon:", pokemon);
    if (pokemon) {
      setSinglePokemon(pokemon);
    }
  }, [pokemon]);

  if (!pokemon) {
    return <div>Pokemon is loading...</div>;
  }
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center mt-40 bg-bright w-96 h-56">
          <h2 className="text-2xl">{singlePokemon.name}</h2>
          <img src={singlePokemon.image} alt="Pokemon Selected Image" />
          <button
            className="hover:text-blueBright cursor-pointer font-mono"
            onClick={backToPokedex}
          >
            Back To Pokedex
          </button>
        </div>
      </div>
    </>
  );
}
