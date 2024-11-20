<template>
  <ais-nav></ais-nav>
  <ais-view></ais-view>
</template>
<script>
import AisNav from './components/AisNav.vue';
import AisView from './components/AisView.vue';

export default{
  
  setup(){
    return{AisNav, AisView};
  }
}
</script>