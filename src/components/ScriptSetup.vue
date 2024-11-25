<template>
    <div>

    </div>
</template>

<script setup>
import {ref} from 'vue';
import axios from 'axios';
const response = await axios('https://dummy.restapiexample.com/api/v1/employees');
console.log('response :', response);
</script>

<style lang="scss" scoped>

</style>