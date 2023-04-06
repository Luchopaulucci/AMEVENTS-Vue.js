<template>
    <div>
        <section>
            <div class="d-flex categorias">
                <!----------{{datos.checkbox}}---------->
            </div>
            <form class="d-flex" role="search">
                <input class="form-control search" type="search" placeholder="Search by name the events"/>
            </form>
      </section>
      <section class="cards">
        <div class="eventos">
            <!----------{{datos.eventos}}---------->
        </div>
      </section>
    </div>  
</template>


<script>

export default{
    data (){
        return{
            
        }
    }
}
</script>


<style media="screen">

.search{
    width: 400px;
    text-align: center;
    border: 2px solid#5586ef;
}
    
</style>