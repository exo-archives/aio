Summary

    * Status: Encoding error of accented characters in Jboss
    * CCP Issue: N/A, Product Jira Issue: ALL-449.
    * Complexity: low

The Proposal
Problem description

What is the problem to fix?

    * Encoding error of accented characters in Jboss server.

Fix description

How is the problem fixed?

    * Add URIEncoding="UTF-8" in Connector.

Patch information:
Patch files: ALL-449.patch

Tests to perform

Reproduction test
These cases are reproduced in AIO-1.6.7-snapshot (rev 62667).

    * Case 1: WCM-2688
         1. Go to Site Administration.
         2. Go to Ontologies then Manage Taxonomy Trees.
         3. Edit the acme site to add new taxonomy that contains accented character like "prévention".
         4. Go to the News page in the acme site,and click on the category just created. An error page (and also in server log).

            exception

            	javax.servlet.ServletException: java.lang.StringIndexOutOfBoundsException: String index out of range: -1
            		org.exoplatform.portal.application.PortalController.service(PortalController.java:99)
            		javax.servlet.http.HttpServlet.service(HttpServlet.java:803)
            		org.exoplatform.services.wcm.metadata.web.PageMetadataRequestFilter.doFilter(PageMetadataRequestFilter.java:89)
            		org.exoplatform.frameworks.jcr.web.ThreadLocalSessionProviderInitializedFilter.doFilter(ThreadLocalSessionProviderInitializedFilter.java:112)
            		org.exoplatform.services.security.web.SetCurrentIdentityFilter.doFilter(SetCurrentIdentityFilter.java:92)
            		org.exoplatform.frameworks.jcr.web.PortalContainerInitializedFilter.doFilter(PortalContainerInitializedFilter.java:83)
            		org.jboss.web.tomcat.filters.ReplyHeaderFilter.doFilter(ReplyHeaderFilter.java:96)

            	root cause

            	java.lang.StringIndexOutOfBoundsException: String index out of range: -1
            		java.lang.String.substring(String.java:1937)
            		org.exoplatform.portal.application.PortalRequestContext.<init>(PortalRequestContext.java:106)
            		org.exoplatform.portal.application.PortalRequestHandler.execute(PortalRequestHandler.java:76)
            		org.exoplatform.web.WebAppController.service(WebAppController.java:124)
            		org.exoplatform.portal.application.PortalController.service(PortalController.java:97)

    * Case 2: WCM-2816, IE7 should be used to reproduce the problem:
         1. In File Explorer, choose acme drive then add folder and sub-folders with names containing characters like the "é"
         2. In FO, create a page, add a CLV to it.
         3. Edit the CLV. Browse to select content. Select the previously added directory.
                o A pop-up of "Unknown error" appears when clicking on that directory => Can't select it
                o No exception in server log.

    * Case 3: WCM-2861 using IE7; ECM-5545
         1. In BO, choose sites content->Acme->Documents
         2. Add a folder "testé"
         3. Open this folder to upload an image
                o WARN pop-up message: "This element was deleted or changed. Please click to Refresh button!"
                o No exception

    * Case 4: WCM-2861
         1. Create a new drive "testéDrive" with home path shared for example. Add all permission to it
         2. Create a new content (Free Layout webcontent)
         3. Click on WCMInsertContent
         4. In the tree explorer select the "testéDrive"
            Can't expand testéDrive tree

            	
            	ERROR [DriverConnector] Error when perform getFoldersAndFiles: 
            java.lang.NullPointerException
            	at org.exoplatform.wcm.connector.fckeditor.DriverConnector.getFoldersAndFiles(DriverConnector.java:198)
            	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
            	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)
            	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)
            	at java.lang.reflect.Method.invoke(Method.java:592)
            	at org.exoplatform.services.rest.ResourceDispatcher.dispatch(ResourceDispatcher.java:228)
            	at org.exoplatform.services.rest.servlet.RestServlet.service(RestServlet.java:83)
            	at javax.servlet.http.HttpServlet.service(HttpServlet.java:803)

Tests performed at DevLevel

    * Cf. above

Tests performed at QA/Support Level
*

Documentation changes

Documentation changes:

    * No

Configuration changes

Configuration changes:

    * No.

Will previous configuration continue to work?

    * Yes.

Risks and impacts

Can this bug fix have any side effects on current client projects?

    * Function or ClassName change: none.

Is there a performance risk/cost?

    * No.

Validation (PM/Support/QA)

PM Comment
*

Support Comment

    * 16-12-2010 : Patch review : validated

QA Feedbacks
*

