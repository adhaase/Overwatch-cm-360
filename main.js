// 360 degrees in X cm = Maximum value CM Per 360 / OW Sensitivity / DPI
// OW Sens = (Maximum value CM Per 360) / (cm * DPI)

document.getElementById('output_id').style.visibility = 'hidden';

function cmResult() { // for cm-360.html
    //document.getElementById("output_id").addEventListener("click", cmResult);
    document.getElementById('output_id').style.visibility = 'visible';
    
    var maximumValPer360 = 138545.455;
    var user_mDPI = parseFloat(document.getElementById("mDPI_id").value);
    var user_ingameSens = parseFloat(document.getElementById("ingameSens_id").value);
    var cm360Result = maximumValPer360 / user_ingameSens / user_mDPI;

    document.getElementById("cm360Result_id").value = cm360Result.toFixed(2);
    
    // double checking values
    console.log(user_mDPI);
    console.log(user_ingameSens);
    console.log(maximumValPer360);
}

function sensResult() { // for equalizer.html
    //document.getElementById("output_id").addEventListener("click", cmResult);
    document.getElementById('output_id').style.visibility = 'visible';
    
    var maximumValPer360 = 138545.455;
    var user_mDPI = parseFloat(document.getElementById("mDPI_id").value);
    var alternate_cm360 = parseFloat(document.getElementById("alt_cm360_id").value);
    var sensitivityResult = (maximumValPer360) / (alternate_cm360 * user_mDPI);

    document.getElementById("sensResult_id").value = sensitivityResult.toFixed(2);
    
    // double checking values
    console.log(user_mDPI);
    console.log(alternate_cm360);
    console.log(sensitivityResult);
}

// accordion click events
// loop through each accordion, set dynamic click event
var accordions = document.getElementsByClassName("accordion"); // array with all accordions inside

// loop through array, create click event
for (var i = 0; i < accordions.length; ++i) {
    accordions[i].onclick = function() {
        this.classList.toggle('is-open');
        var content = this.nextElementSibling; // this represents current accordion we are working with
        
        if (content.style.maxHeight) { // check current val of maxheight, indicates if accordion is open or closed
            // if maxheight = 0, accordion is closed. Else, open.
            content.style.maxHeight = null;
        }
        else {
            // accordion is closed
            content.style.maxHeight = content.scrollHeight + "px"; // gets total value of all content inside (integer based on how many px content requires)

        }
    }
}