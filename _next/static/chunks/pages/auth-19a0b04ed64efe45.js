(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2473],{1023:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var o=n(r(4938)),a=r(5893),s=(0,o.default)((0,a.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.Z=s},1812:function(e,t,r){"use strict";r.d(t,{Z:function(){return P}});var n=r(3366),o=r(7462),a=r(7294),s=r(8216),l=r(7909),i=r(4780),c=r(8271),d=r(3616),u=r(3321),p=r(8456),m=r(4867),g=r(1588);function h(e){return(0,m.Z)("MuiLoadingButton",e)}let f=(0,g.Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]);var b=r(5893);let w=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],x=e=>{let{loading:t,loadingPosition:r,classes:n}=e,a={root:["root",t&&"loading"],startIcon:[t&&`startIconLoading${(0,s.Z)(r)}`],endIcon:[t&&`endIconLoading${(0,s.Z)(r)}`],loadingIndicator:["loadingIndicator",t&&`loadingIndicator${(0,s.Z)(r)}`]},l=(0,i.Z)(a,h,n);return(0,o.Z)({},n,l)},v=e=>"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e&&"classes"!==e,E=(0,c.ZP)(u.Z,{shouldForwardProp:e=>v(e)||"classes"===e,name:"MuiLoadingButton",slot:"Root",overridesResolver:(e,t)=>[t.root,t.startIconLoadingStart&&{[`& .${f.startIconLoadingStart}`]:t.startIconLoadingStart},t.endIconLoadingEnd&&{[`& .${f.endIconLoadingEnd}`]:t.endIconLoadingEnd}]})(({ownerState:e,theme:t})=>(0,o.Z)({[`& .${f.startIconLoadingStart}, & .${f.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0}},"center"===e.loadingPosition&&{transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),[`&.${f.loading}`]:{color:"transparent"}},"start"===e.loadingPosition&&e.fullWidth&&{[`& .${f.startIconLoadingStart}, & .${f.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===e.loadingPosition&&e.fullWidth&&{[`& .${f.startIconLoadingStart}, & .${f.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginLeft:-8}})),N=(0,c.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.loadingIndicator,t[`loadingIndicator${(0,s.Z)(r.loadingPosition)}`]]}})(({theme:e,ownerState:t})=>(0,o.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{left:"small"===t.size?10:14},"start"===t.loadingPosition&&"text"===t.variant&&{left:6},"center"===t.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(e.vars||e).palette.action.disabled},"end"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{right:"small"===t.size?10:14},"end"===t.loadingPosition&&"text"===t.variant&&{right:6},"start"===t.loadingPosition&&t.fullWidth&&{position:"relative",left:-10},"end"===t.loadingPosition&&t.fullWidth&&{position:"relative",right:-10})),C=a.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiLoadingButton"}),{children:a,disabled:s=!1,id:i,loading:c=!1,loadingIndicator:u,loadingPosition:m="center",variant:g="text"}=r,h=(0,n.Z)(r,w),f=(0,l.Z)(i),v=null!=u?u:(0,b.jsx)(p.Z,{"aria-labelledby":f,color:"inherit",size:16}),C=(0,o.Z)({},r,{disabled:s,loading:c,loadingIndicator:v,loadingPosition:m,variant:g}),P=x(C),S=c?(0,b.jsx)(N,{className:P.loadingIndicator,ownerState:C,children:v}):null;return(0,b.jsxs)(E,(0,o.Z)({disabled:s||c,id:f,ref:t},h,{variant:g,classes:P,ownerState:C,children:["end"===C.loadingPosition?a:S,"end"===C.loadingPosition?S:a]}))});var P=C},6427:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth",function(){return r(6755)}])},4763:function(e,t,r){"use strict";r.d(t,{EH:function(){return C},Sx:function(){return S},Y2:function(){return E},YL:function(){return h},Yu:function(){return T},rn:function(){return g},t3:function(){return m},vh:function(){return b},z1:function(){return x}});var n=r(6529);let o="".concat(n.QY).concat(n.dV),a="[^".concat(o,"]"),s="[".concat(o,"]"),l="(?:".concat(a).concat(s,"*)"),i=RegExp("[^0-9".concat(o,"]"),"g"),c=RegExp("[^0-9\\.".concat(o,"]"),"g");RegExp("[^A-Z0-9".concat(o,"]"),"g");let d=RegExp("".concat(a,"+"),"g");function u(e,t){return e.replace(RegExp("^(".concat(s,"*").concat(l,"{").concat(t,"})(.*)$")),(e,t,r)=>t+r.replace(d,""))}RegExp("".concat(s,"+"),"g");let p=RegExp("(".concat(l,")(?=(?:").concat(l,"{3})+$)"),"g"),m={getRawText:e=>e.replace(i,""),getFormattedText:e=>e.replace(i,"").replace(p,"$1".concat(","))},g={getRawText:e=>u(e.replace(i,""),13),getFormattedText:e=>u(e.replace(i,""),13).replace(p,"$1".concat(","))},h=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return{getFormattedText:e=>e.replace(c,"").split(".").map((e,r)=>u(e,t[r])).join(".")}}(4,2),f=RegExp("^(".concat(s,"*").concat(l,"{4})(").concat(l,"{2})?")),b={getFormattedText:e=>u(e.replace(i,""),8).replace(f,(e,t,r)=>"".concat(t,"/")+(r?"".concat(r,"/"):""))},w=RegExp("^(".concat(s,"*").concat(l,"{4})(").concat(l,"{3})?")),x={getFormattedText:e=>u(e.replace(i,""),11).replace(w,(e,t,r)=>"".concat(t," ")+(r?"".concat(r," "):"")),getRawText:e=>u(e.replace(i,""),11)},v=RegExp("^(".concat(s,"*").concat(l,"{3})(").concat(l,"{6})?")),E={getFormattedText:e=>u(e.replace(i,""),10).replace(v,(e,t,r)=>"".concat(t," ")+(r?"".concat(r," "):"")),getRawText:e=>u(e.replace(i,""),10)},N=RegExp("^(".concat(s,"*").concat(l,"{4})(").concat(l,"{4})?(").concat(l,"{4})?")),C={getFormattedText:e=>u(e.replace(i,""),16).replace(N,(e,t,r,n)=>"".concat(t,"-")+(r?"".concat(r,"-"):"")+(n?"".concat(n,"-"):"")),getRawText:e=>u(e.replace(i,""),16)},P=RegExp("^(".concat(s,"*").concat(l,"{4})(").concat(l,"{4})?(").concat(l,"{4})?(").concat(l,"{4})?(").concat(l,"{4})?(").concat(l,"{4})?")),S={getFormattedText:e=>u("IR"+e.replace(i,""),26).replace(P,(e,t,r,n,o,a,s)=>"".concat(t," ")+(r?"".concat(r," "):"")+(n?"".concat(n," "):"")+(o?"".concat(o," "):"")+(a?"".concat(a," "):"")+(s?"".concat(s," "):"")),getRawText:e=>u("IR"+e.replace(i,""),26)};function T(e){return e.toFixed(2)}},9922:function(e,t,r){"use strict";r.d(t,{x:function(){return c}});var n=r(5893),o=r(5608),a=r(1442),s=r(4006),l=r(7294),i=r(6529);let c=(0,l.forwardRef)(function(e,t){var r,c,d;let u=(0,a.G)(e.inputRef),p=(0,o.xj)(e),{textFormatter:m,useLatinDigits:g,value:h,onValueChange:f,...b}=p,w=(0,o.GK)(()=>({onChange(e){var t,r;let n=(0,s.J)((0,i.Vz)(e.target)),o=p.textFormatter?(null!==(r=p.textFormatter.getRawText)&&void 0!==r?r:p.textFormatter.getFormattedText)(n):n,a=(0,i.KR)(o);w.selectionMap[a.value]=o,null===(t=p.onValueChange)||void 0===t||t.call(p,a)},selectionMap:{},selectionMapOld:{}}));(0,l.useLayoutEffect)(()=>{var e;let t={[h]:null!==(e=w.selectionMap[h])&&void 0!==e?e:w.selectionMapOld[h]};w.selectionMapOld=w.selectionMap,w.selectionMap=t}),(0,o.qR)(()=>{if(p.autoFocus&&u.current){u.current.focus();let e=u.current.value.length;u.current.setSelectionRange(e,e)}});let x=null!==(c=null!==(r=w.selectionMap[h])&&void 0!==r?r:w.selectionMapOld[h])&&void 0!==c?c:h,v=null!==(d=null==m?void 0:m.getFormattedText(x))&&void 0!==d?d:x;return(0,n.jsx)(i.Gn,{ref:t,onChange:w.onChange,selectionValue:g?v:(0,s.V)(v),...b,inputRef:u})})},6529:function(e,t,r){"use strict";r.d(t,{Gn:function(){return p},KR:function(){return u},QY:function(){return l},Vz:function(){return d},dV:function(){return i}});var n=r(5893),o=r(7616),a=r(1442),s=r(7294);let l="",i="",c=RegExp("[".concat(l).concat(i,"]"),"g");function d(e){var t,r,n,o;let[a,s]="backward"===e.selectionDirection?[i,l]:[l,i];return e.value.substring(0,null!==(t=e.selectionStart)&&void 0!==t?t:0)+a+e.value.substring(null!==(r=e.selectionStart)&&void 0!==r?r:0,null!==(n=e.selectionEnd)&&void 0!==n?n:0)+s+e.value.substring(null!==(o=e.selectionEnd)&&void 0!==o?o:0)}function u(e){let t=e.replace(c,""),r=e.indexOf(l),n=e.indexOf(l);return -1===r&&-1===n?{value:t,selectionStart:null,selectionEnd:null,selectionDirection:null}:(-1===r&&(r=n),-1===n&&(n=r),r<=n)?{value:t,selectionStart:r,selectionEnd:n,selectionDirection:"forward"}:{value:t,selectionStart:n,selectionEnd:r,selectionDirection:"backward"}}let p=(0,s.forwardRef)(function(e,t){let{inputRef:r,selectionValue:l,value:i,...c}=e,d=(0,a.G)(r),p=(0,s.useRef)(),m=u(null!=l?l:"");return(0,s.useLayoutEffect)(()=>{var t,r,n;let o=d.current;if(null===m.selectionStart||null===o){p.current=void 0;return}let a=p.current;p.current=m,p.current.version=e.version,(void 0===a||a.selectionStart!==m.selectionStart||a.selectionEnd!==m.selectionEnd||a.selectionDirection!==m.selectionDirection||a.value!==m.value||a.version!==e.version)&&(o.selectionStart!==m.selectionStart||o.selectionEnd!==m.selectionEnd||(null!==(t=o.selectionDirection)&&void 0!==t?t:"none")!==(null!==(r=m.selectionDirection)&&void 0!==r?r:"none"))&&o.setSelectionRange(m.selectionStart,m.selectionEnd,null!==(n=m.selectionDirection)&&void 0!==n?n:void 0)}),(0,n.jsx)(o.Z,{ref:t,inputRef:d,value:void 0===l?i:m.value,...c})})},1442:function(e,t,r){"use strict";r.d(t,{G:function(){return s}});var n=r(7294),o=r(5608);function a(e,t){null!=e&&("current"in e?e.current=t:e(t))}function s(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=(0,o.GK)(()=>({value:r,ref:e,outRef:{get current(){return s.value},set current(value){s.value=value,a(e,value),null==t||t(value)}}}));return(0,n.useLayoutEffect)(()=>(null!==s.value&&a(e,s.value),s.ref=e,()=>a(e,null)),[e,s]),s.outRef}},4006:function(e,t,r){"use strict";r.d(t,{J:function(){return s},V:function(){return a}});let n=/[۰-۹]/g,o=/[0-9]/g;function a(e){return e.replace(o,e=>String.fromCharCode(e.charCodeAt(0)-48+1776))}function s(e){return e.replace(n,e=>String.fromCharCode(e.charCodeAt(0)-1776+48))}},6755:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return I}});var n=r(5893),o=r(8552),a=r.n(o),s=r(1023),l=r(1812),i=r(3795),c=r(3946),d=r(7616),u=r(5549),p=r(9392),m=r(4763),g=r(6010),h=r(9922),f=r(5608),b=r(3409),w=r(4457),x=r(7863),v=r(8964),E=r(6445),N=r(1907),C=r(4006),P=r(6840),S=r(3276);function T(e){if(10!==e.length)return!1;let t=0;for(let r=0;r<e.length-1;r+=1)t+=+e.charAt(r)*(e.length-r);return t%=11,+e.charAt(e.length-1)===(t<2?t:11-t)}var j=r(3951);function Z(e){let[t,r]=(0,f.YZ)(),o=(0,f.xj)(e),a=(0,f.YM)(()=>({firstName:"",firstNameError:null,lastName:"",lastNameError:null,nationalCode:"",nationalCodeError:null,birthDate:"",birthDateError:null,password:"",passwordError:null,passwordConf:"",passwordConfError:null,mode:"submit",version:0})),s=(0,f.GK)(()=>({setFirstName:(0,P._b)(a,"firstName",()=>a.firstNameError=null),setLastName:(0,P._b)(a,"lastName",()=>a.lastNameError=null),setNationalCode:(0,P.yH)(a,"nationalCode",e=>{/^[0-9]{10}$/.test(e)&&!T(e)?a.nationalCodeError="کد ملی صحیح نمی‌باشد.":a.nationalCodeError=null}),setBirthDate:(0,P.yH)(a,"birthDate",()=>a.birthDateError=null),setPassword:(0,P._b)(a,"password",()=>a.passwordError=null),setPasswordConf:(0,P._b)(a,"passwordConf",()=>a.passwordConfError=null),validate(e){let t=!0;return/^.+$/.test(e.firstName)?a.firstNameError=null:(a.firstNameError="نمی‌تواند خالی باشد.",t=!1),/^.+$/.test(e.lastName)?a.lastNameError=null:(a.lastNameError="نمی‌تواند خالی باشد.",t=!1),/^[0-9]{10}$/.test(e.nationalCode)&&T(e.nationalCode)?a.nationalCodeError=null:(a.nationalCodeError="کد ملی صحیح نمی‌باشد.",t=!1),/^\d{4}[/]\d{2}[/]\d{2}$/.test(e.birthDate)?a.birthDateError=null:(a.birthDateError="تاریخ را به درستی وارد کنید.",t=!1),/^.+$/.test(e.password)?a.passwordError=null:(a.passwordError="نمی‌تواند خالی باشد.",t=!1),e.passwordConf!==e.password?(a.passwordConfError="کلمه‌ی عبور و تکرار آن باید یکسان باشند.",t=!1):a.passwordConfError=null,t}})),i=(0,b.M)(()=>({submit:(0,P.PF)((0,N.K)(a,async e=>{let{data:t}=await (0,S.PG)({trackId:o.trackId,username:o.phoneNumber,password:e.password,nid:e.nationalCode,fname:e.firstName,lname:e.lastName,birth:e.birthDate});(0,j.A)(t)},{addLoadingCounter:r,validator:s.validate,errorMessage:p.e$,successMessage:"ثبت نام شما موفقیت‌آمیز بود.",onBefore(){a.mode="submit"}})),skip:(0,P.PF)((0,N.K)(a,async()=>{let{data:e}=await (0,S.PG)({trackId:o.trackId,username:o.phoneNumber,skip:!0});(0,j.A)(e)},{addLoadingCounter:r,validator:s.validate,errorMessage:p.e$,successMessage:"ثبت نام شما موفقیت‌آمیز بود.",onBefore(){a.mode="skip"}}))}));return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("form",{onSubmit:i.submit,children:[(0,n.jsx)(d.Z,{className:"margin-b-2",label:"نام",value:a.firstName,onChange:s.setFirstName,error:null!==a.firstNameError,helperText:a.firstNameError,autoFocus:!0}),(0,n.jsx)(d.Z,{className:"margin-b-2",label:"نام خانوادگی",value:a.lastName,onChange:s.setLastName,error:null!==a.lastNameError,helperText:a.lastNameError}),(0,n.jsx)(h.x,{className:"margin-b-2",label:"کد ملی",value:a.nationalCode,onValueChange:s.setNationalCode,textFormatter:m.Y2,error:null!==a.nationalCodeError,helperText:a.nationalCodeError,inputProps:{className:"ltr"},inputMode:"numeric"}),(0,n.jsx)(h.x,{className:"margin-b-2",label:"تاریخ تولد",value:a.birthDate,onValueChange:s.setBirthDate,textFormatter:m.vh,error:null!==a.birthDateError,helperText:a.birthDateError,inputProps:{className:"ltr"},inputMode:"numeric"}),(0,n.jsx)(d.Z,{className:"margin-b-2",label:"کلمه‌ی عبور",value:a.password,onChange:s.setPassword,error:null!==a.passwordError,helperText:a.passwordError,inputProps:{className:"ltr"},type:"password"}),(0,n.jsx)(d.Z,{className:"margin-b-2",label:"تکرار کلمه‌ی عبور",value:a.passwordConf,onChange:s.setPasswordConf,error:null!==a.passwordConfError,helperText:a.passwordConfError,inputProps:{className:"ltr"},type:"password"}),(0,n.jsx)(l.Z,{className:"margin-t-3",loading:t&&"submit"===a.mode,disabled:t,type:"submit",children:"ثبت نام"}),(0,n.jsx)(l.Z,{className:"xself-center margin-t-2 padding-se-2",variant:"text",color:"inherit",size:"small",loading:t&&"skip"===a.mode,disabled:t,onClick:i.skip,children:"بعداً وارد می‌کنم"})]})})}let F=RegExp("^[0-9]{".concat(5,"}$"));function I(){let[e,t]=(0,f.YZ)(),r=(0,f.YM)(()=>({phoneNumber:"09",phoneNumberError:null,password:"",passwordError:null,passwordConf:"",passwordConfError:null,otp:"",otpError:null,otpAuthType:null,step:"phoneNumber",prevSteps:[],trackId:null,version:0})),o=(0,f.GK)(()=>({setPhoneNumber:(0,P.yH)(r,"phoneNumber",()=>r.phoneNumberError=null,e=>""===e||"0"===e||"9"===e?"09":1===e.length?"09"+e:e),setPassword:(0,P._b)(r,"password",()=>r.passwordError=null),setPasswordConf:(0,P._b)(r,"passwordConf",()=>r.passwordConfError=null),setOtp:(0,P._b)(r,"otp",e=>{r.otpError=null,5===e.length&&T.submitOtp(P.Pc)}),phoneNumberBlur(){let e=r.renderedState.phoneNumber;(e=e.replace(/^09|^0?/,"09")).length<=11&&(r.phoneNumber=e)},validatePhoneNumber(e){let t=!0;return/^09[0-9]{9}$/.test(e.phoneNumber)?r.phoneNumberError=null:(r.phoneNumberError="شماره به درستی وارد نشده است.",t=!1),t},validatePassword(e){let t=!0;return/^.+$/.test(e.password)?r.passwordError=null:(r.passwordError="کلمه‌ی عبور نمی‌تواند خالی باشد.",t=!1),t},validateFpPassword(e){let t=!0;return/^.+$/.test(e.password)?r.passwordError=null:(r.passwordError="نمی‌تواند خالی باشد.",t=!1),e.passwordConf!==e.password?(r.passwordConfError="کلمه‌ی عبور و تکرار آن باید یکسان باشند.",t=!1):r.passwordConfError=null,t},validateOtp(e){let t=!0;return F.test(e.otp)?r.otpError=null:(r.otpError=(0,C.V)("باید یک عدد ".concat(5," رقمی باشد.")),t=!1),t},receiveOtp(e){r.otp=e,T.submitOtp(P.Pc)},onStepChange(e){"otp"===e?I.start():I.abort()},goToOtp(){o.goToStep("otp")},goToFpPassword(){o.goToStep("fpPassword")},goToPassword(){o.goToStep("password")},goToPhoneNumber(){o.goToStep("phoneNumber")},goToStep(e){r.prevSteps=[r.renderedState.step,...r.renderedState.prevSteps],r.step=e,o.onStepChange(e)},goBack(){let[e,...t]=r.renderedState.prevSteps;r.prevSteps=t,r.step=e,o.onStepChange(e)}})),T=(0,b.M)(()=>({submitPhoneNumber:(0,P.PF)((0,N.K)(r,async e=>{let{data:t}=await (0,S.zG)({username:e.phoneNumber});"login"===t.nextStep?(r.trackId=t.trackId,o.goToStep("password")):"verify-otp"===t.nextStep&&((0,w.O)({message:"کد یک‌بار مصرف به تلفن همراه شما ارسال شد.",variant:"success"}),r.otpAuthType=t.authType,r.trackId=t.trackId,o.goToStep("otp"))},{addLoadingCounter:t,validator:o.validatePhoneNumber,errorMessage:p.e$})),submitPassword:(0,P.PF)((0,N.K)(r,async e=>{let{data:t}=await (0,S.Vu)({trackId:e.trackId,username:e.phoneNumber,password:e.password});(0,j.A)(t)},{addLoadingCounter:t,validator:o.validatePassword,successMessage:"با موفقیت وارد شدید.",errorMessage:p.e$})),submitOtp:(0,P.PF)((0,N.K)(r,async function(e){let{data:t}=await (0,S.QR)({username:e.phoneNumber,authType:e.otpAuthType,otp:e.otp,trackId:e.trackId});if("logged-in"===t.nextStep){(0,j.A)(t);return}o.goToStep("register"===t.nextStep?"registerForm":"fpPassword")},{addLoadingCounter:t,validator:o.validateOtp,errorMessage:p.e$})),startForgotPassword:(0,P.PF)((0,N.K)(r,async e=>{await (0,E.gw)(E.uH),r.otpAuthType="forgot-password",o.goToStep("otp")},{addLoadingCounter:t,successMessage:"کد یک‌بار مصرف به تلفن همراه شما ارسال شد.",errorMessage:p.e$})),submitFpPassword:(0,P.PF)((0,N.K)(r,async function(e){await (0,E.gw)(E.uH),(0,x.m)().push("panel")},{addLoadingCounter:t,validator:o.validateFpPassword,successMessage:"با موفقیت وارد شدید.",errorMessage:p.e$}))})),I=function(e){let t=(0,f.GK)(()=>({ac:null,f:{abort(){var e;null===(e=t.ac)||void 0===e||e.abort(),t.ac=null},start(){t.f.abort(),"OTPCredential"in window&&(t.ac=new AbortController,(async()=>{try{let r=await navigator.credentials.get({otp:{transport:["sms"]},signal:t.ac.signal});(null==r?void 0:r.code)&&e(r.code)}catch(n){console.error("## DEBUG ## web otp error: ",n)}})())}}}));return t.f}(o.receiveOtp);return(0,f.y7)(()=>{(0,v.Gm)()&&null!==u.W4.getValue()&&(0,x.m)().push("/panel")}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("span",{className:"lcontent-center large-2 margin-b-2",children:["phoneNumber"===r.step&&"ورود | ثبت نام",("otp"===r.step&&"register"===r.otpAuthType||"registerForm"===r.step)&&"ثبت نام",("otp"===r.step&&"login"===r.otpAuthType||"password"===r.step)&&"ورود",("otp"===r.step&&"forgot-password"===r.otpAuthType||"fpPassword"===r.step)&&"فراموشی کلمه‌ی عبور"]}),"phoneNumber"===r.step&&(0,n.jsxs)("form",{onSubmit:T.submitPhoneNumber,children:[(0,n.jsx)(h.x,{label:"شماره تلفن همراه",autoComplete:"phone-number",value:r.phoneNumber,onValueChange:o.setPhoneNumber,textFormatter:m.z1,error:null!==r.phoneNumberError,helperText:r.phoneNumberError,onBlur:o.phoneNumberBlur,autoFocus:!0,inputProps:{className:"ltr"},type:"tel"}),(0,n.jsxs)("span",{className:"block margin-se-2 margin-t-1 small-2",children:["با ورود یا ثبت نام، ",(0,n.jsx)(i.Z,{href:"#",children:"شرایط و قوانین"})," را می‌پذیرم."]}),(0,n.jsx)(l.Z,{className:"margin-t-4",loading:e,type:"submit",children:"ادامه"})]}),"password"===r.step&&(0,n.jsxs)("form",{onSubmit:T.submitPassword,children:[(0,n.jsxs)("span",{className:(0,g.Z)(a()["current-phone-number"],"ltr xitems-center padding-a-1 margin-b-4"),children:[(0,n.jsx)(c.Z,{onClick:o.goBack,size:"small",children:(0,n.jsx)(s.Z,{fontSize:"small"})}),(0,n.jsx)("span",{className:"margin-s-2",children:(0,C.V)(m.z1.getFormattedText(r.phoneNumber))})]}),(0,n.jsx)("span",{children:"کلمه‌ی عبور خود را وارد کنید:"}),(0,n.jsx)(d.Z,{className:"margin-tb-2",label:"کلمه‌ی عبور",autoComplete:"current-password",type:"password",value:r.password,onChange:o.setPassword,error:null!==r.passwordError,helperText:r.passwordError,autoFocus:!0,inputProps:{className:"ltr"}}),(0,n.jsx)(i.Z,{className:"margin-s-2 margin-t-3 small-2",onClick:o.goToPhoneNumber,children:"شماره تلفن اشتباه است؟"}),(0,n.jsx)(i.Z,{className:"margin-s-2 margin-t-3 small-2",onClick:T.startForgotPassword,children:"کلمه‌ی عبور را فراموش کردید؟"}),(0,n.jsx)(l.Z,{className:"margin-t-4",loading:e,type:"submit",children:"ورود"})]}),"fpPassword"===r.step&&(0,n.jsxs)("form",{onSubmit:T.submitFpPassword,children:[(0,n.jsxs)("span",{className:(0,g.Z)(a()["current-phone-number"],"ltr xitems-center padding-a-1 margin-b-4"),children:[(0,n.jsx)(c.Z,{onClick:o.goBack,size:"small",children:(0,n.jsx)(s.Z,{fontSize:"small"})}),(0,n.jsx)("span",{className:"margin-s-2",children:(0,C.V)(m.z1.getFormattedText(r.phoneNumber))})]}),(0,n.jsx)("span",{children:"کلمه‌ی عبور جدید را وارد کنید:"}),(0,n.jsx)(d.Z,{className:"margin-tb-2",label:"کلمه‌ی عبور جدید",autoComplete:"new-password",type:"password",value:r.password,onChange:o.setPassword,error:null!==r.passwordError,helperText:r.passwordError,autoFocus:!0,inputProps:{className:"ltr"}}),(0,n.jsx)(d.Z,{className:"margin-tb-2",label:"تکرار کلمه‌ی عبور",autoComplete:"new-password",type:"password",value:r.passwordConf,onChange:o.setPasswordConf,error:null!==r.passwordConfError,helperText:r.passwordConfError,inputProps:{className:"ltr"}}),(0,n.jsx)(l.Z,{className:"margin-t-4",loading:e,type:"submit",children:"تأیید و ورود"})]}),"otp"===r.step&&(0,n.jsxs)("form",{onSubmit:T.submitOtp,children:[(0,n.jsxs)("span",{className:(0,g.Z)(a()["current-phone-number"],"ltr xitems-center padding-a-1 margin-b-4"),children:[(0,n.jsx)(c.Z,{onClick:o.goBack,size:"small",children:(0,n.jsx)(s.Z,{fontSize:"small"})}),(0,n.jsx)("span",{className:"margin-s-2",children:(0,C.V)(m.z1.getFormattedText(r.phoneNumber))})]}),(0,n.jsx)("span",{children:"کد یک‌بار مصرف ارسال شده به تلفن همراهتان را وارد کنید:"}),(0,n.jsx)(d.Z,{className:(0,g.Z)(a()["otp-field"],"margin-tb-2"),autoComplete:"one-time-code",value:r.otp,onChange:o.setOtp,error:null!==r.otpError,helperText:r.otpError,autoFocus:!0,inputProps:{className:"ltr"}}),(0,n.jsx)(i.Z,{className:"margin-s-2 margin-t-3 small-2",onClick:o.goToPhoneNumber,children:"شماره تلفن اشتباه است؟"}),(0,n.jsx)(l.Z,{className:"margin-t-4",loading:e,type:"submit",children:"ادامه"})]}),"registerForm"===r.step&&(0,n.jsx)(Z,{trackId:r.trackId,phoneNumber:r.phoneNumber})]})}},8552:function(e){e.exports={"current-phone-number":"login_current-phone-number__sFXL2","otp-field":"login_otp-field__LR2Q0"}}},function(e){e.O(0,[7616,9774,2888,179],function(){return e(e.s=6427)}),_N_E=e.O()}]);