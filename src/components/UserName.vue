<template>
    <div>
        <label-input :model-value="firstname" @update:model-value="value => $emit('update:firstname', value)" label="성"></label-input>
        <label-input :model-value="lastname"  @update:model-value="value => $emit('update:lastname', value)"  label="이름"></label-input>
    </div>
</template>

<script>
import LabelInput from './LabelInput.vue';
export default {
    components : {LabelInput},
    props : ['firstname', 'lastname'],
    emits : ['update:firstname', 'update:lastname'],
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>