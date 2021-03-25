<template>
        <v-container class="set">
            <h1>hey create new space</h1>
            <input type="text" v-model="firstInput"/>{{ firstInput }}
        </v-container>
</template>

<script>
export default {
name: 'spacecreate',

data(){
return{
firstInput:'',
}
}
}


</script>

<style scoped>


.set{
    height: 500px;
    background: #fff;

}
input{
    padding: 20px;
    border: 1px black solid;
}
</style>