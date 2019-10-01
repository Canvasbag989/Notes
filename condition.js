var condition = {
  isTrue: function(functionToTest) {
    if (!functionToTest) {
      throw new Error('Test has failed '+functionToTest+' is not working');
    }
    else console.log(functionToTest + ' is working')
  }
};
