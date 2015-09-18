"use strict";define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,a,r){var l;t["default"].MODEL_FACTORY_INJECTIONS=!0,l=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),a["default"](l,r["default"].modulePrefix),e["default"]=l}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var a=n["default"].APP,r=a.name,l=a.version;e["default"]=t["default"].extend({version:l,name:r})}),define("dummy/components/ember-collection",["exports","ember-collection/components/ember-collection"],function(e,t){e["default"]=t["default"]}),define("dummy/components/ember-native-scrollable",["exports","ember-collection/components/ember-native-scrollable"],function(e,t){e["default"]=t["default"]}),define("dummy/components/ember-tabella/body-column",["exports","ember-tabella/components/ember-tabella/body-column"],function(e,t){e["default"]=t["default"]}),define("dummy/components/ember-tabella/body-row",["exports","ember-tabella/components/ember-tabella/body-row"],function(e,t){e["default"]=t["default"]}),define("dummy/components/ember-tabella/body",["exports","ember-tabella/components/ember-tabella/body"],function(e,t){e["default"]=t["default"]}),define("dummy/components/ember-tabella/collection",["exports","ember-tabella/components/ember-tabella/collection"],function(e,t){e["default"]=t["default"]}),define("dummy/components/ember-tabella/header-column",["exports","ember-tabella/components/ember-tabella/header-column"],function(e,t){e["default"]=t["default"]}),define("dummy/components/ember-tabella/header-resize-handle",["exports","ember-tabella/components/ember-tabella/header-resize-handle"],function(e,t){e["default"]=t["default"]}),define("dummy/components/ember-tabella/header-row",["exports","ember-tabella/components/ember-tabella/header-row"],function(e,t){e["default"]=t["default"]}),define("dummy/components/ember-tabella",["exports","ember-tabella/components/ember-tabella"],function(e,t){e["default"]=t["default"]}),define("dummy/controllers/application",["exports","ember","ember-tabella/models/column","dummy/utils/random"],function(e,t,n,a){e["default"]=t["default"].Controller.extend({tableColumns:t["default"].computed(function(){var e=n["default"].create({width:150,textAlign:"text-align-left",headerCellName:"Date",getContent:function(e){return e.get("date").toDateString()}}),t=n["default"].create({width:75,headerCellName:"Open",isResizable:!0,getContent:function(e){return e.get("open").toFixed(2)}}),a=n["default"].create({width:200,headerCellName:"High",getContent:function(e){return e.get("high").toFixed(2)}}),r=n["default"].create({width:200,headerCellName:"Low",getContent:function(e){return e.get("low").toFixed(2)}}),l=n["default"].create({width:200,headerCellName:"Close",getContent:function(e){return e.get("close").toFixed(2)}});return[e,t,a,r,l]}),tableContent:t["default"].computed(function(){for(var e,n=[],r=0;5e3>r;r++)e=a.randomDate(new Date(2e3,1,5),new Date(2012,2,2)),n.push(t["default"].Object.create({date:e,open:a.randomNumber(100)-50,high:a.randomNumber(100)-50,low:a.randomNumber(100)-50,close:a.randomNumber(100)-50,volume:1e6*a.randomNumber(100)}));return n})})}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/helpers/fixed-grid-layout",["exports","ember","ember-collection/layouts/grid"],function(e,t,n){e["default"]=t["default"].Helper.helper(function(e,t){return new n["default"](e[0],e[1])})}),define("dummy/helpers/mixed-grid-layout",["exports","ember","ember-collection/layouts/mixed-grid"],function(e,t,n){e["default"]=t["default"].Helper.helper(function(e,t){return new n["default"](e[0])})}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){var a=n["default"].APP,r=a.name,l=a.version;e["default"]={name:"App Version",initialize:t["default"](r,l)}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,r=n["default"].exportApplicationGlobal;a="string"==typeof r?r:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/models/column",["exports","ember-tabella/models/column"],function(e,t){e["default"]=t["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){this.route("simple")}),e["default"]=a}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:27,column:6}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","col-md-10 col-md-offset-2");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("h1"),r=e.createTextNode("Ember Tabella ");e.appendChild(a,r);var r=e.createElement("small"),l=e.createTextNode("Simple");e.appendChild(r,l),e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","row");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-md-12");var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("div");e.setAttribute(l,"class","example-container"),e.setAttribute(l,"style","width:600px;");var o=e.createTextNode("\n        ");e.appendChild(l,o);var o=e.createComment("");e.appendChild(l,o);var o=e.createTextNode("\n      ");e.appendChild(l,o),e.appendChild(r,l);var l=e.createTextNode("\n    ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-md-12 bumper-30");var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("h3"),o=e.createTextNode("Template");e.appendChild(l,o),e.appendChild(r,l);var l=e.createTextNode("\n    ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-md-12 bumper-30");var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("h3"),o=e.createTextNode("Controller");e.appendChild(l,o),e.appendChild(r,l);var l=e.createTextNode("\n    ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[0,3,1,1]),1,1),a},statements:[["inline","ember-tabella",[],["numFixedColumns",2,"width",500,"height",500,"rowHeight",50,"content",["subexpr","@mut",[["get","tableContent",["loc",[null,[12,18],[12,30]]]]],[],[]],"columns",["subexpr","@mut",[["get","tableColumns",["loc",[null,[13,18],[13,30]]]]],[],[]],"hasFooter",!1],["loc",[null,[7,8],[15,10]]]]],locals:[],templates:[]}}())}),define("dummy/utils/random",["exports"],function(e){function t(){var e=arguments.length<=0||void 0===arguments[0]?1:arguments[0],t=arguments.length<=1||void 0===arguments[1]?0:arguments[1],n=arguments.length<=2||void 0===arguments[2]?void 0:arguments[2];void 0!==n&&(r=n),r=(9301*r+49297)%233280;var a=r/233280;return t+a*(e-t)}function n(e,n,a){var r=t(1,0,a);return new Date(e.getTime()+r*(n.getTime()-e.getTime()))}function a(){var e=arguments.length<=0||void 0===arguments[0]?6:arguments[0];r=e}e.randomNumber=t,e.randomDate=n,e.setRandomSeed=a;var r=6}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(l){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-tabella",version:"0.0.0+fed7af69"});