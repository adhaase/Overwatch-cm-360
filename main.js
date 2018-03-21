// 360 degrees in X cm = Maximum value CM Per 360 / OW Sensitivity / DPI

document.getElementById('output_id').style.visibility = 'hidden';

function cmResult() {
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
    console.log(maximumValPer360)
}