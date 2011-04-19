Summary

    * Status: Add page wizards: Some labels are not translated in French
    * CCP Issue: CCP-720, Product Jira Issue: ALL-505.
    * Complexity: N/A

The Proposal
Problem description

What is the problem to fix?
In AIO 1.6.8: 
Go to Site Editor -> Add Page Wizard
In the second step of page creation, some labels of Select a Page Layout Template are not translated.

Fix description

How is the problem fixed?
* In PageConfigOptions.groovy, change the hard-coded texts of SelectItemCategory by the keys

Patch file: ALL-505.patch

Tests to perform

Reproduction test
* cf. above

Tests performed at DevLevel
* cf. above

Tests performed at QA/Support Level
*
Documentation changes

Documentation changes:
* No

Configuration changes

Configuration changes:
* No

Will previous configuration continue to work?
* Yes

Risks and impacts

Can this bug fix have any side effects on current client projects?
* Function or ClassName change: No

Is there a performance risk/cost?
* No

Validation (PM/Support/QA)

PM Comment
* Patch approved

Support Comment
* Patch validated

QA Feedbacks
*
