var baseURL = 'https://cat-fact.herokuapp.com';

var vm = new Vue ({
  el: '#app',
  data: {
    catFacts: []
  },
  methods: {
    getCatFacts: function(){
      axios.get(baseURL + '/facts').then(function(response){
        console.log(response);
        vm.catFacts = response.data;
      })
    }
  },
  created: function(){
    this.getCatFacts();
  }
});
