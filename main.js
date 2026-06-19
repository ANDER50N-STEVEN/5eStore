// ===== MAIN.JS =====
// Initialization and page load logic

window.addEventListener('DOMContentLoaded', async function() {

    // ===== LOAD DATABASES =====
    await loadItemDatabases();

    // ===== LOAD SAVED EDITS AND SETTINGS =====
    loadItemEditsFromLocalStorage();
    loadCustomStoreTypes();
    loadCustomCreatureTypes();

    // ===== BUILD DROPDOWNS =====
    rebuildStoreTypeDropdown();
    addCreatureRow();

    // ===== LOAD CUSTOM TAGS =====
    const savedCustomTags = localStorage.getItem('dnd-custom-tags');
    if (savedCustomTags) {
        try {
            const customTags = JSON.parse(savedCustomTags);
            customTags.forEach(tag => {
                if (!commonTags.includes(tag)) {
                    commonTags.push(tag);
                }
            });
            commonTags.sort();
        } catch (e) {
            console.error('Error loading custom tags:', e);
        }
    }

    // ===== SETTLEMENT SIZE LISTENER =====
    const citySelect = document.getElementById('settlement-size');
    citySelect.addEventListener('change', (e) => {
        applyCityDefaults(e.target.value);
    });
    applyCityDefaults(citySelect.value);

    // ===== LOAD SAVED ITEMS FROM LOCALSTORAGE =====
    // Legacy support for old saves that stored entire item database
    const savedItems = localStorage.getItem('dnd-items');
    if (savedItems) {
        try {
            const parsed = JSON.parse(savedItems);
            if (parsed.length > 0) {
                itemDatabase.length = 0;
                itemDatabase.push(...parsed);
            }
        } catch (e) {
            console.error('Error loading legacy saved items:', e);
        }
    }

    console.log('Shop Generator initialized successfully.');
});
