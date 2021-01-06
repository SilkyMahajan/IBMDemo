$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/feature/OlaCorp.feature");
formatter.feature({
  "line": 1,
  "name": "Validate fields in OLA Corporate Application",
  "description": "",
  "id": "validate-fields-in-ola-corporate-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Enter value in email",
  "description": "",
  "id": "validate-fields-in-ola-corporate-application;enter-value-in-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@email"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User Enter value in email Text box \"\u003cEmail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Result will display \"\u003cResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "validate-fields-in-ola-corporate-application;enter-value-in-email;",
  "rows": [
    {
      "cells": [
        "Email",
        "Result"
      ],
      "line": 21,
      "id": "validate-fields-in-ola-corporate-application;enter-value-in-email;;1"
    },
    {
      "cells": [
        "Validemailaddress@gmail.com",
        "email address accepts Alphanumeric Char"
      ],
      "line": 22,
      "id": "validate-fields-in-ola-corporate-application;enter-value-in-email;;2"
    },
    {
      "cells": [
        "Validemailaddress_12@gmail.com",
        "email address accepts Alphanumeric and special char of 30 digit"
      ],
      "line": 23,
      "id": "validate-fields-in-ola-corporate-application;enter-value-in-email;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6163725400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "open the browser and the navigate to the OLACorp page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on OlaCorp page",
  "keyword": "Given "
});
formatter.match({
  "location": "OlaCorpStepDefination.user_is_on_OlaCorp_page()"
});
formatter.result({
  "duration": 9217851600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Enter value in email",
  "description": "",
  "id": "validate-fields-in-ola-corporate-application;enter-value-in-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@email"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User Enter value in email Text box \"Validemailaddress@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Result will display \"email address accepts Alphanumeric Char\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Validemailaddress@gmail.com",
      "offset": 36
    }
  ],
  "location": "OlaCorpStepDefination.user_Enter_value_in_email_Text_box(String)"
});
formatter.result({
  "duration": 508598500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email address accepts Alphanumeric Char",
      "offset": 21
    }
  ],
  "location": "OlaCorpStepDefination.result_will_display(String)"
});
formatter.result({
  "duration": 159600,
  "status": "passed"
});
formatter.before({
  "duration": 4339772000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "open the browser and the navigate to the OLACorp page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on OlaCorp page",
  "keyword": "Given "
});
formatter.match({
  "location": "OlaCorpStepDefination.user_is_on_OlaCorp_page()"
});
formatter.result({
  "duration": 9482122400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Enter value in email",
  "description": "",
  "id": "validate-fields-in-ola-corporate-application;enter-value-in-email;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@email"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User Enter value in email Text box \"Validemailaddress_12@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Result will display \"email address accepts Alphanumeric and special char of 30 digit\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Validemailaddress_12@gmail.com",
      "offset": 36
    }
  ],
  "location": "OlaCorpStepDefination.user_Enter_value_in_email_Text_box(String)"
});
formatter.result({
  "duration": 554495000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email address accepts Alphanumeric and special char of 30 digit",
      "offset": 21
    }
  ],
  "location": "OlaCorpStepDefination.result_will_display(String)"
});
formatter.result({
  "duration": 89600,
  "status": "passed"
});
});