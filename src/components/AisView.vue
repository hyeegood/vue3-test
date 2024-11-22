<template>
<main>
    <div class="container py-4">
        <post-create @create-post="createPost"></post-create>  

        <div class="row g-3">
            <div v-for="post in posts" :key="post.id" class="col col-4">
                <ais-card 
                    :title="post.title" 
                    :contents="post.contents" 
                    :isLike="post.isLike" 
                    :type="post.type"
                    @toggle-like="post.isLike = !post.isLike"
                    @change-title="changeObj"
                    :obj="obj"
                    >
                </ais-card>
            </div>
        </div>

        <hr class="my-4"/>
        
        <!-- <label-input 
        :model-value="username" 
        @update:model-value="value=>(username = value)"></label-input> -->
        <label-input v-model="username" :label="이름"></label-input>
    </div>
</main>
</template>
<script>
import { reactive, ref } from 'vue';
import AisCard from './AisCard.vue';
import PostCreate from './PostCreate.vue';
import LabelInput from './LabelInput.vue';
export default {
    components: {AisCard, PostCreate, LabelInput},
    setup(){
        const obj = reactive({title: 'obj', contents: 'obj-content'});
        const posts = reactive([
            {id: 1, title:'제목1', contents:'내용1', isLike: true, type: 'news'},
            {id: 2, title:'제목2', contents:'내용2', isLike: true, type: 'news'},
            {id: 3, title:'제목3', contents:'내용3', isLike: true, type: 'news'},
            {id: 4, title:'제목4', contents:'내용4', isLike: true, type: 'news'},
            {id: 5, title:'제목5', contents:'내용5', isLike: false, type: 'notice'},
            {id: 6, title:'제목6', contents:'내용6', isLike: false, type: 'notice'},
            ]);//reactive
        const changeObj = () => {
            obj.title = '송은혜';
        };
        const createPost = newPost => {
            console.log("newPost :", newPost);
            newPost.contents = newPost.title;
            posts.push(newPost);
        };

        const username = ref('');
        return {posts, obj, changeObj, createPost, username};
    }
}
</script>