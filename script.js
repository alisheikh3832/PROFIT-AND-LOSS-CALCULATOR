function calculateProfitOrLoss() {
    var revenue = document.getElementById('revenue').value;
    var cost = document.getElementById('cost').value;
    
    if (revenue && cost) {
        var profitOrLoss = revenue - cost;
        var resultText = '';

        if (profitOrLoss > 0) {
            resultText = 'Profit: ' + profitOrLoss;
            document.getElementById('result').style.color = 'green';
        } else if (profitOrLoss < 0) {
            resultText = 'Loss: ' + Math.abs(profitOrLoss);
            document.getElementById('result').style.color = 'red';
        } else {
            resultText = 'No profit, no loss';
            document.getElementById('result').style.color = 'gray';
        }

        document.getElementById('result').innerText = resultText;
    } else {
        alert('Please enter both revenue and cost');
    }
}
