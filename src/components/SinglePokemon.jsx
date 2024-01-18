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
      <div className="flex justify-center items-center bg-gray-200 h-screen">
        <div className="bg-bright w-5/12 rounded mb-40">
          <div className="flex flex-col ml-5 mt-5 mb-5 ">
            <h2 className="text-2xl mb-10">{singlePokemon.name}</h2>
            <p>Height:{singlePokemon.height}</p>
            <p>Weight:{singlePokemon.weight}</p>
            <p>Base Experience: {singlePokemon.base_experience}</p>
            <div className="flex flex-row">
              <img
                src={singlePokemon.image}
                alt="Pokemon Selected Image"
                className="ml-60"
              />
            </div>
            <button
              className="hover:text-blueBright cursor-pointer font-mono mt-10"
              onClick={backToPokedex}
            >
              Back To Pokedex
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
