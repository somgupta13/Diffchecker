var original=document.getElementById("check1");
var change=document.getElementById("check2");
var button=document.querySelector("button");
var disOriginal=document.querySelector("#p1");
var disChanged=document.querySelector("#p2");
var line1,line2,k1,t;
//eventListener
button.addEventListener("click",function(){
	 line1=0,line2=0,k1=0,t=0;
		var str1,str2,s3=[],s4=[],l=0,f=0;
		disOriginal.innerHTML="Original"+"<br\>";
		disChanged.innerHTML="Changed"+"<br\>";
		str1=original.value.split("\n");
	 	str2=change.value.split("\n");
	 	for(i=0;i<str1.length;i++){
	 		s3=[];f=0;
	 		for(j=l;j<str2.length;j++){
	 			if(str1[i]!=str2[j]){
	 				s3.push(str2[j]);
	 			}
	 			else{
	 				f=1;
	 				l=j+1;
	 				s4.push(str1[i]);
	 				k=j-s3.length+1;
	 				s3.forEach(function(s){
	 					console.log(s3);
	 					displayChanged(s,k);
	 					k++;
	 				});
	 				display(str1[i],str2[j],i+1,j+1);
	 				break;
	 			}
	 		}
	 		if(f==0){
	 			displayOriginal(str1[i],i+1);
	 		}
	 	}
	 	//display reamainig changed 
	 	var y=0;
		for(i=0;i<s4.length;i++){
			var flag=0;
			for(j=0;j<str2.length;j++){
				if(s4[i]==str2[j]&&flag==0){
					y=j+1;
					flag=1;
				}
			}
		}
		for(i=y;i<str2.length;i++){
			displayChanged(str2[i],i+1);
		}
});
//display function
function display(s1,s2,i,j){
	i1=i+k1;
	j1=j+t;
	line1=i1;line2=j1;
	if(i1<j1){
		u=j1;
		while(i1!=u){
			disOriginal.innerHTML+="<br\>";
			u--;
			k1++;
			line1++;
		}
	}
	if(i1>j1){
		u=i1;
		while(j1!=u){
			disChanged.innerHTML+="<br\>";
			u--;
			t++;
			line2++;
		}
	}
		disOriginal.innerHTML+="<b>"+i+"</b>"+". "+s1+"<br\>";
		disChanged.innerHTML+="<b>"+j+"</b>"+". "+s2+"<br\>";
}
function displayChanged(s2,j){
		disChanged.innerHTML+="<b>"+j+"</b>"+". "+s2+"<br\>";	
		line2++;
}
function displayOriginal(s1,i){
		disOriginal.innerHTML+="<b>"+i+"</b>"+". "+s1+"<br\>";
		line1++;	
}
function checkLine(){
	if(line1>line2){
		while(line1!=line2){
			disChanged.innerHTML+="<br\>";
			line2++;
		}
	}
	if(line1<line2){
		while(line1!=line2){
			disOriginal.innerHTML+="<br\>";
			line1++;
		}
	}
}