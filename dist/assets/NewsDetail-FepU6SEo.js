import{_ as h,x as f,r as b,i as g,c as s,a as t,b as o,w as _,t as a,F as k,g as n,o as r,d as u}from"./index--5WWQTNR.js";import{u as y}from"./news-B2LeGt5o.js";import{F as N}from"./footer-AuyBQ_78.js";const x={class:"container"},B={key:0},T={"aria-label":"Breadcrumb Navigation"},C={class:"breadcrumb"},F={key:1,class:"loading"},D={__name:"NewsDetail",setup(S){const d=y(),p=f().params.id,e=b();g(()=>{const l=d.getNewsById(p);e.value=l});const v=()=>history.back();return(l,I)=>{var i;const m=n("van-nav-bar"),w=n("van-image"),c=n("router-link");return r(),s(k,null,[t("div",null,[o(m,{title:(i=e.value)==null?void 0:i.newsType,"left-text":"返回","left-arrow":"",onClickLeft:v},null,8,["title"]),o(w,{width:"100%",height:"100",src:"/news-banner2.jpeg"}),t("div",x,[e.value?(r(),s("div",B,[t("nav",T,[t("ol",C,[o(c,{to:"/home"},{default:_(()=>[u("首页")]),_:1}),o(c,{to:"/list/{{ news.newsType }}"},{default:_(()=>[u(a(e.value.newsType),1)]),_:1})])]),t("h1",null,a(e.value.title),1),t("span",null,a(e.value.author)+"--"+a(e.value.createTime)+"--浏览量"+a(e.value.browse),1),t("p",null,a(e.value.content),1)])):(r(),s("div",F," 加载中... "))])]),o(N)],64)}}},M=h(D,[["__scopeId","data-v-889c06ba"]]);export{M as default};
