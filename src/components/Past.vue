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
            <p v-if="!eventosPast.length" class="error">Not found</p>
            <div v-for="evento of eventosPast" class="card" :key="evento._id">
                <img :src="evento.image" class="card-img" alt="Evento Imagen">
                <div class="card-body">
                    <h5 class="card-title">{{ evento.name }}</h5>
                    <p class="card-text">Price:${{ evento.price }}</p>
                    <p class="card-text">Place: {{ evento.place }}</p>
                    <router-link :to="'/detail/' + evento._id" class="btn btn-secondary">Details</router-link>
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
            eventosPast: [], //TIENE LOS EVENTOS UPCOMING
            eventosBackup: [], //TIENE EL BACKUP DE TODOS LOS EVENTOS
            date: '',   //ES LA FECHA ACTUAL
            texto: '',  //ES EL TEXTO QUE OBTENGO DEL INPUT PARA FILTRAR POR TEXTO  
            categories: [], //CONTIENE TODAS LAS CATEGORIAS
            categoryCheckbox: [], //CONTIENE LOS VALORES DE LOS CHECKBOX
        }
    },
    created() {
        this.pedirDatos()

        console.log("ESTOY EN EL PAST");
    },
    mounted() {

    },
    methods: {
        pedirDatos() {
            fetch(this.apiUrl)
                .then(response => response.json())
                .then(datosApi => {
                    this.eventos = datosApi.events    //GUARDA SOLO LOS EVENTOS EN EL ARRAY EVENTOS   
                    this.date = datosApi.currentDate //GUARDA SOLO LOS EVENT 
                    this.filtrarFechas(this.eventos);
                    this.eventosBackup = this.eventosPast    //GUARDA SOLO LOS EVENTOS EN EL ARRAY EVENTOSBACKUP
                    this.sacarCategorias(this.eventosPast);
                })
        },
        sacarCategorias(array) {
            array.forEach(elemento => {
                if (!this.categories.includes(elemento.category)) {
                    this.categories.push(elemento.category);
                }
            })
        },
        filtrarFechas(array) {
            for (let i = 0; i < array.length; i++) {
                if (array[i].date < this.date) {
                    this.eventosPast.push(array[i]);
                }
            }
        },

    },
    computed: {  //ya escucha el cambio en la propiedad no hace falta llamar al evento
        superFiltro() {
            let primerFiltro = this.eventosBackup.filter(evento => evento.name.toLowerCase().includes(this.texto.toLowerCase()))

            if (!this.categoryCheckbox.length) {
                this.eventosPast = primerFiltro
            } else {
                this.eventosPast = primerFiltro.filter(evento =>
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
    max-width: 100%;
}

input[type="checkbox"] {
  appearance: none;
  background-color: #000000;
  border: 2px solid #ff00d0;
  width: 16px;
  height: 16px;
}

input[type="checkbox"]:checked {
  background-color: green;
  border: 2px solid #ffff;
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
    max-width: 15.5em;
    background-color: #201b1d;
    border: 2px solid #ffff;
}

.card-img {
    width: 15em;
    height: 10em;
}

.card-body{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card-title{
    color: white;
}

.card-text{
    color: white;
}
</style>