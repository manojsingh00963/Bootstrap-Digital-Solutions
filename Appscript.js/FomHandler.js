function doPost(e) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([data.name, data.email, data.age]);
    return ContentService.createTextOutput('Data added successfully');
}
