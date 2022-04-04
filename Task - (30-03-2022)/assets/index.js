function validations(pattern, inputData, errorMessage) {
    var sibling = inputData.nextElementSibling;
    if(pattern.test(inputData.value))
    {
        inputData.style.backgroundColor= 'rgba(0,255,0,0.1)';
        inputData.style.border = '2px solid green'; 
    }
    else
    {
        displayWarning(sibling, errorMessage);
        inputData.value = '';
    }
};

fname.onchange = (event) => {
    validations(/^[A-za-z]{4,}$/,event.target,'Name should contains only characters.');
};

lname.onchange = (event) => {
    validations(/^[A-za-z]{4,}$/,event.target,'Name should contains only characters.');
};

dob.onchange = (event) => {
    var dateofBirth = event.target;
    var sibling = dateofBirth.nextElementSibling;
    var dateFormat = new Date(dateofBirth.value);
    var currentDate =  new Date();
    var currentMonth = currentDate.getMonth();
    var month = dateFormat.getMonth();
    var age = currentDate.getFullYear() - dateFormat.getFullYear();
    age = (currentMonth < month)? age-1 : age;
    if(age>=18 && age<=60)
    {
        dateofBirth.style.backgroundColor = 'rgba(0,255,0,0.1)';
        dateofBirth.style.border = '2px solid green';
    }
    else
    {
       displayWarning(sibling, 'Age should be between 18 to 60');
        dateofBirth.value='';
    }
};

mobile.onchange = (event) => {   
    validations(/^[6789][0-9]{9}/, event.target, 'Mobile should contains only 10 digits');
}

email.onchange = (event) => {
    validations(/^[A-Za-z0-9]{4,}@[A-Za-z]{3,}\.[A-Za-z]{2,}$/, event.target, 'Email address should be in Example123@domain.com');
};

projectdescription.oninput = (event) => {
    if(event.target.value.length > 200)
    {
        displayWarning(event.target.nextElementSibling, 'Paragraph should not exceeds 200 characters');
        event.target.value = '';
    }
};

resume.onchange = (event) => {
    validations(/(\.jpg|\.png|\.jpeg|\.pdf)$/,event.target,'Not supported file format');
}

linkedin.onchange = (event) => {
    validations(/^https:\/\/www\.linkedin\.com\/in\/[A-Za-z]{5,}\-[A-Za-z]{5,}\-[A-Za-z0-9]{5,}$/, event.target, "Couldn't find the link");
};

function displayWarning(sibling, warningMessage)
{
    if(sibling)
    {
        sibling.style.display = 'flex';
        sibling.style.backgroundColor = 'rgba(255,0,0,0.1)';
        sibling.style.color = 'red';
        sibling.style.border = '2px solid red';
        sibling.firstElementChild.textContent = warningMessage;
        sibling.firstElementChild.nextElementSibling.onclick = (event)=>{
            var instance = event.target;
            instance.parentElement.style.display='none';
        }
    }
}


btn1.onclick = (event)=>{
    var formData = document.getElementsByClassName('input');
    let flag = true;
    for(index = 0; index < formData.length;index++)
    {
        if(formData[index].value == '')
        {
            flag = false;
            displayWarning(formData[index].nextElementSibling,'Please fill this field');
        }
    }
    if(!flag)
        event.checked = false;
}