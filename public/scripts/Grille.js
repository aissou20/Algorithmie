export class Grille {
    constructor(config) {
        this._canvas = config.canvas;
        this._ctx = config.canvas.getContext("2d");
        this.data = config.data;
        this.nbColonnes = config.data[0].length;
        this.nbLignes = config.data.length;
        this.blockStyles = config.blockStyles;
        this.couleurFond = config.couleurFond;
        this.couleurGrille = config.couleurGrille;
        this.blockHeight = Math.round(this._canvas.height / this.data.length);
        this.blockWidth = Math.round(this._canvas.width / this.data[0].length);
        this.angleRayons = config.angleRayons;
    }
    dessineGrille() {
        this._ctx.fillStyle = this.couleurFond;
        this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
        ///this._ctx.strokeStyle
        //for
        for (let i = 0; i < this.data.length; i++) {
            const y = i * this.blockHeight;
            // @ts-ignore
            this._ctx = moveTo(0, y);
            this._ctx.lineTo(this._canvas.width, y);
        }
        for (let i = 1; i < this.data[0].length; i++) {
            const x = i * this.blockWidth;
            this._ctx.moveTo(x, 0);
            this._ctx.lineTo(x, this._canvas.height);
        }
        this._ctx.closePath();
        this._ctx.stroke();
    }
    dessineBlocks() {
    }
    dessine() {
        this.dessineGrille();
        // this.dessineBlocks()
    }
}
//# sourceMappingURL=Grille.js.map