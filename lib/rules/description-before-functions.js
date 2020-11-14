/**
 * @fileoverview Enforce using comment box before functions
 * @author Lakshya Khera
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
const { verifyComment } = require("../helpers/verifyComment");

module.exports = {
  meta: {
    docs: {
      description: "Enforce using comment box before functions",
      category: "Fill me in",
      recommended: false,
    },
    fixable: "code", // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create: function (context) {
    // variables should be defined here

    const COMMENT_BOX = `/**
    * @description
    * 
    * @params
    * 
    * @returns
    */
    `;
    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // give me methods
      FunctionDeclaration: function (node) {
        let code = context.getSourceCode();

        let leadingComments = code.getCommentsBefore(node);
        if (leadingComments.length == 0) {
          context.report({
            node,
            message: "Add a comment box to describe about the method",
            fix: function (fixer) {
              const sourceCode = context.getSourceCode();
              let scope = node.parent;
              let fixedCode = COMMENT_BOX + sourceCode.getText(node);
              return fixer.replaceText(scope, fixedCode);
            },
          });
        } else if (
          !verifyComment(leadingComments[leadingComments.length - 1].value)
        ) {
          context.report({
            node,
            message: "Add a proper comment fields to describe about the method",
          });
        }
      },
    };
  },
};
