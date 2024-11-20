<template>
<div class="row g-3">
    <div class="col col-2">
        <select v-model="type" class="form-select" aria-label="Default select example">
            <option value="news">뉴스</option>
            <option value="notice">공지사항</option>
        </select>
    </div>
    <div class="col col-8">
        <input v-model="title" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>

    <div class="col col-2 d-grid">
        <button class="btn btn-primary" 
        @click="createPost">button</button>
    </div>
</div>
</template>

<script>
import {ref} from 'vue'

    export default {
        emits: {
            createPost: (newPost)=>{ //부모 컴포넌트 메소드 호출하기 전 거쳐가는 관문 느낌, 때문에 파람 그대로 받음
                console.log('validator :', newPost);
                if(!newPost.type){
                    return false;
                }else if(!newPost.title){
                    return false;
                }
                return true;
            }//유효성 체크
        },
        setup(props, {emit}){
            const title = ref('');
            const type = ref('news');
            const createPost = () => {
                const newPost = {
                    type: type.value,
                    title: title.value,
                }
                emit('createPost', newPost);
                title.value = '';
                type.value = 'news';
            }
            return{createPost, title, type};
        }
    }
</script>

<style lang="scss" scoped>

</style>