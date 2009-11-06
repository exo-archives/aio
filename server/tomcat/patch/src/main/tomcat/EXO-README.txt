==============================================
    Release Notes - All in One - 1.6
==============================================

===============
 Introduction
===============

Thank you for downloading eXo All in One.
eXo All in One allows you to discover and test all the eXo Products in a single package.

Follow the procedure of installation and start eXo All in One now !

=============
 What's new?
=============

All in One 1.6 contains the following upgrades:
- JCR 1.10.5.1
- Portal 2.5.6.1
- DMS 2.5.2.1
- WCM 1.2.1
- WF 1.0.4.1
- CS 1.3.2.1
- KS 1.2.1.1
- WebOS 1.5.3.1

=========
 Install
=========

Requirements

    * OS : Windows, Linux or MAC OS.
    * Memory : 1GB of RAM and at least one 1.5 Ghz processor.
    * Disk : 150MB of disk space is necessary for the install
    * Browser : Firefox 3+ or Internet Explorer 7+
    * eXo All in One requires a Java 5 environment, make sure the JAVA_HOME environment variable point to a JRE 5 folder
    * the eXo server will run on portal 8080, make sure this port is not currently in use

Launch instructions :

    * Using command line, go to $TOMCAT_HOME/bin and start the server :
          o Windows :

            eXo.bat run

          o Linux / Mac OS :

            chmod +x *.sh ; eXo.sh run

    * Wait for the server to start. You should see something like this on the console :

INFO: Server startup in 153590 ms

    * eXo All in One is now ready to use. Point your browser to http://localhost:8080/portal


==================
 TROUBLESHOOTING
==================

Our applications are designed in a way that eXoResources has to be deployed before other resources (component resources or custom resources).
Hence, we named them so they are in alphabetical order. Unfortunately, Tomcat cannot insure that they will be deployed in a specific order, 
especially alphabetical order. We already encountered errors because eXoResources was not deployed first, which led us to modify Tomcat.

http://wiki.apache.org/tomcat/FAQ/Miscellaneous#Q27

If you meet CSS or Javascript exception, because some files could not be loaded, the solution may be to replace the file {tomcat-home}/lib/catalina.jar 
by this one: {tomcat-home}/patch/catalina.jar. This jar contains a modified HostConfig class that sorts the array of files in /conf/Catalina/localhost 
in alphabetical order. The source file of this class is also available in {tomcat-home}/patch/HostConfig.java if you'd like to take a look (line 541), 
or build tomcat yourself. 
We used the version Tomcat-6.0.16 of the source for this build.


===========
 RESOURCES
===========

     Company site        http://www.exoplatform.com
     Community JIRA      http://jira.exoplatform.org
     Community site      http://www.exoplatform.org
     Developers wiki     http://wiki.exoplatform.org


===========
 CHANGELOG
===========

Version portal-2.5.6.2

** Bug
    * [PORTAL-3660] - Cannot use @owner@ in portal template anymore

Version portal-2.5.6.1

** Bug
    * [PORTAL-3604] - Problem with URL of portal 


Version portal-2.5.6

** Bug
    * [PORTAL-3118] - Cannot build eXo Gadgets Web App (The attribute "Implementation-Title" may not occur more than once in the same section)
    * [PORTAL-3139] - UIUserSelector uses PageList.getAll() but it is not supported by the LDAP implementation of the Organization Service
    * [PORTAL-3146] - Can not check validate for input which can not editable.
    * [PORTAL-3150] - When Invalid configuration in Portal we need to show the location of the file explicitly
    * [PORTAL-3151] - Error when start tomcat if it has a exo-conf folder
    * [PORTAL-3242] - Generali : Patch for no localized string
    * [PORTAL-3243] - Sitemap portlet should NOT use Ajax when clicking on a page. (when using ajax it is not usable at all)
    * [PORTAL-3391] - A div class of UIForm is not correct

** Documentation
    * [PORTAL-3577] - [DOC] Wiki doc about the ability to change easily the view template of all the basic portlets

** Improvement
    * [PORTAL-3355] - Proposal for bugfixes in the component exo.portal.component.portal
    * [PORTAL-3366] - Add the ability to change the view template of Breadcrumb portlet
    * [PORTAL-3472] - Create a eXo-dev.sh to run portal with debug param

** Task
    * [PORTAL-3110] - Remove alert message form cometd.js file
    * [PORTAL-3141] - Indent the code convention for templates

** Sub-task
    * [PORTAL-3349] -  org.exoplatform.webui.form.UIFormDateTimeInput does not work when a bundle is missing / Breaking the full html page


Version portal-2.5.5

** Bug
    * [PORTAL-1581] - Error when preview Iframe porlet with 3 skins
    * [PORTAL-1682] - Current password checking  has a problem
    * [PORTAL-1810] - Internationalization Portlet: the list should stay on the same page after deleting an entry
    * [PORTAL-2060] - IE6: Error displaying in Tree Container when create/edit page wizard
    * [PORTAL-2588] - Gadgets Should be imported by default in the Application Registry
    * [PORTAL-2676] - Error when create page wizard have 2 columns when have ( or not) UI Windown in Arabic language with all skin
    * [PORTAL-2683] - Community Management Portlet: cannot use a username that contains numeric value
    * [PORTAL-2690] - IE6: The popup window show is not correct in Mac and Vista skin
    * [PORTAL-2766] - I18n managed diffrently over the portal
    * [PORTAL-2800] - Bug in Login form in private mode when change language of browser with some language
    * [PORTAL-2837] - Incomplete & Invalid Portal translation in Portal/webui_fr.propertie bundle
    * [PORTAL-2857] - Bug JS: Error UI in Portal Navigation when change skin
    * [PORTAL-2858] - Wrong version declaration in pom.xml
    * [PORTAL-2885] - Error when change date& time when create/edit page wizard
    * [PORTAL-2901] - the whole of UIFormTabPane be re-loaded when select a tab
    * [PORTAL-2933] - Have problem when select Sample FCK portelt in special case
    * [PORTAL-2934] - Error when change URL in edit mode portelt 
    * [PORTAL-2936] - Have problem when delete Iframe portlet
    * [PORTAL-2942] - IE7: Error UI Navigation tab on toolbar portlet with Default skin
    * [PORTAL-2944] - FF: Lose border in FCK editor portlet when preview page with Default and Mac skin
    * [PORTAL-2946] - Error displaying Mask layer when right click in Edit page & Navi with all skin
    * [PORTAL-2954] - IE6: Error UI in Icon tab when edit this node with Mac & Vista skin
    * [PORTAL-2964] - IE6: Little error in toolbar portlet when change language to Arabic with Default skin
    * [PORTAL-2967] - Error displaying icon in UIRightPopUpMenu in Edit page & Navi
    * [PORTAL-2978] - icon of node is display not well on site map page with Arabic lang and Vista or Mac Skin on IE6,7
    * [PORTAL-3019] - The param "multiValues" doesn't work in UIFormMultiValueInputSet
    * [PORTAL-3049] - Wrong usage of NullPointerException - probably thrown by mistake instead of RuntimeException!
    * [PORTAL-3081] - uploading is frozen when upload file again
    * [PORTAL-3103] - Strange name appear when download an Arabic file name
    * [PORTAL-3106] - The mandatory symbol "*" doesn't appear in UIFormMultiValueInputset
    * [PORTAL-3114] - Misseing translation keywords

** Delivery Item
    * [PORTAL-2893] - Make a service to migrate JCR data from 2.2.x to 2.5

** Improvement
    * [PORTAL-2242] - add a special right for adding gadgets by URL
    * [PORTAL-2579] - reuse the UIGagdet.java in UIgadgetPortlet
    * [PORTAL-2822] - Limit size of the upload file
    * [PORTAL-2827] - UI in menu when click on eXo logo not good
    * [PORTAL-3006] - Logout icon in eXo start menu should logout the user, not only the link
    * [PORTAL-3068] - Clone page node with all preferences 

** Task
    * [PORTAL-2330] - Cache user profile in conversation state using a new filter
    * [PORTAL-2586] - [Gadget] some different  between displaying of gadget on Control work space area and on Dashboard page
    * [PORTAL-2632] - Change some filed in Portal when change language to VNese
    * [PORTAL-2674] - [dashboard] should move scrollbar at Dashboard page
    * [PORTAL-2938] - Change tooltip for Month/Year icon in pop-up calendar when change language to VNese
    * [PORTAL-3102] - Change 2.5.4-SNAPSHOT to 2.5.5-SNAPSHOT in portal branch 2.5.x
    * [PORTAL-3140] - Upgrade to JCR 1.10.4

** Sub-task
    * [PORTAL-2909] - [Test] Error when change date& time when create/edit page wizard
    * [PORTAL-2910] - [TEST] : Don't keep title name of page after edit page wizard
    * [PORTAL-2911] - [Test] Bug in Login form in private mode when change language of browser with some language
    * [PORTAL-2913] - [Test] Change some filed in Portal when change language to VNese
    * [PORTAL-2916] - [Test] Check all message of Portal when create new user/page/group/portal/node start with alpha, digit, dash and underscore characters in Name
    * [PORTAL-2917] - [Test] Change test case create new user/page/group/portal/node start with alpha, digit, dash and underscore characters in Name


Version portal-2.5.4

** Task
    * [PORTAL-3078] - Create tag 2.5.4 based on JCR 1.10.4


Version dms-2.5.2

** Bug
    * [ECM-3151] - Cannot set value for auto created property(but is not protected)
    * [ECM-3429] - typos in parameter getters in ScriptPlugin.java
    * [ECM-3430] - File Explorer does not render correctly
    * [ECM-3843] - MAC OS: Can not load icon for thumbnail view in right pane
    * [ECM-3925] - File explorer does not extend vertically
    * [ECM-3935] - Lose version history when Import node
    * [ECM-4012] - Correct misleading error messages in JCR Explorer import function
    * [ECM-4024] - Error in displaying File Explorer Edit Form with Vista and Mac skin
    * [ECM-4026] - Error in displaying form to add new drive with Vista skin
    * [ECM-4027] - Error in displaying 'Add Query' form with Vista and Mac skin
    * [ECM-4071] - lost all version when do something with node in check-in status
    * [ECM-4080] - Import of a file with its history does not work
    * [ECM-4084] - Improved display in the left side of the File Explorer
    * [ECM-4098] - [DMS] Cannot do advanced search (search by property, category, type..)
    * [ECM-4105] - Strange behaviour of Permission
    * [ECM-4109] - Actions on a folder disappear from Action bar after chose Collaboration tab on a document
    * [ECM-4112] - [DMS] Alert message appears below Upload file pop up
    * [ECM-4113] - [DMS] Unknown error when create new ECM/BC templates without name
    * [ECM-4128] - Left panel display issue
    * [ECM-4129] - Default value in selectbox does not work in form dialog metadata
    * [ECM-4135] - [DMS][file explore][admin tab] it can add properties for node when 'Name' field of properties is blank
    * [ECM-4145] - Throw wrong exception in UIDocumentForm
    * [ECM-4147] - http error 404 when retrieving WebDav icons
    * [ECM-4148] - Select category form is not shown for normal user when add new document
    * [ECM-4149] - IE7: Error in displaying document after deleted the comment
    * [ECM-4150] - Change message when delete permission of taxonomy tree
    * [ECM-4155] - Error when view multi-languages document from search result
    * [ECM-4163] - Category is not deleted in special case
    * [ECM-4167] - Can not create document in the drive of new repository
    * [ECM-4190] - UI Bug in tabs when using advanced search/view content in French (in fact depend fof the width of the tabs)
    * [ECM-4193] - OutOfMemoryError when exporting content
    * [ECM-4199] - Content Browser the published node after exprot/import
    * [ECM-4202] - Unknown error when add action for taxonomy in special case
    * [ECM-4213] - Resize Comment pop-up in File Explorer
    * [ECM-4216] - Display document/uploaded file which added category  in form to add category in special case
    * [ECM-4217] - Do not show content of document after configuring for CB using document
    * [ECM-4235] - RGR:  Modification of the behavior of the ECM addSelectBoxField between 2.5.0 and 2.5.1
    * [ECM-4240] - Unknown error when view deleted document in dms-system workspace in Content Browser
    * [ECM-4249] - Error when configuring for FE using Parameterize type without select drive
    * [ECM-4276] - Size optimization and Unnecessary blank zone on JCR 
    * [ECM-4280] - Permission of workspace is changed to 'any' while viewing
    * [ECM-4282] - Content of releated document is not shown in Content Browser
    * [ECM-4289] - File Explorer Tree View (left pane) does not "link" the various level when the folder name is long (2 lines or more0)
    * [ECM-4291] - Unknown error when delete attachment of Article or Sample Node document
    * [ECM-4296] - Static and Direct Publication plugin cannot be used by 'standard' user until administrator has used it
    * [ECM-4297] - FolksonomyServiceImpl may let open jcr session for ever
    * [ECM-4332] - Auto init category when add/upload file into document which add category 
    * [ECM-4334] - Category is disappeared after edit document (only Article)
    * [ECM-4337] - Unknown error when do action with node which added category in specal case
    * [ECM-4345] - Unknown error when create new folder has space character at the end
    * [ECM-4357] - RepositoryException at first opening of ECMAdmin when there isn't a repository called "repository"
    * [ECM-4359] - 3 scrollbars when using UIListView dsplaying many documents
    * [ECM-4360] - Editing node in UIListView changes page back to first one
    * [ECM-4382] - Exception when add language for uploaded file
    * [ECM-4391] - Can't find Bonita class PayRaiseUserNameHook on JBoss
    * [ECM-4401] - Portlet ContentBrowser does not update query on front
    * [ECM-4435] - Concurrent access: simultaneous creation of several documents with the same name
    * [ECM-4443] - WCM publication cause data loss when restoring previous version of content
    * [ECM-4451] - Problem with empty paths
    * [ECM-4495] - Show message "Path not found!Maybe, It was removed or path changed! " when select Personal drive 
    * [ECM-4507] - Exception when open form to edit view after enable version
    * [ECM-4521] - NullPointerException when the parsing order is changed
    * [ECM-4525] - Exception when edit File Plan document
    * [ECM-4544] - Exception when add new language for nt:file node
    * [ECM-4546] - Exception when add comment for nt:file
    * [ECM-4549] - Date property broken

** Improvement
    * [ECM-3669] - Set a default value to a multi-value field in a dialog form
    * [ECM-4206] - Should show label of input for validator popup message instead of name of input.
    * [ECM-4278] - No autoscroll on the scrollbar in the frame "tree view" of FileExplorer where i drap a node (drap&drop)
    * [ECM-4293] - The lock token must be stored in a dedicated ExoCache to be able to replicate them over a cluster
    * [ECM-4294] - The LockManagerListener should be an Exo Listener instead of being an HttpSessionListener
    * [ECM-4324] - File Explorer toolbar contains lot of spaces between button (especially in FR language)
    * [ECM-4398] - Change error message "Invalid characters found in the file name"

** Task
    * [ECM-4218] - Make DMS 2.5.x and 2.6.x rely on jcr 1.10.5
    * [ECM-4219] - Search and fix all the potential memory leaks in the cms services
    * [ECM-4239] - Change confirm message when delete permission of taxonomy tree
    * [ECM-4339] - The init parameter "ldap.userDN.key" is missing in the file activedirectory-configuration.xml
    * [ECM-4378] - Release DMS 2.5.2
    * [ECM-4447] - Upgrade to Portal 2.5.6
    * [ECM-4513] - Upgrade to use Portal 2.5.6.1

** Sub-task
    * [ECM-3898] - Lock operation in FileExplorer - fails


Version  dms-2.5.1

** Bug
    * [ECM-3397] - If category is mandatory, there is not star in upload panel or sample node template
    * [ECM-3549] - MAC, FF3: Impossible to use 1 click to open node from left pane in File Explorer
    * [ECM-3579] - Integration with KS: Links at the top-right corner of the forum portlet are badly positionned.
    * [ECM-3685] - Can not add category for document while editing this doc
    * [ECM-3739] - Error in displaying Metadata form
    * [ECM-3756] - problem when search in File Explorer
    * [ECM-3875] - Error message text when display to inform that can not leave blank name field
    * [ECM-3878] - Export/Import with Replace/Remove Existing UUID behavior is not correct
    * [ECM-3879] - Unknown error when delete taxonomy
    * [ECM-3886] - Home Path in Add taxonomy tree form is not marked with * but is required except choosing dms-system workspace
    * [ECM-3900] - Some UI errors in French
    * [ECM-3912] - Cannot config taxonomy path and workspace by xml
    * [ECM-3914] - Error when create new workspace
    * [ECM-3920] - Errors popup appears when opening the private/public drives on webos on ie6,7 after fresh login
    * [ECM-3929] - Can not upload file to import at the second time in ECM Admin
    * [ECM-3931] - Last Edited Documents: The gadget displays some strange files
    * [ECM-3932] - The auto-refresh of the google gadgest Last Edited Documents and Recently Published Documents doesn't seem to work properly
    * [ECM-3934] - Exception when create new workspace or new repository
    * [ECM-3938] - IE7: Can not select all nodes using mouse
    * [ECM-3940] - Modifications on a createRSSFeedAction are not taken into account
    * [ECM-3941] - RGR: Basic Publication Workflow does not work on 2.4RC1
    * [ECM-3943] - Bad display with File explorer on IE6(LTR & RTL)
    * [ECM-3950] - Popup appears when add tag for node in drive without side bar
    * [ECM-4010] - Should check if document has language before get that property
    * [ECM-4015] -  [ECM][file explore] cant Import a node when imported node is being locked
    * [ECM-4016] - Make it possible to use the RSSServlet with repositories that are not called "repository"
    * [ECM-4017] - Can not get documents using script in Content Browser
    * [ECM-4021] - ArrayIndexOutOfBoundsException in File Explore portlet Edit Mode
    * [ECM-4025] - Error in displaying of 'Add Taxonomy Tree' form in Vista and Mac skin
    * [ECM-4028] - Restoring previous version of multilanguage article loose all languages except root one
    * [ECM-4030] - Issues in 2.5 Test Campaign
    * [ECM-4063] - Lost link icon in File explorer portlet
    * [ECM-4067] - "Copy URL to clipboard" doesn't seem to work on FF with Flash Player 10
    * [ECM-4082] - FileExplorer display is not stable
    * [ECM-4083] - Satic&Direct Publication Service + Content Browser Portlet does not work correctly
    * [ECM-4094] - can not create node in file type with vietnamese content
    * [ECM-4101] - Icons in Action bar of Site Explorer was drop down when resize the browser
    * [ECM-4106] - file explorer does not delete all selected documents
    * [ECM-4144] - Can not view content of document in CB
    * [ECM-4166] - Can not create folder with WebDAV
    * [ECM-4185] - RGR: DMS Interceptors do not receive the correct "Context"  the "path" is null in 2.5 (was ok in 2.3)
    * [ECM-4186] - Publication "Static and Direct" service change the permission of a node
    * [ECM-4187] - Can not view WebCotent in Content Browser portlet
    * [ECM-4194] - Error when view the document in the Content Browser with the imported node (without import/export version history)
    * [ECM-4200] - Can not choose uploaded file in document config form of Content Browser
    * [ECM-4214] - Potential "race conditions issue" at UIExtensionManagerImpl initialization
    * [ECM-4215] - File Explorer direct access (from URL) does not work properly

