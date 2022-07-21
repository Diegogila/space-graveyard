const API = 'https://rickandmortyapi.com/api';

const getCharacters = async (id) => {
    const character = id ? `/${id}` : '';
    try {
        const res = await fetch(`${API}/character${character}?status=dead`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export default getCharacters;