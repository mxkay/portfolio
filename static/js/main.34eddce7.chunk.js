(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{137:function(e,t,a){e.exports=a(461)},141:function(e,t,a){},142:function(e,t,a){},144:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},441:function(e,t,a){},458:function(e,t,a){},459:function(e,t,a){},460:function(e,t,a){},461:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(19),c=a.n(o),l=(a(141),a(75)),i=a(21);a(142),a(143);function s(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function u(){var e=Object(n.useState)(s()),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){r(s())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}var m=Object(n.createContext)(),d=(a(144),function(e){var t=u(),a=t.height,o=t.width,c=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=c.current,t=e.getContext("2d"),n=a>o?a:o;e.width=n,e.height=n,e.style.width=n+"px",e.style.height=n+"px";var r=setInterval((function(){!function(e,t,a,n){e.clearRect(0,0,t,t);for(var r=function(e,t){return e+.1*(Math.cos(5*e)+Math.sin(5*t))},o=function(e,t){return t+.1*(Math.cos(5*e)+Math.sin(5*t))},c=(new Date).getTime()%2e4/2e4,l=0;l<8;l++)for(var i=0;i<9;i++){var s=l+1-c;s=s>0?s:0;var u=2*i*Math.PI/9,m=s*Math.cos(u),d=s*Math.sin(u);e.moveTo(n/2+t/10*r(m,d),a/2+t/10*o(m,d)),e.fillStyle="rgba(\n                    ".concat(190,",\n                    ",220*(.5+Math.sin(3*u+Math.PI*s)/2),",\n                    ",190,",\n                    ").concat(.25*(s-.5)/8,")"),e.beginPath();var f=(s=--s>0?s:0)*Math.cos(u),p=s*Math.sin(u);e.lineTo(n/2+t/10*r(f,p),a/2+t/10*o(f,p)),s=l+1-c,u=2*(i-1)*Math.PI/9,f=s*Math.cos(u),p=s*Math.sin(u),e.lineTo(n/2+t/10*r(f,p),a/2+t/10*o(f,p)),e.lineTo(n/2+t/10*r(m,d),a/2+t/10*o(m,d)),e.fill()}}(t,n,a,o)}),50);return function(){return clearInterval(r)}}),[]),r.a.createElement("div",{className:"background-wrapper"},r.a.createElement("div",{className:"background"},r.a.createElement("canvas",Object.assign({ref:c},e))),r.a.createElement("div",{className:"content"},e.children))}),f=a(128),p=a.n(f),h=(a(163),function(e){var t=e.onScrollFrame,a=e.children;return r.a.createElement(p.a,{onScrollFrame:t},r.a.createElement("div",{className:"layout"},a))}),v=(a(164),a(463)),g=a(133),b=(a(165),a(441),{buttonGroup:{width:"100%"},button:{backgroundColor:"#777",borderWidth:0},buttonSelected:{backgroundColor:"#CCC",color:"black",borderWidth:0}}),E=function(){var e=Object(n.useContext)(m),t=e.navigation,a=e.setCurrentPage,o=function(e){a(e.target.value),e.preventDefault()};return r.a.createElement("div",{className:"nav"},r.a.createElement(v.a,{name:"nav","aria-label":"Navigation",defaultValue:"projects",style:b.buttonGroup},r.a.createElement(g.a,{name:"nav",variant:"secondary",style:"projects"===t.page?b.buttonSelected:b.button,value:"projects",onChange:o},"Projects"),r.a.createElement(g.a,{name:"nav",variant:"secondary",style:"about"===t.page?b.buttonSelected:b.button,value:"about",onChange:o},"About"),r.a.createElement(g.a,{name:"nav",variant:"secondary",style:"contact"===t.page?b.buttonSelected:b.button,value:"contact",onChange:o},"Contact")))},j=function(e){var t=e.isSticky;return r.a.createElement("div",{className:"header ".concat(t?"sticky":"")},r.a.createElement(E,null))},w=a(50),y=a.n(w),N=(a(458),function(){var e=u(),t=(e.height,e.width,Object(n.useState)({name:"",pronouns:"",title:"",photo:""})),a=Object(i.a)(t,2),o=a[0],c=a[1];return Object(n.useEffect)((function(){y()("https://spreadsheets.google.com/feeds/list/12WudbKp3rSdJJpJx7ANPEcC8J7unsYWwWaHBpXjtfPo/2/public/full?alt=json").then((function(e){console.log("response.data",e.data),c({name:e.data.feed.entry[0].gsx$name.$t,pronouns:e.data.feed.entry[0].gsx$pronouns.$t,title:e.data.feed.entry[0].gsx$title.$t,photo:e.data.feed.entry[0].gsx$photo.$t})})).catch((function(e){return console.log("error loading ajax")}))}),[]),r.a.createElement("div",{className:"profile-wrapper"},r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"profile-photo-wrapper"},r.a.createElement("img",{className:"profile-photo",src:o.photo})),r.a.createElement("div",{className:"profile-name"},o.name),r.a.createElement("div",{className:"profile-pronouns"},o.pronouns),r.a.createElement("div",{className:"profile-title"},o.title)))}),O=(a(459),a(462)),x=a(135),S=(a(460),function(e){var t=e.project;return r.a.createElement(O.a,{className:"project-card"},r.a.createElement("div",{className:"project-card-image-clipzone"},r.a.createElement(O.a.Img,{variant:"top",src:t.image,className:"project-card-image"})),r.a.createElement(O.a.Body,null,r.a.createElement(O.a.Title,null,t.title),r.a.createElement(O.a.Text,null,t.description),t.url?r.a.createElement(x.a,{variant:"primary",href:t.url},"live demo"):r.a.createElement(r.a.Fragment,null)))}),$=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){y()("https://spreadsheets.google.com/feeds/list/12WudbKp3rSdJJpJx7ANPEcC8J7unsYWwWaHBpXjtfPo/1/public/full?alt=json").then((function(e){o(e.data.feed.entry.map((function(e){return{title:e.gsx$title.$t,image:e.gsx$image.$t,description:e.gsx$description.$t,url:e.gsx$url.$t}})))})).catch((function(e){return console.log("error loading ajax")}))}),[]),r.a.createElement("div",{className:"projects-container"},a[0]?a.map((function(e){return r.a.createElement(S,{project:e})})):r.a.createElement(r.a.Fragment,null))};var C=function(){var e=u(),t=(e.height,e.width),a=Object(n.useState)({page:"projects"}),o=Object(i.a)(a,2),c=o[0],s=o[1],f=Object(n.useState)(!1),p=Object(i.a)(f,2),v=p[0],g=p[1];return r.a.createElement("div",{className:"App"},r.a.createElement(m.Provider,{value:{navigation:c,setCurrentPage:function(e){s(Object(l.a)(Object(l.a)({},c),{},{page:e}))}}},r.a.createElement(d,null,r.a.createElement(h,{onScrollFrame:function(e){e&&g(e.scrollTop>=(t>770?64:240))}},r.a.createElement(N,null),r.a.createElement(j,{isSticky:v}),"projects"===c.page?r.a.createElement($,null):("about"===c.page||c.page,r.a.createElement(r.a.Fragment,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[137,1,2]]]);
//# sourceMappingURL=main.34eddce7.chunk.js.map