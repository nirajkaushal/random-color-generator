(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},20:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),l=(n(14),n(1)),s=n(4),i=n(5),u=n(7),h=n(6),d=n(8),p=(n(16),n(20),["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]),m=function(){for(var t="",e=0;e<6;e++)t+=p[Math.floor(Math.random()*p.length)];return t},k=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).state={currentColorMask:"#54ED42",colorArray:[],copied:!1},n.handleKeyDown=function(t){var e=t.key,a=p.includes(e.toUpperCase()),o=n.state.colorArray,r="";if(a||"BACKSPACE"===e.toUpperCase()){var c=[];a&&(c=o.length<6?Object(l.a)(n.state.colorArray).concat([e.toUpperCase()]):o),"BACKSPACE"===e.toUpperCase()&&o.length>0&&(c=Object(l.a)(n.state.colorArray)).pop();for(var s=0;s<6-c.length;s++)r+=p[Math.floor(Math.random()*p.length)];n.setState({colorArray:c,currentColorMask:"#".concat(c.join("")+r)})}},n.handleBodyClick=function(){n.setState({currentColorMask:"#".concat(m())})},n}return Object(d.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.setState({currentColorMask:"#".concat(m())}),document.addEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var t=this,e=this.state,n=e.currentColorMask,a=(e.colorArray,"#".concat((parseInt(n.substring(1),16)+10).toString(16)));return document.getElementsByTagName("meta")["theme-color"].content=a,o.a.createElement("div",{className:"app noselect",style:{background:this.state.currentColorMask},onClick:function(){return t.handleBodyClick()}},o.a.createElement("div",{className:"color-name-wrapper"},n.split("").map(function(t,e){return o.a.createElement("div",{key:e},t)})),o.a.createElement("div",{class:"credit"},"<> by ",o.a.createElement("a",{href:"https://github.com/nirajkaushal",target:"_blank"},"nirajkaushal")," with ",o.a.createElement("span",null,"\u2665")))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(22)}},[[9,2,1]]]);
//# sourceMappingURL=main.70cdaea1.chunk.js.map