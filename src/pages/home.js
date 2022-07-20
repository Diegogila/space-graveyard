import getCharacters from "../utils/getData"

const Home = async () => {
    const characters = await getCharacters();
    const view = `
    <div class="Characters">
        ${characters.results.map(character => `
        <article class="Characters-item">
            <a href="#/${character.id}/">
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
            </a>
        </article>
        `).join('')}
        <button>See more</button>
    </div>`;
    return view;
};

export default Home;