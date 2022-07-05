function highestOccurence (str) {
    const lowerCased = str.toLowerCase();
    let max = 0;
    let output = '';
    

    for (let i=0; i<lowerCased.length; i++) {
        let char = lowerCased[i];
        let count = 0;
        
        for (let j=0; j<lowerCased.length; j++) {
            if (char === lowerCased[j]) {
                count = count + 1;
            }
            if (count > max) {
                max = count;
                output = lowerCased[j];
            }
       }       
    }

    return output;
}

const t = highestOccurence('Character');
console.log(t)