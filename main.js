// 360 degrees in X cm = Maximum value CM Per 360 / OW Sensitivity / DPI

function cmResult() {
    var maximumValPer360 = 138545.455;
    var user_mDPI = parseInt(document.getElementById("mDPI_id").value);
    var user_ingameSens = parseInt(document.getElementById("ingameSens_id").value);
    var cm360Result = maximumValPer360 / user_ingameSens / user_mDPI;

    document.getElementById("cm360Result_id").value = cm360Result.toFixed(2);
}