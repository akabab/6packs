(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(63)},27:function(e,t,n){},58:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(14),c=n.n(o),r=n(65),l=n(67),u=n(66),s=(n(27),n(15)),m=n(16),d=n(20),p=n(17),h=n(21),f=n(9),v=n(8),E=n.n(v),b=(n(35),n(18)),g=n.n(b),y={apiKey:"AIzaSyA0d-9Xa0sIbn75OdH8EfKg2m_RxSVJORg",projectId:"".concat("todos-c769e"),authDomain:"".concat("todos-c769e",".firebaseapp.com"),databaseURL:"https://".concat("todos-c769e",".firebaseio.com"),storageBucket:"".concat("todos-c769e",".appspot.com")};E.a.initializeApp(y);var k=E.a.firestore();k.settings({timestampsInSnapshots:!0}),k.enablePersistence();var w=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return k.collection("items").doc("".concat(e.id,"-").concat(g()(t))).set({belongsTo:e,value:t,quantity:n,archived:!1})},C=function(e,t){return e._ref.update(t)},S=function(e){var t=k.batch();return e.forEach(function(e){return t.delete(e._ref)}),t.commit()},I=(n(58),function(e){var t=e.item;return i.a.createElement("li",null,i.a.createElement("span",null,"( ",t.quantity," )"),i.a.createElement("span",{className:t.archived?"line":"",onClick:function(e){return C(t,{archived:!t.archived})}}," ",t.value," "))});I.Edit=function(e){var t=e.item;return i.a.createElement("li",null,i.a.createElement("button",{onClick:function(e){return C(t,{quantity:t.quantity-1})}},"-"),i.a.createElement("span",null,"( ",t.quantity," )"),i.a.createElement("button",{onClick:function(e){return C(t,{quantity:t.quantity+1})}},"+"),i.a.createElement("span",{className:t.archived?"line":"",onClick:function(e){return C(t,{archived:!t.archived})}}," ",t.value," "),i.a.createElement("button",{onClick:function(e){return function(e){return e._ref.delete()}(t)}},"x"))};var M=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={list:void 0,inputValue:"",items:[],isModeEdition:!0},n.toggleMode=function(){n.setState({isModeEdition:!n.state.isModeEdition})},n.handleSubmit=function(e){e.preventDefault(),w(n.state.list,n.state.inputValue)},n.handleChange=function(e){n.setState({inputValue:e.target.value})},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e,t,n,a=this,i=(e=this.props.match.params.listId,k.collection("lists").doc(e));this.setState({list:i}),this.unsubscribe=(t=i,n=function(e){return a.setState({items:e})},k.collection("items").where("belongsTo","==",t).orderBy("value").onSnapshot(function(e){var t=e.docs.map(function(e){return Object(f.a)({id:e.id,_ref:e.ref},e.data())});n(t)}))}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this,t=this.props.match.params.listId,n=this.state,a=(n.list,n.items);return i.a.createElement("div",{className:"App"},i.a.createElement("h2",null,'Shopping list "',t,'"'),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",value:this.state.inputValue,onChange:this.handleChange}),i.a.createElement("input",{type:"submit",value:"add"})),i.a.createElement("button",{onClick:function(){return S(a.filter(function(e){return e.archived}))}},"clear dones"),i.a.createElement("button",{onClick:function(){return S(a)}},"clear all"),i.a.createElement("button",{onClick:this.toggleMode},"Mode: ",this.state.isModeEdition?"EDIT":"READ"),i.a.createElement("ul",null,a.map(function(t){return e.state.isModeEdition?i.a.createElement(I.Edit,{key:t.id,item:t}):i.a.createElement(I,{key:t.id,item:t})})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));console.log({v:4,public_url:"/6packs"});var O=function(){return i.a.createElement("div",null,"Home")};c.a.render(i.a.createElement(function(){return i.a.createElement(r.a,{basename:"/6packs"},i.a.createElement(l.a,null,i.a.createElement(u.a,{exact:!0,path:"/",component:O}),i.a.createElement(u.a,{path:"/:listId",component:M})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.a029e5fe.chunk.js.map