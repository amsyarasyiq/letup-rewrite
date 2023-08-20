(function(c,s,d,n,b,i,C,p,h,S){"use strict";function w(t,l){if(!(t instanceof l))throw new TypeError("Cannot call a class as a function")}function y(t,l){for(var e=0;e<l.length;e++){var a=l[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function L(t,l,e){return l&&y(t.prototype,l),e&&y(t,e),t}function P(t,l,e){return l in t?Object.defineProperty(t,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[l]=e,t}const{FormSection:o,FormInput:r,FormRow:g,FormSwitch:A,FormText:E}=i.Forms,N=d.findByStoreName("UserStore"),x=d.findByProps("showUserProfile"),R=n.stylesheet.createThemedStyleSheet({subText:{fontSize:14,marginLeft:16,marginRight:16,color:p.semanticColors.TEXT_MUTED},textLink:{color:p.semanticColors.TEXT_LINK}});function k(t){let{selection:l}=t;const e=C.useProxy(b.storage.selections[l]);return n.React.createElement(h.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},n.React.createElement(i.Button,{style:{margin:16},color:"brand",size:i.Button.Sizes.MEDIUM,look:i.Button.Looks.FILLED,onPress:async function(){x.showUserProfile({userId:N.getCurrentUser().id})},text:"Preview your profile"}),n.React.createElement(o,{title:"Basic",titleStyleType:"no_border"},n.React.createElement(r,{required:!0,autoFocus:!0,title:"Application Name",value:e.name,placeholder:"Discord",onChange:function(a){return e.name=a}}),n.React.createElement(r,{required:!0,title:"Application ID",value:e.application_id,placeholder:"1054951789318909972",onChange:function(a){return e.application_id=a},keyboardType:"numeric"}),n.React.createElement(r,{title:"Type",value:e.type,placeholder:"0",onChange:function(a){return e.type=a},keyboardType:"numeric"}),n.React.createElement(r,{title:"Details",value:e.details,placeholder:"Competitive",onChange:function(a){return e.details=a}}),n.React.createElement(r,{title:"State",value:e.state,placeholder:"Playing Solo",onChange:function(a){return e.state=a}})),n.React.createElement(o,{title:"Images"},n.React.createElement(r,{title:"Large Image Asset Key or URL",value:e.assets.large_image,placeholder:"large_image_here",onChange:function(a){return e.assets.large_image=a}}),n.React.createElement(r,{title:"Large Image Text",value:e.assets.large_text,placeholder:"Playing on Joe's lobby",disabled:!e.assets.large_image,onChange:function(a){return e.assets.large_text=a}}),n.React.createElement(r,{title:"Small Image Asset Key or URL",value:e.assets.small_image,placeholder:"small_image_here",onChange:function(a){return e.assets.small_image=a}}),n.React.createElement(r,{title:"Small Image Text",value:e.assets.small_text,placeholder:"Solo",disabled:!e.assets.small_image,onChange:function(a){return e.assets.small_text=a}})),n.React.createElement(E,{style:R.subText},"Image assets key can be either a Discord app asset's name or a URL to an image."),n.React.createElement(o,{title:"Timestamps"},n.React.createElement(g,{label:"Enable timestamps",subLabel:"Set whether to show timestamps or not",trailing:n.React.createElement(A,{value:e.timestamps._enabled,onValueChange:function(a){return e.timestamps._enabled=a}})}),n.React.createElement(r,{title:"Start Timestamp (milliseconds)",value:e.timestamps.start,placeholder:"1234567890",disabled:!e.timestamps._enabled,onChange:function(a){return e.timestamps.start=a},keyboardType:"numeric"}),n.React.createElement(r,{title:"End Timestamp (milliseconds)",value:e.timestamps.end,placeholder:"1234567890",disabled:!e.timestamps._enabled,onChange:function(a){return e.timestamps.end=a},keyboardType:"numeric"}),n.React.createElement(g,{label:"Use current time as start timestamp",subLabel:"This will override the start timestamp you set above",disabled:!e.timestamps._enabled,onPress:function(){return e.timestamps.start=String(Date.now())},trailing:g.Arrow})),n.React.createElement(E,{style:R.subText},"Leaving start timestamp blank will use the time the Discord started."),n.React.createElement(o,{title:"Buttons"},n.React.createElement(r,{title:"First Button Text",value:e.buttons[0].label,placeholder:"random link #1",onChange:function(a){return e.buttons[0].label=a}}),n.React.createElement(r,{title:"First Button URL",value:e.buttons[0].url,placeholder:"https://discord.com/vanityurl/dotcom/steakpants/flour/flower/index11.html",disabled:!e.buttons[0].label,onChange:function(a){return e.buttons[0].url=a}}),n.React.createElement(r,{title:"Second Button Text",value:e.buttons[1].label,placeholder:"random link #2",onChange:function(a){return e.buttons[1].label=a}}),n.React.createElement(r,{title:"Second Button URL",value:e.buttons[1].url,placeholder:"https://youtu.be/w0AOGeqOnFY",disabled:!e.buttons[1].label,onChange:function(a){return e.buttons[1].url=a}})))}const{FormText:O}=i.Forms,U=b.storage;function F(){async function t(){m.onUnload(),m.onLoad()}return React.createElement(h.TouchableOpacity,{onPress:t},React.createElement(O,{style:{marginRight:12}},"UPDATE"))}function D(){const t=n.NavigationNative.useNavigation();return S.useEffect(function(){t.setOptions({headerRight:F})},[]),React.createElement(k,{selection:U.selected})}function v(t){return t&&typeof t.length=="number"?t.length>0:t||t===0||t===!1}function B(t){return JSON.parse(JSON.stringify(t,function(l,e){if(e===t)return e;if(!(typeof l=="string"&&l.startsWith("_")))switch(typeof e){case"object":{if(Array.isArray(e)&&e.length===0)return;const a=Object.entries(e).filter(function(M){return v(M[1])});return a.length>0?Object.fromEntries(a):void 0}default:return v(e)?e:void 0}}))}var f;(function(t){t[t.PLAYING=0]="PLAYING",t[t.STREAMING=1]="STREAMING",t[t.LISTENING=2]="LISTENING",t[t.WATCHING=3]="WATCHING",t[t.COMPETING=5]="COMPETING"})(f||(f={}));const _=d.findByProps("getAssetIds"),T=Date.now(),u=s.plugin.storage;typeof u.selected?.length!="number"&&Object.assign(u,{selected:"default",selections:{default:G()}});function G(){return{name:"Discord",application_id:"1054951789318909972",flags:0,type:f.PLAYING,timestamps:{_enabled:!1,start:T},assets:{},buttons:[{},{}]}}async function I(t){if(typeof t!="object")throw new Error("Invalid activity");if(t){const l=t?.timestamps?._enabled;if(t=B(t),l?t.timestamps.start||=T:delete t.timestamps,t.assets){const e=[t.application_id,[t.assets.large_image,t.assets.small_image]];let a=_.getAssetIds(...e);a.length||(a=await _.fetchAssetIds(...e)),t.assets.large_image=a[0],t.assets.small_image=a[1]}t.buttons?.length?(t.buttons=t.buttons.filter(function(e){return e.label&&e.url}),t.buttons.length?Object.assign(t,{metadata:{button_urls:t.buttons.map(function(e){return e.url})},buttons:t.buttons.map(function(e){return e.label})}):delete t.buttons):delete t.buttons}return n.FluxDispatcher.dispatch({type:"LOCAL_ACTIVITY_UPDATE",activity:t,pid:1608,socketId:"RichPresence@Vendetta"}),t}var m=new(function(){function t(){w(this,t),P(this,"settings",D)}return L(t,[{key:"onLoad",value:function(){s.logger.log("Sending RPC request");const l=u.selections[u.selected];if(!l)throw new Error("Selected activity does not exist");I(l).then(function(e){s.logger.log("RPC request sent"),s.logger.log(e)}).catch(function(e){s.logger.error("An error occured while sending RPC request :("),s.logger.error(e?.stack??e)})}},{key:"onUnload",value:function(){s.logger.log("Stopping RPC request"),I(null)}}]),t}());return c.default=m,Object.defineProperty(c,"__esModule",{value:!0}),c})({},vendetta,vendetta.metro,vendetta.metro.common,vendetta.plugin,vendetta.ui.components,vendetta.storage,vendetta.ui,vendetta.metro.common.ReactNative,window.React);