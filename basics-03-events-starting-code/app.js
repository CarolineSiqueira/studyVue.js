const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:''
    };
  },
  methods: {
     setName(event) {
      this.name = event.target.value;
    },
    add() {
      this.counter=this.counter + 1;
      //this.counter++;
    },
    remove() {
      this.counter=this.counter - 1;
      //this.counter--;
    },
    resetInput() {
      this.name= '';
    }
  }
});

app.mount('#events');
