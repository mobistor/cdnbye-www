(window.webpackJsonp=window.webpackJsonp||[]).push([[7,13],{367:function(t,e,n){"use strict";var r=n(0),i=n(368);r({target:"String",proto:!0,forced:n(369)("link")},{link:function(t){return i(this,"a","href",t)}})},368:function(t,e,n){var r=n(11),i=/"/g;t.exports=function(t,e,n,a){var o=String(r(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),s+">"+o+"</"+e+">"}},369:function(t,e,n){var r=n(1);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},393:function(t,e,n){"use strict";var r=n(0),i=n(112),a=n(35),o=n(12),s=n(13),u=n(113),c=n(79),l=n(53),f=n(21),h=l("splice"),p=f("splice",{ACCESSORS:!0,0:0,1:2}),g=Math.max,d=Math.min;r({target:"Array",proto:!0,forced:!h||!p},{splice:function(t,e){var n,r,l,f,h,p,m=s(this),v=o(m.length),k=i(t,v),_=arguments.length;if(0===_?n=r=0:1===_?(n=0,r=v-k):(n=_-2,r=d(g(a(e),0),v-k)),v+n-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(l=u(m,r),f=0;f<r;f++)(h=k+f)in m&&c(l,f,m[h]);if(l.length=r,n<r){for(f=k;f<v-r;f++)p=f+n,(h=f+r)in m?m[p]=m[h]:delete m[p];for(f=v;f>v-r+n;f--)delete m[f-1]}else if(n>r)for(f=v-r;f>k;f--)p=f+n-1,(h=f+r-1)in m?m[p]=m[h]:delete m[p];for(f=0;f<n;f++)m[f+k]=arguments[f+2];return m.length=v-r+n,l}})},421:function(t,e,n){},428:function(t,e,n){"use strict";n.r(e);n(180),n(77),n(367),n(16),n(54),n(76),n(183),n(111),n(34),n(26),n(184),n(33),n(185),n(55);var r=/#.*$/,i=/\.(md|html)$/,a=/\/$/,o=/^[a-z]+:/i;function s(t){return decodeURI(t).replace(r,"").replace(i,"")}function u(t){return o.test(t)}function c(t){if(u(t))return t;var e=t.match(r),n=e?e[0]:"",i=s(t);return a.test(i)?t:i+".html"+n}var l={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return c(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return t=this.link,/^mailto:/.test(t)||function(t){return/^tel:/.test(t)}(this.link);var t},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!u(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:u(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":""}},methods:{focusoutAction:function(){this.$emit("focusout")}}},f=n(4),h=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.default=h.exports},467:function(t,e,n){"use strict";var r=n(421);n.n(r).a},478:function(t,e,n){"use strict";n.r(e);n(109),n(76),n(183),n(111),n(34),n(80),n(25),n(393),n(78),n(182),n(28),n(181),n(26),n(186),n(114),n(33),n(185),n(110),n(115);var r=n(66),i={components:{NavLink:n(428).default},data:function(){return{downloads:0}},computed:{features:function(){return this.$frontmatter.features},heroImageStyle:function(){return this.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"}}},created:function(){var t=this,e=new Date,n=e.getFullYear(),r=e.getMonth()+1,i=e.getDate();this.npmPackageDownloads("vuepress-theme-reco","2018-09-12:".concat(n,"-").concat(r,"-").concat(i)).then((function(e){t.downloads=t.toThousandslsFilter(e)}))},methods:{openNew:function(){open(location.href)},toThousandslsFilter:function(t){var e=String(t);if(""===e||null==e)return"";var n=/\./g.test(e)?e.slice(0,e.indexOf(".")):e,r=/\./g.test(e)?e.substring(e.indexOf(".")):"";return(+n||0).toString().replace(/^-?\d+/g,(function(t){return t.replace(/(?=(?!\b)(\d{3})+$)/g,",")}))+r},npmPackageDownloads:function(t,e){return t=this._handlePackages(t),e=this._handleDateRange(e),this._getDownloadsOfDateRange(t,e)},_getDownloadsOfDateRange:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var i,a,o,s;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=0,!Array.isArray(e)){r.next=9;break}return a=[],e.map((function(e){a.push(n._fetch(t,e))})),r.next=6,Promise.all(a);case 6:return o=r.sent,i=o.reduce((function(t,e){return t+e.downloads}),0),r.abrupt("return",i);case 9:return r.next=11,n._fetch(t,e);case 11:return s=r.sent,i=s.downloads,r.abrupt("return",i);case 14:case"end":return r.stop()}}),r)})))()},_fetch:function(t,e){var n=this;return new Promise((function(r,i){fetch("".concat("https://api.npmjs.org/downloads/point/").concat(e,"/").concat(t)).then(n._parseJSON).then((function(t){r(t)})).catch((function(t){i(t)}))}))},_parseJSON:function(t){return t.json()},_handleDateRange:function(t){if(t.indexOf(":")>-1){var e=t.split(":"),n=e,r=new Date(e[1]).getTime()-new Date(e[0]).getTime(),i=parseInt(r/31536e6);if(i>0){for(var a=0;a<i;a++){var o=this._getDate(n[a]);n.splice(a+1,0,o)}for(var s=0,u=n.length;s<u-1;s++)n[s]="".concat(n[s],":").concat(n[s+1]);return n.length=i+1,n}return t}return t},_getDate:function(t){var e=t.split("-");return e[0]=Number(e[0])+1,e.join("-")},_handlePackages:function(t){return Array.isArray(t)?"-,".concat(t.join(",")):t}}},a=(n(467),n(4)),o=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"home-page-one-wrapper"},[n("section",{staticClass:"description"},[n("Demo"),t._v(" "),n("div",{staticClass:"action-button",on:{click:t.openNew}},[t._v(t._s(t.$frontmatter.actionText))])],1),t._v(" "),t.features&&t.features.length?n("div",{staticClass:"features"},t._l(t.features,(function(e,r){return n("div",{key:r,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e()])}),[],!1,null,"2c1ce857",null);e.default=o.exports}}]);