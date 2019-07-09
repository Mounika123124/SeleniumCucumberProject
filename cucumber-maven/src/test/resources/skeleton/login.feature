
Feature: login feature for demowebshop
@data
Scenario Outline: valid login scenario
Given url of webshop is "http://demowebshop.tricentis.com/login"
When user enters "<username>" as username
And user enters "<password>" as password
Then user is in webshop as <type>
Examples:
|username|password|type|
|askmail@email.com|abc123|vendor|
|askmail@ymail.com|abc123|Guest|
|askmail@gmail.com|abc1223|Admin|