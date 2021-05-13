const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      confirmedName: ''
    };
  },
  computed: {
    fullname() {
      console.log('Running again...');
      if(this.name === ''){
        return '';
      }
        return this.name + '' + 'Siqueira';
    }
  },
  methods: {
    resetInput() {
      this.name= '';
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
