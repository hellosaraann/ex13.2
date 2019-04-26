var baseURL = 'https://www.tronalddump.io/';

var vm = new Vue ({
  el: '#app',
  data: {
    dumbThings: []
  },
  methods: {
    getSayings: function(){
      axios.get(baseURL + '/quotes').then(function(response){
        vm.dumbThings = response.data;
      })
    }
  },
  created: function(){
    this.getSayings();
  }
});
