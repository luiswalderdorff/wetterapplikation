(this.webpackJsonpwetterapplikation=this.webpackJsonpwetterapplikation||[]).push([[0],{22:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(19),c=a.n(i),o=(a(27),a(4)),l=a(5),s=a(7),m=a(6),u=a(8),p=a(12),h=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.city,a=e.index,n=e.removeCity;return t.name?r.a.createElement("div",{className:"dib w-90 ba b--black-10 flex flex-column items-center ma3 w-40-ns w-25-l shadow-5 weather-component"},r.a.createElement("div",{className:"flex justify-between w-100 pa3"},r.a.createElement("div",null),r.a.createElement("div",{className:"dib"},t.name),r.a.createElement("div",{className:"pointer b dib",onClick:function(){return n(a)}},"\xd7")),r.a.createElement(p.b,{to:{pathname:"/".concat(t.name),state:{city:t}}},r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(t.weather.icon,"@2x.png"),alt:"A weather icon",className:"h4"})),r.a.createElement("div",{className:"pa3"},t.temperature,"\xb0C")):r.a.createElement("div",null,"Hi")}}]),t}(n.Component),d=function(e){var t=e.weatherArray,a=e.removeCity;return r.a.createElement("div",{className:"w-90 flex flex-wrap justify-center-l justify-between-ns"},t?t.map((function(e,t){return r.a.createElement(h,{city:e,key:t,index:t,removeCity:a})})):r.a.createElement("div",null))},f=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.city;return r.a.createElement("div",null,r.a.createElement(p.b,{to:"/"},r.a.createElement("h1",{className:"dib ml3"},"\u2190")),r.a.createElement("div",{className:"flex-wrap items-center pa3 justify-around ba ma3 weather-component detailed-view br3"},r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"city-name tc b pa1 dib ma0"},e.name)),r.a.createElement("div",{className:"flex flex-wrap justify-around"},r.a.createElement("div",{className:"flex"},r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(e.weather.icon,"@2x.png"),alt:"A weather icon"}),r.a.createElement("div",{className:"flex justify-center flex-column"},r.a.createElement("div",{className:"tc pa2"},"Temperatur: ",e.temperature,"\xb0C"),r.a.createElement("div",{className:"tc pa1"},e.weather.description))),r.a.createElement("div",{className:"flex flex-column justify-center"},r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"pa2"},"Gef\xfchlt: ",e.feelsLike,"\xb0C"),r.a.createElement("div",{className:"pa2"},"Min: ",e.minTemp,"\xb0C"),r.a.createElement("div",{className:"pa2"},"Max: ",e.maxTemp,"\xb0C")),r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"pa2"},"Luftdruck: ",e.pressure," hPA"),r.a.createElement("div",{className:"pa2"},"Luftfeuchtigkeit: ",e.humidity,"%"))))))}}]),t}(n.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.listItem,a=e.day;return r.a.createElement("div",{className:"dib w-90 ba b--black-10 flex justify-around items-center ma3 w-40-ns w-25-l shadow-5 weather-component"},r.a.createElement("div",null,r.a.createElement("div",null,a),r.a.createElement("div",null,t.main.temp,"\xb0C"),r.a.createElement("div",null,t.weather[0].description)),r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png"),alt:"A weather icon"}))}}]),t}(n.Component),y=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).getCity=function(){var t=e.props.location.state.city.name;fetch("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=".concat(t,"&units=metric&lang=de&APPID=761b91c920e9201fba7da16e3aa16206")).then((function(e){return e.json()})).then((function(t){e.setState({weather:t})})).catch((function(e){return console.log(e)}))},e.state={},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getCity(),this.city=this.props.location.state.city}},{key:"render",value:function(){var e=this.city;if(this.state.weather){var t=this.state.weather.list;return r.a.createElement("div",null,r.a.createElement(f,{city:this.city}),r.a.createElement("div",{className:"flex flex-wrap justify-around"},t?t.map((function(e,t){var a,n=e.dt,i=new Date(1e3*n),c=i.getHours();switch(i.getDay()){case 0:a="Sonntag";break;case 1:a="Montag";break;case 2:a="Dienstag";break;case 3:a="Mittwoch";break;case 4:a="Donnerstag";break;case 5:a="Freitag";break;case 6:a="Samstag";break;default:a="Sonntag"}if(13===c&&0!==t)return r.a.createElement(v,{listItem:e,key:t,day:a})})):r.a.createElement("div",null)))}return e?r.a.createElement(f,{city:e}):r.a.createElement("div",null,"Ein Fehler ist passiert")}}]),t}(n.Component),w=function(e){var t=e.getCity;return r.a.createElement("div",{className:"flex flex-wrap justify-center items-center"},r.a.createElement("input",{id:"myInput",type:"text",placeholder:"Stadt hinzuf\xfcgen",className:"b pa2 ba bg-transparent ma4"}),r.a.createElement("button",{id:"myBtn",className:"f6 link dim br-pill ba bw1 ph3 pv2 dib black",onClick:function(){t(document.getElementById("myInput").value),document.getElementById("myInput").value=""}},"OK"))},b=a(10),g=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).getCity=function(t){fetch("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&lang=de&APPID=761b91c920e9201fba7da16e3aa16206")).then((function(e){return e.json()})).then((function(t){var a=e.state.weatherArray;a.push({name:t.name,temperature:t.main.temp,weather:t.weather[0],feelsLike:t.main.feels_like,minTemp:t.main.temp_min,maxTemp:t.main.temp_max,pressure:t.main.pressure,humidity:t.main.humidity}),e.setState({weatherArray:a}),localStorage.setItem("weatherArray",JSON.stringify(a))})).catch((function(e){return console.log(e)}))},e.removeCity=function(t){var a=e.state.weatherArray;a.splice(t,1),e.setState({weatherArray:a}),localStorage.setItem("weatherArray",JSON.stringify(a))},e.state={weatherArray:[]},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(localStorage.getItem("weatherArray")){var t=localStorage.getItem("weatherArray");JSON.parse(t).forEach((function(t,a){e.getCity(t.name)}))}else this.getCity("dresden");var a=document.getElementById("myInput");a&&a.addEventListener("keyup",(function(e){13===e.keyCode&&(e.preventDefault(),console.log("Hi"),document.getElementById("myBtn").click())}))}},{key:"render",value:function(){var e=this,t=this.state.weatherArray;return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",render:function(a){return r.a.createElement("div",{className:"App flex flex-column items-center avenir"},r.a.createElement(w,{getCity:e.getCity,onInputChange:e.onInputChange}),r.a.createElement(d,{weatherArray:t,removeCity:e.removeCity}))}}),r.a.createElement(b.a,{path:"/:city",component:y}))))}}]),t}(n.Component),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(33);c.a.render(r.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/wetterapplikation",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/wetterapplikation","/service-worker.js");E?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(t,e)}))}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.4d5b4dc9.chunk.js.map