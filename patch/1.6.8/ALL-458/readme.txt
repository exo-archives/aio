Summary

    * Status: Lose Resource bundle in Collaboration page when show it in Page Create Wizard form
    * CCP Issue: N/A, Product Jira Issue: ALL-458.
    * Complexity: trivial

The Proposal
Problem description

What is the problem to fix?
    * No resource bundle in Collaboration page in Create Page Wizard.

Fix description

How is the problem fixed?
In web/portal/src/main/webapp/WEB-INF/conf/portal/group/platform/users/navigation.xml file, the key platform.users.collaboration is used but in users_*.xml files (in web/portal/src/main/webapp/WEB-INF/classes/locale/navigation/group/platform folder), this key isn't defined.
This key should be added to these files, however to avoid repeat 'collaboration' key which existed in these files, new label should be added.


Patch file: ALL-458.patch

Tests to perform

Reproduction test
    * Select Add new page wizard
    * Choose group:platform/user's navi
    * Select Collaboration page
      => Lose Resource bundle. See attach file

Tests performed at DevLevel
* 

Tests performed at QA/Support Level
*

Documentation changes

Documentation changes:
* No

Configuration changes

Configuration changes:
* No

Will previous configuration continue to work?
* Yes.

Risks and impacts

Can this bug fix have any side effects on current client projects?
* Function or ClassName change: none

Is there a performance risk/cost?
* No

Validation (PM/Support/QA)

PM Comment
* PM review: patch approved

Support Comment
* Support review: patch validated

QA Feedbacks
*
