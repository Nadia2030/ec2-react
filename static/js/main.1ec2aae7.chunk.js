(this["webpackJsonpcalculator-app"]=this["webpackJsonpcalculator-app"]||[]).push([[0],[,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Program_Files_Docker_Docker_Calculator_Images_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),C_Program_Files_Docker_Docker_Calculator_Images_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),C_Program_Files_Docker_Docker_Calculator_Images_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),C_Program_Files_Docker_Docker_Calculator_Images_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_ResultComponent__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(9),_KeyPadComponent__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__),CalculatorComponent=function(_Component){Object(C_Program_Files_Docker_Docker_Calculator_Images_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(CalculatorComponent,_Component);var _super=Object(C_Program_Files_Docker_Docker_Calculator_Images_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(CalculatorComponent);function CalculatorComponent(){var _this;return Object(C_Program_Files_Docker_Docker_Calculator_Images_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,CalculatorComponent),_this=_super.call(this),_this.handelonClick=function(e){"="===e?_this.calculate():"C"===e?_this.reset():"CE"===e?_this.backspace():_this.setState({result:_this.state.result+e})},_this.calculate=function(){try{_this.setState({result:(eval(_this.state.result)||"")+""})}catch(e){_this.setState({result:"error"})}},_this.reset=function(){_this.setState({result:""})},_this.backspace=function(){_this.setState({result:_this.state.result.slice(0,-1)})},_this.state={result:""},_this}return Object(C_Program_Files_Docker_Docker_Calculator_Images_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(CalculatorComponent,[{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"box",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ResultComponent__WEBPACK_IMPORTED_MODULE_5__.a,{result:this.state.result}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_KeyPadComponent__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:this.handelonClick})]})})}}]),CalculatorComponent}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=CalculatorComponent},function(e,t,_){"use strict";var n=_(2),r=_(3),a=_(5),c=_(4),o=_(1),s=_(0),l=function(e){Object(a.a)(_,e);var t=Object(c.a)(_);function _(){return Object(n.a)(this,_),t.apply(this,arguments)}return Object(r.a)(_,[{key:"render",value:function(){var e=this.props.result;return Object(s.jsx)("div",{className:"display",children:Object(s.jsx)("input",{type:"text",readonly:"true",size:"18",id:"d",value:e})})}}]),_}(o.Component);t.a=l},function(e,t,_){"use strict";_.d(t,"a",(function(){return l}));var n=_(2),r=_(3),a=_(5),c=_(4),o=_(1),s=_(0),l=function(e){Object(a.a)(_,e);var t=Object(c.a)(_);function _(){return Object(n.a)(this,_),t.apply(this,arguments)}return Object(r.a)(_,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"keys",children:[Object(s.jsx)("button",{name:"(",class:"button gray",onClick:function(t){return e.props.onClick(t.target.name)},children:"("}),Object(s.jsx)("button",{name:"CE",class:"button gray",onClick:function(t){return e.props.onClick(t.target.name)},children:"CE"}),Object(s.jsx)("button",{name:")",class:"button gray",onClick:function(t){return e.props.onClick(t.target.name)},children:")"}),Object(s.jsx)("button",{name:"C",class:"button gray",onClick:function(t){return e.props.onClick(t.target.name)},children:"C"}),Object(s.jsx)("button",{name:"1",class:"button black",onClick:function(t){return e.props.onClick(t.target.name)},children:"1"}),Object(s.jsx)("button",{name:"2",class:"button black",onClick:function(t){return e.props.onClick(t.target.name)},children:"2"}),Object(s.jsx)("button",{name:"3",class:"button black",onClick:function(t){return e.props.onClick(t.target.name)},children:"3"}),Object(s.jsx)("button",{name:"+",class:"button pink",onClick:function(t){return e.props.onClick(t.target.name)},children:"+"}),Object(s.jsx)("button",{name:"4",class:"button black",onClick:function(t){return e.props.onClick(t.target.name)},children:"4"}),Object(s.jsx)("button",{name:"5",class:"button black",onClick:function(t){return e.props.onClick(t.target.name)},children:"5"}),Object(s.jsx)("button",{name:"6",class:"button black",onClick:function(t){return e.props.onClick(t.target.name)},children:"6"}),Object(s.jsx)("button",{name:"-",class:"button pink",onClick:function(t){return e.props.onClick(t.target.name)},children:"-"}),Object(s.jsx)("button",{name:"7",class:"button black",onClick:function(t){return e.props.onClick(t.target.name)},children:"7"}),Object(s.jsx)("button",{name:"8",class:"button black",onClick:function(t){return e.props.onClick(t.target.name)},children:"8"}),Object(s.jsx)("button",{name:"9",class:"button black",onClick:function(t){return e.props.onClick(t.target.name)},children:"9"}),Object(s.jsx)("button",{name:"*",class:"button pink",onClick:function(t){return e.props.onClick(t.target.name)},children:"x"}),Object(s.jsx)("button",{name:".",class:"button pink",onClick:function(t){return e.props.onClick(t.target.name)},children:"."}),Object(s.jsx)("button",{name:"0",class:"button black",onClick:function(t){return e.props.onClick(t.target.name)},children:"0"}),Object(s.jsx)("button",{name:"=",class:"button pink",onClick:function(t){return e.props.onClick(t.target.name)},children:"="}),Object(s.jsx)("button",{name:"/",class:"button pink",onClick:function(t){return e.props.onClick(t.target.name)},children:"\xf7"})]})}}]),_}(o.Component)},,,,,function(e,t,_){},function(e,t,_){},,function(e,t,_){"use strict";_.r(t);var n=_(1),r=_.n(n),a=_(7),c=_.n(a),o=(_(15),_(2)),s=_(3),l=_(5),u=_(4),i=(_(16),_(8)),p=_(0),b=function(e){Object(l.a)(_,e);var t=Object(u.a)(_);function _(){return Object(o.a)(this,_),t.apply(this,arguments)}return Object(s.a)(_,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)(i.a,{})})}}]),_}(n.Component),C=function(e){e&&e instanceof Function&&_.e(3).then(_.bind(null,19)).then((function(t){var _=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;_(e),n(e),r(e),a(e),c(e)}))};c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(b,{})}),document.getElementById("root")),C()}],[[18,1,2]]]);
//# sourceMappingURL=main.1ec2aae7.chunk.js.map