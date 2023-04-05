(function(o,u,f,a,n,p,g,R,y){"use strict";function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function E(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),e}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const{FormSection:i,FormInput:l,FormRow:c,FormSwitch:x,FormText:_}=R.Forms,b=a.stylesheet.createThemedStyleSheet({subText:{fontSize:14,marginLeft:16,marginRight:16,color:g.semanticColors.TEXT_MUTED},textLink:{color:g.semanticColors.TEXT_LINK}});function C(){const e=p.useProxy(n.storage);return a.React.createElement(y.ScrollView,null,a.React.createElement(i,{title:"Basic"},a.React.createElement(l,{title:"Application Name",value:e.app_name,placeholder:"Vendetta",onChange:function(t){return e.app_name=t}}),a.React.createElement(l,{title:"Application ID",value:e.application_id,placeholder:"1054951789318909972",onChange:function(t){return e.application_id=t},keyboardType:"numeric"}),a.React.createElement(l,{title:"Type",value:e.type,placeholder:"0",onChange:function(t){return e.type=t},keyboardType:"numeric"}),a.React.createElement(l,{title:"Details",value:e.details,placeholder:"Competitive",onChange:function(t){return e.details=t}}),a.React.createElement(l,{title:"State",value:e.state,placeholder:"Playing Solo",onChange:function(t){return e.state=t}})),a.React.createElement(i,{title:"Images"},a.React.createElement(l,{title:"Large Image Asset Key or URL",value:e.large_image,placeholder:"large_image_here",onChange:function(t){return e.large_image=t}}),a.React.createElement(l,{title:"Large Image Text",value:e.large_image_text,placeholder:"Playing on Joe's lobby",disabled:!e.large_image,onChange:function(t){return e.large_image_text=t}}),a.React.createElement(l,{title:"Small Image Asset Key or URL",value:e.small_image,placeholder:"small_image_here",onChange:function(t){return e.small_image=t}}),a.React.createElement(l,{title:"Small Image Text",value:e.small_image_text,placeholder:"Solo",disabled:!e.small_image,onChange:function(t){return e.small_image_text=t}}),a.React.createElement(_,{style:b.subText},"Image assets key can be either a Discord app asset's name or a URL to an image.")),a.React.createElement(i,{title:"Timestamps"},a.React.createElement(c,{label:"Enable timestamps",subLabel:"Set whether to show timestamps or not",trailing:a.React.createElement(x,{value:e.enable_timestamps,onValueChange:function(t){return e.enable_timestamps=t}})}),a.React.createElement(l,{title:"Start Timestamp (seconds)",value:e.start_timestamp,placeholder:"1234567890",disabled:!e.enable_timestamps,onChange:function(t){return e.start_timestamp=t},keyboardType:"numeric"}),a.React.createElement(l,{title:"End Timestamp (seconds)",value:e.end_timestamp,placeholder:"1234567890",disabled:!e.enable_timestamps,onChange:function(t){return e.end_timestamp=t},keyboardType:"numeric"}),a.React.createElement(c,{label:"Use current time as start timestamp",subLabel:"This will override the start timestamp you set above",disabled:!e.enable_timestamps,onPress:function(){return e.start_timestamp=String(Date.now())},trailing:c.Arrow}),a.React.createElement(_,{style:b.subText},"Leaving start timestamp blank will use the time the Discord started.")),a.React.createElement(i,{title:"Buttons"},a.React.createElement(l,{title:"First Button Text",value:e.button1_text,placeholder:"random link #1",onChange:function(t){return e.button1_text=t}}),a.React.createElement(l,{title:"First Button URL",value:e.button1_URL,placeholder:"https://discord.com/vanityurl/dotcom/steakpants/flour/flower/index11.html",disabled:!e.button1_text,onChange:function(t){return e.button1_URL=t}}),a.React.createElement(l,{title:"Second Button Text",value:e.button2_text,placeholder:"random link #2",onChange:function(t){return e.button2_text=t}}),a.React.createElement(l,{title:"Second Button URL",value:e.button2_URL,placeholder:"https://youtu.be/w0AOGeqOnFY",disabled:!e.button2_text,onChange:function(t){return e.button2_URL=t}})))}const L=f.findByProps("getAssetIds");var m;(function(e){e[e.PLAYING=0]="PLAYING",e[e.STREAMING=1]="STREAMING",e[e.LISTENING=2]="LISTENING",e[e.WATCHING=3]="WATCHING",e[e.COMPETING=5]="COMPETING"})(m||(m={}));function I(){const e={name:n.storage.app_name||"Discord",application_id:n.storage.application_id||"1054951789318909972",flags:0,type:m.PLAYING,state:n.storage.state,details:n.storage.details};if(n.storage.enable_timestamps){const r={};r.start=Number(n.storage.start_timestamp)||Date.now(),isNaN(n.storage.end_timestamp)||(r.end=Number(n.storage.end_timestamp)),e.timestamps=r}const t={};return n.storage.large_image&&(t.large_image=n.storage.large_image,n.storage.large_image_text&&(t.large_text=n.storage.large_image_text)),n.storage.small_image&&(t.small_image=n.storage.small_image,n.storage.small_image_text&&(t.small_text=n.storage.small_image_text)),Object.keys(t).length&&(e.assets=t),n.storage.button1_text&&n.storage.button1_URL&&(e.buttons=[{label:n.storage.button1_text,url:n.storage.button1_URL}]),n.storage.button2_text&&n.storage.button2_URL&&(e.buttons??=[]).push({label:n.storage.button2_text,url:n.storage.button2_URL}),e}async function h(e){if(typeof e!="object")throw new Error("Invalid activity");if(e?.assets){const[t,r]=await L.getAssetIds(e.application_id,[e.assets.large_image,e.assets.small_image]);e.assets.large_image=t,e.assets.small_image=r}e?.buttons?.length&&(e.buttons=e.buttons.filter(function(t){return t.label&&t.url}),Object.assign(e,{metadata:{button_urls:e.buttons.map(function(t){return t.url})},buttons:e.buttons.map(function(t){return t.label})}));for(const t in e)(e[t]===void 0||e[t]===null)&&delete e[t],typeof e[t].length=="number"&&e[t].length===0&&delete e[t],typeof e[t]=="object"&&Object.keys(e[t]).length===0&&delete e[t],typeof e[t]=="object"&&e[t].length===0&&delete e[t];return a.FluxDispatcher.dispatch({type:"LOCAL_ACTIVITY_UPDATE",activity:e}),e}var S=new(function(){function e(){v(this,e),T(this,"settings",C)}return E(e,[{key:"onLoad",value:function(){u.logger.log("Sending RPC request"),h(I()).catch().then(function(t){u.logger.log("RPC request sent"),console.log(t)})}},{key:"onUnload",value:function(){u.logger.log("Stopping RPC request"),h(null)}}]),e}());return o.default=S,Object.defineProperty(o,"__esModule",{value:!0}),o})({},vendetta,vendetta.metro,vendetta.metro.common,vendetta.plugin,vendetta.storage,vendetta.ui,vendetta.ui.components,vendetta.metro.common.ReactNative);