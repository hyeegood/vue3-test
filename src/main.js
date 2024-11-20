import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import AisNav from './components/AisNav.vue'
import AisView from './components/AisView.vue'
import AisCard from './components/AisCard.vue'

const app = createApp(App);
app.component("AisNav", AisNav);
app.component("AisView", AisView);
app.component("AisCard", AisCard);
app.mount('#app')
