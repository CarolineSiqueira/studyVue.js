const app = Vue.createApp({
    data() {
        return {
            couserGoalA: 'Terminar o curso e aprender Vue!',
            couserGoalB: 'Fazer projetos com Vue!',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return this.couserGoalA;
            }else {
                return this.couserGoalB;
            }

        }
    }

});
app.mount('#user-goal');