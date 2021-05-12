const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      confirmedName: ''
    };
  },
  methods: {
    confirmedInput() {
      this.confirmedName=this.name;
    },
    submitForm() {
      alert('Submitted!');
    },
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
    }
  }
});

app.mount('#events');
