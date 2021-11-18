export interface IGrilleConfig {
    readonly canvas: HTMLCanvasElement
    readonly data: Array<Array<number>>
    readonly blockStyles: { [blockValue: number]: string }
    readonly couleurFond: string
    readonly couleurGrille: string
    readonly nbRayons: number
    readonly angleRayons: number
    // readonly vue: IView3D
}

export interface IGrille {
    data: Array<Array<number>>
    nbColonnes: number
    nbLignes: number
    blockStyles: { [blockValue: number]: string }
    couleurFond: string
    couleurGrille: string
    blockHeight: number
    blockWidth: number
    //rayons: Array<{x1: number, y1: number, x2: number, y2: number}>
    //intersections: Array<IIntersection>
    dessineGrille(): void

    dessineBlocks(): void

    //dessineRayons (): void
    dessine(): void

    //lanceRayons (x: number, y: number, angle: number): void
}

export class Grille implements IGrille {
    private readonly _canvas: HTMLCanvasElement;
    private readonly _ctx: CanvasRenderingContext2D;
    blockHeight: number;
    blockStyles: { [p: number]: string };
    blockWidth: number;
    couleurFond: string;
    couleurGrille: string;
    data: Array<Array<number>>;
    nbColonnes: number;
    nbLignes: number;
    angleRayons: number;

    constructor(config: IGrilleConfig) {
        this._canvas = config.canvas
        this._ctx = config.canvas.getContext("2d") as CanvasRenderingContext2D
        this.data = config.data
        this.nbColonnes = config.data[0].length
        this.nbLignes = config.data.length
        this.blockStyles = config.blockStyles
        this.couleurFond = config.couleurFond
        this.couleurGrille = config.couleurGrille
        this.blockHeight = Math.round(this._canvas.height / this.data.length)
        this.blockWidth = Math.round(this._canvas.width / this.data[0].length)
        this.angleRayons = config.angleRayons
    }


    dessineGrille(): void {
        this._ctx.fillStyle = this.couleurFond
        this._ctx.fillRect(0,0,this._canvas.width, this._canvas.height)
        ///this._ctx.strokeStyle


        //for
        for(let i =0; i<this.data.length; i++){
            const y = i*this.blockHeight
            // @ts-ignore
            this._ctx=moveTo(0,y)
            this._ctx.lineTo(this._canvas.width,y)
        }

        for(let i=1; i<this.data[0].length; i++){
            const x =i*this.blockWidth
            this._ctx.moveTo(x,0)
            this._ctx.lineTo(x, this._canvas.height)
        }
        this._ctx.closePath()
        this._ctx.stroke()
    }
    dessineBlocks(): void {
    }

    dessine(): void {
        this.dessineGrille()
       // this.dessineBlocks()
    }





}