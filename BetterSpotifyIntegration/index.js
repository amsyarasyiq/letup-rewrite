(function(a,i,l,y,f,c){"use strict";const p=i.findByProps("useStateFromStores"),s=i.findByStoreName("SpotifyStore"),d=i.findByProps("Sizes","Looks"),m=i.findByProps("play","sync");function v(e){const r=p.useStateFromStores([s],function(){return s.getActivity()?.party?.id}),t=e.isCurrentUser||e.activity?.party?.id===r;return React.createElement(c.View,{pointerEvents:t?"none":"auto"},React.createElement(d,{text:t?"You are already along for this ride":"Listen Along",size:d.Sizes.SMALL,style:{marginTop:12,backgroundColor:e.activityButtonColor,opacity:t?.5:1},renderIcon:function(){return React.createElement(c.Image,{style:{height:16,width:16,marginRight:8,tintColor:"white"},source:f.getAssetIDByName("ic_headphone")})},onPress:function(){return void m.sync(e.activity,e.user.id)}}))}let u;var h={onLoad(){u=l.before("default",i.findByName("UserProfileSection",!1),function(e){let[r]=e;if(r?.title?.includes?.("Spotify")||r?.activity?.type!==2)return;const t=y.findInReactTree(r.children,function(n){return n?.style?.padding===0}),o=t?.children?.findIndex?.(function(n){return n?.type?.name==="Actions"});if(o&&o!==-1){const n=t.children[o];t.children[o]=React.createElement(React.Fragment,null,n,React.createElement(v,n.props))}})},onUnload(){u?.()}};return a.default=h,Object.defineProperty(a,"__esModule",{value:!0}),a})({},vendetta.metro,vendetta.patcher,vendetta.utils,vendetta.ui.assets,vendetta.metro.common.ReactNative);
