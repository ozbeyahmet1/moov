(self.webpackChunkmoov=self.webpackChunkmoov||[]).push([[985],{'./node_modules/@storybook/nextjs/dist/font/webpack/loader/storybook-nextjs-font-loader.js?{"source":"next/font/google","props":{"subsets":["latin-ext"]},"fontFamily":"Tilt_Prism","filename":"/Users/ahmet/Desktop/Coding/moov/src/components/layout/logo/logo.tsx"}!./node_modules/next/font/google/index.js':module=>{if(!document.getElementById("id-6b0826")){const fontDeclarations="/* vietnamese */\n@font-face {\n  font-family: 'Tilt Prism';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/tiltprism/v7/5h11iZgyPHoZ3YikNzWGfWey2dCAZXT-bH9V4VGn-FJ7tLI25oc_rIbAqT6qvcudKsLNFFo.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Tilt Prism';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/tiltprism/v7/5h11iZgyPHoZ3YikNzWGfWey2dCAZXT-bH9V4VGn-FJ7tLI25oc_rIbAqD6qvcudKsLNFFo.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Tilt Prism';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/tiltprism/v7/5h11iZgyPHoZ3YikNzWGfWey2dCAZXT-bH9V4VGn-FJ7tLI25oc_rIbApj6qvcudKsLN.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",style=document.createElement("style");style.setAttribute("id","font-face-6b0826"),style.innerHTML=fontDeclarations,document.head.appendChild(style);const classNamesCSS="\n    .tilt-prism-normal {\n      font-family: Tilt Prism;\n      font-style: normal;\n      \n    }\n\n    \n  ",classNamesStyle=document.createElement("style");classNamesStyle.setAttribute("id","classnames-6b0826"),classNamesStyle.innerHTML=classNamesCSS,document.head.appendChild(classNamesStyle)}module.exports={className:"tilt-prism-normal",style:{fontFamily:"Tilt Prism",fontStyle:"normal"}}},"./src/components/layout/navbar/navbar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NavBar:()=>NavBar,default:()=>navbar_stories});var _NavBar$parameters,_NavBar$parameters2,_NavBar$parameters2$d,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),index_esm=__webpack_require__("./node_modules/react-icons/ai/index.esm.js"),input=__webpack_require__("./src/components/ui/input/input.tsx"),logo=__webpack_require__("./src/components/layout/logo/logo.tsx"),__jsx=react.createElement,Navbar=function Navbar(){var _useState=(0,react.useState)(!1),sticky=_useState[0],setSticky=_useState[1],handleStickyNavbar=function handleStickyNavbar(){window.scrollY>=90?setSticky(!0):setSticky(!1)};return(0,react.useEffect)((function(){window.addEventListener("scroll",handleStickyNavbar)})),__jsx("header",{className:"left-0 top-0 z-40 flex h-20 w-full flex-col items-center justify-center border-b-[0.5px]  border-solid border-grey bg-transparent transition duration-300 ease-in-out ".concat(sticky?"!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-blue dark:!bg-opacity-50":"absolute")},__jsx("div",{className:"container px-0"},__jsx("div",{className:"relative flex items-center justify-between"},__jsx("div",{className:"w-60 max-w-full px-2 xl:mr-12"},__jsx(link_default(),{href:"/",className:"header-logo block w-full "},__jsx(logo.T,null))),__jsx("div",{className:"flex items-center gap-2"},__jsx(link_default(),{href:"/favorites"},__jsx(index_esm.lo,{className:"cursor-pointer",color:"white",size:40})),__jsx("div",{className:"md:invisible lg:visible"},__jsx(input.I,null))))))};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}Navbar.displayName="Navbar",Navbar.__docgenInfo={description:"",methods:[],displayName:"Navbar"};const navbar_stories={title:"Layouts",component:Navbar};var NavBar={};NavBar.parameters=_objectSpread(_objectSpread({},NavBar.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_NavBar$parameters=NavBar.parameters)||void 0===_NavBar$parameters?void 0:_NavBar$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_NavBar$parameters2=NavBar.parameters)||void 0===_NavBar$parameters2||null===(_NavBar$parameters2$d=_NavBar$parameters2.docs)||void 0===_NavBar$parameters2$d?void 0:_NavBar$parameters2$d.source)})})},"./src/components/layout/logo/logo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>Logo});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),storybook_nextjs_font_loader_source_next_font_google_props_subsets_latin_ext_fontFamily_Tilt_Prism_filename_Users_ahmet_Desktop_Coding_moov_src_components_layout_logo_logo_tsx_next_font_google__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__('./node_modules/@storybook/nextjs/dist/font/webpack/loader/storybook-nextjs-font-loader.js?{"source":"next/font/google","props":{"subsets":["latin-ext"]},"fontFamily":"Tilt_Prism","filename":"/Users/ahmet/Desktop/Coding/moov/src/components/layout/logo/logo.tsx"}!./node_modules/next/font/google/index.js'),storybook_nextjs_font_loader_source_next_font_google_props_subsets_latin_ext_fontFamily_Tilt_Prism_filename_Users_ahmet_Desktop_Coding_moov_src_components_layout_logo_logo_tsx_next_font_google__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(storybook_nextjs_font_loader_source_next_font_google_props_subsets_latin_ext_fontFamily_Tilt_Prism_filename_Users_ahmet_Desktop_Coding_moov_src_components_layout_logo_logo_tsx_next_font_google__WEBPACK_IMPORTED_MODULE_1__),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Logo=function Logo(){return __jsx("h1",{className:"".concat(storybook_nextjs_font_loader_source_next_font_google_props_subsets_latin_ext_fontFamily_Tilt_Prism_filename_Users_ahmet_Desktop_Coding_moov_src_components_layout_logo_logo_tsx_next_font_google__WEBPACK_IMPORTED_MODULE_1___default().className," text-4xl font-bold uppercase text-white md:text-5xl")},"moov")};Logo.displayName="Logo",Logo.__docgenInfo={description:"",methods:[],displayName:"Logo"}},"./src/components/ui/input/input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>Input});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/router.js"),react_icons_ai__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-icons/ai/index.esm.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Input=function Input(){var router=(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),query=_useState[0],setQuery=_useState[1];return __jsx("form",{onSubmit:function handleSubmit(event){event.preventDefault(),router.push("/search?query=".concat(query,"&page=1"))}},__jsx("div",{className:"relative mx-2 flex rounded-lg border border-grey"},__jsx("span",{className:"inline-flex items-center  rounded-l-md  bg-transparent px-[4px] text-sm text-grey md:px-3"},__jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.RB5,{size:30,color:"white"})),__jsx("input",{type:"text",id:"email-with-icon",className:"w-full flex-1 appearance-none rounded-r-lg  bg-transparent px-2 py-2 text-base text-grey  placeholder-grey shadow-sm focus:outline-none  md:px-4",name:"email",placeholder:"Search movies",value:query,onChange:function handleChange(event){setQuery(event.target.value)}})))};Input.displayName="Input",Input.__docgenInfo={description:"",methods:[],displayName:"Input"}},"?6e58":()=>{}}]);