(function(exports) {
  function Notes(text) {
    this.text = text;
  };

     exports.Notes = Notes;
   }) (this);

Notes.prototype.read = function() {
  return this.text
}
