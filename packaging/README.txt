Packaging helper for All In One:

* This pom is here to ease the "exobuild --product=allinone --version=2.5.x --deploy" command from a command on which the compilation has not been performed.
* The goal is to pre-fetch the binaries from maven, using the maven engine
* This pom has been partially generated from exobuild module.js files

This is a work in progress waiting for a 100% maven packaging


See ALL-48 for more informations:

DESCRIPTION:
    * Create a packaging/ directory which contain all needed maven dependency declaration
EXPECTED:
    * exobuild --product=allinone --version=2.5.x --deploy --workflow=jbpm with an empty maven repository does not fail
    * This means no binaries from local build have been used
