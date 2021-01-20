

   jQuery(document).ready(function($) {
		
		$("#app-accordion").liteAccordion({
			containerWidth: 885,
			headerWidth: 40
		});

		$("#website-accordion").liteAccordion({
			containerWidth: 885,
			headerWidth: 40
		});		
		
		$("#more-accordion").liteAccordion({
			containerWidth: 885,
			headerWidth: 40
		});	
				
		// Community Fund Hovers
		
		$(".community-projects .project").hover(function(){
			
			$(this).find(".project-details").stop().animate({ top: 0 }); },
			
			function(){
			
			$(this).find(".project-details").stop().animate({ top: 157 }); 

		});

   });
   
/*************************************************!
*
*   project:    liteAccordion - a horizontal accordion plugin for jQuery
*   author:     Nicola Hibbert
*   url:        http://nicolahibbert.com/liteaccordion-v2/
*   demo:       http://www.nicolahibbert.com/demo/liteAccordion/
*
*   Version:    2.1.0
*   Copyright:  (c) 2010-2012 Nicola Hibbert
*   Licence:    MIT
*
**************************************************/
(function(b){var a=function(g,l){var i={containerWidth:960,containerHeight:320,headerWidth:48,responsive:false,autoScaleImages:false,minContainerWidth:300,maxContainerWidth:960,activateOn:"click",firstSlide:1,slideSpeed:800,onTriggerSlide:function(){},onSlideAnimComplete:function(){},autoPlay:false,pauseOnHover:false,cycleSpeed:6000,easing:"swing",theme:"basic",rounded:false,enumerateSlides:false,linkable:false},h=b.extend({},i,l),c=g.children("ol").children("li"),j=c.children(":first-child"),k=c.length,f=h.containerWidth-k*h.headerWidth,e={play:function(m){var n=d.nextSlide(m&&m);if(d.playing){return}d.playing=setInterval(function(){j.eq(n()).trigger("click.liteAccordion")},h.cycleSpeed)},stop:function(){clearInterval(d.playing);d.playing=0},next:function(){e.stop();j.eq(d.currentSlide===k-1?0:d.currentSlide+1).trigger("click.liteAccordion")},prev:function(){e.stop();j.eq(d.currentSlide-1).trigger("click.liteAccordion")},destroy:function(){e.stop();b(window).off(".liteAccordion");g.attr("style","").removeClass("liteAccordion basic dark light stitch").removeData("liteAccordion").off(".liteAccordion").find("li > :first-child").off(".liteAccordion").filter(".selected").removeClass("selected").end().find("b").remove();c.removeClass("slide").children().attr("style","")},debug:function(){return{elem:g,defaults:i,settings:h,methods:e,core:d}}},d={setStyles:function(){g.width(h.containerWidth).height(h.containerHeight).addClass("liteAccordion").addClass(h.rounded&&"rounded").addClass(h.theme);c.addClass("slide").children(":first-child").height(h.headerWidth);d.setSlidePositions();if(h.responsive){d.responsive()}else{if(h.autoScaleImages){d.autoScaleImages()}}},setSlidePositions:function(){var m=j.filter(".selected");if(!m.length){j.eq(h.firstSlide-1).addClass("selected")}j.each(function(n){var q=b(this),p=n*h.headerWidth,o=j.first().next(),r=parseInt(o.css("marginLeft"),10)||parseInt(o.css("marginRight"),10)||0;if(m.length){if(n>j.index(m)){p+=f}}else{if(n>=h.firstSlide){p+=f}}q.css("left",p).width(h.containerHeight).next().width(f-r).css({left:p,paddingLeft:h.headerWidth});h.enumerateSlides&&q.append("<b>"+(n+1)+"</b>")})},responsive:function(){var m=g.parent().width();if(m>h.minContainerWidth){h.containerWidth=m<h.maxContainerWidth?m:h.maxContainerWidth}else{if(m<h.maxContainerWidth){h.containerWidth=m>h.minContainerWidth?m:h.minContainerWidth}}h.containerHeight=h.containerWidth/3|0;f=h.containerWidth-k*h.headerWidth;g.width(h.containerWidth).height(h.containerHeight);c.children(":first-child").width(h.containerHeight);d.setSlidePositions()},autoScaleImages:function(){c.children("div").each(function(){var n=b(this),m=n.find("img");if(m.length){m.each(function(o,p){b(p).width(n.width()+1);b(p).height(n.height())})}})},bindEvents:function(){var m=0;if(h.activateOn==="click"){j.on("click.liteAccordion",d.triggerSlide)}else{if(h.activateOn==="mouseover"){j.on("click.liteAccordion mouseover.liteAccordion",d.triggerSlide)}}if(h.pauseOnHover&&h.autoPlay){g.on("mouseover.liteAccordion",function(){d.playing&&e.stop()}).on("mouseout.liteAccordion",function(){!d.playing&&e.play(d.currentSlide)})}if(h.responsive){b(window).on("load.liteAccordion",function(){if(h.autoScaleImages){d.autoScaleImages()}}).on("resize.liteAccordion orientationchange.liteAccordion",function(){clearTimeout(m);m=setTimeout(function(){d.responsive();if(h.autoScaleImages){d.autoScaleImages()}},100)})}},linkable:function(){var m=(function(){var o=[];c.each(function(){if(b(this).attr("data-slide-name")){o.push((b(this).attr("data-slide-name")).toLowerCase())}});return m=o})();var n=function(p){var o;if(p.type==="load"&&!window.location.hash){return}if(p.type==="hashchange"&&d.playing){return}o=b.inArray((window.location.hash.slice(1)).toLowerCase(),m);if(o>-1&&o<m.length){j.eq(o).trigger("click.liteAccordion")}};b(window).on("hashchange.liteAccordion load.liteAccordion",n)},currentSlide:h.firstSlide-1,nextSlide:function(m){var n=m+1||d.currentSlide+1;return function(){return n++%k}},playing:0,slideAnimCompleteFlag:false,triggerSlide:function(o){var n=b(this),m={elem:n,index:j.index(n),next:n.next(),prev:n.parent().prev().children("h2")};d.currentSlide=m.index;d.slideAnimCompleteFlag=false;if(h.linkable&&!d.playing){window.location.hash=n.parent().attr("data-slide-name")}h.onTriggerSlide.call(m.next);if(n.hasClass("selected")&&n.position().left<f/2){d.animSlide.call(m)}else{d.animSlideGroup(m)}if(o.originalEvent&&h.autoPlay){e.stop();e.play(j.index(j.filter(".selected")))}},animSlide:function(m){var n=this;if(typeof this.pos==="undefined"){this.pos=f}j.removeClass("selected").filter(this.elem).addClass("selected");if(!!this.index){this.elem.add(this.next).stop(true).animate({left:this.pos+this.index*h.headerWidth},h.slideSpeed,h.easing,function(){if(!d.slideAnimCompleteFlag){h.onSlideAnimComplete.call(m?m.next:n.prev.next());d.slideAnimCompleteFlag=true}});j.removeClass("selected").filter(this.prev).addClass("selected")}},animSlideGroup:function(m){var n=["left","right"];b.each(n,function(o,p){var r,q;if(p==="left"){r=":lt("+(m.index+1)+")";q=0}else{r=":gt("+m.index+")";q=f}c.filter(r).children("h2").each(function(){var t=b(this),s={elem:t,index:j.index(t),next:t.next(),prev:t.parent().prev().children("h2"),pos:q};d.animSlide.call(s,m)})});j.removeClass("selected").filter(m.elem).addClass("selected")},ieClass:function(m){if(m<7){e.destroy()}if(m===7||m===8){c.each(function(n){b(this).addClass("slide-"+n)})}g.addClass("ie ie"+m)},init:function(){var n=navigator.userAgent,m=n.indexOf("MSIE");if(m!==-1){n=n.slice(m+5,m+6);d.ieClass(+n)}d.setStyles();d.bindEvents();if(h.cycleSpeed<h.slideSpeed){h.cycleSpeed=h.slideSpeed}if(h.linkable&&"onhashchange" in window){d.linkable()}h.autoPlay&&e.play()}};d.init();return e};b.fn.liteAccordion=function(e){var d=this,c=d.data("liteAccordion");if(typeof e==="object"||!e){return d.each(function(){var f;if(c){return}f=new a(d,e);d.data("liteAccordion",f)})}else{if(typeof e==="string"&&c[e]){if(e==="debug"){return c[e].call(d)}else{c[e].call(d);return d}}}}})(jQuery);

