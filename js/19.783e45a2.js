(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"4d2e":function(t,i,n){"use strict";n.r(i);var o=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("SchemaReport",t._b({},"SchemaReport",t.bind,!1))},a=[],e=n("345c"),r=n("fc74"),c=n.n(r),s=n("59a1"),u=n.n(s),l=n("6430"),p=n.n(l),h=n("ffe3"),d=n.n(h),f=n("37d9"),O=n.n(f),m=n("c47a"),v=n.n(m),b=(n("a481"),n("2b8e")),y=n.n(b),k=n("bcb5"),I=n("b589"),S=n("7594"),R=n("d1cc"),F=n("8032"),P=n("6635"),_=n("5e83"),w=n("de35"),g=function(t){function i(){var t,n;c()(this,i);for(var o=arguments.length,a=new Array(o),e=0;e<o;e++)a[e]=arguments[e];return n=p()(this,(t=d()(i)).call.apply(t,[this].concat(a))),v()(y()(n),"service",!0),n}return O()(i,t),u()(i,[{key:"defaults",value:function(){var t=this;this.hook("created:default",(function(){this.initialize&&"function"===typeof this.initialize&&this.initialize(),this.configure(),t.beforeCreateHook.call(this),t.createdHook.call(this,t)})),this.addAction("submit").actionLabel("Visualizar").actionColor("primary").actionIcon("search").actionScopes(["report"]).actionFloatRight().actionPositions([w["a"].POSITION_FORM_FOOTER]).actionOn("click",(function(t){this.reportSubmit(t)})),this.addAction("printing").actionLabel("Imprimir").actionColor("white").actionIcon("print").actionScopes(["report"]).actionFloatRight().actionPositions([w["a"].POSITION_FORM_FOOTER]).actionOn("click",(function(t){this.reportSubmit(t,!0)})),this.addAction("return").actionLabel("Voltar").actionColor("white").actionIcon("undo").actionScopes(["report"]).actionPositions([w["a"].POSITION_FORM_FOOTER]).actionOn("click",(function(t){var i=t.$event;i.stopPropagation(),i.preventDefault(),this.reportBack()})),this.addAction("printer").actionLabel("Imprimir").actionColor("white").actionIcon("print").actionScopes(["report"]).actionPositions([w["a"].POSITION_FORM_FOOTER]).actionOn("click",(function(t){var i=t.$event;i.stopPropagation(),i.preventDefault(),this.reportPrint()}))}},{key:"initScopes",value:function(){return["report"]}},{key:"provide",value:function(){var t=this;return{report:String(this.constructor.domain).replace("report.",""),path:this.constructor.path,domain:this.constructor.domain,settings:{},primaryKey:this.primaryKey,displayKey:this.displayKey,hooks:function(){return t.hooks()},actions:function(){return t.actions()},fields:function(){return t.fields()}}}}]),i}(k["a"]);v()(g,"mixins",[I["a"],S["a"],R["a"],F["a"],P["a"],_["a"]]);var T=n("86e9"),A=function(t){function i(){return c()(this,i),p()(this,d()(i).apply(this,arguments))}return O()(i,t),u()(i,[{key:"construct",value:function(){this.addField("merchant").fieldIsSelectRemote(T["a"].build().remote()).validationRequired()}}]),i}(g);v()(A,"domain","report.transaction");var C={extends:e["a"],name:"Transaction",schema:A},E=C,z=n("2877"),K=Object(z["a"])(E,o,a,!1,null,"8fdf7954",null);i["default"]=K.exports}}]);