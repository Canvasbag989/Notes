(function(exports) {
  function Notes(text) {
    this.text = text;
  };

<<<<<<< HEAD
     exports.Notes = Notes;
   }) (this);

Notes.prototype.read = function() {
  return this.text
=======
  exports.Notes = Notes;
}) (this);

Notes.prototype.read = function () {
  return this.text;
>>>>>>> 6118edbf4f051064bafc1fc08d3e4655c939efd8
}
