import{d as f,c,a as d,k as _,u as m,F as y,m as z,f as h,t as p,s as b,o as u,_ as w}from"./index-Kh9BNzRQ.js";const k=`---
title: Radio Biwak
image: /uploads/radio-biwak.webp
description: Kadr z radiowego spotkania i rozmowy o gwiazdach nad Bieszczadami.
date: 2024-08-02T20:00:00.000+02:00
order: 2
---
`,v=`---
title: Festiwal w Czarnej
image: /uploads/festiwal-czarna.jpg
description: Zdjecie z wydarzenia, podczas ktorego opowiadalismy o nocnym niebie.
date: 2024-08-03T20:00:00.000+02:00
order: 3
---
`,T=`---
title: Ksiezyc w zblizeniu
image: /uploads/image-moon-bhgnjsp0.jpg
description: Jedno z ujec wykonanych podczas naszych pokazow astronomicznych.
date: 2024-08-05T20:00:00.000+02:00
order: 5
---
`,j=Object.assign({"/content/gallery/2024-08-02-radio-biwak.md":k,"/content/gallery/2024-08-03-festiwal-czarna.md":v,"/content/gallery/2024-08-05-ksiezyc.md":T});function F(r){const e=r.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);if(!e)return{data:{},content:r};const[,i,l]=e,n={};return i.split(`
`).forEach(a=>{const o=a.indexOf(":");if(o===-1)return;const t=a.slice(0,o).trim(),s=a.slice(o+1).trim();t==="title"&&(n.title=s),t==="slug"&&(n.slug=s),t==="image"&&(n.image=$(s)),t==="description"&&(n.description=s),t==="date"&&(n.date=s),t==="order"&&(n.order=Number(s))}),{data:n,content:l.trim()}}function $(r){if(!r)return"";const e=r.trim();return e.startsWith("/")||e.startsWith("http://")||e.startsWith("https://")?e:`/${e.replace(/^\.?\//,"")}`}function x(r,e){var a;const{data:i,content:l}=F(r);if(!i.image)return null;const n=i.slug||((a=e.split("/").pop())==null?void 0:a.replace(".md",""))||"";return{title:i.title??"Bez tytulu",slug:n,image:i.image,description:i.description??(l||null),date:i.date??null,order:Number.isFinite(i.order)?i.order:0,path:e}}function B(){return Object.entries(j).map(([r,e])=>x(e,r)).filter(r=>r!==null).sort((r,e)=>{if(r.order!==e.order)return r.order-e.order;const i=r.date?new Date(r.date).getTime():0;return(e.date?new Date(e.date).getTime():0)-i})}const C={class:"gallery-page"},G={key:0,class:"gallery-grid"},O=["src","alt","data-source","data-description"],I={class:"gallery-caption"},D={key:0},E={key:1,class:"gallery-empty"},N=f({__name:"GalleryPage",setup(r){const e=B(),i={button:!0,fullscreen:!0,initialCoverage:.92,keyboard:!0,loading:!0,loop:!0,movable:!0,navbar:!1,rotatable:!1,scalable:!1,title:[1,(n,a)=>{var g;const o=(g=n.dataset.description)==null?void 0:g.trim(),t=n.alt.trim();return`${o?`${t} - ${o}`:t} (${a.naturalWidth} x ${a.naturalHeight})`}],toolbar:{zoomIn:!0,zoomOut:!0,oneToOne:!0,reset:!0,prev:!0,next:!0},transition:!0,url:"data-source"};function l(n){var t;if(n.target instanceof HTMLImageElement)return;const o=n.currentTarget;o instanceof HTMLElement&&((t=o.querySelector("img"))==null||t.click())}return(n,a)=>{const o=b("viewer");return u(),c("section",C,[a[1]||(a[1]=d("header",{class:"gallery-header"},[d("h1",null,"Galeria")],-1)),m(e).length?_((u(),c("div",G,[(u(!0),c(y,null,z(m(e),t=>(u(),c("figure",{key:t.slug,class:"gallery-card",onClick:l},[d("img",{src:t.image,alt:t.title,"data-source":t.image,"data-description":t.description||"",class:"gallery-image"},null,8,O),d("figcaption",I,[d("h2",null,p(t.title),1),t.description?(u(),c("p",D,p(t.description),1)):h("",!0)])]))),128))])),[[o,i,void 0,{static:!0}]]):(u(),c("section",E,a[0]||(a[0]=[d("h2",null,"Galeria jest pusta :)",-1)])))])}}}),W=w(N,[["__scopeId","data-v-49b96d3c"]]);export{W as default};
