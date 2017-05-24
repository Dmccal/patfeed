function checkIt() {
  // Initialize scores
  var monkey = 0;
  var zebra = 0;
  var elephant = 0;
  var tiger = 0;
  var giraffe = 0;
  var bear = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'monkey') {
        monkey++;
      }
      else if (e.value == 'zebra') {
        zebra++;
      }
      else if (e.value == 'elephant') {
        elephant++;
      }
      else if(e.value == 'tiger') {
        tiger++;
      }
      else if(e.value == 'giraffe'){
        giraffe++;
      }
      else if(e.value == 'bear'){
        bear++;
      }
    }

  }



  // Determine result
  var counts = "monkey: " + monkey + ", " +
               "zebra: " + zebra  + ", " +
               "elephant: " + elephant + ", " +
               "tiger: " + tiger + ", " +
               "giraffe: " + giraffe + ", " +
               "bear: " + bear + ", ";

  // What is the highest value?
  var max = Math.max(monkey, zebra, elephant, tiger, giraffe, bear);

  // Form a message
  var message;

  if (max == monkey) {
    title = "We can tell you what kind of Animal you would be"
    message = "Looks like you would be hanging from trees if you were animal you would be a Monkey!";
  }
  else if (max == zebra) {
    title = "We can tell you what kind of Animal you would be"
    message = "You would definately have stripes but are you white with black stripes or black with white stripes? You're a Zebra .";
  }
  else if (max == elephant) {
    title = "We can tell you what kind of Animal you would be"
    message = "Looks like you would be an Elephant!";
  }
  else if (max == tiger) {
    title = "We can tell you what kind of Animal you would be"
    message = "You would be pretty scary, You're a Tiger!";
  }
  else if (max == giraffe) {
    title = "We can tell you what kind of Animal you would be"
    message = "You must have a really long neck. You're a Giraffe!";
  }
  else if(max == bear) {
    title = "We can tell you what kind of Animal you would be"
    message ="looks like you're a bear!"
  }

  // Display result
  // document.getElementById('result-text').innerHTML = counts;
   document.getElementById('result-text').innerHTML = message;
   document.getElementById('title-text').innerHTML = title;
   document.getElementById('text-text').innerHTML = text;
}
