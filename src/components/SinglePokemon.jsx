import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SinglePokemon({ pokemon }) {
  const [singlePokemon, setSinglePokemon] = useState("");
  const [loading, setLoading] = useState(false);

  // useNavigate
  const navigate = useNavigate();

  const backToPokedex = () => {
    setLoading(true);

    setTimeout(() => {
      navigate("/pokemon");
    }, 1000);
  };

  useEffect(() => {
    console.log("Selected Pokemon:", pokemon);
    if (pokemon) {
      setSinglePokemon(pokemon);
    }
  }, [pokemon]);

  if (!pokemon) {
    return (
      <div className="font-orb text-6xl text-white flex mt-10 justify-center items-center h-screen bg-slate-800">
        Choose a new Pokemon at Pokedex...
      </div>
    );
  }

  return (
    <>
      {loading && (
        <div className="flex flex-col h-screen mt-10 bg-slate-800">
          <div className="loading text-center mt-48 h-screen mb-40 text-7xl text-white">
            Loading...
          </div>
        </div>
      )}

      {!loading && (
        <main className="bg-image flex justify-center items-center h-screen bg-cover">
          <section className="mt-10 lg:mb-40">
            <section className="bg-single m-4 lg:p-2 max-w-full md:w-96 lg:max-w-full rounded-3xl border-8 border-blueBright">
              <section className="flex flex-col ml-3 md:ml-5 mt-3 md:mt-5 mb-3 md:mb-5 font-mono">
                <section className="flex flex-row">
                  <h2 className="text-2xl md:text-4xl mb-3 md:mb-5">
                    {singlePokemon.name}
                  </h2>
                  <section className="ml-auto">
                    <img
                      src={singlePokemon.backImage}
                      alt="Pokemon Selected Image"
                      className="max-w-40 h-auto ml-auto mr-auto animate-360"
                    />
                  </section>
                </section>

                <section className="text-xl font-mono">
                  <p>Height: {singlePokemon.height}</p>
                  <p>Weight: {singlePokemon.weight}</p>
                  <p>Base Exp: {singlePokemon.base_experience}</p>
                  <p>Order: {singlePokemon.order}</p>
                  <p>
                    Abilities:{" "}
                    {pokemon.abilities && pokemon.abilities.join(", ")}
                  </p>
                  <p>Species: {singlePokemon.species}</p>
                  <p>ID: {singlePokemon.id}</p>
                </section>

                <section className="flex flex-row mt-2 md:mt-3">
                  <img
                    src={singlePokemon.image}
                    alt="Pokemon Selected Image"
                    className="max-w-full ml-auto mr-auto h-32 w-32 md:h-60 md:w-60"
                  />
                </section>

                <button
                  className="hover:text-red cursor-pointer font-mono mt-2 md:mt-5"
                  onClick={backToPokedex}
                >
                  Back To Pokedex
                </button>
              </section>
            </section>
          </section>
        </main>
      )}
    </>
  );
}
