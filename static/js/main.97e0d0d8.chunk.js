(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{137:function(e,t,a){e.exports=a(462)},141:function(e,t,a){},142:function(e,t,a){},144:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},441:function(e,t,a){},458:function(e,t,a){},459:function(e,t,a){},460:function(e,t,a){},461:function(e,t,a){},462:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),l=(a(141),a(75)),i=a(21);a(142),a(143);function u(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function s(){var e=Object(n.useState)(u()),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){r(u())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}var m=Object(n.createContext)(),d=(a(144),function(e){var t=s(),a=t.height,c=t.width,o=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=o.current,t=e.getContext("2d"),n=a>c?a:c;e.width=n,e.height=n,e.style.width=n+"px",e.style.height=n+"px";var r=setInterval((function(){!function(e,t,a,n){e.clearRect(0,0,t,t);for(var r=function(e,t){return e+.1*(Math.cos(5*e)+Math.sin(5*t))},c=function(e,t){return t+.1*(Math.cos(5*e)+Math.sin(5*t))},o=(new Date).getTime()%2e4/2e4,l=0;l<8;l++)for(var i=0;i<9;i++){var u=l+1-o;u=u>0?u:0;var s=2*i*Math.PI/9,m=u*Math.cos(s),d=u*Math.sin(s);e.moveTo(n/2+t/10*r(m,d),a/2+t/10*c(m,d)),e.fillStyle="rgba(\n                    ".concat(190,",\n                    ",220*(.5+Math.sin(3*s+Math.PI*u)/2),",\n                    ",190,",\n                    ").concat(.25*(u-.5)/8,")"),e.beginPath();var f=(u=--u>0?u:0)*Math.cos(s),p=u*Math.sin(s);e.lineTo(n/2+t/10*r(f,p),a/2+t/10*c(f,p)),u=l+1-o,s=2*(i-1)*Math.PI/9,f=u*Math.cos(s),p=u*Math.sin(s),e.lineTo(n/2+t/10*r(f,p),a/2+t/10*c(f,p)),e.lineTo(n/2+t/10*r(m,d),a/2+t/10*c(m,d)),e.fill()}}(t,n,a,c)}),50);return function(){return clearInterval(r)}}),[]),r.a.createElement("div",{className:"background-wrapper"},r.a.createElement("div",{className:"background"},r.a.createElement("canvas",Object.assign({ref:o},e))),r.a.createElement("div",{className:"content"},e.children))}),f=a(128),p=a.n(f),v=(a(163),function(e){var t=e.onScrollFrame,a=e.children;return r.a.createElement(p.a,{onScrollFrame:t},r.a.createElement("div",{className:"layout"},a))}),h=(a(164),a(464)),g=a(133),E=(a(165),a(441),{buttonGroup:{width:"100%"},button:{backgroundColor:"#777"},buttonSelected:{backgroundColor:"#CCC",color:"black"}}),b=function(){var e=Object(n.useContext)(m),t=e.navigation,a=e.setCurrentPage,c=function(e){a(e.target.value),e.preventDefault()};return r.a.createElement("div",{className:"nav"},r.a.createElement(h.a,{name:"nav","aria-label":"Navigation",defaultValue:"projects",style:E.buttonGroup},r.a.createElement(g.a,{name:"nav",variant:"nav",style:"projects"===t.page?E.buttonSelected:E.button,value:"projects",onChange:c},"Projects"),r.a.createElement(g.a,{name:"nav",variant:"nav",style:"about"===t.page?E.buttonSelected:E.button,value:"about",onChange:c},"About"),r.a.createElement(g.a,{name:"nav",variant:"nav",style:"contact"===t.page?E.buttonSelected:E.button,value:"contact",onChange:c},"Contact")))},j=function(e){var t=e.isSticky,a=e.forwardedRef;return r.a.createElement("div",{className:"header-wrapper ".concat(t?"sticky":""),ref:a},r.a.createElement("div",{className:"header ".concat(t?"sticky":"")},r.a.createElement(b,null)))},w=a(50),N=a.n(w),y=(a(458),function(){var e=s(),t=(e.height,e.width,Object(n.useState)({name:"",pronouns:"",title:"",photo:""})),a=Object(i.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){N()("https://spreadsheets.google.com/feeds/list/12WudbKp3rSdJJpJx7ANPEcC8J7unsYWwWaHBpXjtfPo/2/public/full?alt=json").then((function(e){console.log("response.data",e.data),o({name:e.data.feed.entry[0].gsx$name.$t,pronouns:e.data.feed.entry[0].gsx$pronouns.$t,title:e.data.feed.entry[0].gsx$title.$t,photo:e.data.feed.entry[0].gsx$photo.$t})})).catch((function(e){return console.log("error loading ajax")}))}),[]),r.a.createElement("div",{className:"profile-wrapper"},r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"profile-photo-wrapper"},r.a.createElement("img",{className:"profile-photo",src:c.photo})),r.a.createElement("div",{className:"profile-name"},c.name),r.a.createElement("div",{className:"profile-pronouns"},c.pronouns),r.a.createElement("div",{className:"profile-title"},c.title)))}),O=(a(459),function(e){var t=e.children;return r.a.createElement("div",{className:"body"},t)}),x=(a(460),a(463)),S=a(135),C=(a(461),function(e){var t=e.project;return r.a.createElement(x.a,{className:"project-card"},r.a.createElement("div",{className:"project-card-image-clipzone"},r.a.createElement(x.a.Img,{variant:"top",src:t.image,className:"project-card-image"})),r.a.createElement(x.a.Body,null,r.a.createElement(x.a.Title,null,t.title),r.a.createElement(x.a.Text,null,t.description),t.url?r.a.createElement(S.a,{variant:"primary",href:t.url},"live demo"):r.a.createElement(r.a.Fragment,null)))}),$=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){N()("https://spreadsheets.google.com/feeds/list/12WudbKp3rSdJJpJx7ANPEcC8J7unsYWwWaHBpXjtfPo/1/public/full?alt=json").then((function(e){c(e.data.feed.entry.map((function(e){return{title:e.gsx$title.$t,image:e.gsx$image.$t,description:e.gsx$description.$t,url:e.gsx$url.$t}})))})).catch((function(e){return console.log("error loading ajax")}))}),[]),r.a.createElement("div",{className:"projects-container"},a[0]?a.map((function(e){return r.a.createElement(C,{project:e})})):r.a.createElement(r.a.Fragment,null))};var M=function(){var e=s(),t=(e.height,e.width,Object(n.useState)({page:"projects"})),a=Object(i.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)(!1),f=Object(i.a)(u,2),p=f[0],h=f[1],g=Object(n.useRef)(null);return r.a.createElement("div",{className:"App"},r.a.createElement(m.Provider,{value:{navigation:c,setCurrentPage:function(e){o(Object(l.a)(Object(l.a)({},c),{},{page:e}))}}},r.a.createElement(d,null,r.a.createElement(v,{onScrollFrame:function(){g&&h(g.current.getBoundingClientRect().top<=0)}},r.a.createElement(y,null),r.a.createElement(j,{isSticky:p,forwardedRef:g}),r.a.createElement(O,null,"projects"===c.page?r.a.createElement($,null):("about"===c.page||c.page,r.a.createElement(r.a.Fragment,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[137,1,2]]]);
//# sourceMappingURL=main.97e0d0d8.chunk.js.map