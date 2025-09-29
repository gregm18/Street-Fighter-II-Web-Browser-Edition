import { Fighter } from './Fighter.js';
import { FighterState, FrameDelay, PushBox } from '../../constants/fighter.js';

export class Ryu extends Fighter{
    constructor(x, y, direction, playerId) {
        super('Ryu', x, y, direction, playerId);

        this.image = document.querySelector('img[alt="ryu"]');

        this.frames = new Map([           // [x, y, width, height], [origin point], collision

            //  Idle
            ['idle-1', [[[2, 909, 60, 89], [26, 86]], PushBox.IDLE]],
            ['idle-2', [[[67, 908, 59, 90], [26, 87]], PushBox.IDLE]],
            ['idle-3', [[[132, 906, 58, 92], [26, 89]], PushBox.IDLE]],
            ['idle-4', [[[199, 903, 55, 93], [24, 90]], PushBox.IDLE]],

            //  Move Forward
            ['forwards-1', [[[18, 1125, 53, 83], [26, 84]], PushBox.IDLE]],
            ['forwards-2', [[[20, 1283, 60, 88], [25, 86]], PushBox.IDLE]],
            ['forwards-3', [[[97, 1280, 64, 92], [29, 89]], PushBox.IDLE]],
            ['forwards-4', [[[170, 1280, 63, 90], [34, 89]], PushBox.IDLE]],
            ['forwards-5', [[[259, 1280, 54, 91], [29, 89]], PushBox.IDLE]],
            ['forwards-6', [[[344, 1283, 50, 89], [25, 86]], PushBox.IDLE]],
            
            //  Move Backwards
            ['backwards-1', [[[2, 1380, 61, 87], [26, 84]], PushBox.IDLE]],
            ['backwards-2', [[[86, 1378, 59, 90], [23, 86]], PushBox.IDLE]],
            ['backwards-3', [[[169, 1377, 57, 90], [21, 89]], PushBox.IDLE]],
            ['backwards-4', [[[251, 1376, 57, 91], [20, 89]], PushBox.IDLE]],
            ['backwards-5', [[[330, 1377, 59, 90], [22, 89]], PushBox.IDLE]],
            ['backwards-6', [[[412, 1378, 57, 89], [21, 86]], PushBox.IDLE]],

            //  Jump Up
            ['jump-up-1', [[[4, 1589, 56, 104], [24, 107]], PushBox.JUMP]],
            ['jump-up-2', [[[68, 1592, 50, 89], [25, 103]], PushBox.JUMP]],
            ['jump-up-3', [[[135, 1594, 54, 77], [29, 103]], PushBox.JUMP]],
            ['jump-up-4', [[[207, 1596, 48, 70], [20, 101]], PushBox.JUMP]],
            ['jump-up-5', [[[265, 1589, 48, 89], [23, 106]], PushBox.JUMP]],
            ['jump-up-6', [[[330, 1582, 55, 109], [24, 113]], PushBox.JUMP]],
            
            //  Jump Diagonal
            ['jump-roll-1', [[[39, 1475, 55, 103], [30, 106]], PushBox.JUMP]],
            ['jump-roll-2', [[[163, 1485, 61, 78], [39, 90]], PushBox.JUMP]],
            ['jump-roll-3', [[[277, 1498, 104, 42], [73, 76]], PushBox.JUMP]],
            ['jump-roll-4', [[[424, 1486, 53, 82], [11, 111]], PushBox.JUMP]],
            ['jump-roll-5', [[[519, 1503, 122, 44], [51, 81]], PushBox.JUMP]],
            ['jump-roll-6', [[[687, 1483, 71, 87], [18, 98]], PushBox.JUMP]],
            ['jump-roll-7', [[[330, 1582, 55, 109], [24, 113]], PushBox.JUMP]],

            //  Pre-Jump/Post-Jump frame
            ['jump-land', [[[2, 1705, 55, 85], [26, 83]], PushBox.IDLE]],

            //  Crouch
            ['crouch-1', [[[18, 1125, 53, 83], [26, 81]], PushBox.IDLE]],
            ['crouch-2', [[[93, 1139, 57, 69], [32, 66]], PushBox.BEND]],
            ['crouch-3', [[[170, 1147, 61, 61], [36, 58]], PushBox.CROUCH]],
            
            //  Stand Turn
            ['idle-turn-1', [[[3, 1016, 54, 95], [25, 92]], PushBox.IDLE]],
            ['idle-turn-2', [[[65, 1014, 58, 97], [28, 94]], PushBox.IDLE]],
            ['idle-turn-3', [[[131, 1018, 54, 94], [27, 90]], PushBox.IDLE]],
            
            //  Crouch Turn
            ['crouch-turn-1', [[[1, 1213, 53, 61], [27, 58]], PushBox.CROUCH]],
            ['crouch-turn-2', [[[68, 1212, 52, 61], [25, 58]], PushBox.CROUCH]],
            ['crouch-turn-3', [[[141, 1212, 53, 61], [24, 58]], PushBox.CROUCH]],
            
            
        ]); 

        this.animations = {
            [FighterState.IDLE]: [
                ['idle-1', 66], ['idle-2', 66], ['idle-3', 66], 
                ['idle-4', 66], ['idle-3', 66],['idle-2', 66]
            ],
            [FighterState.WALK_FORWARD]: [
                ['forwards-1', 49], ['forwards-2', 100], ['forwards-3', 66], 
                ['forwards-4', 66], ['forwards-5', 66], ['forwards-6', 100]
            ],
            [FighterState.WALK_BACKWARD]: [
                ['backwards-1', 49], ['backwards-2', 100], ['backwards-3', 66], 
                ['backwards-4', 66], ['backwards-5', 66], ['backwards-6', 100]
            ],
            [FighterState.JUMP_START]: [
                ['jump-land', 50], ['jump-land', FrameDelay.TRANSITION], 
            ],
            [FighterState.JUMP_UP]: [
                ['jump-up-1', 149], ['jump-up-2', 133], ['jump-up-3', 133],
                ['jump-up-4', 133], ['jump-up-5', 133], ['jump-up-6', FrameDelay.FREEZE],   
            ],
            [FighterState.JUMP_FORWARD]: [
                ['jump-roll-1', 232], ['jump-roll-2', 83], ['jump-roll-3', 50],
                ['jump-roll-4', 50], ['jump-roll-5', 50], ['jump-roll-6', 83], 
                ['jump-up-6', FrameDelay.FREEZE],   
            ],
            [FighterState.JUMP_BACKWARD]: [
                ['jump-roll-6', 249], ['jump-roll-5', 50], ['jump-roll-4', 50],
                ['jump-roll-3', 50], ['jump-roll-2', 50], 
                ['jump-roll-1', FrameDelay.FREEZE],   
            ],
            [FighterState.JUMP_LAND]: [
                ['jump-land', 33], ['jump-land', 117], 
                ['jump-land', FrameDelay.TRANSITION], 
            ],
            [FighterState.CROUCH]: [
                ['crouch-3', FrameDelay.FREEZE]
            ],
            [FighterState.CROUCH_DOWN]: [
                ['crouch-1', 33], ['crouch-2', 33], ['crouch-3', 33],
                ['crouch-3', FrameDelay.TRANSITION],   
            ],
            [FighterState.CROUCH_UP]: [
                ['crouch-3', 33], ['crouch-2', 33], ['crouch-1', 33],
                ['crouch-1', FrameDelay.TRANSITION],   
            ],
            [FighterState.IDLE_TURN]: [
                ['idle-turn-3', 33], ['idle-turn-2', 33], ['idle-turn-1', 33],
                ['idle-turn-1', FrameDelay.TRANSITION],   
            ],
            [FighterState.CROUCH_TURN]: [
                ['crouch-turn-3', 33], ['crouch-turn-2', 33], ['crouch-turn-1', 33],
                ['crouch-turn-1', FrameDelay.TRANSITION],     
            ],
        };

        this.initialVelocity = {
            x: {
                [FighterState.WALK_FORWARD]: 3 * 60,
                [FighterState.WALK_BACKWARD]: -(2 * 60),
                [FighterState.JUMP_FORWARD]: ((48 * 3) + (12 * 2)),
                [FighterState.JUMP_BACKWARD]: -((45 * 4) + (15 * 3)),
                
            },
            jump: -420,
        };

        this.gravity = 1000;
    }
}

