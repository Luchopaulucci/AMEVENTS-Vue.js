<template>
    <div>
        <div class="categories">
            <div v-for="category of categories" class="d-flex">
                <input v-model="categoryCheckbox" class="form-check-input" type="checkbox" name="category" :id="category"
                    :value="category" />
                <label class="form-check-label checkbox" :for="category">{{ category }}</label>
            </div>
        </div>
        <div class="buscador">
            <input v-model="texto" class="form-control search" type="search" placeholder="Search by name the events" />
        </div>
        {{ superFiltro }}
        <section class="cards">
            <p v-if="!eventos.length" class="error">Not found</p>
            <div v-for="evento of eventos" class="card">
                <img :src="evento.image" class="card-img" alt="Evento Imagen">
                <div class="card-body-eventos">
                    <h5 class="card-title">{{ evento.name }}</h5>
                    <p class="card-text">Price:${{ evento.price }}</p>
                    <p class="card-text">Place: {{ evento.place }}</p>
                    <div class="botones">
                        <a href="./details.html?id=${evento._id}" class="btn btn-secondary">view details</a>
                        <a href="#" class="btn">❤️</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
export default {
    data() {
        return {
            apiUrl: 'https://mindhub-xj03.onrender.com/api/amazing',
            eventos: [],    //TIENE TODOS LOS EVENTOS
            eventosBackup: [], //TIENE EL BACKUP DE TODOS LOS EVENTOS
            texto: '',  //ES EL TEXTO QUE OBTENGO DEL INPUT PARA FILTRAR POR TEXTO  
            categories: [], //CONTIENE TODAS LAS CATEGORIAS
            categoryCheckbox: [], //CONTIENE LOS VALORES DE LOS CHECKBOX
        }
    },
    created() {
        this.pedirDatos()
    },
    mounted(){

    },
    methods: {
        pedirDatos() {
            fetch(this.apiUrl)
                .then(response => response.json())
                .then(datosApi => {
                    this.eventos = datosApi.events    //GUARDA SOLO LOS EVENTOS EN EL ARRAY EVENTOS
                    this.eventosBackup = datosApi.events    //GUARDA SOLO LOS EVENTOS EN EL ARRAY EVENTOSBACKUP 
                    this.sacarCategorias(datosApi.events);
                })
        },
        sacarCategorias(array) {
            array.forEach(elemento => {
                if (!this.categories.includes(elemento.category)) {
                    this.categories.push(elemento.category);
                }
            })
        },
    },
    computed: {  //ya escucha el cambio en la propiedad no hace falta llamar al evento
        superFiltro() {
            let primerFiltro = this.eventosBackup.filter(evento => evento.name.toLowerCase().includes(this.texto.toLowerCase()))

            if (!this.categoryCheckbox.length) {
                this.eventos = primerFiltro
            } else {
                this.eventos = primerFiltro.filter(evento =>
                    this.categoryCheckbox.includes(evento.category)
                )
            }
        },
    },
}
</script>


<style media="screen">
.categories {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 25px;
    width: 100%;
}

.checkbox {
    color: white;
}

.buscador {
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
}

.search {
    width: 400px;
    text-align: center;
    border: 2px solid#5586ef;
}

.error {
    color: white;
    font-size: 35px;
    letter-spacing: 1px;
}

.cards {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 1em;
}

.card {
    max-width: 100%;
}

.card-img {
    width: 15em;
    height: 10em;
}

.botones {
    display: flex;
    justify-content: space-between;
    margin: 3%;
}
</style>