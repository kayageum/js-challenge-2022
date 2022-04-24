const quotes = [
  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
  },
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "Always remember that you are absolutely unique. Just like everyone else.",
    author: "Margaret Mead",
  },
  {
    quote:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "The best and most beautiful things in the world cannot be seen or even touched , they must be felt with the heart.",
    author: "Helen Keller",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    quote: "Whoever is happy will make others happy too.",
    author: "Anne Frank",
  },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "If life were predictable it would cease to be life and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "Life is a succession of lessons which must be lived to be understood.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth",
  },
  {
    quote:
      "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
    author: "Oscar Wilde",
  },
  {
    quote: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
  },
  {
    quote:
      "In this life we cannot do great things. We can only do small things with great love.",
    author: "Mother Teresa",
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein",
  },
  { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Live in the sunshine, swim the sea, drink the wild air.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "Go confidently in the direction of your dreams! Live the life you've imagined.",
    author: "Henry David Thoreau",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    quote: "May you live all the days of your life.",
    author: "Jonathan Swift",
  },
  {
    quote: "Life itself is the most wonderful fairy tale.",
    author: "Hans Christian Andersen",
  },
  {
    quote: "Do not let making a living prevent you from making a life.",
    author: "John Wooden",
  },
  {
    quote: "Life is ours to be spent, not to be saved.",
    author: "D. H. Lawrence",
  },
  {
    quote:
      "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
    author: "Marilyn Monroe",
  },
  { quote: "Life is a long lesson in humility.", author: "James M. Barrie" },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote: "Love the life you live. Live the life you love.",
    author: "Bob Marley",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote:
      "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    author: "Dr. Seuss",
  },
  {
    quote: "Life is made of ever so many partings welded together.",
    author: "Charles Dickens",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking.",
    author: "Steve Jobs",
  },
  {
    quote: "Life is trying things to see if they work.",
    author: "Ray Bradbury",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    quote: "The secret of success is to do the common thing uncommonly well.",
    author: "John D. Rockefeller Jr.",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  {
    quote:
      "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    author: "Winston S. Churchill",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "Don't be distracted by criticism. Remember — the only taste of success some people get is to take a bite out of you.",
    author: "Zig Ziglar",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    quote: "I never dreamed about success, I worked for it.",
    author: "Estee Lauder",
  },
  {
    quote:
      "Success seems to be connected with action. Successful people keep moving. They make mistakes but they don't quit.",
    author: "Conrad Hilton",
  },
  {
    quote:
      "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
    author: "Colin Powell",
  },
  {
    quote:
      "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.",
    author: "Barack Obama",
  },
];

function displayQoute() {
  const selectedQoute = quotes[Math.floor(Math.random() * quotes.length)];
  const quote = document.querySelector("#quote");
  const author = document.querySelector("#author");
  quote.innerText = selectedQoute.quote;
  author.innerText = `- by ${selectedQoute.author}`;
}

displayQoute();
