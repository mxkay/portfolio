(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{142:function(e,t,a){e.exports=a(469)},146:function(e,t,a){},147:function(e,t,a){},149:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},446:function(e,t,a){},463:function(e,t,a){},464:function(e,t,a){},465:function(e,t,a){},466:function(e,t,a){},467:function(e,t,a){},468:function(e,t,a){},469:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(21),o=a.n(c),l=(a(146),a(78)),i=a(23);a(147),a(148);function s(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function u(){var e=Object(n.useState)(s()),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){r(s())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}var m=Object(n.createContext)(),d=(a(149),function(e){var t=u(),a=t.height,c=t.width,o=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=o.current,t=e.getContext("2d"),n=a>c?a:c;e.width=n,e.height=n,e.style.width=n+"px",e.style.height=n+"px";var r=setInterval((function(){!function(e,t,a,n){e.clearRect(0,0,t,t);for(var r=function(e,t){return e+.1*(Math.cos(5*e)+Math.sin(5*t))},c=function(e,t){return t+.1*(Math.cos(5*e)+Math.sin(5*t))},o=(new Date).getTime()%2e4/2e4,l=0;l<8;l++)for(var i=0;i<9;i++){var s=l+1-o;s=s>0?s:0;var u=2*i*Math.PI/9,m=s*Math.cos(u),d=s*Math.sin(u);e.moveTo(n/2+t/10*r(m,d),a/2+t/10*c(m,d)),e.fillStyle="rgba(\n                    ".concat(190,",\n                    ",220*(.5+Math.sin(3*u+Math.PI*s)/2),",\n                    ",190,",\n                    ").concat(.25*(s-.5)/8,")"),e.beginPath();var f=(s=--s>0?s:0)*Math.cos(u),p=s*Math.sin(u);e.lineTo(n/2+t/10*r(f,p),a/2+t/10*c(f,p)),s=l+1-o,u=2*(i-1)*Math.PI/9,f=s*Math.cos(u),p=s*Math.sin(u),e.lineTo(n/2+t/10*r(f,p),a/2+t/10*c(f,p)),e.lineTo(n/2+t/10*r(m,d),a/2+t/10*c(m,d)),e.fill()}}(t,n,a,c)}),50);return function(){return clearInterval(r)}}),[]),r.a.createElement("div",{className:"background-wrapper"},r.a.createElement("div",{className:"background"},r.a.createElement("canvas",Object.assign({ref:o},e))),r.a.createElement("div",{className:"content"},e.children))}),f=a(131),p=a.n(f),E=(a(168),function(e){var t=e.onScrollFrame,a=e.children;return r.a.createElement(p.a,{onScrollFrame:t},r.a.createElement("div",{className:"layout"},a))}),v=(a(169),a(471)),g=a(136),h=(a(170),a(446),{buttonGroup:{width:"100%"},button:{backgroundColor:"#777"},buttonSelected:{backgroundColor:"#CCC",color:"black"}}),b=function(){var e=Object(n.useContext)(m),t=e.navigation,a=e.setCurrentPage,c=function(e){a(e.target.value),e.preventDefault()};return r.a.createElement("div",{className:"nav"},r.a.createElement(v.a,{name:"nav","aria-label":"Navigation",defaultValue:"projects",style:h.buttonGroup},r.a.createElement(g.a,{name:"nav",variant:"nav",style:"projects"===t.page?h.buttonSelected:h.button,value:"projects",onChange:c},"Projects"),r.a.createElement(g.a,{name:"nav",variant:"nav",style:"about"===t.page?h.buttonSelected:h.button,value:"about",onChange:c},"About"),r.a.createElement(g.a,{name:"nav",variant:"nav",style:"contact"===t.page?h.buttonSelected:h.button,value:"contact",onChange:c},"Contact")))},j=function(e){var t=e.isSticky,a=e.forwardedRef;return r.a.createElement("div",{className:"sticky-header-wrapper ".concat(t?"sticky":""),ref:a},r.a.createElement("div",{className:"sticky-header ".concat(t?"sticky":"")},r.a.createElement(b,null)))},N=a(52),y=a.n(N),w=(a(463),function(){var e=u(),t=(e.height,e.width,Object(n.useState)({name:"",pronouns:"",title:"",photo:""})),a=Object(i.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){y()("https://spreadsheets.google.com/feeds/list/12WudbKp3rSdJJpJx7ANPEcC8J7unsYWwWaHBpXjtfPo/2/public/full?alt=json").then((function(e){o({name:e.data.feed.entry[0].gsx$name.$t,pronouns:e.data.feed.entry[0].gsx$pronouns.$t,title:e.data.feed.entry[0].gsx$title.$t,photo:e.data.feed.entry[0].gsx$photo.$t})})).catch((function(e){return console.log("error loading ajax")}))}),[]),r.a.createElement("div",{className:"profile-wrapper"},r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"profile-photo-wrapper"},r.a.createElement("img",{className:"profile-photo",src:c.photo})),r.a.createElement("div",{className:"profile-name"},c.name),r.a.createElement("div",{className:"profile-pronouns"},c.pronouns),r.a.createElement("div",{className:"profile-title"},c.title)))}),x=(a(464),function(e){var t=e.children;return r.a.createElement("div",{className:"body"},t)}),$=(a(465),a(470)),O=a(140),S=(a(466),a(0)),C=function(e){var t=e.icon,a=e.color;return r.a.createElement("div",{className:"dev-tool-icon"},r.a.createElement(S.b.Provider,{value:{color:a,size:"1.8em",className:"global-class-name"}},t))},k=a(9),M=a(137),P=a(53),F=(a(467),function(e){var t=e.name;return r.a.createElement("div",{className:"dev-tool-wrapper"},"JavaScript"===t?r.a.createElement(C,{icon:r.a.createElement(k.e,null),color:"#F1E05A"}):"HTML5"===t?r.a.createElement(C,{icon:r.a.createElement(k.c,null),color:"#E44D26"}):"CSS3"===t?r.a.createElement(C,{icon:r.a.createElement(k.b,null),color:"#384DE4"}):"Ruby"===t?r.a.createElement(C,{icon:r.a.createElement(k.g,null),color:"#701516"}):"jQuery"===t?r.a.createElement(C,{icon:r.a.createElement(k.d,null),color:"#3372A2"}):"axios"===t?r.a.createElement(C,{icon:r.a.createElement(M.a,null),color:"#854195"}):"React"===t?r.a.createElement(C,{icon:r.a.createElement(k.f,null),color:"#60D8FF"}):"Bootstrap"===t?r.a.createElement(C,{icon:r.a.createElement(k.a,null),color:"#563D7C"}):r.a.createElement(C,{icon:r.a.createElement(P.a,null),color:"#000"}),r.a.createElement("div",{className:"dev-tool-name"},t))}),J=function(e){var t=e.toolNames;return r.a.createElement("div",{className:"dev-tool-list"},t&&t[0]?t.map((function(e,t){return r.a.createElement(F,{key:t,name:e})})):r.a.createElement(r.a.Fragment,null))},W=a(138),B=(a(468),function(e){var t=e.title,a=e.image,n=e.description,c=e.url,o=e.repository,l=e.languages,i=e.libraries;return r.a.createElement($.a,{className:"project-card"},r.a.createElement("div",{className:"project-card-image-clipzone"},r.a.createElement($.a.Img,{className:"project-card-image",variant:"top",src:a})),r.a.createElement($.a.Body,{className:"project-card-body"},r.a.createElement($.a.Title,{className:"project-card-title"},t),r.a.createElement($.a.Text,{className:"project-card-description"},n),r.a.createElement($.a.Body,{className:"project-card-button-container"},o?r.a.createElement(O.a,{variant:"secondary",href:o},r.a.createElement(W.a,null)," repo"):r.a.createElement(r.a.Fragment,null),c?r.a.createElement(O.a,{variant:"secondary",href:c},r.a.createElement(P.b,null)," demo"):r.a.createElement(r.a.Fragment,null)),r.a.createElement(J,{toolNames:l}),r.a.createElement(J,{toolNames:i})))}),R=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){y()("https://spreadsheets.google.com/feeds/list/12WudbKp3rSdJJpJx7ANPEcC8J7unsYWwWaHBpXjtfPo/1/public/full?alt=json").then((function(e){c(e.data.feed.entry.map((function(e){return{title:e.gsx$title.$t,image:e.gsx$image.$t,description:e.gsx$description.$t,url:e.gsx$url.$t,repository:e.gsx$repository.$t,languages:e.gsx$languages.$t.replace(/ /g,"").split(","),libraries:e.gsx$libraries.$t.replace(/ /g,"").split(",")}})))})).catch((function(e){return console.log("error loading ajax")}))}),[]),r.a.createElement("div",{className:"projects-container"},a[0]?a.map((function(e){return r.a.createElement(B,e)})):r.a.createElement(r.a.Fragment,null))};var T=function(){var e=u(),t=(e.height,e.width,Object(n.useState)({page:"projects"})),a=Object(i.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(!1),f=Object(i.a)(s,2),p=f[0],v=f[1],g=Object(n.useRef)(null);return r.a.createElement("div",{className:"App"},r.a.createElement(m.Provider,{value:{navigation:c,setCurrentPage:function(e){o(Object(l.a)(Object(l.a)({},c),{},{page:e}))}}},r.a.createElement(d,null,r.a.createElement(E,{onScrollFrame:function(){g&&v(g.current.getBoundingClientRect().top<=0)}},r.a.createElement(w,null),r.a.createElement(j,{isSticky:p,forwardedRef:g}),r.a.createElement(x,null,"projects"===c.page?r.a.createElement(R,null):("about"===c.page||c.page,r.a.createElement(r.a.Fragment,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[142,1,2]]]);
//# sourceMappingURL=main.f38a21a2.chunk.js.map