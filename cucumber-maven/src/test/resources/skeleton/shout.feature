Feature: shout Feature
@tag1
Scenario: saun and lucia are within range
Given saun is 20 meters away from lucia
When saun shouts "free coffee"
Then lucia listens to the message
@tag2
Scenario: saun and lucia are notin range
Given saun is 1000 meters away from lucia
When saun shouts "free coffee"
Then lucia cannot listen to the message
