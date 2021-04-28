function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//****FUNCTIONS****
//for courses.html
var selectedRow = null


function onFormSubmit() {
    // if (validate()) {
    var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();
    // }
}

function readFormData() {
    var formData = {};
    formData["title"] = document.getElementById("title").value;
    formData["stream"] = document.getElementById("stream").value;
    formData["type"] = document.getElementById("type").value;
    formData["start_date"] = document.getElementById("start_date").value;
    formData["end_date"] = document.getElementById("end_date").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.stream;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.type;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.start_date;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.end_date;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)" class="edit">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
    </svg>
    </a>`;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onDelete(this)" class="delete">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
    </svg>
    </a>`;

}

function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("stream").value = "";
    document.getElementById("type").value = "";
    document.getElementById("start_date").value = "";
    document.getElementById("end_date").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("title").value = selectedRow.cells[0].innerHTML;
    document.getElementById("stream").value = selectedRow.cells[1].innerHTML;
    document.getElementById("type").value = selectedRow.cells[2].innerHTML;
    document.getElementById("start_date").value = selectedRow.cells[3].innerHTML;
    document.getElementById("end_date").value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.title;
    selectedRow.cells[1].innerHTML = formData.stream;
    selectedRow.cells[2].innerHTML = formData.type;
    selectedRow.cells[3].innerHTML = formData.start_date;
    selectedRow.cells[4].innerHTML = formData.end_date;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

//****FUNCTIONS****
//for assignments.html
var selectedRowAss = null


function onFormSubmitAss() {
    // if (validateAss()) {
    var formDataAss = readFormDataAss();
    if (selectedRowAss == null)
        insertNewRecordAss(formDataAss);
    else
        updateRecordAss(formDataAss);
    resetFormAss();
    // }
}

function readFormDataAss() {
    var formDataAss = {};
    formDataAss["titleAss"] = document.getElementById("titleAss").value;
    formDataAss["descriptionAss"] = document.getElementById("descriptionAss").value;
    formDataAss["submission_dateAss"] = document.getElementById("submission_dateAss").value;
    return formDataAss;
}

function insertNewRecordAss(data) {
    var table = document.getElementById("tableAss").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.titleAss;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.descriptionAss;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.submission_dateAss;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEditAss(this)" class="edit">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
    </svg>
    </a>`;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onDeleteAss(this)" class="delete">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
    </svg>
    </a>`;
}

function resetFormAss() {
    document.getElementById("titleAss").value = "";
    document.getElementById("descriptionAss").value = "";
    document.getElementById("submission_dateAss").value = "";
    selectedRowAss = null;
}

function onEditAss(td) {
    selectedRowAss = td.parentElement.parentElement;
    document.getElementById("titleAss").value = selectedRowAss.cells[0].innerHTML;
    document.getElementById("descriptionAss").value = selectedRowAss.cells[1].innerHTML;
    document.getElementById("submission_dateAss").value = selectedRowAss.cells[2].innerHTML;
}

function updateRecordAss(formDataAss) {
    selectedRowAss.cells[0].innerHTML = formDataAss.titleAss;
    selectedRowAss.cells[1].innerHTML = formDataAss.descriptionAss;
    selectedRowAss.cells[2].innerHTML = formDataAss.submission_dateAss;

}

function onDeleteAss(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tableAss").deleteRow(row.rowIndex);
        resetFormAss();
    }
}

function validateAss() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

//****FUNCTIONS****
//for assignmentsPerCourse.html
var selectedRowAssPer = null


function onFormSubmitAssPer() {
    // if (validateAssPer()) {
    var formDataAssPer = readFormDataAssPer();
    if (selectedRowAssPer == null)
        insertNewRecordAssPer(formDataAssPer);
    else
        updateRecordAssPer(formDataAssPer);
    resetFormAssPer();
    // }
}

function readFormDataAssPer() {
    var formDataAssPer = {};
    formDataAssPer["titleAssPer"] = document.getElementById("titleAssPer").value;
    formDataAssPer["descriptionAssPer"] = document.getElementById("descriptionAssPer").value;
    formDataAssPer["courseAssPer"] = document.getElementById("courseAssPer").value;
    formDataAssPer["subjectAssPer"] = document.getElementById("subjectAssPer").value;
    formDataAssPer["submission_dateAssPer"] = document.getElementById("submission_dateAssPer").value;
    return formDataAssPer;
}

