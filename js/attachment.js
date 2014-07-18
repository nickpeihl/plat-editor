define([
  "dojo/_base/declare",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/attachment.html"
], function(declare, _WidgetBase, _TemplatedMixin, template) {
  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,
    options: {
      imgUrl: null,
      fileName: null
    },

    postCreate: function(){
      var domNode = this.domNode;
      this.inherited(arguments);
    },
  });
});
