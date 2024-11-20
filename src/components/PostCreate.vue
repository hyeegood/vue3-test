<template>
    <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">입력</span>
        <input v-model="title" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>

    <div>
        <button class="btn btn-primary" 
        @click="createPost">button</button>
    </div>
</template>

<script>
import {ref} from 'vue'

    export default {
        emits: {
            createPost: (newTitle)=>{ //부모 컴포넌트 메소드 호출하기 전 거쳐가는 관문 느낌, 때문에 파람 그대로 받음
                console.log('validator :', newTitle);
                if(!newTitle){
                    return false;
                }
                return true;
            }//유효성 체크
        },
        setup(props, {emit}){
            const title = ref('');
            const createPost = () => {
               emit('createPost', title.value);
            }
            return{createPost, title};
        }
    }
</script>

<style lang="scss" scoped>

</style>