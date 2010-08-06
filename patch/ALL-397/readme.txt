Summary

    * Status: HomePagePortlet CSS exists in csresources.war
    * CCP Issue: CCP-471, Product Jira Issue : ALL-397
    * Complexity: N/A

The Proposal
Problem description

What is the problem to fix?
When disabling CS module by removing all its wars/jars, the HomePage portlet is no more shown.
Fix description

How is the problem fixed?
Make a new folder WEB-INF/conf/script/groovy in web/resources/src/main/webapp
Copy SkinConfigScript.groovy file in csRessources.war to that folder

Patch information:

    * Final files to use should be attached to this page (Jira is for the dicussion)

Patches files:
There are currently no attachments on this page.
Tests to perform

Tests performed at DevLevel?
*

Tests performed at QA/Support Level?
*
Documentation changes

Documentation Changes:
*
Configuration changes

Configuration changes:
*

Previous configuration will continue to work?
*
Risks and impacts

Is this bug fix can have an impact on current client projects?

    * Function or ClassName change?

Is there a performance risk/cost?
*
Validation (PM/Support/QA)

PM Comment
*

Support Comment
*

QA Feedbacks
*

