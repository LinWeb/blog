(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{732:function(t,e,n){"use strict";n.d(e,"d",function(){return u}),n.d(e,"c",function(){return o}),n.d(e,"e",function(){return l}),n.d(e,"a",function(){return f}),n.d(e,"f",function(){return p}),n.d(e,"b",function(){return h});var a=n(143),r=n.n(a),c=n(190),s=n(23),i=n(731);function u(t){return function(){var e=Object(c.a)(r.a.mark(function e(n){var a,c,u,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:s.e}),n({type:s.q,data:{loading:!0}}),e.next=4,i.a.GET_ARTICLES(t);case 4:a=e.sent,n({type:s.q,data:{loading:!1}}),a&&(c=a.status,u=a.response,o=a.pager,c&&n({type:s.g,data:{articleList:u,pager:o}}));case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}function o(t){return function(){var e=Object(c.a)(r.a.mark(function e(n){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:s.q,data:{loading:!0}}),e.next=3,i.a.GET_ARTICLE_DETAIL(t);case 3:return a=e.sent,n({type:s.q,data:{loading:!1}}),e.abrupt("return",a);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}function l(){return function(){var t=Object(c.a)(r.a.mark(function t(e){var n,a,c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.GET_ARTICLES({pageSize:3});case 2:(n=t.sent)&&(a=n.status,c=n.response,a&&e({type:s.j,data:c}));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}function f(t){return Object(c.a)(r.a.mark(function e(){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.ARTICLE_ADD(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}))}function p(t){return Object(c.a)(r.a.mark(function e(){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.ARTICLE_UPDATE(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}))}function h(t){return function(){var e=Object(c.a)(r.a.mark(function e(n){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.ARTICLE_DEL(t);case 2:(a=e.sent)&&a.status&&n({type:s.c,data:t});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}},736:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var a=n(143),r=n.n(a),c=n(190),s=n(23),i=n(731);function u(){return function(){var t=Object(c.a)(r.a.mark(function t(e){var n,a,c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.GET_TAGS();case 2:(n=t.sent)&&(a=n.status,c=n.response,a&&e({type:s.k,data:c}));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},737:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var a=n(143),r=n.n(a),c=n(190),s=n(23),i=n(731);function u(){return function(){var t=Object(c.a)(r.a.mark(function t(e){var n,a,c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:s.f}),e({type:s.q,data:{loading:!0}}),t.next=4,i.a.GET_CATEGORIES();case 4:n=t.sent,e({type:s.q,data:{loading:!1}}),n&&(a=n.status,c=n.response,a&&e({type:s.h,data:c}));case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},739:function(t,e,n){"use strict";n.r(e);n(108);var a=n(31),r=(n(695),n(696)),c=(n(687),n(688)),s=n(143),i=n.n(s),u=(n(689),n(690)),o=n(190),l=n(103),f=n(69),p=n(70),h=n(73),g=n(71),d=n(72),m=n(1),b=n.n(m),y=n(74),w=n(736),v=n(737),C=n(732),E=(n(686),n(9)),j=(n(693),n(694)),O=j.a.CheckableTag,k=function(t){function e(t){var n;return Object(f.a)(this,e),(n=Object(h.a)(this,Object(g.a)(e).call(this,t))).changeShowInput=function(t){n.setState(function(){return{show:t}})},n.showInput=function(){n.setState(function(){return{show:!0}})},n.handleInputConfirm=function(t){var e=t.target.value;n.props.onChange(e),n.setState(function(t){return{show:!1,newCategoryList:[].concat(Object(l.a)(t.newCategoryList),[{name:e}])}})},n.handleClose=function(t){var e=n.props.onChange,a=n.state.newCategoryList;e(t);var r=a.filter(function(e){return e!==t});n.setState(function(){return{show:!1,newCategoryList:r}})},n.state={show:!1,newCategoryList:[]},n}return Object(d.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.categoryList,a=e.categories,r=e.onChange,s=this.state,i=s.show,u=s.newCategoryList;return b.a.createElement(m.Fragment,null,n.map(function(t,e){return b.a.createElement(O,{checked:a.includes(t.name),onChange:function(){r(t.name)},className:"category",key:e},t.name)}),u.map(function(e,n){return b.a.createElement(j.a,{closable:"true",onClose:function(){return t.handleClose(e.name)},className:"category",key:n,color:"#1890ff"},e.name)}),i&&b.a.createElement(c.a,{type:"text",size:"small",style:{width:78},onBlur:this.handleInputConfirm}),!i&&b.a.createElement(j.a,{onClick:this.showInput,style:{background:"#fff",borderStyle:"dashed"}},b.a.createElement(E.a,{type:"plus"})," \u6dfb\u52a0\u5206\u7c7b"))}}]),e}(m.Component),L=Object(y.b)(function(t){return{categoryList:t.category.categoryList}})(k),x=j.a.CheckableTag,T=function(t){function e(t){var n;return Object(f.a)(this,e),(n=Object(h.a)(this,Object(g.a)(e).call(this,t))).changeShowInput=function(t){n.setState(function(){return{show:t}})},n.showInput=function(){n.setState(function(){return{show:!0}})},n.handleInputConfirm=function(t){var e=t.target.value;n.props.onChange(e),n.setState(function(t){return{show:!1,newTagList:[].concat(Object(l.a)(t.newTagList),[{name:e}])}})},n.handleClose=function(t){var e=n.props.onChange,a=n.state.newTagList;e(t);var r=a.filter(function(e){return e!==t});n.setState(function(){return{show:!1,newTagList:r}})},n.state={show:!1,newTagList:[]},n}return Object(d.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.tagList,a=e.tags,r=e.onChange,s=this.state,i=s.show,u=s.newTagList;return b.a.createElement(m.Fragment,null,n.map(function(t,e){return b.a.createElement(x,{checked:a.includes(t.name),onChange:function(){r(t.name)},className:"category",key:e},t.name)}),u.map(function(e,n){return b.a.createElement(j.a,{closable:"true",onClose:function(){return t.handleClose(e.name)},className:"category",key:n,color:"#1890ff"},e.name)}),i&&b.a.createElement(c.a,{type:"text",size:"small",style:{width:78},onBlur:this.handleInputConfirm}),!i&&b.a.createElement(j.a,{onClick:this.showInput,style:{background:"#fff",borderStyle:"dashed"}},b.a.createElement(E.a,{type:"plus"})," \u6dfb\u52a0\u6807\u7b7e"))}}]),e}(m.Component),S=Object(y.b)(function(t){return{tagList:t.tag.tagList}})(T),I=n(727),A=n.n(I),G=function(t){function e(t){var n;return Object(f.a)(this,e),(n=Object(h.a)(this,Object(g.a)(e).call(this,t))).changeTitle=function(t){var e=t.target.value;n.setState(function(){return{title:e}})},n.changeCategories=function(t){n.setState(function(e){return e.categories.includes(t)?{categories:e.categories.filter(function(e){return e!==t})}:{categories:[].concat(Object(l.a)(e.categories),[t])}})},n.changeTags=function(t){n.setState(function(e){return e.tags.includes(t)?{tags:e.tags.filter(function(e){return e!==t})}:{tags:[].concat(Object(l.a)(e.tags),[t])}})},n.handleEditorChange=function(t){var e=t.text;t.html;n.setState(function(){return{content:e}})},n.handleSubmit=function(){var t=Object(o.a)(i.a.mark(function t(e,a){var r,c,s,o,l,f,p,h,g,d,m;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),r=n.state,c=r.id,s=r.title,o=r.categories,l=r.tags,f=r.content,p=n.props,h=p.dispatchAddArticle,g=p.dispatchUpdateArticle,d=p.history,""!==s){t.next=6;break}return u.a.error("\u8bf7\u8f93\u5165\u6807\u9898"),t.abrupt("return");case 6:if(o.length){t.next=9;break}return u.a.error("\u81f3\u5c11\u9009\u62e9\u4e00\u4e2a\u5206\u7c7b"),t.abrupt("return");case 9:if(l.length){t.next=12;break}return u.a.error("\u81f3\u5c11\u9009\u62e9\u4e00\u4e2a\u6807\u7b7e"),t.abrupt("return");case 12:if(""!==f){t.next=15;break}return u.a.error("\u8bf7\u8f93\u5165\u5185\u5bb9"),t.abrupt("return");case 15:if(m=null,!c){t.next=22;break}return t.next=19,g({id:c,title:s,categories:o,tags:l,content:f});case 19:m=t.sent,t.next=25;break;case 22:return t.next=24,h({title:s,categories:o,tags:l,content:f});case 24:m=t.sent;case 25:m.status&&(u.a.success(m.message),a&&d.push("/admin"));case 26:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),n.state={id:0,title:"",categories:[],tags:[],content:""},n}return Object(d.a)(e,t),Object(p.a)(e,[{key:"UNSAFE_componentWillMount",value:function(){var t=this,e=this.props,n=e.dispatchGetTagList,a=e.dispatchGetCategoryList;n(),a();var r=this.props.location.pathname;if("/admin/article/add"!==r){var c=r.split("/"),s=c[c.length-1];this.setState(function(){return{id:s}}),s&&this.props.dispatchGetArticleDetail({id:s}).then(function(e){if(e&&e.status){var n=e.response,a=n.title,r=n.categories,c=n.tags,s=n.content;r=r.map(function(t){return t.name}),c=c.map(function(t){return t.name}),t.setState(function(){return{title:a,categories:r,tags:c,content:s}})}})}}},{key:"render",value:function(){var t=this,e=this.state,n=e.title,s=e.categories,i=e.tags,u=e.content;return b.a.createElement(r.a,{labelCol:{span:2},wrapperCol:{span:20},style:{padding:"22px 0 45px"}},b.a.createElement(r.a.Item,{label:"\u6807\u9898"},b.a.createElement(c.a,{value:n,onChange:this.changeTitle})),b.a.createElement(r.a.Item,{label:"\u5206\u7c7b"},b.a.createElement(L,{categories:s,onChange:this.changeCategories})),b.a.createElement(r.a.Item,{label:"\u6807\u7b7e"},b.a.createElement(S,{tags:i,onChange:this.changeTags})),b.a.createElement(r.a.Item,{wrapperCol:{span:22,offset:1}},b.a.createElement(A.a,{value:u,onChange:this.handleEditorChange,style:{width:"100%",height:"600px"}})),b.a.createElement(r.a.Item,{wrapperCol:{span:14,offset:1}},b.a.createElement(a.a,{type:"primary",htmlType:"submit",onClick:function(e){t.handleSubmit(e,!0)}},"\u63d0\u4ea4"),b.a.createElement(a.a,{type:"primary",style:{marginLeft:18},htmlType:"submit",onClick:function(e){t.handleSubmit(e,!1)}},"\u4fdd\u5b58\u5e76\u7ee7\u7eed\u7f16\u8f91")))}}]),e}(m.Component);e.default=Object(y.b)(null,function(t){return{dispatchGetTagList:function(){return t(Object(w.a)())},dispatchGetCategoryList:function(){return t(Object(v.a)())},dispatchAddArticle:function(e){return t(Object(C.a)(e))},dispatchUpdateArticle:function(e){return t(Object(C.f)(e))},dispatchGetArticleDetail:function(e){return t(Object(C.c)(e))}}})(r.a.create({name:"article-edit"})(G))}}]);