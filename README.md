# Setup guide
Please follow the steps: 
1. Download and install Postman application on https://www.postman.com/downloads/
2. Open Postman and create a new "Request"
3. Fill "Current Weather Report" in the "Request name" field 
4. Add a new collection named "Weather Report"
5. Choose "Get" option
6. Fill the URL input with "https://data.weather.gov.hk/weatherAPI/opendata/weather.php"
7. Add 2 Params Key: dataType , Value: rhrread and Key: lang, value: tc
8. Click the "Send" button
9. Check the Headers and Body of the response JSON
10. copy the codes from https://github.com/wuhaiminghk/test/blob/master/CurrentWeatherTest to Tests in Postman, the click the "Send" button
11. Find the results in "Test Result" Tab in Postman
