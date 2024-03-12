const emp_form = document.forms["emp_info"];
const emp_name = emp_form.elements["emp_name"];
const emp_phno = emp_form.elements["emp_phno"];

const err_emp_name = document.getElementById("err_emp_name");
const err_emp_phno = document.getElementById("err_emp_phno");

const err_icon =
    '<svg \
        xmlns="http://www.w3.org/2000/svg" \
        width="24" \
        height="24" \
        viewBox="0 0 24 24" \
        fill="none" \
        stroke="currentColor" \
        stroke-width="2" \
        stroke-linecap="round" \
        stroke-linejoin="round" \
        class="alert_icon" \
    > \
        <circle cx="12" cy="12" r="10"></circle> \
        <line x1="12" y1="8" x2="12" y2="12"></line> \
        <line x1="12" y1="16" x2="12.01" y2="16"></line> \
    </svg>';

function validateName(field, errSpan, maxLen = 35) {
    if (!field || !errSpan) return;

    const validInput = /^[a-zA-Z\s]+$/;
    const originBorderCol = field.style.borderColor;

    field.addEventListener("input", () => {
        const value = field.value.trim();
        let errMsg = "";

        if (!validInput.test(value) && value !== "") {
            errMsg = `${err_icon} Name should contain only alphabets!<br/><br/>`;
        } else if (value.length > maxLen) {
            errMsg = `${err_icon} Name should be less than ${maxLen} characters!<br/><br />`;
        }

        if (errMsg) {
            field.style.borderColor = "#803345";
            errSpan.style.padding = "1.1rem 10px";
            errSpan.innerHTML = errMsg;
            field.setCustomValidity(errMsg);
        } else {
            field.style.borderColor = originBorderCol;
            errSpan.style.padding = "0";
            errSpan.textContent = "";
            field.setCustomValidity("");
        }
    });
}

function validatePhNo(field, errSpan) {
    if (!field || !errSpan) return;

    const validInput = /^[0-9]+$/;
    const originBorderCol = field.style.borderColor;

    field.addEventListener("input", () => {
        const value = field.value.trim();
        let errMsg = "";

        if (!validInput.test(value) && value !== "") {
            errMsg = `${err_icon} Phone No. should contain only digits!<br/><br/>`;
        }

        if (errMsg) {
            field.style.borderColor = "#803345";
            errSpan.style.padding = "1.1rem 10px";
            errSpan.innerHTML = errMsg;
            field.setCustomValidity(errMsg);
        } else {
            field.style.borderColor = originBorderCol;
            errSpan.style.padding = "0";
            errSpan.textContent = "";
            field.setCustomValidity("");
        }
    });
}

function displayFormInfo(form) {
    let formInfo = "";

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);

        for (const [k, v] of formData.entries()) {
            const label = form.elements[k].name;
            formInfo += `${label}: ${v}\n`;
        }

        alert(formInfo);

        form.reset();
    });
}

validateName(emp_name, err_emp_name);
validatePhNo(emp_phno, err_emp_phno);
displayFormInfo(emp_form);

