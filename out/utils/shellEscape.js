// Generated by IcedCoffeeScript 1.3.3g
(function() {

  module.exports = function(arg) {
    return ('' + arg).replace(/(?=[^a-zA-Z0-9_.\/\-\x7F-\xFF\n])/gm, '\\').replace(/\n/g, "'\n'").replace(/^$/, "''");
  };

}).call(this);