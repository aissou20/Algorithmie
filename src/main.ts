import { Grille, IGrille } from "./Grille"

function init() {
    const mapCanvas: HTMLCanvasElement
        = document.getElementById("map") as HTMLCanvasElement
    const viewCanvas: HTMLCanvasElement
        = document.getElementById("view") as HTMLCanvasElement
    // console.log(mapCanvas)
    //  console.log(viewCanvas)
    const blockStyles = { 1: "rgba(238,68,0,1.0)" }

    const grille: IGrille = new Grille({
        canvas: mapCanvas,
        data: [
            [1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1],
        ],
        blockStyles,
        couleurFond: "#EEE",
        couleurGrille: "#333",
        nbRayons: viewCanvas.width,
        angleRayons: Math.PI * .5,
        //vue: view3D
    })

    window.addEventListener("keyup", (evt: KeyboardEvent) => {
        switch (evt.key) {
            case "ArrowUp":
                console.log("up")
                //point.deltaAvance = 0;
                break;
            case "ArrowDown":console.log("down")
                //point.deltaRecule = 0;
                break;
            case "ArrowLeft":console.log("left")
                //point.deltaPivotGauche = 0;
                break;
            case "ArrowRight":console.log("right")
                //point.deltaPivotDroite = 0;
                break;
        }
        //evt.preventDefault()
    })
    window.addEventListener("keydown", (evt: KeyboardEvent) => {
        switch (evt.key) {
            case "ArrowUp":console.log("up")
                //point.deltaAvance = 1;
                break;
            case "ArrowDown":console.log("down")
                //point.deltaRecule = 1;
                break;
            case "ArrowLeft":console.log("left")
                //point.deltaPivotGauche = 1;
                break;
            case "ArrowRight":console.log("right")
                //point.deltaPivotDroite = 1;
                break;
        }
        //evt.preventDefault()
    })

    const delay: number = Math.floor(1000 / 30)
    let lastTime: number = Date.now()

    function render() {
        const newTime: number = Date.now()
        const delay: number = newTime - lastTime
        /*point.deplace(delay)
        grille.lanceRayons(point.x, point.y, point.angle)
        grille.dessine()
        point.dessine()
        view3D.dessine()
         */
        // console.log(delay)
        lastTime = newTime
    }

    setInterval(render, delay)
}

init()