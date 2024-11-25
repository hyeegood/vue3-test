<template>
    <main>

            <lifecycle-hook></lifecycle-hook>
            <script-setup></script-setup>
            <!-- <search>
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
            </div> -->
       
    </main>
</template>
<script setup>
import LifecycleHook from './LifecycleHook.vue';
import ScriptSetup from './ScriptSetup.vue';
</script>

<style lang="scss" scoped></style>S