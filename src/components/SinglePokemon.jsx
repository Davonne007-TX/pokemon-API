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
      <div className="bg-image flex justify-center items-center h-screen bg-cover">
        <div className="bg-bright w-full m-5 md:2/12 lg:w-4/12 rounded border-8 border-blueBright">
          <div className="flex flex-col ml-5 mt-5 mb-5 font-mono">

            <div className="flex flex-row">
              <h2 className="text-4xl mb-10">{singlePokemon.name}</h2>
              <div className="ml-auto">
                <img
                  src={singlePokemon.backImage}
                  alt="Pokemon Selected Image"
                  className=" max-w-full h-auto ml-auto mr-auto animate-360"
                />
              </div>
            </div>

            <div className="font-orb text-2xl">
              <p>Height:{singlePokemon.height}</p>
              <p>Weight:{singlePokemon.weight}</p>
              <p>Base Experience: {singlePokemon.base_experience}</p>
            </div>

            <h2 className="text-2xl mb-10">{singlePokemon.name}</h2>
            <p>Height:{singlePokemon.height}</p>
            <p>Weight:{singlePokemon.weight}</p>
            <p>Base Experience: {singlePokemon.base_experience}</p>
            <p>ID:{singlePokemon.id}</p>

            <div className="flex flex-row ">
              <img
                src={singlePokemon.image}
                alt="Pokemon Selected Image"
                className=" max-w-full h-auto ml-auto mr-auto"
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
