import{_ as r,a as l}from"./MyFooter.b344e788.js";import{a as _,e as h,o as e,f as a,h as c,i as s,F as p,r as m,t as u}from"./entry.d8f9792a.js";const f={data(){return{datas:[],items:[],title:"Contact - ",description:void 0}},created(){fetch("/pages/pages.json").then(async t=>{this.datas=await t.json(),this.description=this.datas.privacy.replace(/<\/?[^>]+(>|$)/g,"").substring(0,100).trim()+"..."}).catch(t=>h("/")),fetch("/pages/1.json").then(async t=>{this.items=await t.json()}).catch(t=>{alert("Failed Get Data, Refresh This Page")})}},g={class:"container"},v={class:"row gx-3 gy-3"},y=s("div",{class:"p-4 mb-3 rounded",id:"adsboard"},null,-1),x=["innerHTML"],b={class:"col-md-3"},$={class:"position-sticky",style:{top:"2rem"}},j=s("div",{class:"p-4 mb-3 rounded",id:"adsbanner"},null,-1),F={class:"p-4"},M=s("h4",{class:"fst-italic"},"Recent Post",-1),T={class:"list-unstyled mb-0"},k=["href"];function w(t,B,H,L,n,D){const i=r,d=l;return e(),a("div",null,[c(i),s("div",g,[s("div",v,[y,s("div",{class:"col-md-9",innerHTML:n.datas.contact},null,8,x),s("div",b,[s("div",$,[j,s("div",F,[M,s("ol",T,[(e(!0),a(p,null,m(n.items.data,o=>(e(),a("li",null,[s("a",{href:o.slug,style:{"text-decoration":"none"}},u(o.title),9,k)]))),256))])])])])])]),c(d)])}const R=_(f,[["render",w]]);export{R as default};