function insertNewRecordAssPer(data) {
    var table = document.getElementById("tableAssPer").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.titleAssPer;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.descriptionAssPer;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.courseAssPer;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.subjectAssPer;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.submission_dateAssPer;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEditAssPer(this)" class="edit">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
    </svg>
    </a>`;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onDeleteAssPer(this)" class="delete">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
    </svg>
    </a>`;
}

function resetFormAssPer() {
    document.getElementById("titleAssPer").value = "";
    document.getElementById("descriptionAssPer").value = "";
    document.getElementById("courseAssPer").value = "";
    document.getElementById("subjectAssPer").value = "";
    document.getElementById("submission_dateAssPer").value = "";
    selectedRowAssPer = null;
}

function onEditAssPer(td) {
    selectedRowAssPer = td.parentElement.parentElement;
    document.getElementById("titleAssPer").value = selectedRowAssPer.cells[0].innerHTML;
    document.getElementById("descriptionAssPer").value = selectedRowAssPer.cells[1].innerHTML;
    document.getElementById("courseAssPer").value = selectedRowAssPer.cells[2].innerHTML;
    document.getElementById("subjectAssPer").value = selectedRowAssPer.cells[3].innerHTML;
    document.getElementById("submission_dateAssPer").value = selectedRowAssPer.cells[4].innerHTML;
}

function updateRecordAssPer(formDataAssPer) {
    selectedRowAssPer.cells[0].innerHTML = formDataAssPer.titleAssPer;
    selectedRowAssPer.cells[1].innerHTML = formDataAssPer.descriptionAssPer;
    selectedRowAssPer.cells[2].innerHTML = formDataAssPer.courseAssPer;
    selectedRowAssPer.cells[3].innerHTML = formDataAssPer.subjectAssPer;
    selectedRowAssPer.cells[4].innerHTML = formDataAssPer.submission_dateAssPer;

}

function onDeleteAssPer(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tableAssPer").deleteRow(row.rowIndex);
        resetFormAssPer();
    }
}

function validateAssPer() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

//****FUNCTIONS****
//for assignmentsPerCoursePerStudent.html
var selectedRowAssPerCoPerStu = null


function onFormSubmitAssPerCoPerStu() {
    // if (validateAssPerStuCoPerStu()) {
    var formDataAssPerCoPerStu = readFormDataAssPerCoPerStu();
    if (selectedRowAssPerCoPerStu == null)
        insertNewRecordAssPerCoPerStu(formDataAssPerCoPerStu);
    else
        updateRecordAssPerCoPerStu(formDataAssPerCoPerStu);
    resetFormAssPerCoPerStu();
    // }
}

function readFormDataAssPerCoPerStu() {
    var formDataAssPerCoPerStu = {};
    formDataAssPerCoPerStu["titleAssPerCoPerStu"] = document.getElementById("titleAssPerCoPerStu").value;
    formDataAssPerCoPerStu["descriptionAssPerCoPerStu"] = document.getElementById("descriptionAssPerCoPerStu").value;
    formDataAssPerCoPerStu["courseAssPerCoPerStu"] = document.getElementById("courseAssPerCoPerStu").value;
    formDataAssPerCoPerStu["subjectAssPerCoPerStu"] = document.getElementById("subjectAssPerCoPerStu").value;
    formDataAssPerCoPerStu["studentAssPerCoPerStu"] = document.getElementById("studentAssPerCoPerStu").value;
    formDataAssPerCoPerStu["submission_dateAssPerCoPerStu"] = document.getElementById("submission_dateAssPerCoPerStu").value;
    return formDataAssPerCoPerStu;
}

function insertNewRecordAssPerCoPerStu(data) {
    var table = document.getElementById("tableAssPerCoPerStu").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.titleAssPerCoPerStu;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.descriptionAssPerCoPerStu;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.courseAssPerCoPerStu;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.subjectAssPerCoPerStu;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.studentAssPerCoPerStu;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.submission_dateAssPerCoPerStu;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEditAssPerCoPerStu(this)" class="edit">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
    </svg>
    </a>`;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<a onClick="onDeleteAssPerCoPerStu(this)" class="delete">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
    </svg>
    </a>`;
}

