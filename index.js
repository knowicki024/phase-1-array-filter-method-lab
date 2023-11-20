// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (collection, name) {
    const newCollection = [];

for (const user of collection) {
    if (user.toLowerCase() === name.toLowerCase()) {
        newCollection.push(user);
    
    }
}
return newCollection;
}

function fuzzyMatch (collection, letters) {
    const newCollection = [];

    for (const user of collection) {
        if (user.startsWith(letters)) {
        newCollection.push(user);
    }
}
return newCollection;
}

function matchName (collection, name) {
    const newCollection = [];

    for (const user of collection) {
        if (user.name === name) {
            newCollection.push(user);
        }
    }
return newCollection;
}