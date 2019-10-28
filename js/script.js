$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
 //function firstCharacter(string)
 $ ("button").click(function(){
      var word = $ ("input").val();
      var word= word.substring(0,1);
  word + "ay";

    console.log(word);
    $(".output").text(word);
});
});
//console.log(firstCharacter(".output"));
 //{
 //    var suffix = string (1, string.length);
   //  return suffix + "ay";
 //}

 //console.log(firstCharacter(input))





//});
