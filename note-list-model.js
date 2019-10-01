(function(exports){
  function NotesList([note, note2]) {
    this.list = [note, note2 ];
  };

  exports.NotesList = NotesList;
}) (this);

NotesList.prototype.all = function(){
  this.list.forEach(item => console.log(item));
}