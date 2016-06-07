//business logic
var countto;
var countby;

var renderShowCount = function(num){
  $("#showcount").append(num + ", ");
}

var validateCountForm = function(cto, cby){
  if(!cto || !cby){
    alert("'Count To' and 'Count By' must be populated with numbers");
    return false;
  } else if(cto < 0 || cby < 0){
    alert("'Count To' and 'Count By' must be positive");
    return false;
  } else if(cto < cby){
    alert("'Count By' must be less than 'Count To'");
    return false;
  } else {
    return true;
  }
};

var stringinput;
var puzzleoutput;

var validateWordForm = function(input){
  var vowels = ["a", "e", "i", "o", "u"];
  var inputarr = input.split("");

  for(var i = 0; i < inputarr.length; i++){
    for(var vi = 0; vi < vowels.length; vi++){
      if(inputarr[i] === vowels[vi]){
        inputarr[i] = "_";
      }
    }
  }
  return inputarr;

}

var validatePalindromeForm = function(arg){
  if(arg.toLowerCase() === arg.toLowerCase().split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

var total = 0;
var factorial = function(arg){
  if(arg < 0){
    return -1
  } else if (arg === 0) {
    return 1;
  } else {
    return (arg * factorial(arg - 1));
  }
}

// var sieve = function(maxnum){
//   var numArr = [];
//
//   for(var i=0; i<= maxnum; i++){
//     if(i % 2 > 0 && i % 3 > 0){
//       numArr.push(i);
//     }
//   }
//
//   return numArr;
// }

var sieve = function(maxnum){
  var numArr = [];
  var result = [];
  // loop through and create our array of numbers
  for(var i = 0; i <= maxnum; i++){
    // trickery - first two values are 0 to preserve matching index/values
    if(i > 1){
      numArr[i] = true;
    }
  }

  for(var i = 2; i < Math.sqrt(maxnum); i++){
    if(numArr[i]){
      for(var j = i * i; j < maxnum; j += i){
        numArr[j] = false;
      }
    }
  }

  for(var i = 2; i < maxnum; i++){
    if(numArr[i]){
      result.push(i);
    }
  }



  console.log(numArr);
  return result;
}

//display logic
$(function(){
  $("#countup").submit(function(event){
    event.preventDefault();
    $("#showcount").empty();
    countto = parseInt($("#countto").val());
    countby = parseInt($("#countby").val());
    if(validateCountForm(countto, countby)){
      var sum = 0;
      for(var i = 1; i <= Math.floor(countto/countby); i++){
        renderShowCount(sum += countby);
      }
    }
  });
  $("#wordpuzzle").submit(function(event){
   event.preventDefault();
   $("#puzzle").hide();
   stringinput = $("#wordp").val();
    $(".result").text(validateWordForm(stringinput).join(""));
  });

  $("#factorialform").submit(function(event){
   event.preventDefault();
   $(".result").text(factorial($("#num").val()));
  });
  $("#palindrome").submit(function(event){
   event.preventDefault();
   if(validatePalindromeForm($("#palinput").val())){
     $(".result").text("true");
   } else {
     $(".result").text("false");
   }
  })

  $("#prime").submit(function(event){
    event.preventDefault();
    $(".result").text(sieve($("#primeinput").val()));
  })

});