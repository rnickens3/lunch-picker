//This code will pick a random lunch from an array of options
let lunches = [];

function addLunchToEnd(arr, newFood) {
    arr.push(newFood);
    console.log(newFood + " added to the end of the lunch menu.");
    return arr
}

function addLunchToStart(arr, newFood) {
    arr.unshift(newFood);
    console.log(newFood + " added to the start of the lunch menu.");
    return arr;
}

function removeLastLunch(arr) {
    if (arr.length > 0) {
        let removedFood = arr.pop();
        console.log(removedFood + " removed from the end of the lunch menu.");
        return arr;
} else {
    console.log("No lunches to remove.");
    }
}

function removeFirstLunch(arr) {
    if (arr.length > 0) {
        let removedFood = arr.shift();
        console.log(removedFood + " removed from the start of the lunch menu.");
        return arr;
    } else {
        console.log("No lunches to remove.");
    }
}

function getRandomLunch(arr) {
    if (arr.length > 0) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        console.log("Randomly selected lunch: " + arr[randomIndex]);
    } else {
        console.log("No lunches available.");
    }
}

function showLunchMenu(arr) {
    if (arr.length > 0) {
        console.log("Menu items: " + arr.join(", "));
    } else {
        console.log("The menu is empty.");
    }
}

