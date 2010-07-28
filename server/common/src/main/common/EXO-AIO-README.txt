****************************
eXo All In One Release Notes
****************************

Date: 
Version: 1.6.6


Thank you for downloading eXo All In One.
eXo All In One allows you to discover and test all the eXo Products in a single package.

Follow the procedure of installation and start eXo All In One now !


===============
I. MAIN CHANGES
===============



====================
II. PACKAGE CONTENTS
====================

    * eXoAllInOne-1.6.6-tomcat.zip 
    * eXoAllInOne-1.6.6-jbossear.zip
    * eXoAllInOne-1.6.6-chatserver.zip
    
    * EXO-AIO-README.txt (this file)
    * EXO-AIO-CHANGELOG.txt

=========================
III. STARTUP INSTRUCTIONS
=========================

    * Requirements
      
      +) CPU: 1.5GHz
      +) Memory : 1GB of RAM
      +) Disk : 150MB
      +) OS : Windows, Linux or MAC OS
      +) Java 5 or 6 (JAVA_HOME environment variable)
      +) Browser : Firefox 3+ or Internet Explorer 7+
      +) the eXo server will run on portal 8080, make sure this port is not currently in use

    * Download the chat server

      eXo All In One Chat service is a Jabber engine powered by Openfire.
      eXo will delegate the actual Jabber protocol communication to Openfire.

      Warning: this version of eXo All In One has only been tested with Openfire 3.4.5.
      Should you try to upgrade yourself, this would be at your own risks.

    * Configure openfire
    
      +) http://wiki.exoplatform.org/xwiki/bin/view/CS/Chat+Configuration

    * Start chat server

      +) On the Windows platform :

        Open a DOS prompt command, go to exo-openfire/bin and type the command:
        openfired.exe

      +) On Unix/Linux :

        Open a terminal, go to exo-openfire/bin and type the command:
        ./openfire start


    * Download eXo All In One (Tomcat or JBoss)
    
    * Configure the application (optional)
      
      +) Open the folder 'exo-conf' in your application server :
         
        It contains a sample configuration to use a MySQL database, verify this before starting:
         - the user/password to access your DB in database-configuration.xml
         - the name of the datasource in database-configuration.xml
           In jboss, use the datasource configuration file
         - the dialect in database, jcr and repository configuration files
         
      +) Use the externalized configuration :
      
        Parameter: -Dexo.user.conf=../exo-conf/mysql/
        Tomcat: Add this parameter in the eXo.sh/bat script, in the variable EXO_OPTS for example
        JBoss: Add this parameter to the startup command
        
      +) You can avoid using a parameter, check the wiki page for more details : 
      
        http://wiki.exoplatform.org/xwiki/bin/view/Kernel/Service+Configuration+for+Beginners#HPortalContainer
      
      +) You should see this in your startup log :
      
        Add configuration file:/path/to/exo-tomcat/exo-conf/portal/portal/configuration.xml
	        import file:/path/to/exo-tomcat/exo-conf/portal/portal/common-configuration.xml
	        import file:/path/to/exo-tomcat/exo-conf/portal/portal/logs-configuration.xml
	        import file:/path/to/exo-tomcat/exo-conf/portal/portal/database-configuration.xml
	        import file:/path/to/exo-tomcat/exo-conf/portal/portal/jcr-configuration.xml

    * Using the command line, go your AS bin directory and start the server:
   
      +) Windows :

        Tomcat:  eXo.bat run
        JBoss:   run.bat (with Bonita workflow engine, use eXo.bat)

      +) Linux / Mac OS :

        Tomcat:  eXo.sh run
        JBoss:   run.sh (with Bonita workflow engine, use eXo.sh)

    * Wait for the server to start. You should see something like this on the console

        INFO: Server startup in 153590 ms

    * eXo All In One is now ready to use. Point your browser to http://localhost:8080/portal/

======================
IV. DETAILS OF CHANGES
======================

The file EXO-AIO-CHANGELOG.txt contains the detailed changelog of all the products.

===============
V. KNOWN ISSUES
===============

If you meet a JS or a CSS error when you run the Tomcat package on Linux, please take a look at:

    * http://jira.exoplatform.org/browse/ALL-188
      Error: eXo is undefined
      Source File: http://localhost:8080/portal/public/classic/
      Line: 2369
      
The current workaround is to replace the file:
    * {tomcat-home}/lib/catalina.jar
by the file:
    * {tomcat-home}/patch/catalina-6.0.16-exopatched-webapp-load-order.jar

We modified the class HostConfig class of Tomcat 6.0.16 to sort the webapps by alphabetical order.
The java file is also available in {tomcat-home}/patch/HostConfig.java if you'd like to take a look (line 541),
or compile it yourself.

These errors appear when eXoResources is *not* deployed first. We named the other webapps so they *should* 
be deployed after, following the alphabetical order.
However, Tomcat doesn't ensure this order will be respected

    * See also: http://wiki.apache.org/tomcat/FAQ/Miscellaneous#Q27
    
======================
VI. BUILD INSTRUCTIONS
======================

Please refer to:
* http://svn.exoplatform.org/projects/allinone/branches/1.6.x/EXO-AIO-HOW-TO-BUILD.txt
* http://wiki.exoplatform.org/xwiki/bin/view/Main/Building+from+sources

==============
VII. RESOURCES
==============

     Corporate site      http://www.exoplatform.com
     Community JIRA      http://jira.exoplatform.org/browse/ALL
     Community site      http://www.exoplatform.org
     Developers wiki     http://wiki.exoplatform.org
     Forums              http://forum.exoplatform.com

