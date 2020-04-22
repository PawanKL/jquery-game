function updateTime(){
  time_left.textContent = time_left_val
}
function updateScore(){
  score.textContent = score_val
}
function updateLevel(){
  level.textContent = curr_level
}
function startTimer(){
  if(active_interval){
      clearInterval(active_interval)
  }
  active_interval = setInterval(() => {
      updateTime()
      time_left_val-=1
      if(time_left_val == 0){
          alert("You Lose, Try Again Later.....")
          score_val = 0
          curr_level = 1
          time_left_val = times[0]
          updateScore()
          updateLevel()
          updateTime()
      }  
  }, 1000);      
}
function setIntervalX(callback, delay, repetitions) {
  var x = 0;
  var intervalID = window.setInterval(function () {

     callback();

     if (++x === repetitions) {
         window.clearInterval(intervalID);
     }
  }, delay);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array
}
function makeDrag(){
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
  });
  $("#drag4").draggable({revert: function(droppableObj){if(droppableObj === false){
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
  });
  $("#drag6").draggable({revert: function(droppableObj){if(droppableObj === false){
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
}

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
      score_val+=5
      updateScore()
      if(score_val % 30 == 0){
          levelUp();
      }
      // console.log('Image Drop')
      var hurraySound = document.getElementById('hurray')
      hurraySound.play();
      ui.draggable.toggle( "bounce", { times: 5 }, "slow" )
  },
  over: function(event, ui) {
  //   console.log("image over")
  //   console.log(event)
  }
});
$("#start,#restart").click(function(){
  updateScore()
  updateLevel()
  updateTime()
  newTarget = []
  var newSource = shuffle(source)
  for(var i=0;i<6;i++){
    var j = sourceArray.indexOf(newSource[i])
    newTarget.push(target[j])
  }
  // console.log(newSource)
  // console.log(newTarget)
  newTarget = shuffle(newTarget)
   for(var i=0;i<6;i++){
    var img = $("#drag"+i);
    $(img).attr('src', newSource[i])
    var img2 = $(".drop")[i]
    $(img2).attr('src', newTarget[i])
  }
  makeDrag()
  if($(this).attr('id') == "start"){
      time_left_val = times[0]
      $(this).attr('hidden', true)
      $("#restart").removeAttr('hidden')
      startTimer()
  }else{
      time_left_val = times[0]
      isStart = true
      // console.log('restart')
      $(this).attr('hidden', true)
      $("#start").removeAttr('hidden')
      startTimer()
  }
  
});


 
function levelUp(){
  curr_level+=1
  time_left_val = times[curr_level-1]
  updateTime()
  updateScore()
  updateLevel()
  newTarget = []
  var newSource = shuffle(source)
  for(var i=0;i<6;i++){
    var j = sourceArray.indexOf(newSource[i])
    newTarget.push(target[j])
  }
  console.log(newSource)
  console.log(newTarget)
  newTarget = shuffle(newTarget)
   for(var i=0;i<6;i++){
    var img = $("#drag"+i);
    $(img).removeClass().addClass("img-responsive center-block drag")
    makeDrag();
    $(img).removeAttr('style')
    $(img).css("position", "relative");
    $(img).attr('src', newSource[i])
    var img2 = $(".drop")[i]
    $(img2).attr('src', newTarget[i])
  }
  startTimer();
}
