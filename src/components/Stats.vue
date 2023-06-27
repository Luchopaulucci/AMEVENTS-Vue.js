<template>
  <div class="tablas">
    <table id="tablaStatic">
      <h3 class="tituloTabla">
        Tabla Static
      </h3>
      <tbody v-html="tablaEstatica"></tbody>
    </table>

    <table id="tablaUpcoming">
      <h3 class="tituloTabla">
        Tabla Upcoming
      </h3>
      <tbody v-html="tablaUpcoming"></tbody>
    </table>

    <table id="tablaPast">
      <h3 class="tituloTabla">
        Tabla Past
      </h3>
      <tbody v-html="tablaPast"></tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tablaEstatica: "",
      tablaUpcoming: "",
      tablaPast: ""
    };
  },
  created() {
    fetch("https://mindhub-xj03.onrender.com/api/amazing")
      .then(resultado => resultado.json())
      .then(data => {
        const datos = data.events;
        this.mostrarTablaStatic(datos);
        this.mostrarTablaUpcoming(datos);
        this.mostrarTablaPast(datos);
      });
  },
  methods: {
    mostrarTablaStatic(array) {
  let arrayMasAsistencias = array[0];
  let arrayMinAsistencias = array[0];
  let arrayMaxCapacity = array[0];

  for (let i = 0; i < array.length; i++) {
    if (
      (array[i].assistance / array[i].capacity) * 100 >
      (arrayMasAsistencias.assistance / arrayMasAsistencias.capacity) * 100
    ) {
      arrayMasAsistencias = array[i];
    }
    if (
      (array[i].assistance / array[i].capacity) * 100 <
      (arrayMinAsistencias.assistance / arrayMinAsistencias.capacity) * 100
    ) {
      arrayMinAsistencias = array[i];
    }
    if (array[i].capacity > arrayMaxCapacity.capacity) {
      arrayMaxCapacity = array[i];
    }
  }

  let porcentajeMas = (
    (arrayMasAsistencias.assistance / arrayMasAsistencias.capacity) *
    100
  ).toFixed(2);
  let porcentajeMin = (
    (arrayMinAsistencias.assistance / arrayMinAsistencias.capacity) *
    100
  ).toFixed(2);
  let capacityMax = arrayMaxCapacity.capacity;

  let tablaEstatica = `
    <tr class="tabla">
      <td>${arrayMasAsistencias.name} : (${porcentajeMas}%)</td>
      <td>${arrayMinAsistencias.name} : (${porcentajeMin}%)</td>
      <td>${arrayMaxCapacity.name} : ${capacityMax}</td>
    </tr>
  `;
  this.tablaEstatica = tablaEstatica;
},
mostrarTablaUpcoming(array) {
  const EventosUpcoming = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].date > "2023-03-10") {
      EventosUpcoming.push(array[i]);
    }
  }

  let tablaProximos = "";
  for (let i = 0; i < EventosUpcoming.length; i++) {
    tablaProximos += `
      <tr class="tabla">
        <td>${EventosUpcoming[i].name}</td>
        <td>${EventosUpcoming[i].date}</td>
        <td>${EventosUpcoming[i].assistance}</td>
        <td>${EventosUpcoming[i].capacity}</td>
      </tr>
    `;
  }

  this.tablaUpcoming = tablaProximos;
},

mostrarTablaPast(array) {
  const EventosPast = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].date < "2023-03-10") {
      EventosPast.push(array[i]);
    }
  }

  let tablaPasados = "";
  for (let i = 0; i < EventosPast.length; i++) {
    tablaPasados += `
      <tr class="tabla">
        <td>${EventosPast[i].name}</td>
        <td>${EventosPast[i].date}</td>
        <td>${EventosPast[i].assistance}</td>
        <td>${EventosPast[i].capacity}</td>
      </tr>
    `;
  }

  this.tablaPast = tablaPasados;
}

  }
};
</script>

<style media="screen">
.tituloTabla{
    color: #cccccc;
}

.tablas {
  text-align: center;
}

table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;
}

th,
td {
  border: 1px solid #ffffff;
  padding: 8px;
  text-align: center;
  color: white;
}

th {
  background-color: #ff00d0;
  color: #ffffff;
}

.tabla th,
.tabla td {
  border: 1px solid #ffffff;
  padding: 8px;
  text-align: center;
}

.tabla th {
  background-color: #ff00d0;
  color: #ffffff;
}

</style>

