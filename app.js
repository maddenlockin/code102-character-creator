// import functions and grab DOM elements
import { 
    getFeelingImage,
    getActivityImage
} from './utils.js'

const feelingInput = document.getElementById('feeling-input');
const activityInput = document.getElementById('activity-input');
const button = document.getElementById('populate');
const feelingImage = document.getElementById('feeling-image');
const activityImage = document.getElementById('activity-image');


// set event listeners to update state and DOM

button.addEventListener('click', () => {
    // post-click logic goes here!
    console.log(getFeelingImage, getActivityImage, feelingInput, activityInput, feelingImage, activityImage);

    const feelingLevel = feelingInput.value;
    const activityLevel = activityInput.value;
});






