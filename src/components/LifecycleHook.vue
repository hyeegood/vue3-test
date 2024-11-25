<template>
    <div class="container py-4">
        <input ref="inputRef" type="text" value="Hello World!"/>
    </div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';

        console.log("setup");
        const inputRef = ref(null);
        onBeforeMount(()=>{
            console.log('onBeforeMount');
        });
        onMounted(()=>{
            console.log('onMounted', inputRef.value.value);
        });
        console.log("setup", inputRef);

    // beforeCreate(){ //컴포넌트 (인스턴스) 생성되기 전
    //     console.log("beforeCreate");
    // },
    // created(){ //컴포넌트 생성됨
    //     console.log("created");
    // },
    // beforeMount(){ //컴포넌트 장착되기 전
    //     console.log("beforeMount");
    // },
    // mounted(){ //컴포넌트 장착됨
    //     console.log("mounted");
    // },
    // beforeUpdate(){ //컴포넌트 수정되기 전
    //     console.log("beforeUpdate");
    // },
    // updated(){ //컴포넌트 수정됨
    //     console.log("updated");
    // },
    // beforeUnmount(){ //컴포넌트 장착 해제되기 전
    //     console.log("beforeUnmount");
    // },
    // unmounted(){ //컴포넌트 해제 (소멸)
    //     console.log("unmounted");
    // }

</script>

<style lang="scss" scoped>

</style>