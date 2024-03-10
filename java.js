function CheckPasswordStrength(password)
{
    var strength=0;
    if(password.length>=8)
    {
        strength+=1;
    }

    if (/[A-Z]/.test(password)) 
    {
        strength += 1;
    }

    if (/[a-z]/.test(password)) 
    {
        strength += 1;
    }

    if (/[0-9]/.test(password)) 
    {
        strength += 1;
    }

    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password))
     {
        strength += 1;
     }
     var strengthText = "";
    switch (strength) {
        case 0:
            strengthText = "Weak";
            break;
        case 1:
            strengthText = "Moderate";
            break;
        case 2:
            strengthText = "Strong";
            break;
        default:
            strengthText = "Very Strong"; 
            break;
    }
    document.getElementById("passwordStrength").innerText = "Password strength: " + strengthText;
    return strengthText;
}
    


