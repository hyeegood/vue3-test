<template>
    <div class="accordion-collapse collapse show">
        <div class="accordion-body">
            {{ body }} : {{ count }}
        </div>
        <button @click="PropsEmitFn">BodyBtn</button>
    </div>
</template>

<script>
import { inject } from 'vue';
export default {
    setup(props, context) {
        const count = inject('count');
        const body = inject('body');

        const PropsEmitFn = () => {
            context.emit('PropsEmitFn');
        }
        return {body, count, PropsEmitFn}
    }
}
</script>

<style lang="scss" scoped></style>