/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"use strict";
var Text = (function () {
    function Text(value, sourceSpan) {
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    Text.prototype.visit = function (visitor, context) { return visitor.visitText(this, context); };
    return Text;
}());
exports.Text = Text;
var Expansion = (function () {
    function Expansion(switchValue, type, cases, sourceSpan, switchValueSourceSpan) {
        this.switchValue = switchValue;
        this.type = type;
        this.cases = cases;
        this.sourceSpan = sourceSpan;
        this.switchValueSourceSpan = switchValueSourceSpan;
    }
    Expansion.prototype.visit = function (visitor, context) { return visitor.visitExpansion(this, context); };
    return Expansion;
}());
exports.Expansion = Expansion;
var ExpansionCase = (function () {
    function ExpansionCase(value, expression, sourceSpan, valueSourceSpan, expSourceSpan) {
        this.value = value;
        this.expression = expression;
        this.sourceSpan = sourceSpan;
        this.valueSourceSpan = valueSourceSpan;
        this.expSourceSpan = expSourceSpan;
    }
    ExpansionCase.prototype.visit = function (visitor, context) { return visitor.visitExpansionCase(this, context); };
    return ExpansionCase;
}());
exports.ExpansionCase = ExpansionCase;
var Attribute = (function () {
    function Attribute(name, value, sourceSpan) {
        this.name = name;
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    Attribute.prototype.visit = function (visitor, context) { return visitor.visitAttribute(this, context); };
    return Attribute;
}());
exports.Attribute = Attribute;
var Element = (function () {
    function Element(name, attrs, children, sourceSpan, startSourceSpan, endSourceSpan) {
        this.name = name;
        this.attrs = attrs;
        this.children = children;
        this.sourceSpan = sourceSpan;
        this.startSourceSpan = startSourceSpan;
        this.endSourceSpan = endSourceSpan;
    }
    Element.prototype.visit = function (visitor, context) { return visitor.visitElement(this, context); };
    return Element;
}());
exports.Element = Element;
var Comment = (function () {
    function Comment(value, sourceSpan) {
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    Comment.prototype.visit = function (visitor, context) { return visitor.visitComment(this, context); };
    return Comment;
}());
exports.Comment = Comment;
function visitAll(visitor, nodes, context) {
    if (context === void 0) { context = null; }
    var result = [];
    nodes.forEach(function (ast) {
        var astResult = ast.visit(visitor, context);
        if (astResult) {
            result.push(astResult);
        }
    });
    return result;
}
exports.visitAll = visitAll;
//# sourceMappingURL=ast.js.map