(this.webpackJsonppoketimes2=this.webpackJsonppoketimes2||[]).push([[0],{34:function(e,t,i){},44:function(e,t,i){"use strict";i.r(t);var s=i(1),n=i(0),c=i.n(n),a=i(16),r=i.n(a),o=(i(34),i(9)),u=i(10),l=i(13),d=i(12),p=i(7),m=i(2),j=Object(m.f)((function(e){return Object(s.jsx)("nav",{className:"nav-wrapper red darken-3",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("a",{href:"/",className:"brand-logo",children:"PokeTimes"}),Object(s.jsxs)("ul",{className:"right",children:[Object(s.jsx)("li",{children:Object(s.jsx)(p.b,{to:"/",children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)(p.b,{to:"/about",children:"About"})}),Object(s.jsx)("li",{children:Object(s.jsx)(p.c,{to:"/contact",children:"Contact"})})]})]})})})),b=i.p+"static/media/pokeball.05e5662d.png",h=i(11),O=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(u.a)(i,[{key:"render",value:function(){console.log(this.props);var e=this.props.posts,t=e.length?e.map((function(e){return Object(s.jsxs)("div",{className:"post card",children:[Object(s.jsx)("img",{src:b,alt:"Pokeball"}),Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)(p.b,{to:"/"+e.id,children:Object(s.jsx)("span",{className:"card-title red-text",children:e.title})}),Object(s.jsx)("p",{children:e.body})]})]},e.id)})):Object(s.jsx)("div",{className:"center",children:" No Posts to show"});return Object(s.jsxs)("div",{className:"container home",children:[Object(s.jsx)("h4",{className:"center",children:"Home"}),Object(s.jsx)("p",{children:t})]})}}]),i}(n.Component),x=Object(h.b)((function(e){return{posts:e.posts}}))(O),f=function(e){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h4",{className:"center",children:"Contact"}),Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio minus debitis quo earum assumenda, vel voluptatem dolores dolore labore iure cum ducimus ad beatae perferendis nemo culpa modi corrupti accusamus dicta omnis incidunt possimus asperiores a. Temporibus delectus cupiditate laudantium quis ad fugiat voluptates blanditiis dolorem! Distinctio, officiis atque."})]})},v=i(15),g=function(e){var t=["red","pink","blue","green","yellow","purple"][Math.floor(5*Math.random())]+"-text";return function(i){return Object(s.jsx)("div",{className:t,children:Object(s.jsx)(e,Object(v.a)({},i))})}}((function(){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h4",{className:"center",children:"About"}),Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio minus debitis quo earum assumenda, vel voluptatem dolores dolore labore iure cum ducimus ad beatae perferendis nemo culpa modi corrupti accusamus dicta omnis incidunt possimus asperiores a. Temporibus delectus cupiditate laudantium quis ad fugiat voluptates blanditiis dolorem! Distinctio, officiis atque."})]})})),N=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(o.a)(this,i);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).handleClick=function(){e.props.deletePost(e.props.post.id),e.props.history.push("/")},e}return Object(u.a)(i,[{key:"render",value:function(){console.log(this.props);var e=this.props.post?Object(s.jsxs)("div",{className:"post",children:[Object(s.jsx)("h4",{className:"center",children:this.props.post.title}),Object(s.jsx)("p",{children:this.props.post.body}),Object(s.jsx)("div",{className:"center",children:Object(s.jsx)("button",{className:"btn grey",onClick:this.handleClick,children:"Delete Post"})})]}):Object(s.jsx)("div",{className:"center",children:"Loading post..."});return Object(s.jsx)("div",{className:"container",children:e})}}]),i}(n.Component),y=Object(h.b)((function(e,t){var i=t.match.params.post_id;return{post:e.posts.find((function(e){return e.id===i}))}}),(function(e){return{deletePost:function(t){return e(function(e){return{type:"DELETE_POST",id:e}}(t))}}}))(N),k=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(u.a)(i,[{key:"render",value:function(){return Object(s.jsx)(p.a,{children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(j,{}),Object(s.jsxs)(m.c,{children:[Object(s.jsx)(m.a,{exact:!0,path:"/",component:x}),Object(s.jsx)(m.a,{path:"/about",component:g}),Object(s.jsx)(m.a,{path:"/contact",component:f}),Object(s.jsx)(m.a,{path:"/:post_id",component:y})]})]})})}}]),i}(n.Component),q=i(17),C={posts:[{id:"1",title:"Squirtle Laid an Egg",body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat"},{id:"2",title:"Charmander Laid an Egg",body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat"},{id:"3",title:"a Helix Fossil was Found",body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat"}]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;if("DELETE_POST"===t.type){var i=e.posts.filter((function(e){return t.id!==e.id}));return Object(v.a)(Object(v.a)({},e),{},{posts:i})}return e},E=Object(q.b)(L);r.a.render(Object(s.jsx)(h.a,{store:E,children:Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(k,{})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.3f466c24.chunk.js.map