fname.onchange = (event) => {
    var pattern = /^[A-za-z]{4,}$/;
    var firstName = event.target;
    var sibling = firstName.nextElementSibling;
    if(pattern.test(firstName.value))
    {
        firstName.style.backgroundColor= 'rgba(0,255,0,0.1)';
        firstName.style.border = '2px solid green'; 
    }
    else
    {
        sibling.style.display = 'flex';
        sibling.style.backgroundColor = 'rgba(255,0,0,0.1)';
        sibling.style.border = '2px solid red';
        sibling.style.color = 'red';
        sibling.firstElementChild.textContent = 'Name should contains only characters.';
        firstName.value = '';
        sibling.firstElementChild.nextElementSibling.onclick = (event) =>{
            var instance = event.target;
            instance.parentElement.style.display = 'none';
        };
    }
};

lname.onchange = (event) => {
    var pattern = /^[A-za-z]{4,}$/;
    var lastName = event.target;
    var sibling = lastName.nextElementSibling;
    if(pattern.test(lastName.value))
    {
        lastName.style.backgroundColor= 'rgba(0,255,0,0.1)';
        lastName.style.border = '2px solid green'; 
    }
    else
    {
        sibling.style.display = 'flex';
        sibling.style.backgroundColor = 'rgba(255,0,0,0.1)';
        sibling.style.border = '2px solid red';
        sibling.style.color = '	ICIC0001912red';
        sibling.firstElementChild.textContent = 'Name should contains only characters.';
        lastName.value = '';
        sibling.firstElementChild.nextElementSibling.onclick = (event) =>{
            var instance = event.target;
            instance.parentElement.style.display = 'none';
        };
    }
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
        sibling.style.display = 'flex';
        sibling.style.backgroundColor = 'rgba(255,0,0,0.1)';
        sibling.style.color = 'red';
        sibling.style.border = '2px solid red';
        sibling.firstElementChild.textContent = 'Age should be in between 18 to 60';
        dateofBirth.value='';
        sibling.firstElementChild.nextElementSibling.onclick = (event) =>{
            var instance = event.target;
            instance.parentElement.style.display = 'none';
        };
    }
};

mno.onchange = (event) => {
    var pattern = /^[6789][0-9]{9}$/;
    var mobileNumber = event.target;
    var sibling = mobileNumber.nextElementSibling;
    if(pattern.test(mobileNumber.value))
    {
        mobileNumber.style.backgroundColor = 'rgba(0,255,0,0.1)';
        mobileNumber.style.border = '2px solid green';
    }
    else
    {
        sibling.style.display = 'flex';
        sibling.style.backgroundColor = 'rgba(255,0,0,0.1)';
        sibling.style.color = 'red';
        sibling.style.border = '2px solid red';
        sibling.firstElementChild.textContent = 'Mobile should contains only 10 digits';
        mobileNumber.value='';
        sibling.firstElementChild.nextElementSibling.onclick = (event) =>{
            var instance = event.target;
            instance.parentElement.style.display = 'none';
        };
    }};

email.onchange = (event) => {
    var pattern = /^[A-Za-z0-9]{4,}@[A-Za-z]{3,}\.[A-Za-z]{2,}$/;
    var email = event.target;
    var sibling = email.nextElementSibling;
    if(pattern.test(email.value))
    {
        email.style.backgroundColor = 'rgba(0,255,0,0.1)';
        email.style.border = '2px solid green';
    }
    else
    {
        sibling.style.display = 'flex';
        sibling.style.backgroundColor = 'rgba(255,0,0,0.1)';
        sibling.style.color = 'red';
        sibling.style.border = '2px solid red';
        sibling.firstElementChild.textContent = 'Email address should be in Example123@domain.com';
        email.value='';
        sibling.firstElementChild.nextElementSibling.onclick = (event) =>{
            var instance = event.target;
            instance.parentElement.style.display = 'none';
        };
    }
};

drivelink.onchange = (event) => {
    var pattern = /^https:\/\/drive.google.com\/file\/[A-Za-z0-9]{5,}$/;
    var url = event.target;
    var sibling = url.nextElementSibling;
    if(pattern.test(url.value))
    {
        url.style.backgroundColor = 'rgba(0,255,0,0.1)';
        url.style.border = '2px solid green';
    }
    else
    {
        sibling.style.display = 'flex';
        sibling.style.backgroundColor = 'rgba(255,0,0,0.1)';
        sibling.style.color = 'red';
        sibling.style.border = '2px solid red';
        sibling. firstElementChild.textContent = 'Invalid URL';
        url.value='';
    }
};

