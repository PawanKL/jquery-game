var source = ['images/source/1.png','images/source/2.png','images/source/3.png','images/source/4.png',
'images/source/5.png','images/source/6.png','images/source/7.png','images/source/8.png','images/source/9.png',
'images/source/10.png','images/source/11.png','images/source/12.png','images/source/13.png','images/source/14.png',
'images/source/15.png','images/source/16.png']
var sourceArray = source.slice(0)
var target = ['images/target/1.jpg','images/target/2.jpg','images/target/3.jpg','images/target/4.jpg',
'images/target/5.jpg','images/target/6.jpg','images/target/7.jpg','images/target/8.jpg','images/target/9.jpg',
'images/target/10.jpg','images/target/11.jpg','images/target/12.jpg','images/target/13.jpg','images/target/14.jpg',
'images/target/15.jpg','images/target/16.jpg']
var newTarget = []
var time_left = document.getElementById('time_left')
var score     = document.getElementById('score')
var level     = document.getElementById('level')
var times = [120, 90, 60, 30, 15]
var time_left_val = times[0]
var score_val     = 0
var curr_level    = 1
var isStart = false
var active_interval = undefined