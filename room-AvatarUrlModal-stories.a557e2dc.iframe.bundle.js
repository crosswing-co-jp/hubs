"use strict";(globalThis.webpackChunkhubs=globalThis.webpackChunkhubs||[]).push([[5951],{"./src/react-components/room/AvatarUrlModal.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AvatarUrlModal_stories});__webpack_require__("./node_modules/react/index.js");var _Base$parameters,_Base$parameters2,_Base$parameters2$doc,RoomLayout=__webpack_require__("./src/react-components/layout/RoomLayout.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Modal=__webpack_require__("./src/react-components/modal/Modal.js"),CloseButton=__webpack_require__("./src/react-components/input/CloseButton.js"),TextInputField=__webpack_require__("./src/react-components/input/TextInputField.js"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),Button=__webpack_require__("./src/react-components/input/Button.js"),message=__webpack_require__("./node_modules/react-intl/lib/src/components/message.js"),Column=__webpack_require__("./src/react-components/layout/Column.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function AvatarUrlModal(_ref){let{onSubmit,onClose}=_ref;const{handleSubmit,register}=(0,index_esm.cI)();return(0,jsx_runtime.jsx)(Modal.u,{title:"Custom Avatar URL",beforeTitle:(0,jsx_runtime.jsx)(CloseButton.P,{onClick:onClose}),children:(0,jsx_runtime.jsxs)(Column.s,{as:"form",padding:!0,center:!0,onSubmit:handleSubmit(onSubmit),children:[(0,jsx_runtime.jsx)(TextInputField.Y,_objectSpread(_objectSpread({label:(0,jsx_runtime.jsx)(message.Z,{id:"avatar-url-modal.avatar-url-label",defaultMessage:"Avatar GLB URL"}),placeholder:"https://example.com/avatar.glb",type:"url"},register("url",{required:!0})),{},{description:(0,jsx_runtime.jsx)("a",{href:"https://hubs.mozilla.com/docs/intro-avatars.html",target:"_blank",rel:"noopener noreferrer",children:(0,jsx_runtime.jsx)(message.Z,{id:"avatar-url-modal.custom-avatar-docs-link",defaultMessage:"Learn more about custom avatars"})})})),(0,jsx_runtime.jsx)(Button.VD,{type:"submit"})]})})}function AvatarUrlModal_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function AvatarUrlModal_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?AvatarUrlModal_stories_ownKeys(Object(source),!0).forEach((function(key){AvatarUrlModal_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):AvatarUrlModal_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function AvatarUrlModal_stories_defineProperty(obj,key,value){return(key=function AvatarUrlModal_stories_toPropertyKey(arg){var key=function AvatarUrlModal_stories_toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}AvatarUrlModal.displayName="AvatarUrlModal",AvatarUrlModal.propTypes={onSubmit:prop_types_default().func,onClose:prop_types_default().func},AvatarUrlModal.__docgenInfo={description:"",methods:[],displayName:"AvatarUrlModal",props:{onSubmit:{description:"",type:{name:"func"},required:!1},onClose:{description:"",type:{name:"func"},required:!1}}};const AvatarUrlModal_stories={title:"Room/AvatarUrlModal",parameters:{layout:"fullscreen"}},Base=()=>(0,jsx_runtime.jsx)(RoomLayout.s,{modal:(0,jsx_runtime.jsx)(AvatarUrlModal,{})});Base.displayName="Base",Base.parameters=AvatarUrlModal_stories_objectSpread(AvatarUrlModal_stories_objectSpread({},Base.parameters),{},{docs:AvatarUrlModal_stories_objectSpread(AvatarUrlModal_stories_objectSpread({},null===(_Base$parameters=Base.parameters)||void 0===_Base$parameters?void 0:_Base$parameters.docs),{},{source:AvatarUrlModal_stories_objectSpread({originalSource:"() => <RoomLayout modal={<AvatarUrlModal />} />"},null===(_Base$parameters2=Base.parameters)||void 0===_Base$parameters2||null===(_Base$parameters2$doc=_Base$parameters2.docs)||void 0===_Base$parameters2$doc?void 0:_Base$parameters2$doc.source)})});const __namedExportsOrder=["Base"];Base.__docgenInfo={description:"",methods:[],displayName:"Base"}},"./src/react-components/input/CloseButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>CloseButton_CloseButton});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),IconButton=__webpack_require__("./src/react-components/input/IconButton.js"),Close=__webpack_require__("./src/react-components/icons/Close.svg"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),CloseButton=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/react-components/input/CloseButton.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CloseButton.Z,options);const input_CloseButton=CloseButton.Z&&CloseButton.Z.locals?CloseButton.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["lg","className"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function CloseButton_CloseButton(_ref){let{lg,className}=_ref,rest=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsx)(IconButton.h,_objectSpread(_objectSpread({className:classnames_default()({[input_CloseButton.lg]:lg},className)},rest),{},{children:(0,jsx_runtime.jsx)(Close.r,{width:16,height:16})}))}CloseButton_CloseButton.displayName="CloseButton",CloseButton_CloseButton.propTypes={className:prop_types_default().string,lg:prop_types_default().bool},CloseButton_CloseButton.__docgenInfo={description:"",methods:[],displayName:"CloseButton",props:{className:{description:"",type:{name:"string"},required:!1},lg:{description:"",type:{name:"bool"},required:!1}}}},"./src/react-components/icons/Close.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>SvgClose});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const SvgClose=_ref=>{let{title,titleId,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M17 17 3 3",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M17 3 3 17",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/react-components/input/CloseButton.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@media(min-width: 992px)and (min-height: 600px){.CloseButton__lg__CMV4C svg{height:20px;width:20px}}","",{version:3,sources:["webpack://./src/react-components/input/CloseButton.scss"],names:[],mappings:"AAGE,gDACE,4BACE,WAAA,CACA,UAAA,CAAA",sourcesContent:['@use "../styles/theme.scss";\n\n:local(.lg) {\n  @media(min-width: theme.$breakpoint-lg) and (min-height: theme.$breakpoint-vr) {\n    svg {\n      height: 20px;\n      width: 20px;\n    }\n  }\n}'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={lg:"CloseButton__lg__CMV4C"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);