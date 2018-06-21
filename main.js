
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
		var id=setTimeout(countdown,1000);
		if(count==0){
			clearTimeout(id);
			var explo =document.getElementById("explo");
			explo.play();
			
		}
			  count--;

	}
 	var start =function(btn){
		btn.disabled=true;
		countdown();
	}
var count = parseInt(prompt("秒数を入力してください"));

//status表示
var status = document.getElementById("status");
status.src="status/lock.png";

if(count<6000 && count>0){
		var t=displaynum(count);
        display(t);
}else{
 var count=0;
	var t=displaynum(count);
    display(t);
}
