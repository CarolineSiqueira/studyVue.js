const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      lastName:''
      //fullname: ''
      
    };
  },
  
  watch:{
    counter(value) {
      if(value > 10) {
        this.counter = 0;
      }
    }
    //Uma alternativa a propriedade computada 
 /*    name(value) {
      if( value === ''){
        this.fullname = '';
      }else {
        this.fullname = value + ' ' + this.lastName;
      }
    },
    lastName(value) {
      if( value === ''){
        this.fullname = '';
      }else {
        this.fullname = this.name + ' ' + value;
      }
    } */
  },
  computed: {
    fullname() {
      console.log('Running again...');
      if(this.name === '' || this.lastName === ''){
        return '';
      }
        return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    resetInput() {
      this.name= '';
      this.lastName= '';
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
