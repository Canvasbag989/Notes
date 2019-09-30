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
