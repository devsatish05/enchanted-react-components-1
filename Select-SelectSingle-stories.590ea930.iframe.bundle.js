/*! For license information please see Select-SelectSingle-stories.590ea930.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_hcl_software_enchanted_react_components=self.webpackChunk_hcl_software_enchanted_react_components||[]).push([[6428],{"./src/Select/SelectSingle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ExampleSingleSelect:()=>ExampleSingleSelect,ExampleSingleSelectDisabled:()=>ExampleSingleSelectDisabled,ExampleSingleSelectError:()=>ExampleSingleSelectError,ExampleSingleSelectFullWidth:()=>ExampleSingleSelectFullWidth,ExampleSingleSelectNonEdit:()=>ExampleSingleSelectNonEdit,ExampleSingleSelectOpen:()=>ExampleSingleSelectOpen,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs"),_Select__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Select/Select.tsx"),_Menu_MenuItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Menu/MenuItem.tsx"),_hidden_components_List_ListItemText__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/hidden_components/List/ListItemText.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/SelectSingle",component:_Select__WEBPACK_IMPORTED_MODULE_2__.Ay,argTypes:{multiple:{control:!1,description:"Is use for a special configuration to select multiple items.",defaultValue:{summary:!1}},displayEmpty:{control:!1,description:"If the property `multiple` is `true` we can hide the placeholder with this property. Is `displayEmpty=true` the placeholder will be displayed.",defaultValue:{summary:!1}}}};var Template=function Template(args){var _React$useState2=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__.useState(args.value?args.value:"None"),2),value=_React$useState2[0],setValue=_React$useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Select__WEBPACK_IMPORTED_MODULE_2__.Ay,_objectSpread(_objectSpread({},args),{},{value,onChange:function handleChange(event){setValue(event.target.value)},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Menu_MenuItem__WEBPACK_IMPORTED_MODULE_3__.Ay,{value:"None",disabled:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("em",{children:args.placeholder})},"None"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Menu_MenuItem__WEBPACK_IMPORTED_MODULE_3__.Ay,{size:"small",value:"Ten",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_hidden_components_List_ListItemText__WEBPACK_IMPORTED_MODULE_4__.Ay,{primary:"Ten",tooltip:"Ten"})},"10"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Menu_MenuItem__WEBPACK_IMPORTED_MODULE_3__.Ay,{size:"small",value:"Twenty - long text, long text, long text, long text",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_hidden_components_List_ListItemText__WEBPACK_IMPORTED_MODULE_4__.Ay,{primary:"Twenty - long text, long text, long text, long text",tooltip:"Twenty - long text, long text, long text, long text"})},"20"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Menu_MenuItem__WEBPACK_IMPORTED_MODULE_3__.Ay,{size:"small",value:"Thirty",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_hidden_components_List_ListItemText__WEBPACK_IMPORTED_MODULE_4__.Ay,{primary:"Thirty",tooltip:"Thirty"})},"30")]}))};Template.displayName="Template";var _play,ExampleSingleSelect={render:Template,args:_objectSpread(_objectSpread({},_Select__WEBPACK_IMPORTED_MODULE_2__.Ay.defaultProps),{},{label:"Label",helperText:"Some important text",helperIconTooltip:"Some information about that component.",placeholder:"Placeholder",required:!0,error:!1,nonEdit:!1,multiple:!1,displayEmpty:!1,actionProps:[{href:"#",label:"Action"},{href:"#",label:"Action"}]})},ExampleSingleSelectOpen={render:Template,args:_objectSpread({},ExampleSingleSelect.args),play:(_play=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(_ref){var canvasElement,canvas;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return canvasElement=_ref.canvasElement,canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement),_context.next=4,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.Q4.click(canvas.getByRole("button"));case 4:case"end":return _context.stop()}}),_callee)}))),function play(_x){return _play.apply(this,arguments)})},ExampleSingleSelectError={render:Template,args:_objectSpread(_objectSpread({},ExampleSingleSelect.args),{},{error:!0})},ExampleSingleSelectDisabled={render:Template,args:_objectSpread(_objectSpread({},ExampleSingleSelect.args),{},{disabled:!0})},ExampleSingleSelectNonEdit={render:Template,args:_objectSpread(_objectSpread({},ExampleSingleSelect.args),{},{nonEdit:!0,value:"Thirty"})},ExampleSingleSelectFullWidth={render:Template,args:_objectSpread(_objectSpread({},ExampleSingleSelect.args),{},{fullWidth:!0})};ExampleSingleSelect.parameters={...ExampleSingleSelect.parameters,docs:{...ExampleSingleSelect.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    ...Select.defaultProps,\n    label: 'Label',\n    helperText: 'Some important text',\n    helperIconTooltip: 'Some information about that component.',\n    placeholder: 'Placeholder',\n    required: true,\n    error: false,\n    nonEdit: false,\n    multiple: false,\n    displayEmpty: false,\n    actionProps: [{\n      href: '#',\n      label: 'Action'\n    }, {\n      href: '#',\n      label: 'Action'\n    }]\n  }\n}",...ExampleSingleSelect.parameters?.docs?.source}}},ExampleSingleSelectOpen.parameters={...ExampleSingleSelectOpen.parameters,docs:{...ExampleSingleSelectOpen.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    ...ExampleSingleSelect.args\n  },\n  play: async ({\n    canvasElement\n  }: {\n    canvasElement: HTMLElement;\n  }) => {\n    const canvas = within(canvasElement);\n    await userEvent.click(canvas.getByRole('button'));\n  }\n}",...ExampleSingleSelectOpen.parameters?.docs?.source}}},ExampleSingleSelectError.parameters={...ExampleSingleSelectError.parameters,docs:{...ExampleSingleSelectError.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    ...ExampleSingleSelect.args,\n    error: true\n  }\n}",...ExampleSingleSelectError.parameters?.docs?.source}}},ExampleSingleSelectDisabled.parameters={...ExampleSingleSelectDisabled.parameters,docs:{...ExampleSingleSelectDisabled.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    ...ExampleSingleSelect.args,\n    disabled: true\n  }\n}",...ExampleSingleSelectDisabled.parameters?.docs?.source}}},ExampleSingleSelectNonEdit.parameters={...ExampleSingleSelectNonEdit.parameters,docs:{...ExampleSingleSelectNonEdit.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    ...ExampleSingleSelect.args,\n    nonEdit: true,\n    value: 'Thirty'\n  }\n}",...ExampleSingleSelectNonEdit.parameters?.docs?.source}}},ExampleSingleSelectFullWidth.parameters={...ExampleSingleSelectFullWidth.parameters,docs:{...ExampleSingleSelectFullWidth.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    ...ExampleSingleSelect.args,\n    fullWidth: true\n  }\n}",...ExampleSingleSelectFullWidth.parameters?.docs?.source}}};const __namedExportsOrder=["ExampleSingleSelect","ExampleSingleSelectOpen","ExampleSingleSelectError","ExampleSingleSelectDisabled","ExampleSingleSelectNonEdit","ExampleSingleSelectFullWidth"]},"?4f7e":()=>{}}]);