/*
(function(b) {
    var a=function(g, l) {
    var i= {
    containerWidth: 960, containerHeight:320, headerWidth:48, responsive:false, autoScaleImages:false, minContainerWidth:300, maxContainerWidth:960, activateOn:"click", firstSlide:1, slideSpeed:800, onTriggerSlide:function() {
}
, onSlideAnimComplete:function() {
}
, autoPlay:false, pauseOnHover:false, cycleSpeed:6000, easing:"swing", theme:"basic", rounded:false, enumerateSlides:false, linkable:false;
}
, h=b.extend( {
}
, i, l), c=g.children("ol").children("li"), j=c.children(":first-child"), k=c.length, f=h.containerWidth-k*h.headerWidth, e= {
    play: function(m) {
    var n=d.nextSlide(m&&m);
    if(d.playing) {
    return;
}
d.playing=setInterval(function() {
    j.eq(n()).trigger("click.liteAccordion");
}
, h.cycleSpeed);
}, stop: function() {
    clearInterval(d.playing);
    d.playing=0;
}
, next: function() {
    e.stop();
    j.eq(d.currentSlide===k-1?0: d.currentSlide+1).trigger("click.liteAccordion");
}
, prev:function() {
    e.stop();
    j.eq(d.currentSlide-1).trigger("click.liteAccordion");
}
, destroy: function() {
    e.stop();
    b(window).off(".liteAccordion");
    g.attr("style", "").removeClass("liteAccordion basic dark light stitch").removeData("liteAccordion").off(".liteAccordion").find("li > : first-child").off(".liteAccordion").filter(".selected").removeClass("selected").end().find("b").remove();
    c.removeClass("slide").children().attr("style", "");
}
, debug: function() {
    return {
    elem: g, defaults:i, settings:h, methods:e, core:d;
}
}}, d= {
    setStyles: function() {
    g.width(h.containerWidth).height(h.containerHeight).addClass("liteAccordion").addClass(h.rounded&&"rounded").addClass(h.theme);
    c.addClass("slide").children(": first-child").height(h.headerWidth);
    d.setSlidePositions();
    if(h.responsive) {
    d.responsive();
}
else {
    if(h.autoScaleImages) {
    d.autoScaleImages();
}
}}, setSlidePositions: function() {
    var m=j.filter(".selected");
    if(!m.length) {
    j.eq(h.firstSlide-1).addClass("selected");
}
j.each(function(n) {
    var q=b(this), p=n*h.headerWidth, o=j.first().next(), r=parseInt(o.css("marginLeft"), 10)||parseInt(o.css("marginRight"), 10)||0;
    if(m.length) {
    if(n>j.index(m)) {
    p+=f;
}
}else {
    if(n>=h.firstSlide) {
    p+=f;
}
}q.css("left", p).width(h.containerHeight).next().width(f-r).css( {
    left: p, paddingLeft:h.headerWidth;
}
);
    h.enumerateSlides&&q.append("<b>"+(n+1)+"</b>");
}
);
}, responsive: function() {
    var m=g.parent().width();
    if(m>h.minContainerWidth) {
    h.containerWidth=m<h.maxContainerWidth?m: h.maxContainerWidth;
}
else {
    if(m<h.maxContainerWidth) {
    h.containerWidth=m>h.minContainerWidth?m: h.minContainerWidth;
}
}h.containerHeight=h.containerWidth/3|0;
    f=h.containerWidth-k*h.headerWidth;
    g.width(h.containerWidth).height(h.containerHeight);
    c.children(": first-child").width(h.containerHeight);
    d.setSlidePositions();
}
, autoScaleImages: function() {
    c.children("div").each(function() {
    var n=b(this), m=n.find("img");
    if(m.length) {
    m.each(function(o, p) {
    b(p).width(n.width()+1);
    b(p).height(n.height());
}
);
}});
}, bindEvents: function() {
    var m=0;
    if(h.activateOn==="click") {
    j.on("click.liteAccordion", d.triggerSlide);
}
else {
    if(h.activateOn==="mouseover") {
    j.on("click.liteAccordion mouseover.liteAccordion", d.triggerSlide);
}
}if(h.pauseOnHover&&h.autoPlay) {
    g.on("mouseover.liteAccordion", function() {
    d.playing&&e.stop();
}
).on("mouseout.liteAccordion", function() {
    !d.playing&&e.play(d.currentSlide);
}
);
}if(h.responsive) {
    b(window).on("load.liteAccordion", function() {
    if(h.autoScaleImages) {
    d.autoScaleImages();
}
}).on("resize.liteAccordion orientationchange.liteAccordion", function() {
    clearTimeout(m);
    m=setTimeout(function() {
    d.responsive();
    if(h.autoScaleImages) {
    d.autoScaleImages();
}
}, 100);
});
}}, linkable: function() {
    var m=(function() {
    var o=[];
    c.each(function() {
    if(b(this).attr("data-slide-name")) {
    o.push((b(this).attr("data-slide-name")).toLowerCase());
}
});
    return m=o;
}
)();
    var n=function(p) {
    var o;
    if(p.type==="load"&&!window.location.hash) {
    return;
}
if(p.type==="hashchange"&&d.playing) {
    return;
}
o=b.inArray((window.location.hash.slice(1)).toLowerCase(), m);
    if(o>-1&&o<m.length) {
    j.eq(o).trigger("click.liteAccordion");
}
};
    b(window).on("hashchange.liteAccordion load.liteAccordion", n);
}
, currentSlide: h.firstSlide-1, nextSlide:function(m) {
    var n=m+1||d.currentSlide+1;
    return function() {
    return n++%k;
}
}, playing: 0, slideAnimCompleteFlag:false, triggerSlide:function(o) {
    var n=b(this), m= {
    elem: n, index:j.index(n), next:n.next(), prev:n.parent().prev().children("h2");
}
;
    d.currentSlide=m.index;
    d.slideAnimCompleteFlag=false;
    if(h.linkable&&!d.playing) {
    window.location.hash=n.parent().attr("data-slide-name");
}
h.onTriggerSlide.call(m.next);
    if(n.hasClass("selected")&&n.position().left<f/2) {
    d.animSlide.call(m);
}
else {
    d.animSlideGroup(m);
}
if(o.originalEvent&&h.autoPlay) {
    e.stop();
    e.play(j.index(j.filter(".selected")));
}
}, animSlide: function(m) {
    var n=this;
    if(typeof this.pos==="undefined") {
    this.pos=f;
}
j.removeClass("selected").filter(this.elem).addClass("selected");
    if(!!this.index) {
    this.elem.add(this.next).stop(true).animate( {
    left: this.pos+this.index*h.headerWidth;
}
, h.slideSpeed, h.easing, function() {
    if(!d.slideAnimCompleteFlag) {
    h.onSlideAnimComplete.call(m?m.next: n.prev.next());
    d.slideAnimCompleteFlag=true;
}
});
    j.removeClass("selected").filter(this.prev).addClass("selected");
}
}, animSlideGroup: function(m) {
    var n=["left", "right"];
    b.each(n, function(o, p) {
    var r, q;
    if(p==="left") {
    r=": lt("+(m.index+1)+")";
    q=0;
}
else {
    r=": gt("+m.index+")";
    q=f;
}
c.filter(r).children("h2").each(function() {
    var t=b(this), s= {
    elem: t, index:j.index(t), next:t.next(), prev:t.parent().prev().children("h2"), pos:q;
}
;
    d.animSlide.call(s, m);
}
);
});
    j.removeClass("selected").filter(m.elem).addClass("selected");
}
, ieClass: function(m) {
    if(m<7) {
    e.destroy();
}
if(m===7||m===8) {
    c.each(function(n) {
    b(this).addClass("slide-"+n);
}
);
}g.addClass("ie ie"+m);
}, init: function() {
    var n=navigator.userAgent, m=n.indexOf("MSIE");
    if(m!==-1) {
    n=n.slice(m+5, m+6);
    d.ieClass(+n);
}
d.setStyles();
    d.bindEvents();
    if(h.cycleSpeed<h.slideSpeed) {
    h.cycleSpeed=h.slideSpeed;
}
if(h.linkable&&"onhashchange" in window) {
    d.linkable();
}
h.autoPlay&&e.play();
}};
    d.init();
    return e;
}
;
    b.fn.liteAccordion=function(e) {
    var d=this, c=d.data("liteAccordion");
    if(typeof e==="object"||!e) {
    return d.each(function() {
    var f;
    if(c) {
    return;
}
f=new a(d, e);
    d.data("liteAccordion", f);
}
);
}else {
    if(typeof e==="string"&&c[e]) {
    if(e==="debug") {
    return c[e].call(d);
}
else {
    c[e].call(d);
    return d;
}
}}}})(jQuery);
    */