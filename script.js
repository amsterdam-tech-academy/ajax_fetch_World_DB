function printArray(objJson) {
    console.log("hier list");
    let arr = JSON.parse(objJson);
    let out = "";
    let i;
    for(i = 0; i < arr.length; i++) {
		//console.log(arr[i]);
		out += '<span id="'  + arr[i] + '" onClick="showList2(this.id,\'answer\')">'+ arr[i] + '</span><br>';
    }
    document.getElementById("txtHint").innerHTML = out;
	
}
function printArray2(objJson) {
    console.log("hier answer");
    console.log(objJson);
    let obj= JSON.parse(objJson);
    console.log(obj);
    let out = "<pre><ul>";
   

    obj.forEach(mobile => {
    for (let key in mobile) {
        console.log(`${key}: ${mobile[key]}`);
        out +="<li>" + key + ": " + mobile[key] + "</li>";
            }
        });
    document.getElementById("txtHint").innerHTML = out + "</ul></pre>";
	
}
//===============================================
const scriptPHP = "getdata.php";
const methodType = "GET";
function showList2(searchString, typeSearch){
    if (searchString == ""){
        // lege zoekstring
        document.getElementById("txtHint").innerHTML = " - - -";
        return;
    }
    if(typeSearch == "list"){
        let url = scriptPHP + "?question=" + searchString + "&type=" + typeSearch;
        makeAjaxCall(url, methodType).then(printArray, errorHandler);
    }
    if(typeSearch == "answer"){
        let url = scriptPHP + "?question=" + searchString + "&type=" + typeSearch;
        makeAjaxCall(url, methodType).then(printArray2, errorHandler);
    }
}