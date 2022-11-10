new Vue({
    el: '#app',
    data: { //initialize
      textInput: ''
    },
    computed: {//turn data into viewable values
      identicon: function() {
        return jdenticon.toSvg(this.textInput, 200);
      }
    }, 
    methods: { //change data
      onInput: function(){
        this.textInput = event.target.value
      }
    }
  });