
var time=null;
var index=0;

function unnit(){

time=setInterval("play()",3000);

}


function play(){
index++;

if(index>3)
{
index=1;

}
showimg();
}

function point(i){
index=i;
stop1();
showimg();


}


function stop1(){

clearInterval(time);

}

function showimg(){

for(var i=1;i<4;i++){
var imgs=document.getElementById("tu"+i);
var nums=document.getElementById("num"+i);

if(index==i){

imgs.setAttribute('class','show');

nums.setAttribute('class','show');


}

else{

imgs.setAttribute('class','');

nums.setAttribute('class','');

}
}
}
