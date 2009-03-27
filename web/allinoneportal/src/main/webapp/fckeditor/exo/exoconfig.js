
//config style
FCKConfig.EditorAreaCSS = '';
FCKConfig.EditorAreaStyles = 'body{	background: none;	margin: 0px;}' ;
FCKConfig.InsertedLinkColor = 'green';

FCKConfig.ToolbarSets["CompleteWCM"] = [
	['Source','DocProps','-','NewPage','Preview','-','Templates'],
	['Cut','Copy','Paste','PasteText','PasteWord','-','Print','SpellCheck'],
	['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],
	'/',
	['Bold','Italic','Underline','StrikeThrough','-','Subscript','Superscript'],
	['OrderedList','UnorderedList','-','Outdent','Indent','Blockquote','CreateDiv'],
	['JustifyLeft','JustifyCenter','JustifyRight','JustifyFull'],
	['Link','Insert link to a site page','Unlink','Anchor'],
	['Insert Image','Insert DMS Document','Flash','Table','Rule','SpecialChar','PageBreak'],
	['TextColor','BGColor'],
	['FitWindow','ShowBlocks'],
	['Style','FontFormat','FontName','FontSize']
] ;

FCKConfig.ToolbarSets["BasicWCM"] = [
	['Source','-','Bold','Italic','Underline','StrikeThrough','-','OrderedList','UnorderedList','Outdent','Indent'],
	['JustifyLeft','JustifyCenter','JustifyRight','JustifyFull'],
	['Blockquote','-','Link','Unlink','Insert link to a site page','Insert Image','Insert DMS Document','-','FitWindow','ShowBlocks'],	
	['Style','FontFormat','FontName','FontSize']
] ;

FCKConfig.ToolbarSets["CSSToolBar"] = [
	['Insert Image']
];

FCKConfig.ToolbarSets["JSToolBar"] = [ ];

FCKConfig.ToolbarSets["eXoBar"] = [
	
];

FCKConfig.ToolbarSets["eXoForum"] = [
	['FitWindow','-','Cut','Copy','Paste','-','Undo','Redo','-','Bold','Italic','Underline'],
	['JustifyLeft','JustifyCenter','JustifyRight','JustifyFull'],['OrderedList','UnorderedList','Outdent','Indent','-','TextColor'],
	['Wrap [QUOTE] tags around selected text', 'Wrap [CODE] tags around selected text', 'Help BB Code']
] ;

FCKConfig.ToolbarSets["eXoFAQ"] = [
	['FitWindow','-','Cut','Copy','Paste','-','Undo','Redo','-','Bold','Italic','Underline'],
	['JustifyLeft','JustifyCenter','JustifyRight','JustifyFull'],['OrderedList','UnorderedList','Outdent','Indent','-','TextColor'],
	['Wrap [QUOTE] tags around selected text', 'Wrap [CODE] tags around selected text', 'Help BB Code']
] ;

FCKConfig.eXoPath = FCKConfig.BasePath.substr(0, FCKConfig.BasePath.length - 7) + "exo/" ;

//Forum plugins
FCKConfig.eXoForumPlugins = FCKConfig.eXoPath + "plugins/forum/" ;

FCKConfig.Plugins.Add( 'forumButton', null, FCKConfig.eXoForumPlugins) ;
FCKConfig.Plugins.Add( 'help', null, FCKConfig.eXoPath + "plugins/") ;
FCKConfig.Plugins.Add( 'urani', null, FCKConfig.eXoPath + "plugins/") ;
FCKConfig.Plugins.Add( 'insertImage', null, FCKConfig.eXoPath + "plugins/") ;
FCKConfig.Plugins.Add( 'insertDocument', null, FCKConfig.eXoPath + "plugins/") ;
FCKConfig.Plugins.Add( 'insertPortalLink', null, FCKConfig.eXoPath + "plugins/") ;

//Other plugins like bog, wiki...
eXoPlugin.switchToolBar = function(R) {
	var Setting = {
		oldBar: R.oldBar || "" ,
		newBar: R.newBar || "",
		useBar: R.useBar || []
	};
	with (Setting) {
		if (oldBar && newBar && FCKConfig.ToolbarSets[newBar] && FCKConfig.ToolbarSets[oldBar]) {
			FCKConfig.ToolbarSets[oldBar] = FCKConfig.ToolbarSets[newBar];
		}
	}
};

var isForum = window.parent.document.getElementById('UIForumPortlet');
var isFAQ = window.parent.document.getElementById('UIFAQPortlet');
if(isForum) {
	eXoPlugin.switchToolBar({oldBar: "Basic", newBar: "eXoForum"});
}else if(isFAQ){
	eXoPlugin.switchToolBar({oldBar: "Basic", newBar: "eXoFAQ"});
}else{
	eXoPlugin.switchToolBar({oldBar: "Basic", newBar: "eXoBar"});
}

eXoPlugin.addBar = function(R) {
	var Setting = {
		newBar: R.newBar || "",
		targetBar: R.targetBar || ""
	}

	with (Setting) {
		if (newBar == targetBar) return;
		if (newBar && targetBar && FCKConfig.ToolbarSets[newBar] && FCKConfig.ToolbarSets[targetBar]) {
			FCKConfig.ToolbarSets[targetBar].push("/");
			for (var o = 0; o < FCKConfig.ToolbarSets[newBar].length; ++o) {
				FCKConfig.ToolbarSets[targetBar].push(FCKConfig.ToolbarSets[newBar][o]);
			}
		}
	}
};

eXoPlugin.getContent = function() {
	var content = new String();
	if (document.selection) {
		var range = FCK.EditorWindow.document.selection.createRange();
		content = range.text;
	} else  {
		var range = FCK.EditorWindow.getSelection();
		content = range.getRangeAt(0);
	}
	if (content) content = content.toString().replace(/^\s+|\s+$/g, "");
	if (content != "") return content;
	else return null;
};

//eXoPlugin.addBar({newBar: "eXoBar", targetBar: "Basic" });
eXoPlugin.addBar({newBar: "eXoBar", targetBar: "Default" });

FCKConfig.SourceModeCommands = ['Insert Image'];
//eXoPlugin config
window.eXoPlugin = {
	init: function() {
		with (window.parent.eXo.env.portal) {
   this.originPortalName = this.portalName = portalName;
			this.context = context;
			this.accessMode = accessMode;
		}
		
		var parentLocation = window.parent.location;
		this.hostName = parentLocation.href.substring(0, parentLocation.href.indexOf(parentLocation.pathname));
		
		this.eXoFileManager = {
			Connector: "/portal/rest/fckconnector/jcr/",
			ResourceType : "File"
		};
		
		this.ExoImageBrowserURL = FCKConfig.eXoPath + 'filemanager/browser/default/browser.html?Type=Image&Connector=/portal/rest/fckconnector/jcr/getFiles' ;
		this.ExoFileBrowserURL = FCKConfig.eXoPath + 'filemanager/browser/default/browser.html?Type=File&Connector=/portal/rest/fckconnector/jcr/getFiles' ;
		this.ExoPortalLinkBrowserURL = FCKConfig.eXoPath + 'explorer/explorer.html?Type=PortalLink&Connector=/portal/rest/portalLinks/&disableUploading=true&disableCreatingFolder=true' ;
		FCKConfig.LinkBrowserURL = FCKConfig.eXoPath + 'explorer/explorer.html?Type=Link&Connector=/portal/rest/wcmLink/';
		//detect user language
		this.userLanguage = FCK.Language.GetActiveLanguage() || "en";
	},
	switchToolBar: function(r) {
		var Setting = {
			oldBar: r.oldBar || "" ,
			newBar: r.newBar || "",
			useBar: r.useBar || []
		};
		with (Setting) {
			if (oldBar && newBar && FCKConfig.ToolbarSets[newBar] && FCKConfig.ToolbarSets[oldBar]) {
				FCKConfig.ToolbarSets[oldBar] = FCKConfig.ToolbarSets[newBar];
			}
		}
		//demo =>  eXoPlugin.switchToolBar({oldBar: "Basic", newBar: "eXoBar"});
	},
	addBar: function(r) {
		var Setting = {
			newBar: r.newBar || "",
			targetBar: r.targetBar || ""
		}

		with (Setting) {
			if (newBar == targetBar) return;
			if (newBar && targetBar && FCKConfig.ToolbarSets[newBar] && FCKConfig.ToolbarSets[targetBar]) {
				FCKConfig.ToolbarSets[targetBar].push("/");
				for (var o = 0; o < FCKConfig.ToolbarSets[newBar].length; ++o) {
					FCKConfig.ToolbarSets[targetBar].push(FCKConfig.ToolbarSets[newBar][o]);
				}
			}
		}
		//demo => eXoPlugin.addBar({newBar: "eXoBar", targetBar: "Basic" });
	},
	getContent: function() {
		var content = "";
		if (document.selection) {
			var range = FCK.EditorWindow.document.selection.createRange();
			content = range.text;
		} else  {
			var range = FCK.EditorWindow.getSelection();
			content = range.getRangeAt(0);
		}
		if (content) content = content.toString().replace(/^\s+|\s+$/g, "");
		if (content != "") return content;
		else return null;
	},
	loadScript: function() {
		if (arguments.length < 2) {
			return;
		} else {
			var win = arguments[0];
			var src = arguments[1];
		}
		if (!win || !win.document) return;
		var eScript = win.document.createElement("script");
		eScript.setAttribute("src", src);
		var eHead = win.document.getElementsByTagName("head")[0];
		eHead.appendChild(eScript);
	}
};
FCK["eXoPlugin"] = eXoPlugin;

eXoPlugin.init();