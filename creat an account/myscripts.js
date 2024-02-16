const passwordInput = document.getElementById('password');
        const passwordStrengthText = document.getElementById('password-strength');

        passwordInput.addEventListener('input', function () {
            const password = passwordInput.value;
            const strength = calculatePasswordStrength(password);
            displayPasswordStrength(strength);
        });

        function calculatePasswordStrength(password) {
            let strength = 0;

            // Add strength based on length
            strength += Math.min(password.length / 8, 1);

            // Add strength based on characters
            const regex = /[a-z]/;
            if (regex.test(password)) {
                strength += 0.5;
            }
            const regex2 = /[A-Z]/;
            if (regex2.test(password)) {
                strength += 0.5;
            }
            const regex3 = /[0-9]/;
            if (regex3.test(password)) {
                strength += 0.5;
            }
            const regex4 = /[$&+,:;=?@#|'<>.^*()%!-]/;
            if (regex4.test(password)) {
                strength += 0.5;
            }

            return Math.min(strength, 3); // Limit strength to 3 (weak, medium, strong)
        }

        function displayPasswordStrength(strength) {
            let text = '';

            switch (strength) {
                case 0:
                case 1:
                    text = 'Weak';
                    passwordStrengthText.className = 'password-strength weak';
                    break;
                case 2:
                    text = 'Medium';
                    passwordStrengthText.className = 'password-strength medium';
                    break;
                case 3:
                    text = 'Strong';
                    passwordStrengthText.className = 'password-strength strong';
                    break;
            }

            passwordStrengthText.textContent = `Password Strength: ${text}`;
        }