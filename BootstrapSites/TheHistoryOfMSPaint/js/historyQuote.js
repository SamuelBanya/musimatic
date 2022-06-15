quoteList = ["I dream of painting and then I paint my dream.", "I perhaps owe having become a painter to flowers.", "We don't make mistakes, just happy little accidents"]

artistList = [" ~ Vincent Van Gogh", " ~ Claude Monet", " ~ Bob Ross"]

citationList = ["https://www.brainyquote.com/quotes/vincent_van_gogh_132735?src=t_paint", "https://www.brainyquote.com/quotes/claude_monet_105209?src=t_painter", "https://twistedsifter.com/2012/11/ten-best-famous-quotes-about-art/"]

function getRandomNumber(min=0, max=quoteList.length){
	return Math.floor(Math.random() * (max - min) + min);
}

randomNumber = getRandomNumber();

console.log("randomNumber = " + randomNumber);

document.write("<h3><q cite=" + citationList[randomNumber] + ">" + quoteList[randomNumber] + "</q>" + artistList[randomNumber] + "</h3>" + "<p><strong>" + citationList[randomNumber] + "</strong><p>")