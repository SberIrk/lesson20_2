
export class winCache {
    #win;
    constructor() {
        this.#init()

    }

    #init(){
        this.#win = document.querySelector(".cookie-consent");
        this.#win.addEventListener("click",this.#eventClickButton.bind(this))
        this.#win.style.display = this.#loadOk();
    }

    #eventClickButton(event){
        const buttonOK = event.target.closest(".cookie-consent__button");
        if(buttonOK){
            this.#saveOk()
            this.#win.style.display = 'none';
        }
    }

    #saveOk(){
        localStorage.setItem("winCacheSiteOK",'1');
    }

    #loadOk(){
        const ok = localStorage.getItem("winCacheSiteOK");
        return (ok === '1') ? 'none' : 'flex';
    }
}