** Improvement
    * [ECM-3412] - Add checkbox fields and radio buttons
    * [ECM-3921] - Missing some input in UIDialogForm
    * [ECM-3924] - Rename (Read) actions to a more contextual name for exampe  (User Action/Contextual Action)
    * [ECM-3939] - replace illegal xml entities when creating a rss xml file
    * [ECM-4022] - Add methods in UIExtensionFilterType to have better visibility in the code of UIExtensionManagerImpl
    * [ECM-4072] - Allow annotation inheritance and Check the return type of the method that has been annotated with @UIExtensionFilters 
    * [ECM-4073] - Disable the upload size limit when using the "Import Node" action
    * [ECM-4146] - Broadcast events on storeNodeByUUID method.
    * [ECM-4182] - If we allow a node nt:unstructured can be added mix:i18n, we should allow add language for it.

** Task
    * [ECM-3787] - Add an Hudson project for DMS
    * [ECM-3844] - Deeper test on DMS 2.4 RC1
    * [ECM-3880] - Change message "exists" when copy/cut & paste a taxonomy into a destination contains one with same name
    * [ECM-3881] - Little error with label in Taxonomy's Permission form 
    * [ECM-3882] - Little error in message content when cut/paste on the same taxonomy
    * [ECM-3884] - Change title for Add Action form when add new action on taxonomy
    * [ECM-3911] - Make a Stress Test of the main features of DMS
    * [ECM-3947] - Make DMS 2.5 relies on Portal 2.5.5
    * [ECM-4074] - Release DMS 2.5.1

** Sub-task
    * [ECM-3846] - Error when compare 2 versions in html source 
    * [ECM-3858] - Can't rename child node while parent node is being locked not by locker
    * [ECM-3913] - Create a benchmark from your tests
    * [ECM-4031] - Edit workspace form is blank & exception in console when view form to edit ws of new added repo
    * [ECM-4032] - Can not delete new added workspace while editing repo
    * [ECM-4033] - Exception in console whenever choose a repository from list to view (no error in UI)
    * [ECM-4034] - Error after signout while selecting new added repo
    * [ECM-4035] - Error when signout after deleted the being selected new added repo
    * [ECM-4036] - Error when switch between repositories
    * [ECM-4038] -  Error in showing node in Taxonomy tree
    * [ECM-4039] - Can not Delete child node while parent node is being locked by user is not locker
    * [ECM-4040] - Remove no needed text in View tab of Edit Template form
    * [ECM-4041] - [File explorer][admin] form version infor of File document is showed not good on IE7
    * [ECM-4042] - Always display FE in new added view as default instead of displaying in current selecting view
    * [ECM-4044] - [file explore][admin] show Error when unpublished a node
    * [ECM-4045] - IE 7: [ File explorer ] UI error when folder tree is so long
    * [ECM-4046] - can not copy/delete/cut/lock many nodes 
    * [ECM-4048] - Show content of message is empty when unlock a node in special case
    * [ECM-4050] - [file explorer] icon of node is displayed not well on IE7
    * [ECM-4052] - can not login on IE7 again in special case
    * [ECM-4053] - IE7[File explorer ] : at left pane, don't show menu when right click on folder icon of node 
    * [ECM-4054] - The record number of File plan is still "0" although added some documents into
    * [ECM-4055] - [file explorer][admin] show UNKNOWN ERROR in some special case in editting permission of node
    * [ECM-4056] - [file explore] [admin] Name of action added for node can be contained special chars
    * [ECM-4057] - Error when view documents using tag when user does not have permission to view in this doc
    * [ECM-4058] - [file explore][admin] The value of field 'name' and "value" of new properiest are null or empty
    * [ECM-4059] - Error when go to folder of node after do search but user does not have any right in this folder
    * [ECM-4060] - Unknown error when add new ECM/BC template with blank Name
    * [ECM-4061] - Can not set localize for uploaded file
    * [ECM-4064] - File explorer : FF: UI error when add comment for document
    * [ECM-4065] - Upload file: Automatic remove selected file when add item into List taxonomy
    * [ECM-4066] - Remove all categories added although don't select them in special case


Version dms-2.5

** Bug
    * [ECM-3486] - Constant warning in console regarding bonita when navgating the JCR using DAV
    * [ECM-3556] - Error in vote bar of Sample Node document
    * [ECM-3667] - Pre Save interceptor can't prevent save and show error message 
    * [ECM-3686] - Display symlink node in form to add category
    * [ECM-3690] - Always show message "The query is invalid. Please check your constraint" when do advanced search
    * [ECM-3691] - Can not access CB after renamed the Categories path
    * [ECM-3692] - Error in showing CB when select a node contain a symlink for the Categories path
    * [ECM-3693] - Exception when change workspace after selecting a node in Manage Relation & Add Sym link form
    * [ECM-3694] - Change title for UIRelationsAddedList tab in Manage Relation form
    * [ECM-3723] - Errow when select symlink node(folder) of other workspace in Content Browser
    * [ECM-3732] - Do not display the change of File document in 'Auditing Information' form
    * [ECM-3737] - Can not select 'Edit' mode when you are in drive
    * [ECM-3738] - Error in displaying 'Node Type Information' form
    * [ECM-3740] - Error in displaying the position of name in File Plan document 
    * [ECM-3744] - Error in displaying File Plan in Fast Content Creator
    * [ECM-3842] - When we remove the target of a link, the link is no more displayed in the FE which creates side effects
    * [ECM-3890] - ContentTypeFilterPlugin doesn't read good value for repository param
    * [ECM-3891] - No one can access drive that select workspace with "any permission"
    * [ECM-3892] - New added repo disappears after re-run tomcat
    * [ECM-3893] - Errors when do actions on being locked node
    * [ECM-3894] - Drag'n'Drop in File Explorer doesn't work with accentuated characters
    * [ECM-3895] - Drag'n'Drop in File Explorer doesn't work well in IE7
    * [ECM-3903] - Impossible to see the detail of a content with arabic name (IE6 IE7)
    * [ECM-3905] - Probleme when editing a field metadata in dialog
    * [ECM-3906] - Re initializing field date when choosing an image in a dialog form
    * [ECM-3909] - Creating unnecessary folders for User
    * [ECM-3919] - Labels partly Arabized
    * [ECM-3926] - RGR:  Impossible to edit an existing action in the file explorer "Manage Actions" dialog.
    * [ECM-3942] - Error when display taxonomy
    * [ECM-3944] - NullPointerException in RSSServlet - should use a PortalContainer
    * [ECM-4103] - ECMAdmin portlet, "Vote " and "Comment" items does not exist on tab form when edit/create a new tab for a view

** Documentation
    * [ECM-3949] - Create an How to use the UI Extension Framework

** Improvement
    * [ECM-3473] - Add new logo to the product homepage
    * [ECM-3746] - The workspace creator must be up to date
    * [ECM-3930] - URLs are hard coded in the source code of the Google Gadgets LastEditedDocument and PublishedDocument
    * [ECM-3933] - The new FE ergonomy doesn't support RTL properly
    * [ECM-3945] - Useless logs

** Task
    * [ECM-3563] - Edit the label in form to add permission when edit metadata
    * [ECM-3565] - Edit the label when create workspace
    * [ECM-3762] - Create Unit Tests and Add javadoc to all public and protected methods of all implementations of all our services 
    * [ECM-3896] - Add new logo for DMS and workflow
    * [ECM-3923] - Navigation and Locale sanitization
    * [ECM-3946] - Add a "Take a tour" and a small description for all the main applications to the home page
    * [ECM-3948] - Release DMS 2.5


Version dms-2.4-RC1

