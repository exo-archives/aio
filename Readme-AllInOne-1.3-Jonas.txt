1- to build the AllInOne product on jonas, use this command :
exobuild --product=allinone --version=1.3 --enable-workflow=jbpm --build --deploy=jonas


2- modify the war file : %jonas_home%/apps/autoload/exoplatform.ear/wsrp.war
 i- delete the Class-Path variable in the file MANIFEST.MF
 ii- modify the files web.xml,web-wsrp1.xml and web-wsrp2.xml and replace "http://localhost:8080/" (Tomcat HTTP address) by "http://localhost:9000/" (Jonas HTTP address )

3- Replace the file %jonas_home%/lib/endorsed/xalan-j2-2.6.0.jar with xalan-2.7.0.jar (or higher version)
4- replace %jonas_home%/lib/commons/jonas/axis/axis.jar  with axis-1.4-0231.jar included in %jonas_home%/lib/apps/ .
5- add the file %jonas_home%/lib/apps/mail-1.4.1.jar into %jonas_home%/lib/commons/j2ee/ folder.
6- Add servlet-api-2.5.jar into %jonas_home%/lib/endorsed folder.
7- Create a folder under %jonas_home%/jonas-conf and rename it to "gadgets".
8- copy the file %jonas_home%/bin/nt/key.txt into %jonas_home%/jonas-conf/gadgets.
