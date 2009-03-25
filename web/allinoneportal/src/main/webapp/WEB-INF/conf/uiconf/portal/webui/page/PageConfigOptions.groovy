import org.exoplatform.webui.core.model.SelectItemOption;
import org.exoplatform.webui.core.model.SelectItemCategory;
import org.exoplatform.webui.application.WebuiRequestContext;
import java.util.ResourceBundle;

List categories = new ArrayList(); 
WebuiRequestContext contextres = WebuiRequestContext.getCurrentInstance();
ResourceBundle res = contextres.getApplicationResourceBundle();
    
SelectItemCategory appPageConfigs = new SelectItemCategory("WCM Page Configs") ;
categories.add(appPageConfigs) ;
appPageConfigs.addSelectItemOption(new SelectItemOption(res.getString("UIWizardPageSelectLayoutForm.label.appPages.Presentation"), "single-content-viewer", "single-content-viewer")) ;
appPageConfigs.addSelectItemOption(new SelectItemOption(res.getString("UIWizardPageSelectLayoutForm.label.appPages.ContentListViewer"), "content-list-viewer", "content-list-viewer")) ;
appPageConfigs.addSelectItemOption(new SelectItemOption(res.getString("UIWizardPageSelectLayoutForm.label.appPages.Search"), "simple-searches-page", "Search")) ;
appPageConfigs.addSelectItemOption(new SelectItemOption(res.getString("UIWizardPageSelectLayoutForm.label.appPages.Sitemap"), "sitemap-page", "Sitemap")) ;

SelectItemCategory normalPageConfigs = new SelectItemCategory("normalPageConfigs") ;
categories.add(normalPageConfigs);
normalPageConfigs.addSelectItemOption(new SelectItemOption("normalPage.EmptyLayout", "empty", "EmptyLayout"));
normalPageConfigs.addSelectItemOption(new SelectItemOption("normalPage.DesktopImage", "desktop", "DesktopImage"));
normalPageConfigs.addSelectItemOption(new SelectItemOption("normalPage.DashboardLayout", "dashboard", "DashboardLayout"));

SelectItemCategory columnPageConfigs = new SelectItemCategory("columnPageConfigs") ;
categories.add(columnPageConfigs);  
columnPageConfigs.addSelectItemOption(new SelectItemOption("columnPage.TwoColumnsLayout", "two-columns", "TwoColumnsLayout"));
columnPageConfigs.addSelectItemOption(new SelectItemOption("columnPage.ThreeColumnsLayout", "three-columns", "ThreeColumnsLayout"));

SelectItemCategory rowPageConfigs = new SelectItemCategory("rowPageConfigs") ;
categories.add(rowPageConfigs); 
rowPageConfigs.addSelectItemOption(new SelectItemOption("rowPage.TwoRowsLayout", "two-rows", "TwoRowsLayout"));
rowPageConfigs.addSelectItemOption(new SelectItemOption("rowPage.ThreeRowsLayout", "three-rows", "ThreeRowsLayout"));

SelectItemCategory tabsPageConfigs = new SelectItemCategory("tabsPageConfigs") ;
categories.add(tabsPageConfigs) ;
tabsPageConfigs.addSelectItemOption(new SelectItemOption("tabsPage.TwoTabsLayout", "two-tabs", "TwoTabsLayout")) ;
tabsPageConfigs.addSelectItemOption(new SelectItemOption("tabsPage.ThreeTabsLayout", "three-tabs", "ThreeTabsLayout")) ;

SelectItemCategory mixPageConfigs = new SelectItemCategory("mixPageConfigs") ;
categories.add(mixPageConfigs); 
mixPageConfigs.addSelectItemOption(new SelectItemOption("mixPage.TwoColumnsOneRowLayout", "two-columns-one-row", "TwoColumnsOneRowLayout"));
mixPageConfigs.addSelectItemOption(new SelectItemOption("mixPage.OneRowTwoColumnsLayout", "one-row-two-columns", "OneRowTwoColumnsLayout"));
mixPageConfigs.addSelectItemOption(new SelectItemOption("mixPage.ThreeRowsTwoColumnsLayout", "three-rows-two-columns", "ThreeRowsTwoColumnsLayout"));

return categories;

