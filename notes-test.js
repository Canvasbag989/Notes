(function(exports){
  function testNoteInstantiatesWithText() {
    var note = new Notes("I am a note");

    // condition.isTrue(note.text === "I am a note")

    if (note.text !== "I am a note") {
      throw new Error("Test has failed");
    }
    else {
      console.log("Well done.")
    }
  };

  testNoteInstantiatesWithText();
}) (this);


(function(exports){
  function testsNotesReadMethod() {
    var note = new Notes("Can you read me?");

    // condition.isTrue(note.read() === "Can you read me?");

    if (note.read() !== "Can you read me?") {
      throw new Error("I can not read you!");
    }
    else {
      console.log('Read method is working')
    }
  };

  testsNotesReadMethod();
}) (this);

(function(exports){
  function testNoteListInstantiatesWithArray() {
    var noteList = new NotesList([]);

    if (noteList.list instanceof Array === false) {
      throw new Error("There is no array")
    }
    else {
      console.log("It has an array")
    }
  };
  testNoteListInstantiatesWithArray();
}) (this);

(function(exports){
  function testArrayReturnsNotes() {
    var note1 = new Notes("Shopping list")
    var note2 = new Notes("Todo list")
    var noteArray = new NotesList([note1, note2])
    if (console.log(noteArray.all()) !== note1, note2 ) {
    throw new Error("No notes stored") 
    }
    else {
      console.log("Notes are stored")
    }
  };
  testArrayReturnsNotes();
}) (this);
