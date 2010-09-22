Summary

    * Status: Apply the patch CS-4197
    * CCP Issue: N/A, Product Jira Issue: ALL-412.
    * Complexity: N/A

The Proposal
Problem description

What is the problem to fix?

    * Up to now, we use a gmail account as default account in the mail service. Its configuration is placed in cs-plugins-configuration.xml files (CS, AIO). However, this way is inconvenient because we don't want users to use our account in their products.
      CS-4197 fixed in CS's cs-plugins-configuration.xml. AIO overwrites that file, so we need to fix also the latter file.

Fix description

How is the problem fixed?

    * Make two properties, account and password, in cs-plugins-configuration.xml file empty. Users must add their accounts before using the mail service.

Patch information:
ALL-412.patch

Tests to perform

Reproduction test

   1. Login as root
   2. Go to Groups|Agenda
   3. Add new event
   4. Click on More details button (or edit this event)
   5. Go to Reminders tab and select Remind by email
   6. Click "Add more" to add destination email address; then click Save, Save and Send on pop-up window
   7. We receive an email from exoservice@gmail.com

Tests performed at DevLevel
*

Tests performed at QA/Support Level
*


Documentation changes

Documentation changes:

    * Need to update document How to configure mail service to reflect the need to update the reminder job configuration.

Configuration changes

Configuration changes:

    * Two properties: account, password in cs-plugins-configuration.xml file

Will previous configuration continue to work?

    * YES

Risks and impacts

Can this bug fix have any side effects on current client projects?

    * Mail service could not run until the above configuration is added by user.

Is there a performance risk/cost?

    * No

Validation (PM/Support/QA)

PM Comment

    * PM review: patch validated.

Support Comment

    * Support review : validated

in ALL-412-20100810.patch file , the AddNamespacesPlugin configuration is changed due to text formatting. It is better if we keep just the mail configuration change in the proposed patch file.

QA Feedbacks
*

