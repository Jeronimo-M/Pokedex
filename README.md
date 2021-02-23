# Pokedex
Project 1 for SEI Topaz

# Project Overview

I am recreating a Pokedex which is a digital encyclopedia of Pokemon from it's database.

## Project Name

I Want To Be The Very Best

## Project Description

The Pokedex will be fully functional like the one on the show displaying a visual of the Pokemon and it's data on one side and a list index of selectable Pokemon with buttons on the other side. You can read more about the Pokedex here: <https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex>

## API and Data Sample

I will be using the world's most used Pokemon API which averages a million calls a month. https://pokeapi.co/

```json
{
    "abilities": [
        {
            "ability": {
                "name": "overgrow",
                "url": "https://pokeapi.co/api/v2/ability/65/"
            },
            "is_hidden": false,
            "slot": 1
        },
        {
            "ability": {
                "name": "chlorophyll",
                "url": "https://pokeapi.co/api/v2/ability/34/"
            },
            "is_hidden": true,
            "slot": 3
        }
    ],
    "base_experience": 64,
    "forms": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon-form/1/"
        }
```

## Wireframes

Wireframe link here: https://wireframe.cc/Wuc80r

Showing overall layout of my Pokedex with the left container showing a picture of the Pokemon with it's coresponding data. The right container will have a selectable list of Pokemon in order to choose from with buttons to navigate between pages. This container will also have a search field to directly look up Pokemon.

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Properly display Pokemon image with it's corresponding data features once selected or searched for 
- Mimic replica look of a Pokedex
- Ensure all buttons are functional 

#### PostMVP  

- Add more dynamic media of Pokemon not included in this API
- Add an intro animation that opens up Pokedex when first loaded

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Feb 22-23| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Feb 23| Project Approval | Incomplete
|Feb 24| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Feb 24| Pseudocode / actual code | Incomplete
|Feb 25| Initial Clickable Model  | Incomplete
|Feb 26| MVP | Incomplete
|March 1| Presentations | Incomplete

## Priority Matrix

https://lucid.app/lucidchart/invitations/accept/68b26aaf-484a-46d4-800f-8bcc7a33d0b8

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML | M | 3hrs| N/A | N/A |
| Working with API | M | 5hrs| N/A | N/A |
| JavaScript | H | 10hrs | N/A | N/A |
| CSS Styling | H | 15hrs | N/A | N/A |
| Presentation Practice | L | 1hrs | N/A | N/A |
| Total | H | 34hrs| N/A | N/A |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
