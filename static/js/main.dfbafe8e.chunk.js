(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),c=n(36),s=n.n(c),i=n(12),o=n(23),u=n(9),l=n(10),j=n.n(l),b=n(17),d=n(25);n(44),n(45),n(46);d.a.initializeApp({apiKey:"AIzaSyBWVy-5aHtbQg0cjaAkp9P5Mi15X6NEuwE",authDomain:"nwitter-8d822.firebaseapp.com",projectId:"nwitter-8d822",storageBucket:"nwitter-8d822.appspot.com",messagingSenderId:"644723054916",appId:"1:644723054916:web:de1433372b38481ec05f11"});var p=d.a,f=d.a.auth(),O=d.a.firestore(),h=d.a.storage(),m=n(2),x=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),o=s[0],u=s[1],l=Object(a.useState)(!0),d=Object(i.a)(l,2),p=d[0],O=d[1],h=Object(a.useState)(""),x=Object(i.a)(h,2),v=x[0],g=x[1],y=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?r(a):"password"===n&&u(a)},w=function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,f.createUserWithEmailAndPassword(n,o);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,f.signInWithEmailAndPassword(n,o);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:w,className:"container",children:[Object(m.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:y,className:"authInput"}),Object(m.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:y,className:"authInput"}),Object(m.jsx)("input",{type:"submit",value:p?"Create Account":"Sign In"}),v&&Object(m.jsx)("span",{className:"authError",children:v})]}),Object(m.jsx)("span",{onClick:function(){return O((function(e){return!e}))},className:"authSwitch",children:p?"Sign In":"Create Account"})]})},v=n(14),g=n(24),y=function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new p.auth.GoogleAuthProvider:"github"===n&&(a=new p.auth.GithubAuthProvider),e.next=4,f.signInWithPopup(a);case 4:r=e.sent,console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"authContainer",children:[Object(m.jsx)(v.a,{icon:g.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(m.jsx)(x,{}),Object(m.jsxs)("div",{className:"authBtns",children:[Object(m.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(m.jsx)(v.a,{icon:g.b})]}),Object(m.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(m.jsx)(v.a,{icon:g.a})]})]})]})},w=n(38),N=n(19),k=function(e){var t=e.nweetObj,n=e.isOwner,r=Object(a.useState)(!1),c=Object(i.a)(r,2),s=c[0],o=c[1],u=Object(a.useState)(t.text),l=Object(i.a)(u,2),d=l[0],p=l[1],f=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,O.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,h.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){return o((function(e){return!e}))},g=function(){var e=Object(b.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,O.doc("nweets/".concat(t.id)).update({text:d});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"nweet",children:s?Object(m.jsx)(m.Fragment,{children:n&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:g,className:"container nweetEdit",children:[Object(m.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:d,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;p(t)},className:"formInput"}),Object(m.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(m.jsx)("span",{onClick:x,className:"formBtn cancelBtn",children:"Cancel"})]})}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(m.jsx)("img",{src:t.attachmentUrl}),n&&Object(m.jsxs)("div",{class:"nweet__actions",children:[Object(m.jsx)("span",{onClick:f,children:Object(m.jsx)(v.a,{icon:N.d})}),Object(m.jsx)("span",{onClick:x,children:Object(m.jsx)(v.a,{icon:N.a})})]})]})})},S=n(60),I=function(e){var t=e.userObj,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),l=u[0],d=u[1],p=function(){var e=Object(b.a)(j.a.mark((function e(n){var a,r,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==c){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",""===l){e.next=12;break}return r=h.ref().child("".concat(t.uid,"/").concat(Object(S.a)())),e.next=8,r.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return o={text:c,createAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=15,O.collection("nweets").add(o);case 15:s(""),d("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("form",{onSubmit:p,className:"factoryForm",children:[Object(m.jsxs)("div",{className:"factoryInput__container",children:[Object(m.jsx)("input",{className:"factoryInput__input",value:c,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(m.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(m.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(m.jsx)("span",{children:"Add photos"}),Object(m.jsx)(v.a,{icon:N.b})]}),Object(m.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;d(t)},n.readAsDataURL(t)},style:{opacity:0}}),l&&Object(m.jsxs)("div",{className:"factoryForm__attachment",children:[Object(m.jsx)("img",{src:l,style:{backgroundImage:l}}),Object(m.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return d("")},children:[Object(m.jsx)("span",{children:"Remove"}),Object(m.jsx)(v.a,{icon:N.c})]})]})]})},C=function(e){var t=e.userObj,n=Object(a.useState)([]),r=Object(i.a)(n,2),c=r[0],s=r[1];return Object(a.useEffect)((function(){O.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(I,{userObj:t}),Object(m.jsx)("div",{style:{marginTop:30},children:c.map((function(e){return Object(m.jsx)(k,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},A=function(e){var t=e.refreshUser,n=e.userObj,r=Object(u.g)(),c=Object(a.useState)(n.displayName),s=Object(i.a)(c,2),o=s[0],l=s[1],d=function(){var e=Object(b.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===o){e.next=5;break}return e.next=4,n.updateProfile({displayName:o});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection("nweets").where("creatorId","==",n.uid).orderBy("createdAt").get();case 2:t=e.sent,console.log(t.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){p()}),[]),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("form",{onSubmit:d,className:"profileForm",children:[Object(m.jsx)("input",{onChange:function(e){var t=e.target.value;l(t)},type:"text",placeholder:"Display name",value:o,className:"formInput"}),Object(m.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(m.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){f.signOut(),r.push("/")},children:"Log Out"})]})},F=function(e){var t=e.userObj;return Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(m.jsx)("li",{children:Object(m.jsx)(o.b,{to:"/",style:{marginRight:10},children:Object(m.jsx)(v.a,{icon:g.c,color:"#04AAFF",size:"2x"})})}),Object(m.jsx)("li",{children:Object(m.jsxs)(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(m.jsx)(v.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(m.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},B=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(m.jsxs)(o.a,{children:[n&&Object(m.jsx)(F,{userObj:a}),Object(m.jsx)(u.d,{children:n?Object(m.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(m.jsx)(u.b,{exact:!0,path:"/",children:Object(m.jsx)(C,{userObj:a})}),Object(m.jsx)(u.b,{exact:!0,path:"/profile",children:Object(m.jsx)(A,{userObj:a,refreshUser:t})}),Object(m.jsx)(u.a,{from:"*",to:"/"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u.b,{exact:!0,path:"/",children:Object(m.jsx)(y,{})}),Object(m.jsx)(u.a,{from:"*",to:"/"})]})})]})};var P=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),s=Object(i.a)(c,2),o=s[0],u=s[1];return Object(a.useEffect)((function(){f.onAuthStateChanged((function(e){u(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),r(!0)}))}),[]),Object(m.jsx)(m.Fragment,{children:n?Object(m.jsx)(B,{refreshUser:function(){var e=f.currentUser;u({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(o),userObj:o}):"Initializing..."})};n(58),n(56);s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.dfbafe8e.chunk.js.map