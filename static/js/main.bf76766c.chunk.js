(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(3),i=t.n(r),c=(t(15),t(1)),o=t(4),l=t(5),m=t(7),u=t(6),p=t(8),h=(t(16),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(s)))).state={username:"",email:"",pass:"",accept:!1,message:"",errors:{username:!1,email:!1,pass:!1,accept:!1}},t.messages={username_incorrect:"Login musi by\u0107 d\u0142u\u017cszy ni\u017c 10 znak\xf3w i nie mo\u017ce zawiera\u0107 spacji",email_incorrect:"Brak znaku @ w adresie e-mail",password_incorrect:"Has\u0142o musi mie\u0107 dok\u0142adnie 8 znak\xf3w",accept_incorrect:"Akceptacja regulaminu jest konieczna"},t.handleChange=function(e){var a=e.target.name,n=e.target.type;if("text"===n||"password"===n||"email"===n){var s=e.target.value;t.setState(Object(c.a)({},a,s))}else if("checkbox"===n){var r=e.target.checked;console.log(r),t.setState(Object(c.a)({},a,r))}},t.handleSubmit=function(e){e.preventDefault();var a=t.formValidation();console.log(a),a.correct?t.setState({username:"",email:"",pass:"",accept:!1,message:"Dzi\u0119kujemy, formularz rejestracyjny zosta\u0142 wys\u0142any",errors:{username:!1,email:!1,pass:!1,accept:!1}}):t.setState({errors:{username:!a.username,email:!a.email,pass:!a.password,accept:!a.accept}})},t.formValidation=function(){var e=!1,a=!1,n=!1,s=!1,r=!1;return t.state.username.length>10&&-1===t.state.username.indexOf(" ")&&(e=!0),-1!==t.state.email.indexOf("@")&&(a=!0),8===t.state.pass.length&&(n=!0),t.state.accept&&(s=!0),e&&a&&n&&s&&(r=!0),{correct:r,username:e,email:a,password:n,accept:s}},t}return Object(p.a)(a,e),Object(l.a)(a,[{key:"componentDidUpdate",value:function(){var e=this;""!==this.state.message&&setTimeout(function(){return e.setState({message:" "})},3e3)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0},s.a.createElement("label",{htmlFor:"user"},"Tw\xf3j Login",s.a.createElement("input",{type:"text",id:"user",name:"username",value:this.state.username,onChange:this.handleChange}),this.state.errors.username&&s.a.createElement("span",null,this.messages.username_incorrect)),s.a.createElement("label",{htmlFor:"user"},"Tw\xf3j email:",s.a.createElement("input",{type:"email",id:"email",name:"email",value:this.state.email,onChange:this.handleChange}),this.state.errors.email&&s.a.createElement("span",null,this.messages.email_incorrect)),s.a.createElement("label",{htmlFor:"password"},"Twoje Has\u0142o:",s.a.createElement("input",{type:"password",id:"password",name:"pass",value:this.state.pass,onChange:this.handleChange}),this.state.errors.pass&&s.a.createElement("span",null,this.messages.password_incorrect)),s.a.createElement("label",{htmlFor:"accept"},s.a.createElement("input",{type:"checkbox",id:"accept",name:"accept",checked:this.state.accept,onChange:this.handleChange}),"Akceptuje warunki regulaminu",this.state.errors.accept&&s.a.createElement("span",null,this.messages.accept_incorrect)),s.a.createElement("button",null,"Zapisz si\u0119")),this.state.message&&s.a.createElement("h3",null,this.state.message))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.bf76766c.chunk.js.map