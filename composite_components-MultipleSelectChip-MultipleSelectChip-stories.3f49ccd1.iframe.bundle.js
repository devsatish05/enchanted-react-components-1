"use strict";(self.webpackChunk_hcl_software_enchanted_react_components=self.webpackChunk_hcl_software_enchanted_react_components||[]).push([[4681],{"./node_modules/@carbon/icons/es/checkmark/32.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_32});var _32={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"}}],name:"checkmark",size:32}},"./node_modules/@carbon/icons/es/close--filled/32.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_32});var _32={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M16,2C8.2,2,2,8.2,2,16s6.2,14,14,14s14-6.2,14-14S23.8,2,16,2z M21.4,23L16,17.6L10.6,23L9,21.4l5.4-5.4L9,10.6L10.6,9\tl5.4,5.4L21.4,9l1.6,1.6L17.6,16l5.4,5.4L21.4,23z"}},{elem:"path",attrs:{d:"M14.4 16L9 10.6 10.6 9 16 14.4 21.4 9 23 10.6 17.6 16 23 21.4 21.4 23 16 17.6 10.6 23 9 21.4 14.4 16","data-icon-path":"inner-path",opacity:"0"}}],name:"close--filled",size:32}},"./node_modules/@hcl-software/enchanted-icons/dist/carbon/es/checkmark/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var _32_1=__importDefault(__webpack_require__("./node_modules/@carbon/icons/es/checkmark/32.js")),utils_1=__webpack_require__("./node_modules/@hcl-software/enchanted-icons/dist/utils/index.js");exports.default=(0,utils_1.createSvgIcon)(_32_1.default.name,_32_1.default.size,_32_1.default.content,_32_1.default.attrs)},"./node_modules/@hcl-software/enchanted-icons/dist/carbon/es/close--filled/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var _32_1=__importDefault(__webpack_require__("./node_modules/@carbon/icons/es/close--filled/32.js")),utils_1=__webpack_require__("./node_modules/@hcl-software/enchanted-icons/dist/utils/index.js");exports.default=(0,utils_1.createSvgIcon)(_32_1.default.name,_32_1.default.size,_32_1.default.content,_32_1.default.attrs)},"./src/composite_components/MultipleSelectChip/MultipleSelectChip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ExampleMultipleSelectChip:()=>ExampleMultipleSelectChip,ExampleMultipleSelectChipDisabled:()=>ExampleMultipleSelectChipDisabled,ExampleMultipleSelectChipError:()=>ExampleMultipleSelectChipError,ExampleMultipleSelectChipFullWidth:()=>ExampleMultipleSelectChipFullWidth,ExampleMultipleSelectChipNonEdit:()=>ExampleMultipleSelectChipNonEdit,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MultipleSelectChip_stories});var react=__webpack_require__("./node_modules/react/index.js"),es_close=__webpack_require__("./node_modules/@hcl-software/enchanted-icons/dist/carbon/es/close/index.js"),close_default=__webpack_require__.n(es_close),checkmark=__webpack_require__("./node_modules/@hcl-software/enchanted-icons/dist/carbon/es/checkmark/index.js"),checkmark_default=__webpack_require__.n(checkmark),Chip=__webpack_require__("./src/Chip/Chip.tsx"),close_filled=__webpack_require__("./node_modules/@hcl-software/enchanted-icons/dist/carbon/es/close--filled/index.js"),close_filled_default=__webpack_require__.n(close_filled),Autocomplete=__webpack_require__("./src/Autocomplete/index.ts"),colors=__webpack_require__("./src/colors/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["emptyOptions"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var MultipleSelectChip=function MultipleSelectChip(_ref){var props=_extends({},(function _objectDestructuringEmpty(obj){if(null==obj)throw new TypeError("Cannot destructure "+obj)}(_ref),_ref)),emptyOptions=props.emptyOptions,rest=_objectWithoutProperties(props,_excluded),sxProps=_objectSpread(_objectSpread({},{"& .MuiInputBase-root":{height:"100% !important",paddingRight:function getMuiInputBasePaddingRight(){return props.error&&!props.emptyOptions?"82px !important":props.error||props.emptyOptions?props.error&&props.emptyOptions?"60px !important":"40px !important":"56px !important"}(),"& input":{minWidth:"70px !important",paddingLeft:"2px !important",paddingTop:"6px !important",paddingBottom:"6px !important"}},"& .MuiInputBase-root.Mui-disabled":{backgroundColor:colors.ON.WHITE100P},"& .MuiOutlinedInput-root":{width:props.fullWidth?"100%":"500px",paddingLeft:"7px !important"},"& .MuiFormControl-root":{width:props.fullWidth?"100%":"500px",display:"block"},"& .MuiChip-root":{padding:"0px 4px !important",margin:"2px",maxWidth:"calc(100% - 6px)",border:0}}),rest.sx);return(0,jsx_runtime.jsx)(Autocomplete.Ay,_objectSpread(_objectSpread({},rest),{},{freeSolo:emptyOptions,options:emptyOptions?[]:rest.options,sx:sxProps,multiple:!0,clearIcon:(0,jsx_runtime.jsx)(close_filled_default(),{color:"action"})}))};MultipleSelectChip.displayName="MultipleSelectChip",MultipleSelectChip.defaultProps={emptyOptions:!1};const MultipleSelectChip_MultipleSelectChip=MultipleSelectChip;try{MultipleSelectChip.displayName="MultipleSelectChip",MultipleSelectChip.__docgenInfo={description:"",displayName:"MultipleSelectChip",props:{emptyOptions:{defaultValue:{value:"false"},description:"",name:"emptyOptions",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean | 0 | 1"}},actionProps:{defaultValue:null,description:"",name:"actionProps",required:!1,type:{name:"ActionProps[]"}},nonEdit:{defaultValue:null,description:"",name:"nonEdit",required:!1,type:{name:"boolean"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},helperIconTooltip:{defaultValue:null,description:"",name:"helperIconTooltip",required:!1,type:{name:"string"}},tooltipPlacement:{defaultValue:null,description:"",name:"tooltipPlacement",required:!1,type:{name:"enum",value:[{value:'"top-start"'},{value:'"top"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right"'},{value:'"right-end"'},{value:'"bottom-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"left-end"'},{value:'"left"'},{value:'"left-start"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},focused:{defaultValue:null,description:"",name:"focused",required:!1,type:{name:"boolean"}},hiddenLabel:{defaultValue:null,description:"",name:"hiddenLabel",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"The size of the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'}]}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},clearIcon:{defaultValue:null,description:"The icon to display in place of the default clear icon.",name:"clearIcon",required:!1,type:{name:"ReactNode"}},endAdornmentAction:{defaultValue:null,description:"",name:"endAdornmentAction",required:!1,type:{name:"ReactNode"}},renderNonEditInput:{defaultValue:null,description:"",name:"renderNonEditInput",required:!1,type:{name:"(() => ReactNode)"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/composite_components/MultipleSelectChip/MultipleSelectChip.tsx#MultipleSelectChip"]={docgenInfo:MultipleSelectChip.__docgenInfo,name:"MultipleSelectChip",path:"src/composite_components/MultipleSelectChip/MultipleSelectChip.tsx#MultipleSelectChip"})}catch(__react_docgen_typescript_loader_error){}var MenuItem=__webpack_require__("./src/Menu/MenuItem.tsx"),ListItemIcon=__webpack_require__("./src/List/ListItemIcon.tsx"),ListItemText=__webpack_require__("./src/List/ListItemText.tsx"),data=__webpack_require__("./src/Autocomplete/data.ts"),Tooltip=__webpack_require__("./src/Tooltip/index.ts");function MultipleSelectChip_stories_typeof(o){return MultipleSelectChip_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},MultipleSelectChip_stories_typeof(o)}function MultipleSelectChip_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function MultipleSelectChip_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?MultipleSelectChip_stories_ownKeys(Object(t),!0).forEach((function(r){MultipleSelectChip_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):MultipleSelectChip_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function MultipleSelectChip_stories_defineProperty(obj,key,value){return(key=function MultipleSelectChip_stories_toPropertyKey(t){var i=function MultipleSelectChip_stories_toPrimitive(t,r){if("object"!=MultipleSelectChip_stories_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=MultipleSelectChip_stories_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==MultipleSelectChip_stories_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const MultipleSelectChip_stories={title:"Inputs/MultipleSelectChip",component:MultipleSelectChip_MultipleSelectChip,argTypes:{error:{control:"boolean",table:{defaultValue:{summary:!1}},description:"Indicates the combobox value is invalid."},emptyOptions:{control:"boolean",description:"Adds freeSolo and empty options array to the MultiSelectChip which would allow it to accept free undetermined values (e.g. any word or phrase)"},helperIconTooltip:{table:{defaultValue:{summary:"Some information about that component."}},description:"Tooltip text hovering on ? mark for MultiSelectChip component"},tooltipPlacement:{description:"Tooltip placement for ? mark for MultiSelectChip component.",options:[Tooltip.FX.TOPSTART,Tooltip.FX.TOP,Tooltip.FX.TOPEND,Tooltip.FX.RIGHTSTART,Tooltip.FX.RIGHT,Tooltip.FX.RIGHTEND,Tooltip.FX.BOTTOMEND,Tooltip.FX.BOTTOM,Tooltip.FX.BOTTOMSTART,Tooltip.FX.LEFTEND,Tooltip.FX.LEFT,Tooltip.FX.LEFTSTART],control:{type:"radio"},table:{defaultValue:{summary:Tooltip.FX.BOTTOM}}},required:{control:"boolean",table:{defaultValue:{summary:!0}},description:"Indicates that multiSelectchip is required field if it is true"},label:{table:{defaultValue:{summary:"Label"}},description:"Label for MultiSelectChip component"},helperText:{table:{defaultValue:{summary:"Helper text"}},description:"The helper text content."},sx:{description:"The system prop that allows defining system overrides as well as additional CSS styles."},placeholder:{description:"The short hint displayed in the input before the user enters a value.",table:{defaultValue:{summary:"Placeholder"}}},focused:{control:"boolean",table:{defaultValue:{summary:!1}},description:"If `true`, the component is displayed in focused state."},hiddenLabel:{control:"boolean",table:{defaultValue:{summary:!1}},description:"If `true`, the label is hidden."},nonEdit:{control:"boolean",table:{defaultValue:{summary:!1}},description:"If `true` value cannot be editable"},actionProps:{description:"Contains the action props and key-value"},disabled:{description:"If true, the component is disabled."},fullWidth:{description:"If true, the input will take up the full width of its container.",table:{defaultValue:{summary:!1}}},filterSelectedOptions:{description:"If true, hide the selected options from the list box.",table:{defaultValue:{summary:!0}}},options:{description:"Array of options."},id:{description:"Id of the component.",table:{defaultValue:{summary:"id"}}},clearIcon:{control:!1,description:"The clear Icon used to clear chips."},endAdornmentAction:{control:!1,description:"End Adornment Action of the component."},renderNonEditInput:{control:!1,description:"Render the component Non Edittable Input"},ref:{control:!1,description:"https://mui.com/material-ui/api/chip/"},getOptionLabel:{control:!1,description:"https://mui.com/material-ui/api/chip/"},autoFocus:{control:!1,table:{defaultValue:{summary:!1}},description:"https://mui.com/material-ui/api/chip/"}}};var Template=function Template(args){var _React$useState2=_slicedToArray(react.useState([data.S[13],data.S[10],data.S[2]]),2),value=_React$useState2[0],setValue=_React$useState2[1];return(0,jsx_runtime.jsx)(MultipleSelectChip_MultipleSelectChip,MultipleSelectChip_stories_objectSpread(MultipleSelectChip_stories_objectSpread({},args),{},{value,options:data.S,onChange:function onChange(event,newValue){setValue(_toConsumableArray(newValue))},getOptionLabel:function getOptionLabel(option){return option.label},filterSelectedOptions:!1,disableCloseOnSelect:!0,renderOption:function renderOption(props,option,state){return(0,jsx_runtime.jsxs)(MenuItem.Ay,MultipleSelectChip_stories_objectSpread(MultipleSelectChip_stories_objectSpread({disableGutters:!0,cascading:!1,selected:state.selected,size:"small"},props),{},{children:[state.selected&&(0,jsx_runtime.jsx)(ListItemIcon.Ay,{children:(0,jsx_runtime.jsx)(checkmark_default(),{fontSize:"small"})}),(0,jsx_runtime.jsx)(ListItemText.Ay,{primary:option.label,tooltip:option.label,inset:!state.selected})]}))},renderTags:function renderTags(tagValue,getTagProps){return tagValue.map((function(option,index){return(0,jsx_runtime.jsx)(Chip.Ay,MultipleSelectChip_stories_objectSpread({trailingIcon:(0,jsx_runtime.jsx)(close_default(),{}),onDeleteFunc:function onDeleteFunc(){setValue(_toConsumableArray(value.filter((function(valueItem){return value.indexOf(valueItem)!==index}))))},hideTrailingIcon:!1,size:"small",variant:"filled",label:"string"==typeof option?option:option.label},getTagProps({index})))}))},renderNonEditInput:function renderNonEditInput(){return value.map((function(option,index){return(0,jsx_runtime.jsx)(Chip.Ay,{trailingIcon:(0,jsx_runtime.jsx)(close_default(),{}),onDeleteFunc:function onDeleteFunc(){setValue(_toConsumableArray(value.filter((function(valueItem){return value.indexOf(valueItem)!==index}))))},disabled:args.disabled,hideTrailingIcon:!0,size:"small",variant:"filled",label:option.label},option.label)}))}}))};Template.displayName="Template";var ExampleMultipleSelectChip={render:Template,args:MultipleSelectChip_stories_objectSpread(MultipleSelectChip_stories_objectSpread({},MultipleSelectChip_MultipleSelectChip.defaultProps),{},{size:"medium",label:"Example label",helperText:"Helper text",helperIconTooltip:"Some information about that component.",tooltipPlacement:Tooltip.FX.BOTTOM,placeholder:"Placeholder",required:!0,disabled:!1,error:!1,fullWidth:!1,focused:!1,autoFocus:!1,hiddenLabel:!1,nonEdit:!1,actionProps:[{href:"#",label:"Action"},{href:"#",label:"Action"}],id:"tags-outlined",filterSelectedOptions:!0,options:data.S,sx:{},getOptionLabel:function getOptionLabel(option){return option.label},emptyOptions:!1})},ExampleMultipleSelectChipError={render:Template,args:MultipleSelectChip_stories_objectSpread(MultipleSelectChip_stories_objectSpread({},ExampleMultipleSelectChip.args),{},{error:!0})},ExampleMultipleSelectChipDisabled={render:Template,args:MultipleSelectChip_stories_objectSpread(MultipleSelectChip_stories_objectSpread({},ExampleMultipleSelectChip.args),{},{disabled:!0})},ExampleMultipleSelectChipNonEdit={render:Template,args:MultipleSelectChip_stories_objectSpread(MultipleSelectChip_stories_objectSpread({},ExampleMultipleSelectChip.args),{},{nonEdit:!0})},ExampleMultipleSelectChipFullWidth={render:Template,args:MultipleSelectChip_stories_objectSpread(MultipleSelectChip_stories_objectSpread({},ExampleMultipleSelectChip.args),{},{fullWidth:!0})};ExampleMultipleSelectChip.parameters={...ExampleMultipleSelectChip.parameters,docs:{...ExampleMultipleSelectChip.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    ...MultipleSelectChip.defaultProps,\n    size: 'medium',\n    label: 'Example label',\n    helperText: 'Helper text',\n    helperIconTooltip: 'Some information about that component.',\n    tooltipPlacement: TooltipPlacement.BOTTOM,\n    placeholder: 'Placeholder',\n    required: true,\n    disabled: false,\n    error: false,\n    fullWidth: false,\n    focused: false,\n    autoFocus: false,\n    hiddenLabel: false,\n    nonEdit: false,\n    actionProps: [{\n      href: '#',\n      label: 'Action'\n    }, {\n      href: '#',\n      label: 'Action'\n    }],\n    id: 'tags-outlined',\n    filterSelectedOptions: true,\n    options: top100Films,\n    sx: {},\n    getOptionLabel: (option: IFilm) => {\n      return (option as IFilm).label;\n    },\n    emptyOptions: false\n  }\n}",...ExampleMultipleSelectChip.parameters?.docs?.source}}},ExampleMultipleSelectChipError.parameters={...ExampleMultipleSelectChipError.parameters,docs:{...ExampleMultipleSelectChipError.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    ...ExampleMultipleSelectChip.args,\n    error: true\n  }\n}",...ExampleMultipleSelectChipError.parameters?.docs?.source}}},ExampleMultipleSelectChipDisabled.parameters={...ExampleMultipleSelectChipDisabled.parameters,docs:{...ExampleMultipleSelectChipDisabled.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    ...ExampleMultipleSelectChip.args,\n    disabled: true\n  }\n}",...ExampleMultipleSelectChipDisabled.parameters?.docs?.source}}},ExampleMultipleSelectChipNonEdit.parameters={...ExampleMultipleSelectChipNonEdit.parameters,docs:{...ExampleMultipleSelectChipNonEdit.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    ...ExampleMultipleSelectChip.args,\n    nonEdit: true\n  }\n}",...ExampleMultipleSelectChipNonEdit.parameters?.docs?.source}}},ExampleMultipleSelectChipFullWidth.parameters={...ExampleMultipleSelectChipFullWidth.parameters,docs:{...ExampleMultipleSelectChipFullWidth.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    ...ExampleMultipleSelectChip.args,\n    fullWidth: true\n  }\n}",...ExampleMultipleSelectChipFullWidth.parameters?.docs?.source}}};const __namedExportsOrder=["ExampleMultipleSelectChip","ExampleMultipleSelectChipError","ExampleMultipleSelectChipDisabled","ExampleMultipleSelectChipNonEdit","ExampleMultipleSelectChipFullWidth"]},"./src/Autocomplete/data.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>top100Films});var top100Films=[{label:"The Shawshank Redemption",year:1994},{label:"The Godfather",year:1972},{label:"The Godfather: Part II",year:1974},{label:"The Dark Knight",year:2008},{label:"12 Angry Men",year:1957},{label:"Schindler's List",year:1993},{label:"Pulp Fiction",year:1994},{label:"The Lord of the Rings: The Return of the King",year:2003},{label:"The Good, the Bad and the Ugly",year:1966},{label:"Fight Club",year:1999},{label:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{label:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{label:"Forrest Gump",year:1994},{label:"Inception",year:2010},{label:"The Lord of the Rings: The Two Towers",year:2002},{label:"One Flew Over the Cuckoo's Nest",year:1975},{label:"Goodfellas",year:1990},{label:"The Matrix",year:1999},{label:"Seven Samurai",year:1954},{label:"Star Wars: Episode IV - A New Hope",year:1977},{label:"City of God",year:2002},{label:"Se7en",year:1995},{label:"The Silence of the Lambs",year:1991},{label:"It's a Wonderful Life",year:1946},{label:"Life Is Beautiful",year:1997},{label:"The Usual Suspects",year:1995},{label:"Léon: The Professional",year:1994},{label:"Spirited Away",year:2001},{label:"Saving Private Ryan",year:1998},{label:"Once Upon a Time in the West",year:1968},{label:"American History X",year:1998},{label:"Interstellar",year:2014},{label:"Casablanca",year:1942},{label:"City Lights",year:1931},{label:"Psycho",year:1960},{label:"The Green Mile",year:1999},{label:"The Intouchables",year:2011},{label:"Modern Times",year:1936},{label:"Raiders of the Lost Ark",year:1981},{label:"Rear Window",year:1954},{label:"The Pianist",year:2002},{label:"The Departed",year:2006},{label:"Terminator 2: Judgment Day",year:1991},{label:"Back to the Future",year:1985},{label:"Whiplash",year:2014},{label:"Gladiator",year:2e3},{label:"Memento",year:2e3},{label:"The Prestige",year:2006},{label:"The Lion King",year:1994},{label:"Apocalypse Now",year:1979},{label:"Alien",year:1979},{label:"Sunset Boulevard",year:1950},{label:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{label:"The Great Dictator",year:1940},{label:"Cinema Paradiso",year:1988},{label:"The Lives of Others",year:2006},{label:"Grave of the Fireflies",year:1988},{label:"Paths of Glory",year:1957},{label:"Django Unchained",year:2012},{label:"The Shining",year:1980},{label:"WALL·E",year:2008},{label:"American Beauty",year:1999},{label:"The Dark Knight Rises",year:2012},{label:"Princess Mononoke",year:1997},{label:"Aliens",year:1986},{label:"Oldboy",year:2003},{label:"Once Upon a Time in America",year:1984},{label:"Witness for the Prosecution",year:1957},{label:"Das Boot",year:1981},{label:"Citizen Kane",year:1941},{label:"North by Northwest",year:1959},{label:"Vertigo",year:1958},{label:"Star Wars: Episode VI - Return of the Jedi",year:1983},{label:"Reservoir Dogs",year:1992},{label:"Braveheart",year:1995},{label:"M",year:1931},{label:"Requiem for a Dream",year:2e3},{label:"Amélie",year:2001},{label:"A Clockwork Orange",year:1971},{label:"Like Stars on Earth",year:2007},{label:"Taxi Driver",year:1976},{label:"Lawrence of Arabia",year:1962},{label:"Double Indemnity",year:1944},{label:"Eternal Sunshine of the Spotless Mind",year:2004},{label:"Amadeus",year:1984},{label:"To Kill a Mockingbird",year:1962},{label:"Toy Story 3",year:2010},{label:"Logan",year:2017},{label:"Full Metal Jacket",year:1987},{label:"Dangal",year:2016},{label:"The Sting",year:1973},{label:"2001: A Space Odyssey",year:1968},{label:"Singin' in the Rain",year:1952},{label:"Toy Story",year:1995},{label:"Bicycle Thieves",year:1948},{label:"The Kid",year:1921},{label:"Inglourious Basterds",year:2009},{label:"Snatch",year:2e3},{label:"3 Idiots",year:2009},{label:"Monty Python and the Holy Grail",year:1975}]}}]);