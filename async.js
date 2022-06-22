const fetchPokemon = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        if(res.status === 200) {
            data = await res.json()
            console.log(data)
        } else {
            console.error(res.status)
        }
    } catch (err) {
        console.error(err)
    }
}
fetchPokemon(9)