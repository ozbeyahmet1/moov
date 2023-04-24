(self.webpackChunkmoov=self.webpackChunkmoov||[]).push([[964],{"./src/components/ui/pagination/pagination.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Pagination:()=>pagination_stories_Pagination,default:()=>pagination_stories});var _Pagination$parameter,_Pagination$parameter2,_Pagination$parameter3,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),next_router=__webpack_require__("./node_modules/next/router.js"),__jsx=react.createElement,twClasses_paginationElement="rounded-sm border-2 border-white bg-transparent px-2 text-white cursor-pointer",twClasses_currentPaginationElement="rounded-sm border-2 border-white bg-grey px-2 text-white cursor-pointer",twClasses_nextButton="rounded-sm border-2 border-white bg-transparent px-2 text-white cursor-pointer ml-2",twClasses_prevButton="rounded-sm border-2 border-white bg-transparent px-2 text-white cursor-pointer mr-2",Pagination=function Pagination(_ref){var element_number=_ref.element_number,total_page=_ref.total_page,current_page=_ref.current_page,query=_ref.query,router=(0,next_router.useRouter)(),pageArray=[],pageEnd=[],pageStart=[];total_page<element_number?pageArray=Array.from({length:total_page},(function(_,i){return i+1})):Number(current_page+element_number/2+1)>=total_page?pageArray=Array.from({length:element_number},(function(_,i){return total_page-(element_number-1)+i})):(pageStart=Array.from({length:element_number/2},(function(_,i){return current_page+i})),pageEnd=Array.from({length:element_number/2},(function(_,i){return total_page-2+i})));var _useState=(0,react.useState)(""),goTo=_useState[0],setGoTo=_useState[1];return __jsx("div",{className:"flex items-center "},!(1==current_page)&&__jsx("p",{onClick:function onClick(){router.push("/search?query=".concat(query,"&page=").concat(current_page-1))},className:twClasses_prevButton},"Prev"),pageArray.length>0&&__jsx("div",{className:"flex items-center gap-2"},pageArray.map((function(page){return __jsx("p",{className:page==current_page?twClasses_currentPaginationElement:twClasses_paginationElement,key:page,onClick:function onClick(){router.push("/search?query=".concat(query,"&page=").concat(page))}},page)}))),__jsx("div",{className:"flex items-center gap-2"},pageStart.map((function(page){return __jsx("p",{className:page==current_page?twClasses_currentPaginationElement:twClasses_paginationElement,key:page,onClick:function onClick(){router.push("/search?query=".concat(query,"&page=").concat(page))}},page)}))),current_page+element_number<total_page+1&&__jsx("p",{className:"text-white"},"................"),__jsx("div",{className:"flex items-center gap-2"},pageEnd.map((function(page){return __jsx("p",{onClick:function onClick(){router.push("/search?query=".concat(query,"&page=").concat(page))},className:page==current_page?twClasses_currentPaginationElement:twClasses_paginationElement,key:page},page)}))),!(current_page==total_page)&&__jsx("p",{onClick:function onClick(){router.push("/search?query=".concat(query,"&page=").concat(current_page+1))},className:twClasses_nextButton},"Next"),__jsx("form",{onSubmit:function handleSubmit(event){event.preventDefault(),router.push("/search?query=".concat(query,"&page=").concat(goTo))}},__jsx("input",{type:"number",placeholder:"Go To",className:"ml-2 w-20 appearance-none  border-2  bg-transparent px-2  text-base text-grey  placeholder-grey shadow-sm focus:outline-none",onChange:function handleChange(event){setGoTo(event.target.value)}})))};Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{element_number:{required:!0,tsType:{name:"number"},description:""},total_page:{required:!0,tsType:{name:"number"},description:""},current_page:{required:!0,tsType:{name:"number"},description:""},query:{required:!0,tsType:{name:"string"},description:""}}};try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",displayName:"Pagination",props:{element_number:{defaultValue:null,description:"",name:"element_number",required:!0,type:{name:"number"}},total_page:{defaultValue:null,description:"",name:"total_page",required:!0,type:{name:"number"}},current_page:{defaultValue:null,description:"",name:"current_page",required:!0,type:{name:"number"}},query:{defaultValue:null,description:"",name:"query",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/pagination/pagination.tsx#Pagination"]={docgenInfo:Pagination.__docgenInfo,name:"Pagination",path:"src/components/ui/pagination/pagination.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const pagination_stories={title:"UI",component:Pagination};var pagination_stories_Pagination={args:{current_page:1,element_number:6,query:"",total_page:323}};pagination_stories_Pagination.parameters=_objectSpread(_objectSpread({},pagination_stories_Pagination.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Pagination$parameter=pagination_stories_Pagination.parameters)||void 0===_Pagination$parameter?void 0:_Pagination$parameter.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    current_page: 1,\n    element_number: 6,\n    query: "",\n    total_page: 323\n  }\n}'},null===(_Pagination$parameter2=pagination_stories_Pagination.parameters)||void 0===_Pagination$parameter2||null===(_Pagination$parameter3=_Pagination$parameter2.docs)||void 0===_Pagination$parameter3?void 0:_Pagination$parameter3.source)})})},"?6e58":()=>{}}]);