export class Pokemon {
    constructor(id) {
        this.id = id;
        this.name = "";
        this.img = "";
        this.stats = {};


        this.fetchPokemon();
    }

    async fetchPokemon() {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}
            `);

            if (!response.ok) {
                console.error(response);
                return;
            }

            const data = await response.json();

            this.assignProperties(data);
        } catch (error) {
            console.error(error);
        }
    }

    assignProperties(pokemon) {
        this.name = pokemon.name;
        this.img = pokemon.sprites?.other["official-artwork"]?.front_default ?? pokemon.sprites.front_default;
        pokemon.stats.forEach(info => {
            this.stats[info.stat.name] = info.base_stat;
        })
    }
    
}