eXo.require("eXo.projects.Module") ;
eXo.require("eXo.projects.Product") ;

function getModule(params) {

  var kernel = params.kernel;
  var core = params.core;
  var eXoPortletContainer = params.eXoPortletContainer;
  var jcr = params.eXoJcr;
  var portal = params.portal;
  var ecm = params.ecm

  var module = new Module();

  module.version = "2.0" ;
  module.relativeMavenRepo =  "org/exoplatform/allinone" ;
  module.relativeSRCRepo =  "allinone/branches/1.0" ;
  module.name =  "ultimate" ;
       
  module.web = {}
  module.web.ultimateportal = 
    new Project("org.exoplatform.allinone", "exo.allinone.web.portal", "exo-portal", module.version)   .addDependency(portal.web.eXoResources) .
    addDependency(portal.web.eXoMacSkin) .
    addDependency(portal.web.eXoVistaSkin) .
    addDependency(portal.webui.portal) .
    addDependency(jcr.frameworks.command) .
    addDependency(jcr.frameworks.web) ;

  return module;
}
