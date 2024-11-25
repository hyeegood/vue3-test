<template>
<div class="card">
    <div class="card-body">
        <span class="badge bg-secondary">{{ typeName }}</span>
        <h5 class="card-title red mt-2">{{ title }}</h5>
        <p class="card-text">{{ contents }}</p>
        <a href="#" class="btn" :class="isLikeClass" @click.prevent="toggleLike">좋아요</a>
        <br/>
    </div>
</div>
</template>
<script>
import { computed } from '@vue/reactivity'

export default {
    emit: ['toggleLike', 'changeTitle'],
    props : { 
        isLike: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: 'news',
            validator: value => {
                return ['news', 'notice'].includes(value);
            },
        },
        title: {
            type: String,
            Required: true,
        },
        contents:  {
            type: String,
            Required: true,
        },
        obj: {
            type: Object,
            default: () => {},
        },
    },
   // emits: ['toggleLike'],
    setup(props, context){
        //console.log("props.title :", props.title);
        const isLikeClass = computed(() => 
            props.isLike ? 'btn-danger':'btn-outline-danger',
        );
        const typeName = computed(() => 
            props.type === 'news' ? '뉴스' : '공지사항',
        );
        const toggleLike = () => {
            console.log('props.isLike : ', props.isLike);
            context.emit('changeTitle');
            context.emit('toggleLike', props);
        }
        return{ isLikeClass, typeName, toggleLike };
    }
}
</script>
<style scoped>
.red {
    color: red !important;
}
</style>