function addEmoji(input) {
    let array = input.split(" ");

    for (let i = 0; i < array.length; i++){
        array[i] = replaceWordWithEmoji(array[i]);
    }

    let outputText = array.join(" ");
    return outputText;

}
function replaceWordWithEmoji (string) {
    
    let emojiMap = {
        "happy" : "ð",
        "sad" : "ð",
        "surprised" : "ðŪ", 
        "great" : "ð", 
        "angry" : "ðĄ", 
        "fire" : "ðĨ", 
        "laughed" : "ð", 
        "please" : "ðĨš", 
        "love" : "âĪïļ", 
        "cold" : "ðĨķ", 
        "rich" : "ðĪ", 
        "sick" : "ðĪ",
        "injured" : "ðĪ",
        "intelligent" : "ðĨļ",
        "shit" : "ðĐ",
        "baby" : "ðķ",
        "doctor" : "ðĐââïļ",
        "detective" : "ðĩïļ",
        "farmer" : "ð§âðū",
        "chef" : "ðĐâðģ",
        "student" : "ðĐâð",
        "teacher" : "ð§âðŦ",
        "police" : "ðĐââïļ",
        "wizard" : "ð§ââïļ",
        "vampire" : "ð§ââïļ",
        "umbrella" : "âïļ",
        "glasses" : "ð",
        "trousers" : "ð",
        "socks" : "ð§Ķ",
        "ring" : "ð",
        "dog" : "ðķ",
        "cat" : "ðą",
        "bear" : "ðŧ",
        "bee" : "ð",
        "moon" : "ð",
        "rainbow" : "ð",
        "cloud" : "âïļ ",
        "thunder" : "ðĐ",
        "apple" : "ð",
        "grape" : "ð",
        "lemon" : "ð",
        "pear" : "ð",
        "coconut" : "ðĨĨ",
        "avocado" : "ðĨ",
        "bread" : "ð",
        "eggs" : "ðģ",
        "pancakes" : "ðĨ",
        "four" : "4ïļâĢ",
        "proud" : "ð",
        "thank" : "ð",
        "normal" : "ð",
        "perfectly" : "ðŊ",
        "people" : "ð§",
        "strange" : "ðĩâðŦ",
        "mysterious" : "ðķâðŦïļ",
        "nonsense" : "ðĪŠ",
    };

    const pattern = new RegExp(
        Object.keys(emojiMap).join('|'),'g'
      );
    
    // return emojiMap equivalent of word
    return string.replace(pattern, match => emojiMap[match]);

};

