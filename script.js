console.log("HELLO YOOO!")

const words = [
    "CODE","HACK","CLUB","MOON","SPACE","DEVELPMENT","GAMES","SONG","MANGO","RANDOM",
    "LOVE","FOCUS","PARK","REVIEW","SUBMIT","TEACHER","FOOTBALL","BILLE","WEEK","MONDAY",
    "LAPTOP","JAVASCRIPT","LEFT","COME","CHAIR","KNOWLEDGE","LOGIC","SINGAL","NETWORK","PIXEL",
    "INTERVAL","START","DOCUMENT","INPUT","ELEMENT","DISPLAY","SYSTEM","VECTOR","CODING","MATRIX",
    "NEXT","FUNCTION","CURRENT","MATH","FLOOR","LENGHT",
    "CYBER", "MATRIX", "SYSTEM", "HACKER", "GLITCH", "CODING", "VECTOR", "PIXEL", "SIGNAL", "FIREWALL",
    "BUFFER", "CONSOLE", "SCRIPT", "PROTOCOL", "NETWORK", "BINARY", "SERVER", "CLIENT", "DATABASE", "ROUTER",
    "NODE", "PROMPT", "CANVAS", "LAYOUT", "STYLES", "BORDER", "CENTER", "WINDOW", "HEADER", "FOOTER",
    "SCRIPT", "ACTION", "BUTTON", "EVENT", "LISTEN", "SELECT", "OBJECT", "STRING", "NUMBER", "ARRAY",
    "METHOD", "PARAMS", "RESULT", "ENGINE", "MEMORY", "STORAGE", "ACCESS", "SYSTEM", "DOMAIN", "HOST",
    "GITHUB", "VSCODE", "PYTHON", "REACT", "ANGULAR", "MARKDOWN", "TERMINAL", "COMMAND", "DEPLOY", "PULL",
    "PUSH", "COMMIT", "BRANCH", "MERGE", "REPOS", "CLONE", "FETCH", "STATIC", "DYNAMIC", "SOURCE",
    "BUILD", "OUTPUT", "VENDOR", "MODULE", "IMPORT", "EXPORT", "RETURN", "IFELSE", "SWITCH", "WHILE",
    "FORLOOP", "BREAK", "CONTINUE", "BOOLEAN", "NULL", "UNDEFINED", "PROMISE", "ASYNC", "AWAIT", "THEN",
    "CATCH", "THROW", "ERROR", "DEBUG", "LOGGER", "CONSOLE", "STATUS", "STYLING", "PADDING", "MARGIN",
    "NEON", "SHADOW", "CYBORG", "ROBOT", "DRONE", "PULSE", "LASER", "QUANTUM", "SHIELD", "ORBIT",
    "GALAXY", "ROCKET", "SENSOR", "STREAM", "CIRCUIT", "SILICON", "KERNEL", "VORTEX", "ENERGY", "PLASMA",
    "TITAN", "COSMO", "ASTRO", "RADAR", "STEALTH", "HYPER", "SONIC", "FUSION", "STATIC", "GRAVITY",
    "WARP", "SPEED", "LIGHT", "BEAM", "TARGET", "LOCK", "ATTACK", "DEFEND", "SHIELD", "ARMOR",
    "WEAPON", "MECH", "PULSE", "SIGNAL", "SATELLITE", "CORE", "MODULE", "ALPHA", "BETA", "DELTA",
    "GAMER", "ARCADE", "PLAYER", "SCORE", "LEVEL", "STAGE", "QUEST", "POWER", "COMBO", "BOOST",
    "STRIKE", "SMASH", "SPIKE", "BLOCK", "DEFENSE", "SERVE", "LIBERO", "MATCH", "POINT", "VICTORY",
    "CHAMP", "KNOCK", "DODGE", "SLIDE", "SPRINT", "SPEED", "TURBO", "DRIFT", "ACCEL", "FORCE",
    "RAPID", "FAST", "ALERT", "READY", "FOCUS", "AIM", "FIRE", "HIT", "MISS", "RETRY",
    "START", "FINISH", "FINAL", "RECORD", "RANK", "LEADER", "BOARD", "CROWN", "TROPHY", "WINNER"
];

const wordDisplay = document.getElementById('word-display');
const textDisplay = document.getElementById('type-input');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('time');
const startbtn = document.getElementById('start-btn');

let currentWord = "";
let score = 0;
let timeLeft = 60;
let timerInterval;


function getNextWord () {
    const randomIndex = Math.floor(Math.random ()* words.length);
    currentWord = words[randomIndex];
    wordDisplay.textContent =currentWord;
}

textDisplay.addEventListener('input', () => {
    const userTyped = textDisplay.value.toUpperCase().trim();

    if (userTyped === currentWord){
        score += 1;
        scoreDisplay.textContent = score;
        textDisplay.value = "";
        getNextWord();
    }
});
startbtn.addEventListener('click', () =>{
    score = 0;
    timeLeft = 60;
    scoreDisplay.textContent = score;
    timerDisplay.textContent =timeLeft;

    textDisplay.disabled = false;
    textDisplay.value = "";
    textDisplay.focus();

    getNextWord();

    clearInterval(timerInterval);
    timerInterval = setInterval( () =>{
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if(timeLeft === 0) {
            clearInterval(timerInterval);
            wordDisplay.textContent = "Game Over!";
            textDisplay.disabled = true;
        }
    },1000)
});