function resetFormAssPerCoPerStu() {
    document.getElementById("titleAssPerCoPerStu").value = "";
    document.getElementById("descriptionAssPerCoPerStu").value = "";
    document.getElementById("courseAssPerCoPerStu").value = "";
    document.getElementById("subjectAssPerCoPerStu").value = "";
    document.getElementById("studentAssPerCoPerStu").value = "";
    document.getElementById("submission_dateAssPerCoPerStu").value = "";
    selectedRowAssPerCoPerStu = null;
}

function onEditAssPerCoPerStu(td) {
    selectedRowAssPerCoPerStu = td.parentElement.parentElement;
    document.getElementById("titleAssPerCoPerStu").value = selectedRowAssPerCoPerStu.cells[0].innerHTML;
    document.getElementById("descriptionAssPerCoPerStu").value = selectedRowAssPerCoPerStu.cells[1].innerHTML;
    document.getElementById("courseAssPerCoPerStu").value = selectedRowAssPerCoPerStu.cells[2].innerHTML;
    document.getElementById("subjectAssPerCoPerStu").value = selectedRowAssPerCoPerStu.cells[3].innerHTML;
    document.getElementById("studentAssPerCoPerStu").value = selectedRowAssPerCoPerStu.cells[4].innerHTML;
    document.getElementById("submission_dateAssPerCoPerStu").value = selectedRowAssPerCoPerStu.cells[5].innerHTML;
}

function updateRecordAssPerCoPerStu(formDataAssPerCoPerStu) {
    selectedRowAssPerCoPerStu.cells[0].innerHTML = formDataAssPerCoPerStu.titleAssPerCoPerStu;
    selectedRowAssPerCoPerStu.cells[1].innerHTML = formDataAssPerCoPerStu.descriptionAssPerCoPerStu;
    selectedRowAssPerCoPerStu.cells[2].innerHTML = formDataAssPerCoPerStu.courseAssPerCoPerStu;
    selectedRowAssPerCoPerStu.cells[3].innerHTML = formDataAssPerCoPerStu.subjectAssPerCoPerStu;
    selectedRowAssPerCoPerStu.cells[4].innerHTML = formDataAssPerCoPerStu.studentAssPerCoPerStu;
    selectedRowAssPerCoPerStu.cells[5].innerHTML = formDataAssPerCoPerStu.submission_dateAssPerCoPerStu;

}

function onDeleteAssPerCoPerStu(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tableAssPerCoPerStu").deleteRow(row.rowIndex);
        resetFormAssPerCoPerStu();
    }
}

function validateAssPerCoPerStu() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

//****FUNCTIONS****
//for trainers.html
var selectedRowTra = null


function onFormSubmitTra() {
    // if (validateTra()) {
    var formDataTra = readFormDataTra();
    if (selectedRowTra == null)
        insertNewRecordTra(formDataTra);
    else
        updateRecordTra(formDataTra);
    resetFormTra();
    // }
}

function readFormDataTra() {
    var formDataTra = {};
    formDataTra["firstNameTra"] = document.getElementById("firstNameTra").value;
    formDataTra["lastNameTra"] = document.getElementById("lastNameTra").value;
    return formDataTra;
}

function insertNewRecordTra(data) {
    var table = document.getElementById("tableTra").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstNameTra;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastNameTra;
    cell4 = newRow.insertCell(2);
    cell4.innerHTML = `<a onClick="onEditTra(this)" class="edit">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
    </svg>
    </a>`;
    cell5 = newRow.insertCell(3);
    cell5.innerHTML = `<a onClick="onDeleteTra(this)" class="delete">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
    </svg>
    </a>`;
}

function resetFormTra() {
    document.getElementById("firstNameTra").value = "";
    document.getElementById("lastNameTra").value = "";
    selectedRowTra = null;
}

function onEditTra(td) {
    selectedRowTra = td.parentElement.parentElement;
    document.getElementById("firstNameTra").value = selectedRowTra.cells[0].innerHTML;
    document.getElementById("lastNameTra").value = selectedRowTra.cells[1].innerHTML;
}


function updateRecordTra(formDataTra) {
    selectedRowTra.cells[0].innerHTML = formDataTra.firstNameTra;
    selectedRowTra.cells[1].innerHTML = formDataTra.lastNameTra;
}

function onDeleteTra(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tableTra").deleteRow(row.rowIndex);
        resetFormTra();
    }
}

