// compute function
function compute()
{
    // retrieve elements
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;

    // check principal value that should not be less than 1
    if(principal<=0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    // calculate interest
    else {
        interest = (principal * years * rate) / 100;

        var year = new Date().getFullYear();
        year = year + Number(years);
        
        document.getElementById("result").innerHTML = "</br><div class='result'>If you deposit <mark>" + principal + "</mark>,</br> at an interest rate of <mark>" + rate + "</mark> %.</br> You will receive an amount of <mark>"  + interest + "</br></mark> in the year <mark>" + year + "</mark>.</div>";
    }
}

// update rate slider value with function
function rangeSlider() {
    rate = document.getElementById("rate").value;

    document.getElementById("ratePercent").innerHTML = rate + " %";
}
