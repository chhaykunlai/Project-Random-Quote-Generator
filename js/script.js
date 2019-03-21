/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


// quotes object contains quote, source, citation, etc.
var quotes = [
  {
    quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
    source: 'Patrick McKenzie',
    citation: 'Twitter',
    year: '2016',
    tags: [
      'IT',
      'developer'
    ]
  },
  {
    quote: 'We lie best when we lie to ourselves.',
    source: 'Stephen King',
    citation: 'goodreads',
    year: '2015',
    tags: [
      'lie'
    ]
  },
  {
    quote: 'Don\'t cry because it\'s over, smile because it happened.',
    source: 'Dr. Seuss',
    citation: 'goodreads',
    year: '2016',
    tags: [
      'cry',
      'smile'
    ]
  },
  {
    quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
    source: 'Albert Einstein',
    citation: 'goodreads',
    year: '1978',
    tags: [
      'universe',
      'human',
      'infinite'
    ]
  },
  {
    quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    source: 'Mahatma Gandhi',
    citation: 'goodreads',
    year: '1996',
    tags: [
      'live',
      'die',
      'learn'
    ]
  },
  {
    quote: 'Without music, life would be a mistake.',
    source: 'Friedrich Nietzsche',
    citation: 'goodreads',
    year: '1956',
    tags: [
      'life',
      'music',
      'mistake'
    ]
  }
];

/**
 * Gets random quote by random number
 * 
 * @returns {Object}
 */
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  var quoteObject = quotes[randomNumber];

  return quoteObject;
}

/**
 * Prints quote to web page
 * 
 * @returns {void}
 */
function printQuote() {
  var quoteObject = getRandomQuote();
  var quote = (quoteObject && quoteObject.quote) ? quoteObject.quote : '';
  var source = (quoteObject && quoteObject.source) ? quoteObject.source : '';
  var citation = (quoteObject && quoteObject.citation) ? quoteObject.citation : '';
  var year = (quoteObject && quoteObject.year) ? quoteObject.year : '';
  var tags = (quoteObject && quoteObject.tags.length) ? quoteObject.tags.join(', ') : ''; 
  var html = [];

  html.push('<p class="quote">');
  html.push(quote);
  html.push('</p>');

  html.push('<p class="source">');
  html.push(source);
  html.push('<span class="citation">');
  html.push(citation);
  html.push('</span>');
  html.push('<span class="year">');
  html.push(year);
  html.push('</span>');
  html.push('</p>');

  html.push('<p class="tag">');
  html.push('Tag: ');
  html.push(tags);
  html.push('</p>');

  var stringOfQuoteProperties = html.join('');

  document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;

  // Updates color background
  document.body.style.backgroundColor = getRandomColor();
  
}

/**
 * Gets random color
 * Source from https://stackoverflow.com/questions/1484506/random-color-generator?page=1&tab=votes#tab-top
 * 
 * @returns {String}
 */
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  return color;
}

/**
 * Adds listener for load quote button
 * in order to display quote on webpage
 */
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/**
 * Quote will be random automatically
 * after 20 seconds and stop 2 minutes
 */
var timeInterval = setInterval(printQuote, 20000);
setTimeout(function () {
  clearInterval(timeInterval);
}, 120000);