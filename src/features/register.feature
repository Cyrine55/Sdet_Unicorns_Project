Feature: Register functionnality
Je veux assurer la création du compte

Scenario: Verify registration 
Given  launch the application
When Click on My account menu 
And Enter username "Cyrine"
And Enter emailAdress "test@test1.com"
And Enter a strong password "Test123"
When Click on register 
Then un message descriptif affiché avec "Log out" link


  