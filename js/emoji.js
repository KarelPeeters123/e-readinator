let input = "\
Mr and Mrs Dursley, of number four, Privet Drive, were proud to say \
that they were perfectly normal, thank you very much. They were the last people you'd \
expect to be involved in anything strange or mysterious, because they just didn't hold with such nonsense.\
";

let array = input.split(" ");

for (let i = 0; i < array.length; i++){
    array[i] = replaceWordWithEmoji(array[i]);
}

let outputText = array.join(" ");
console.log(outputText);

function replaceWordWithEmoji (string) {
    
    let emojiMap = {
        "happy" : "😁",
        "sad" : "🙁",
        "surprised" : "😮", 
        "great" : "😎", 
        "angry" : "😡", 
        "fire" : "🔥", 
        "laughed" : "😂", 
        "please" : "🥺", 
        "love" : "❤️", 
        "cold" : "🥶", 
        "rich" : "🤑", 
        "sick" : "🤒",
        "injured" : "🤕",
        "intelligent" : "🥸",
        "shit" : "💩",
        "baby" : "👶",
        "doctor" : "👩‍⚕️",
        "detective" : "🕵️",
        "farmer" : "🧑‍🌾",
        "chef" : "👩‍🍳",
        "student" : "👩‍🎓",
        "teacher" : "🧑‍🏫",
        "police" : "👩‍✈️",
        "wizard" : "🧙‍♂️",
        "vampire" : "🧛‍♂️",
        "umbrella" : "☂️",
        "glasses" : "👓",
        "trousers" : "👖",
        "socks" : "🧦",
        "ring" : "💍",
        "dog" : "🐶",
        "cat" : "🐱",
        "bear" : "🐻",
        "bee" : "🐝",
        "moon" : "🌝",
        "rainbow" : "🌈",
        "cloud" : "☁️ ",
        "thunder" : "🌩",
        "apple" : "🍎",
        "grape" : "🍇",
        "lemon" : "🍋",
        "pear" : "🍐",
        "coconut" : "🥥",
        "avocado" : "🥑",
        "bread" : "🍞",
        "eggs" : "🍳",
        "pancakes" : "🥞",
        "four" : "4️⃣",
        "proud" : "😌",
        "thank" : "🙏",
        "normal" : "😐",
        "perfectly" : "💯",
        "people" : "🧍",
        "strange" : "😵‍💫",
        "mysterious" : "😶‍🌫️",
        "nonsense" : "🤪",
    };

    const pattern = new RegExp(
        Object.keys(emojiMap).join('|'),'g'
      );
    
    // return emojiMap equivalent of word
    return string.replace(pattern, match => emojiMap[match]);

};
