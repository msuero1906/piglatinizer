$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
 //function firstCharacter(string)
 $ ("button").click(function(){
      var word = $ (".input").val();

      var suffix = word.substring(0,1);

      var onlyFirstCharacter = word.substring(1,word.length);

       $(".output").text( onlyFirstCharacter + suffix + "ay");








});
});

