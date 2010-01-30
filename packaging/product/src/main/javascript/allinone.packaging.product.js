eXo.require("eXo.projects.Module") ;
eXo.require("eXo.projects.Product") ;

function getProduct(version) {

 var product = new Product();

  product.name = "eXoAllInOne" ;
  product.portalwar = "portal.war" ;
  product.codeRepo = "allinone" ;
  product.useContentvalidation = true;
  product.contentvalidationVersion = "${org.exoplatform.ecm.dms.version}";
  product.useWorkflow = true;
  product.version = "${project.version}" ;
  product.workflowVersion = "${org.exoplatform.ecm.workflow.version}" ;
  product.serverPluginVersion = "${org.exoplatform.portal.version}" ;
  product.workflowJbpmVersion = "${org.exoplatform.ecm.jbpm.version}";
  product.workflowBonitaVersion = "${bonita.version}";
  
  var kernel = Module.GetModule("kernel") ;
  var ws = Module.GetModule("ws");
  var core = Module.GetModule("core") ;
  var eXoPortletContainer = Module.GetModule("portletcontainer", {kernel : kernel, core : core}) ;
  var eXoJcr = Module.GetModule("jcr", {kernel : kernel, core : core, ws : ws}) ;
  var portal = Module.GetModule("portal", {kernel : kernel, core : core, eXoPortletContainer : eXoPortletContainer, eXoJcr : eXoJcr, ws : ws });  
  var dms = Module.GetModule("dms", {kernel : kernel, core : core, eXoPortletContainer : eXoPortletContainer, ws : ws, eXoJcr : eXoJcr, portal : portal});
  var workflow = Module.GetModule("workflow", {kernel : kernel, core : core, eXoPortletContainer : eXoPortletContainer, ws : ws, eXoJcr : eXoJcr, portal : portal});
  var cs = Module.GetModule("cs", {kernel : kernel, ws : ws, core : core, eXoPortletContainer : eXoPortletContainer, eXoJcr : eXoJcr, portal : portal});
  var ks = Module.GetModule("ks", {kernel : kernel, ws : ws, core : core, eXoPortletContainer : eXoPortletContainer, eXoJcr : eXoJcr, portal : portal});
  var wcm = Module.GetModule("wcm", {kernel : kernel, core : core, ws : ws, eXoPortletContainer : eXoPortletContainer, eXoJcr : eXoJcr, portal : portal, dms : dms});
  var webos = Module.GetModule("webos", {kernel : kernel, core : core, eXoPortletContainer : eXoPortletContainer, eXoJcr : eXoJcr });
  var allinone = Module.GetModule("allinone", {kernel : kernel, ws : ws, core : core, eXoPortletContainer : eXoPortletContainer, eXoJcr : eXoJcr, portal : portal, cs: cs, ks: ks, dms : dms, wcm: wcm,workflow : workflow});
  
  product.addDependencies(portal.portlet.exoadmin) ;
  product.addDependencies(portal.portlet.web) ;
  product.addDependencies(portal.portlet.dashboard) ;  
  product.addDependencies(portal.eXoGadgetServer) ;
  product.addDependencies(portal.eXoGadgets) ;
  product.addDependencies(portal.webui.portal);
// replaced by AIO resources to deploy some missing JS files (ALL-230)
//  product.addDependencies(portal.web.eXoResources);
  product.addDependencies(allinone.web.eXoResources);
	
  product.addDependencies(dms.portlet.dms);
  product.addDependencies(dms.gadgets);
  
  product.addDependencies(wcm.portlet.webpresentation);
  product.addDependencies(wcm.portlet.websearches); 
  product.addDependencies(wcm.portlet.newsletter); 
  product.addDependencies(wcm.portlet.formgenerator);
  product.addDependencies(wcm.web.eXoWCMResources) ;
  product.addDependencies(dms.web.eXoDMSResources) ;
  product.addDependencies(allinone.web.allinoneportal) ;
  
  
  product.addDependencies(cs.eXoApplication.mail) ;
  product.addDependencies(cs.eXoApplication.calendar) ;
  product.addDependencies(cs.eXoApplication.contact) ;
  product.addDependencies(cs.eXoApplication.content) ;
  product.addDependencies(cs.eXoApplication.chat) ;
// Patched in AIO to display chatbar entirely in WCM layout (add css right:0; to UIChatBarPortlet)
  product.addDependencies(cs.eXoApplication.chatbar) ;
//  product.addDependencies(allinone.patches.chatbar) ;

  product.addDependencies(cs.web.webservice) ;
  product.addDependencies(cs.web.csResources) ;
  
  /* KS */  
  product.addDependencies(ks.eXoApplication.forum) ;
  product.addDependencies(ks.eXoApplication.faq) ;
  product.addDependencies(ks.eXoApplication.common) ;

  product.addDependencies(ks.web.webservice) ;
  product.addDependencies(ks.web.ksResources) ;
  
  /* WEBOS */
  product.addDependencies(webos.web.webosResources);

  /* WORKFLOW */
  product.addDependencies(workflow.portlet.workflow);
  product.addDependencies(workflow.web.eXoWorkflowResources);
  
  
  /* cleanup duplicated lib*/
  product.removeDependency(new Project("org.exoplatform.ws", "exo.ws.frameworks.json", "jar", "1.3"));
  product.removeDependency(new Project("org.exoplatform.ws", "exo.ws.frameworks.json", "jar", "1.3.1"));
  product.removeDependency(new Project("ical4j", "ical4j", "jar", "0.9.20"));
  product.removeDependency(new Project("javax.mail", "mail", "jar", "1.4"));
  product.removeDependency(new Project("commons-httpclient", "commons-httpclient", "jar", "3.0"));
  product.removeDependency(new Project("commons-collections", "commons-collections", "jar", "3.1"));
  product.removeDependency(new Project("commons-io", "commons-io", "jar", "1.3"));
  product.removeDependency(new Project("rome", "rome", "jar", "0.8"));
  product.removeDependency(new Project("javax.mail", "mail", "jar", "1.4"));
   
//  product.addServerPatch("tomcat", cs.server.tomcat.patch) ; 
  product.addServerPatch("tomcat", allinone.patches.tomcat) ;
//  product.addServerPatch("jboss",  cs.server.jboss.patch) ;
  product.addServerPatch("jboss",  allinone.patches.jboss) ;
//  product.addServerPatch("jbossear",  portal.server.jbossear.patch) ;  
//  product.addServerPatch("jonas",  portal.server.jonas.patch) ;
  product.addServerPatch("wasear",  portal.server.websphere.patch) ;

  product.module = allinone ;
  product.dependencyModule = [ kernel, core, eXoPortletContainer, ws, eXoJcr, portal, dms, cs, ks, wcm, webos, workflow ];
  return product;
}
