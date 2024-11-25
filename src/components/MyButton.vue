<template>
    <div>
        <button class="btn btn-primary" type="button">My Button</button>
    </div>
</template>

<script>
export default {
    inheritAttrs : false,
    setup(props, context) {
        console.log("context.attrs: ", context.attrs);
        console.log("context.id: ", context.attrs.id);
        console.log("context.hello: ", context.attrs.hello);
        console.log("context.click: ", context.attrs.onClick);

        return {}
    }
}
</script>

<style lang="scss" scoped></style>