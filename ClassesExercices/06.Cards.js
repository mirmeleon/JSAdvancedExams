(function () {
    let Suits =
        {
            SPADES: "\u2660",
            HEARTS: "\u2665",
            DIAMONDS: "\u2666",
            CLUBS: "\u2663"
        };

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(value) {
            let valid = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
            if (!valid.contains(value))
                throw new Error("Invalid face!");
            this._face = value;
        }

        get suit() {
            return this._suit;
        }

        set suit(suit) {
            if (!Object.keys(Suits).map(
                    k => Suits[k]).includes(suit)) {
                throw new Error("Invalid card suite");
            }
            this._suit = suit;

        }

        toString() {
            return `${this.face}${this.suit}`;
        };
    }

    return {Suits, Card};

}())
