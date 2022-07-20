const API = 'https://rickandmortyapi.com/api';

const getCharacters = async (page=1,id) => {
    const character = id ? `/${id}` : '';
    try {
        const res = await fetch(`${API}/character?page=${page}${character}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export default getCharacters;