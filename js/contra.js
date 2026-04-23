/**
 * Genera una contraseña segura.
 * Aplica un límite estricto de 48 caracteres por seguridad.
 */
function generateSecurePassword(length, includeSymbols = false) {
    const safeLength = Math.min(Math.max(length, 4), 48); 
    const baseChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    
    const pool = includeSymbols ? (baseChars + symbolChars) : baseChars;
    let password = "";
    
    for (let i = 0; i < safeLength; i++) {
        password += pool.charAt(Math.floor(Math.random() * pool.length));
    }
    return password;
}

/** Evalúa la robustez basándose en criterios técnicos */
function evaluateStrength(pass) {
    let score = 0;
    if (pass.length > 10) score++;
    if (pass.length > 16) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;

    if (pass.length < 8) return { text: "Muy Débil", color: "#ef476f", width: "20%" };
    if (score <= 2) return { text: "Débil", color: "#ef476f", width: "40%" };
    if (score <= 4) return { text: "Aceptable", color: "#ffd166", width: "70%" };
    return { text: "Fuerte / Inhackeable", color: "#06d6a0", width: "100%" };
}

// Interacción con la Interfaz
document.addEventListener('DOMContentLoaded', () => {
    const inputLength = document.getElementById('passLength');
    const btn = document.getElementById('generateBtn');
    const result = document.getElementById('result');
    const bar = document.getElementById('strengthBar');
    const label = document.getElementById('strengthText');

    // BLOQUEO MANUAL: Si el usuario escribe más de 48, se corrige solo
    inputLength.addEventListener('input', () => {
        if (parseInt(inputLength.value) > 48) inputLength.value = 48;
    });

    btn.addEventListener('click', () => {
        const len = parseInt(inputLength.value) || 12;
        const sym = document.getElementById('includeSymbols').checked;
        
        const newPass = generateSecurePassword(len, sym);
        result.value = newPass;

        const info = evaluateStrength(newPass);
        bar.style.width = info.width;
        bar.style.backgroundColor = info.color;
        label.innerText = `Seguridad: ${info.text}`;
    });
});