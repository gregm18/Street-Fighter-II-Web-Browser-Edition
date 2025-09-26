import { Ken } from './entities/fighters/Ken.js';
import { Ryu } from './entities/fighters/Ryu.js';
import { Stage } from './entities/Stage.js';
import { FpsCounter } from './entities/FpsCounter.js';
import { STAGE_FLOOR } from './constants/stage.js';
import { FighterDirection } from './constants/fighter.js';
import { registerKeyboardEvents, registerGamepadEvents, pullGamepads } from './InputHandler.js';
import { Shadow } from './entities/fighters/Shadow.js';
import { StatusBar } from './entities/overlays/StatusBar.js';


export class StreetFighterGame{
    constructor(){
        this.context = this.getContext();
        this.fighters = [
            new Ryu(104, STAGE_FLOOR, FighterDirection.RIGHT, 0),
            new Ken(280, STAGE_FLOOR, FighterDirection.LEFT, 1),
        ]

        this.fighters[0].opponent = this.fighters[1];
        this.fighters[1].opponent = this.fighters[0];

        this.entities = [
            new Stage(),
            new StatusBar(this.fighters), //Placed Status Bars here to have fighters drawn over it
            ...this.fighters.map(fighter => new Shadow(fighter)),
            ...this.fighters,
            new FpsCounter(),
            
        ];

        this.frameTime = {
            previous: 0,
            secondsPassed: 0,
        };
    }

    getContext() {
        const canvasEL = document.querySelector('canvas');
        const context = canvasEL.getContext('2d');

        context.imageSmoothingEnabled = false;

        return context;
    }

    update() {
        for (const entity of this.entities) {
            entity.update(this.frameTime, this.context);
        }
    }

    draw() {
        for (const entity of this.entities) {
            entity.draw(this.context);
        }
    }

    

    frame(time) {
        window.requestAnimationFrame(this.frame.bind(this));

        this.frameTime = {
        secondsPassed: (time - this.frameTime.previous) / 1000,
        previous: time,
        }

        pullGamepads();
        this.update();
        this.draw();
    }
    
    
    


start() {
    registerKeyboardEvents();
    registerGamepadEvents();

    window.requestAnimationFrame(this.frame.bind(this));
    }
}