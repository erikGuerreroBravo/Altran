﻿Type.registerNamespace("Sys.Extended.UI.HtmlEditor");Sys.Extended.UI.HtmlEditor.HtmlPanel=function(n){Sys.Extended.UI.HtmlEditor.HtmlPanel.initializeBase(this,[n]);this._onfocus$delegate=Function.createDelegate(this,this._onfocus);Sys.Extended.UI.HtmlEditor.isIE&&document.compatMode!="BackCompat"&&(this._onresize$delegate=Function.createDelegate(this,this._onresize))};Sys.Extended.UI.HtmlEditor.HtmlPanel.prototype={_activate:function(n){var t,i;this._shouldResize=!1;t=this.get_element();Sys.Extended.UI.HtmlEditor.isIE&&Sys.Browser.version>6&&document.compatMode!="BackCompat"&&t.parentNode.clientHeight>0&&(this._shouldResize=!0);Sys.Extended.UI.HtmlEditor.HtmlPanel.callBaseMethod(this,"_activate");Sys.Extended.UI.HtmlEditor.isIE?(t.value="",i=this,setTimeout(function(){t.value=n},0)):t.value=n;$addHandlers(t,{focus:this._onfocus$delegate});this._shouldResize&&$addHandlers(t,{resize:this._onresize$delegate});this._activateFinished()},_deactivate:function(){var n=this.get_element();this._shouldResize&&$common.removeHandlers(n,{resize:this._onresize$delegate});this._shouldResize=!1;$common.removeHandlers(n,{focus:this._onfocus$delegate});n.value="";Sys.Extended.UI.HtmlEditor.HtmlPanel.callBaseMethod(this,"_deactivate")},_getContent:function(){return this.get_element().value},_setContent:function(n){if(this.get_element().value=n,Sys.Extended.UI.HtmlEditor.isReallyVisible(this.get_element().parentNode))try{var t=this.get_element();t.focus();setTimeout(function(){try{Sys.Extended.UI.HtmlEditor.setSelectionRange(t,0,0)}catch(n){}},0)}catch(i){}},_focus:function(){var n,t;if(Sys.Extended.UI.HtmlEditor.isReallyVisible(this.get_element().parentNode))try{n=this.get_element();n.focus();setTimeout(function(){try{Sys.Extended.UI.HtmlEditor.setSelectionRange(n,0,0)}catch(t){}},0)}catch(i){}t=this;setTimeout(function(){t._focused()},0)},_onfocus:function(){this._really_focused();var n=this.get_element();return setTimeout(function(){n.focus()},0),!0},_onresize:function(){var n=this.get_element(),t=n.parentNode.clientHeight;t>0&&(n.style.height=t+"px")}};Sys.Extended.UI.HtmlEditor.HtmlPanel.registerClass("Sys.Extended.UI.HtmlEditor.HtmlPanel",Sys.Extended.UI.HtmlEditor.ModePanel);