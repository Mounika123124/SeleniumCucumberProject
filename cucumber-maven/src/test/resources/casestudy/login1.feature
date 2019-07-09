Feature: login feature for testmeapp
Scenario Outline: valid login scenario
Given url "http://10.232.237.143:443/TestMeApp/login.htm"
When person types "<username>" as username
And person types "<password>" as password
Then homepage is displayed

Examples:
|username|password|
|Lalitha|password123|
