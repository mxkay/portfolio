(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{137:function(e,t,a){e.exports=a(461)},141:function(e,t,a){},142:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},166:function(e,t,a){},459:function(e,t,a){},460:function(e,t,a){},461:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(19),o=a.n(c),l=(a(141),a(74)),i=a(33),u=(a(142),a(143),Object(n.createContext)());a(144);function s(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var m=function(e){var t=function(){var e=Object(n.useState)(s()),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){r(s())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}(),a=t.height,c=t.width,o=Object(n.useRef)(null),l=function(e,t,a,n){var r=(new Date).getTime();e.clearRect(0,0,t,t),e.strokeStyle="#CCC",e.lineWidth=4,e.lineJoin="round";for(var c=function(c){e.moveTo(t,t),e.beginPath();var o=c+1-r%2e4/2e4;Array.from(Array(Math.floor(c>0?100*o+2:101)).keys()).forEach((function(r){var c=2*r*.0314159265/(o||1),l=o*Math.cos(c),i=o*Math.sin(c);e.lineTo(n/2+t/10*function(e,t){return e+.125*(Math.cos(4*e)+Math.sin(4*t)-1)}(l,i),a/2+t/10*function(e,t){return t+.125*(Math.cos(4*e)+Math.sin(4*t)-1)}(l,i))})),e.stroke()},o=0;o<=8;o++)c(o)};return Object(n.useEffect)((function(){var e=o.current,t=e.getContext("2d"),n=a>c?a:c;e.width=n,e.height=n,e.style.width=n+"px",e.style.height=n+"px";var r=setInterval((function(){l(t,n,a,c)}),20);return function(){return clearInterval(r)}}),[]),r.a.createElement("div",{className:"background-wrapper"},r.a.createElement("div",{className:"background"},r.a.createElement("canvas",Object.assign({ref:o},e))),r.a.createElement("div",{className:"content"},e.children))},d=(a(145),a(146),function(){return r.a.createElement("div",{className:"profile-photo-wrapper"},r.a.createElement("div",{className:"profile-photo-frame"},r.a.createElement("div",{className:"profile-photo"})))}),p=(a(147),function(){return r.a.createElement("div",{className:"ribbon-wrapper"},r.a.createElement("div",{className:"ribbon"},r.a.createElement("div",{className:"ribbon-name-wrapper"},r.a.createElement("p",{className:"ribbon-name"},"Kay Vail"),r.a.createElement("p",{className:"ribbon-pronouns"},"she/they")),r.a.createElement("p",{className:"ribbon-title"},"Full Stack Software Developer")))}),v=function(){return r.a.createElement("div",{className:"header"},r.a.createElement(d,null),r.a.createElement(p,null))},f=a(127),b=(a(166),function(e){return r.a.createElement("div",{className:"body"},e.nav?e.nav:r.a.createElement(r.a.Fragment,null),r.a.createElement(f.Scrollbars,null,e.children))}),g=a(463),h=a(132),E=(a(167),{buttonGroup:{width:"100%"},button:{backgroundColor:"#777",borderWidth:0},buttonSelected:{backgroundColor:"#CCC",color:"black",borderWidth:0}}),j=function(){var e=Object(n.useContext)(u),t=e.navigation,a=e.setCurrentPage,c=function(e){a(e.target.value),e.preventDefault()};return r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement(g.a,{name:"nav","aria-label":"Navigation",defaultValue:"projects",style:E.buttonGroup},r.a.createElement(h.a,{name:"nav",variant:"secondary",style:"projects"===t.page?E.buttonSelected:E.button,value:"projects",onChange:c},"Projects"),r.a.createElement(h.a,{name:"nav",variant:"secondary",style:"about"===t.page?E.buttonSelected:E.button,value:"about",onChange:c},"About"),r.a.createElement(h.a,{name:"nav",variant:"secondary",style:"contact"===t.page?E.buttonSelected:E.button,value:"contact",onChange:c},"Contact")))},w=a(133),N=a.n(w),y=(a(459),a(462)),C=a(135),O=(a(460),function(e){var t=e.project;return r.a.createElement(y.a,{className:"project-card"},r.a.createElement("div",{className:"project-card-image-clipzone"},r.a.createElement(y.a.Img,{variant:"top",src:t.image,className:"project-card-image"})),r.a.createElement(y.a.Body,null,r.a.createElement(y.a.Title,null,t.title),r.a.createElement(y.a.Text,null,t.description),t.url?r.a.createElement(C.a,{variant:"primary",href:t.url},"live demo"):r.a.createElement(r.a.Fragment,null)))}),k=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){N()("https://spreadsheets.google.com/feeds/list/12WudbKp3rSdJJpJx7ANPEcC8J7unsYWwWaHBpXjtfPo/od6/public/values?alt=json").then((function(e){c(e.data.feed.entry.map((function(e){return{title:e.gsx$title.$t,image:e.gsx$image.$t,description:e.gsx$description.$t,url:e.gsx$url.$t}})))})).catch((function(e){return console.log("error loading ajax")}))}),[]),r.a.createElement("div",{className:"projects-container"},a[0]?a.map((function(e){return r.a.createElement(O,{project:e})})):r.a.createElement(r.a.Fragment,null))};var x=function(){var e=Object(n.useState)({page:"projects"}),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(u.Provider,{value:{navigation:a,setCurrentPage:function(e){c(Object(l.a)(Object(l.a)({},a),{},{page:e}))}}},r.a.createElement(m,null,r.a.createElement(v,null),r.a.createElement(b,{nav:r.a.createElement(j,null)},"projects"===a.page?r.a.createElement(k,null):("about"===a.page||a.page,r.a.createElement(r.a.Fragment,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[137,1,2]]]);
//# sourceMappingURL=main.fa1339f9.chunk.js.map