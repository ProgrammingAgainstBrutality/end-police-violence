(this["webpackJsonpend-police-violence"]=this["webpackJsonpend-police-violence"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(2),o=n.n(r),c=(n(9),n(3)),i=function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("iframe",{title:e.title,width:"560",height:"315",src:e.url,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:"allowfullscreen"})),l.a.createElement("td",null,e.title),l.a.createElement("td",null,e.location?l.a.createElement("span",null,e.location):null),l.a.createElement("td",null,l.a.createElement("a",{href:e.source,target:"_blank",rel:"noopener noreferrer"},e.source)),l.a.createElement("td",null,e.recordingDate?l.a.createElement("span",null,e.recordingDate):null),l.a.createElement("td",null,e.uploadDate))};n(10);var u=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){fetch("https://raw.githubusercontent.com/ProgrammingAgainstBrutality/end-police-violence/master/videos.json").then((function(e){return e.json()})).then((function(e){return r(e)})),console.log("only on start")}),[]),Object(a.useEffect)((function(){console.log(n)}),[n]);var o=function(e,t){var a=n;a.sort((function(e,n){return e[t].localeCompare(n[t])})),r(a)};return l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement("h1",null,"End Police Violence"),l.a.createElement("h2",null,"Records of Police Brutality during the 2020 George Floyd Protests"),l.a.createElement("h4",null,"Please be advised - graphic content shared")),l.a.createElement("main",null,l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Video"),l.a.createElement("th",{onClick:function(e){return o(0,"title")}},"Description"),l.a.createElement("th",{onClick:function(e){return o(0,"location")}},"Location"),l.a.createElement("th",{onClick:function(e){return o(0,"source")}},"Original Source"),l.a.createElement("th",{onClick:function(e){return o(0,"recordingDate")}},"Recording Date"),l.a.createElement("th",{onClick:function(e){return o(0,"uploadDate")}},"Upload Date"))),l.a.createElement("tbody",null,n.map((function(e){return l.a.createElement(i,Object.assign({key:e.id},e))}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.85efa57d.chunk.js.map