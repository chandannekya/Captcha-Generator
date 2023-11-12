
    const capscSc = document.querySelector(".capsc.sc input");
    const refreshButton = document.querySelector(".refresh");
    const submitButton = document.querySelector(".capsc.button button");
    const message = document.querySelector(".message");
    const captchaInputBox = document.querySelector(".capsc.in input");

    let captcha = null;

    const generateCaptcha = () => {
        const randomString = Math.random().toString(36).substring(2, 7);
        const randomStringArray = randomString.split("");
        const changeString = randomStringArray.map((char) => 
            Math.random() > 0.5 ? char.toUpperCase() : char
        );
        captcha = changeString.join("   ");
        capscSc.value = captcha;
        console.log(captcha);
    };

    const refreshBtnClick = () => {
        generateCaptcha();
        captchaInputBox.value = "";
        captchaKeyUpValidate();
    };

    const captchaKeyUpValidate = () => {
        const captchaText = captcha.replace(/\s/g, "");
        captchaInputBox.value.trim() !== captchaText;
        

        if (!captchaInputBox.value) message.classList.remove("active");
    };

    const submitBtnClick = () => {
        const captchaText = captcha.replace(/\s/g, "");
        message.classList.add("active");
    
        if (captchaInputBox.value === captchaText) {
            message.innerText = "Entered captcha is correct";
            message.style.color = "#222620";
            submitButton.disabled = false; // Enable the button if captcha is correct
        } else {
            
            refreshBtnClick();
            message.classList.add("active");
            message.innerText = "Entered captcha is not correct";
            message.style.color = "#FF2525";
            
           

        }
    };
    
    // Call captchaKeyUpValidate on every keyup event within the captcha input field
    captchaInputBox.addEventListener("keyup", captchaKeyUpValidate);

    // Call submitBtnClick when the submit button is clicked
    submitButton.addEventListener("click", submitBtnClick);

    refreshButton.addEventListener("click", refreshBtnClick);

    generateCaptcha();

