"use strict";(self.webpackChunk_hcl_software_enchanted_react_components=self.webpackChunk_hcl_software_enchanted_react_components||[]).push([[6964],{"./src/Dialog/Dialog.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InteractiveExample:()=>InteractiveExample,VisualTest:()=>VisualTest,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Dialog__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Dialog/Dialog.tsx"),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Button/index.ts"),_Typography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Typography/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const __WEBPACK_DEFAULT_EXPORT__={title:"Feedback/Dialog",component:_Dialog__WEBPACK_IMPORTED_MODULE_1__.Ay,argTypes:{size:{description:"Sets max-width of Dialog",if:{arg:"interactive"},table:{defaultValue:{summary:"XS"}}},withPadding:{description:"Adds default padding of 12px all around DialogContent if set to `true`",if:{arg:"interactive"},table:{defaultValue:{summary:!0}}},onClose:{description:"Callback fired when the component requests to be closed.",if:{arg:"interactive"}},headerChildren:{description:"Node to render inside DialogTitle",if:{arg:"interactive"}},contentChildren:{description:"Node to render inside DialogContent",if:{arg:"interactive"}},footerChildren:{description:"Node to render inside DialogActions",if:{arg:"interactive"}},hideHeader:{description:"Toggles header or DialogTitle, if `true`, then it is hidden",if:{arg:"interactive"}},hideFooter:{description:"Toggles footer or DialogActions, if `true`, then it is hidden",if:{arg:"interactive"}}}};var VisualTestTemplate=function VisualTestTemplate(args){var _React$useState2=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__.useState(!0),2),open=_React$useState2[0],setOpen=_React$useState2[1],handleClose=function handleClose(){setOpen(!1)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.Ay,{variant:"outlined",onClick:function handleClickOpen(){setOpen(!0)},children:"Open alert dialog"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Dialog__WEBPACK_IMPORTED_MODULE_1__.Ay,{open,onClose:handleClose,hideHeader:!1,hideFooter:!1,headerChildren:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Typography__WEBPACK_IMPORTED_MODULE_3__.Ay,{variant:"body1",children:"Label"}),footerChildren:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.Ay,{variant:"text","aria-label":"cancel",onClick:handleClose,children:"Cancel"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.Ay,{variant:"outlined",children:"Button"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.Ay,{variant:"contained",children:"Button"})]})})]})};VisualTestTemplate.displayName="VisualTestTemplate";var InteractiveExampleTemplate=function InteractiveExampleTemplate(args){var _React$useState4=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),2),open=_React$useState4[0],setOpen=_React$useState4[1],handleClose=function handleClose(){setOpen(!1)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.Ay,{variant:"outlined",onClick:function handleClickOpen(){setOpen(!0)},children:"Open alert dialog"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Dialog__WEBPACK_IMPORTED_MODULE_1__.Ay,_objectSpread(_objectSpread({},args),{},{open,onClose:handleClose,footerChildren:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.Ay,{variant:"text","aria-label":"cancel",onClick:handleClose,children:"Cancel"}),args.footerChildren]})}))]})};InteractiveExampleTemplate.displayName="InteractiveExampleTemplate";var InteractiveExample=InteractiveExampleTemplate.bind({});InteractiveExample.parameters={options:{showPanel:!0}},InteractiveExample.args=_objectSpread(_objectSpread({interactive:!0},_Dialog__WEBPACK_IMPORTED_MODULE_1__.Ay.defaultProps),{},{headerChildren:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Typography__WEBPACK_IMPORTED_MODULE_3__.Ay,{variant:"body1",children:"Label"})}),footerChildren:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.Ay,{variant:"outlined",children:"Button"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.Ay,{variant:"contained",children:"Button"})]})});var VisualTest=VisualTestTemplate.bind({});VisualTest.parameters={options:{showPanel:!1}},VisualTestTemplate.args={},InteractiveExample.parameters={...InteractiveExample.parameters,docs:{...InteractiveExample.parameters?.docs,source:{originalSource:'args => {\n  const [open, setOpen] = React.useState(false);\n  const handleClickOpen = () => {\n    setOpen(true);\n  };\n  const handleClose = () => {\n    setOpen(false);\n  };\n  return <div>\n      <Button variant="outlined" onClick={handleClickOpen}>\n        Open alert dialog\n      </Button>\n      <Dialog {...args} open={open} onClose={handleClose} footerChildren={<>\n            <Button variant="text" aria-label="cancel" onClick={handleClose}>Cancel</Button>\n            {args.footerChildren}\n          </>} />\n    </div>;\n}',...InteractiveExample.parameters?.docs?.source}}},VisualTest.parameters={...VisualTest.parameters,docs:{...VisualTest.parameters?.docs,source:{originalSource:'args => {\n  const [open, setOpen] = React.useState(true);\n  const handleClickOpen = () => {\n    setOpen(true);\n  };\n  const handleClose = () => {\n    setOpen(false);\n  };\n  return <div>\n      <Button variant="outlined" onClick={handleClickOpen}>\n        Open alert dialog\n      </Button>\n      <Dialog open={open} onClose={handleClose} hideHeader={false} hideFooter={false} headerChildren={<Typography variant="body1">Label</Typography>}\n    // Should show placeholder (if undefined) according to Figma file, leaving this commented-out example contentChildren arg value as guide\n    // contentChildren: <Typography variant="body1">{\'Sample Content\'}</Typography>,\n    footerChildren={<>\n            <Button variant="text" aria-label="cancel" onClick={handleClose}>Cancel</Button>\n            <Button variant="outlined">Button</Button>\n            <Button variant="contained">Button</Button>\n          </>} />\n    </div>;\n}',...VisualTest.parameters?.docs?.source}}};const __namedExportsOrder=["InteractiveExample","VisualTest"]}}]);