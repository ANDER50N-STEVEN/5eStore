// ===== UI.JS =====
// Shared UI utilities, tab switching, dice rolling, and notifications

// ===== NOTIFICATION STYLES =====
// Injected once on load so notifications animate correctly

const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to   { transform: translateX(0);     opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0);     opacity: 1; }
        to   { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(notificationStyles);

// ===== SAVE NOTIFICATION =====

function showSaveNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000;
        font-weight: bold;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// ===== TAB SWITCHING =====

function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    document.getElementById(tabName + '-tab').classList.add('active');
    event.target.classList.add('active');

    const shopContent = document.getElementById('shop-content');
    const tabsToHideShop = ['itemlist', 'homebrew', 'savedstores', 'storetypes', 'loot'];

    if (tabsToHideShop.includes(tabName)) {
        shopContent.style.display = 'none';
    } else {
        shopContent.style.display = 'block';
    }

    if (tabName === 'itemlist') {
        populateItemList();
    } else if (tabName === 'homebrew') {
        populateHomebrewList();
    } else if (tabName === 'savedstores') {
        document.getElementById('savedstores-tab').innerHTML = displaySavedStores();
    } else if (tabName === 'storetypes') {
        populateStoreTypesList();
    }
}

// ===== DICE ROLLING =====

function rollDice(notation) {
    notation = notation.trim().toUpperCase().replace(/\s/g, '');

    if (notation === '0' || notation === '') return 0;

    const match = notation.match(/^(\d+)?D(\d+)([+-]\d+)?$/);
    if (!match) throw new Error(`Invalid dice notation: ${notation}`);

    const numDice  = parseInt(match[1] || '1');
    const diceSize = parseInt(match[2]);
    const modifier = parseInt(match[3] || '0');

    if (numDice < 1 || numDice > 100) throw new Error(`Invalid number of dice: ${numDice}`);
    if (diceSize < 2 || diceSize > 100) throw new Error(`Invalid dice size: ${diceSize}`);

    let total = 0;
    for (let i = 0; i < numDice; i++) {
        total += Math.floor(Math.random() * diceSize) + 1;
    }

    return Math.max(0, total + modifier);
}

function validateDiceNotation(notation) {
    notation = notation.trim().toUpperCase().replace(/\s/g, '');

    if (notation === '0' || notation === '') return true;

    const match = notation.match(/^(\d+)?D(\d+)([+-]\d+)?$/);
    if (!match) return false;

    const numDice  = parseInt(match[1] || '1');
    const diceSize = parseInt(match[2]);

    return numDice >= 1 && numDice <= 100 && diceSize >= 2 && diceSize <= 100;
}

// ===== CITY DEFAULTS =====

function applyCityDefaults(size) {
    const config = cityDiceDefaults[size];
    if (!config) return;

    document.getElementById('max-mundane').value   = config.mundane;
    document.getElementById('max-common').value    = config.common;
    document.getElementById('max-uncommon').value  = config.uncommon;
    document.getElementById('max-rare').value      = config.rare;
    document.getElementById('max-veryrare').value  = config.veryRare;
    document.getElementById('max-legendary').value = config.legendary;
}

// ===== CUSTOM LIMITS TOGGLE =====

function toggleCustomLimits() {
    const checkbox  = document.getElementById('use-custom-limits');
    const container = document.getElementById('custom-limits-container');

    if (checkbox.checked) {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
        const settlementSize = document.getElementById('settlement-size').value;
        applyCityDefaults(settlementSize);
    }
}
