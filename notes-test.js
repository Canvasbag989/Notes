(function(exports){
  function testNoteInstantiatesWithText() {
    var note = new Notes("I am a note");

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

    if (note.read() !== "Can you read me?") {
      throw new Error("I can not read you!");
    }
    else {
      console.log('Read method is working')
    }
  };

  testsNotesReadMethod();
