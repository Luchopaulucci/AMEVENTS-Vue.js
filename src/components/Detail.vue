<template>
    <div class="details" id="details">
        <img :src="mostrarDetalle.image" class="detail-img" alt="Evento Imagen">
        <div class="detail-body">
            <h5 class="detail-title">{{mostrarDetalle.name}}</h5>
            <p class="detail-text">Price:${{mostrarDetalle.price}}</p>
            <p class="detail-text">Place: {{mostrarDetalle.place}}</p>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Details',
    data() {
        return {
            apiUrl: 'https://mindhub-xj03.onrender.com/api/amazing',
            eventos: [],
            id: this.$route.params.id,
        }
    },
    created() {
        this.pedirDatos()
        console.log("ESTOY EN EL DETAILS RE MIL RE CLDO ESTE");
    },
    methods: {
        pedirDatos() {
            fetch(this.apiUrl)
                .then(response => response.json())
                .then(datosApi => {
                    this.eventos = datosApi.events
                })
        },
    },
    computed: {
        mostrarDetalle(){
            return this.eventos.find(evento => evento._id == this.id)
        }
    }
}
</script>
  
<style media="screen">
.details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
}

.detail-img {
    width: 15em;
    height: 10em;
}

.detail-body {
    text-align: center;
    margin-top: 2%;
}

.detail-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2%;
}

.detail-text {
    font-size: 1.5rem;
    margin-bottom: 1%;
    color: white;
}
</style>