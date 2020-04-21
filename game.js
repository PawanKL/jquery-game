var source = ['images/source/1.png','images/source/2.png','images/source/3.png','images/source/4.png',
'images/source/5.png','images/source/6.png','images/source/7.png','images/source/8.png','images/source/9.png',
'images/source/10.png','images/source/11.png','images/source/12.png','images/source/13.png','images/source/14.png',
'images/source/15.png','images/source/16.png']
var target = ['images/target/1.jpg','images/target/2.jpg','images/target/3.jpg','images/target/4.jpg',
'images/target/5.jpg','images/target/6.jpg','images/target/7.jpg','images/target/8.jpg','images/target/9.jpg',
'images/target/10.jpg','images/target/11.jpg','images/target/12.jpg','images/target/13.jpg','images/target/14.jpg',
'images/target/15.jpg','images/target/16.jpg']
var indexes = []
$(function () {
  var newSource = shuffle(source)
  var newTarget = shuffle(target)
   for(var i=0;i<6;i++){
    var img = $("#drag"+i);
    $(img).attr('src', newSource[i])
    var img2 = $("#drop"+i)
    $(img2).attr('src', target[i])
  }
  // $(".drag").draggable({ revert: 'invalid' });
  $("#drag1").draggable({revert: function(droppableObj){if(droppableObj === false){
        var sadSound = document.getElementById('sad')
        sadSound.play();
        return true;
       }
       else
       {
        return false;
       }
    }
  });
  $("#drag2").draggable({revert: function(droppableObj){if(droppableObj === false){
    var sadSound = document.getElementById('sad')
    sadSound.play();
    return true;
   }
   else
   {
    return false;
   }
}
});
$("#drag3").draggable({revert: function(droppableObj){if(droppableObj === false){
  var sadSound = document.getElementById('sad')
  sadSound.play();
  return true;
 }
 else
 {
  return false;
 }
}
}); $("#drag4").draggable({revert: function(droppableObj){if(droppableObj === false){
  var sadSound = document.getElementById('sad')
  sadSound.play();
  return true;
 }
 else
 {
  return false;
 }
}
}); $("#drag5").draggable({revert: function(droppableObj){if(droppableObj === false){
  var sadSound = document.getElementById('sad')
  sadSound.play();
  return true;
 }
 else
 {
  return false;
 }
}
}); $("#drag6").draggable({revert: function(droppableObj){if(droppableObj === false){
  var sadSound = document.getElementById('sad')
  sadSound.play();
  return true;
 }
 else
 {
  return false;
 }
}
});
  // console.log('In game.js...')
  // var newSource = shuffle(source)
  // var newTarget = shuffle(target)
  // for(var i=1;i<=6;i++){
  //   var img = $("#drag"+i);
  //   $(img).attr('src', newSource[i])
  //   var img2 = $("#drop"+i)
  //   $(img2).attr('src', target[i])
  // }
  // indexes.forEach(function(index){
  //   newTarget.push(target[index])
  // })
  // newTarget = shuffle(newTarget)
  // for(var i=1;i<=6;i++){
  //   var img = $("#drop"+i);
  //   $(img).attr('src', newTarget[i])
  // }
  // for(var i=1;i<=6;i++){
  //   var img = $("#drop"+i);
  //   $(img).attr('src', newTarget[i])
  // }
  // indexes = []
  // $("#drop1").droppable({
  //   accept: function(d){
  //     var s1 = $(this).attr('src');
  //     s1 = s1.split('/')[2].split('.')[0]
  //     var s2 = d.attr('src');
  //     s2 = s2.split('/')[2].split('.')[0]
  //     if(s1 == s2){
  //       return true
  //     }
  //   },
  //   drop: function(event, ui) {
  //       console.log('Image Drop')
  //       ui.draggable.toggle( "bounce", { times: 2 }, "slow" )
  //       // $(this).addClass("ui-state-highlight").find("p").html("Dropped in " + this.id);
  //   },
  //   over: function(event, ui) {
  //     console.log("image over")
  //     console.log(event)
  //       // $('.display').html( this.id );
  //   }
  // });
  $(".drop").droppable({
    accept: function(d){
      var s1 = $(this).attr('src');
      s1 = s1.split('/')[2].split('.')[0]
      var s2 = d.attr('src');
      s2 = s2.split('/')[2].split('.')[0]
      if(s1 == s2){
        return true
      }
    },
    drop: function(event, ui) {
        console.log('Image Drop')
        var hurraySound = document.getElementById('hurray')
        hurraySound.play();
        ui.draggable.toggle( "bounce", { times: 5 }, "slow" )
    },
    over: function(event, ui) {
      console.log("image over")
      console.log(event)
    }
  });
});
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    // return [array, indexes];
    return array
  }

//   function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         console.log(j)
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array
// }
 
function createArray(){

}