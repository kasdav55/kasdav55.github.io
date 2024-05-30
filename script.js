let clickCount = 0;
let autoClickerInterval = null;
let autoClickInterval = 10000; // 10 seconds
let boostPrice = 1000;
let boostIntervalReduction = 2000; // 2 seconds
let boostActive = false;

function updateClickCount() {
    document.getElementById("clickCount").textContent = clickCount;
}

function enableAutoClicker() {
    autoClickerInterval = setInterval(function() {
        clickCount++;
        updateClickCount();
    }, autoClickInterval);
}

function buyBoost() {
    if (clickCount >= boostPrice && !boostActive) {
        clickCount -= boostPrice;
        clearInterval(autoClickerInterval);
        autoClickInterval -= boostIntervalReduction;
        enableAutoClicker();
        boostActive = true;
        document.getElementById("boostStatus").textContent = "Auto clicker boosted (1 click every " + (autoClickInterval / 1000) + " seconds)";
    }
}

document.getElementById("clickButton").addEventListener("click", function() {
    clickCount++;
    updateClickCount();
});

document.getElementById("buyBoostButton").addEventListener("click", buyBoost);
