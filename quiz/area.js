class Area{
    /**
     * @type {HTMLDivElement}
     */
    #div;

    /**
     * @returns {HTMLDivElement} visszater az aktualis terulettel, amely az elemeket tartalmazza
     */
    get div(){
        return this.#div;
    }

    /**
     * 
     * @param {string} cssClass 
     */
    constructor(cssClass) {
        const container = this.#getContainer();
        this.#div = document.createElement('div');
        this.#div.className = cssClass;
        container.appendChild(this.#div);
    }

    /**
     * letrehozza a container classal rendelkezo elemet
     * amelyen belul a div lesz megtalalhato
     * ha mar letezik, akkor a sor mar letezot adja vissza
     * 
     * @returns {HTMLDivElement} containert tartalmazza
     */
    #getContainer(){
        let container = document.querySelector(".container");
        if (!container){
            container = document.createElement('div');
            container.className = 'container';
            document.body.appendChild(container);
        }
        return container;
    }

}

/**
 * ez a terulet fogja tartalmazni a kerdest
 */
class QuestionArea extends Area{    // leszarmazunk az Area osztalybol
    constructor (cssClass){ 
        super(cssClass); // az os class konstruktorat hivja meg 
    }
}

/**
 * Ez a terulet fogja tartalmazni a valaszokat
 */
class AnswerArea extends Area{
    constructor(cssClass){
        super(cssClass);
    }
}