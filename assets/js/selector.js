  $(document).ready(function(){

  	$('.fa-search').click(function(){
  		$('.search-container').slideToggle('300');
  	});
  	$('.cross-active').click(function(){
  		$('.search-container').slideUp('300');
  	});

// // lightslider
$("#lightSlider").lightSlider({
        item: 3,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,
 
        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
 
        speed: 2000, //ms'
        auto: true,
        loop: true,
        slideEndAnimation: true,
        pause: 3000,
 
        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',
 
        rtl:false,
        adaptiveHeight:false,
 
        vertical:false,
        verticalHeight:500,
        vThumbWidth:100,
 
        thumbItem:10,
        pager: false,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',
 
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40,
 
        responsive : [
        {
        	breakpoint:800,
        	settings:{
        		item:2,
        		slideMove:1,
        		slideMargin:6,
        	}
        },
        {
        	breakpoint:480,
        	settings:{
        		item:1,
        		slideMove:1
        		
        	}
        }

        
        ],
 
        onBeforeStart: function (el) {},
        onSliderLoad: function (el) {},
        onBeforeSlide: function (el) {},
        onAfterSlide: function (el) {},
        onBeforeNextSlide: function (el) {},
        onBeforePrevSlide: function (el) {}
    });   



$("#lightSlider1").lightSlider({
        item: 5,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,
 
        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
 
        speed: 2000, //ms'
        auto: true,
        loop: true,
        slideEndAnimation: true,
        pause: 3000,
 
        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',
 
        rtl:false,
        adaptiveHeight:false,
 
        vertical:false,
        verticalHeight:500,
        vThumbWidth:100,
 
        thumbItem:10,
        pager: false,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',
 
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40,
 
        responsive : [
        {
        	breakpoint:800,
        	settings:{
        		item:2,
        		slideMove:1,
        		slideMargin:6,
        	}
        },
        {
        	breakpoint:480,
        	settings:{
        		item:1,
        		slideMove:1
        		
        	}
        }

        
        ],
 
        onBeforeStart: function (el) {},
        onSliderLoad: function (el) {},
        onBeforeSlide: function (el) {},
        onAfterSlide: function (el) {},
        onBeforeNextSlide: function (el) {},
        onBeforePrevSlide: function (el) {}
    });   








    $('#adaptive').lightSlider({
        adaptiveHeight:true,
        speed: 700,
        auto: true,
        mode:'fade',
        item:1,
        slideMargin:0,
         pause: 5000,
        loop:true
        

    });
      $('#adaptive2').lightSlider({
        adaptiveHeight:true,
        speed: 700,
        auto: true,
        mode:'fade',
        item:1,
        slideMargin:0,
         pause: 5000,
         pager: false,
        loop:true
        

    });


      var offset=150;
	var duration=500;

	$('.to-top').hide();
		
	$(window).scroll(function(){
		if($(this).scrollTop()>offset){
			$('.to-top').fadeIn(duration);
		}else{
		$('.to-top').fadeOut(duration);
	}
	});
	$('.to-top').click(function(){
		$('body,html').animate({scrollTop:0},duration);
	})

     });



//   document.onmousemove=animateCircles;
//   var colors=['#ccc',"#6cf","#eba13a"]
//   function animateCircles(event){
//   var circle=document.createElement("div");
//   circle.setAttribute("class","circle");
//   document.body.appendChild(circle);

//   circle.style.left=event.clientX+'px';
//   circle.style.top=event.clientY+'px';
//   var color=colors[Math.floor(Math.random()*colors.length)];
//   circle.style.borderColor=color;
//   circle.style.transition="all .5s linear 0s";
//   circle.style.left=circle.offsetLeft-20+'px';
//   circle.style.top=circle.offsetTop-20+'px';
//   circle.style.width="50px";
//   circle.style.height="50px";
//   circle.style.borderWidth="5px";
//   circle.style.opacity=0;
// }