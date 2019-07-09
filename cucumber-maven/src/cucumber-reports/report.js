$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/skeleton/login.feature");
formatter.feature({
  "name": "login feature for demowebshop",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "valid login scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@data"
    }
  ]
});
formatter.step({
  "name": "url of webshop is \"http://demowebshop.tricentis.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \"\u003cusername\u003e\" as username",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"\u003cpassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "name": "user is in webshop as \u003ctype\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "type"
      ]
    },
    {
      "cells": [
        "askmail@email.com",
        "abc123",
        "vendor"
      ]
    },
    {
      "cells": [
        "askmail@ymail.com",
        "abc123",
        "Guest"
      ]
    },
    {
      "cells": [
        "askmail@gmail.com",
        "abc1223",
        "Admin"
      ]
    }
  ]
});
formatter.scenario({
  "name": "valid login scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@data"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "url of webshop is \"http://demowebshop.tricentis.com/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "login.url_of_webshop_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"askmail@email.com\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "login.user_enters_as_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"abc123\" as password",
  "keyword": "And "
});
formatter.match({
  "location": "login.user_enters_as_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is in webshop as vendor",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_is_in_webshop_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "valid login scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@data"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "url of webshop is \"http://demowebshop.tricentis.com/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "login.url_of_webshop_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"askmail@ymail.com\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "login.user_enters_as_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"abc123\" as password",
  "keyword": "And "
});
formatter.match({
  "location": "login.user_enters_as_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is in webshop as Guest",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_is_in_webshop_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "valid login scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@data"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "url of webshop is \"http://demowebshop.tricentis.com/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "login.url_of_webshop_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"askmail@gmail.com\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "login.user_enters_as_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"abc1223\" as password",
  "keyword": "And "
});
formatter.match({
  "location": "login.user_enters_as_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is in webshop as Admin",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_is_in_webshop_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});