const app = Vue.createApp({
    data() {
        return {
            couserGoal: 'Terminar o curso e aprender Vue!',
            vueLink: 'https://vuejs.org/'
        };
    }
});
app.mount('#user-goal');