<template>
<!---------------------------------------------------FORMULARIO DE CONTACTO--------------------------------------------------------->
    <form action="" style="width: 50%;">
        <label for="name">NAME</label>
        <input class="form-control form-control-lg" type="text" name="name" id="name" placeholder="name">
        <label for="email">EMAIL</label>
        <input class="form-control form-control-lg" type="email" name="email" id="email" placeholder="email">
        <label for="mensagge">MESSAGE</label>
        <textarea class="form-control" name="mensagge" id="mensagge" style="height: 5em" placeholder="message"></textarea>
        <div class="btn-group botones">
            <button type="submit" class="btn btn-primary btn-formulario">Send form</button>
            <button type="submit" class="btn btn-primary btn-formulario">Clear form</button>
        </div>
    </form>
</template>

<script>
export default {
}

</script>

<style media="screen">
label{
    display: flex;
    justify-content: center;
    color: white;
    margin: 5px 0;
}

.botones{
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

</style>