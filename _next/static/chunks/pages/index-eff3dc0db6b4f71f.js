(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{9208:function(A,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9556)}])},4763:function(A,e,t){"use strict";t.d(e,{EH:function(){return w},Sx:function(){return B},Y2:function(){return E},YL:function(){return h},Yu:function(){return R},rn:function(){return u},t3:function(){return m},vh:function(){return b},z1:function(){return v}});var a=t(6529);let i="".concat(a.QY).concat(a.dV),l="[^".concat(i,"]"),n="[".concat(i,"]"),c="(?:".concat(l).concat(n,"*)"),s=RegExp("[^0-9".concat(i,"]"),"g"),r=RegExp("[^0-9\\.".concat(i,"]"),"g");RegExp("[^A-Z0-9".concat(i,"]"),"g");let g=RegExp("".concat(l,"+"),"g");function o(A,e){return A.replace(RegExp("^(".concat(n,"*").concat(c,"{").concat(e,"})(.*)$")),(A,e,t)=>e+t.replace(g,""))}RegExp("".concat(n,"+"),"g");let d=RegExp("(".concat(c,")(?=(?:").concat(c,"{3})+$)"),"g"),m={getRawText:A=>A.replace(s,""),getFormattedText:A=>A.replace(s,"").replace(d,"$1".concat(","))},u={getRawText:A=>o(A.replace(s,""),13),getFormattedText:A=>o(A.replace(s,""),13).replace(d,"$1".concat(","))},h=function(){for(var A=arguments.length,e=Array(A),t=0;t<A;t++)e[t]=arguments[t];return{getFormattedText:A=>A.replace(r,"").split(".").map((A,t)=>o(A,e[t])).join(".")}}(4,2),x=RegExp("^(".concat(n,"*").concat(c,"{4})(").concat(c,"{2})?")),b={getFormattedText:A=>o(A.replace(s,""),8).replace(x,(A,e,t)=>"".concat(e,"/")+(t?"".concat(t,"/"):""))},j=RegExp("^(".concat(n,"*").concat(c,"{4})(").concat(c,"{3})?")),v={getFormattedText:A=>o(A.replace(s,""),11).replace(j,(A,e,t)=>"".concat(e," ")+(t?"".concat(t," "):"")),getRawText:A=>o(A.replace(s,""),11)},f=RegExp("^(".concat(n,"*").concat(c,"{3})(").concat(c,"{6})?")),E={getFormattedText:A=>o(A.replace(s,""),10).replace(f,(A,e,t)=>"".concat(e," ")+(t?"".concat(t," "):"")),getRawText:A=>o(A.replace(s,""),10)},p=RegExp("^(".concat(n,"*").concat(c,"{4})(").concat(c,"{4})?(").concat(c,"{4})?")),w={getFormattedText:A=>o(A.replace(s,""),16).replace(p,(A,e,t,a)=>"".concat(e,"-")+(t?"".concat(t,"-"):"")+(a?"".concat(a,"-"):"")),getRawText:A=>o(A.replace(s,""),16)},N=RegExp("^(".concat(n,"*").concat(c,"{4})(").concat(c,"{4})?(").concat(c,"{4})?(").concat(c,"{4})?(").concat(c,"{4})?(").concat(c,"{4})?")),B={getFormattedText:A=>o("IR"+A.replace(s,""),26).replace(N,(A,e,t,a,i,l,n)=>"".concat(e," ")+(t?"".concat(t," "):"")+(a?"".concat(a," "):"")+(i?"".concat(i," "):"")+(l?"".concat(l," "):"")+(n?"".concat(n," "):"")),getRawText:A=>o("IR"+A.replace(s,""),26)};function R(A){return A.toFixed(2)}},6529:function(A,e,t){"use strict";t.d(e,{Gn:function(){return d},KR:function(){return o},QY:function(){return c},Vz:function(){return g},dV:function(){return s}});var a=t(5893),i=t(7616),l=t(1442),n=t(7294);let c="",s="",r=RegExp("[".concat(c).concat(s,"]"),"g");function g(A){var e,t,a,i;let[l,n]="backward"===A.selectionDirection?[s,c]:[c,s];return A.value.substring(0,null!==(e=A.selectionStart)&&void 0!==e?e:0)+l+A.value.substring(null!==(t=A.selectionStart)&&void 0!==t?t:0,null!==(a=A.selectionEnd)&&void 0!==a?a:0)+n+A.value.substring(null!==(i=A.selectionEnd)&&void 0!==i?i:0)}function o(A){let e=A.replace(r,""),t=A.indexOf(c),a=A.indexOf(c);return -1===t&&-1===a?{value:e,selectionStart:null,selectionEnd:null,selectionDirection:null}:(-1===t&&(t=a),-1===a&&(a=t),t<=a)?{value:e,selectionStart:t,selectionEnd:a,selectionDirection:"forward"}:{value:e,selectionStart:a,selectionEnd:t,selectionDirection:"backward"}}let d=(0,n.forwardRef)(function(A,e){let{inputRef:t,selectionValue:c,value:s,...r}=A,g=(0,l.G)(t),d=(0,n.useRef)(),m=o(null!=c?c:"");return(0,n.useLayoutEffect)(()=>{var e,t,a;let i=g.current;if(null===m.selectionStart||null===i){d.current=void 0;return}let l=d.current;d.current=m,d.current.version=A.version,(void 0===l||l.selectionStart!==m.selectionStart||l.selectionEnd!==m.selectionEnd||l.selectionDirection!==m.selectionDirection||l.value!==m.value||l.version!==A.version)&&(i.selectionStart!==m.selectionStart||i.selectionEnd!==m.selectionEnd||(null!==(e=i.selectionDirection)&&void 0!==e?e:"none")!==(null!==(t=m.selectionDirection)&&void 0!==t?t:"none"))&&i.setSelectionRange(m.selectionStart,m.selectionEnd,null!==(a=m.selectionDirection)&&void 0!==a?a:void 0)}),(0,a.jsx)(i.Z,{ref:e,inputRef:g,value:void 0===c?s:m.value,...r})})},1442:function(A,e,t){"use strict";t.d(e,{G:function(){return n}});var a=t(7294),i=t(5608);function l(A,e){null!=A&&("current"in A?A.current=e:A(e))}function n(A,e){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=(0,i.GK)(()=>({value:t,ref:A,outRef:{get current(){return n.value},set current(value){n.value=value,l(A,value),null==e||e(value)}}}));return(0,a.useLayoutEffect)(()=>(null!==n.value&&l(A,n.value),n.ref=A,()=>l(A,null)),[A,n]),n.outRef}},4006:function(A,e,t){"use strict";t.d(e,{J:function(){return n},V:function(){return l}});let a=/[۰-۹]/g,i=/[0-9]/g;function l(A){return A.replace(i,A=>String.fromCharCode(A.charCodeAt(0)-48+1776))}function n(A){return A.replace(a,A=>String.fromCharCode(A.charCodeAt(0)-1776+48))}},9556:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return I}});var a=t(5893),i=t(3321),l=t(7665),n=t(8115),c=t(5549),s=t(9392),r=t(4763),g=t(6010),o=t(9186),d=t(4006),m=t(5675),u=t.n(m),h={src:"/_next/static/media/back-1.aab107ad.jpg",height:1110,width:2e3,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAACAgMBAAAAAAAAAAAAAAAAAQIREyEx0f/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAWEQEBAQAAAAAAAAAAAAAAAAARAAH/2gAMAwEAAhEDEQA/AJApRSrFB6679AADrMZf/9k=",blurWidth:8,blurHeight:4},x={src:"/_next/static/media/back-2.3f21b7fb.jpg",height:1143,width:2e3,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAYEAEBAQEBAAAAAAAAAAAAAAABABECUf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCOKPAYb7JIL//Z",blurWidth:8,blurHeight:5},b={src:"/_next/static/media/gi-enamad.89cc59fd.png",height:259,width:366,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAPFBMVEVwXGo9RJSGlskWF13ljiRhbbAlKoFFT5wbHXZjb7BbZqlkcbOlt90WGnXV6v84QJEZHXdUXqRMUp2ImcxxlDx9AAAAFHRSTlMBkzcWU63PTzhXarwfoxLGmIcsV3nLR6wAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAwSURBVAiZHca3EQAgDACxJ9rktP+uHKgSQI7Ck46aH7On4sGNoFY8dsVOqCCk0hxcGAcA+/+IdjcAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6},j={src:"/_next/static/media/gi-vguild.7ed64975.png",height:362,width:316,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAZlBMVEVMaXGHgH97dXRVa3pPuPNOvvx2bGpwxfFztdxdSkRm1f+CtNKF0PpVv/til7ZxYFuimJZyf4tu///x//9QPDaup6ZfdYR9qMN3nbUan+kIfcJnf5BgVlUSjtQKmem/uLc5MTEzHxkSBER0AAAAGHRSTlMA/vv50/3+UHX+Mf79tPf9++cRBP7+1p4971vpAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAPklEQVQImQXBBQKAIAAAsaPBbinr/590A5z2QNOnO2nHkE1nrogKMbfCooKtzygpn9ynIHDHu9XZw+rLufADVcYC+XHUCmcAAAAASUVORK5CYII=",blurWidth:7,blurHeight:8},v={src:"/_next/static/media/gold-pieces.c4494425.png",height:257,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAANlBMVEVMaXEAAACDazGehDqVeze+mT0GAwBSQBxwXSaGcDNsVSh0XigCAACcfj3RtF6qiDfUv3OyijzLb02bAAAADnRSTlMAPobmnfUkEkNv1/owt2l5t08AAAAJcEhZcwAALiMAAC4jAXilP3YAAAAoSURBVAiZBcEJAgAQCADBRakc4f+fNQNWt7jBGjffESgzm2oYdDcP+BC7AN/D5zlyAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},f={src:"/_next/static/media/icon-auth.adc38ac1.png",height:224,width:225,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEVMaXH+/v7+/v7+/v7+/v79/f3+/v7+/v7+/v7+/v7+/v7+/v7+/v743tpWAAAADXRSTlMASYovBxM6m3mtIm1lG/zWJwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAADVJREFUCJkFwYcBACAMwzCnu8D/9yKR03YDuE+pB0yofBLGVdUB10pmBGHbtgc4kvs6kJ6c/imrARl7ldg8AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},E={src:"/_next/static/media/icon-buy.34409aba.png",height:210,width:212,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEX///9MaXH///////////////////////////////////////////////////8s/zaxAAAAD3RSTlMOAJRZb8Z/IqONNkfftSxMZoB0AAAACXBIWXMAAC4jAAAuIwF4pT92AAAAOElEQVQImRXGyQ3AMAzAMMlOnKvt/uMWAfgg8x1uFDNdyM1+ysDT6OnEEQxOID1irQ+tWVGirV8/JQkBAPrGwXwAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},p={src:"/_next/static/media/icon-profile.1230686e.png",height:287,width:288,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEX7rxZMaXH7rhf7rxb7rxb7rxb7rxf7rxf7rxf7rxf7rxf7rxb7rxf7rxf7rxYO4oluAAAADnRSTlM2ACAufVsmqvBt00cQhI9GWrEAAAAJcEhZcwAALiMAAC4jAXilP3YAAAA4SURBVAiZHcGJDYBAEAOxyT73QvovFwkbBbUJMaLtjgEqewpQ2yVIPcup5O5jn/eS/iUac60Z+gAy0gGl4r858gAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},w={src:"/_next/static/media/icon-transaction.3837740a.png",height:291,width:291,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEX6rxf6rxf6rxdMaXH7rxf7rxb7rxb6rxdmVdVsAAAACHRSTlNbJEoALhQ+UFv2EJwAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAySURBVAiZFcvHAcBADMMwynTZf+NL/gCGg5acajV4lQiYJBbrzIzLmD2E1I+3san6+gMYqAC01kXMYgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},N={src:"/_next/static/media/icon-wallet.2a643427.png",height:230,width:229,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEVMaXH8/Pz7+/v8/Pz8/Pz8/Pz8/Pz5+fn8/Pz8/Pz7+/v8/Pxgxt5PAAAADHRSTlMAKCB8SmhzE4hiCZx7M+4DAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAN0lEQVQImSXJUQrAQAjE0IzjqrX3v28p+xMeBCDS+Xdc84oKtaIPD8DGcFjWlRflvIs2DkmK8wEhJwDkA1E3MQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},B={src:"/_next/static/media/rock.c2522ce3.png",height:369,width:528,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAVFBMVEVMaXH/6lEkGwMhGgsLBgFqTAftxjNgQwKsiA9MNQGecgdQOAJuTQAKBgIVEQj70ivJnBmSYgB5VwAzHQD/3TZuTwKTbQp1UwGeeAvAlRf1zTfLpzDVzi0GAAAAFHRSTlMA/v4U/mD5/v7+w6TK6iT5uEjCZtmbQOYAAAAJcEhZcwAALiMAAC4jAXilP3YAAAA4SURBVAiZBcEHAoAgDACxQ0aLC8UCjv//0wQ4jxQB6vNav2AeydknkZ7VXBkLTZrqvXqyTCFsOz850QIcpRmMiAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6},R={src:"/_next/static/media/ti-atclock.657ecc03.png",height:248,width:265,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAWlBMVEXYzMUeHTguL0L////o1LXn9f/r8fvO4/DxoSJEQFP3+fg3MkRIPEy4tLrY19QrKVGCgZLZsnvm3M3r3srVljbz1qfMiSTs5Nfp1bb3x3rzu2KLipf/tDrzrj+h+2QMAAAAGXRSTlMBohmJxz1VEf5+MY9HXog5vv2Vvfjj+M31fsQ0OgAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAD1JREFUCJkVyUkSgCAMAMFRgSRuuCug//+mRV8buVN+AuCT6rcBIV+HughyvrouVm93c1M6EMGGqacaW/gBUxMCLJfwmOUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:7},M={src:"/_next/static/media/ti-buy.4599f8f1.png",height:227,width:354,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJ1BMVEXu7dAkHifl5ebKydA6NkpCPFHMq2zc19GTbSU5NlBBOkpCP1f///+ZZE58AAAADXRSTlMBCE0bWkdMXCl8k7NuvwzLhQAAAAlwSFlzAAAuIwAALiMBeKU/dgAAACdJREFUCJlj4GAEAwYGZmZmNgZWFgYGJiYmdgZObgYIYOGCMlhZeAAJDQBrICshEgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},C={src:"/_next/static/media/ti-pickup.8678fefa.png",height:226,width:279,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAASFBMVEVMaXH/+qhwankqKj/nwWQnJEpwV1m/vcfc4/PZ2dns7OpEO1QcID//wzCNazAoKj3/uXoYGi9mXmmik5iKiJLCrJfHrKfJlzw0b9i6AAAAGHRSTlMAEJBQGTUsDAQsS5+l79xlYYTFzJqQg52fC+dAAAAACXBIWXMAAC4jAAAuIwF4pT92AAAANElEQVQImQXBBwKAIBAEsaHuHahY4f8/NQGqrABSr2FlaHrmuWcQd/wON4xrpM0NwptKdH4lXgFw3FOUzgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6},U={src:"/_next/static/media/ti-price.1b05fd88.png",height:218,width:286,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAANlBMVEVMaXEtLD/j4+NCPE3a1s/t7u+enaLj4+LDoFg+Miy7jzrz8/PcoSY0MEJWUF6imJw0MkUqKT0nOaPHAAAAEnRSTlMAizQqJhgfDQwKGVsfx4dkQfFGJfkaAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAMElEQVQImR3GSRIAEBAEwcLQ9uX/nxWcMoGiXDMQHP3JPst+wjCLAoqD2ITSTPJeFxlmAPe0vHdrAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6},D={src:"/_next/static/media/ti-safe.5b7151a0.png",height:232,width:504,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAMFBMVEXg4ODj4+Tr6+re3t/f3+Dw8PDv7+/f3+CimpZHRFIlI0y9vcTX19nHuKUREzLr6eJ1qGn4AAAAD3RSTlP+/gHQ2Qx50PE/Qd9Y505b5AstAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAKElEQVQImRXJxxEAIBADsfWRo/vvlkFfERugBfNYcgpuN3IujKV/9QEMjwCteUeE+AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4},z=t(3914);let S={maskImage:"-webkit-gradient(\n        linear, left top, left bottom,\n        color-stop(0, transparent),\n        color-stop(0.1, black), color-stop(0.9, black),\n        color-stop(1, transparent)\n    )"};function Q(A){var e;let t="".concat(null!==(e=A.imageSize)&&void 0!==e?e:4,"em");return(0,a.jsxs)("div",{className:"xitems-center margin-se-1 margin-tb-2",style:{maxWidth:"14em"},children:[(0,a.jsx)("div",{className:"relative text-center",style:{width:t,height:t},children:(0,a.jsx)(u(),{src:A.image,alt:A.imageAlt,fill:!0,style:{objectFit:"contain"}})}),(0,a.jsx)("span",{className:"margin-t-1 margin-b-2 text-center bold-2",children:A.title}),(0,a.jsx)("span",{className:"text-center small-2",children:A.children})]})}function V(A){var e;let t="".concat(null!==(e=A.imageSize)&&void 0!==e?e:3,"em");return(0,a.jsxs)("div",{className:(0,g.Z)(A.className,"row xitems-center"),children:[(0,a.jsx)("div",{className:"relative margin-e-1",style:{width:t,height:t},children:(0,a.jsx)(u(),{src:A.image,alt:A.imageAlt,fill:!0})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"",children:A.title}),(0,a.jsx)("span",{className:"small-3",children:A.children})]})]})}function k(A){return(0,a.jsx)("div",{className:(0,g.Z)(A.className,"absolute zback-100 no-pointer-events"),style:{insetInline:"calc(50% - 50vw)",insetBlock:"0",...A.style},children:A.children})}function I(){let A=(0,s.dD)(),e=c.W4.use();return(0,a.jsx)("div",{style:{overflowX:"clip"},children:(0,a.jsx)("div",{className:"xself-center",style:{maxWidth:"50em",width:"100%"},children:(0,a.jsxs)("div",{className:"margin-se-3",children:[(0,a.jsxs)("div",{className:"sticky zfront-100",style:{top:0},children:[(0,a.jsx)(k,{className:"back-bg"}),(0,a.jsxs)("div",{className:"row xitems-center padding-se-4 padding-tb-2",children:[(0,a.jsx)(l.T,{className:"large-p5",text:"side"}),(0,a.jsx)("div",{className:"grow"}),(0,a.jsx)(o.Qj,{href:null===e?"/auth":"/panel",size:"small",variant:"outlined",children:null===e?(0,a.jsx)(a.Fragment,{children:"ورود | ثبت نام"}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.X,{user:e})," | ناحیه‌ی کابری"]})})]})]}),(0,a.jsx)("div",{className:"margin-tb-4 padding-tb-2"}),(0,a.jsxs)("div",{className:"relative color-primary",children:[(0,a.jsx)(k,{style:{insetBlock:"0 -15em"},children:(0,a.jsx)(u(),{src:h,alt:"",fill:!0,style:{objectFit:"cover",...S}})}),(0,a.jsx)("span",{className:"large-4",children:"گلدیکا"}),(0,a.jsx)("span",{className:"large-2",children:"بازار امن طلا"}),(0,a.jsx)("span",{className:"margin-tb-3",style:{width:"20.5em"},children:"هر جایی که هستید بدون محدودیت و در هر ساعتی از شبانه‌روز با اطمینان طلا بخرید و بفروشید."}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)(i.Z,{children:"خرید طلا"}),(0,a.jsx)(i.Z,{className:"margin-s-2",variant:"outlined",children:"قیمت طلا"})]})]}),(0,a.jsx)("div",{className:"margin-tb-5 padding-tb-1"}),(0,a.jsxs)("div",{className:"relative back-fg2 color-bg padding-a-3",style:{borderRadius:"1.5em"},children:[(0,a.jsx)("span",{className:"lcontent-center bold-1",children:"چرا گلدیکا؟"}),(0,a.jsxs)("div",{className:"row wrap lcontent-around",children:[(0,a.jsx)(Q,{image:D,imageAlt:"",title:"امنیت و اصالت",children:"گلدیکا با دریافت همه‌ی مجوز‌های لازم، امنیت دارایی و اصالت طلای ارائه شده را تضمین می‌کند."}),(0,a.jsx)(Q,{image:M,imageAlt:"",title:"خرید طلا با هر بودجه‌ای",children:"حداقل میزان خرید طلا در گلدیکا فقط ۱۰ سوت (۰.۰۱ گرم) است."}),(0,a.jsx)(Q,{image:U,imageAlt:"",title:"قیمت رقابتی",children:"قیمت طلا در گلدیکا با کمک هوش مصنوعی و بر اساس قیمت لحظه‌ای بازار تعیین می‌شود."}),(0,a.jsx)(Q,{image:R,imageAlt:"",title:"معامله‌ی ۲۴ ساعته",children:"در گلدیکا شما می‌توانید در هر ساعتی از شبانه‌روز به خرید و فروش طلا بپردازید."}),(0,a.jsx)(Q,{image:C,imageAlt:"",title:"تحویل حضوری",children:"هر زمانی که خواستید می‌توانید موجودی طلای خود را از گلدیکا تحویل بگیرید."})]})]}),(0,a.jsx)("div",{className:"margin-tb-3"}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsxs)(k,{style:{insetBlock:"-3em -10em"},children:[(0,a.jsx)(u(),{src:x,alt:"",fill:!0,style:{objectFit:"cover",...S}}),(0,a.jsx)("div",{className:"absolute-fill back-bg",style:{opacity:"0.4"}})]}),(0,a.jsxs)("div",{className:"margin-b-2",children:[(0,a.jsx)("span",{className:"lcontent-center bold-1 margin-t-2",children:"گلدیکا چطور کار می‌کند؟"}),(0,a.jsx)("span",{className:"lcontent-center small-2",children:"با خرید کمتر از یک دقیقه فاصله دارید."})]}),(0,a.jsxs)("div",{className:"row margin-tb-3",children:[(0,a.jsx)(V,{image:f,imageAlt:"",title:"ثبت نام و احراز هویت",children:"با شماره‌ی تلفن همراهی که به نام خودتان است در گلدیکا ثبت نام کنید."}),(0,a.jsx)("div",{className:"grow"})]}),(0,a.jsxs)("div",{className:"row margin-tb-3",children:[(0,a.jsx)("div",{className:"grow"}),(0,a.jsx)(V,{image:N,imageAlt:"",title:"شارژ کیف پول",children:"کیف پول خود را به مبلغ دلخواه شارژ کنید."}),(0,a.jsx)("div",{className:"grow"})]}),(0,a.jsxs)("div",{className:"row margin-tb-3",children:[(0,a.jsx)("div",{className:"grow"}),(0,a.jsx)(V,{image:E,imageAlt:"",title:"خرید طلا",children:"حالا می‌توانید به مقدار دلخواه طلا بخرید."})]})]}),(0,a.jsx)("div",{className:"margin-tb-2"}),(0,a.jsxs)("div",{className:"relative back-fg2 color-bg padding-a-3",style:{borderRadius:"1.5em"},children:[(0,a.jsx)("span",{className:"lcontent-center",children:"نمودار نوسانات قیمت طلای ۱۸ عیار"}),(0,a.jsx)(z.Z,{className:"margin-tb-2",style:{height:"25em"}})]}),(0,a.jsx)("div",{className:"margin-tb-1"}),(0,a.jsx)("div",{className:"relative",children:(0,a.jsxs)("div",{className:"row lcontent-stretch padding-se-2 padding-tb-6 large-p5 bold-4",children:[(0,a.jsx)(V,{className:"grow-3",image:p,imageSize:3.5,imageAlt:"",title:(0,d.V)(r.t3.getFormattedText("".concat(42354))),children:"کاربر فعال"}),(0,a.jsx)(V,{className:"grow-3",image:w,imageSize:3.5,imageAlt:"",title:(0,d.V)(r.t3.getFormattedText("".concat(4235475))),children:"حجم معاملات روزانه"}),(0,a.jsx)("div",{className:"relative grow",children:(0,a.jsx)(k,{style:{insetBlock:"-5em",insetInline:"-10em -20em"},children:(0,a.jsx)(u(),{src:v,alt:"",fill:!0,style:{objectFit:"contain"}})})})]})}),(0,a.jsx)("div",{className:"margin-tb-1"}),(0,a.jsxs)("div",{className:"relative color-black",children:[(0,a.jsx)(k,{style:{background:"#ecc547"}}),(0,a.jsx)("span",{className:"lcontent-center margin-tb-2 bold-1",children:"با گلدیکا بیشتر یاد بگیرید"}),(0,a.jsxs)("div",{className:"row lcontent-around",children:[(0,a.jsx)(Q,{image:"",imageAlt:"",imageSize:8,title:"مطلب اول"}),(0,a.jsx)(Q,{image:"",imageAlt:"",imageSize:8,title:"مطلب دوم"}),(0,a.jsx)(Q,{image:"",imageAlt:"",imageSize:8,title:"مطلب سوم"})]})]}),(0,a.jsx)("div",{className:"margin-tb-1"}),(0,a.jsx)("div",{className:"relative",children:(0,a.jsxs)("div",{className:"row lcontent-between padding-tb-4",children:[(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)(k,{className:(0,g.Z)(A&&"hidden"),style:{inset:"-1.5em -4em -1.5em -4em"},children:(0,a.jsx)(u(),{src:B,alt:"",fill:!0,style:{objectFit:"contain"}})})}),(0,a.jsx)("span",{className:"large-1",children:"همین حالا سرمایه‌گذاری را شروع کنید."}),(0,a.jsx)(o.Qj,{href:"/auth",children:"ثبت نام در گلدیکا"}),(0,a.jsx)("div",{})]})}),(0,a.jsx)("div",{className:"margin-tb-1"}),(0,a.jsxs)("div",{className:"relative back-bg2 padding-se-4 padding-t-4 padding-b-2",style:{borderRadius:"1.5em"},children:[(0,a.jsxs)("div",{className:"row wrap lcontent-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(o.rU,{className:"margin-tb-1 small-1",href:"#",color:"inherit",children:"درباره‌ی ما"}),(0,a.jsx)(o.rU,{className:"margin-tb-1 small-1",href:"#",color:"inherit",children:"ارتباط با ما"}),(0,a.jsx)(o.rU,{className:"margin-tb-1 small-1",href:"#",color:"inherit",children:"درگاه ثبت شکایات"}),(0,a.jsx)(o.rU,{className:"margin-tb-1 small-1",href:"#",color:"inherit",children:"سؤالات متداول"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(o.rU,{className:"margin-tb-1 small-1",href:"#",color:"inherit",children:"قوانین و مقررات"}),(0,a.jsx)(o.rU,{className:"margin-tb-1 small-1",href:"#",color:"inherit",children:"چطور به گلدیکا اعتماد کنیم؟"}),(0,a.jsx)(o.rU,{className:"margin-tb-1 small-1",href:"#",color:"inherit",children:"بلاگ"}),(0,a.jsx)(o.rU,{className:"margin-tb-1 small-1",href:"/panel",color:"inherit",children:"پنل"})]}),(0,a.jsxs)("div",{className:"row padding-se-2 padding-t-2 small-3 back-gray color-black",style:{borderRadius:"1em"},children:[(0,a.jsx)("div",{className:"grow-equally",children:(0,a.jsx)(Q,{image:j,imageAlt:"",imageSize:7,title:"اتحادیه‌ی کشوری کسب‌و‌کار‌های مجازی"})}),(0,a.jsx)("div",{className:"grow-equally",children:(0,a.jsx)(Q,{image:b,imageAlt:"",imageSize:7,title:"نماد اعتماد الکترونیکی"})})]})]}),(0,a.jsx)("div",{className:"margin-tb-3"}),(0,a.jsxs)("div",{className:"row color-gray",children:[(0,a.jsx)("span",{children:"آدرس: تهران، اتوبان لشکری، جنب خیابان نفیسی، فضای کار اشتراکی تکنوتجارت"}),(0,a.jsx)("div",{className:"grow"}),(0,a.jsxs)("span",{className:"block",children:["تلفن: ",(0,a.jsx)("span",{className:"ltr",children:(0,d.V)("021-2966")})]})]})]}),(0,a.jsx)("div",{className:"margin-tb-2"}),(0,a.jsx)("div",{children:(0,a.jsx)("span",{className:"lcontent-center small-2 color-gray",children:"کلیه‌ی حقوق برای گلدیکا محفوظ است."})}),(0,a.jsx)("div",{className:"margin-tb-1"})]})})})}S.WebkitMaskImage=S.maskImage},3914:function(A,e,t){"use strict";t.d(e,{Z:function(){return c}});var a=t(5893),i=t(6010),l=t(5675),n=t.n(l);function c(A){return(0,a.jsx)("div",{className:(0,i.Z)("relative",A.className),style:A.style,children:(0,a.jsx)(n(),{src:"https://www.kitco.com/LFgif/au0030lnb.gif",alt:"نمودار نوسانات قیمت طلا در بازار آمریکا و انگلستان در ۳۰ روز گذشته",fill:!0,style:{objectFit:"contain",...A.invertColors&&{filter:"invert(1)"}}})})}}},function(A){A.O(0,[7616,5675,9774,2888,179],function(){return A(A.s=9208)}),_N_E=A.O()}]);