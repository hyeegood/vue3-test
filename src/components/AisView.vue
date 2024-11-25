<template>
    <main>
        <div class="container py-4">
            <search>
                <div class="input-group mb-3">
                    <div class="col-2">
                        <select class="form-select">
                            <option selected>All</option> 
                            <option value="notice">Notice</option>
                            <option value="news">News</option>
                        </select>
                    </div>
                    <div class="col-6">
                        <input type="text" class="form-control" placeholder="">
                    </div>
                    <button class="btn btn-outline-secondary col-2" type="button" @click="searchFn">Search</button>
                </div>
            </search>
            <div v-for="card in cardList" :key="card.id">
                <ais-card :title="card.title" :contents="card.content" :isLike="card.isLike" :type="card.type" @toggle-like="onToggleLike"></ais-card>
            </div>
        </div>
    </main>
</template>
<script>
import { ref, provide, emit } from 'vue';
import AisCard from './AisCard.vue';
export default {
    components: {AisCard},
    setup(props, {emit}) {
        const cardList = ref([
            {id: 1, title: '제목1', content: '내용1', isLike: true, type: 'notice'},
            {id: 2, title: '제목2', content: '내용2', isLike: false, type: 'news'},
            {id: 3, title: '제목3', content: '내용3', isLike: true, type: 'notice'},
            {id: 4, title: '제목4', content: '내용4', isLike: true, type: 'news'},
            {id: 5, title: '제목5', content: '내용5', isLike: false, type: 'news'},
            {id: 6, title: '제목6', content: '내용6', isLike: false, type: 'news'},
            {id: 7, title: '제목7', content: '내용7', isLike: false, type: 'notice'},
        ]);    

        const onToggleLike = (value) => {
           // console.log('value.id', value.id);
        }
        const searchFn = () => {
            
        }
       return {cardList, onToggleLike, searchFn};
    }
}
</script>

<style lang="scss" scoped></style>