** Bug
    * [ECM-2329] - Unable to add an action
    * [ECM-2568] - Can't automatically unlock node after locker sign out
    * [ECM-2753] - Upload icon not visible on Firefox 3 (Ubuntu)
    * [ECM-3011] - Change messages  in Content Browser in Vietnamese language
    * [ECM-3029] - Change message in Fast Content Creator in Vietnamese language
    * [ECM-3044] - Show duplicate information of user when user has 2 membership type in this group
    * [ECM-3064] - exception when trying to create a portal with a new group
    * [ECM-3091] - Error when displaying an image in exo:article when user not loggued
    * [ECM-3092] - not target link on webdav view button
    * [ECM-3096] - Throw exception when view content of File Plan in 'Version Infor' pop-up after manage publication
    * [ECM-3221] - Bad error message displayed when we have not enough rights to add a folder
    * [ECM-3222] - Bad error message displayed when we have not enough rights to add an article and the article form is not displayed properly
    * [ECM-3225] - Read Action are not working as expected : no right cick menu entry 
    * [ECM-3310] - Display bug on the File Explorer when we choose the "Dutch" language
    * [ECM-3401] - the method UIDialogForm.executeScript contains an incoherent test
    * [ECM-3428] - Allocate more space when the name of a column is too long
    * [ECM-3432] - Error in ContentBrowser when target folder is not readable by current user
    * [ECM-3478] - The attached file is deleted from the document with type Podcast in edit mode
    * [ECM-3492] - File explorer has a view bug for the first entry in list view
    * [ECM-3499] - new content or modified content don't show until we restart the AS or disconnect
    * [ECM-3507] - Cannot use Dashboard portlet in DMS Trunk (so cannot use the new DMS gadgets
    * [ECM-3510] - Problem after importing document with special permissions
    * [ECM-3512] - Cannot edit Documents by "Collaboration Action" which use "UIOneNodePathSelector"
    * [ECM-3541] - Bugs display after refactoring
    * [ECM-3546] - Error with action on opening node
    * [ECM-3555] - Unknown error when add metadata while node/parent is in check in status
    * [ECM-3557] - Unknown error when click Previous View after viewing uploaded file of a document
    * [ECM-3561] - BC: Unknown error when search by category with space at the first/last in searching keyword 
    * [ECM-3562] - Error when back to previous node in special case
    * [ECM-3567] - UI issue in JCR FE detailed view, difference between english and french view
    * [ECM-3580] - Missing icons in the Intranet's file explorer on Mac and Vista style skins unlike default style one
    * [ECM-3582] - Bad displaying of the list of sub nodes on FileExplorer
    * [ECM-3598] - Hard coded labels in webapp/groovy/webui/component/explorer/UIConfirmMessage.gtmpl
    * [ECM-3599] - Resizing of the container according to the contents 
    * [ECM-3600] - The links are not properly displayed in the path selector
    * [ECM-3610] - Drag and drop node into itself -> node disappears
    * [ECM-3620] - Change resource bundle in Fast Content and Browser Content in Vietnamese language
    * [ECM-3673] - Exception when select News page in navigation bar
    * [ECM-3680] - Cannot find a document from a Tag
    * [ECM-3681] - The test to know if the current node is the root node is incorrect
    * [ECM-3682] - Invisible content after an import-export
    * [ECM-3684] - Error when access Content Browser or Ideas-> Read Ideas
    * [ECM-3688] - Exception when manage task in Business Process Controller
    * [ECM-3724] - Possible problem with categories when upload document
    * [ECM-3741] - Unknown error when create or edit query in ECM Administration
    * [ECM-3745] - Must select category while creating document 
    * [ECM-3752] - Unknown error when select category of new taxonomy tree to add for document
    * [ECM-3753] - Exception when view content of document in the search result in Content Browser
    * [ECM-3852] - Typo Issue in  org.exoplatform.ecm.webui.component.admin.metadata.UIMetadataForm: The repository is retrieved instead of the workspace 
    * [ECM-3876] - Even if the renaming process fails, the relations are removed
    * [ECM-3899] - The taxonomyAction is not triggered in the System Taxonomy Tree

** Documentation
    * [ECM-3687] - Create the article "How to migrate a DMS 2.3 to DMS 2.4" in the wiki

** Improvement
    * [ECM-3313] - siteexplorer visual ergonomy (step 1)
    * [ECM-3314] - FileExplorer : buttons => plugin buttons
    * [ECM-3431] - File Explorer Drag and Drop too delicate
    * [ECM-3433] - Broadcast some event when create/edit a document by CMSService
    * [ECM-3454] - New Taxonomy Management
    * [ECM-3471] - Finish improving the Last Published Documents gadget
    * [ECM-3484] - Broadcast some event when copy/cut/clone a node in FE
    * [ECM-3577] - Reduce the effect of drag and drop in file explorer
    * [ECM-3581] - use the upload file size limit in the upload form
    * [ECM-3601] - The path selector should not allow to select a link by default to avoid unexpected bugs
    * [ECM-3611] - Auto create dms-system workspace when create new repository
    * [ECM-3619] - Use of appropriate tests
    * [ECM-3671] - Allow to translate node whose type extends nt:folder or nt:unstructured
    * [ECM-3734] - Allow to export/import a versionnable node
    * [ECM-3841] - TaxonomyManagement: Store the link at the exact same location as the document added into the taxonomy tree and store the document by default in the directory yyyy/MM/dd

** New Feature
    * [ECM-2547] - create an opensocial gadget that list the last documents edited by your contacts
    * [ECM-3316] - New taxonomy management : using symlinks

** Task
    * [ECM-3411] - Add a logger and use the logger to print all the errors caught in the class org.exoplatform.ecm.webui.form.UIDialogForm
    * [ECM-3427] - Add the new Upload Service which allows to limit the size of the uploaded files
    * [ECM-3590] - Move all the content of system:/jcr:system/exo:ecm to dms-system:/exo:ecm
    * [ECM-3706] - Release DMS 2.4RC1
    * [ECM-3716] - Allow to disable the symlinks
    * [ECM-3717] - Ensure that the new TaxonomyService can be used instead of the old service everywhere in the code
    * [ECM-3851] - Integrate JCR 1.10.4 in DMS 2.4 RC 1
    * [ECM-3889] - Integrate with Workflow 1.0.2

** Sub-task
    * [ECM-2879] - [DEV] can not unlock after sign out
    * [ECM-3542] - Still displaying symlink node after target node is deleted
    * [ECM-3543] - Show wrong message and throw exception when create a document in node that user does not have "Add" right
    * [ECM-3553] - Show wrong message when create the same name node in Document Folder or in document
    * [ECM-3554] - Unknown error when rename for node with "New name" field is blank
    * [ECM-3566] - Change message when create new query with special character in 'Name' field
    * [ECM-3583] - Apply these changes in the trunk
    * [ECM-3586] - Describe this new feature in the guides
    * [ECM-3592] - Change the configuration files
    * [ECM-3593] - Test the ECM Administration
    * [ECM-3594] - Test the File Explorer
    * [ECM-3595] - Find a way to migrate 
    * [ECM-3603] - Add a new category selector for the dialog template and replace the old one in all the default templates (Podcast, Sample Node, Kofax, File and File Plan) by this new one
    * [ECM-3609] - Always show message and throw exception when select new repository
    * [ECM-3621] - [DEV] Bad error message displayed when we have not enough rights to add an article and the article form is not displayed properly
    * [ECM-3663] - [DEV] Bad error message displayed when we have not enough rights to add a folder

Version dms-2.4-Beta1

** Bug
    * [ECM-3526] - Several requests are launch to the sever when we click in an item of the Tree Explorer in the sidebar

** New Feature
    * [ECM-3315] - Introduce symbolic links
    * [ECM-3436] - Symlink Implementation

** Task
    * [ECM-3585] - Use the parent POM 1.1.1 for dms 2.3.x and 2.4.x
    * [ECM-3589] - Make tag for DMS 2.4beta1

** Sub-task
    * [ECM-3591] - Create the new workspace dms-system
    * [ECM-3596] - Create new drive "DMS Administration" in dms-system workspace

Version dms-2.3.2

** Bug
    * [ECM-2329] - Unable to add an action
    * [ECM-2568] - Can't automatically unlock node after locker sign out
    * [ECM-2753] - Upload icon not visible on Firefox 3 (Ubuntu)
    * [ECM-3011] - Change messages  in Content Browser in Vietnamese language
    * [ECM-3029] - Change message in Fast Content Creator in Vietnamese language
    * [ECM-3044] - Show duplicate information of user when user has 2 membership type in this group
    * [ECM-3064] - exception when trying to create a portal with a new group
    * [ECM-3091] - Error when displaying an image in exo:article when user not loggued
    * [ECM-3092] - not target link on webdav view button
    * [ECM-3096] - Throw exception when view content of File Plan in 'Version Infor' pop-up after manage publication
    * [ECM-3221] - Bad error message displayed when we have not enough rights to add a folder
    * [ECM-3222] - Bad error message displayed when we have not enough rights to add an article and the article form is not displayed properly
    * [ECM-3225] - Read Action are not working as expected : no right cick menu entry 
    * [ECM-3310] - Display bug on the File Explorer when we choose the "Dutch" language
    * [ECM-3401] - the method UIDialogForm.executeScript contains an incoherent test
    * [ECM-3428] - Allocate more space when the name of a column is too long
    * [ECM-3432] - Error in ContentBrowser when target folder is not readable by current user
    * [ECM-3474] - Cannot sort a column in the detailed view
    * [ECM-3478] - The attached file is deleted from the document with type Podcast in edit mode
    * [ECM-3492] - File explorer has a view bug for the first entry in list view
    * [ECM-3499] - new content or modified content don't show until we restart the AS or disconnect
    * [ECM-3507] - Cannot use Dashboard portlet in DMS Trunk (so cannot use the new DMS gadgets
    * [ECM-3510] - Problem after importing document with special permissions
    * [ECM-3512] - Cannot edit Documents by "Collaboration Action" which use "UIOneNodePathSelector"
    * [ECM-3567] - UI issue in JCR FE detailed view, difference between english and french view
    * [ECM-3580] - Missing icons in the Intranet's file explorer on Mac and Vista style skins unlike default style one
    * [ECM-3582] - Bad displaying of the list of sub nodes on FileExplorer
    * [ECM-3598] - Hard coded labels in webapp/groovy/webui/component/explorer/UIConfirmMessage.gtmpl
    * [ECM-3599] - Resizing of the container according to the contents 
    * [ECM-3679] - Can not create query in File Explorer
    * [ECM-3681] - The test to know if the current node is the root node is incorrect
    * [ECM-3682] - Invisible content after an import-export
    * [ECM-3718] - Right-click menu is not shown when right click on node in new added repository
    * [ECM-3719] - 'msg' message when try to move node by drag & drop
    * [ECM-3720] - 'msg' message when try to delete sub node of a being locked node by user who is not locker
    * [ECM-3724] - Possible problem with categories when upload document
    * [ECM-3731] - Impossible to choose value in list for searching by property in Advanced search
    * [ECM-3852] - Typo Issue in  org.exoplatform.ecm.webui.component.admin.metadata.UIMetadataForm: The repository is retrieved instead of the workspace 
    * [ECM-3876] - Even if the renaming process fails, the relations are removed
    * [ECM-3955] - Error in displaying 'Filter' form when do advanced search

** Improvement
    * [ECM-3431] - File Explorer Drag and Drop too delicate
    * [ECM-3433] - Broadcast some event when create/edit a document by CMSService
    * [ECM-3577] - Reduce the effect of drag and drop in file explorer
    * [ECM-3581] - use the upload file size limit in the upload form
    * [ECM-3619] - Use of appropriate tests
    * [ECM-3671] - Allow to translate node whose type extends nt:folder or nt:unstructured
    * [ECM-3734] - Allow to export/import a versionnable node

** New Feature
    * [ECM-2547] - create an opensocial gadget that list the last documents edited by your contacts

** Task
    * [ECM-3411] - Add a logger and use the logger to print all the errors caught in the class org.exoplatform.ecm.webui.form.UIDialogForm
    * [ECM-3585] - Use the parent POM 1.1.1 for dms 2.3.x and 2.4.x
    * [ECM-3696] - Release DMS 2.3.2
    * [ECM-3850] - Integrate JCR 1.10.4 in DMS 2.3.2
    * [ECM-3889] - Integrate with Workflow 1.0.2

** Sub-task
    * [ECM-2879] - [DEV] can not unlock after sign out
    * [ECM-3586] - Describe this new feature in the guides
    * [ECM-3587] - Describe this new feature in the wiki


Version cs-1.3.2

** Bug
    * [CS-911] - Events spanning 2 years are not highlighted
    * [CS-2482] - List view: should be hide events/tasks of calendar which is uncheck in calendar list
    * [CS-2498] - some users are not shown at task delegation field when have many users , who was added into Task delegation
    * [CS-2506] - Dragging a link displays 'javascript:void(0)'
    * [CS-2621] -  Error when run email reminder job and  popup reminder job
    * [CS-3004] -   Chat: MacOS, FF3: Little error when show room config form
    * [CS-3017] - Room owner can not see other in joining room users list 
    * [CS-3033] - should disable the some funtions on right menu of a group address book
    * [CS-3165] - unnecessary exception found while concurrently creating events
    * [CS-3171] - Don't arrange mail in time order when filter with adding tag
    * [CS-3246] - contact list in public room is empty in special case 
    * [CS-3271] - Contact list in maill app error when show on RTL (arabic)
    * [CS-3307] - IE6: UI error when show event in Week/week work view, day view, month view
    * [CS-3309] - Safari : List View: UI error when view event/task which store attachment
    * [CS-3315] - Messages are not displayed in chat window
    * [CS-3318] - don't send file in IE8 while chatting
    * [CS-3319] - IE8: user Can't save file when another user send file
    * [CS-3326] - Safari : Still Keep session of user when that user logout 
    * [CS-3327] - SMTP Error when sending mail : could not connect to SMTP server
    * [CS-3343] - IE7: UI error when search contact in case Result is empty
    * [CS-3351] - Content of alert message is wrong when join room in special case 
    * [CS-3355] -  if add star for message can't resize Detail message pane when view in Vertical layout
    * [CS-3371] - Can only see the messages I send in a private chat or in a room
    * [CS-3372] - Functionality "Show messages from" doesn't work
    * [CS-3402] - IMAP folders containing '/' not handled properly
    * [CS-3416] - automatically hide event/task of calendar when create new event/task in special case 
    * [CS-3428] - FF : webos, all portlets are been empty in special case 
    * [CS-3462] - UI error when open portlets on Webos

** Feedback
    * [CS-3127] - Calling Address Book from Mail is too slow

** Improvement
    * [CS-569] - Fetch headers
    * [CS-2488] - do not destroy events when deleting a category
    * [CS-2656] - In Jboss: Do not display unpublic room in the list Join room of owner
    * [CS-2761] - Order of the columns in message list
    * [CS-3159] - Room owner can not see his private room in Join room list

** Task
    * [CS-2483] - remove duplicate rome dependency
    * [CS-3269] - Upgrade to portal 2.5.6
    * [CS-3352] - Release CS 1.3.2

** Sub-task
    * [CS-3354] - Calendar : List View is wrong UI
    * [CS-3356] - UI error at setting calendar form
    * [CS-3357] - Year view: UI error when display name of all days in week 
    * [CS-3361] - tool tip of some icons, button are  still in English
    * [CS-3420] - [DEV] Safari : Still Keep session of user when that user logout 

Version cs-1.3.1

** Bug
    * [CS-2773] - Don't Subscribe to remote calendar by CalDav
    * [CS-2800] - Event category or calendar not selected when add new event
    * [CS-2976] - be Shown  name of room in user list at room 
    * [CS-2985] - UI error when many email address at To file
    * [CS-3024] - Show popup msg when try to open Inbox folder while the message detail pane is maximized
    * [CS-3026] - UI error when run calendar in weekview with arabic
    * [CS-3027] - IE7:Little UI error at Event Import form
    * [CS-3083] - Broken UI & exception in console when do action in Contact app after timeout
    * [CS-3084] - Little error when show tag in Vcard view in Arabic
    * [CS-3087] - Occur wrong message when comeback classic and open a folder
    * [CS-3088] - IE7 :UI error at User selector form in Arabic
    * [CS-3089] - UI error when change custom layout in Arabic
    * [CS-3090] - UI error when view detail contact in Arabic
    * [CS-3092] - Participant information sometimes can not be shown when edit event
    * [CS-3093] - Error when show mails list in Arabic
    * [CS-3095] - Little UI error when show contacts list in Mail app in Arabic
    * [CS-3102] - in the first time, message is shown in 2 places when drag&drop
    * [CS-3128] - Drag and drop of an event is possible without edit permission on shared calendars
    * [CS-3144] - Mail: Priority of an e-mail isn't shown at the first seen time
    * [CS-3146] - IE7: don't open edit event/task form when double click on event/task in list view
    * [CS-3158] - Chat, IE7, WebOS: "Object error" message when choose to view Register page while showing Chat portlet
    * [CS-3162] - Chat, WebOS: Error when show message requires to input password
    * [CS-3167] - UI error when show/hide layout
    * [CS-3168] - Jboss:Reset button don't work
    * [CS-3169] - Jboss: Can not Cancel Editing a calendar
    * [CS-3174] - chat: IE 7 show duplicate message from system on FF when user leave or join in room
    * [CS-3177] - eXo Chat bar should be position at the bottom of the browser (not the bottom of the "html page"
    * [CS-3178] - IE7: don't remove user from Contact List
    * [CS-3179] - IE7/webos: Don't export Chat History
    * [CS-3189] - Chat bar is slowing down the browser (FF3.5, Safari and IE6) when switching tabs
    * [CS-3273] - Lost Title of  chat  room
    * [CS-3283] - show wrong message when view message at Vertical &Flip Layout
    * [CS-3320] - Webos: suddenly show other portlet while working on Chat portlet in special case
    * [CS-3321] - IE 8: don't show room list when perform to refresh before
    * [CS-3322] - User can not chat,add user,join room in special case
    * [CS-3325] - Fetching bar is always shown after finishing checking mail
    * [CS-3342] - Jboss: Chat portlet don't work 
    * [CS-3349] - Webos: Can't open Chat room when create new room OR join room

** Feedback
    * [CS-3122] - View as selected value is reset when quick search
    * [CS-3123] - Folders that contain subfolders are not easy to recognize

** Improvement
    * [CS-1033] - Add possibility to define exception when user or group is created to create a new calendar
    * [CS-1345] - Open add event form by javaScript only for faster
    * [CS-2687] - Change icon for Away & Extend Away
    * [CS-2772] - should allow remove Contacts  when was input  them in participant form
    * [CS-2809] - after creating an account mail, [ Enable SMTP authentication] checck box  at Outgoing tab of Edit account form should be ticked 
    * [CS-2979] - should be disable user in contact list of room when this user added into the room
    * [CS-2980] - At Room configuration : should be disable [Allow invites ] field when [ Member only ] field is not chosen yet
    * [CS-3137] - Mail: Check mail info bar disappears when select a message to view while checking mail
    * [CS-3139] - Chat: Should change content of message when user does not have right to config room
    * [CS-3150] - Should allow resize the mails list pane when no mail is selected yet
    * [CS-3151] - Searching user to send mail from Contacts list by email
    * [CS-3152] - List View should filter task/event by calendar on uncheck the check box
    * [CS-3153] - Should show alert message when search mail with special characters
    * [CS-3157] - chat: Should has warming message when members, who have no invite right, want to invite other joining room
    * [CS-3160] - Chat, WebOS: Should focus on existing room when create same name rooms by 1 user
    * [CS-3190] - ChatBar  loads around 20 .js files !
    * [CS-3275] - Avoid stacktrace in RSS generator at startup

** New Feature
    * [CS-2679] - lazy load of attachments

** Task
    * [CS-3284] - Release cs 1.3.1
    * [CS-3308] - check compatible version of portal rest on cs

** Sub-task
    * [CS-3202] - DEV:  Don't arrange mail in time order when filter with adding tag
    * [CS-3285] - [DEV] show wrong message when view message at Vertical &Flip Layout


Version cs-1.3

** Bug
    * [CS-372] - NPE in UITagForm.getCheckedTags() line 148
    * [CS-373] - send mail from address book does not fill To : field correctly
    * [CS-1397] - multiple reminders at the same time
    * [CS-1533] - Break form when export a multi-email address contact. See attachment.
    * [CS-2251] - IE7: unknown error when delete account mail in case checking mail
    * [CS-2264] - Unknown error when change account mail to view in special case
    * [CS-2274] - Check W3C for all pages
    * [CS-2301] - Avoid flickering effect while fetching emails
    * [CS-2398] - Temporary files on the filesystem are not deleted after upload
    * [CS-2420] - View options are not applies while fetching
    * [CS-2428] - Broken UI  at Create a new account form when Your display name field is so long
    * [CS-2477] - Safari: Wrong UI of Manage account Icon
    * [CS-2478] - Safari: Flick UI when open edit event form by double click on event ,it is hard to open edit event form
    * [CS-2479] - Priority Icon and Outside Icon overlay together
    * [CS-2480] - Safari: UI error at Export contacts form
    * [CS-2486] - Email wrongly displayed
    * [CS-2510] - RSS Portlet : Portlet does not manage accent correctly when the feed contains accent
    * [CS-2531] - In RSS content plugin, charset used to read xml rss is always utf-8
    * [CS-2537] - Can not create new room 
    * [CS-2596] - Creating new account : don't show mini calendar when click on [get only mails since] combo box at step 4
    * [CS-2597] - some forms which have many tabs,  are flicked when go to one tab to view
    * [CS-2598] - Lost icon of Calendar actions menu
    * [CS-2599] - import address book or import calendar or import mail :  uploading is frozen when upload file again
    * [CS-2600] - export icon and import icon are put so tight with name of them
    * [CS-2602] - UI error when shown view Menu
    * [CS-2603] - UI error at Export Address form, select email form
    * [CS-2604] - share address book form: should allow  to edit/delete Name of group in group field  which was selected to share to other user
    * [CS-2607] - UI error when show menu by right click on working pane
    * [CS-2608] - have some UI error at Chat portlet
    * [CS-2609] - Unknown error when export mail
    * [CS-2610] - MAC OS: Little error when show add new contact pop up in mail application
    * [CS-2611] - special character in mail content is changed when reply mail
    * [CS-2613] - Value of account mail is reset after editing in special case
    * [CS-2614] - Icon for view attached image in event disappears after view image
    * [CS-2625] - Vcard view: color of tag is been different from color tag icon of contact 
    * [CS-2626] - Occur Unknown error when Create new gadget with portal 2.5.3
    * [CS-2627] - Lost content of conversation when show message from Today/This week/Last 30 days/beginning 
    * [CS-2628] - IE7: UI error at Mail settings form
    * [CS-2631] - occur wrong message when set security for room in special case
    * [CS-2632] - Don't export Conversation in special case
    * [CS-2650] - UI error at Join Room form
    * [CS-2651] - Lost status Icon of User
    * [CS-2653] - User do not have right :when join room , occur wrong message
    * [CS-2655] - Jboss: when have more than 10 registered user, at Add contact form is shown to be  10 only
    * [CS-2658] - Jboss: Can not perform any action on chat portlet when change status of user from offline to online
    * [CS-2659] - Jboss: show wrong font when send message by Vietnamese 
    * [CS-2666] - Can invite others to join room when user does not have right
    * [CS-2667] - Error with page iterator in  some forms of CS
    * [CS-2668] - Don't export chat history in special case
    * [CS-2669] - Overloaded methods in UICalendarPortlet.js
    * [CS-2671] - UI error when show menu of [actions on this message]
    * [CS-2672] - safari: Month view: when click on event , event is drag& drop automatically
    * [CS-2706] - Can not share an address book
    * [CS-2709] - UI error at Folders List
    * [CS-2710] - Unknown error when perform to some actions : share calendar,create event/task,edit calendar group,export calendar
    * [CS-2712] - Don't switch to  Month/Day/work week/year/list  View
    * [CS-2713] - Lost some options on menu when right click on event/task
    * [CS-2714] - lost delete icon when My contacts is shown in Address book form at Mail portlet
    * [CS-2715] - change language to Arabic : UI error when change custom layout 
    * [CS-2717] - UI error when open mini calendar at edit account form
    * [CS-2718] - UI error  when search mail
    * [CS-2719] - Change language to Arabic: UI error when add tag for Mail
    * [CS-2720] - has unexpected word at Add/Edit Message filter form
    * [CS-2721] - Change language to Arabic: UI error at detail header of mail and order of icons are fail  on FCK editor at compose mail form
    * [CS-2722] - UI error when add tag for message in special case
    * [CS-2725] - Can't send the same file in special case
    * [CS-2726] - Don't show all user in user List at a public room
    * [CS-2727] - Don't highlight   days in mini calendar/ year view  when These days have events/tasks
    * [CS-2728] - Don't shown event/task in List  View
    * [CS-2729] - Can not check mail
    * [CS-2730] - IE7:Day view/week view/work week view/ Can not drag and drop/ resize event/task to other time
    * [CS-2760] - WebOS: don't edit event/task by double click on it
    * [CS-2766] - IE7: occur wrong message when perform  some actions
    * [CS-2797] - UI error at compose a new message form in special case
    * [CS-2801] - UI error at Select Users form when open from Schedule tab
    * [CS-2802] - Show wrong message when click [ Apply selected date] checkbox at Schedule tab of Add/edit events form
    * [CS-2803] - don't open Invitation form to add more participant in special case
    * [CS-2804] - UI error when view an invitation mail 
    * [CS-2810] - corresponding icon of [ Extend away ] status is not updated
    * [CS-2811] - IE7: icons of gmail folders are wrong
    * [CS-2812] - have some bugs occur when run quick chat
    * [CS-2835] - IE7: UI error at Room configuration form when set security
    * [CS-2840] - Occur wrong message when join room in special case
    * [CS-2844] - IE 7: IU error when show detail of message
    * [CS-2850] - CS deploy with chat , cannot run on jboss server
    * [CS-2867] - impossible to change time by mouse
    * [CS-2868] - UNknown error while exporting an email
    * [CS-2870] - Little error in showing emails list of a contact in export form
    * [CS-2883] - UI error when open User workspace
    * [CS-2888] - ics import - duration is one day later
    * [CS-2890] - Show blank message when try to view Contact search result in Vcard
    * [CS-2894] - shared calendar is shown in many times in special case
    * [CS-2896] -  IE 7: while standing at search form : Can't open add/edit event/task form,Can't show menu when right click on calendar 
    * [CS-2897] - Message ui error when click to show message detail
    * [CS-2898] - Commetd always send message when has chat bar portlet
    * [CS-2900] - Chat bar is not floating
    * [CS-2903] - room list does not show the rooms....
    * [CS-2906] - Show Message from : does not work
    * [CS-2908] - eXo Chat does not appear to support file transferts
    * [CS-2909] - CS On webOS button does not open WebOS
    * [CS-2913] - UI error when try to some actions on email of account which was deleted in special case
    * [CS-2914] - IE7: Error in displaying Compose mail form when there're many email addresses
    * [CS-2915] - Replace Save button in Password required popup by Cancel
    * [CS-2917] - Error in showing email address of recievers when "Reply to all" from Sent folder (auto put to cc field)
    * [CS-2918] - Always auto change priority of draft mail to "Normal" when edit a saved draft with high or low priority
    * [CS-2929] - room name is not what I entered
    * [CS-2930] - Can't drag and drop mail 
    * [CS-2936] - Right click on Calendar , UI error
    * [CS-2969] - Don't maximize portlet when go to webOS
    * [CS-2974] - FF: UI error when open status menu of user
    * [CS-2978] - don't add other user into new room when closed the room and join again
    * [CS-2986] - Show wrong event when add event from 13/07/2009 00:00 to 14/07/2009 23:59
    * [CS-2999] - don't show warning message when join room but don't have right
    * [CS-3000] - can not subscribe to caldav by sunbird and window calendar
    * [CS-3001] - Error in showing email address of recievers when review Sent folder
    * [CS-3002] - Server log print out NPE
    * [CS-3007] - Calendar:IE7:Unusual warning when show Event Categories form
    * [CS-3008] - still can add quick event in first time after delete all categories
    * [CS-3009] - Duplicate event category value in special case
    * [CS-3011] - Don't show attachment of message in sent folder
    * [CS-3013] -  Normally there's no system message alerts some one has just joined room
    * [CS-3014] -  Show message require input "event summary" when delete participant
    * [CS-3015] - Error when close Add Calendar form without input
    * [CS-3016] - Portlet mail don't work , UI Error when over timeout 
    * [CS-3018] - Still can add Event in shared calendar which user don't edit right in special case
    * [CS-3019] - events belong category is still displayed although that category isn't selected to view
    * [CS-3020] - don't show content of message when import
    * [CS-3021] - User can not add another into his personal contacts list after refuse the invitation
    * [CS-3022] - Quick add event: still allow set time although selected "All day" in special case
    * [CS-3028] -  should message to user known user can't do action with Address book of group
    * [CS-3031] - Little error in showing chat bar
    * [CS-3032] -  Page iterator is still shown when filter user
    * [CS-3035] - Public Calendar:User who don't have selected membership still have edit right
    * [CS-3076] - Chat portlet can not work on webos mode
    * [CS-3077] - Little error in Compose a new message form
    * [CS-3078] - Show error message when edit draft
    * [CS-3079] - Can not add event/task for group calendar
    * [CS-3080] - IE7: Join room form always show there's 2 pages in iterator when there's no room to join
    * [CS-3081] - Page iterator was not shown after added more than 10 contacts (need to refresh)
    * [CS-3086] - Have to click Cancel twice after remove the only participant to close the edit event form
    * [CS-3091] - IE7: wrong default calendar when add event/task
    * [CS-3097] - JCR session leak in AuthenticationLogoutListener
    * [CS-3100] - The participants list is blank when edit a event from shared calendar by shared user
    * [CS-3101] - Can not add star for message
    * [CS-3103] - memory problem with jboss run
    * [CS-3104] - can not send mail when stand at Split view
    * [CS-3105] - JBOSS session problem cause by chatbar
    * [CS-3106] - IE7: Fail when access into  a portlet in the first time
    * [CS-3107] - index of folder is fail when drag and drop a unread  message which is in a conversation
    * [CS-3108] - little error in Advance search form
    * [CS-3109] - While checking mail, if click on a message to view ,message is empty in short  time
    * [CS-3131] - Chat: Show empty page if refresh in case stand at Chat portlet
    * [CS-3132] - Chat, FF3, WebOS: Error in showing long text message
    * [CS-3134] - MAIL: sort message is wrong when sort by Sender
    * [CS-3135] - message dont add tag when filter with add tag rule
    * [CS-3138] - Error when edit a draft mail with attachments
    * [CS-3140] - Mail: Little UI error when delete a mail account
    * [CS-3142] - IE7 - contact: Occur wrongn message when go to address portlet in special case
    * [CS-3143] - Unknown error when drag&drop message to a Tag while getting mail
    * [CS-3147] - Error when try to show mail list in Inbox while maximizing the mail details pane
    * [CS-3148] - Need much time for loading the about 100 users list but then no more user is displayed in list when show form to select mail to send from contact list
    * [CS-3154] - Change "Invitations seding" to "Invitations Sending"  in resource file 
    * [CS-3161] - Chat, IE7, WebOS: Should allow to drag & drop sub popup
    * [CS-3163] - Chat, IE7: Error in showing personal contacts list of 2 users in 1 browser
    * [CS-3164] - Chat, WebOS: "Service message: XMPPSession is null" appears sometimes when show Join room

** Documentation
    * [CS-2248] - complete storage documentation
    * [CS-2400] - Apply wiki homepage guidelines
    * [CS-2886] - Install Guide for CS 1.3

** Improvement
    * [CS-787] - Simplified new account wizzard
    * [CS-800] - Translate message fetch bar
    * [CS-801] - Edit acount form, Server tab improvements
    * [CS-1162] - Add contact to shared address book
    * [CS-1786] - Import to group and shared calendars
    * [CS-1810] - Support for 'multipart/related' mime type
    * [CS-2254] - Thread date doesn't seem to change when a new email is added
    * [CS-2397] - Change delete by 'discard' on sahred address books
    * [CS-2566] - Make AddressBook application vertically elastic
    * [CS-2571] - Apply button style to recipients buttons
    * [CS-2574] - Improve "users" addressbook
    * [CS-2585] - Views as actions in toolbar
    * [CS-2606] - should be had improve when show group user
    * [CS-2662] - Should allow to search by First/Last Name when invite user into room
    * [CS-2675] - Improvements to Compose Dialog
    * [CS-2764] - Select multiple recipients from address book
    * [CS-2765] - Improve experience of giving answer to "Will You Attend ?" in Mail
    * [CS-2815] - Reply to all shortcut in message header
    * [CS-2834] - Chat Bar must be invisible for guests
    * [CS-2866] - Conversation with unread messages should be bold
    * [CS-2904] - don't display @localhost 
    * [CS-2932] - Make imap the default choice in new account wizzard
    * [CS-2933] - "Get only emails since" default value should be 10 days earlier
    * [CS-3129] - Contact: Should set "My Contact" is default value when create new contact
    * [CS-3130] - Improve time to load the Select email form with about 100 users when add email to send reminder
    * [CS-3136] - Calendar: Still show Edit calendat form although saved in special case
    * [CS-3145] - Eml file isn't checked by default when reply a message with "Reply Original message as an attachment" setting

** New Feature
    * [CS-376] - Move events between calendars
    * [CS-423] - Feeds for shared and public calendars
    * [CS-588] - Compose message from AdressBook
    * [CS-764] - Revamp Participants tab
    * [CS-839] - Add event participants by email
    * [CS-1008] - dynamic RSS/calDAV feeds 
    * [CS-1068] - Support multiple option in Filter
    * [CS-1141] - Collect email address on reply
    * [CS-1384] - SMTP authentication
    * [CS-1409] - Request Return Receipt 
    * [CS-1816] - Resend invitations when event is rescheduled
    * [CS-1963] - smart handling of corrupted attachments
    * [CS-2385] - RTL CS apps
    * [CS-2509] - List Personal IMAP folders
    * [CS-2567] - Revamp View menu
    * [CS-2568] - Custom Layout as a User Settings
    * [CS-2569] - Vertical split Layout
    * [CS-2570] - No Split Layout
    * [CS-2623] - Revamp Server settings tabs
    * [CS-2676] - Synchronize folder on click
    * [CS-2677] - Chat Bar : Main UI
    * [CS-2678] - Chat Bar : Status
    * [CS-2680] - Send Return Receipts

** Task
    * [CS-1019] - War overlay to csportal
    * [CS-1137] - refactoring : Remove SessionProvider from service interfaces
    * [CS-1139] - Refactoring : lower jcr api down to JCRDataStorage
    * [CS-2011] - Invitations should not require an eXo Mail account
    * [CS-2426] - Upgrade to portal 2.5.3
    * [CS-2432] - Add new logo to the product homepage
    * [CS-2508] - Migrate chat from liveroom to cs
    * [CS-2536] - New Home page design for cs 1.3 with chat integrated
    * [CS-2624] - Check new parent pom 1.1.1 to be used in trunks and new releases
    * [CS-2646] - Desactivate some buttons in FCK editor
    * [CS-2697] - rename source folder to resource folder for deploy context
    * [CS-2723] - i18n for Chat app
    * [CS-2724] - merge bug fix from chat on liveroom to chat on cs
    * [CS-2833] - Demo Portal
    * [CS-2837] - Last update date on events and tasks
    * [CS-2843] - java6 support
    * [CS-2848] - Method getting event based on username and eventId
    * [CS-2869] - release cs 1.3Beta2
    * [CS-2891] - Remove duplicate Cometd.js on cs, use only one form portal
    * [CS-2892] - fix calendar porlet id to avoid duplicate id on hole products
    * [CS-2912] - Make sure that all junit test for Mail, Contact, Calender run well 
    * [CS-2921] - Use session provider from jcr instead of calling  SessionProviderFactory.createSystemProvider() directly inside method parameter for Mail Portlet
    * [CS-2924] - Upgrade to Portal 2.5.5
    * [CS-2925] - re-factor contact service about session problem when run unit test
    * [CS-2987] - Disable server print out message on cs
    * [CS-3094] - review i18n labels and french translations
    * [CS-3119] - Make it simple to acess webos mode on cs portal
    * [CS-3120] - change parent pom name
    * [CS-3166] - Merge Chat + Chat bar test cases

** Sub-task
    * [CS-1783] - [DEV] Don't view name default of shared calendar with edit permission when import 
    * [CS-2196] - [DEV]Parsing error in email
    * [CS-2556] - [DEV] refactoring : Remove SessionProvider from service interfaces
    * [CS-2557] - [TEST] refactoring : Remove SessionProvider from service interfaces
    * [CS-2588] - [DEV] Update portal 2.5.3 and dependencies
    * [CS-2937] - Run unit test on mail service

Version cs-1.2.2

** Bug
    * [CS-1397] - multiple reminders at the same time
    * [CS-2505] - Typo on home page
    * [CS-2510] - RSS Portlet : Portlet does not manage accent correctly when the feed contains accent
    * [CS-2610] - MAC OS: Little error when show add new contact pop up in mail application
    * [CS-2621] -  Error when run email reminder job and  popup reminder job
    * [CS-2650] - UI error at Join Room form
    * [CS-2654] - jboss: Can not perform any action on Chat portlet after register new user
    * [CS-2655] - Jboss: when have more than 10 registered user, at Add contact form is shown to be  10 only
    * [CS-2659] - Jboss: show wrong font when send message by Vietnamese 
    * [CS-2661] - Safari4: Little error in form: Add contact into room
    * [CS-2669] - Overloaded methods in UICalendarPortlet.js
    * [CS-2716] - Don't change label on menu of custom layout when change custom layout
    * [CS-2847] - WYSIWYG in compose dialog does not support i18n
    * [CS-2850] - CS deploy with chat , cannot run on jboss server
    * [CS-2867] - impossible to change time by mouse
    * [CS-2868] - UNknown error while exporting an email
    * [CS-2883] - UI error when open User workspace
    * [CS-2888] - ics import - duration is one day later
    * [CS-2890] - Show blank message when try to view Contact search result in Vcard
    * [CS-2893] - IE7-WeOS: Can not do anything after logout/login while checking mail
    * [CS-2894] - shared calendar is shown in many times in special case
    * [CS-2896] -  IE 7: while standing at search form : Can't open add/edit event/task form,Can't show menu when right click on calendar 
    * [CS-2910] - Don't show pop up reminder
    * [CS-2913] - UI error when try to some actions on email of account which was deleted in special case
    * [CS-2914] - IE7: Error in displaying Compose mail form when there're many email addresses
    * [CS-2915] - Replace Save button in Password required popup by Cancel
    * [CS-2916] - wrong default date time of event when create on month view
    * [CS-2917] - Error in showing email address of recievers when "Reply to all" from Sent folder (auto put to cc field)
    * [CS-2918] - Always auto change priority of draft mail to "Normal" when edit a saved draft with high or low priority
    * [CS-2923] - Don't show event when use Calendar Sunbird programmer to subscribe calendar with Caldav
    * [CS-2930] - Can't drag and drop mail 
    * [CS-2986] - Show wrong event when add event from 13/07/2009 00:00 to 14/07/2009 23:59
    * [CS-2998] - Field label is missing in Generate RSS popup
    * [CS-3001] - Error in showing email address of recievers when review Sent folder
    * [CS-3025] - has an unexpected icon at Add/edit new contact form when add sender to contacts
    * [CS-3075] - Choose hours does not work when creating/editing event/task
    * [CS-3082] - unkown error when importing an adress book after trying to upload a file larger than sizelimit
    * [CS-3097] - JCR session leak in AuthenticationLogoutListener
    * [CS-3396] - can't not view  message detail
    * [CS-3399] - FF :Can't import contact in special case
    * [CS-3403] - UI at Compose form 

** Improvement
    * [CS-2566] - Make AddressBook application vertically elastic
    * [CS-3172] - Should keep showing tab of current viewing public room when there're many joining rooms

** Task
    * [CS-2615] - Resource Bundles and FR translation review
    * [CS-2891] - Remove duplicate Cometd.js on cs, use only one form portal
    * [CS-2892] - fix calendar porlet id to avoid duplicate id on hole products

** Sub-task
    * [CS-3359] - Make svn tags



Version ks-1.2.1

** Bug
    * [KS-1412] - xml markup inside [CODE] is 'swallowed' by WYSIWYG
    * [KS-1528] - Error UI when view forum in case: Open User workspace panel. See file attach
    * [KS-1695] - FAQ -  In Print Preview mode, unvote function still works
    * [KS-1735] - FAQ : CSS error on the contact page
    * [KS-1764] - In IE7: Lose border in Edit profile form. see file attach
    * [KS-1765] - In IE 7: Little error in topic type table in Form administration form. See file attach
    * [KS-1767] - Search icon in forum should not re-use css "search" class, but a different css class
    * [KS-1776] - IE7- print preview small UI error in case question having comments
    * [KS-1779] - Upload Icon does not appear in forum attachment
    * [KS-1793] - Show the number of post by user in public profile is incorrect in special case
    * [KS-1825] - Error messages on startup
    * [KS-1827] - FAQ: Still can move category when only have one category.
    * [KS-1831] - Question isn't updated after edit category which contains that question.
    * [KS-1832] - mail mix/is cut with question in faq
    * [KS-1844] - Can not search question in language which not default by normal user.
    * [KS-1855] - Answer: Can not sort category and question
    * [KS-1881] - Manage question/category function disappears in toolbar although login by administrator
    * [KS-1888] - CODE is not rendered properly in mail messages 
    * [KS-1889] - Show Forum rules is incorrect when Forum banned by IP
    * [KS-1891] - Answer of multi-language question isn't displayed in special case
    * [KS-1898] - In Post by user form: Show value of IP logging is "null" in special case
    * [KS-1899] - Can not move category to root category
    * [KS-1903] - Improve the notification messages received by exo forum
    * [KS-1904] - Jump to last read post is not updated when post is moved
    * [KS-1905] - Home button does not repect useAjax
    * [KS-1906] - In FF 3.0: Popup menu is hidden below  footer pane. See file attach
    * [KS-1907] - Answer: Show text is "French" in Send mail template.
    * [KS-1908] - Moderator can not move question to category.
    * [KS-1909] - Attached image in question isn't shown after view.
    * [KS-1914] - Answer porlet: Alert message is shown below Import pop up
    * [KS-1915] - Manage question: Filter question in category is incorrect when login by moderator.
    * [KS-1916] - Category disappears in category list after drag and drop in special case.
    * [KS-1923] - Automate the adding multi-language question although only select default language.
    * [KS-1924] - Problem with validate email field in Submit question form.
    * [KS-1927] - Need to refresh (F5) browser to make click on topic work
    * [KS-1933] - [BFPME-475] i18n labels
    * [KS-1937] - Still can move topic to locked forum.
    * [KS-1938] - Owner question can not search pending question although it has view right
    * [KS-1939] - Advance search: always show all existing questions in search result.

** Documentation
    * [KS-1745] - Document JCR Storage
    * [KS-1835] - Document FAQ initial data plugin 

** Improvement
    * [KS-1337] - No need to differ upper and lower search term
    * [KS-1365] - Scroll back to top when bentering a category
    * [KS-1434] - Error in displaying post after being edited with long text for result
    * [KS-1458] - Errors relate to Print
    * [KS-1468] - Add delete and move actions to  category contextual menu
    * [KS-1521] - should allow select user available from list into "Moderator" field when search advanced.
    * [KS-1547] - Display Page iterator only when needed
    * [KS-1605] - Performances improvement when opening the Forum portlet
    * [KS-1637] - Add Move question notification for FAQ
    * [KS-1653] - Should allow select user from available list  to Moderator field in Advanced search form.
    * [KS-1660] - Error UI in list tag pane. See file attach
    * [KS-1769] - Improve quick search function with special character
    * [KS-1775] - FAQ - Should show the name of folder in the alert message
    * [KS-1778] - Direct display of image attachments is too big
    * [KS-1782] - Email Notification link should open the corresponding forum page
    * [KS-1783] - Avoid duplicate notifications for watched forum topics
    * [KS-1798] - Remember current page index during session
    * [KS-1826] - quick search should run when hit <Enter> key in search field
    * [KS-1833] - Don't show "Root" category in FAQ application
    * [KS-1896] - FAQ header is too short
    * [KS-1897] - FAQ should render BBCode
    * [KS-1913] - Unwatch
    * [KS-1928] - Move form still displays Root

** Task
    * [KS-1321] - Upgrade Procedure from 1.0
    * [KS-1489] - Improve some bad localization key-value pairs
    * [KS-1663] - Upgrade tools and doc 
    * [KS-1734] - Avoid expensive calls to getAll()
    * [KS-1750] - Fix the TestSuite
    * [KS-1804] - Reuse Cometd.js from portal
    * [KS-1828] - Finish rename FAQ's portlets in source code
    * [KS-1900] - Upgrade to portal 2.5.6
    * [KS-1902] - Pass the migraiton install test
    * [KS-1922] - Remove SessionProvider in UI
    * [KS-1926] - support Java 6

** Sub-task
    * [KS-1788] - [TEST]Only should show page interator when toal number of topic/post is more than one page.
    * [KS-1789] - [TEST]Improve quick search function with special character
    * [KS-1817] - Unit test for Forum
    * [KS-1930] - [DEV] Compile and run with java6
    * [KS-1932] - [DEV] Fix for requirement 1 and 4
    * [KS-1976] - [TEST] sniff test for ks 1.2.1

Version ks-1.2

** Bug
    * [KS-1104] - export/import the forum content doesn't work
    * [KS-1108] - rename permlink in permalink
    * [KS-1120] - When creating a post with a link [url] or [link] the link is not visible in Preview Mode
    * [KS-1126] - When reconnect to the forum it is not possible to know what I have read or not
    * [KS-1127] - Forum home page: New Topic/ No New Topic are not based on what the user as already read
    * [KS-1241] - Permlink should create public links
    * [KS-1245] - Dialog jumps when typing on Enter
    * [KS-1251] - Temporary files on the filesystem are not deleted after upload
    * [KS-1307] - Unknown error related to Breadcrumb in special case 
    * [KS-1311] - Sign in button is displayed in two lies
    * [KS-1316] - IE6: Error in case long link added
    * [KS-1336] - Ban automatically release is not updated ontime
    * [KS-1355] - IE7: Remove horizonal bar on some forms
    * [KS-1358] - Rename the node type exo:userProfile to avoid conflict with the one defined into the JCR
    * [KS-1359] - Can't view quote in preview form
    * [KS-1360] - Add topic with post notification and then edit the topic, the check bos post notification is not ticked
    * [KS-1362] - Should check both "post reply" and "Message" in case having censor word
    * [KS-1363] - UI bug in privew private post form
    * [KS-1364] - MAC, FF3: Sign In link is dropped down
    * [KS-1366] - still create topic for forum although the forum is locked or closed in special case
    * [KS-1367] - [FQA] has problem when delete the catagory before click [save] button of importing category for FQA 
    * [KS-1368] - [forum] Import form is overlayer on message form
    * [KS-1370] - [forum] show UNKNOW ERROR when edit For deleted category
    * [KS-1373] - Unknown error when edit comment of Question in special case
    * [KS-1374] - Bug unknown error when do some actions in topic in special case.
    * [KS-1375] - Could not configure "Dicuss in Forum" from portlet-preferences.xml
    * [KS-1381] - Search must be scoped
    * [KS-1384] - User profile does not show user account information
    * [KS-1407] - Wrong French Message (answer and question confused)
    * [KS-1408] - Typos and misspelled words in KS portlets
    * [KS-1410] - anonymous user can use account of admins or others
    * [KS-1416] - Execution of "Previous" function in main action panel is incorrect in special case.
    * [KS-1417] - In Breadcum bar: Title of page is moved to right screen. see file attach
    * [KS-1419] - Email which typing directly is removed after select email available from pop up.
    * [KS-1421] - Pop up message: text is overlap. See file attach
    * [KS-1422] - Safari4: Error in showing editor form
    * [KS-1423] - Nothing happen when click on "Your account" link in banner
    * [KS-1424] - Error UI in navigation bar in Mac and Vista skin. See file attach
    * [KS-1425] - Don't display content of "Application registry" page when selected.
    * [KS-1426] - Reply posts count is not correct: the number of reply posts is not increased with new added but decreased with deleted private post 
    * [KS-1427] - Can not preview quick post with less than 4 characters
    * [KS-1428] - Bug unknown error when Create/Edit page wizard
    * [KS-1429] - Can not upload file at the second time after remove the browsed file
    * [KS-1430] - Bug unknow error when Create new portal
    * [KS-1431] - Text in Menu action is overlap.
    * [KS-1432] - Can not add a signature in different lines
    * [KS-1437] - Always export all existing categories although do not choose all
    * [KS-1438] - Error when split topic
    * [KS-1439] - Username of last post is not correct when last post is a private post
    * [KS-1440] - Counting the number of post to display in pages are not the same between inside a specific topic & in the topics list
    * [KS-1441] - Category  isn't show although selected to show.
    * [KS-1442] - Number of pending posts is not updated after delete being hidden post
    * [KS-1443] - Posts counting is incorrect when hidden post is deleted
    * [KS-1444] - Posts order is incorrect when move to new topic in special case
    * [KS-1445] - Error in displaying tag's desc in different lines
    * [KS-1446] - Bug view date time when set ZoneTime.
    * [KS-1447] - Display name of forum isn't exact in special case.
    * [KS-1448] - Do not refresh to remove added vote in special case
    * [KS-1450] - Show message requires to answer the question in default language but the answer form is closed
    * [KS-1451] - Little error when get user profile
    * [KS-1454] - Safari4: Limit of text area to input text
    * [KS-1457] - Safari4: Do not display image for avata when print question
    * [KS-1461] - Colon in Upload file form was dropped down after uploaded file for avata
    * [KS-1462] - In First time, Show alert message and Don't redirects directly to the discussed topic  when Discuss forum.
    * [KS-1463] - Error when edit category order
    * [KS-1464] - Edit mode: Show message require "select forum" while selected forum.
    * [KS-1465] - Category is not selected in left pane when jump to that category from search result
    * [KS-1467] - User profile form isn't display when Profile includes "Birthday" property.
    * [KS-1472] - Cannot to create a new page
    * [KS-1477] - Nothing happen when click on "Discuss forum" icon
    * [KS-1478] - Display the number of topic pending isn't exact when discuss forum.
    * [KS-1479] - Display the number of topic pending isn't exact when discuss forum.
    * [KS-1481] - Still can add discuss question to forum which locked in special case
    * [KS-1482] - Integration with ECM/DMS: Links at the top-right corner of the forum portlet are badly positionned.
    * [KS-1484] - Unknown error  When click on "RSS" button in action bar 
    * [KS-1486] - Can not move question to category although user is administrator.
    * [KS-1487] - Counting the number of question in Category stats pane isn't exact.
    * [KS-1499] - Content of message is unexact in special case
    * [KS-1500] - Can not add poll for topic after remove poll from "Poll porlet"
    * [KS-1501] - "Move & Delete post" action is not working.
    * [KS-1502] - "Topics have" should be moved to a locale properties file
    * [KS-1516] - In IE7: Content of confirm message isn't displayed when delete question. See file attach
    * [KS-1517] - Content of alert message is incorrect in special case
    * [KS-1518] - In IE7: Can not goto Forum & FAQ page when click on "Try now" link from Home page
    * [KS-1522] - In IE 7: Lose style sheet on Tool bar. See file attach
    * [KS-1524] - Unknown error when add topic in special case.
    * [KS-1525] - Imported forum isn't displayed in special case.
    * [KS-1527] - Email address of user don't get to "Watch Tools" form after watch a specific forum.
    * [KS-1544] - Show duplicate post when view RSS feed of topic in special case.
    * [KS-1546] - The number of Pending post isn't count in special case.
    * [KS-1548] - Left pane in FAQ is blank after delete category in special case.
    * [KS-1549] - datetime does not like selected timezone when view posts of specific user
    * [KS-1550] - Question isn't displayed after add answer with option is inactive.
    * [KS-1553] - With normal user, RSS feed is still list answers which disapprove/inactive.
    * [KS-1554] - Error UI in Private message form. See file attach
    * [KS-1555] - Show message "This faq entry no longer exists" when link to FAQ in special case.
    * [KS-1556] - Search result isn't correct when search by "Created after" condition
    * [KS-1557] - Advanced search form disappear when search entries by French/Vietnamese
    * [KS-1558] - Don't show forum which imported from Move topic form in special case.
    * [KS-1559] - Display permlink of search result is incorrect.
    * [KS-1560] - Show message "Could not add the new topic because the forum no longer exists" when split topic in special case
    * [KS-1561] - Split topic form: Should keep ticking on check box when have warning message.
    * [KS-1562] -  Pending list bug when moving post to another topic
    * [KS-1565] - Show message "the forum moved or deleted" when set Edit mode in special case.
    * [KS-1567] - The number of post in topic which merged isn't count.
    * [KS-1568] - Show message and can not search.
    * [KS-1572] - Poll portlet has a fixed width
    * [KS-1576] - Show message "The file has been imported" but category isn't imported in special case
    * [KS-1579] - See "All Posts by" does not show thread starting posts
    * [KS-1580] - Private Mode: Links in "All posts by" and "All topics by" not valid
    * [KS-1597] - Error UI with Page interator after add new tag for topic. see file attach
    * [KS-1598] - Sub-category isn't display after add.
    * [KS-1599] - Added category isn't displayed in special case
    * [KS-1600] - Added question isn't displayed when Question field is blank.
    * [KS-1601] - Ramdom error in the number of "messages of categories" of the home page of the KS Forum, it doesn't show the good number but "-1"
    * [KS-1602] - Forum : some French translations for the wordings of the forum
    * [KS-1603] - Forum : Focus problem when user do an answser
    * [KS-1604] - FAQ : some French translations for the wordings of the forum is missing or bad
    * [KS-1606] - Normal user still see posts which pending for approval in special case.
    * [KS-1607] - Advanced search with creation dates is unclear
    * [KS-1626] - User still can search category which user don't see.
    * [KS-1627] - User management: Forum name is still displayed in Moderator forum field although untick.
    * [KS-1629] - Return value of User title and Forum role are incorrect when edit user's title of normal user.
    * [KS-1630] - Value of User role isn't updated after remove Moderator right.
    * [KS-1632] - Show code error in UI when edit profile of user
    * [KS-1633] - Update email notification isn't saved.
    * [KS-1634] - Editing Root category isn't saved.
    * [KS-1635] - Displaying time in View user profile forum is incorrect.
    * [KS-1636] - Alert message is displayed below Forum administrator form.
    * [KS-1652] - Alert message appears below Add topic/post form when preview.
    * [KS-1655] - multiple cometd instances.
    * [KS-1656] - Error UI in Home page when open control workspace panel. See file attach
    * [KS-1657] - Still show category/forum which hiding in Forum jump list box.
    * [KS-1658] - Content of message is unexact when search question in FAQ
    * [KS-1672] - Scope search in specific category/forum/topic
    * [KS-1674] - In IE7: Show message error when open Administration form. See file attach
    * [KS-1675] - Error when go directly category by link in FAQ notificaiton
    * [KS-1676] - problem on ks resource and make the error on cs when run on webos mode
    * [KS-1678] - Error in UI & exception in console when change title of "root" in Forum Users management
    * [KS-1679] - Forum - topic - post notification setting doesn' t get saved 
    * [KS-1680] - UI view Answer content is small, it has space superfluous. See attachment.
    * [KS-1681] - Check Search function in Email Address form
    * [KS-1684] - When sending an email notification include a link to the forum thread
    * [KS-1686] - Ban IP in specific forum or all forums don't work
    * [KS-1687] - FAQ - WebOS Right click menu is displayed invalidly
    * [KS-1689] - FAQ- portlet setting - alway request reselecting category/forum to discuss
    * [KS-1690] - [KS-Forum]User still view category which user without view right when go by permlink.
    * [KS-1709] - Displaying value of Ban reason is "null" when don't input value in Ban reason field.
    * [KS-1712] - Question isn't displayed in RSS feed
    * [KS-1714] - Print all questions: avatar of user isn't displayed
    * [KS-1719] - unresponsive script
    * [KS-1730] - Topic Type fields are not i18ned
    * [KS-1733] - Show message and can not merge topic
    * [KS-1736] - FAQ : CSS error on the contact page : bad order for the multipage numbers
    * [KS-1738] - User still see topic which without view permission in last post column
    * [KS-1739] - In search result of normal user, still display topic which pending censor
    * [KS-1740] - Unknown error when comment for question by right click
    * [KS-1741] - In the current, Vote question isn't work.
    * [KS-1743] - show message when discuss forum 
    * [KS-1746] - Display name of category isn't exact in special case. see file attach
    * [KS-1747] - In User watch manager form: Show category ID instead of Category name
    * [KS-1748] - Editing question isn't updated after saved
    * [KS-1753] - Forum- THe Button "Go to" (Aller in FR) dosn't work for the first choice ("Acceuil")
    * [KS-1761] - FAQ- Unknown error when edit a question that no longer exists in Manage Questions form
    * [KS-1763] - Can not add multi language for question when edit.
    * [KS-1766] - In IE 7: Error UI in Poll porlet. see file attach
    * [KS-1770] - Imported Category & Question aren't displayed in special case.
    * [KS-1771] - Watched email is still displayed in Manager watch form although deleted.
    * [KS-1772] - Show message "This faq category no longer exists" when edit Root category
    * [KS-1773] - [KS-FAQ] UI error in the Search Result form
    * [KS-1777] - Forum - Advance search - "Clear filelds" button doesn't work in webos
    * [KS-1792] - JCR session leaks
    * [KS-1795] - Bug unknown error when view topic in special case.
    * [KS-1812] - Category isn't viewed property although selected to open from Watch manager form.
    * [KS-1813] - Loosing author when promoting comment as answer
    * [KS-1814] - A normal user can still search a desactivated question
    * [KS-1816] - Add category: Get the number order of category is incorrect after add new question.
    * [KS-1829] - Question list does not refresh
    * [KS-1830] - Exception when guest click on Answer portlet the first time with empty database
    * [KS-1836] - Only root can search in answers
    * [KS-1839] - Vote on answer does not work
    * [KS-1841] - Avatar isn't displayed in question when view
    * [KS-1842] - Move category don't work and show code error in UI
    * [KS-1843] - Still can search questions in category which user has not view right.
    * [KS-1848] - User still can edit, delete post although without view permission in special case
    * [KS-1851] - Show confirm message is unexact when delete post from IPBan tab. see file attach
    * [KS-1852] - Forum & FAQ- QUOTE & CODE tag does not work well in special case
    * [KS-1853] - Answer, IE7: Show error popup message when select discuss forum function
    * [KS-1854] - Can't import category in special case 
    * [KS-1856] - Alert message is wrong when import category with wrong data format
    * [KS-1857] - Exception error when importing the category zip file in special case
    * [KS-1858] - Icon of topic type is still displayed in topic list although deleted this topic type
    * [KS-1859] - Answer,FF: Exception when select "Discuss Forum"
    * [KS-1860] - User role is still "Moderator" although user isn't moderate any category/forum.
    * [KS-1861] - Forum: Datetime is not changed by new changed timezone in Pending list
    * [KS-1862] - Edit profile: ticking on [Forum administrator] checkbox isn't saved in special case
    * [KS-1863] - User hasn't moderate right in forum although added.
    * [KS-1864] - FORUM: Selected category is still listed in Moderator category althoug removed.
    * [KS-1868] - Inspite of being deactivated, the Bold tag still effects 
    * [KS-1869] - Banned user can still send private message from topic content
    * [KS-1870] - Can NOT activate pruned topics
    * [KS-1871] - Can't set permission for user when create Forum
    * [KS-1872] - Can not search Forum by State only
    * [KS-1873] - Forum: Error when sort Forum/topic
    * [KS-1875] - Datetime is not changed by new changed timezone when preview post
    * [KS-1876] - Display value of screen name is incorrect when view topic from Edit profile form
    * [KS-1877] - Show/hide Forum jump isn't updated after save
    * [KS-1878] - Show duplicate language in Answer question form. See file attach
    * [KS-1879] - Added relate question isn't shown after save.

** Documentation
    * [KS-1677] - Update integration article

** Improvement
    * [KS-779] - Limit upload file size
    * [KS-1243] - Code tag renders too small
    * [KS-1244] - Code tag should not add text
    * [KS-1305] - Add new logo to the product homepage
    * [KS-1306] - View post / reply to post links in email notifications
    * [KS-1309] - Make easy to modify  the content of the moved notification 
    * [KS-1313] - Improve BBCode icons
    * [KS-1329] - Now we can search questions in a day
    * [KS-1333] - Apply Long date format into  the date of Most Users ever online field
    * [KS-1369] - Add path parent Category in Manage questions form.
    * [KS-1372] - Provide * symbol for required field in Send question form
    * [KS-1376] - Move search to be always visible
    * [KS-1378] - Toolbar remains visible
    * [KS-1382] - Forum not displayed when scoped
    * [KS-1383] - User search should match more fields
    * [KS-1409] - Display an icon on topics attaced to a poll
    * [KS-1435] - Smooth Refresh form action when remove attached file from a post
    * [KS-1452] - Change title "Address" to be "Add" in Add user for CC, BCC form when send mail a question
    * [KS-1453] - Should not hide the CC/BCC field after choose user to send mail from contacts list
    * [KS-1459] - Message content is not correct when save an editing comment when it has just been delete by another user
    * [KS-1460] - Should refresh to remove the label "See also" when the only one link to related question is removed after related question was removed
    * [KS-1466] - Use new version cometd in forum application.
    * [KS-1488] - Javascript localization with arguments
    * [KS-1526] - Should allow select categories/forums to export on the time, not export all.
    * [KS-1543] - Init default BBcode via plugin
    * [KS-1545] - Action menu inside a forum: should be done by clicking on line, not only by text
    * [KS-1551] - Allow a normal user to edit its own questions
    * [KS-1552] - Normal user  should not Comment/Vote a pending question
    * [KS-1573] - Show only My tags in topic header
    * [KS-1575] - remove tags column
    * [KS-1581] - "All posts by" links should link to the thread (and not only show the post content)
    * [KS-1683] - expose useAjax in edit mode
    * [KS-1727] - Direct link to RSS Feeds
    * [KS-1729] - Last read post icon after topic title
    * [KS-1737] - Change order of buttons in topic bar
    * [KS-1807] - Don't allow a normal user to approve its own question
    * [KS-1808] - Should allow Admin and Moderator to send pending question
    * [KS-1811] - Normal user should not view  a pending question
    * [KS-1837] - Search in comments
    * [KS-1838] - Actions of Question contextual menu, should be inlined as icons
    * [KS-1845] - Attachments UI improvements
    * [KS-1846] - Use useAjax in FAQPortlet, add useAjax  in edit mode.
    * [KS-1847] - Make sure all forum data is crawlable
    * [KS-1849] - Do not allow 2 categories with same name
    * [KS-1850] - Don't show alert message when export with no Category
    * [KS-1893] - Confusion when starting new discussion 

** New Feature
    * [KS-71] - Topic subscription UI management
    * [KS-382] - Show tags on thread screen
    * [KS-408] - Simple FAQ list portlet
    * [KS-550] - Auto-prune management UI
    * [KS-599] - Search in attachments
    * [KS-627] - Category Stats pane
    * [KS-1026] - Allow permission management by Category
    * [KS-1118] - Remember UI layout
    * [KS-1124] - RSS Feeds
    * [KS-1132] - Jump to last read post
    * [KS-1133] - New tags management
    * [KS-1134] - Tags suggestions
    * [KS-1169] - Topics types
    * [KS-1250] - Restricted audience on category
    * [KS-1259] - Screen name
    * [KS-1385] - Topic Poll Portlet
    * [KS-1386] - Custom BBCodes : Administration Tab
    * [KS-1476] - Custom BBCodes : Add/Edit BBCode dialog
    * [KS-1530] - Category Scoping
    * [KS-1571] - Portlet preferences for enabled panels
    * [KS-1574] - Untag
    * [KS-1834] - Plugin to load default Data in FAQ

** Task
    * [KS-1302] - Upgrade to portal 2.5.3
    * [KS-1455] - New parent pom 1.1.0 to be used in trunks and new releases
    * [KS-1456] - Remove SessionProvider from API interfaces
    * [KS-1494] - Highlight the links when mouse over in stat menu
    * [KS-1596] - Restrurcture FAQ data storage
    * [KS-1697] - Audit Performance
    * [KS-1749] - Subscription screen logic
    * [KS-1797] - Demo portal
    * [KS-1800] - Portlets renaming
    * [KS-1805] - change parent pom name
    * [KS-1815] - configure KS portlets in application registry of ks portal
    * [KS-1840] - Release KS 1.2-RC1
    * [KS-1867] - Change alert message

** Sub-task
    * [KS-1387] - [DEV] Remember UI layout
    * [KS-1388] - [TEST - DOC] Remember UI layout
    * [KS-1389] - [DEV] Category Stats pane
    * [KS-1390] - [TEST - DOC] Category Stats pane
    * [KS-1391] - [DEV] Move search to be always visible
    * [KS-1392] - [TEST - DOC] Move search to be always visible
    * [KS-1393] - [DEV] Toolbar remains visible
    * [KS-1394] - [TEST - DOC] Toolbar remains visible
    * [KS-1395] - [DEV] Search must be scoped
    * [KS-1396] - [TEST - DOC] Search must be scoped
    * [KS-1397] - [DEV] Forum not displayed when scoped
    * [KS-1398] - [TEST] Forum not displayed when scoped
    * [KS-1399] - [DEV] RSS Feeds
    * [KS-1400] - [TEST - DOC] RSS Feeds
    * [KS-1401] - [DEV] Topic subscription UI management
    * [KS-1402] - [TEST - DOC]
    * [KS-1405] - [DEV] User profile does not show user account information
    * [KS-1406] - [TEST] User profile does not show user account information
    * [KS-1411] - [DEV] Remove configuration for limit upload size 
    * [KS-1420] - [TEST] Run snifftest of portal 2.5.3 on KS 
    * [KS-1433] - Toolbar don't display after close "Advanced search" form
    * [KS-1449] - Forums in category is disappear after collapse that category
    * [KS-1470] - [TEST-DOC] Search by moderator is invalid in special case
    * [KS-1493] - [DEV] RSS icons should be same size with another icons
    * [KS-1504] - [TEST-DOC] Administration Tab, BB code Form
    * [KS-1532] - [DEV] Restructure data of Forum
    * [KS-1537] - [DEV] Category Scoping
    * [KS-1564] - Refactor FAQ service
    * [KS-1613] - [DEV] Sreen name for Forum
    * [KS-1616] - [DEV] Set moderator in category
    * [KS-1620] - [DEV] Make easy to modify the content of the moved notification in Forum
    * [KS-1640] - [DEV] Listing the suggestion when typing tag
    * [KS-1641] - [DOC - TEST] 
    * [KS-1642] - [DEV] Changes data structure and optimize service implement
    * [KS-1643] - [DEV] Refactor UI component
    * [KS-1664] - Make RSS working with new data structure
    * [KS-1665] - Improve Import/Export
    * [KS-1666] - Portlet preference setting for display categories
    * [KS-1667] - Template and CSS changeable
    * [KS-1692] - [DEV] FIX 1.2: User still view category which user without view right when go by permlink.
    * [KS-1705] - [DEV-JS]Error UI with Page interator after add new tag for topic. see file attach
    * [KS-1707] - Avoid loading full topic for last Topic in category
    * [KS-1708] - Avoid calls to hasProperty()
    * [KS-1722] - Implement Lazy Loading of lists
    * [KS-1723] - Do not load Forum objects fully on home screen
    * [KS-1724] - JCRDataStorage.getAllLink()
    * [KS-1801] - Rename in source code
    * [KS-1803] - Update wiki
    * [KS-1819] - Search in Attachment for Forum
    * [KS-1822] - Document JCR Data structure for FAQ
    * [KS-1823] - Document JCR Data structure for Forum     

Version ks-1.1.2

** Bug
    * [KS-1104] - export/import the forum content doesn't work
    * [KS-1368] - [forum] Import form is overlayer on message form
    * [KS-1421] - Pop up message: text is overlap. See file attach
    * [KS-1424] - Error UI in navigation bar in Mac and Vista skin. See file attach
    * [KS-1428] - Bug unknown error when Create/Edit page wizard
    * [KS-1431] - Text in Menu action is overlap.
    * [KS-1437] - Always export all existing categories although do not choose all
    * [KS-1441] - Category  isn't show although selected to show.
    * [KS-1477] - Nothing happen when click on "Discuss forum" icon
    * [KS-1482] - Integration with ECM/DMS: Links at the top-right corner of the forum portlet are badly positionned.
    * [KS-1518] - In IE7: Can not goto Forum & FAQ page when click on "Try now" link from Home page
    * [KS-1524] - Unknown error when add topic in special case.
    * [KS-1544] - Show duplicate post when view RSS feed of topic in special case.
    * [KS-1548] - Left pane in FAQ is blank after delete category in special case.
    * [KS-1556] - Search result isn't correct when search by "Created after" condition
    * [KS-1557] - Advanced search form disappear when search entries by French/Vietnamese
    * [KS-1558] - Don't show forum which imported from Move topic form in special case.
    * [KS-1559] - Display permlink of search result is incorrect.
    * [KS-1560] - Show message "Could not add the new topic because the forum no longer exists" when split topic in special case
    * [KS-1561] - Split topic form: Should keep ticking on check box when have warning message.
    * [KS-1562] -  Pending list bug when moving post to another topic
    * [KS-1565] - Show message "the forum moved or deleted" when set Edit mode in special case.
    * [KS-1569] - Bug unknown error when search on Category/forum/topic
    * [KS-1572] - Poll portlet has a fixed width
    * [KS-1599] - Added category isn't displayed in special case
    * [KS-1601] - Ramdom error in the number of "messages of categories" of the home page of the KS Forum, it doesn't show the good number but "-1"
    * [KS-1602] - Forum : some French translations for the wordings of the forum
    * [KS-1604] - FAQ : some French translations for the wordings of the forum is missing or bad
    * [KS-1607] - Advanced search with creation dates is unclear
    * [KS-1608] - Can create a topic with less than 3 chars in the content, although warning message is displayed
    * [KS-1635] - Displaying time in View user profile forum is incorrect.
    * [KS-1655] - multiple cometd instances.
    * [KS-1676] - problem on ks resource and make the error on cs when run on webos mode
    * [KS-1678] - Error in UI & exception in console when change title of "root" in Forum Users management
    * [KS-1679] - Forum - topic - post notification setting doesn' t get saved 
    * [KS-1681] - Check Search function in Email Address form
    * [KS-1684] - When sending an email notification include a link to the forum thread
    * [KS-1686] - Ban IP in specific forum or all forums don't work
    * [KS-1687] - FAQ - WebOS Right click menu is displayed invalidly
    * [KS-1689] - FAQ- portlet setting - alway request reselecting category/forum to discuss
    * [KS-1690] - [KS-Forum]User still view category which user without view right when go by permlink.
    * [KS-1719] - unresponsive script
    * [KS-1736] - FAQ : CSS error on the contact page : bad order for the multipage numbers
    * [KS-1753] - Forum- THe Button "Go to" (Aller in FR) dosn't work for the first choice ("Acceuil")
    * [KS-1755] - IE 7: Display error in FAQ
    * [KS-1756] - FAQ- Add category with specific Order invalidly
    * [KS-1758] - [KS-Forum]Censor keyword isn't apply in topic when it includes space character.
    * [KS-1761] - FAQ- Unknown error when edit a question that no longer exists in Manage Questions form
    * [KS-1773] - [KS-FAQ] UI error in the Search Result form
    * [KS-1780] - signature for all user is by default is a space
    * [KS-1792] - JCR session leaks

** Improvement
    * [KS-1526] - Should allow select categories/forums to export on the time, not export all.
    * [KS-1551] - Allow a normal user to edit its own questions
    * [KS-1552] - Normal user  should not Comment/Vote a pending question
    * [KS-1683] - expose useAjax in edit mode

** Task
    * [KS-1865] - Upgrade to Portal 2.5.5
    * [KS-1866] - Release 1.1.2

Version wcm-1.2.1

** Bug
    * [WCM-1244] - User logged out when certain HTML structure inserted into SingleContentViewer
    * [WCM-1443] - Cannot add mix:i18n to exo:webContent
    * [WCM-1529] - Can not see main content when insert portal link and click on preview button 
    * [WCM-1577] - publication:applicationIDs property not set when creating content from new page wizard
    * [WCM-1578] - Modifying content via WebDav causes 'Save draft' and 'Fast publish' actions to fail
    * [WCM-1623] - Upload action in exo:webFolder
    * [WCM-1744] - Exception when run publication unit test
    * [WCM-1806] - Restoring previous article version breaks publication properties
    * [WCM-1807] - Duplicated user/group home folder nodes in collaboration workspace
    * [WCM-1809] - Article's attachments are not versionable
    * [WCM-1824] - Manage Publication: Status not shown for published content
    * [WCM-1843] - Little error in showing label in Add action form when config FCC portlet
    * [WCM-1856] - Change the Field name in the alert message when generate new form with spcial characters in Name
    * [WCM-1868] - FF: Search Web content : Position of mini calendar is wrong when is shown
    * [WCM-1870] - IE7:No effect when edit CSS data
    * [WCM-1877] - IE7: buttons in popup "Insert link to a site page" are difficult to click
    * [WCM-1878] - IE7: can not insert gadget in FCK editor
    * [WCM-1882] - Search result isn't displayed when search mode is Box search
    * [WCM-1896] - SCV - Invisible PopupWindow (UINonEditable component)
    * [WCM-1897] - SCV - permitted content editor cannot edit content using "quick edit"
    * [WCM-1930] - Show message error when edit Category navigation porlet in manage page
    * [WCM-1931] - Add Content by select existed Content : Unknown error when search Document Type in special case
    * [WCM-1932] - Can not upload when edit document using new added form
    * [WCM-1933] - IE7, Form Generator: No component is added when add new form with more than 3 components
    * [WCM-1934] - IE7, Form Generator: Title are "undefined" when view added form with 2 components
    * [WCM-1935] - Unknown error when checking Manage Publications that has page is deleted
    * [WCM-1936] - Content of Web content isn't shown and throw exception when print in special case
    * [WCM-1937] - Form Generator: Error in displaying label after adding new form with Field label in VNese 
    * [WCM-1938] - Form Generator: Should display current value when edit component while creating new form
    * [WCM-1939] - IE7, Form Generator: Little UI error in Form Builder
    * [WCM-1940] - show error page when add content in special case
    * [WCM-1941] - Error when add new letter by user has no right to access template
    * [WCM-1953] - Should allow multi-adding, remove directly Category moderator when edit category of newsletter, currently, replace existing when choose new one
    * [WCM-1954] - Navigation is inactive
    * [WCM-1959] - IE7: Set align for label and check-box in PCLV edit mode
    * [WCM-1965] - Stacktrace when trying to publish content
    * [WCM-1973] - No field to upload an illustration in newsletter
    * [WCM-1976] - Can not edit banner/Access portlet 
    * [WCM-1977] - Error when set "Item per page" is blank or invalid while configuration for Content List Viewer
    * [WCM-1979] - Replication failure (because of PublicationInitializerService activity)
    * [WCM-1980] - Sylesheet wrong processing
    * [WCM-1981] - NPE using LDAP plugin
    * [WCM-1983] - "The selected node can not be edited"
    * [WCM-1984] - Error when check on "Show refresh button" while configuration for CLV
    * [WCM-1985] - Page iterator is not displayed in CLV in special case
    * [WCM-1986] - Little error in displaying page iterator
    * [WCM-1989] - Should not allow to edit web content while in print preview
    * [WCM-1990] - Error after config Category portlet (add page wizard)
    * [WCM-1991] - Little error when show PCLV in Home page
    * [WCM-1992] - PCLV, Home page: Page iterator did not disappear after changed from Edit mode to Live mode although there's no document
    * [WCM-1994] - Welcome 'user' is not shown in new site
    * [WCM-1995] - Can not do actions in banner of new added site
    * [WCM-1997] - "Edit this page's node" doesn't work at Site Navigation
    * [WCM-2010] - Bug in search box when click on Account Settings, Skins Setting, ..
    * [WCM-2012] - CLONE -Form Generator: Error in displaying label after adding new form with Field label in VNese 
    * [WCM-2018] - Show both document and web content when filter only document to show
    * [WCM-2019] - Exception when select draft document when add new content
    * [WCM-2020] - Can not edit document in SCV
    * [WCM-2022] - IE7: Session timeout when choose path to select document
    * [WCM-2023] - Upload icon not visible (in Site explorer) using Firefox under Linux
    * [WCM-2026] - WCM shutdown takes too much time
    * [WCM-2027] - Cannot subscribe but user is added in Newsletter manager in special case
    * [WCM-2029] - Can not select folder at 2 level when try to select a content for SCV in add page wizard
    * [WCM-2030] - Change title: "selectBoxTitle" in add new content form 
    * [WCM-2032] - "Debug" log should be remove from the code
    * [WCM-2033] - Error when do action in Site Editor when user is assigned to web contributor group only
    * [WCM-2034] - Error when try to edit web content after closed print preview form
    * [WCM-2035] - Unknown error when add web content into un-existing page
    * [WCM-2036] - NullPointerException in console when do actions in WCM
    * [WCM-2037] - Error when edit dfrat content from search result if user does not have edit right
    * [WCM-2038] - Can not public document/content in Overview page
    * [WCM-2039] - Can not insert image/document into new added web content
    * [WCM-2040] - Error relates to public/unpublic content when node links to different pages
    * [WCM-2043] - Nothing happens when click on Register in banner
    * [WCM-2045] - Can not edit infor in Preference of web content from search result
    * [WCM-2046] - Page publication dates does not work
    * [WCM-2048] - Edit site breaks the layout of the portal
    * [WCM-2050] - Banner tools (Logout, Change Languages, ...) do not work in newly created site
    * [WCM-2051] - Fast Content Creator interface looses modifications when opening AddAction SubDialog
    * [WCM-2052] - Typo in Navigation dialog template
    * [WCM-2055] - After being selected to public a document/web content, the Overview page is not shown in right pane
    * [WCM-2057] - Overview, CLV: Should display at least Title when there's no summary
    * [WCM-2058] - Edit mode: Lack of icon for some kind of documents/web content when they're listed in Overview page
    * [WCM-2059] - IE7: Can not show Back, First, Next Last icon
    * [WCM-2060] - WCM publication cause data loss when restoring previous version of content
    * [WCM-2062] - RGR: Cannot use gadgets in WCM Front Office
    * [WCM-2064] -  CLV templates (OneColumnCLVTemplate and TwoColumnsCLVTemplate) are not working correclty when user workspace is visible
    * [WCM-2068] - How to export / import site data (Pages and Navigation)
    * [WCM-2069] - Error with add new content
    * [WCM-2073] - Can't deactivate PCV's preferences "showTitle" and "showDateCreated"
    * [WCM-2074] - JavaScript priority doesn't work
    * [WCM-2076] - Set alignment = "center" for Main Content form in Content Editing (from search result)
    * [WCM-2077] - Error when add new content by selecting exiting one right after adding new site
    * [WCM-2078] - Error when try to select node at level 2 for Add new content use Select a content in Add new page wizard
    * [WCM-2079] - Remove Show Help or link to move between steps while adding new Content 
    * [WCM-2081] - Error with form after being created by Form Generator
    * [WCM-2082] - Error after config Category portlet using Classic Taxonomy tree while standing at ACME
    * [WCM-2083] - Little error in UI of PCLV in View mode
    * [WCM-2084] - Choose "Show more link" for PCLV but nothing is shown
    * [WCM-2085] - The Form Generator fails when using identical field labels
    * [WCM-2086] - The Form Generator creates invalid resource bundle keys when using non Latin letters.
    * [WCM-2088] - Should show alert message when try to edit permission  of "root" on a content
    * [WCM-2089] - Misleading error message on type validation
    * [WCM-2091] - IE7: Little UI error in Form builder form
    * [WCM-2094] - Can create new form while editing Form Generator portlet
    * [WCM-2097] - Should not show edit icon to edit content when user does not have edit right
    * [WCM-2098] - Nothing happens when select to view a page from nav bar of ACME site
    * [WCM-2099] - IE7: Remove no needed line in CLV config form
    * [WCM-2100] - Need some improvement in Edit content form
    * [WCM-2104] - Uploaded file is not shown in CONTENT SELECTOR (FCK Editor)
    * [WCM-2105] - IE7: Error in showing documents in CLV for sometimes
    * [WCM-2106] - Can not search in special case
    * [WCM-2108] - Error when new added user config SCV while adding new page by wizard
    * [WCM-2109] - Error in the printviewer page template
    * [WCM-2114] - Exception in console at the first time click on Register in public mode
    * [WCM-2115] - Exception in console when anonymous or new added user subscribe new letter
    * [WCM-2116] - Error in showing button when edit banner
    * [WCM-2117] - Add new content is closed automatically when choose drive of site that user does not have right 
    * [WCM-2119] - eXo WCM won't start on Mac if folder logs was not created
    * [WCM-2122] - Can not create new categories in the File Explorer
    * [WCM-2123] - Can not select a webcontent in the categories map from WCM assistants
    * [WCM-2125] - Can not select a content (webcontent, media or document)  in the categories map from the eXo-FCK Editor plug-ins.
    * [WCM-2127] - Can not easily change template in the form generator
    * [WCM-2128] - Can not subscribe or unsubscrive to a newsletter
    * [WCM-2129] - Not validate Items per page field in Content list viewer management form (case 2)
    * [WCM-2130] - Not validate Items per page field in Content list viewer management form (input text or zero in Items per page field)
    * [WCM-2131] - Cannot insert image from Illustration when edit WC from content list viewer
    * [WCM-2132] - UI bug when open Web Content from content list viewer
    * [WCM-2133] - Keep setting from the previous content list viewer when edit new content list viewer
    * [WCM-2135] - Still display draft web content in Content list viewer in Live mode
    * [WCM-2136] - Still validate Title in New category form when input Title having space
    * [WCM-2137] - Still validate Title in New category form when input Title having some special characters
    * [WCM-2138] - Not validate some special characters in Name field in New subscribe form
    * [WCM-2140] - The value of Image type field doesn't change after selecting another
    * [WCM-2143] - Still upload doc file when upload image in Illustration tab in create web content form
    * [WCM-2144] - Cannot insert image in Main content  in create web content form
    * [WCM-2145] - UI error in Upload form
    * [WCM-2146] - Still save document when its name contains some special characters
    * [WCM-2151] - Banned user still receives a letter
    * [WCM-2152] - Add new letter form doesn't display the FCK Editor
    * [WCM-2153] - Configure the PCV page in classic portal correctly
    * [WCM-2154] - Drafts are visible in a search results, but still cannot be displayed in pcv
    * [WCM-2155] - User still access Web content when he/she doesn't have both Edit and Access Right
    * [WCM-2156] - Cannot continue to edit web content permission for another or for one user in the second time
    * [WCM-2159] - Wrong alert message when search web content with From date greater than current date
    * [WCM-2160] - Prompt wrong message when search Web content with invalid date in From/To Date  
    * [WCM-2161] - Cannot find the existent document when add content
    * [WCM-2162] - Error when search a document without inputing name
    * [WCM-2163] - User who didn't check subscription in category but still receives a letter relating to the unchecked subscription
    * [WCM-2167] - Moderator of Category in Newsletter only can read Newsletter
    * [WCM-2168] - Accept more than one email address in Your mail field in Newsletter
    * [WCM-2170] - Cannot display doc file with large size in CLV
    * [WCM-2171] - Cannot Edit/Delete user permission in Web content form
    * [WCM-2172] - Can not do searching for the content names containing Space character (ECM 1.0.1)
    * [WCM-2173] -  NullPointerException when the parsing order is changed
    * [WCM-2174] - Force the start of SkinService and JavaScriptService after xml deployment
    * [WCM-2180] - Unknown error when create new web content
    * [WCM-2181] - Unknown error when search Web content/Document with name including space
    * [WCM-2183] - User need to confirm before receive the newsletter
    * [WCM-2195] - Shared css doesn't affect to any portal
    * [WCM-2200] - Can change web content status from Enrolled/Obsolete into Published
    * [WCM-2204] - Free layout and Picture on head web content is disappeared
    * [WCM-2205] - Error when use UIContentListPresentationBigImage.gtmpl as template for CLV
    * [WCM-2206] - Paginator still displays in live mode when CLV contains all draft web contents
    * [WCM-2207] - Can not delete illustration image in PCV
    * [WCM-2208] - Upload problem in Content selector 
    * [WCM-2212] - User cannot receive the letter after confirming the Newsletter confirmation request
    * [WCM-2213] - After being created, Web content has no status
    * [WCM-2215] - Publication state=null in Search form after searching a published document
    * [WCM-2217] - In Live mode, draft web contents still are listed to select
    * [WCM-2221] - Still validate when click [Cancel] in CLV management form
    * [WCM-2222] - Problem of importing CSS when we deploy WCM 1.2 on WAS
    * [WCM-2227] - Links in viewMode are not underlined
    * [WCM-2228] - Enlarge window to suppress scrolls
    * [WCM-2229] - Cannot display Description of Category in Newsletter management form
    * [WCM-2232] - Error when config SCV while adding new page by wizard (special case)
    * [WCM-2233] - Still keep the uploaded image in Icon field of the previous form in General tab after creating a template in Form Generator 
    * [WCM-2235] - Error when add a select box with default value=blank in Form Generator
    * [WCM-2236] - Cannot distinguish the fields having the same input name in the different forms in Form Generator
    * [WCM-2237] - Block WCM when click doubly
    * [WCM-2238] - Do not display name of uploaded file(not image) when use new template with Upload file field
    * [WCM-2239] - Unknown error when edit document using new added template with Upload field (special case)
    * [WCM-2240] - Error when select node in Content Selector form while adding new content
    * [WCM-2242] - Folders in group drive are not shown while adding new content
    * [WCM-2243] - Uploaded image cannot be downloaded from published page
    * [WCM-2244] - No notification is displayed in PCLV in live mode when all documents in this PCLV have status=Draft
    * [WCM-2246] - Registered email is not added in Manage users list when subscribe new letter by anonymous or new added user
    * [WCM-2247] - Error when edit document (special case)
    * [WCM-2250] - Set alignment for Nodetype Selector form (search content by document type)
    * [WCM-2251] - fckeditor selector plugin does not work
    * [WCM-2252] - CLV : no selector by drive
    * [WCM-2253] - SCV Selector : inverted list of drives
    * [WCM-2258] - Read more link in CLV cannot be active
    * [WCM-2259] - Return blank when view found document after searching while adding new web content
    * [WCM-2260] - The document/web content is not listed to be selected after being restored
    * [WCM-2262] - Display draft version in Live mode in  PCLV
    * [WCM-2263] - New added site is blank
    * [WCM-2265] - Selected page to public a content is not displayed in right pane in case it's not belongs to current site
    * [WCM-2269] - Error when select private document/content to be viewed in SCV
    * [WCM-2270] - Lost stylesheet after Fast publish content 2 times
    * [WCM-2271] - Improve selecting node in left pane when config SCV while adding page by wizard
    * [WCM-2274] - Unknown error in case add permission for document/content when edit it while it is being locked by another user
    * [WCM-2277] - Cannot display the published document in PCLV in News page
    * [WCM-2278] - Not display default value of Label component in Form Generator
    * [WCM-2280] - Letter status still is kept as  "awaiting" when time has been left
    * [WCM-2282] - WCM Navigation Portlet does not render sub menus
    * [WCM-2283] - When printing the content of a SCV, all buttons disappear.
    * [WCM-2286] - Form Generator InputField creates a boolean property
    * [WCM-2287] - Form Generator doesn't generate a unique variables for fields without a name
    * [WCM-2288] - Garbage on the quick search field
    * [WCM-2289] - Category Navigation Portlet : preferences is not saved
    * [WCM-2290] - Exception when want to display a publish content
    * [WCM-2291] - CLV does not work with exo:article
    * [WCM-2293] - Still display Draft notification and Edit icon in search result of a published document in Edit mode
    * [WCM-2294] - In newsletter management, french label exceed the size of the box
    * [WCM-2296] - PCLV : Process render error
    * [WCM-2297] - Error when add a category navigation portlet in a new page
    * [WCM-2299] - Lack of resource bundle for Tree name and template form in category  navigation portlet config form
    * [WCM-2310] - FCKEDitor : Selector doesn't have a paginator
    * [WCM-2311] - FCKEDitor : Selector always returns root drives
    * [WCM-2313] - Check boxes of letters are not align in Subscription form
    * [WCM-2316] - New site has been lost stylesheet
    * [WCM-2321] - CLONE -Restoring previous article version breaks publication properties

** Improvement
    * [WCM-1147] - content wizard selector : possibility to select in other workspaces
    * [WCM-1402] - Print : Hide Print and Close buttons
    * [WCM-1723] - SCV new content: Let the user enter any title in step 1
    * [WCM-1837] - Improvement Content selector for SCV
    * [WCM-1892] - Search should also find title content
    * [WCM-1947] - Refactor WCM's Services
    * [WCM-1948] - Refactor get/set SessionProvider
    * [WCM-1949] - Improvement Content selector for FCKPlugins
    * [WCM-1967] - Memory leak
    * [WCM-1978] - Custom Portlet/Container Id
    * [WCM-2031] - Form Generator should "format/indent" the template code correctly
    * [WCM-2042] - The "Close" button in Remove Moderator form should be "Cancel" (Newsletter Manager/Category)
    * [WCM-2044] - Change title "UIDocumentDialogForm"
    * [WCM-2053] - Once selected a content in SCV, there's no way to edit portlet settings
    * [WCM-2056] - Change title: "UIPublishingPanel"
    * [WCM-2061] - Import all the gadget by default
    * [WCM-2065] - Use a "user friendly" name for template in WCM Portlets preference
    * [WCM-2066] - Support Hot deployment of WCM templates
    * [WCM-2072] - Fix little typo in message
    * [WCM-2080] - Change the field name "UIFormGeneratorNameFormStringInput" in message when add new form with special character in Name
    * [WCM-2124] - Apply new Content Selector to CLV
    * [WCM-2150] - Base path for PCV
    * [WCM-2166] - Administrator for Newsletter
    * [WCM-2184] - Don't refresh tree when change the Filter in FCK plugins
    * [WCM-2185] - Upgrade to DMS 2.5.2
    * [WCM-2188] - Upgrade to Portal 2.5.6.1
    * [WCM-2192] - Add UI to config PCV preferences
    * [WCM-2209] - Add multi-language for the new FCK Plugins
    * [WCM-2298] - Improve render speed of Content Selector

** New Feature
    * [WCM-768] - Wehn creating a link in a Web Content we should authorize the user to point it to another WebContent
    * [WCM-807] - Be able to customize the storage structure

** Task
    * [WCM-995] - Make sure .properties files are still used for Latin based languages

Version wcm-1.2

** New Feature
    * [WCM-1002] - Navigation portlet by category
    * [WCM-1594] - Parameterized Content List Viewer Portlet
    * [WCM-1019] - Newsletter management
    * [WCM-1455] - Form generator portlet
    * [WCM-1599] - Category navigation portlet
    
** Improvement
    * [WCM-1641] - Update WCM core service
    * [WCM-1642] - Update newsletter service
    * [WCM-1643] - Update publication service
    * [WCM-1644] - Update search service
    * [WCM-1709] - CLONE -Update newsletter service
    * [WCM-1710] - CLONE -Update publication service
    * [WCM-1711] - CLONE -Update WCM core service
    * [WCM-1734] - Fix some bug for form generator

** Sub-task
    * [WCM-1392] - Show message and can not add content in special case.
    * [WCM-1519] - [TEST] - Newsletter manager portlet
    * [WCM-1520] - [TEST] - Newsletter viewer portlet
    * [WCM-1590] - [TEST] - Test Form generator portlet
    * [WCM-1591] - [TEST] - Test Fast content creator portlet
    * [WCM-1597] - [TEST] - Update testcase
    * [WCM-1598] - [TEST] - Test PCLV portlet
    * [WCM-1600] - [TEST] - Update testcase
    * [WCM-1601] - [TEST] - Category navigation portlet
    * [WCM-1602] - [TEST] - Update testcase for Form generator portlet
    * [WCM-1603] - [TEST] - Update testcase for Fast content creator portlet
    * [WCM-1604] - [TEST] - Update testcase
    * [WCM-1645] - [JAVADOC] - Update javadoc for newsletter
    * [WCM-1646] - [JAVADOC] - Update javadoc for search
    * [WCM-1647] - [JAVADOC] - Update javadoc for publication
    * [WCM-1648] - [DEV] - Update junit test for newsletter
    * [WCM-1649] - [DEV] - Update junit test for publication
    * [WCM-1650] - [DEV] - Update junit test for search
    * [WCM-1651] - [JAVADOC] - Update javadoc for wcm core service
    * [WCM-1652] - [DEV] - Update junit test for wcm core service
    * [WCM-1653] - [JAVADOC] - Update javadoc for wcm portal service
    * [WCM-1654] - [DEV] - Update junit test for wcm portal service
    * [WCM-1726] - Update JS POM
    * [WCM-1727] - Update README.txt, put migrate guide in readme
    * [WCM-1728] - Make an SVN tag
    * [WCM-1729] - Make a zip package
    * [WCM-1730] - Make a sniff test
    * [WCM-1731] - Wait for PM approval
    * [WCM-1732] - Ensure artifacts are on eXo/VN maven repository
    * [WCM-1733] - Announcement
    
** Bug
    * [WCM-820] - Create web content by VietNamese text--> display error font.
    * [WCM-1011] - IE6- Didn't display admin toolbar after login
    * [WCM-1012] - IE6- when i click on Viewer navigation--> display error index
    * [WCM-1042] - Bug when view webdav on MAC
    * [WCM-1215] - IE7-Broken UI when minimise browser
    * [WCM-1352] - [DEV-JS]-Fix bugs navigations in Safari
    * [WCM-1443] - Cannot add mix:i18n to exo:webContent
    * [WCM-1530] - NullPointerException while requesting rss feed
    * [WCM-1536] - Safari 4 compliance
    * [WCM-1563] - Error with Abort button in Add/Edit content form
    * [WCM-1571] - ECM Content Browser portlet does not work with WCM content (Webcontent and associated template)
    * [WCM-1576] - NullPointerException when opening 'Manage publications' window
    * [WCM-1578] - Modifying content via WebDav causes 'Save draft' and 'Fast publish' actions to fail
    * [WCM-1581] - getActiveStylesheet exception when rendering exo:webcontent
    * [WCM-1660] - NullPointerException when clicking on the manage publications icon in the file explorer.
    * [WCM-1680] - No one can access "backoffice" & drive of new added site
    * [WCM-1682] - Safari4: Error popup when abort edit page wizard while selecting Form Generator page
    * [WCM-1699] - The Page Selector form is shown behind the Config form of Parameterized Content List Viewer in special case
    * [WCM-1705] - Error when try to edit page by wizard while showing page content in search result
    * [WCM-1713] - There's no initial values for new added repository in Site Administration
    * [WCM-1717] - WCM can not FastPublish when some sub-nodes of the site are not in checkouted state
    * [WCM-1722] - FCKEditor. Link to a navigation entry of the site does not show any entries.
    * [WCM-1735] - Draft content still display in edit mode
    * [WCM-1738] - Cannot edit content in PCV portlet
    * [WCM-1739] - Cannot save draft or fast publish when edit content by CLV
    * [WCM-1745] - Breadcrumb display wrong in PCV portlet when show PCV from PCLV
    * [WCM-1749] - Error with the position of search icon in User Selector form
    * [WCM-1753] - Error when put invalid value in Iterm per page field of PCLV portlet
    * [WCM-1754] - Unknown error when click icon to choose metadata when search document for SCV
    * [WCM-1756] - Lose border in form to create Web link
    * [WCM-1757] - Error when view Web Link in PCLV
    * [WCM-1759] - Can not set home path of exo:taxonomy action
    * [WCM-1760] - Error in displaying content of CLV
    * [WCM-1761] - New added content can not be shown in SCV in edit mode 
    * [WCM-1762] -  Document is not listed in Document folder of specific site after uploaded
    * [WCM-1766] - Little error in showing date time in Publication history form
    * [WCM-1767] - Can not search with both "Page" & "Document" conditions
    * [WCM-1768] - Broken UI in search form in SCV content selector in create page wizard
    * [WCM-1769] - Error when creating document using new node type created in Generator Portlet
    * [WCM-1770] - Can not view found document in SCV after search
    * [WCM-1772] - Can not edit js/css file
    * [WCM-1773] - There's no default config for pages in ACME site
    * [WCM-1774] - Little error in showing text in Content List Viewer management form
    * [WCM-1775] - Content of CLV disappears after deleted document/web content that was selected to view in that page
    * [WCM-1776] - Always show subscription1 in form to create new letter
    * [WCM-1777] - No result found when do advanced search in Sites Explorer
    * [WCM-1779] - The content of SCV was replaced by user without right
    * [WCM-1780] - IE7: Little UI error in Permission Settings form when add new content
    * [WCM-1782] - IE7: Error in displaying document in Category
    * [WCM-1783] - Content of selected category disappears after choose Help from portlet mode
    * [WCM-1785] - IE7: Error when showing Admin bar while showing Site Administration page
    * [WCM-1787] - IE7: Error when display node in Site Explorer with long name
    * [WCM-1816] - Add products to ACME page.

** Improvement
    * [WCM-1734] - Fix some bug for form generator

** Bug
    * [WCM-1865] - IE7: Manage publication form is shown invalidly
    * [WCM-1866] - IE7: Can not see button moderator in category form
    * [WCM-1867] - IE7: Some UI is error in category form
    * [WCM-1868] - FF: Search Web content : Position of mini calendar is wrong when is shown
    * [WCM-1869] - IE7 : shown wrong message when setting misc for Content
    * [WCM-1870] - IE7:No effect when edit CSS data
    * [WCM-1871] - IE7: Some UI error in Newsletter Manager form
    * [WCM-1872] - IE7: little error when show a menu
    * [WCM-1873] - Check all option does not affect (Newsletter Manager)
    * [WCM-1874] - Error when change status of waiting letter
    * [WCM-1875] - IE7: cannot change language
    * [WCM-1876] - IE7: edit banner: GUI error in edit mode.
    * [WCM-1877] - IE7: buttons in popup "Insert link to a site page" are difficult to click
    * [WCM-1878] - IE7: can not insert gadget in FCK editor
    * [WCM-1879] - Invalid error message when input special character to file name \/:*"?<>|
    * [WCM-1880] - Messge is not show when delete letter but does not choose any checkbox
    * [WCM-1881] - Message is incorrect when open, edit or convert as template letter but does not choose any checkbox
    * [WCM-1882] - Search result isn't displayed when search mode is Box search
    * [WCM-1883] - Unknown error when edit a default Script at Site Administrator
    * [WCM-1884] - Unknown error when add new letter into a blank category


Version webos-1.5.1

** Bug
    * [WEBOS-229] - IE: Error UI when add new tab in Web Explorer with all skin
    * [WEBOS-282] - Error UI in homepage when delete all Page(node) in Portal 

Version webos-1.5

** Bug
    * [WEBOS-1] - [WEBOS PRODUCT]: Error in displaying Sitemap Portlet
    * [WEBOS-2] - [WEBOS PRODUCT]: Error dispaly when using scroll bar 
    * [WEBOS-3] - WEBOS PRODUCT]: Fox + IE6: Error in displaying Manage page
    * [WEBOS-4] - [WEBOS PRODUCT]: I.E.6 - Error in displaying when create & edit page wizard
    * [WEBOS-5] - [WEBOS PRODUCT] - IE: Lose stylesheet in login form when portal current is vista skin
    * [WEBOS-6] - [WEBOS PRODUCT]: Lose stysheet when add new application and change skin
    * [WEBOS-7] - Lose stylesheet in homepage & Application portlet
    * [WEBOS-8] - I.E.6: Error in displaying Page Content in Vista & Mac skin when edit current portal
    * [WEBOS-9] - I.E: Error in displaying Permission Selector with skin Mac
    * [WEBOS-10] - I.E.6: Error in displaying when remove an application form dockbar
    * [WEBOS-12] - I.E.6:Error in display in Widget Containers Management with vista skin
    * [WEBOS-13] - I.E.6: Error in display when create new node with vista skin
    * [WEBOS-14] - I.E.6: Error in displaying scroll drop & drap with special case in Mac skin
    * [WEBOS-16] - Error in dispaying in Page Content when edit current portal with Vista & Mac skin
    * [WEBOS-17] - I.E.6: Error in display in Edit Permission with Vista skin
    * [WEBOS-18] - Can't display application from dockbar when change skin 
    * [WEBOS-19] - Can't display Icon name when Edit this node
    * [WEBOS-20] - IE7: Error in display when preview mode some portlet with skin Vista and Mac
    * [WEBOS-21] - I.E.6: Error in displaying Page Navigation in skin Vista
    * [WEBOS-23] - I.E: Lose application from dockbar 
    * [WEBOS-24] - Error when delete application from dockbar 
    * [WEBOS-25] - Can't action when Select permission in Application Reegistry portlet
    * [WEBOS-26] - Error display when create page wizard with Default & Mac skin
    * [WEBOS-27] - I.E.6: Error in displaying New Account portlet with Default & Mac skin
    * [WEBOS-28] - Error in displaying when edit category in Application registry portlet with Default & Mac
    * [WEBOS-29] - I.E: Error when remove application from dockbar with default skin
    * [WEBOS-30] - Error when add more new tab in Web Explorer portlet
    * [WEBOS-32] - Can't action Select Permission when Set Permission for Portal, Page, Portlet, Node, Category
    * [WEBOS-33] - Nothing happen when click on Edit category in Application registry portelt
    * [WEBOS-34] - Error with * for required fields when create page wizard with 3 skins
    * [WEBOS-35] - Error in displaying when create new node
    * [WEBOS-36] - I.E: Lose application from dockbar when create new page Navigation
    * [WEBOS-37] - [Unknow error ] when create new portal 
    * [WEBOS-38] - I.E: Error when close User workspace or change skin in Vista skin
    * [WEBOS-39] - I.E.6: Error when click check box Publish the page during a period of time only when create page wizard with Default & Mac skin
    * [WEBOS-40] - Error when click check box validate value
    * [WEBOS-65] - [In FF3 beta 5]: Error displaying in dockbar when click right to delete application with 3 skin
    * [WEBOS-66] - Error display when create category name in special case
    * [WEBOS-67] - Allways show message "No result found" when search a string is unavailable and after that create new page
    * [WEBOS-70] - IE6: Error in Add Appication form with Default skin when create group in special case
    * [WEBOS-71] - Still seeing some portlet when does not have access permission of portlet
    * [WEBOS-72] - Litte Error displaying in Select Permission form of Application registry portlet with Default skin
    * [WEBOS-73] - Litte Error displaying in Group Management form with Mac skin
    * [WEBOS-75] - IE6: Don't display Select Application with Default skin
    * [WEBOS-76] - Error displaying  when move cursor on Dockbar
    * [WEBOS-77] - IE: Error displaying when edit current portal in special case
    * [WEBOS-79] - Error some form when change language is French
    * [WEBOS-80] - Show exception when select continuous a application to add into dockbar
    * [WEBOS-81] - IE6: Error displaying when eidt current portal with Vista skin in special case
    * [WEBOS-82] - IE6: Error displaying when create/edit page wizard with Vista skin
    * [WEBOS-83] - IE6: Error displaying when select tab page config with all skins
    * [WEBOS-84] - Error displaying UI Portal with all skins
    * [WEBOS-85] - IE6: Error displaying in Widget container management in special case with Mac skin
    * [WEBOS-86] - IE: Error displaying in UI Container Option in special case with all skins
    * [WEBOS-90] - Error UI in IFrame portlet
    * [WEBOS-91] - IE6: Error display on dockbar when open control workspace
    * [WEBOS-93] - FF3: Still seeing tooltip of portlet althought it was removed from dockbar
    * [WEBOS-94] - Dockbar display under portlet
    * [WEBOS-95] - FF3: Can't add new Tab after it was deleted
    * [WEBOS-96] - IE6: Error when drag & drop tab page config in Edit current portal
    * [WEBOS-97] - IE7: Little error when right-click to remove application from dockbar with Default skin
    * [WEBOS-98] - Error display when create category name in application registry portlet in special case
    * [WEBOS-99] - Error displaying when view portlet in some case
    * [WEBOS-100] - Error when delete welcome widget
    * [WEBOS-101] - Horizontal scroll blink when mouse over it in Add Application form.
    * [WEBOS-102] - Bug JS - Error when view portlet
    * [WEBOS-103] - Nothing happen when click create page wizard
    * [WEBOS-105] - FF3: Error displaying when remove application from dockbar with Default skin
    * [WEBOS-106] - Throw exception when create/edit page wizard
    * [WEBOS-108] - Lose resource bundle in 'exo message' when user don't have permission to edit/view/delete this page
    * [WEBOS-109] - Nothing happen when click new node
    * [WEBOS-110] - Show exception when select Manage Pages
    * [WEBOS-111] - Error when edit page in Manage pages
    * [WEBOS-117] - Nothing happen when click addn new node
    * [WEBOS-118] - Show exception when click Manage Page
    * [WEBOS-119] - Can't keep intact state when change skin/language between some portlets
    * [WEBOS-120] - Show exception when add Dashboard portlet into Dockbar
    * [WEBOS-121] - IE6: Error in Edit current portal when resotre down window
    * [WEBOS-122] - Error when set permission for category in Application registry portlet
    * [WEBOS-123] - Lose style sheet in Default skin
    * [WEBOS-124] - Error UI in Calendar widget with Mac skin
    * [WEBOS-125] - IE6: Lose Style sheet on dockbar with all skin
    * [WEBOS-126] - IE6: NullPointerException when edit current portal
    * [WEBOS-127] - IE6: Error when change skin in Edit page & Navigation
    * [WEBOS-129] - IE6: Can't Sign In on dockbar
    * [WEBOS-131] - Error when click Page Navigations in the first time
    * [WEBOS-136] - Have trouble on dockbar when move cursor
    * [WEBOS-137] - IE6: Error UI when edit category with Default skin
    * [WEBOS-138] - IE6: Don't load images on dockbar in Edit Page & Navigation
    * [WEBOS-139] - Show exception when edit current portal
    * [WEBOS-140] - Lose style sheet in Homepage portlet
    * [WEBOS-141] - Duplicate tooltip when resize portlet 
    * [WEBOS-142] - Error when edit current portal 
    * [WEBOS-143] - Bug when resize portlet on UI Desktop Page
    * [WEBOS-144] - Don't show User workspace when log in by John
    * [WEBOS-145] - Can't remove application from dockbar when login by John
    * [WEBOS-146] - Error when login program in special case
    * [WEBOS-152] - Show duplicate membership type "*" in Permission Selector form
    * [WEBOS-160] - FF2: Little error in dockbar when apply to RTL in Default skin ( Bug JS)
    * [WEBOS-164] - IE6: Error displaying in Dockbar when click Abort button in create/edit page wizard
    * [WEBOS-165] - Have problem when click Page Navigation on dockbar in public mode
    * [WEBOS-166] - Little error when right click to remove application from dockbar in Default skin
    * [WEBOS-167] - Position of UIRightClick PopupMenu is not correct when covert to RTL in Vista skin
    * [WEBOS-168] - Little error in UI RightClick Popupmenu when apply to RTL in Mac skin
    * [WEBOS-169] - Have problem when move cursor in dockbar in Default skin
    * [WEBOS-170] - Error displaying in Page Navigation when apply to RTL in private mode
    * [WEBOS-171] - IE6: Little error displaying on dockbar with Vista skin
    * [WEBOS-186] - FF2: Little error displaying in Decoration Themes when apply to RTL in Default skin
    * [WEBOS-187] - Error displaying in New Account portlet when apply to RTL in Vista skin
    * [WEBOS-189] - IE: Error UI when edit current portlet with all skin
    * [WEBOS-190] - FF2: Error UI in Permission Setting tab when apply to RTL in Vista skin
    * [WEBOS-191] - Error UI in Icon tab when apply to RTL in Vista skin
    * [WEBOS-192] - Position of edit gadget is not correct with Default and Vista skin
    * [WEBOS-193] - Error UI in Application registry portlet with all skin
    * [WEBOS-194] - Bug JS: Error when resize area portlet wth Aracbic language
    * [WEBOS-195] - IE6: Show message when edit current portal in special case
    * [WEBOS-196] - IE: Can't drag & Drop Page Body in Edit current portal
    * [WEBOS-198] - Some problem UI in Page Navigation in Public mode
    * [WEBOS-203] - Error when click edit gadget
    * [WEBOS-204] - IE6: Little error displaying in Gadget on desktop page with all skin
    * [WEBOS-206] - IE6: Error UI in Icon tab with Default skin
    * [WEBOS-208] - Error when Restore Down window
    * [WEBOS-209] - Error when view portlet with maximize on Vista skin
    * [WEBOS-210] - IE: Error when preview portal with Mac and Vista skin
    * [WEBOS-211] - Error UI in WIndowPortletIcon when view all portlet on desktop page
    * [WEBOS-214] - Show message when select New Staff in Page Navigation with French language
    * [WEBOS-216] - Error UI in Add Application form in Default skin
    * [WEBOS-217] - Don't show two icon " Show/Hide Portelt and Gadget" on dockbar in Default skin when select platform
    * [WEBOS-218] - Error UI in Decoration Themes in Mac style
    * [WEBOS-219] - Little error UI in Sitemap portlet with Mac skin when change language to Arabic
    * [WEBOS-220] - IE7: Little error in popup message when change language to Arabic
    * [WEBOS-222] - IE6: Still action on dockbar in Edit Page & Navigation
    * [WEBOS-223] - Still keep first language after change to other language 
    * [WEBOS-224] - IE6: Lose Icon on dockbar in public mode
    * [WEBOS-226] - Don't show scroll when view portlet in the first time
    * [WEBOS-228] - Error displaying when preview portal have dashboard portlet with Arabic language 
    * [WEBOS-230] - Display of portlet is not correct when open control workspace in the first time
    * [WEBOS-231] - IE7: Don't select page(node) in Page Navigation on dockbar with Mac skin in Arabic language
    * [WEBOS-232] - IE: Error UI in Page Navigation in public mode when have sub-page with Vista skin
    * [WEBOS-233] - Error when edit gadget and click refresh
    * [WEBOS-234] - Can't do some action in Edit Page & Navigation
    * [WEBOS-263] - Don't show new gadget in dashboard portlet after add an application into dockbar
    * [WEBOS-264] - Error when edit mode in Gadget Wrapper Portlet
    * [WEBOS-266] - Error in User Workspace when click Exo Start when apply to RTL
    * [WEBOS-267] - Have different about display bewteen Gadget Wrapper Portlet and Dashboard portlet
    * [WEBOS-269] - Still click User Control Workspace when UI Add Application form appear
    * [WEBOS-270] - Error displaying when right click to quit or remove application on docbar with Vista skin
    * [WEBOS-271] - FF2: Error UI in Add Application form in Vista skin
    * [WEBOS-272] - IE7: Don't show Gadget Category in Dashboard portlet when click refresh
    * [WEBOS-273] - IE6: Little error with gadget width on desktop page with all skin
    * [WEBOS-274] - Don't view application on desktop page
    * [WEBOS-275] - IE: Don't show UIFormTabPane when click refresh
    * [WEBOS-276] - IE: Error UI in desktop page with all skin
    * [WEBOS-278] - IE: Error UI on dockbar when remove some application on dockbar
    * [WEBOS-280] - Have proplem when add a remote gadget on desktop page and change skin
    * [WEBOS-283] - Error UI in tab page config in Edit curernt portal with all skin

** Delivery Item
    * [WEBOS-185] - Release WebOS 1.5 RC1

** Improvement
    * [WEBOS-53] - In WebOS, should set min-width and min-heigth for portlet when user resize portlet  by using mouse
    * [WEBOS-60] - Should have scroll in desktop page when restore down the windown
    * [WEBOS-112] - Dispose markup on application quit
    * [WEBOS-113] - Allow to select language with normal user after login to access portal
    * [WEBOS-116] - Provide a way to specify the state of portlet when putted in the desktop page
    * [WEBOS-147] - Make the Gadgets Portlet available in the application registry by default
    * [WEBOS-148] - Should add a navigation icon in the dock

** New Feature
    * [WEBOS-115] - Add a SignOut link in the Dock to allow people to sign-out when they do not have access to Workspace or Logout Widget
    * [WEBOS-149] - Dock applications lazy loading

** Task
    * [WEBOS-104] - Splip Stylesheet from webosResource
    * [WEBOS-128] - [public mode] has some errors when validate HTML code
    * [WEBOS-153] - Configure WebOS to support Arabic and VNese language and RTL skin for WebOS
    * [WEBOS-159] - Add "quit" action on right click on the application icon in the dock
    * [WEBOS-199] - Change tooltip for all page on dockbar when change language to VNese
    * [WEBOS-221] - Create "Quit" Icon when right click on the application icon in the dock
    * [WEBOS-225] - Change Pointer icon from Move to Link Select in Vista skin of all portlet

** Sub-task
    * [WEBOS-41] - Unable to locate a login configuration
    * [WEBOS-150] - [DEV] Add Sign-out link on Dock bar
    * [WEBOS-151] - [TEST] Test for sign in webos
    * [WEBOS-154] - find the way to render a portlet can be able to load itself independently
    * [WEBOS-155] - re-factor the portlet html fragment
    * [WEBOS-156] - implement javascript to make the portlet to be loaded when invisible
    * [WEBOS-157] - [TEST] Make sure the change doesn't impact to the classic page
    * [WEBOS-172] - [Test] : Add quit action on right click on the application icon in the dock
    * [WEBOS-173] - [Test]: Don't load images on dockbar in Edit Page & Navi
    * [WEBOS-174] - [DEV] Add "quit" action on right click on the application icon in the dockbar
    * [WEBOS-175] - [DEV]: Don't load images on dockbar in Edit Page & navi
    * [WEBOS-176] - [DEV]: Error when login program in special case
    * [WEBOS-177] - [TEST]: Error when login program in special case
    * [WEBOS-179] - [DEV]: Have problem when move cursor in dockbar in Default skin
    * [WEBOS-180] - [TEST]: Have problem when move cursor in dockbar in Default skin
    * [WEBOS-181] - [DEV]: Should have scroll in desktop page when restore down the windown
    * [WEBOS-182] - [TEST]: Should have scroll in desktop page when restore down the windown
    * [WEBOS-183] - [DEV]: should set min-width and min-heigth for portlet when user resize portlet by using mouse
    * [WEBOS-184] - [TEST]:should set min-width and min-heigth for portlet when user resize portlet by using mouse


