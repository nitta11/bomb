//password答え
var pword = [0,6,2,7];
//
var success=0;

  var displaynum = function(count){
  var timem =parseInt(count/60);
  var times =parseInt(count%60);
	     var tim2m =parseInt(timem/10);
	     var tim1m =parseInt(timem%10);
	     var tim2s =parseInt(times/10);
	     var tim1s =parseInt(times%10);

	  var t=[tim2m,tim1m,tim2s,tim1s];
	  return t;
  }

	var display =function(t){
		var img2m = document.getElementById("num2m");
	    img2m.src="number/"+t[0]+".png";
	    var img1m = document.getElementById("num1m");
	    img1m.src="number/"+t[1]+".png";
	    var img2s = document.getElementById("num2s");
	    img2s.src="number/"+t[2]+".png";
	    var img1s = document.getElementById("num1s");
	    img1s.src="number/"+t[3]+".png";
	}

var countdown = function(){
	  var t =displaynum(count);
 	  var a=String(count);
	  display(t);
	var timerid=setTimeout(countdown,1000);
/*		if(count==0){
			clearTimeout(timerid);
			var explo =document.getElementById("explo");
			explo.play();
			
		}else if(success==1){
			clearTimeout(timerid);
			return;
		}  */
	if(success==0){
		count--;
	}
	
	if(count==0){
			clearTimeout(timerid);
			var explo =document.getElementById("explo");
			explo.play();
			
		}else if(success==1){
			clearTimeout(timerid);
		
		}
	
}

var start =function(btn){
		btn.disabled=true;
		countdown();
	}
//password配列
var word = [10,10,10,10];
//password入力部分
var worddis=function(word){
		var pass0 = document.getElementById("pass0");
	    pass0.src="pass/p"+word[0]+".png";
	    var pass1 = document.getElementById("pass1");
	    pass1.src="pass/p"+word[1]+".png";
	    var pass2 = document.getElementById("pass2");
	    pass2.src="pass/p"+word[2]+".png";
	    var pass3 = document.getElementById("pass3");
	    pass3.src="pass/p"+word[3]+".png";
}
var count = parseInt(prompt("秒数を入力してください"));

//status表示
var status = document.getElementById("status");
status.src="status/lock.png";

if(count<6000 && count>0){
		var t=displaynum(count);
    display(t);
	worddis(word);
}else{
 var count=0;
	var t=displaynum(count);
    display(t);
	worddis(word);
}

//button
var i=0;
document.getElementById("btn0").onclick= function(){
	word[i]=0;
	worddis(word);
	if(i<4){
		i++;
	}
}

document.getElementById("btn1").onclick= function(){
	word[i]=1;
	worddis(word);
	if(i<4){
		i++;
	}
}

document.getElementById("btn2").onclick= function(){
	word[i]=2;
	worddis(word);
	if(i<4){
		i++;
	}
}

document.getElementById("btn3").onclick= function(){
	word[i]=3;
	worddis(word);
	if(i<4){
		i++;
	}
}

document.getElementById("btn4").onclick= function(){
	word[i]=4;
	worddis(word);
	if(i<4){
		i++;
	}
}

document.getElementById("btn5").onclick= function(){
	word[i]=5;
	worddis(word);
	if(i<4){
		i++;
	}
}

document.getElementById("btn6").onclick= function(){
	word[i]=6;
	worddis(word);
	if(i<4){
		i++;
	}
}

document.getElementById("btn7").onclick= function(){
	word[i]=7;
	worddis(word);
	if(i<4){
		i++;
	}
}

document.getElementById("btn8").onclick= function(){
	word[i]=8;
	worddis(word);
	if(i<4){
		i++;
	}
}

document.getElementById("btn9").onclick= function(){
	word[i]=9;
	worddis(word);
	if(i<4){
		i++;
	}
}



document.getElementById("btnC").onclick= function(){
	if(i>0){
		i--;
	}
	word[i]=10;
	worddis(word);	
}


document.getElementById("btnE").onclick= function(){
	var a=0;
	for(var i=0;i<4;i++){
		if(word[i]==pword[i]){
			a++;
		}
	}

	if(a==4){
		success=1;
	}
		
}
