!function(e){function t(t){for(var s,r,a=t[0],c=t[1],l=t[2],d=0,h=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&h.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);for(u&&u(t);h.length;)h.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(s=!1)}s&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},i={0:0},o=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;o.push([3,1]),n()}([,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(2);var s=n(0),i=n.n(s);function o(){var e=o.prototype;e.levelDisplayed=-1,e.numbers=[],e.results=[],e.answersIdxs=[],e.setLevel=function(e){this.level=e,this.saveSettings({level:e}),this.init()},e.setExerciseNum=function(e){this.exerciseNum=e,this.saveSettings({exerciseNum:e}),this.init()},e.init=function(){-1===this.levelDisplayed&&this.loadSettings(),this.numbers=this.numbersCreator(),this.results=[],this.answersIdxs=[],D.layout.exercises(this),D.handlers.exercises(this)},e.numbersCreator=function(e,t){e=e||this.exerciseNum,void 0===t&&(t=this.level);var n,s=[],i=[];for(n=0;n<e;n+=1)for(;;)if(o({nums:s=this.getNumbers(t),array:i})){i.push(s);break}function o(e){var t,n=e.nums,s=e.array,i=s.length;for(t=0;t<i;t+=1)if(JSON.stringify(n)===JSON.stringify(s[t]))return!1;return!0}return i},e.loadSettings=function(){try{if("undefined"!=typeof Storage){var e="maths."+this.name+".";this.level=parseInt(localStorage.getItem(e+"level"),10)||0,this.exerciseNum=parseInt(localStorage.getItem(e+"exerciseNum"),10)||6}}catch(e){alert("can't access the local storage\nall settings will be restored to its default values")}},e.saveSettings=function(e){try{if("undefined"!=typeof Storage){var t,n="maths."+this.name+".";for(t in e)e.hasOwnProperty(t)&&localStorage.setItem(n+t,e[t])}}catch(e){}}}function r(e){function t(){}return t.prototype=e,new t}o();var a,c,l,u,d,h,f=((a=r(o.prototype)).container=i()("#addition-exercises"),a.name="addition",a.sign="+",a.getNumbers=function(e){var t=D.range,n=[];switch(e){case 0:n=[t(2,9),t(2,9)];break;case 1:n=Math.random()<.5?Math.random()<.5?[t(10,19),t(2,9)]:[t(2,9),t(10,19)]:[t(2,9),t(2,9),t(2,9)];break;case 2:n=Math.random()<.5?[t(10,99),t(10,19),t(2,9)]:[t(10,19),t(2,9),t(10,99)]}return n.push(n.reduce(this.reducer)),n},a.reducer=function(e,t){return e+t},a),p=((c=r(o.prototype)).container=i()("#subtraction-exercises"),c.name="subtraction",c.sign="-",c.getNumbers=function(e){var t=D.range,n=[];switch(e){case 0:n=[t(3,9),t(2,8)];break;case 1:n=Math.random()<.5?[t(10,19),t(2,9)]:[t(10,19),t(2,9),t(2,5)];break;case 2:n=Math.random()<.5?[t(10,99),t(10,19),t(2,9)]:[t(10,99),t(10,97)]}var s=n.reduce(this.reducer);return s>0?n.push(s):n=this.getNumbers(e),n},c.reducer=function(e,t){return e-t},c),v=((l=r(o.prototype)).container=i()("#multiplication-exercises"),l.name="multiplication",l.sign="×",l.getNumbers=function(e){var t=D.range,n=[];switch(e){case 0:n=Math.random()<.5?[t(2,5),t(2,6)]:[t(2,6),t(2,5)];break;case 1:n=[t(2,9),t(2,9)];break;case 2:n=Math.random()<.5?[t(2,5),t(10,19)]:Math.random()<.5?[t(2,9),t(2,5),t(2,9)]:[t(2,9),t(2,9),t(2,5)]}return n.push(n.reduce(this.reducer)),n},l.reducer=function(e,t){return e*t},l),m=((u=r(o.prototype)).container=i()("#division-exercises"),u.name="division",u.sign="÷",u.getNumbers=function(e){var t=D.range,n=[];switch(e){case 0:n=[t(4,20),t(2,9)];break;case 1:n=[t(12,100),t(3,9)];break;case 2:n=Math.random()<.5?[t(20,200),t(10,19)]:[t(20,200),t(2,9),t(2,5)]}var s=n.reduce(this.reducer);return s%1==0&&s>1&&(1!==e||1===e&&s<10)?n.push(s):n=this.getNumbers(e),n},u.reducer=function(e,t){return e/t},u),g=((d=r(o.prototype)).container=i()("#fractions-exercises"),d.name="fractions",d.sign="+",d.getNumbers=function(e){var t,n,s=D.range,i=function(e,t){return[s(1,t),e]},o=[];switch(e){case 0:o=[i(t=s(2,6),t-1),i(t,t-1)];break;case 1:o=(t=s(2,4))===(n=s(2,5))?[i(t,t+1),i(n,n-1)]:[i(t,Math.floor(t/2)),i(n,Math.floor(n/2))];break;case 2:t=s(2,10),n=s(2,4),o=[i(t,2*t-1),i(n,2*n-1)]}return 0===e?o.push(o.reduce(this.simpleReducer)):o.push(o.reduce(this.reducer)),o},d.reducer=function(e,t){for(var n=e[0]*t[1]+t[0]*e[1],s=e[1]*t[1],i=n,o=s;o;){var r=o;o=i%o,i=r}return[n/i,s/i]},d.simpleReducer=function(e,t){return[e[0]+t[0],e[1]]},d),b=((h=r(o.prototype)).container=i()("#test"),h.name="test",h.modules=[],h.times=[],h.exerciseNum=0,h.unlocked=0,h.init=function(){var e=i()(".test-level-choice");this.modules=D.settings.test.modules.split(","),this.times=D.settings.test.times.split(","),this.exerciseNum=parseInt(D.settings.test.exerciseNum),this.unlocked=parseInt(D.settings.test.unlocked),e.each((function(e){e<=D.test.unlocked?i()(this).prop("disabled",!1):i()(this).prop("disabled",!0)})),-1===this.levelDisplayed&&(e.on("click",(function(t){D.test.level=e.index(this),h.createTest()})),this.levelDisplayed=this.level)},h.createTest=function(){var e,t=this.modules.length,n={info:this.info()},s="";this.results=[],this.answersIdxs=[];for(var o=0;o<t;o+=1)(e=D[this.modules[o].name])&&(this.numbers=e.numbersCreator(this.exerciseNum,this.level),this.sign=e.sign,s=D.layout.main(this),s+=o===t-1?D.layout.testNavigation(!1,!0):D.layout.testNavigation(!1,!1),n[e.name]=s);n.summary=this.summary,D.accordion.init(i()("#test .content"),this.name,n),D.handlers.test(this)},h.info=function(){var e='<div class="test-interface">\';\n                    <h3 class="center">Level: '.concat(D.difficulties[this.level],'</h3>\n                    <h3 class="center">Number of questions: ').concat(this.modules.length*this.exerciseNum,'</h3>\n                    <h3 class="center">Questions per module: ').concat(this.exerciseNum,'</h3>\n                    <h3 class="center">Modules: ');return this.modules.forEach((function(t){e+=t.name+", "})),e=e.replace(/,\s$/,"")+"</h3>",e+='<h3 class="center">Time to complete: '.concat(this.times[this.level],' minutes</h3>\n               <h2 class="center">GOOD LUCK!</h2>\n               ').concat(D.layout.testNavigation(!0,!1),"\n              </div>")},h.summary='<div id="test-summary" class="test-interface"><div class="test-navigation"><button id="test-close">Close</button></div></div>',h.displayResults=function(e,t){var n,s,o,r,a,c=this,l=this.modules,u=this.exerciseNum,d=[],h=[],f=0,p=0,v=0,m="",g="";!function(){for(e.forEach((function(e,t){a=(t+1)/u,f+=e,Number.isInteger(a)&&(h[a-1]=Math.round(f/u*100),d[a-1]=f,p+=f,f=0)})),(v=Math.round(p/(u*l.length)*100))>59&&c.unlocked<2&&c.unlocked===c.level&&(v>74?(m="Congratulations, You have unlocked next level!",c.unlocked=c.level+1,i()(".test-level-choice").eq(c.unlocked).prop("disabled",!1),D.settings.accessStorage({unlocked:c.level+1},"maths.settings.test.",!0)):m="To unlock next level you need to score at least 75%.. Try again"),s=t%60,n=Math.floor(t/60),o=n<1?"":1===n?n+" minute":n+" minutes",r=1===s?s+" second":s+" seconds",g+=v>59?'<h2 class="center">Congratulations You Passed!</h2>':'<h2 class="center">You need to practice a bit more!</h2>',g+='<h3 class="center">Your score: '.concat(v,'%</h3>\n                   <h3 class="center">Your time: ').concat(o," ").concat(r,"</h3>"),a=0;a<l.length;a+=1)g+='<h3 class="center">'.concat(l[a]," score: ").concat(d[a],"/").concat(u," (").concat(h[a],"%)</h3>");g+='<h3 class="center">Total points: '.concat(p,"/").concat(u*l.length,'</h3>\n                   <h3 class="center">').concat(m,"</h3>"),i()("#test-summary").prepend(g).css("height","73vh"),D.playSound(v>59)}(),D.accordion.unfold(),D.accordion.scrollTo(this.modules.length+1)},h),y={container:i()(".accordion"),content:i()('<div class="test-accordeon-content"></div>'),dimmer:i()("#dim"),closeBtn:null,headers:[],contents:[],first:function(){return this.headers[0]},last:function(){return this.headers[this.headers.length-1]},init:function(e,t,n){for(var s in this.container.append(this.createTitleBar(t)),n)n.hasOwnProperty(s)&&this.content.append(this.createSection(s,n[s]));e.append(this.container),this.container.append(this.content).show(),this.dimmer.addClass("active"),this.headers[0].addClass("selected"),i()(".test-accordeon-section-content").eq(0).show(),i()(".test-accordeon-section-header").css("border-top","none")},createTitleBar:function(e){var t=this,n=i()('<div class="test-accordeon-titlebar"></div>'),s=i()('<div class="test-accordeon-titlebar-foo"></div>'),o=i()('<h4 class="test-accordeon-titlebar-title">'+e+"</h4>");return this.closeBtn=i()('<button class="test-accordeon-titlebar-close">&times;</button>'),this.closeBtn.on("click",(function(){return t.dispose()})),n.append(o,s,this.closeBtn)},createSection:function(e,t){var n=i()('<div class="test-accordeon-section"></div>'),s=i()('<button class="test-accordeon-section-header">'+e+"</button>"),o=i()('<div class="test-accordeon-section-content">'+t+"</div>");return o.hide(),this.headers.push(s),this.contents.push(o),n.append(s,o)},dispose:function(){this.container.empty().hide(),this.content.empty(),this.dimmer.removeClass("active"),this.headers=[]},attachListeners:function(){i()(".test-accordeon-section-header").on("click",(function(){i()(this).is(D.accordion.last())||D.accordion.show(this)}))},show:function(e,t){var n=i()(e),s=n.next();s.is(":hidden")&&(this.headers.forEach((function(e){return e.removeClass("selected")})),i()(".test-accordeon-section-content:visible").slideUp(),s.slideDown(),n.addClass("selected"),t>this.headers.length/2?this.content.scrollTop(99):this.content.scrollTop(0))},unfold:function(){this.contents.forEach((function(e){e.show()}))},scrollTo:function(e){if(!e)throw new Error("couldn't find the header");this.headers.forEach((function(e){return e.removeClass("selected")})),this.headers[e].addClass("selected"),this.headers[e][0].scrollIntoView()}},w={container:i()('<div class="timer"></div>'),minutes:"00",seconds:"00",secondsElapsed:0,init:function(e,t,n){e.append(this.container),null!==this.setTimer&&this.stop(),this.start(t,n)},state:function(){return"<b>"+this.minutes+":"+this.seconds+"</b>"},show:function(){this.container.html(this.state())},setTimer:null,start:function(e,t){var n=60*e,s=n%60;e=Math.floor(n/60),this.minutes=e<10?"0"+e:""+e,this.seconds=s<10?"0"+s:""+s,this.show();var i=this,o=Date.now();this.setTimer=setInterval((function(){var r=Math.floor((Date.now()-o)/1e3)-1;if(i.secondsElapsed=r,r>=n+1)return clearInterval(this.setTimer),void t(i.secondsElapsed);var a=(r+60)%60,c=s<a?60-(a-s):s-a,l=Math.floor(r/60),u=a<s+1?e-l:e-l-1;i.minutes=u<10?"0"+u:""+u,i.seconds=c<10?"0"+c:""+c,i.show()}),1e3)},stop:function(){return clearInterval(this.setTimer),this.secondsElapsed}},x={exercises:function(e){var t=e.exerciseNum,n="";n+='<div class="interface">',n+='<div class="interface-item">\n                    <label for="level">Difficulty:</label>\n                    <select class="level">',D.difficulties.forEach((function(t,s){n+=e.level===s?'<option selected="selected">'+t+"</option>":"<option>"+t+"</option>"})),n+="</select></div>",n+='<div class="interface-item">\n                    <label for="exerciseNum">How many exercises?</label>\n                    <select class="exerciseNum">',D.numOfExercises.forEach((function(t,s){n+=e.exerciseNum===parseInt(t,10)?'<option selected="selected">'+t+"</option>":"<option>"+t+"</option>"})),n+="</select></div>",n+='<div class="interface-item-score">',n+="<div>Your Score:</div>",n+='<div><div class="score">0</div>',n+="<div>/</div>",n+="<div>"+t+"</div>",n+="</div></div>",n+="</div>",n+=this.main(e,t),n+='<div class="interface">',n+='<input type="reset" class="reset">',n+='<input type="submit" value="Reload" class="reload">',n+='<input type="submit" value="Check All" class="check-all">',n+="</div>",e.levelDisplayed=e.level,e.container.html(n)},main:function(e){for(var t,n,s,i,o,r,a,c="test"===e.name,l="true"===D.settings.general.isRandomized,u=e.sign,d=e.numbers,h=d.length,f=e.results,p='<div class="columns">',v=0;v<h;v+=1){i=(s=d[v]).length,l?(r=1/i,o=Math.random(),a=Math.floor(o/r)):a=i-1,p+='<div class="columns-line">';for(var m=0;m<i&&(t=s[m].length>1,(n=m===a)&&e.answersIdxs.push(m),p+=t?this.fraction(s[m],n,f):this.integer(s[m],n,f),m!==i-1);m+=1)p+=m===i-2?"<div> = </div>":"<div>"+u+"</div>";p+='<img src="'+D.icons.questMark+'" class="icon">',p+=c?"":'<input type="submit" value="check" class="check">',p+="</div>"}return p+="</div>"},integer:function(e,t,n){var s="";return s+=t?'<div class="tooltip"><input type="text" maxlength="3" class="answer"><span class="tiptext"></span></div>':"<div>"+e+"</div>",t&&n.push(e),s},fraction:function(e,t,n){var s,i=e[0]/e[1],o=Math.floor(i),r="";return r+=t?'<span class="tooltip">':"",r+='<div class="fraction">',r+=o>=1?t?'<div class="whole"><input type="text" maxlength="1" class="answer"></div>':'<div class="whole">'+o+"</div>":"",Number.isInteger(i)?(r+="</div>",t&&(r+='<span class="tiptext"></span></span>',n.push(e)),r):(s=[e[0]-o*e[1],e[1]],r+='<div class="fraction-unit">',r+='<div class="numerator">',r+=t?'<input type="text" class="answer" size="1">':s[0],r+="</div>",r+='<div class="denominator">',r+=t?'<input type="text" class="answer" size="1">':s[1],r+="</div></div></div>",t&&(r+='<span class="tiptext"></span>',r+="</span>",n.push(e)),r)},testNavigation:function(e,t){var n='<div class="test-navigation">';return n+='<button class="'+(e?"button-start":"button-prev")+'">'+(e?"Start":"Prev")+"</button>",n+=e?"":'<button class="'+(t?"button-finish":"button-next")+'">'+(t?"Finish":"Next")+"</button></div>"}},k={exercises:function(e){var t,n,s,o,r,a=this,c=e.container.find(".level"),l=e.container.find(".exerciseNum"),u=e.container.find(".score"),d=0,h=e.container.find(".columns-line"),f=h.find(".tooltip"),p="true"===D.settings.general.showTooltips,v=h.find(".answer"),m=h.find(".icon"),g=h.find(".check"),b=e.container.find(".reset"),y=e.container.find(".reload"),w=e.container.find(".check-all"),x=null,k=function(a){return t=h.eq(a).find(".answer"),n=m.eq(a),s=g.eq(a),o=e.results[a],r=[],D.handlers.validateOperation(t,o,r)?(u.text(++d),t.each((function(e){var t=i()(this).parents().is(".fraction-unit")?"":"close";i()(this).hide().after('<span class="'+t+'">'+r[e]+"</span>")})),n.prop("src",D.icons.tick),s.addClass("invisible"),!0):(n.prop("src",D.icons.cross),t.addClass("warning"),!1)};i()(document).ready((function(){return a.adjustLinesPadding(h)})),c.on("change",(function(){var t=i()(this).find("option:selected").text();e.setLevel(D.difficulties.indexOf(t))})),l.on("change",(function(){var t=i()(this).find("option:selected").text();e.setExerciseNum(parseInt(t,10))})),f.on("mouseover mouseout",(function(t){if(p){var n=i()(this).find(".tiptext"),s=f.index(this);if("mouseover"===t.type){var o,r=i()(this).width()/2;x=setTimeout((function(){0===n.children().length&&(D.createAndAppendCanvas(n,e,s),o=n.width()/2,n.css("marginLeft",r-(o+11)+"px")),n.addClass("showtip")}),1200)}else null!==x&&clearTimeout(x),n.removeClass("showtip")}})),g.on("click",(function(e){e.preventDefault();var t=g.index(this),n=k(t);D.playSound(n),i()(this).blur()})),b.on("click",(function(){d=0,u.text(d),v.show().removeClass("warning").next().remove(),m.prop("src",D.icons.questMark),g.removeClass("invisible"),b.blur()})),y.on("click",(function(t){t.preventDefault(),e.init()})),w.on("click",(function(e){e.preventDefault(),g.each((function(e,t){i()(t).is(".invisible")||k(e)})),w.blur()})),this.textInputs(h,v,k)},test:function(e){var t=this,n=e.container.find(".columns-line"),s=e.container.find(".answer"),o=e.container.find(".button-prev"),r=e.container.find(".button-next"),a=e.container.find(".button-start"),c=e.container.find(".button-finish"),l=e.container.find(".test-accordeon-section-header"),u=D.accordion.closeBtn,d=i()("#test-close"),h=i()(a).add(r).add(c).add(u).add(d),f=function(){var t=[],s=e.container.find(".icon");e.results;return n.each((function(o,r){var a,c=i()(r).find(".answer"),l=e.results[o];D.handlers.validateOperation(c,l)?(t[a=o]=1,n.eq(a).find(".answer").addClass("correct"),s.eq(a).prop("src",D.icons.tick)):function(e){t[e]=0,n.eq(e).find(".answer").addClass("warning"),s.eq(e).prop("src",D.icons.cross)}(o)})),t};i()(document).ready((function(){return t.adjustLinesPadding(n)})),a.on("click",(function(){if("Start"===i()(this).text()){var e=D.test;D.timer.init(i()(".test-accordeon-titlebar-foo"),e.times[e.level],e.summary),D.accordion.attachListeners(),i()(this).text("Next")}D.accordion.show(l.eq(1),1)})),o.on("click",(function(){var e=o.index(this);D.accordion.show(l.eq(e),e)})),r.on("click",(function(){var e=r.index(this);D.accordion.show(l.eq(e+2),e+2)})),c.on("click",(function(){var e=f();s.prop("disabled","true"),i()(a).add(o).add(r).add(c).hide(),D.test.displayResults(e,D.timer.stop())})),d.on("click",(function(){return D.accordion.dispose()})),h.on("keydown",(function(e){9===e.which&&(e.shiftKey?i()(this).is(u)&&(h.filter(":visible").focus(),e.preventDefault()):i()(this).is(u)||(u.focus(),e.preventDefault()))})),this.textInputs(n,s)},validateOperation:function(e,t,n){var s,o=[];return n=n||[],e.each((function(e){if(""===(s=i()(this).val())){if(!(t.length&&0===e&&t[0]>t[1]))return!1;s="0"}n.push(parseInt(s,10))})),t.length&&(1===n.length&&(o=[n[0],1]),2===n.length&&(o=n),3===n.length&&(o=[n[0]*n[2]+n[1],n[2]],n[0]=0===n[0]?"":n[0])),0===o.length?n[0]===t:o[0]/o[1]==t[0]/t[1]},textInputs:function(e,t,n){t.on("paste",(function(){return!1})),t.on("blur",(function(){var e=i()(this);if(""===e.val()){var t=e.removeClass("warning").parents(".columns-line"),n=t.find(".answer");if(n.length>1&&""!==n.not(e).val())return;t.find(".icon").prop("src",D.icons.questMark)}})),t.on("keydown",(function(t){var s=i()(this),o=s.parents(".columns-line"),r=e.index(o),a=o.find(".answer").length>1,c=String.fromCharCode(t.which),l=s.val().length,u=3;if(a&&(u=2),""!==window.getSelection().toString()&&(i.a.isNumeric(c)||t.which>95&&t.which<106))return!0;if(8===t.which||9===t.which||46===t.which||37===t.which||39===t.which)return!0;if(t.which>95&&t.which<106&&l<u)return!0;if(13===t.which&&"function"==typeof n){var d=n(r);return D.playSound(d),!1}return!(!i.a.isNumeric(c)||l===u)&&void 0}))},adjustLinesPadding:function(e){var t,n=e[0].getBoundingClientRect().width,s=0,i=n;Array.prototype.forEach.call(e,(function(e){var t,n,o=e.children,r=0;Array.prototype.forEach.call(o,(function(e){t=window.getComputedStyle(e)||e.currentStyle,n=t.marginLeft,r+=parseInt(n.substring(0,n.indexOf("px")),10)+2,r+=e.getBoundingClientRect().width})),i=r<i?r:i,s=r>s?r:s})),t=(t=(n-(s+i)/2)/2)>n-s?(n-s)/2:t,Array.prototype.forEach.call(e,(function(e){e.style.paddingRight=t+"px"}))}},N=n(1),S=n.n(N),O={name:"settings",areLoaded:!1,fields:{volume:i()("#volume"),isRandomized:i()('#settings input[name="isRandomized"]'),showTooltips:i()('#settings input[name="showTooltips"]'),testModules:i()('#settings input[name="modules"]'),testTimes:i()('#settings select[name="times"'),testNumOfQuest:i()('#settings select[name="numOfQuest"'),clearButton:i()("#settings-clear"),applyButton:i()("#settings-apply"),settingsForm:i()("#settings-form")},system:{volume:.5},general:{showTooltips:"true",isRandomized:"false"},fractions:{},test:{exerciseNum:"4",modules:"addition,subtraction,multiplication,division,fractions",times:"10,8,6",unlocked:"0"},changed:{system:{},general:{},test:{}},init:function(){var e=this,t=D.settings,n={system:this.system,general:this.general,test:this.test},s=function(){i.a.isEmptyObject(t.changed.system)&&i.a.isEmptyObject(t.changed.general)&&i.a.isEmptyObject(t.changed.test)?t.fields.applyButton.prop("disabled",!0):t.fields.applyButton.prop("disabled",!1)};this.accessStorage(n,"maths.settings.",!1),this.areLoaded=!0,this.restoreSettings(),this.fields.volume.on("input change",(function(){return e.updateVolumeLabel(e.fields.volume.val())})),this.fields.volume.on("change",(function(){var e=i()(this).val()/100;t.system.volume==e?delete t.changed.system.volume:t.changed.system.volume=e,D.playSound(!0,e),s()})),this.fields.isRandomized.on("change",(function(){var e=i()(this).val();e===t.general.isRandomized?delete t.changed.general.isRandomized:t.changed.general.isRandomized=e,s()})),this.fields.showTooltips.on("change reset",(function(){var e=i()(this).val();e===t.general.showTooltips?delete t.changed.general.showTooltips:t.changed.general.showTooltips=e,s()})),this.fields.testModules.on("change",(function(){var e=[];t.fields.testModules.each((function(t,n){i()(n).is(":checked")&&e.push(i()(n).val())})),e.join(",")===t.test.modules?delete t.changed.test.modules:t.changed.test.modules=e.join(","),s()})),this.fields.testTimes.on("change",(function(){var e=[];t.fields.testTimes.each((function(t,n){e[t]=i()(n).val()})),e.join(",")===t.test.times?delete t.changed.test.times:t.changed.test.times=e.join(","),s()})),this.fields.testNumOfQuest.on("change",(function(){var n=e.fields.testNumOfQuest.val();n==t.test.exerciseNum?delete t.changed.test.exerciseNum:t.changed.test.exerciseNum=n,s()})),this.fields.clearButton.on("click",(function(){e.clearChanges(),e.restoreSettings(),e.fields.clearButton.blur(),s()})),this.fields.settingsForm.on("submit",(function(e){e.preventDefault(),t.confirmChanges()&&(t.applyChanges(),t.accessStorage(t.changed,"maths.settings.",!0),t.clearChanges(),s())})),this.fields.settingsForm.on("reset",(function(){setTimeout((function(){return e.fields.volume.trigger("input")}),100),i()("#settings-default").blur(),s()}))},accessStorage:function(e,t,n){try{if("undefined"!=typeof Storage)for(var s in e)if(e.hasOwnProperty(s))if("object"===S()(e[s]))this.accessStorage(e[s],t+s+".",n);else if(n)localStorage.setItem(t+s,e[s]),console.log("saving: "+t+s+": "+e[s]);else{var i=localStorage.getItem(t+s);console.log("loading: "+t+s+": "+i),null!==i&&(e[s]=i)}}catch(e){alert("can't access the local storage")}},applyChanges:function(){var e,t,n=this,s=this.changed,i=function(){for(var e in D)D.hasOwnProperty(e)&&Object.getPrototypeOf(D[e])===o.prototype&&(D[e].levelDisplayed=-1)};for(var r in s)if(s.hasOwnProperty(r)){for(var a in t=!0,e=s[r])e.hasOwnProperty(a)&&(this[r][a]=e[a],t=!1);t||("general"===r&&i(),"test"===r&&(D.settings.test.unlocked="0",n.accessStorage({unlocked:"0"},"maths.settings.test.",!0)))}},restoreSettings:function(){var e=this.test.modules.split(","),t=this.test.times.split(",");this.fields.volume.val(100*this.system.volume),this.updateVolumeLabel(100*this.system.volume),this.fields.isRandomized.filter('[value="'+this.general.isRandomized+'"]').prop("checked",!0),this.fields.showTooltips.filter('[value="'+this.general.showTooltips+'"]').prop("checked",!0),this.fields.testModules.each((function(t,n){var s=!1;e.forEach((function(e){i()(n).is('[value="'+e+'"]')&&(s=!0)})),i()(n).prop("checked",s)})),this.fields.testTimes.each((function(e,n){i()(n).val(t[e])})),this.fields.testNumOfQuest.val(this.test.exerciseNum)},clearChanges:function(){for(var e in this.changed)this.changed.hasOwnProperty(e)&&(this.changed[e]={})},confirmChanges:function(){var e=!0,t=!i.a.isEmptyObject(this.changed.general),n=!i.a.isEmptyObject(this.changed.test);return t&&n?e=confirm("changing these options will void any progress throughout all modules and test"):t?e=confirm("changing these options will void any progress throughout all modules (not test)"):n&&(e=confirm("changing these options will void any progress in the test module")),e},updateVolumeLabel:function(e){i()("#volume-label").html(e+"%"),e<1?i()("#speaker").prop("src",D.icons.volumeMuted):e<30?i()("#speaker").prop("src",D.icons.volumeLow):e<70?i()("#speaker").prop("src",D.icons.volumeMedium):i()("#speaker").prop("src",D.icons.volumeHigh)}},C=n.p+"public/pics/correct.png",M=n.p+"public/pics/wrong.png",T=n.p+"public/pics/question.png",I=n.p+"public/pics/speaker-muted.png",E=n.p+"public/pics/speaker-low-volume.png",j=n.p+"public/pics/speaker-medium-volume.png",P=n.p+"public/pics/speaker-high-volume.png",L=n.p+"public/sounds/cheering.mp3",q=n.p+"public/sounds/fart.mp3",D={icons:{tick:C,cross:M,questMark:T,volumeMuted:I,volumeLow:E,volumeMedium:j,volumeHigh:P},sounds:{cheer:new Audio(L),wrong:new Audio(q)},difficulties:["Fair","Advanced","Super Hard"],numOfExercises:["6","8","10","12","16","20","24"],active:i()("#home"),switch:function(e){var t=this[e.replace("#","")];this.active=i()(e),this.settings.areLoaded||this.settings.init(),o.prototype===Object.getPrototypeOf(t)&&t.level!==t.levelDisplayed&&t.init(),this.active.scrollTop(0)},range:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},playSound:function(e,t){var n=this.sounds.cheer,s=this.sounds.wrong;0!==t?(t=t||D.settings.system.volume,e?(n.currentTime=.5,n.volume=t,n.play()):(s.volume=t,s.play())):n.pause()},createAndAppendCanvas:function(e,t,n){var s,o,r=t.numbers[n],a=t.answersIdxs[n],c=t.sign,l=[],u=a!==r.length-1?function(){switch(c){case"+":c="-";break;case"×":c="÷"}for(s=r.length-1;s>=0;s--)s!==a&&l.push(r[s]);return l}():r.slice(0,r.length-1),d=function(e){var t,n,s,i=1;for(n=0;n<u.length;n+=1)if(2===u[n].length)for(t=u[n][0]/u[n][1],s=0;s<t;s+=1)i+=1;return i*e}(i()("body").width()/(i()("body").width()/80)),h=i()('<canvas class="canvas" width="'+d+'px" height="80px"></canvas>')[0],f=h.getContext("2d"),p=function(e){return Math.PI*e/180};for(2===u[0].length&&(o=function(e,t){var n,s,i=e<t?e:t,o=e>t?e:t;if(t===e)return e;if(o%i==0)return o;for(n=2;n<=o;n++)if((s=n*i)>o&&s%o==0)return s}(u[0][1],u[1][1])),e.width(d),f.fillStyle="red",f.lineWidth=.5,f.font="30px sans-serif",f.translate(40,40),s=0;s<u.length;s+=1)2===u[s].length?(u[s]=[u[s][0]*(o/u[s][1]),o],v(f,u[s])):u[s],s<u.length-1?(m(c),f.translate(57,0)):(m("="),f.translate(50,0),g(D.icons.questMark));function v(e,t){var n,s,i;if(t[0]>=t[1])for(n=Math.floor(t[0]/t[1]),s=t[0]%t[1],i=0;i<n;i+=1)o(e,t[1],t[1]),i<n-1&&e.translate(70,0),s&&i===n-1&&(e.translate(70,0),o(e,s,t[1]));else o(e,t[0],t[1]);function o(e,t,n){var s,i=360/n,o=-90,r=-90;for(s=1;s<=n;s+=1)r+=i,e.beginPath(),e.moveTo(0,0),e.arc(0,0,30,p(o),p(r),!1),s<=t&&e.fill(),e.closePath(),e.stroke(),o=r}}function m(e){f.fillStyle="black",f.translate(40,0),f.fillText(e,0,11),f.fillStyle="red"}function g(e){f.translate(-25,-15);var t=document.createElement("img");t.src=e,f.drawImage(t,0,0)}return e.append(h)},home:{},addition:f,subtraction:p,multiplication:v,division:m,fractions:g,test:b,accordion:y,timer:w,layout:x,handlers:k,settings:O};i()("document").ready((function(){i()("#main-menu a").each((function(e,t){var n=i()(t).prop("href");"#home"!==(n=n.substring(n.indexOf("#")))&&i()(n).hide()})),i()("#main-menu").on("click",(function(e){var t=i()(e.target),n=t.prop("href");void 0!==n&&(n=n.substring(n.indexOf("#")),i()(".selected").removeClass("selected"),t.addClass("selected"),D.active.fadeOut((function(){D.switch(n),D.active.fadeIn()}))),i()(".mobile-toggle-button").is(":visible")&&(i()(".sidenav").toggleClass("is-open"),i()("body").toggleClass("body-hidden-overflow")),e.preventDefault()})),i()(window).resize((function(){var e=i()(".columns:visible");e.length>0&&D.handlers.adjustLinesPadding(e.children())}))}))}]);