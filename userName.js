var userName = window.prompt('Enter Username');

function hasNumber(myString) {

    return /\d/.test(myString);
}

function isOdd(num) {
    return num % 2;
}

function changeName(name) {
    if (hasNumber(name)) {
        var array = name.split('');
        for (var i = 0; i < array.length; i++) {
            if (typeof array[i] != 'number') {
                if (isOdd(i)) {
                    array[i] = array[i].toLowerCase();
                } else {
                    array[i] = array[i].toUpperCase();
                }
                var newName = array.join('');

            }
        }
        return newName;
    } else {

        return name.split('').reverse().join('');
    }
}

alert(changeName(userName));

