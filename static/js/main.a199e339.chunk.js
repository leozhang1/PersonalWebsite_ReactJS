(this.webpackJsonpmy_website=this.webpackJsonpmy_website||[]).push([[0],{34:function(e,a,t){e.exports=t.p+"static/media/selfie.b3bb5d90.jpeg"},36:function(e,a,t){e.exports=t(67)},41:function(e,a,t){},42:function(e,a,t){},44:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(4),c=t.n(r);t(41);function o(e){return l.a.createElement("div",null,l.a.createElement("header",{id:"header"},l.a.createElement("div",null,l.a.createElement("div",{className:"centerText headingFont"},l.a.createElement("div",{className:"logo"},l.a.createElement("span",{className:"fas fa-gem"})),l.a.createElement("h1",null,"Leo Zhang"),l.a.createElement("div",null,"Mobile, Web, and Game developer"),l.a.createElement("p",null,"A passionate student on the road of self-improvement and making the world a better place"),l.a.createElement("div",{className:"debug"},"click on any of the drop-downs below for more info")))))}t(42);function i(e){return l.a.createElement("div",{className:"centerText collapsibleFont"},l.a.createElement("button",{type:"button",className:"btn btn-dark btn-block","data-toggle":"collapse","data-target":"#"+e.stringId},l.a.createElement("div",{className:"collapsibleFont"},e.title)),l.a.createElement("article",{id:e.stringId,className:"collapse"},l.a.createElement("p",null),l.a.createElement("img",{className:"resizeSelfie",src:e.imageURL,alt:""}),l.a.createElement("p",null,e.text),l.a.createElement("div",null,e.moreText),e.isWork&&l.a.createElement("a",{href:"https://github.com/leozhang1",className:"fab fa-github"}," ",l.a.createElement("span",null,"GitHub")," "),e.isIntro&&l.a.createElement("a",{href:"https://www.linkedin.com/in/leo-zhang-2532a219a/",className:"fab fa-linkedin"}," ",l.a.createElement("span",null,"LinkedIn")," ")))}var s=t(21),m=t.n(s),u=t(31),d=t(7);function p(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{name:e.name,className:"form-control",type:e.type,value:e.value,onChange:e.functionHandler,placeholder:e.placeholder,autoFocus:e.autofocus,required:!0})))}t(44);var g=t(32),h=t.n(g),f=t(88),E=t(92),b=t(93),v=Object(f.a)((function(e){return{typography:{padding:e.spacing(3)}}}));function y(e){var a=Object(n.useState)(""),t=Object(d.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(""),i=Object(d.a)(o,2),s=i[0],g=i[1],f=Object(n.useState)(""),y=Object(d.a)(f,2),N=y[0],k=y[1],w=Object(n.useState)(""),j=Object(d.a)(w,2),C=j[0],O=j[1],S=Object(n.useState)(""),x=Object(d.a)(S,2),I=x[0],T=x[1],L=Object(n.useState)(4e3),F=Object(d.a)(L,2),H=F[0],M=F[1];function z(){return(z=Object(u.a)(m.a.mark((function e(a){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),B(a),t={personName:r,companyName:s,emailName:N,phoneName:C,message:I},e.next=5,h.a.post("/api/sendMail",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U="name",J="company",W="email",_="phone",A="message",D=v(),G=l.a.useState(null),P=Object(d.a)(G,2),R=P[0],q=P[1],B=function(e){q(e.currentTarget)},Y=Boolean(R),Q=Y?"simple-popover":void 0;return l.a.createElement("div",{className:"centerForm",style:{display:"block"}},l.a.createElement("h2",{className:"major"},"Contact Me"),l.a.createElement("form",{method:"POST",action:"/api/sendMail"},l.a.createElement("div",{className:"card Card"},l.a.createElement("div",{className:"card-body card_body"},l.a.createElement(p,{type:"text",name:U,value:r,functionHandler:function(a){c(e.TitleCase(a.target.value))},placeholder:"first and last name",autofocus:!0}),l.a.createElement(p,{type:"text",name:J,value:s,functionHandler:function(e){g(e.target.value)},placeholder:J}),l.a.createElement(p,{type:"email",name:W,value:N,functionHandler:function(e){k(e.target.value)},placeholder:W}),l.a.createElement(p,{type:"tel",name:_,value:C,functionHandler:function(e){O(e.target.value)},placeholder:_}),l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{className:"form-control",onChange:function(e){T(e.target.value),M(4e3-e.target.value.length)},name:A,value:I,rows:"10",maxLength:4e3,placeholder:"message",required:!0}),l.a.createElement("div",{style:{color:H<=0?"red":null}},H," remaining characters")),l.a.createElement("button",{type:"submit",onClick:function(e){return z.apply(this,arguments)},className:"btn btn-light btn-block"},"Send Message"),l.a.createElement(E.a,{id:Q,open:Y,anchorEl:R,onClose:function(){q(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},l.a.createElement(b.a,{className:D.typography},"Thank you. Your message has been sent!"))))))}t(66);var N=t(34),k=t.n(N),w={textAlign:"center"};function j(){return l.a.createElement("div",{className:"background"},l.a.createElement(o,null),l.a.createElement(i,{title:"Intro",imageURL:k.a,text:"I have been coding for about 3 years since I started majoring in Computer Science.    I love computer science and the way everything works together in an orderly fashion,    and I am looking forward to advancing my skills by working on different projects",stringId:"intro",isIntro:!0}),l.a.createElement("hr",{className:"hrColor"}),l.a.createElement(i,{title:"Skill-Set",text:"Programming Languages: HTML, CSS, JavaScript, C#, C/C++, Dart, Python, Java",moreText:"Technologies: Unity, Unreal, Flutter, React.js, Node.js, .Net, MySQL, TensorFlow 2",stringId:"skill"}),l.a.createElement("hr",{className:"hrColor"}),l.a.createElement(i,{title:"Work",text:"To add later (already outlined)",stringId:"work",isWork:!0}),l.a.createElement("hr",{className:"hrColor"}),l.a.createElement("div",{className:"grid_container"},l.a.createElement(y,{TitleCase:function(e){return e.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")}}),l.a.createElement("footer",{style:w},l.a.createElement("div",null,l.a.createElement("a",{href:"https://github.com/leozhang1",className:"fab fa-github"}," ",l.a.createElement("span",null,"GitHub")," ")),l.a.createElement("div",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/leo-zhang-2532a219a/",className:"fab fa-linkedin"}," ",l.a.createElement("span",null,"LinkedIn")," ")),l.a.createElement("div",null,"Copyright \xa9 ",(new Date).getFullYear()))))}c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.a199e339.chunk.js.map