class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            author: '',
            color: ''
        };

        this.newQuote = this.newQuote.bind(this);
        this.postToTumblr = this.postToTumblr.bind(this);
    }

    componentDidMount() {
        this.newQuote();
    }

    newQuote() {
        const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

        const quotes = [
            ["The Way Get Started Is To Quit Talking And Begin Doing.", "Walt Disney"],
            ["The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.", "Winston Churchill"],
            ["Don\’t Let Yesterday Take Up Too Much Of Today.", "Will Rogers"],
            ["You Learn More From Failure Than From Success. Don\’t Let It Stop You. Failure Builds Character.", "Unknown"],
            ["It\’s Not Whether You Get Knocked Down\, It’s Whether You Get Up.", "Vince Lombardi"],
            ["If You Are Working On Something That You Really Care About\, You Don’t Have To Be Pushed. The Vision Pulls You.", "Steve Jobs"],
            ["People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.", "Rob Siltanen"],
            ["Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.", "Og Mandino"],
            ["Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That\’s The Classic Entrepreneur.", "Mohnish Pabrai"],
            ["We May Encounter Many Defeats But We Must Not Be Defeated.", "Maya Angelou"],
            ["Knowing Is Not Enough\; We Must Apply. Wishing Is Not Enough\; We Must Do.", "Johann Wolfgang Von Goethe"],
            ["We Generate Fears While We Sit. We Overcome Them By Action.", "Dr. Henry Link"],
            ["Whether You Think You Can Or Think You Can\’t, You\’re Right.", "Henry Ford"],
            ["Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing.", "Helen Keller"],
            ["The Man Who Has Confidence In Himself Gains The Confidence Of Others.", "Hasidic Proverb"],
            ["The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.", "Franklin D. Roosevelt"],
            ["Creativity Is Intelligence Having Fun.", "Albert Einstein"],
            ["What You Lack In Talent Can Be Made Up With Desire\, Hustle And Giving 110% All The Time.", "Don Zimmer"],
            ["Do What You Can With All You Have\, Wherever You Are.", "Theodore Roosevelt"],
            ["You Are Never Too Old To Set Another Goal Or To Dream A New Dream.", "C.S. Lewis"],
            ["To See What Is Right And Not Do It Is A Lack Of Courage.", "Confucius"],
            ["For Every Reason It\’s Not Possible, There Are Hundreds Of People Who Have Faced The Same Circumstances And Succeeded.", "Jack Canfield"],
            ["Things Work Out Best For Those Who Make The Best Of How Things Work Out.", "John Wooden"],
            ["A Room Without Books Is Like A Body Without A Soul.", "Marcus Tullius Cicero"],
            ["I Think Goals Should Never Be Easy\, They Should Force You To Work\, Even If They Are Uncomfortable At The Time.", "Michael Phelps"],
            ["One Of The Lessons That I Grew Up With Was To Always Stay True To Yourself And Never Let What Somebody Else Says Distract You From Your Goals.", "Michelle Obama"],
            ["Today\’s Accomplishments Were Yesterday\’s Impossibilities.", "Robert H. Schuller"],
            ["The Only Way To Do Great Work Is To Love What You Do. If You Haven\’t Found It Yet\, Keep Looking. Don\’t Settle.", "Steve Jobs"],
            ["You Don\’t Have To Be Great To Start\, But You Have To Start To Be Great.", "Zig Ziglar"]];


        var randomQuote = Math.floor(Math.random() * quotes.length);
        var randomColor = Math.floor(Math.random() * colors.length);

        this.setState({
            quote: quotes[randomQuote][0],
            author: quotes[randomQuote][1],
            color: colors[randomColor]
        });


        document.body.style.backgroundColor = colors[randomColor];
    }



    postToTumblr() {
        /*
          $('#tumblr-quote').on('click', function() {
        if(!inIframe()) {
          openURL('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption='+encodeURIComponent(currentAuthor)+'&content=' + encodeURIComponent(currentQuote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
        }
        });
        */
    }

    render() {
        const quoteStyle = {
            color: this.state.color
        };


        const buttonStyle = {
            backgroundColor: this.state.color
        };


        return (
            React.createElement("div", { id: "wrapper" },
                React.createElement("div", { id: "quote-box" },
                    React.createElement("div", { class: "quote-text" },
                        React.createElement("i", { class: "fa fa-quote-left", style: quoteStyle }, " "),
                        React.createElement("span", { id: "text", style: quoteStyle }, this.state.quote)),

                    React.createElement("div", { class: "quote-author" }, "- ",
                        React.createElement("span", { id: "author", style: quoteStyle }, this.state.author)),

                    React.createElement("div", { class: "buttons" },
                        React.createElement("a", { class: "button", id: "tweet-quote", title: "Tweet this quote!", target: "_blank", style: buttonStyle, href: "https://twitter.com/intent/tweet?hashtags=quotes&text=" + this.state.quote + ' -' + this.state.author },
                            React.createElement("i", { class: "fa fa-twitter" })),

                        React.createElement("a", { class: "button", id: "tumblr-quote", title: "Post this quote on tumblr!", target: "_blank", style: buttonStyle, href: "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=" + this.state.author + "&content=" + this.state.quote + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button" },
                            React.createElement("i", { class: "fa fa-tumblr" })),

                        React.createElement("button", { class: "button", id: "new-quote", onClick: this.newQuote, style: buttonStyle }, "New quote"))),


                React.createElement("div", { class: "footer" }, " by ", React.createElement("a", { href: "http://taraford.net/" }, "Tara Ford"))));


    }
}


ReactDOM.render(
    React.createElement(Quote, null),
    document.getElementById('root'));