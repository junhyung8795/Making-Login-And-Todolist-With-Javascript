const quotes = [
    {
        quote:"You will face many defeats in life, but never let you be defeated",
        author:"MAYA ANGELOU"
    },
    {
        quote:"The purpose of our lives is to be happy",
        author:"DALAI LAMA"
    },
    {
        quote:"If you want to live a happy life, tie it to a goal, not to people or things.",
        author:"ALBERT EINSTEIN"
    },
    {
        quote:"Never let the fear of striking out keep you from playing the game.",
        author:"BABE RUTH"
    },
    {
        quote: "Money and success don’t change people; they merely amplify what is already there.",
        author:"WILL SMITH"
    },
    {
        quote:"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
        author:"STEVE JOBS"
    },
    {
        quote:"Not how long, but how well you have lived is the main thing." ,
        author:"SENECA"
    },
    {
        quote:"If life were predictable it would cease to be life, and be without flavor.",
        author:"ELEANOR ROOSEVELT"
    },
    {
        quote:"The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.",
        author:"HENRY FORD"
    },
    {
        quote:"In order to write about life first you must live it.",
        author:"ERNEST HEMINGWAY"
    }

];

const grabQuotes=document.querySelector("#quote span:first-child");
const grabAuthor=document.querySelector("#quote span:nth-child(2)");

const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];

grabQuotes.innerText=todaysQuote.quote;
grabAuthor.innerText=todaysQuote.author;