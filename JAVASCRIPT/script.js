function showResult() {
    let div = document.getElementById('abc');
    div.innerHTML = '<input type="text" id="charInput" />';

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let char = document.getElementById('charInput').value;

    if (vowels.includes(char)) {
        div.innerHTML += '<p>It is a vowel</p>';
    } else {
        div.innerHTML += '<p>It is a consonant</p>';
    }
}

