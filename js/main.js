let ajax = new XMLHttpRequest();

function getByCPU()
{
    if (!ajax)
    {
        alert("Ajax not initialized");
        return;  
    }

    let requestVal = document.getElementById("select_CPU").value;

    ajax.onload = function() {
        if(ajax.status===200) {

            let key = JSON.stringify({"CPU": requestVal})
            localStorage.setItem(key, ajax.response);

            let res = JSON.parse(ajax.response);
            let result = "";
            result += "<table>";
            for(let i in res) {
                result += "<tr>";
                result += "<td>" + res[i].netname + "</td>"
                result += "<tr>";
            }
        document.getElementById("result_CPU").innerHTML = result;
        }
    }

    let params = "select_CPU=" + encodeURIComponent(requestVal);
    ajax.open("GET", "./responce_CPU.php?"+params, true);
    ajax.send(null)
}

function storageCPU()
{
    let requestVal = document.getElementById("select_CPU").value;
    let key = JSON.stringify({"CPU": requestVal})
    let data = localStorage.getItem(key);

    if (data == null)
    {
        alert("CPU storage empty");
        return;  
    }

    let res = JSON.parse(data);
    alert(typeof(res));
    let result = "";
    result += "<table>";
    res.forEach(i => {
        result += "<tr>";
        result += "<td>" + i.netname + "</td>"
        result += "<tr>";
    });

    document.getElementById("result_CPU").innerHTML = result;
}


function getBySoftware()
{
    if (!ajax)
    {
        alert("Ajax not initialized");
        return;  
    }

    let pcBySoftware = document.getElementById("select_Software").value;

    ajax.onload = function() {
        if(ajax.status===200) {

            let key = JSON.stringify({"software": pcBySoftware})
            localStorage.setItem(key, ajax.response);

            let res = JSON.parse(ajax.response);
            let result = "";
            result += "<table>";
            for(let i in res) {
                result += "<tr>";
                result += "<td>" + res[i].netname + "</td>"
                result += "<tr>";
            }
        document.getElementById("result_Software").innerHTML = result;
        }
    }

    let params = 'select_Software=' + encodeURIComponent(pcBySoftware);
    ajax.open("GET", "responce_Software.php?"+params, true);
    ajax.send(null)
}

function storageSoftware(){
    let requestVal = document.getElementById("select_Software").value;
    let key = JSON.stringify({"software": requestVal})
    let data = localStorage.getItem(key);

    if (data == null)
    {
        alert("Software storage empty");
        return;  
    }

    let res = JSON.parse(data);
    alert(typeof(res));
    let result = "";
    result += "<table>";
    res.forEach(i => {
        result += "<tr>";
        result += "<td>" + i.netname + "</td>"
        result += "<tr>";
    });

    document.getElementById("result_Software").innerHTML = result;
}

function getExpired()
{
    if (!ajax)
    {
        alert("Ajax not initialized");
        return;  
    }

    ajax.onload = function() {
        if(ajax.status===200) {

            localStorage.setItem("expired", ajax.response);

            let res = JSON.parse(ajax.response);
            let result = "";
            result += "<table>";
            for(let i in res) {
                result += "<tr>";
                result += "<td>" + res[i].netname + "</td>"
                result += "<tr>";
            }
        document.getElementById("result_Expired").innerHTML = result;
        }
    }
        
    ajax.open("GET", "responce_Expired.php?", true);
    ajax.send(null)
}

function storageExpired()
{
    let data = localStorage.getItem("expired");

    if (data == null)
    {
        alert("Expired storage empty");
        return;  
    }
    
    let res = JSON.parse(data);
    alert(typeof(res2));
    let result = "";
    result += "<table>";
    for(let i in res) {
        result += "<tr>";
        result += "<td>" + res[i].netname + "</td>"
        result += "<tr>";
    }

    document.getElementById("result_Expired").innerHTML = result;
}