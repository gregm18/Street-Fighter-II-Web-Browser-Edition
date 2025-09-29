**Street Fighter II: Web Browser Edition**

This project implements State Machine logic with modular JavaScript to recreate the player mechanics of the original arcade version of Street Fighter II: The World Warrior. The visuals for the game are animated in real time using the HTML Canvas Element’s 2D rendering context.

**Table of Contents**

1.	Requirements
2.	Installation
3.	The State Machine
4.	Controls
5.	The Animation Framework
6.	Defining a Fighter
7.	Running in the Web Browser
8.	Troubleshooting

**Requirements**

- A keyboard to control character entities
- Any typical web browser (Google Chrome Recommended)
- Visual Studio Code with The Live Server/Five Server Extension
- Street Fighter II: Web Browser Edition Project Files
  
**Installation**

This section explains how to install the necessary files and programs to run Street Fighter II: Web Browser Edition.

Download and Install Visual Studio Code:
https://code.visualstudio.com/download

Once installed, go to Extensions. Search for Live Server or Five Server
(Five Server is a modification of Live Server. It is recommended if you want to edit the project files and update them on the fly)

Download the “Street Fighter II: Web Browser Edition Project” files anywhere for Visual Studio Code to access.


**The State Machine**

All states are held in the fighter class in a variable named “states.” Each state is defined with an initialization and update function. Some states use the same function since some functions have unique attributes to specific states. Each state has a variable, validFrom. If the new player state requested is not valid from the current player state, then the player state will not change.
For example, the FighterState.WALK_FORWARD state is allowed to be transitioned from the FighterState.IDLE state so that fighters are given the option to move out of their original standing state.
The state machine allows the developer to control what a player’s actions are and how each action can be used through restrictions with validFrom.


<img width="896" height="432" alt="Image" src="https://github.com/user-attachments/assets/e1e4814d-08c4-482b-b552-051fa3182c52" />



**Controls**

The game runs states through keyboard control. If a certain player, marked by the variable, playerId, presses a control key, it requests its designated state. Currently, Ryu is considered player 1 and Ken is considered player 2.


<img width="620" height="415" alt="Image" src="https://github.com/user-attachments/assets/9e93598a-4231-4125-bd8e-c25385b0bb1b" />



**The Animation Framework**

The animation framework begins in the StreetFighterGame class, meaning that only the game itself is currently tied to the animation system. This means that other menus and such may draw and update frames in their own way.

Every entity in the game has its own draw and update functions. The StreetFighterGame class calls these functions on every frame.

<img width="647" height="843" alt="Image" src="https://github.com/user-attachments/assets/24eeda8f-4b2e-47fc-8e59-8be9460598e9" />

All entities change frames with their own delays. Specifically, the Fighters get their own unique system for having specific delays for each frame. Other entities need not much complexity for changing frames and thus have fewer complex systems for optimization.

<img width="663" height="220" alt="Image" src="https://github.com/user-attachments/assets/864b0ec7-3293-4194-b3ec-26387a573bd3" />

<img width="961" height="507" alt="Image" src="https://github.com/user-attachments/assets/cb7877d5-64b4-40c5-9c2a-ff07e6dd1b74" />


**Defining a Fighter**

Each Fighter has their own unique class that is a subclass of the Fighter class. In each subclass, fighters have their own unique character sprite sheets, frames, frame delays, velocity, jump, and gravity values. Because the Fighter class simply grabs these values and executes functions with them accordingly, characters can be incredibly varied in gameplay.

<img width="603" height="293" alt="Image" src="https://github.com/user-attachments/assets/af17899d-b05c-4e03-a731-5fb00e12ede5" />

**Running in the Web Browser**

Once all requirements and installations are fulfilled, run the project by loading the project in Visual Studio Code and press the “Go Live” button on the bottom right.

From here, your browser will be prompted to open and the game will start in a new tab from a live local server.

Ryu’s movement keys are W, A, S, and D.
Ken’s movement keys are Up, Down, Left, and Right.

![til](https://github.com/gregm18/G-Testing-0/blob/main/readme/sf2webgifsomewhathigh%20inf%20loop.gif?raw=true)


**Troubleshooting**

In the event that framerate is lower than 30 frames per second or the game stutters dramatically, characters may phase through each other or move more or less than intended. This may happen when there is a bottleneck, low RAM, or when the game's tab is not prioritized. 

Typically, the game is not demanding enough on modern computers to struggle below 30 frames per second and should work fine.

You can see your framerate very lightly in the bottom right corner.
