(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{291:function(t,r,e){"use strict";e.r(r);var n={},l=e(55),component=Object(l.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("บ้านน่ารู้")]),t._v(" "),e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item active"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("หน้าแรก "),e("span",{staticClass:"sr-only"})])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"/catname"}},[t._v("หมวดหมู่สินค้า")])]),t._v(" "),e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n          Dropdown\n        ")]),t._v(" "),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),e("div",{staticClass:"dropdown-divider"}),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link disabled",attrs:{href:"#"}},[t._v("Disabled")])])]),t._v(" "),e("form",{staticClass:"form-inline my-2 my-lg-0"},[e("input",{staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"}}),t._v(" "),e("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"}},[t._v("\n        Search\n      ")])])])])}],!1,null,null,null);r.default=component.exports},292:function(t,r,e){var content=e(294);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(58).default)("04d0dea8",content,!0,{sourceMap:!1})},293:function(t,r,e){"use strict";e(292)},294:function(t,r,e){(r=e(57)(!1)).push([t.i,".productimg[data-v-2610ed94]{width:200px;height:200px}.card-title[data-v-2610ed94]{font-size:16px}.card[data-v-2610ed94]{text-align:center}",""]),t.exports=r},305:function(t,r,e){"use strict";e.r(r);e(16),e(46);var n=e(19),l={asyncData:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://apihomepro.webwithdad.com/product_api/api/v1/Product/").then((function(t){return t.json()}));case 2:return r=t.sent,t.abrupt("return",{products:r});case 4:case"end":return t.stop()}}),t)})))()}},c=(e(293),e(55)),component=Object(c.a)(l,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("Headbar"),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.products.results,(function(r){return e("div",{key:r.id,staticClass:"card",staticStyle:{width:"13rem",margin:"10px"}},[e("img",{staticClass:"card-img-top",staticStyle:{width:"200px",height:"200px"},attrs:{src:r.imgurl1,alt:"Card image cap"}}),t._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(r.name))]),t._v(" "),e("p",{staticClass:"card-text"},[t._v("\n            ราคา "+t._s(r.price)+" บาท\n          ")]),t._v(" "),e("a",{staticClass:"btn  btn-primary",attrs:{href:"/"+r.sku}},[t._v("ดูรายละเอียดสินค้า")])])])})),0)])],1)}),[],!1,null,"2610ed94",null);r.default=component.exports;installComponents(component,{Headbar:e(291).default})}}]);