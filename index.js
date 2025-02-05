var container = document.querySelector(".contenedor");
const pokemones = 300;

const llamarApi = (id, pokeImg, num) => {
  let pokemon = document.querySelectorAll(".pokemon")[num];
  fetch(id)
    .then((res) => res.json())
    .then((datos) => {
      const pokemonGif = document.createElement("img");
      pokemon.appendChild(pokemonGif);
      pokemonGif.setAttribute("src", pokeImg);
      pokemonGif.classList.add(
        "inline-flex",
        "relative",
        "h-[70%]",
        "m-0",
        "p-0",
        "object-none"
      );
      const pokeNum = document.createElement("p");
      pokemon.appendChild(pokeNum);
      pokeNum.innerText = (num + 1).toString();
      pokeNum.classList.add(
        "inline-flex",
        "absolute",
        "items-center",
        "text-center",
        "my-1",
        "mx-2",
        "w-max",
        "top-0",
        "left-0"
      );
      const pokeNombre = document.createElement("p");
      pokemon.appendChild(pokeNombre);
      pokeNombre.innerText = JSON.stringify(datos.name).replace(/[ '"]+/g, " ");
      pokeNombre.classList.add("w-full");
      let tipos = 0;
      const pokeTipos = [];
      while (tipos < datos.types.length) {
        pokeTipos[tipos] = JSON.stringify(datos.types[tipos].type.name);
        let pokeTipo = document.createElement("p");
        pokemon.appendChild(pokeTipo);
        pokeTipo.innerText = pokeTipos[tipos].replace(/[ '"]+/g, " ");
        tipos++;
      }
    })
    .catch((e) => console.log(e));
};

for (let i = 0; i < pokemones; i++) {
  const content = document.createElement("div");
  container.appendChild(content);
  content.classList.add(
    "pokemon",
    "inline-flex",
    "relative",
    "max-[500px]:col-span-full",
    "bg-gray-200",
    "border-4",
    "border-gray-400",
    "rounded-lg",
    "justify-evenly",
    "place-items-center",
    "flex-wrap",
    "grow",
    "text-center",
    "font-bold",
    "text-base",
    "md:text-2xl",
    "lg:text-4xl",
    "basis-[30%]",
    "p-5"
  );
  let pokeid = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
  let urlgif = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${
    i + 1
  }.gif`;
  llamarApi(pokeid, urlgif, i);
}
