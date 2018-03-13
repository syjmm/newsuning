//banner部分
{
	const imgs=document.querySelectorAll(".imgbox li");
	const pagers=document.querySelectorAll(".pagerbox li");
	const second=document.querySelector("#second");
	const prev=document.querySelector(".prev");
	const next=document.querySelector(".next");
	const l=imgs.length;
	pagers.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	})
	let n=0;
	let t=setInterval(move,3000)
		function move(){
			n++;
			// n=n%5;
			if(n===l){
				n=0;
			}
			if(n<0){
				n=l-1;
			}
			for(let i=0;i<l;i++){
					imgs[i].classList.remove("active");
					pagers[i].classList.remove("active");
				}
				imgs[n].classList.add("active");
				pagers[n].classList.add("active");

		}
	second.onmouseenter=function(){
		clearInterval(t);
	}
	second.onmouseleave=function(){
		t=setInterval(move,3000);
	}
	next.onclick=function(){
		move();
	}
	prev.onclick=function(){
		n-=2;
		move();
	}
}
//顶部显示
{
	let flxtop=document.querySelector(".flx_bar");
	let letbar=document.querySelector(".floatbar");
	window.onscroll=function(){
	let st=document.documentElement.scrollTop;
	if(st>1200){
		flxtop.style.display="block";
	}else{
		flxtop.style.display="none";
	}

	if(st>2400){
		letbar.style.display="block";
	}else{
		letbar.style.display="none";
	}
	}
}
//对应模板
{
	let tips=document.querySelectorAll(".tips");
	let containers=document.querySelectorAll(".container");
	tips.forEach(function(ele,index){
		ele.onclick=function(){
			let ot=containers[index].offsetTop-70;
			// console.log(ot);
			// document.documentElement.scrollTop=ot;
			let now=document.documentElement.scrollTop;
			let speed=(ot-now)/8;
			let time=0;
			let t=setInterval(function(){
				time+=25;
				now+=speed;
				if(time===200){
					clearInterval(t);
				}
				document.documentElement.scrollTop=now;
			},25);
		}
	})

	window.addEventListener("scroll",function(){
		let st=document.documentElement.scrollTop;
		
		for(let i=0;i<containers.length;i++){
			if(st>containers[i].offsetTop-70){
				for(let i=0;i<tips.length;i++){
					tips[i].classList.remove("active");
					
				}
				tips[i].classList.add("active");
			}
		}
	})
}
//返回顶部
{
	let totop=document.querySelector(".totop");
	let totoptan=document.querySelector(".totop_tan");
	let towen=document.querySelector(".totan_wen");
	totop.onmouseenter=function(){
		// document.documentElement.scrollTop=0;
		totoptan.style.width="73px";
		totoptan.classList.add("active");
		towen.classList.add("active");
		
	}
	totop.onclick=function(){
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},25)
	}
	totop.onmouseleave=function(){
		totoptan.style.width="0";
	}

}
//排行榜
{
	function wheel(parent){
		let prev=parent.querySelector(".prev1");
		let next=parent.querySelector(".next1");
		let inner=parent.querySelector(".paihang_inner");
		let contents=parent.querySelectorAll(".paihang_neirong");
		let pagers=parent.querySelectorAll(".paihang_quan");
		console.dir(pagers)
		let n=0;
		next.onclick=function(){
			n++;
	
			if(n===contents.length){
				n=contents.length-1;
				return;
			}
			inner.style.left=n*-380+"px";

			pagers[n].classList.add("active");
			pagers[n-1].classList.remove("active");
			obj=pagers[n];
			
		}
		prev.onclick=function(){
			n--;
			if(n<0){
				n=0;
				return;
			}
			inner.style.left=n*-380+"px";
			pagers[n].classList.add("active");
			pagers[n+1].classList.remove("active");
			obj=pagers[n];
	
		}
		let obj=pagers[0];
		pagers.forEach(function(ele,index){
			ele.onclick=function(){
				obj.classList.remove("active");
				ele.classList.add("active");
				obj=ele;
				n=index;
				inner.style.left=n*-380+"px";
			}
			
		})}
		let items=document.querySelectorAll(".paihang_bottom");
		items.forEach(function(ele){
			wheel(ele);
		})
}
//视频部分
{
	function wheel(parent){
		let prev=parent.querySelector(".shiping_prev");
		let next=parent.querySelector(".shiping_next");
		let inner=parent.querySelector(".shiping_inner");
		let contents=parent.querySelectorAll(".shiping_content");
		let n=0;
		next.onclick=function(){
			n++;
			if(n===contents.length){
				n=0;		
			}
			inner.style.left=n*-393+"px";
	
		}
		prev.onclick=function(){
			n--;
			if(n<0){
				n=1;	
			}
			inner.style.left=n*-393+"px";
		}
		
	}
		let items=document.querySelectorAll(".shiping_center");
		items.forEach(function(ele){
			wheel(ele);
		})
}
//banner侧导航
{
	let bns=document.querySelectorAll(".bn");
	let menus=document.querySelectorAll(".menu");
	let obj=menus[0];
	bns.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}
	})
}