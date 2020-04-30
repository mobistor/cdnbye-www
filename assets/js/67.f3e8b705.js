(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{529:function(t,e,a){"use strict";a.r(e);var s=a(4),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("CDNBye通过WebRTC datachannel技术和BT算法，在观看同一视频/直播的用户之间构建P2P网络，在节省带宽成本的同时，提升用户的播放体验。")]),t._v(" "),a("p",[t._v("采用本插件的前提是浏览器支持WebRTC (Chrome, Firefox, Opera, Safari)。")]),t._v(" "),a("h2",{attrs:{id:"在hls-js增加的新api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在hls-js增加的新api"}},[t._v("#")]),t._v(" 在Hls.js增加的新API")]),t._v(" "),a("h3",{attrs:{id:"hls-engineversion-static-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hls-engineversion-static-method"}},[t._v("#")]),t._v(" "),a("code",[t._v("Hls.engineVersion")]),t._v(" (static method)")]),t._v(" "),a("p",[t._v("当前插件的版本号")]),t._v(" "),a("h3",{attrs:{id:"hls-webrtc-support-static-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hls-webrtc-support-static-method"}},[t._v("#")]),t._v(" "),a("code",[t._v("Hls.WEBRTC_SUPPORT")]),t._v(" (static method)")]),t._v(" "),a("p",[t._v("判断当前浏览器是否支持WebRTC")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Hls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WEBRTC_SUPPORT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// WebRTC is supported")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use a fallback")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"实例化与参数配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例化与参数配置"}},[t._v("#")]),t._v(" 实例化与参数配置")]),t._v(" "),a("h3",{attrs:{id:"var-hls-new-hls-p2pconfig-opts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#var-hls-new-hls-p2pconfig-opts"}},[t._v("#")]),t._v(" "),a("code",[t._v("var hls = new Hls({p2pConfig: [opts]});")])]),t._v(" "),a("p",[t._v("创建一个新的"),a("code",[t._v("Hls")]),t._v("实例。")]),t._v(" "),a("h3",{attrs:{id:"var-engine-hls-p2pengine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#var-engine-hls-p2pengine"}},[t._v("#")]),t._v(" "),a("code",[t._v("var engine = hls.p2pEngine;")])]),t._v(" "),a("p",[t._v("从"),a("code",[t._v("Hls")]),t._v("实例中获取"),a("code",[t._v("P2PEngine")]),t._v("实例。")]),t._v(" "),a("p",[t._v("如果指定了"),a("code",[t._v("opts")]),t._v("，那么对应的默认值将会被覆盖。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("字段")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("logLevel")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string or boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'none'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("log的等级，分为warn、error、none，设为true等于warn，设为false等于none。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("live")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("直播或者点播模式，建议在点播模式下设为false，p2p插件会预缓存buffer以避免卡顿。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("wsSignalerAddr")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'wss://signal.cdnbye.com'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("信令服务器地址。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("announce")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'https://tracker.cdnbye.com/v1'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("tracker服务器地址。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("wsMaxRetries")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("15")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("websocket连接重试次数。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("wsReconnectInterval")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("30")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("websocket重连时间间隔。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("memoryCacheLimit")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('{"pc": 1024 * 1024 * 512, "mobile": 1024 * 1024 * 256}')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("p2p缓存的最大数据量，分为PC和mobile。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("p2pEnabled")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否开启P2P。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("wifiOnly")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否只在wifi和有线网络模式上传数据（建议在云端设置）。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("dcDownloadTimeout")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("25")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("p2p下载的最大超时时间。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("webRTCConfig")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{}")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("用于配置stun和datachannel的"),a("a",{attrs:{href:"https://github.com/feross/simple-peer",target:"_blank",rel:"noopener noreferrer"}},[t._v("字典"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("useHttpRange")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("在可能的情况下使用Http Range请求来补足p2p下载超时的剩余部分数据（直播模式下默认是true）。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("getStats")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("function")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("获取p2p统计信息，包括totalP2PDownloaded、totalP2PUploaded和totalHTTPDownloaded。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("getPeerId")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("function")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("获取本节点的Id，当从服务端获取到peerId时回调该事件。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("getPeersInfo")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("function")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("获取成功连接的节点的信息，当与新的节点成功建立p2p连接时回调该事件。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("channelId")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("function")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("标识channel的字段，同一个channel的用户可以共享数据。（参考高级用法）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("validateSegment")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("function")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("用于校验从其它节点下载的ts文件的合法性。")])])])]),t._v(" "),a("h2",{attrs:{id:"p2pengine-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#p2pengine-api"}},[t._v("#")]),t._v(" P2PEngine API")]),t._v(" "),a("h3",{attrs:{id:"p2pengine-version-static-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#p2pengine-version-static-method"}},[t._v("#")]),t._v(" "),a("code",[t._v("P2PEngine.version")]),t._v(" (static method)")]),t._v(" "),a("p",[t._v("获取"),a("code",[t._v("P2PEngine")]),t._v("的版本号。")]),t._v(" "),a("h3",{attrs:{id:"p2pengine-issupported-static-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#p2pengine-issupported-static-method"}},[t._v("#")]),t._v(" "),a("code",[t._v("P2PEngine.isSupported()")]),t._v(" (static method)")]),t._v(" "),a("p",[t._v("判断当前浏览器是否支持WebRTC data channel。")]),t._v(" "),a("h3",{attrs:{id:"var-engine-new-p2pengine-hlsjs-p2pconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#var-engine-new-p2pengine-hlsjs-p2pconfig"}},[t._v("#")]),t._v(" "),a("code",[t._v("var engine = new P2PEngine(hlsjs, p2pConfig);")])]),t._v(" "),a("p",[t._v("实例化"),a("code",[t._v("P2PEngine")]),t._v("。也可以从"),a("code",[t._v("Hls")]),t._v("实例获取"),a("code",[t._v("P2PEngine")]),t._v("实例：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hls")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" engine "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("p2pEngine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"engine-enablep2p"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#engine-enablep2p"}},[t._v("#")]),t._v(" "),a("code",[t._v("engine.enableP2P()")])]),t._v(" "),a("p",[t._v("在p2p暂停或未启动情况下启动p2p。")]),t._v(" "),a("h3",{attrs:{id:"engine-disablep2p"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#engine-disablep2p"}},[t._v("#")]),t._v(" "),a("code",[t._v("engine.disableP2P()")])]),t._v(" "),a("p",[t._v("停止p2p并释放内存。")]),t._v(" "),a("h3",{attrs:{id:"engine-destroy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#engine-destroy"}},[t._v("#")]),t._v(" "),a("code",[t._v("engine.destroy()")])]),t._v(" "),a("p",[t._v("停止p2p、销毁engine并释放内存。在Hls.js销毁时会自动调用。")]),t._v(" "),a("h2",{attrs:{id:"p2pengine事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#p2pengine事件"}},[t._v("#")]),t._v(" P2PEngine事件")]),t._v(" "),a("h3",{attrs:{id:"engine-on-peerid-function-peerid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-peerid-function-peerid"}},[t._v("#")]),t._v(" "),a("code",[t._v("engine.on('peerId', function (peerId) {})")])]),t._v(" "),a("p",[t._v("当从服务端获取到peerId时回调该事件。")]),t._v(" "),a("h3",{attrs:{id:"engine-on-peers-function-peers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-peers-function-peers"}},[t._v("#")]),t._v(" "),a("code",[t._v("engine.on('peers', function (peers) {})")])]),t._v(" "),a("p",[t._v("当与新的节点成功建立p2p连接时回调该事件。")]),t._v(" "),a("h3",{attrs:{id:"engine-on-stats-function-stats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-stats-function-stats"}},[t._v("#")]),t._v(" "),a("code",[t._v("engine.on('stats', function (stats) {})")])]),t._v(" "),a("p",[t._v("该回调函数可以获取p2p信息，包括："),a("br"),t._v("\nstats.totalHTTPDownloaded: 从HTTP(CDN)下载的数据量（单位KB）"),a("br"),t._v("\nstats.totalP2PDownloaded: 从P2P下载的数据量（单位KB）"),a("br"),t._v("\nstats.totalP2PUploaded: P2P上传的数据量（单位KB）")]),t._v(" "),a("h2",{attrs:{id:"高级用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级用法"}},[t._v("#")]),t._v(" 高级用法")]),t._v(" "),a("h3",{attrs:{id:"通过向p2pconfig传入getstats获取p2p下载信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过向p2pconfig传入getstats获取p2p下载信息"}},[t._v("#")]),t._v(" 通过向p2pConfig传入getStats获取p2p下载信息")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("p2pConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getStats")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("totalP2PDownloaded"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" totalP2PUploaded"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" totalHTTPDownloaded")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"通过向p2pconfig传入getpeerid获取本节点的id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过向p2pconfig传入getpeerid获取本节点的id"}},[t._v("#")]),t._v(" 通过向p2pConfig传入getPeerId获取本节点的Id")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("p2pConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getPeerId")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("peerId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"通过向p2pconfig传入getpeersinfo获取成功连接的节点的信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过向p2pconfig传入getpeersinfo获取成功连接的节点的信息"}},[t._v("#")]),t._v(" 通过向p2pConfig传入getPeersInfo获取成功连接的节点的信息")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("p2pConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getPeersInfo")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("peers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"解决动态m3u8路径问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决动态m3u8路径问题"}},[t._v("#")]),t._v(" 解决动态m3u8路径问题")]),t._v(" "),a("p",[t._v("某些流媒体提供商的m3u8是动态生成的，不同节点的m3u8地址不一样，例如example.com/clientId1/file.m3u8和example.com/clientId2/file.m3u8,\n而本插件默认使用m3u8作为channelId。这时候就要构造一个共同的chanelId，使实际观看同一直播/视频的节点处在相同频道中。"),a("code",[t._v("强烈建议在chanelId中加入唯一标识符，防止与其他频道产生冲突。")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("p2pConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("channelId")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("m3u8Url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" formatedUrl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YOUR_UNIQUE_ID'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m3u8Url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 忽略差异部分，构造一个一致的channelId")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" formatedUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),t._v(" "),a("h3",{attrs:{id:"配置stun服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置stun服务器"}},[t._v("#")]),t._v(" 配置STUN服务器")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("p2pConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    webRTCConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// custom webrtc configuration (used by RTCPeerConnection constructor)")]),t._v("\n            iceServers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" urls"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stun:stun.l.google.com:19302'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" urls"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stun:global.stun.twilio.com:3478?transport=udp'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"允许http-range请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#允许http-range请求"}},[t._v("#")]),t._v(" 允许Http Range请求")]),t._v(" "),a("p",[t._v("当对等端上行带宽不够时，可能导致p2p传输超时而转向http下载，原本p2p下载的数据无法复用。Http Range请求用于补足p2p下载超时的剩余部分数据，要开启Http Range，首先需要源服务器支持，请参考"),a("RouterLink",{attrs:{to:"/views/m3u8.html#允许http-range请求"}},[t._v("允许Http Range请求")]),t._v("，然后增加以下配置：")],1),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("p2pConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    useHttpRange"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"切片合法性校验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切片合法性校验"}},[t._v("#")]),t._v(" 切片合法性校验")]),t._v(" "),a("p",[t._v("有时候我们需要校验从节点下载的切片的合法性（类似bittorrent的哈希校验）。\nCDNBye提供了一个钩子函数，可以回调下载的切片供开发者进行校验。用于校验的\n哈希表建议直接从服务器下载，开发者可以通过程序计算每个ts文件的哈希并存储于\n特定的文件中或者直接嵌入到m3u8文件中。如果校验失败，直接在回调函数中\n返回false即可。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("p2pConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("validateSegment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" buffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hash "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hashFile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" hash "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("md5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"在线调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在线调试"}},[t._v("#")]),t._v(" 在线调试")]),t._v(" "),a("p",[t._v("CDNBye提供了两个查询参数用于在线调试：")]),t._v(" "),a("ul",[a("li",[t._v("如果要在调试的网页打印log，只需要在url中加入查询参数"),a("code",[t._v("_debug=1")]),t._v("，例如"),a("code",[t._v("http://your_website.com?_debug=1")]),t._v("，即可在console中显示日志信息。")]),t._v(" "),a("li",[t._v("在已经开启P2P的情况下，要使调试的网页临时关闭P2P，只需要在url中加入查询参数"),a("code",[t._v("_p2p=0")]),t._v("即可，例如"),a("code",[t._v("http://your_website.com?_p2p=0")]),t._v("。")])])])}),[],!1,null,null,null);e.default=n.exports}}]);