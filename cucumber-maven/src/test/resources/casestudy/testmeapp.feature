Feature: register feature for testmeapp
Scenario: valid register scenario
Given url of testmeapp is "http://10.232.237.143:443/TestMeApp/RegisterUser.htm"
When user enters "mouni" as username
And user enters "mounika" as firstname
And user enters "abc" as lastname
And user enters "pass123" as password
And user enters "pass123" as confirmpassword
And user clicks "Female" as gender
And user enters "khdgagf" as email
And user enters "5647864646" as mobilenumber
And user enters "06/02/1998" as DOB
And user enters "jhkdgshjj" as Adresss
And user selects "What is your Birth Place?"
And user enters "jhjhjhgbdhfb" as answer
And user clicks "Register"
Then user registered successfully