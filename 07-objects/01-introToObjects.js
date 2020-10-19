let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};
// // // Thiss is all the objects
// console.log(netflix);
// // // Just the show name
// console.log(netflix.name);
// // // This is an episode name
// console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName);


// // Hint use indexing with dot notation
// // let showName; // Here assign "The Office"

// // let showName = netflix.name;
// // console.log(showName);

// // Here use dot notation and the .length prop
// // let seasonOneEpCount; // Here assign 6

// // let seasonOneEpCount = netflix.season1.seasonInfo.episodeInfo.length;
// // console.log(seasonOneEpCount);

// // Here use a for loop to assign to this
// // let epNames; // Here assign ["<ep name here>", "", ...]

// // console.log(netflix.season1.seasonInfo.episodeInfo[0].episodeName)
// // let epNames = [];
// // for (ep of netflix.season1.seasonInfo.episodeInfo) {
// //     epNames.push(ep.episodeName);
// // };
// // console.log(epNames);


// //********** */
// // JSON <- Javascript Object Notation

// let spaceJam = {
//     toonSquad: {
//         human: 'Michael Jordan',
//         rabbit1: 'Bugs Bunny',
//         rabbit2: 'Lola Bunny',
//         duck: 'Daffy Duck',
//         tDevil: 'Tasmanian Devil',
//         bird: 'Tweety',
//         cat: 'Sylvester',
//         pig: 'Porky Pig'
//     },
//     monstars: {
//         0: 'Bupkus',
//         1: 'Bang',
//         2: 'Nawt',
//         3: 'Pound',
//         4: 'Blanko'
//     },
//     nbaPlayers: {
//         phoenixSuns: 'Charles Barkley',
//         newJerseyNets: 'Shawn Bradley',
//         newYorkNicks: 'Patrick Ewing',
//         charlotteHornets1: 'Larry Johnson',
//         charlotteHornets2: 'Muggsy Bogues'
//     }
// }

// // Returns an array of the keys of an object
// // console.log(Object.keys(spaceJam.toonSquad));
// // console.log(Object.keys(spaceJam.toonSquad.duck));
// // console.log(Object.keys(spaceJam.toonSquad).toString());

// // Returns an array of the values of an object
// console.log(Object.values(spaceJam.toonSquad));



// let hello = "Hello World!"
// let greetArray = ["H", "E", "L", "L", "O"]

// // console.log("This is from object.keys:", Object.keys(hello));
// // console.log("This is from object.values:", Object.values(hello));

// console.log("This is from object.keys:", Object.keys(greetArray));
// console.log("This if from object.values:", Object.values(greetArray));