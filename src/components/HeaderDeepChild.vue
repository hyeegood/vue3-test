<template>
    <h2 class="accordion-header">
        <button class="accordion-button" type="button">
            {{ header }}
        </button>
    </h2>
</template>

<script>
import { inject } from 'vue';
export default {
    setup() {
        const header = inject('header');

        return {header}
    }
}
</script>

<style lang="scss" scoped></style>