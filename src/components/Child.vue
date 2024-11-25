<template>
    <div class="accordion-item">
      <header-deep-child></header-deep-child>
      <body-deep-child @props-emit-btn="TestFn"></body-deep-child>
    </div>
</template>
<script>
import HeaderDeepChild from './HeaderDeepChild.vue';
import BodyDeepChild from './BodyDeepChild.vue';
export default {
    components : {HeaderDeepChild, BodyDeepChild},
    setup(props, context) {
        const TestFn = () => {
            console.log("props emit push!!");
            context.emit('propsEmitBtn');
        }
        return {TestFn}
    }
}
</script>

<style lang="scss" scoped></style>