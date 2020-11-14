/**
 * @fileoverview Enforce using comment box before functions
 * @author Lakshya Khera
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/description-before-functions"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("description-before-functions", rule, {
  valid: [
    `/**
      *@description: 
      *@params
      *@returns
      */
      function test(props) { return props;}`,
    `/**
      * @description: 
      * @params
      * @returns
      */
      function test(props) { return props;}`,
    `/**
      *@description: 
      *@params
      * @returns
      */
      function test(props) { return props;}`,

    `/**
        *   @description: 
      *@params
                *@returns
      */
        function test(props) { return props;}`,

    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "function test(props) { return props; }",
      errors: [
        {
          message: "Add a comment box to describe about the method",
          type: "FunctionDeclaration",
        },
      ],
    },
    {
      code: `/**
      *@description: 
      *@params
      */
    function test(props) { return props;}`,
      errors: [
        {
          message: "Add a proper comment fields to describe about the method",
          type: "FunctionDeclaration",
        },
      ],
    },
    {
      code: `// test comment
        function test(props) { return props;}`,
      errors: [
        {
          message: "Add a proper comment fields to describe about the method",
          type: "FunctionDeclaration",
        },
      ],
    },
  ],
});
