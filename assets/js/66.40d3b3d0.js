(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{486:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("p",[s._v("信令服务器用于在WebRTC建立P2P连接过程中交换信令。\n"),a("br"),s._v("\n注意：不同信令服务器的节点即使播放同一个视频也无法进行P2P。")]),s._v(" "),a("h2",{attrs:{id:"自行部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自行部署"}},[s._v("#")]),s._v(" 自行部署")]),s._v(" "),a("p",[s._v("推荐自行部署信令服务器，以下为开源参考：\n\x3c!--")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/cdnbye/node-signaler",target:"_blank",rel:"noopener noreferrer"}},[s._v("node-signaler"),a("OutboundLink")],1),s._v(" (nodejs版，推荐)\n--\x3e")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cdnbye/cbsignal",target:"_blank",rel:"noopener noreferrer"}},[s._v("cbsignal"),a("OutboundLink")],1),s._v(" (Go语言编写，单机版)")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cdnbye/gosignaler-cluster",target:"_blank",rel:"noopener noreferrer"}},[s._v("gosignaler-cluster"),a("OutboundLink")],1),s._v(" (Go语言编写，集群版)")])]),s._v(" "),a("h2",{attrs:{id:"第三方免费信令服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三方免费信令服务"}},[s._v("#")]),s._v(" 第三方免费信令服务")]),s._v(" "),a("ul",[a("li",[s._v("'wss://signal.cdnbye.com' (中国节点，默认)")]),s._v(" "),a("li",[s._v("'wss://opensignal.cdnbye.com' （美国节点）")]),s._v(" "),a("li",[s._v("'wss://signalcloud.cdnbye.com' （德国节点）")]),s._v(" "),a("li",[s._v("'wss://opensignal.gcvow.top'  (中国节点，由猫云赞助)")]),s._v(" "),a("li",[s._v("'wss://sigyy.dianzhenkeji.com'  (中国节点，由大象新闻赞助)")])]),s._v(" "),a("h2",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[s._v("#")]),s._v(" 使用示例")]),s._v(" "),a("h3",{attrs:{id:"web-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-sdk"}},[s._v("#")]),s._v(" Web SDK")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" hlsjsConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    p2pConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        wsSignalerAddr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ws://your.signalservice.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Other p2pConfig options provided by hlsjs-p2p-engine")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Hls constructor is overriden by included bundle")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" hls "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Hls")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hlsjsConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Use `hls` just like the usual hls.js ...")]),s._v("\n")])])]),a("h3",{attrs:{id:"安卓sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安卓sdk"}},[s._v("#")]),s._v(" 安卓SDK")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("P2pConfig")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("P2pConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Builder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wsSignalerAddr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ws://your.signalservice.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("P2pEngine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("initEngine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" YOUR_TOKEN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"ios-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios-sdk"}},[s._v("#")]),s._v(" iOS SDK")]),s._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[s._v("CBP2pConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("config "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("CBP2pConfig defaultConfiguration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wsSignalerAddr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("@")]),s._v('"ws'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//your.signalservice.com";')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("engine "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("CBP2pEngine alloc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" initWithToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("YOUR_TOKEN andP2pConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);