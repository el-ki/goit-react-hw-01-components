(this["webpackJsonpel-ki-goit-react-hw-01-components"]=this["webpackJsonpel-ki-goit-react-hw-01-components"]||[]).push([[0],{16:function(e,a,t){"use strict";t.r(a);var s=t(2),c=t.n(s),i=t(5),n=t.n(i),r=t(1),d=t.n(r),l=t.p+"static/media/default.ef982c75.png",b=t(0),o=function(e){var a=e.user;return Object(b.jsxs)("div",{className:"profile",children:[Object(b.jsxs)("div",{className:"description",children:[Object(b.jsx)("img",{src:a.avatar,alt:"User's avatar",className:"avatar"}),Object(b.jsx)("p",{className:"name",children:a.name}),Object(b.jsxs)("p",{className:"tag",children:["@",a.tag]}),Object(b.jsx)("p",{className:"location",children:a.location})]}),Object(b.jsxs)("ul",{className:"stats",children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{className:"label",children:"Followers"}),Object(b.jsx)("span",{className:"quantity",children:a.stats.followers})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{className:"label",children:"Views"}),Object(b.jsx)("span",{className:"quantity",children:a.stats.views})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{className:"label",children:"Likes"}),Object(b.jsx)("span",{className:"quantity",children:a.stats.likes})]})]})]})};o.defaultProps={avatar:l,name:d.a.string.isRequired,tag:d.a.string.isRequired,location:d.a.string.isRequired};var u=o,j=t(6),m=function(e){var a=e.stats,t=e.title;return Object(b.jsxs)("section",{className:"statistics",children:[t&&Object(b.jsx)("h2",{className:"title",children:t}),Object(b.jsx)("ul",{className:"stat-list",children:a.map((function(e){return Object(b.jsxs)("li",{className:"item",children:[Object(b.jsx)("span",{className:"label",children:e.label}),Object(b.jsx)("span",{className:"percentage",children:e.percentage})]},e.id)}))})]})};m.defaultProps={title:d.a.string,stats:d.a.arrayOf(d.a.shape({id:d.a.string.isRequired,label:d.a.string.isRequired,percentage:d.a.number.isRequired})).isRequired};var p=m,f=t(4),h=function(e){var a=e.avatar,t=e.name,s=e.isOnline;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{className:"status",children:["\u043a\u0440\u0443\u0436\u043e\u043a ",s?"\u0437\u0435\u043b\u0435\u043d\u044b\u0439":"\u043a\u0440\u0430\u0441\u043d\u044b\u0439"]}),Object(b.jsx)("img",{className:"avatar",src:a,width:"48",alt:"Friend's avatar"}),Object(b.jsx)("p",{className:"name",children:t})]})};h.defaultProps={avatar:l,name:d.a.string.isRequired,isOnline:d.a.bool.isRequired};var O=h,y=function(e){var a=e.friends;return Object(b.jsx)("ul",{children:a.map((function(e){var a=e.id,t=e.avatar,s=e.isOnline,c=e.name;return Object(b.jsx)("li",{className:"item",children:Object(b.jsx)(O,{isOnline:s,avatar:t,name:c})},a)}))})},v=t(7),x=function(e){var a=e.items;return Object(b.jsxs)("table",{className:"transaction-history",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Type"}),Object(b.jsx)("th",{children:"Amount"}),Object(b.jsx)("th",{children:"Currency"})]})}),Object(b.jsx)("tbody",{children:a.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.type}),Object(b.jsx)("td",{children:e.amount}),Object(b.jsx)("td",{children:e.currency})]},e.id)}))})]})};x.defaultProps={items:d.a.arrayOf(d.a.shape({type:d.a.string.isRequired,amount:d.a.number.isRequired,currency:d.a.number.isRequired,id:d.a.string.isRequired})).isRequired};var g=x,w=t(8),N=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"React Power"}),Object(b.jsx)(p,{title:"Upload stats",stats:f}),";",Object(b.jsx)(p,{stats:f}),";",Object(b.jsx)(u,{user:j}),Object(b.jsx)(y,{friends:v}),Object(b.jsx)(g,{items:w}),";"]})};n.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))},4:function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},6:function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},7:function(e){e.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},8:function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.f4ca3aa7.chunk.js.map