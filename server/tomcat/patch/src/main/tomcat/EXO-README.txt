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


