(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{79029:function(e,t,n){var r=n(42242).Symbol;e.exports=r},9121:function(e){function arrayMap(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}e.exports=arrayMap},30696:function(e){function asciiToArray(e){return e.split("")}e.exports=asciiToArray},86714:function(e,t,n){var r=n(79029),o=n(35078),i=n(76276),c=r?r.toStringTag:void 0;function baseGetTag(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":c&&c in Object(e)?o(e):i(e)}e.exports=baseGetTag},74932:function(e){function baseSlice(e,t,n){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(n=n>o?o:n)<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var i=Array(o);++r<o;)i[r]=e[r+t];return i}e.exports=baseSlice},13511:function(e,t,n){var r=n(79029),o=n(9121),i=n(12068),c=n(71087),u=1/0,a=r?r.prototype:void 0,l=a?a.toString:void 0;function baseToString(e){if("string"==typeof e)return e;if(i(e))return o(e,baseToString)+"";if(c(e))return l?l.call(e):"";var t=e+"";return"0"==t&&1/e==-u?"-0":t}e.exports=baseToString},54298:function(e,t,n){var r=n(74932);function castSlice(e,t,n){var o=e.length;return n=void 0===n?o:n,!t&&n>=o?e:r(e,t,n)}e.exports=castSlice},12937:function(e,t,n){var r=n(54298),o=n(57564),i=n(885),c=n(60665);function createCaseFirst(e){return function(t){var n=o(t=c(t))?i(t):void 0,u=n?n[0]:t.charAt(0),a=n?r(n,1).join(""):t.slice(1);return u[e]()+a}}e.exports=createCaseFirst},66503:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},35078:function(e,t,n){var r=n(79029),o=Object.prototype,i=o.hasOwnProperty,c=o.toString,u=r?r.toStringTag:void 0;function getRawTag(e){var t=i.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(e){}var o=c.call(e);return r&&(t?e[u]=n:delete e[u]),o}e.exports=getRawTag},57564:function(e){var t=RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");function hasUnicode(e){return t.test(e)}e.exports=hasUnicode},76276:function(e){var t=Object.prototype.toString;function objectToString(e){return t.call(e)}e.exports=objectToString},42242:function(e,t,n){var r=n(66503),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},885:function(e,t,n){var r=n(30696),o=n(57564),i=n(28358);function stringToArray(e){return o(e)?i(e):r(e)}e.exports=stringToArray},28358:function(e){var t="\ud800-\udfff",n="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",r="\ud83c[\udffb-\udfff]",o="[^"+t+"]",i="(?:\ud83c[\udde6-\uddff]){2}",c="[\ud800-\udbff][\udc00-\udfff]",u="(?:"+n+"|"+r+")?",a="[\\ufe0e\\ufe0f]?",l="(?:\\u200d(?:"+[o,i,c].join("|")+")"+a+u+")*",f=RegExp(r+"(?="+r+")|(?:"+[o+n+"?",n,i,c,"["+t+"]"].join("|")+")"+(a+u+l),"g");function unicodeToArray(e){return e.match(f)||[]}e.exports=unicodeToArray},45652:function(e,t,n){var r=n(60665),o=n(21008);function capitalize(e){return o(r(e).toLowerCase())}e.exports=capitalize},12068:function(e){var t=Array.isArray;e.exports=t},12387:function(e){function isObjectLike(e){return null!=e&&"object"==typeof e}e.exports=isObjectLike},71087:function(e,t,n){var r=n(86714),o=n(12387);function isSymbol(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}e.exports=isSymbol},60665:function(e,t,n){var r=n(13511);function toString(e){return null==e?"":r(e)}e.exports=toString},21008:function(e,t,n){var r=n(12937)("toUpperCase");e.exports=r},13428:function(e,t,n){"use strict";function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return _extends}})},49473:function(e,t,n){"use strict";n.d(t,{Cp:function(){return hide},RR:function(){return flip},cv:function(){return offset},dp:function(){return size},dr:function(){return limitShift},oo:function(){return computePosition},uY:function(){return shift},x7:function(){return arrow}});var r=n(9082);function computeCoordsFromPlacement(e,t,n){let o,{reference:i,floating:c}=e,u=(0,r.Qq)(t),a=(0,r.Wh)(t),l=(0,r.I4)(a),f=(0,r.k3)(t),s="y"===u,d=i.x+i.width/2-c.width/2,p=i.y+i.height/2-c.height/2,m=i[l]/2-c[l]/2;switch(f){case"top":o={x:d,y:i.y-c.height};break;case"bottom":o={x:d,y:i.y+i.height};break;case"right":o={x:i.x+i.width,y:p};break;case"left":o={x:i.x-c.width,y:p};break;default:o={x:i.x,y:i.y}}switch((0,r.hp)(t)){case"start":o[a]-=m*(n&&s?-1:1);break;case"end":o[a]+=m*(n&&s?-1:1)}return o}let computePosition=async(e,t,n)=>{let{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:c}=n,u=i.filter(Boolean),a=await (null==c.isRTL?void 0:c.isRTL(t)),l=await c.getElementRects({reference:e,floating:t,strategy:o}),{x:f,y:s}=computeCoordsFromPlacement(l,r,a),d=r,p={},m=0;for(let n=0;n<u.length;n++){let{name:i,fn:g}=u[n],{x:v,y:b,data:h,reset:$}=await g({x:f,y:s,initialPlacement:r,placement:d,strategy:o,middlewareData:p,rects:l,platform:c,elements:{reference:e,floating:t}});if(f=null!=v?v:f,s=null!=b?b:s,p={...p,[i]:{...p[i],...h}},$&&m<=50){m++,"object"==typeof $&&($.placement&&(d=$.placement),$.rects&&(l=!0===$.rects?await c.getElementRects({reference:e,floating:t,strategy:o}):$.rects),{x:f,y:s}=computeCoordsFromPlacement(l,d,a)),n=-1;continue}}return{x:f,y:s,placement:d,strategy:o,middlewareData:p}};async function detectOverflow(e,t){var n;void 0===t&&(t={});let{x:o,y:i,platform:c,rects:u,elements:a,strategy:l}=e,{boundary:f="clippingAncestors",rootBoundary:s="viewport",elementContext:d="floating",altBoundary:p=!1,padding:m=0}=(0,r.ku)(t,e),g=(0,r.yd)(m),v=a[p?"floating"===d?"reference":"floating":d],b=(0,r.JB)(await c.getClippingRect({element:null==(n=await (null==c.isElement?void 0:c.isElement(v)))||n?v:v.contextElement||await (null==c.getDocumentElement?void 0:c.getDocumentElement(a.floating)),boundary:f,rootBoundary:s,strategy:l})),h="floating"===d?{...u.floating,x:o,y:i}:u.reference,$=await (null==c.getOffsetParent?void 0:c.getOffsetParent(a.floating)),x=await (null==c.isElement?void 0:c.isElement($))&&await (null==c.getScale?void 0:c.getScale($))||{x:1,y:1},y=(0,r.JB)(c.convertOffsetParentRelativeRectToViewportRelativeRect?await c.convertOffsetParentRelativeRectToViewportRelativeRect({rect:h,offsetParent:$,strategy:l}):h);return{top:(b.top-y.top+g.top)/x.y,bottom:(y.bottom-b.bottom+g.bottom)/x.y,left:(b.left-y.left+g.left)/x.x,right:(y.right-b.right+g.right)/x.x}}let arrow=e=>({name:"arrow",options:e,async fn(t){let{x:n,y:o,placement:i,rects:c,platform:u,elements:a,middlewareData:l}=t,{element:f,padding:s=0}=(0,r.ku)(e,t)||{};if(null==f)return{};let d=(0,r.yd)(s),p={x:n,y:o},m=(0,r.Wh)(i),g=(0,r.I4)(m),v=await u.getDimensions(f),b="y"===m,h=b?"clientHeight":"clientWidth",$=c.reference[g]+c.reference[m]-p[m]-c.floating[g],x=p[m]-c.reference[m],y=await (null==u.getOffsetParent?void 0:u.getOffsetParent(f)),w=y?y[h]:0;w&&await (null==u.isElement?void 0:u.isElement(y))||(w=a.floating[h]||c.floating[g]);let A=w/2-v[g]/2-1,S=(0,r.VV)(d[b?"top":"left"],A),O=(0,r.VV)(d[b?"bottom":"right"],A),N=w-v[g]-O,E=w/2-v[g]/2+($/2-x/2),T=(0,r.uZ)(S,E,N),P=!l.arrow&&null!=(0,r.hp)(i)&&E!=T&&c.reference[g]/2-(E<S?S:O)-v[g]/2<0,C=P?E<S?E-S:E-N:0;return{[m]:p[m]+C,data:{[m]:T,centerOffset:E-T-C,...P&&{alignmentOffset:C}},reset:P}}}),flip=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,o,i,c,u;let{placement:a,middlewareData:l,rects:f,initialPlacement:s,platform:d,elements:p}=t,{mainAxis:m=!0,crossAxis:g=!0,fallbackPlacements:v,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:$=!0,...x}=(0,r.ku)(e,t);if(null!=(n=l.arrow)&&n.alignmentOffset)return{};let y=(0,r.k3)(a),w=(0,r.k3)(s)===s,A=await (null==d.isRTL?void 0:d.isRTL(p.floating)),S=v||(w||!$?[(0,r.pw)(s)]:(0,r.gy)(s));v||"none"===h||S.push(...(0,r.KX)(s,$,h,A));let O=[s,...S],N=await detectOverflow(t,x),E=[],T=(null==(o=l.flip)?void 0:o.overflows)||[];if(m&&E.push(N[y]),g){let e=(0,r.i8)(a,f,A);E.push(N[e[0]],N[e[1]])}if(T=[...T,{placement:a,overflows:E}],!E.every(e=>e<=0)){let e=((null==(i=l.flip)?void 0:i.index)||0)+1,t=O[e];if(t)return{data:{index:e,overflows:T},reset:{placement:t}};let n=null==(c=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:c.placement;if(!n)switch(b){case"bestFit":{let e=null==(u=T.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:u[0];e&&(n=e);break}case"initialPlacement":n=s}if(a!==n)return{reset:{placement:n}}}return{}}}};function getSideOffsets(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function isAnySideFullyClipped(e){return r.mA.some(t=>e[t]>=0)}let hide=function(e){return void 0===e&&(e={}),{name:"hide",options:e,async fn(t){let{rects:n}=t,{strategy:o="referenceHidden",...i}=(0,r.ku)(e,t);switch(o){case"referenceHidden":{let e=await detectOverflow(t,{...i,elementContext:"reference"}),r=getSideOffsets(e,n.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:isAnySideFullyClipped(r)}}}case"escaped":{let e=await detectOverflow(t,{...i,altBoundary:!0}),r=getSideOffsets(e,n.floating);return{data:{escapedOffsets:r,escaped:isAnySideFullyClipped(r)}}}default:return{}}}}};async function convertValueToCoords(e,t){let{placement:n,platform:o,elements:i}=e,c=await (null==o.isRTL?void 0:o.isRTL(i.floating)),u=(0,r.k3)(n),a=(0,r.hp)(n),l="y"===(0,r.Qq)(n),f=["left","top"].includes(u)?-1:1,s=c&&l?-1:1,d=(0,r.ku)(t,e),{mainAxis:p,crossAxis:m,alignmentAxis:g}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&"number"==typeof g&&(m="end"===a?-1*g:g),l?{x:m*s,y:p*f}:{x:p*f,y:m*s}}let offset=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){let{x:n,y:r}=t,o=await convertValueToCoords(t,e);return{x:n+o.x,y:r+o.y,data:o}}}},shift=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){let{x:n,y:o,placement:i}=t,{mainAxis:c=!0,crossAxis:u=!1,limiter:a={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=(0,r.ku)(e,t),f={x:n,y:o},s=await detectOverflow(t,l),d=(0,r.Qq)((0,r.k3)(i)),p=(0,r.Rn)(d),m=f[p],g=f[d];if(c){let e=m+s["y"===p?"top":"left"],t=m-s["y"===p?"bottom":"right"];m=(0,r.uZ)(e,m,t)}if(u){let e="y"===d?"top":"left",t="y"===d?"bottom":"right",n=g+s[e],o=g-s[t];g=(0,r.uZ)(n,g,o)}let v=a.fn({...t,[p]:m,[d]:g});return{...v,data:{x:v.x-n,y:v.y-o}}}}},limitShift=function(e){return void 0===e&&(e={}),{options:e,fn(t){let{x:n,y:o,placement:i,rects:c,middlewareData:u}=t,{offset:a=0,mainAxis:l=!0,crossAxis:f=!0}=(0,r.ku)(e,t),s={x:n,y:o},d=(0,r.Qq)(i),p=(0,r.Rn)(d),m=s[p],g=s[d],v=(0,r.ku)(a,t),b="number"==typeof v?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(l){let e="y"===p?"height":"width",t=c.reference[p]-c.floating[e]+b.mainAxis,n=c.reference[p]+c.reference[e]-b.mainAxis;m<t?m=t:m>n&&(m=n)}if(f){var h,$;let e="y"===p?"width":"height",t=["top","left"].includes((0,r.k3)(i)),n=c.reference[d]-c.floating[e]+(t&&(null==(h=u.offset)?void 0:h[d])||0)+(t?0:b.crossAxis),o=c.reference[d]+c.reference[e]+(t?0:(null==($=u.offset)?void 0:$[d])||0)-(t?b.crossAxis:0);g<n?g=n:g>o&&(g=o)}return{[p]:m,[d]:g}}}},size=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){let n,o;let{placement:i,rects:c,platform:u,elements:a}=t,{apply:l=()=>{},...f}=(0,r.ku)(e,t),s=await detectOverflow(t,f),d=(0,r.k3)(i),p=(0,r.hp)(i),m="y"===(0,r.Qq)(i),{width:g,height:v}=c.floating;"top"===d||"bottom"===d?(n=d,o=p===(await (null==u.isRTL?void 0:u.isRTL(a.floating))?"start":"end")?"left":"right"):(o=d,n="end"===p?"top":"bottom");let b=v-s[n],h=g-s[o],$=!t.middlewareData.shift,x=b,y=h;if(m){let e=g-s.left-s.right;y=p||$?(0,r.VV)(h,e):e}else{let e=v-s.top-s.bottom;x=p||$?(0,r.VV)(b,e):e}if($&&!p){let e=(0,r.Fp)(s.left,0),t=(0,r.Fp)(s.right,0),n=(0,r.Fp)(s.top,0),o=(0,r.Fp)(s.bottom,0);m?y=g-2*(0!==e||0!==t?e+t:(0,r.Fp)(s.left,s.right)):x=v-2*(0!==n||0!==o?n+o:(0,r.Fp)(s.top,s.bottom))}await l({...t,availableWidth:y,availableHeight:x});let w=await u.getDimensions(a.floating);return g!==w.width||v!==w.height?{reset:{rects:!0}}:{}}}}},9082:function(e,t,n){"use strict";n.d(t,{Fp:function(){return i},GW:function(){return u},I4:function(){return getAxisLength},JB:function(){return rectToClientRect},KX:function(){return getOppositeAxisPlacements},NM:function(){return c},Qq:function(){return getSideAxis},Rn:function(){return getOppositeAxis},VV:function(){return o},Wh:function(){return getAlignmentAxis},gy:function(){return getExpandedPlacements},hp:function(){return getAlignment},i8:function(){return getAlignmentSides},k3:function(){return getSide},ku:function(){return evaluate},mA:function(){return r},pw:function(){return getOppositePlacement},uZ:function(){return clamp},yd:function(){return getPaddingObject},ze:function(){return createCoords}});let r=["top","right","bottom","left"],o=Math.min,i=Math.max,c=Math.round,u=Math.floor,createCoords=e=>({x:e,y:e}),a={left:"right",right:"left",bottom:"top",top:"bottom"},l={start:"end",end:"start"};function clamp(e,t,n){return i(e,o(t,n))}function evaluate(e,t){return"function"==typeof e?e(t):e}function getSide(e){return e.split("-")[0]}function getAlignment(e){return e.split("-")[1]}function getOppositeAxis(e){return"x"===e?"y":"x"}function getAxisLength(e){return"y"===e?"height":"width"}function getSideAxis(e){return["top","bottom"].includes(getSide(e))?"y":"x"}function getAlignmentAxis(e){return getOppositeAxis(getSideAxis(e))}function getAlignmentSides(e,t,n){void 0===n&&(n=!1);let r=getAlignment(e),o=getAlignmentAxis(e),i=getAxisLength(o),c="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(c=getOppositePlacement(c)),[c,getOppositePlacement(c)]}function getExpandedPlacements(e){let t=getOppositePlacement(e);return[getOppositeAlignmentPlacement(e),t,getOppositeAlignmentPlacement(t)]}function getOppositeAlignmentPlacement(e){return e.replace(/start|end/g,e=>l[e])}function getSideList(e,t,n){let r=["left","right"],o=["right","left"];switch(e){case"top":case"bottom":if(n)return t?o:r;return t?r:o;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}function getOppositeAxisPlacements(e,t,n,r){let o=getAlignment(e),i=getSideList(getSide(e),"start"===n,r);return o&&(i=i.map(e=>e+"-"+o),t&&(i=i.concat(i.map(getOppositeAlignmentPlacement)))),i}function getOppositePlacement(e){return e.replace(/left|right|bottom|top/g,e=>a[e])}function expandPaddingObject(e){return{top:0,right:0,bottom:0,left:0,...e}}function getPaddingObject(e){return"number"!=typeof e?expandPaddingObject(e):{top:e,right:e,bottom:e,left:e}}function rectToClientRect(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}},96025:function(e,t,n){"use strict";function getNodeName(e){return isNode(e)?(e.nodeName||"").toLowerCase():"#document"}function getWindow(e){var t;return(null==e?void 0:null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function getDocumentElement(e){var t;return null==(t=(isNode(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function isNode(e){return e instanceof Node||e instanceof getWindow(e).Node}function isElement(e){return e instanceof Element||e instanceof getWindow(e).Element}function isHTMLElement(e){return e instanceof HTMLElement||e instanceof getWindow(e).HTMLElement}function isShadowRoot(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof getWindow(e).ShadowRoot)}function isOverflowElement(e){let{overflow:t,overflowX:n,overflowY:r,display:o}=getComputedStyle(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function isTableElement(e){return["table","td","th"].includes(getNodeName(e))}function isContainingBlock(e){let t=isWebKit(),n=getComputedStyle(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(e=>(n.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(n.contain||"").includes(e))}function getContainingBlock(e){let t=getParentNode(e);for(;isHTMLElement(t)&&!isLastTraversableNode(t);){if(isContainingBlock(t))return t;t=getParentNode(t)}return null}function isWebKit(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function isLastTraversableNode(e){return["html","body","#document"].includes(getNodeName(e))}function getComputedStyle(e){return getWindow(e).getComputedStyle(e)}function getNodeScroll(e){return isElement(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function getParentNode(e){if("html"===getNodeName(e))return e;let t=e.assignedSlot||e.parentNode||isShadowRoot(e)&&e.host||getDocumentElement(e);return isShadowRoot(t)?t.host:t}function getNearestOverflowAncestor(e){let t=getParentNode(e);return isLastTraversableNode(t)?e.ownerDocument?e.ownerDocument.body:e.body:isHTMLElement(t)&&isOverflowElement(t)?t:getNearestOverflowAncestor(t)}function getOverflowAncestors(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);let o=getNearestOverflowAncestor(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),c=getWindow(o);return i?t.concat(c,c.visualViewport||[],isOverflowElement(o)?o:[],c.frameElement&&n?getOverflowAncestors(c.frameElement):[]):t.concat(o,getOverflowAncestors(o,[],n))}n.d(t,{Dx:function(){return getComputedStyle},Jj:function(){return getWindow},Kx:function(){return getOverflowAncestors},Lw:function(){return getNodeScroll},Ow:function(){return getParentNode},Pf:function(){return isWebKit},Py:function(){return isLastTraversableNode},Re:function(){return isHTMLElement},Ze:function(){return isTableElement},ao:function(){return isOverflowElement},gQ:function(){return getContainingBlock},hT:function(){return isContainingBlock},kK:function(){return isElement},tF:function(){return getDocumentElement},wk:function(){return getNodeName}})},85744:function(e,t,n){"use strict";function $e42e1063c40fb3ef$export$b9ecd428b558ff10(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}n.d(t,{M:function(){return $e42e1063c40fb3ef$export$b9ecd428b558ff10}})},42210:function(e,t,n){"use strict";n.d(t,{F:function(){return $6ed0406888f73fc4$export$43e446d32b3d21af},e:function(){return $6ed0406888f73fc4$export$c7b2cbe3552a0d05}});var r=n(2265);function $6ed0406888f73fc4$var$setRef(e,t){"function"==typeof e?e(t):null!=e&&(e.current=t)}function $6ed0406888f73fc4$export$43e446d32b3d21af(...e){return t=>e.forEach(e=>$6ed0406888f73fc4$var$setRef(e,t))}function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...e){return(0,r.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...e),e)}},56989:function(e,t,n){"use strict";n.d(t,{b:function(){return $c512c27ab02ef895$export$50c7b4e9d9f19c1}});var r=n(2265);function $c512c27ab02ef895$export$50c7b4e9d9f19c1(e,t=[]){let n=[];function $c512c27ab02ef895$export$fd42f52fd3ae1109(t,o){let i=(0,r.createContext)(o),c=n.length;function Provider(t){let{scope:n,children:o,...u}=t,a=(null==n?void 0:n[e][c])||i,l=(0,r.useMemo)(()=>u,Object.values(u));return(0,r.createElement)(a.Provider,{value:l},o)}function useContext(n,u){let a=(null==u?void 0:u[e][c])||i,l=(0,r.useContext)(a);if(l)return l;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}return n=[...n,o],Provider.displayName=t+"Provider",[Provider,useContext]}let createScope=()=>{let t=n.map(e=>(0,r.createContext)(e));return function(n){let o=(null==n?void 0:n[e])||t;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return createScope.scopeName=e,[$c512c27ab02ef895$export$fd42f52fd3ae1109,$c512c27ab02ef895$var$composeContextScopes(createScope,...t)]}function $c512c27ab02ef895$var$composeContextScopes(...e){let t=e[0];if(1===e.length)return t;let createScope1=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e),i=o[`__scope${r}`];return{...t,...i}},{});return(0,r.useMemo)(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return createScope1.scopeName=t.scopeName,createScope1}},85606:function(e,t,n){"use strict";n.d(t,{z:function(){return $921a889cee6df7e8$export$99c2b779aa4e8b8b}});var r=n(2265),o=n(54887),i=n(42210),c=n(51030);function $fe963b355347cc68$export$3e6543de14f8614f(e,t){return(0,r.useReducer)((e,n)=>{let r=t[e][n];return null!=r?r:e},e)}let $921a889cee6df7e8$export$99c2b779aa4e8b8b=e=>{let{present:t,children:n}=e,o=$921a889cee6df7e8$var$usePresence(t),c="function"==typeof n?n({present:o.isPresent}):r.Children.only(n),u=(0,i.e)(o.ref,c.ref),a="function"==typeof n;return a||o.isPresent?(0,r.cloneElement)(c,{ref:u}):null};function $921a889cee6df7e8$var$usePresence(e){let[t,n]=(0,r.useState)(),i=(0,r.useRef)({}),u=(0,r.useRef)(e),a=(0,r.useRef)("none"),l=e?"mounted":"unmounted",[f,s]=$fe963b355347cc68$export$3e6543de14f8614f(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return(0,r.useEffect)(()=>{let e=$921a889cee6df7e8$var$getAnimationName(i.current);a.current="mounted"===f?e:"none"},[f]),(0,c.b)(()=>{let t=i.current,n=u.current,r=n!==e;if(r){let r=a.current,o=$921a889cee6df7e8$var$getAnimationName(t);e?s("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?s("UNMOUNT"):n&&r!==o?s("ANIMATION_OUT"):s("UNMOUNT"),u.current=e}},[e,s]),(0,c.b)(()=>{if(t){let handleAnimationEnd=e=>{let n=$921a889cee6df7e8$var$getAnimationName(i.current),r=n.includes(e.animationName);e.target===t&&r&&(0,o.flushSync)(()=>s("ANIMATION_END"))},handleAnimationStart=e=>{e.target===t&&(a.current=$921a889cee6df7e8$var$getAnimationName(i.current))};return t.addEventListener("animationstart",handleAnimationStart),t.addEventListener("animationcancel",handleAnimationEnd),t.addEventListener("animationend",handleAnimationEnd),()=>{t.removeEventListener("animationstart",handleAnimationStart),t.removeEventListener("animationcancel",handleAnimationEnd),t.removeEventListener("animationend",handleAnimationEnd)}}s("ANIMATION_END")},[t,s]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:(0,r.useCallback)(e=>{e&&(i.current=getComputedStyle(e)),n(e)},[])}}function $921a889cee6df7e8$var$getAnimationName(e){return(null==e?void 0:e.animationName)||"none"}$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName="Presence"},9381:function(e,t,n){"use strict";n.d(t,{WV:function(){return u},jH:function(){return $8927f6f2acc4f386$export$6d1a0317bde7de7f}});var r=n(13428),o=n(2265),i=n(54887),c=n(67256);let u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=(0,o.forwardRef)((e,n)=>{let{asChild:i,...u}=e,a=i?c.g7:t;return(0,o.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,o.createElement)(a,(0,r.Z)({},u,{ref:n}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function $8927f6f2acc4f386$export$6d1a0317bde7de7f(e,t){e&&(0,i.flushSync)(()=>e.dispatchEvent(t))}},67256:function(e,t,n){"use strict";n.d(t,{A4:function(){return $5e63c961fc1ce211$export$d9f1ccf0bdb05d45},g7:function(){return c}});var r=n(13428),o=n(2265),i=n(42210);let c=(0,o.forwardRef)((e,t)=>{let{children:n,...i}=e,c=o.Children.toArray(n),a=c.find($5e63c961fc1ce211$var$isSlottable);if(a){let e=a.props.children,n=c.map(t=>t!==a?t:o.Children.count(e)>1?o.Children.only(null):(0,o.isValidElement)(e)?e.props.children:null);return(0,o.createElement)(u,(0,r.Z)({},i,{ref:t}),(0,o.isValidElement)(e)?(0,o.cloneElement)(e,void 0,n):null)}return(0,o.createElement)(u,(0,r.Z)({},i,{ref:t}),n)});c.displayName="Slot";let u=(0,o.forwardRef)((e,t)=>{let{children:n,...r}=e;return(0,o.isValidElement)(n)?(0,o.cloneElement)(n,{...$5e63c961fc1ce211$var$mergeProps(r,n.props),ref:t?(0,i.F)(t,n.ref):n.ref}):o.Children.count(n)>1?o.Children.only(null):null});u.displayName="SlotClone";let $5e63c961fc1ce211$export$d9f1ccf0bdb05d45=({children:e})=>(0,o.createElement)(o.Fragment,null,e);function $5e63c961fc1ce211$var$isSlottable(e){return(0,o.isValidElement)(e)&&e.type===$5e63c961fc1ce211$export$d9f1ccf0bdb05d45}function $5e63c961fc1ce211$var$mergeProps(e,t){let n={...t};for(let r in t){let o=e[r],i=t[r],c=/^on[A-Z]/.test(r);c?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}},16459:function(e,t,n){"use strict";n.d(t,{W:function(){return $b1b2314f5f9a1d84$export$25bec8c6f54ee79a}});var r=n(2265);function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(e){let t=(0,r.useRef)(e);return(0,r.useEffect)(()=>{t.current=e}),(0,r.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}},73763:function(e,t,n){"use strict";n.d(t,{T:function(){return $71cd76cc60e0454e$export$6f32135080cb4c3}});var r=n(2265),o=n(16459);function $71cd76cc60e0454e$export$6f32135080cb4c3({prop:e,defaultProp:t,onChange:n=()=>{}}){let[i,c]=$71cd76cc60e0454e$var$useUncontrolledState({defaultProp:t,onChange:n}),u=void 0!==e,a=u?e:i,l=(0,o.W)(n),f=(0,r.useCallback)(t=>{if(u){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else c(t)},[u,e,c,l]);return[a,f]}function $71cd76cc60e0454e$var$useUncontrolledState({defaultProp:e,onChange:t}){let n=(0,r.useState)(e),[i]=n,c=(0,r.useRef)(i),u=(0,o.W)(t);return(0,r.useEffect)(()=>{c.current!==i&&(u(i),c.current=i)},[i,c,u]),n}},51030:function(e,t,n){"use strict";n.d(t,{b:function(){return o}});var r=n(2265);let o=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}},94977:function(e,t,n){"use strict";n.d(t,{t:function(){return $db6c3485150b8e66$export$1ab7ae714698c4b8}});var r=n(2265),o=n(51030);function $db6c3485150b8e66$export$1ab7ae714698c4b8(e){let[t,n]=(0,r.useState)(void 0);return(0,o.b)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,o;if(!Array.isArray(t)||!t.length)return;let i=t[0];if("borderBoxSize"in i){let e=i.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,o=t.blockSize}else r=e.offsetWidth,o=e.offsetHeight;n({width:r,height:o})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}}}]);