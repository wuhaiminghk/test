//Case 1.1 verify the status code
pm.test("Get status code is 200", function () {
    pm.response.to.have.status(200);
});

//Case 1.2 verify the data value, all the data of main should be "TRUE" or "FALSE" and main shoud be madatary
let jsonData = pm.response.json();
let rainfallDataCount = jsonData.rainfall.data.length;
let mismatchCount = 0

for(i=0 ; i < rainfallDataCount ; i++){
    let mainValue = jsonData.rainfall.data[i].main;
    if (mainValue != 'TRUE' && mainValue != 'FALSE'){
        mismatchCount ++;
    }
} 

pm.test("Data Value of Rainfall Main", function () {
    pm.expect(mismatchCount).to.eql(0);
});