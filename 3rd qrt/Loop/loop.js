const num = document.getElementById('numInput');
const numInputBtn = document.getElementById('count');
const resultDiv = document.getElementById('countResult');
const clearCountBtn = document.getElementById('clearCount');

numInputBtn.addEventListener('click', () => {
    const n = Number(num.value);
    if (isNaN(n) || n < 1 || n > 1000) {

        resultDiv.textContent = 'Please enter a valid number number (1 to 1000).';
        resultDiv.style.color = 'crimson';
        return;
    }

    let output = '';
    for (let i = 1; i <= n; i++) {
       output += `Counting: ${i}\n`;
    }
    resultDiv.style.color = 'green';
    resultDiv.textContent = output
    // resultDiv.innerHTML = output.trim();
}); 