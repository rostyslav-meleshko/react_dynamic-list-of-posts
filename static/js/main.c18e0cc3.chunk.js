(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),s=n.n(c),o=n(2),u=(n(12),n(13),n(1)),l=n.n(u),i=n(3),m="https://mate-api.herokuapp.com";function d(e){return fetch("".concat(m).concat(e)).then((function(e){return e.json()})).then((function(e){return e.data}))}var p=function(e){return d("/posts").then((function(t){return+e>0?t.filter((function(t){return t.userId===+e})):t}))},f=function(){return d("/users").then((function(e){return e.filter((function(e){return null!==e.address}))})).then((function(e){return e.sort((function(e,t){return e.id-t.id}))}))},b=function(e){return d("/posts/".concat(e))},v=(n(15),function(){return r.a.createElement("div",{className:"Loader"},r.a.createElement("div",{className:"Loader__content"}))}),E=(n(16),function(e){var t=e.userId,n=e.setSelectedPostId,c=e.selectedPostId,s=Object(a.useState)([]),u=Object(o.a)(s,2),m=u[0],d=u[1];Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:n=e.sent,d(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]);return r.a.createElement("div",{className:"PostsList"},r.a.createElement("h2",null,"Posts:"),m.length?r.a.createElement("ul",{className:"PostsList__list"},m.map((function(e){return r.a.createElement("li",{className:"PostsList__item",key:e.id},r.a.createElement("div",null,r.a.createElement("b",null,"[User #".concat(e.userId,"]: ")),e.title),r.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){return t=e.id,void n(t===c?void 0:t);var t}},"".concat(c===e.id?"Close":"Open")))}))):r.a.createElement(v,null))});E.defaultProps={selectedPostId:void 0,userId:void 0};var h=n(6),_=function(e){return d("/comments").then((function(t){return t.filter((function(t){return t.postId===e}))}))},y=function(e,t){return fetch("".concat(m,"/comments"),{method:"POST",headers:{"Context-type":"application/json; charset=UTF-8"},body:JSON.stringify({postId:e,name:t.name,email:t.email,body:t.body})}).then((function(e){return e.json()}))},N=function(e){return fetch("".concat(m,"/comments/").concat(e),{method:"DELETE",headers:{"Context-type":"application/json; charset=UTF-8"}})},j=(n(17),function(e){var t=e.postId,n=e.setComments,c=Object(a.useState)({name:"",email:"",body:""}),s=Object(o.a)(c,2),u=s[0],m=s[1],d=function(e){var t=e.name,n=e.value;m(Object(h.a)({},t,n))},p=function(){var e=Object(i.a)(l.a.mark((function e(a){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,y(t,u);case 3:return e.next=5,_(t);case 5:r=e.sent,n(r),m({name:"",email:"",body:""});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){return p(e)}},r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:u.name,onChange:function(e){return d(e.target)}})),r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:u.email,onChange:function(e){return d(e.target)}})),r.a.createElement("div",{className:"form-field"},r.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:u.body,onChange:function(e){return d(e.target)}})),r.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),O=function(e){var t=e.comments,n=e.setComments,a=e.postId,c=function(){var e=Object(i.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(t.id);case 2:return e.next=4,_(a);case 4:r=e.sent,n(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement("li",{key:e.id,className:"PostDetails__list-item"},r.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){c(e)}},"X"),r.a.createElement("p",null,e.body))})))};O.defaultProps={comments:[]};n(18);var I=function(e){var t=e.postId,n=Object(a.useState)({}),c=Object(o.a)(n,2),s=c[0],u=c[1],m=Object(a.useState)([]),d=Object(o.a)(m,2),p=d[0],f=d[1],E=Object(a.useState)(!1),h=Object(o.a)(E,2),y=h[0],N=h[1];return Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){var n,a,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([_(t),b(t)]);case 2:n=e.sent,a=Object(o.a)(n,2),r=a[0],c=a[1],f(r),u(c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),r.a.createElement("div",{className:"PostDetails"},r.a.createElement("h2",null,"Post details:"),r.a.createElement("section",{className:"PostDetails__post"},s.body?r.a.createElement("p",null,s.body):r.a.createElement(v,null)),p.length>0?r.a.createElement("section",{className:"PostDetails__comments"},r.a.createElement("button",{type:"button",className:"button",onClick:function(){N(!y)}},"".concat(y?"Show":"Hide"," ").concat(p.length," comments")),r.a.createElement("ul",{className:"PostDetails__list"},!y&&r.a.createElement(O,{comments:p,postId:t,setComments:f}))):r.a.createElement("p",null,"No comments yet"),r.a.createElement("section",null,r.a.createElement("div",{className:"PostDetails__form-wrapper"},r.a.createElement(j,{postId:t,setComments:f}))))};I.defaultProps={postId:void 0};var P=function(e){var t=e.userId,n=e.setUserId,c=Object(a.useState)([]),s=Object(o.a)(c,2),u=s[0],m=s[1];return Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("label",null,"Select a user: \xa0",r.a.createElement("select",{className:"App__user-selector",value:t,onChange:function(e){n(+e.target.value)}},r.a.createElement("option",{value:"0"},"All users"),u.map((function(e){return r.a.createElement("option",{key:e.id,value:+e.id},e.name)}))))};P.defaultProps={userId:void 0};var w=function(){var e=Object(a.useState)(void 0),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(void 0),u=Object(o.a)(s,2),l=u[0],i=u[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App__header"},r.a.createElement(P,{userId:n,setUserId:c})),r.a.createElement("main",{className:"App__main"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(E,{userId:n,selectedPostId:l,setSelectedPostId:i})),r.a.createElement("div",{className:"App__content"},l&&r.a.createElement(I,{postId:l}))))};s.a.render(r.a.createElement(w,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.c18e0cc3.chunk.js.map