// import functions and grab DOM elements
/* import { 
    getFeelingImage,
   // getActivityImage
} from './utils.js';*/

// these const are not in a function so they are not dependent on being called, they are creating variables.
const feelingInput = document.getElementById('feeling-input');
//const activityInput = document.getElementById('activity-input');
const button = document.getElementById('populate');
const feelingImage = document.getElementById('feeling-image');
//const activityImage = document.getElementById('activity-image');

//below feelingNumber represents what is being passed in 
function getFeelingImage(feelingNumber){
    console.log(feelingNumber);
    if (feelingNumber >= 1) return 'https://i.pinimg.com/474x/71/d2/d7/71d2d7f63596c909bb4608ed0a962c99.jpg';
    else if (feelingNumber >= 2) { 
        console.log('it equals 2');
        return 'https://www.animalslook.com/media/these-animals-just-love-to-make-silly-faces-15-pictures/these-animals-just-love-to-make-silly-faces-15-pictures-10.jpg'}
    else if (feelingNumber >= 3) return 'https://i.ytimg.com/vi/Tk6FN59TklM/hqdefault.jpg';
    else if (feelingNumber >= 4) return 'https://i.pinimg.com/originals/cf/c2/2d/cfc22d7a0dfe60651e839c4b00f5e346.png';
    else if (feelingNumber >= 5) return 'https://www.animalslook.com/media/these-animals-just-love-to-make-silly-faces-15-pictures/these-animals-just-love-to-make-silly-faces-15-pictures-4.jpg'; 

    console.log('x');
    
}

// nothing happens until this button is clicked! the click activates the eventlistener which calls (activates) the below functions
button.addEventListener('click', () => {
    //console.log('feelingInput', feelingInput.value);
    //console.log('feelingImage', feelingImage.src);

    //below, feelingLevel is created as a variable, feelingInput is the entire html element from the html file. the .value is specific to the value attribute for the element in the html.
    const feelingLevel = feelingInput.value;
    console.log('feelingLevel', feelingLevel);

    //getFeelingImage is the function being called (activated) by the click. feelingLevel is the variable(argument/parameter) being passed in. 
    console.log(getFeelingImage(feelingLevel));
    const imageSrc = getFeelingImage(feelingLevel);
    feelingImage.src = imageSrc;
    // getActivityImage, activityInput, activityImage

    //const activityLevel = activityInput.value;
});






