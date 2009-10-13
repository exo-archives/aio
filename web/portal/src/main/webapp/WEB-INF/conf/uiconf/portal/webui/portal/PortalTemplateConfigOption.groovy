import java.util.List;
import java.util.ArrayList;
import org.exoplatform.portal.webui.portal.PortalTemplateConfigOption ;
import org.exoplatform.webui.core.model.SelectItemCategory;

List options = new ArrayList();  
  SelectItemCategory acme = new SelectItemCategory("ACMESite");
  acme.addSelectItemOption(
      new PortalTemplateConfigOption("ACME Site", "acme", "ACME Site", "ACMESite").addGroup("/platform/administrators")
  );  
  
    SelectItemCategory guest = new SelectItemCategory("ClassicPortal");
  guest.addSelectItemOption(
      //new PortalTemplateConfigOption("", "site", "Site Portal", "SitePortal").addGroup("/guest")
      new PortalTemplateConfigOption("", "classic", "Classic Portal", "ClassicPortal").addGroup("/platform/guests")
  );
 

/*  SelectItemCategory webos = new SelectItemCategory("WebOSPortal");
  webos.addSelectItemOption(
    new PortalTemplateConfigOption("", "webos", "WebOS Portal", "WebOSPortal").addGroup("/platform/guests")
  );
  
  options.add(webos);
*/
 // options.add(guest);
  options.add(acme);
  
return options ;
