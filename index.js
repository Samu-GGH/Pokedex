var container = document.querySelector(".contenedor");
const pokemones = 920;

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
      const pokeNum = document.createElement("div");
      pokemon.appendChild(pokeNum);
      pokeNum.innerText = (num + 1).toString();
      pokeNum.classList.add(
        "inline-flex",
        "absolute",
        "items-center",
        "text-center",
        "italic",
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
    "border-2",
    "border-gray-400",
    "hover:bg-yellow-300",
    "duration-100",
    "rounded-lg",
    "justify-evenly",
    "place-items-center",
    "flex-wrap",
    "grow",
    "text-center",
    "font-bold",
    "text-base",
    "italic",
    "md:text-2xl",
    "lg:text-4xl",
    "basis-[30%]",
    "p-5"
  );
  content.style.boxShadow = "4px 4px 0 0 rgba(0,0,0,0.75)";
  let pokeid = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
  let urlgif = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${
    i + 1
  }.gif`;
  llamarApi(pokeid, urlgif, i);
}
/*
console.log(
  fetch(`https://pokeapi.co/api/v2/pokemon/1`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.name);
    })
    .catch((e) => console.log(e))
);
*/
