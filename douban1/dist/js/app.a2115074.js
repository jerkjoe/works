(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)o=r[d],n[o]&&p.push(n[o][0]),n[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},s=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/works/douban1/dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("04f5"),n=a.n(i);n.a},"0487":function(t,e,a){},"04f5":function(t,e,a){},1366:function(t,e,a){"use strict";var i=a("cd6f"),n=a.n(i);n.a},2151:function(t,e,a){"use strict";var i=a("7fcf"),n=a.n(i);n.a},"2fea":function(t,e,a){},4875:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("keep-alive",[a("router-view")],1)],1)},s=[],o=(a("034f"),a("2877")),r={},c=Object(o["a"])(r,n,s,!1,null,null,null),l=c.exports,u=(a("5a8b"),a("8c4f")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Search"),a("Top250",{attrs:{list:t.list}}),t.loadingVisible?a("Loading"):t._e(),250===t.list.length?a("div",{staticClass:"end"},[t._v("到底了朋友")]):t._e()],1)},p=[],h=a("8afe"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-container"},[a("form",{staticClass:"search",attrs:{action:""},on:{submit:function(e){t.handleSearch(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],attrs:{type:"text",placeholder:"请输入电影名称"},domProps:{value:t.keywords},on:{input:function(e){e.target.composing||(t.keywords=e.target.value)}}}),a("button",{attrs:{type:"submit"}},[t._v("搜索")])])])},g=[],m={name:"Search",data:function(){return{keywords:""}},methods:{handleSearch:function(t){t.preventDefault();var e=this.keywords;e?this.$router.push({path:"/search/".concat(e)}):alert("请输入关键字后查询")}}},v=m,b=(a("9469"),Object(o["a"])(v,f,g,!1,null,"51588590",null)),_=b.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top-250"},[a("h3",{staticClass:"title"},[t._v("豆瓣电影 TOP250")]),t._l(t.list,function(e){return a("router-link",{key:e.id,staticClass:"movie-item",attrs:{to:{name:"movie-detail",params:{movieId:e.id}},tag:"div",mid:e.id}},[a("div",{staticClass:"image-wrapper"},[a("img",{staticClass:"movie-image",attrs:{src:e.images.small,alt:e.alt}})]),a("p",{staticClass:"movie-title"},[t._v(t._s(e.title))]),a("div",{staticClass:"movie-rating"},[a("Stars",{attrs:{rating:e.rating.average,itemid:e.id}}),t._v(" "+t._s(e.rating.average)+"\n    ")],1)])})],2)},w=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"star",attrs:{id:t.itemid}})},C=[],k=(a("c5f6"),{name:"Stars",props:{rating:{type:Number},itemid:{type:String}},mounted:function(){this.calculatePosition()},methods:{calculatePosition:function(){var t=10-Math.round(Math.floor(2*this.rating)/2),e=document.getElementById(this.itemid);e&&(e.style.backgroundPosition="0px -"+11*t+"px")}}}),L=k,O=(a("9e55"),Object(o["a"])(L,j,C,!1,null,"5712717c",null)),S=O.exports,T={name:"Top250",components:{Stars:S},props:{list:{type:Array}},data:function(){return{}}},x=T,E=(a("1366"),Object(o["a"])(x,y,w,!1,null,"721a4343",null)),P=E.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"move-box"},[t._v("\n    加载中...\n  ")])])}],I={name:"Loading"},V=I,M=(a("ace5"),Object(o["a"])(V,$,D,!1,null,"67055310",null)),K=M.exports,H=a("bc3a"),A=a.n(H),q={name:"Home",components:{Search:_,Top250:P,Loading:K},data:function(){return{start:0,list:[],completeLoading:void 0,loadingVisible:!0}},created:function(){this.getData()},mounted:function(){var t=this;window.addEventListener("scroll",this.throttle(function(){t.completeLoading&&window.pageYOffset+window.innerHeight>document.documentElement.scrollHeight-300&&(console.log("新的一轮"),t.getData(),t.toggleLoading())},60),!1)},methods:{toggleLoading:function(){console.log("toggle ing    ",this.loadingVisible),this.loadingVisible=!this.loadingVisible},throttle:function(t,e){var a=null;return function(){clearTimeout(a),a=setTimeout(function(){t()},e)}},getData:function(){var t=this;console.log("Start",this.start),console.log("完成了吗？",this.completeLoading),this.completeLoading=!1,A.a.get("https://cors-anywhere.herokuapp.com/http://api.douban.com/v2/movie/top250?start="+this.start).then(function(e){var a;return console.dir(e.data.subjects),(a=t.list).push.apply(a,Object(h["a"])(e.data.subjects)),t.start+=20,A.a.get("https://cors-anywhere.herokuapp.com/http://api.douban.com/v2/movie/top250?start="+t.start)}).then(function(e){var a;return t.start+=20,(a=t.list).push.apply(a,Object(h["a"])(e.data.subjects)),t.start>250?(t.toggleLoading(),{data:"finished"}):A.a.get("https://cors-anywhere.herokuapp.com/http://api.douban.com/v2/movie/top250?start="+t.start)}).then(function(e){var a;"finished"===e.data?console.log("All finished"):(t.start+=20,t.completeLoading=!0,console.log("完成了吗？",t.completeLoading),(a=t.list).push.apply(a,Object(h["a"])(e.data.subjects)),t.toggleLoading())})}}},J=q,N=(a("2151"),Object(o["a"])(J,d,p,!1,null,"a96b8eda",null)),R=N.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.completed?t._e():a("div",{staticClass:"lds-hourglass"}),t.completed?a("div",{staticClass:"detail"},[a("div",{staticClass:"back-button",on:{click:t.backToPrevious}},[t._v("返回")]),a("div",{staticClass:"detail__image-wrapper"},[a("img",{staticClass:"detail__image",attrs:{src:t.image,alt:""}})]),a("div",{staticClass:"detail__content-wrapper"},[a("ul",{staticClass:"info"},[a("li",{staticClass:"title"},[t._v(t._s(t.title))]),a("li",{staticClass:"director"},[t._v("导演："+t._s(t.directors))]),a("li",{staticClass:"cast"},[t._v("主演："+t._s(t.casts))])]),a("div",{staticClass:"intro"},[a("p",{staticClass:"intro-title"},[t._v("简介")]),a("p",{staticClass:"intro-content"},[t._v("\n          "+t._s(t.intro)+"\n        ")])])])]):t._e()])},B=[],z=(a("f386"),a("7f7f"),{name:"Detail",props:{movieId:{type:String,default:""}},data:function(){return{image:"",title:"",directors:"",casts:"",intro:"",completed:!1}},methods:{backToPrevious:function(){this.$router.back()},getData:function(){var t=this;this.completed=!1,A.a.get("https://cors-anywhere.herokuapp.com/http://api.douban.com/v2/movie/subject/"+this.movieId).then(function(e){console.log(e.data),t.title=e.data.title,t.directors=e.data.directors.map(function(t){return t.name}).join("，"),t.casts=e.data.casts.map(function(t){return t.name}).join("，"),t.intro=e.data.summary,t.image=e.data.images.small,t.completed=!0})}},activated:function(){console.log(this.movieId,"获取详情"),this.getData(),console.log(this)},beforeDestroy:function(){console.log("beforeDestroy")}}),F=z,G=(a("a18d"),Object(o["a"])(F,Y,B,!1,null,"0e21a546",null)),Q=G.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"searchResult"},[a("div",{staticClass:"back-button",on:{click:t.backToPrevious}},[t._v("返回")]),a("span",{staticClass:"title"},[t._v("搜索：“"+t._s(t.searchKeywords)+"”")]),t._l(t.list,function(e){return a("router-link",{key:e.id,staticClass:"movie-item",attrs:{to:{name:"movie-detail",params:{movieId:e.id}},tag:"div",mid:e.id}},[a("div",{staticClass:"image-wrapper"},[a("img",{staticClass:"movie-image",attrs:{src:e.images.small,alt:e.alt}})]),a("p",{staticClass:"movie-title"},[t._v(t._s(e.title))]),a("div",{staticClass:"movie-rating"},[a("Stars",{attrs:{rating:e.rating.average,itemid:e.id}}),t._v(" "+t._s(e.rating.average)+"\n      ")],1)])})],2),t.loadingVisible?a("Loading"):t._e(),t.thisIsTheEnd?a("div",{staticClass:"end"},[t._v("到底了朋友")]):t._e()],1)},W=[],X={name:"SearhResults",props:{searchKeywords:{type:String,default:""}},data:function(){return{start:0,list:[],completeLoading:void 0,loadingVisible:!0,thisIsTheEnd:!1}},components:{Loading:K,Stars:S},methods:{toggleLoading:function(){console.log("toggle ing    ",this.loadingVisible),this.loadingVisible=!this.loadingVisible},backToPrevious:function(){this.$router.back()},throttle:function(t,e){var a=null;return function(){clearTimeout(a),a=setTimeout(function(){t()},e)}},getData:function(){var t=this;console.log("Start",this.start),console.log("完成了吗？",this.completeLoading),this.completeLoading=!1,A.a.get("https://cors-anywhere.herokuapp.com/http://api.douban.com/v2/movie/search?q=?"+this.searchKeywords+"&start="+this.start).then(function(e){var a;return!e.data.length&&(a=t.list).push.apply(a,Object(h["a"])(e.data.subjects)),e.data.subjects.length<20?(t.toggleLoading(),t.thisIsTheEnd=!0,{data:"finished"}):(t.start+=20,A.a.get("https://cors-anywhere.herokuapp.com/http://api.douban.com/v2/movie/search?q=?"+t.searchKeywords+"&start="+t.start))}).then(function(e){var a;return t.start+=20,!e.data.length&&(a=t.list).push.apply(a,Object(h["a"])(e.data.subjects)),"finished"===e.data?{data:"finished"}:e.data.subjects.length<20?(t.toggleLoading(),t.thisIsTheEnd=!0,{data:"finished"}):A.a.get("https://cors-anywhere.herokuapp.com/http://api.douban.com/v2/movie/search?q=?"+t.searchKeywords+"&start="+t.start)}).then(function(e){var a;!e.data.length&&(a=t.list).push.apply(a,Object(h["a"])(e.data.subjects)),t.start+=20,"finished"===e.data?console.log("All finished"):e.data.subjects.length<20?(t.toggleLoading(),t.thisIsTheEnd=!0,console.log("All finished")):(t.completeLoading=!0,t.toggleLoading())})}},beforeMount:function(){this.list=[]},activated:function(){var t=this;this.getData(),window.addEventListener("scroll",this.throttle(function(){t.completeLoading&&window.pageYOffset+window.innerHeight>document.documentElement.scrollHeight-300&&(console.log("新的一轮"),t.getData(),t.toggleLoading())},60),!1)}},Z=X,tt=(a("c20a"),Object(o["a"])(Z,U,W,!1,null,"1caf6a51",null)),et=tt.exports;i["a"].use(u["a"]);var at=new u["a"]({routes:[{path:"/",name:"home",component:R},{path:"/detail/:movieId",name:"movie-detail",component:Q,props:!0},{path:"/search/:searchKeywords",name:"search-result",component:et,props:!0},{path:"/about",name:"about"}]});i["a"].config.productionTip=!1,new i["a"]({router:at,render:function(t){return t(l)}}).$mount("#app")},"5a8b":function(t,e,a){},"7fcf":function(t,e,a){},"8c51":function(t,e,a){},9469:function(t,e,a){"use strict";var i=a("e49f"),n=a.n(i);n.a},"9e55":function(t,e,a){"use strict";var i=a("0487"),n=a.n(i);n.a},a18d:function(t,e,a){"use strict";var i=a("4875"),n=a.n(i);n.a},ace5:function(t,e,a){"use strict";var i=a("8c51"),n=a.n(i);n.a},c20a:function(t,e,a){"use strict";var i=a("2fea"),n=a.n(i);n.a},cd6f:function(t,e,a){},e49f:function(t,e,a){}});
//# sourceMappingURL=app.a2115074.js.map