webpackJsonp([0],{"54T4":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("l/JR"),s=a("ifZ0"),n=a("MyAN"),r={name:"BlogFilter",data:function(){return{labelType:"android",labelStr:"Android",archiveList:null,test:"123",countBlog:1,pageIndex:1,loadStatus:"加载中..."}},components:{MyPagination:s.a},mounted:function(){this.$route.query.id&&(this.labelType=this.$route.query.id,"android"==this.$route.query.id?this.countBlog=n.a.pageState.android:"html5"==this.$route.query.id?this.countBlog=n.a.pageState.html5:"javaWeb"==this.$route.query.id?this.countBlog=n.a.pageState.javaWeb:"tools"==this.$route.query.id?this.countBlog=n.a.pageState.tools:"life"==this.$route.query.id?this.countBlog=n.a.pageState.life:"beyond"==this.$route.query.id&&(this.countBlog=n.a.pageState.beyond)),this.$route.query.name&&(this.labelStr=this.$route.query.name),this.$route.query.pageIndex?this.pageIndex=this.$route.query.pageIndex:this.pageIndex=0,console.log(this.labelType+"---"+this.labelStr),this.getBlogsByType(this.pageIndex)},methods:{onChange:function(){},getBlogsByType:function(t){var e=this;e.loadStatus="加载中...",Object(i.f)(t,1,e.labelType).then(function(t){e.archiveList=t,e.formatBlogList(),0==e.archiveList.length&&(e.loadStatus="没有更多数据")}).catch(function(t){})},gotoRead:function(t){this.$router.push({name:"blogContent",query:{id:t}})},onPageSelect:function(t){this.getBlogsByType(t),console.log("parent-blogArchive-getPage:"+t)},formatBlogList:function(){if(null!=this.archiveList&&this.archiveList.length>0)for(var t=0;t<this.archiveList.length;t++)0==t?this.archiveList[t].fyear=this.archiveList[t].created_at.substring(0,4):t>0&&this.archiveList[t].created_at.substring(0,4)!=this.archiveList[t-1].created_at.substring(0,4)&&(this.archiveList[t].fyear=this.archiveList[t].created_at.substring(0,4))}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"post-archive"},[""!=t.labelStr?a("h1",{staticClass:"label-title"},[t._v("正在查看 "+t._s(t.labelStr)+" 下的文章")]):t._e(),t._v(" "),t._l(t.archiveList,function(e){return a("div",{staticClass:"archive-item",on:{click:function(a){return t.gotoRead(e.number)}}},[null!=e.fyear?a("h2",[t._v(t._s(e.fyear))]):t._e(),t._v(" "),a("i",{staticClass:"fa fa-wpforms",attrs:{"aria-hidden":"true"}}),t._v(" "),a("span",{staticClass:"date"},[t._v(t._s(t._f("formatGithubTime")(e.created_at)))]),t._v(" "),a("span",{staticClass:"title"},[t._v(t._s(e.title))])])}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:null==t.archiveList||0==t.archiveList.length,expression:"archiveList==null || archiveList.length==0"}],staticStyle:{color:"#888","text-align":"center"}},[t._v(t._s(t.loadStatus))]),t._v(" "),a("my-pagination",{attrs:{"page-count":t.countBlog},on:{onPageSelect:t.onPageSelect}})],2)},staticRenderFns:[]};var l=a("VU/8")(r,o,!1,function(t){a("5p3d")},"data-v-6bd46a84",null);e.default=l.exports},"5p3d":function(t,e){}});
//# sourceMappingURL=0.51c956a8a977a3a7fb6a.js.map