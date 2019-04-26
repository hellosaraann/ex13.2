var baseURL = 'https://api.tronalddump.io/random/quote';

var vm = new Vue ({
  el: '#app',
  data: {
    dumbThings: []
  },
  methods: {
    getSayings: function(){
      axios.get(baseURL).then(function(response){
        vm.dumbThings = response.data;
      })
    }
  },
  created: function(){
    this.getSayings();
  }
});
