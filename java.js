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

     return strength;
    
}
