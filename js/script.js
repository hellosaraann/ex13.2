var baseURL = 'https://api.tronalddump.io';

var vm = new Vue ({
  el: '#app',
  data: {
    dumbThings: []
  },
  methods: {
    getSayings: function(){
      axios.get(baseURL + "/search/quote?query={obama}/").then(function(response){
        vm.dumbThings = response.data;
      })
    }
  },
  created: function(){
    this.getSayings();
  }
});