function validateTra() {
    isValid = true;
    if (document.getElementById("firstNameTra").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

//****FUNCTIONS****
//for trainersPerCourse.html
var selectedRowTraPer = null


function onFormSubmitTraPer() {
    // if (validateTraPer()) {
    var formDataTraPer = readFormDataTraPer();
    if (selectedRowTraPer == null)
        insertNewRecordTraPer(formDataTraPer);
    else
        updateRecordTraPer(formDataTraPer);
    resetFormTraPer();
    // }
}

function readFormDataTraPer() {
    var formDataTraPer = {};
    formDataTraPer["firstNameTraPer"] = document.getElementById("firstNameTraPer").value;
    formDataTraPer["lastNameTraPer"] = document.getElementById("lastNameTraPer").value;
    formDataTraPer["courseTraPer"] = document.getElementById("courseTraPer").value;
    formDataTraPer["subjectTraPer"] = document.getElementById("subjectTraPer").value;
    return formDataTraPer;
}

function insertNewRecordTraPer(data) {
    var table = document.getElementById("tableTraPer").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstNameTraPer;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastNameTraPer;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.courseTraPer;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.subjectTraPer;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEditTraPer(this)" class="edit">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
    </svg>
    </a>`;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onDeleteTraPer(this)" class="delete">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
    </svg>
    </a>`;
}

function resetFormTraPer() {
    document.getElementById("firstNameTraPer").value = "";
    document.getElementById("lastNameTraPer").value = "";
    document.getElementById("courseTraPer").value = "";
    document.getElementById("subjectTraPer").value = "";
    selectedRowTraPer = null;
}

function onEditTraPer(td) {
    selectedRowTraPer = td.parentElement.parentElement;
    document.getElementById("firstNameTraPer").value = selectedRowTraPer.cells[0].innerHTML;
    document.getElementById("lastNameTraPer").value = selectedRowTraPer.cells[1].innerHTML;
    document.getElementById("courseTraPer").value = selectedRowTraPer.cells[2].innerHTML;
    document.getElementById("subjectTraPer").value = selectedRowTraPer.cells[3].innerHTML;
}


function updateRecordTraPer(formDataTraPer) {
    selectedRowTraPer.cells[0].innerHTML = formDataTraPer.firstNameTraPer;
    selectedRowTraPer.cells[1].innerHTML = formDataTraPer.lastNameTraPer;
    selectedRowTraPer.cells[2].innerHTML = formDataTraPer.courseTraPer;
    selectedRowTraPer.cells[3].innerHTML = formDataTraPer.subjectTraPer;

}

function onDeleteTraPer(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tableTraPer").deleteRow(row.rowIndex);
        resetFormTraPer();
    }
}

function validateTraPer() {
    isValid = true;
    if (document.getElementById("firstNameTra").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

//****FUNCTIONS****
//for students.html
var selectedRowStu = null


function onFormSubmitStu() {
    // if (validateStu()) {
    var formDataStu = readFormDataStu();
    if (selectedRowStu == null)
        insertNewRecordStu(formDataStu);
    else
        updateRecordStu(formDataStu);
    resetFormStu();
    // }
}

function readFormDataStu() {
    var formDataStu = {};
    formDataStu["firstNameStu"] = document.getElementById("firstNameStu").value;
    formDataStu["lastNameStu"] = document.getElementById("lastNameStu").value;
    formDataStu["dateOfBirthStu"] = document.getElementById("dateOfBirthStu").value;
    formDataStu["tuitionFeesStu"] = document.getElementById("tuitionFeesStu").value;
    return formDataStu;
}

function insertNewRecordStu(data) {
    var table = document.getElementById("tableStu").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstNameStu;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastNameStu;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.dateOfBirthStu;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.tuitionFeesStu;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEditStu(this)" class="edit">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
    </svg>
    </a>`;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onDeleteStu(this)" class="delete">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
    </svg>
    </a>`;
}

function resetFormStu() {
    document.getElementById("firstNameStu").value = "";
    document.getElementById("lastNameStu").value = "";
    document.getElementById("dateOfBirthStu").value = "";
    document.getElementById("tuitionFeesStu").value = "";
    selectedRowStu = null;
}

function onEditStu(td) {
    selectedRowStu = td.parentElement.parentElement;
    document.getElementById("firstNameStu").value = selectedRowStu.cells[0].innerHTML;
    document.getElementById("lastNameStu").value = selectedRowStu.cells[1].innerHTML;
    document.getElementById("dateOfBirthStu").value = selectedRowStu.cells[2].innerHTML;
    document.getElementById("tuitionFeesStu").value = selectedRowStu.cells[3].innerHTML;
}


function updateRecordStu(formDataStu) {
    selectedRowStu.cells[0].innerHTML = formDataStu.firstNameStu;
    selectedRowStu.cells[1].innerHTML = formDataStu.lastNameStu;
    selectedRowStu.cells[2].innerHTML = formDataStu.dateOfBirthStu;
    selectedRowStu.cells[3].innerHTML = formDataStu.tuitionFeesStu;
}

function onDeleteStu(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tableStu").deleteRow(row.rowIndex);
        resetFormStu();
    }
}

function validateStu() {
    isValid = true;
    if (document.getElementById("firstNameStu").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

//****FUNCTIONS****
//for studentsPerCourse.html
var selectedRowStuPer = null


function onFormSubmitStuPer() {
    // if (validateStuPer()) {
    var formDataStuPer = readFormDataStuPer();
    if (selectedRowStuPer == null)
        insertNewRecordStuPer(formDataStuPer);
    else
        updateRecordStuPer(formDataStuPer);
    resetFormStuPer();
    // }
}

function readFormDataStuPer() {
    var formDataStuPer = {};
    formDataStuPer["firstNameStuPer"] = document.getElementById("firstNameStuPer").value;
    formDataStuPer["lastNameStuPer"] = document.getElementById("lastNameStuPer").value;
    formDataStuPer["courseStuPer"] = document.getElementById("courseStuPer").value;
    formDataStuPer["subjectStuPer"] = document.getElementById("subjectStuPer").value;
    formDataStuPer["dateOfBirthStuPer"] = document.getElementById("dateOfBirthStuPer").value;
    formDataStuPer["tuitionFeesStuPer"] = document.getElementById("tuitionFeesStuPer").value;
    return formDataStuPer;
}

function insertNewRecordStuPer(data) {
    var table = document.getElementById("tableStuPer").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstNameStuPer;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastNameStuPer;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.courseStuPer;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.subjectStuPer;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.dateOfBirthStuPer;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.tuitionFeesStuPer;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEditStuPer(this)" class="edit">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
    </svg>
    </a>`;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<a onClick="onDeleteStuPer(this)" class="delete">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
    </svg>
    </a>`;
}

function resetFormStuPer() {
    document.getElementById("firstNameStuPer").value = "";
    document.getElementById("lastNameStuPer").value = "";
    document.getElementById("courseStuPer").value = "";
    document.getElementById("subjectStuPer").value = "";
    document.getElementById("dateOfBirthStuPer").value = "";
    document.getElementById("tuitionFeesStuPer").value = "";
    selectedRowStuPer = null;
}

function onEditStuPer(td) {
    selectedRowStuPer = td.parentElement.parentElement;
    document.getElementById("firstNameStuPer").value = selectedRowStuPer.cells[0].innerHTML;
    document.getElementById("lastNameStuPer").value = selectedRowStuPer.cells[1].innerHTML;
    document.getElementById("courseStuPer").value = selectedRowStuPer.cells[2].innerHTML;
    document.getElementById("subjectStuPer").value = selectedRowStuPer.cells[3].innerHTML;
    document.getElementById("dateOfBirthStuPer").value = selectedRowStuPer.cells[4].innerHTML;
    document.getElementById("tuitionFeesStuPer").value = selectedRowStuPer.cells[5].innerHTML;
}


function updateRecordStuPer(formDataStuPer) {
    selectedRowStuPer.cells[0].innerHTML = formDataStuPer.firstNameStuPer;
    selectedRowStuPer.cells[1].innerHTML = formDataStuPer.lastNameStuPer;
    selectedRowStuPer.cells[2].innerHTML = formDataStuPer.courseStuPer;
    selectedRowStuPer.cells[3].innerHTML = formDataStuPer.subjectStuPer;
    selectedRowStuPer.cells[4].innerHTML = formDataStuPer.dateOfBirthStuPer;
    selectedRowStuPer.cells[5].innerHTML = formDataStuPer.tuitionFeesStuPer;
}

function onDeleteStuPer(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tableStuPer").deleteRow(row.rowIndex);
        resetFormStuPer();
    }
}

function validateStuPer() {
    isValid = true;
    if (document.getElementById("firstNameStuPer").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}


