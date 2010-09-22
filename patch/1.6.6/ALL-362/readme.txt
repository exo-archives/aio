Summary

    * Status: Home button floating
    * CCP Issue: CCPID, Product Jira Issue: ALL-362
    * Complexity: N/A
    
The Proposal
Problem description

What is the problem to fix?

    * The Homepage button on Start Bar container moves to the left when the mouse moves over.

Fix description

How is the problem fixed?

    * Remove some attributes css and className (ExoStartButton).
    * Destroy the initialization Javascript related to Home button (onmouseover, onmousemove,click).

Patch information:

    * Final files to use should be attached to this page (Jira is for the dicussion)

Patches files:
ALL-362.patch

Tests to perform

Which test should have detect the issue?

   1. Open the user workspace
   2. Move the mouse over the home button

Observation: the button moves to the left.

Is a test missing in the TestCase file?
*

Added UnitTest?
*

Recommended Performance test?
*


Documentation changes

Where is the documentation for this feature?
*

Changes Needed:
*


Configuration changes

Is this bug changing the product configuration?
*

Describe configuration changes:
*

Previous configuration will continue to work?
*


Risks and impacts

Is there a risk applying this bug fix?
* No.

Can this bug fix have an impact on current client projects?
*

Is there a performance risk/cost?
* No.


Validation By PM & Support

PM Comment
*

Support Comment
*Validated by Support Team

QA Feedbacks

Performed Tests
*

