call exoenv
call mvn dependency:tree
call exobuild --product=allinone --version=2.5.x --deploy --enable-workflow=jbpm 
pause
