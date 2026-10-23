// What the download page offers: the site settings and one entry per player mod (the dev=1 mod is never offered).
// Versions, file names, sizes and links are not written here: tools/publish.ps1 writes them to releases.json next to this file.
// A mod without an entry in releases.json is shown as "coming soon".
window.K3_SITE = {
    repo: 'Hawk-Games/konung3-mods',   // the public GitHub repository with the releases and the guides
    forum: '',                         // the forum topic, once it is posted (empty: not shown)
    steamGuide: ''                     // the Steam guide, once it is posted (empty: not shown)
};

// id = the mod folder (mods/<id>); langs = the game languages it has a package for
window.K3_MODS = [
    {
        id: 'visuals', langs: ['ru', 'en'],
        title: { ru: 'Visuals & Fixes', en: 'Visuals & Fixes' },
        about: {
            ru: 'Игра работает на современной Windows: окно на весь экран без падений, любое разрешение, чёткий интерфейс и шрифт, вернувшиеся текстуры огня и дыма, часы, пауза и ускорение.',
            en: 'The game runs on modern Windows: a full-screen window without crashes, any resolution, a sharp interface and font, a clock, pause and speed buttons.'
        }
    },
    {
        id: 'controls', langs: ['ru', 'en'],
        title: { ru: 'Controls', en: 'Controls' },
        about: {
            ru: 'Клавиши 1–6 выбирают героев, R меняет оружие, E достаёт и убирает его, пробел ставит паузу, WASD двигает камеру. Все клавиши настраиваются.',
            en: 'Keys 1–6 select the party, R switches weapons, E draws and sheathes them, Space pauses, WASD pans the camera. Every key can be changed.'
        }
    },
    {
        id: 'traders', langs: ['ru'],
        title: { ru: 'Traders', en: 'Traders' },
        about: {
            ru: 'Торговцы пополняют товары каждый день, лучшая Торговля отряда даёт богаче лавки, мастерство кузнеца и знахаря решает, что они продают.',
            en: 'Merchants restock every day, the party’s best trading skill fills the shops, a smith’s or healer’s mastery decides what they sell.'
        }
    },
    {
        id: 'villages', langs: ['ru'],
        title: { ru: 'Деревни', en: 'Villages' },
        about: {
            ru: '«Дела деревни» у старосты: обучение кузнеца, знахаря и стражи, посты у входов, общий сундук, жители живут своей жизнью.',
            en: 'Village management at the starosta: train smiths, healers and guards, guard posts, a village chest, residents with their own daily life.'
        }
    },
    {
        id: 'rebalance', langs: ['ru'],
        title: { ru: 'Rebalance', en: 'Rebalance' },
        about: {
            ru: 'Пауза между лечениями у каждого персонажа и более ровные критические удары.',
            en: 'A healing cooldown per character and flatter critical hits.'
        }
    },
    {
        id: 'gathering', langs: ['ru'],
        title: { ru: 'Gathering', en: 'Gathering' },
        about: {
            ru: 'Растения отрастают дольше и появляются по воле случая, а лучший знахарь отряда находит лишние травы и редкие ингредиенты.',
            en: 'Plants grow back more slowly and come and go by chance; the party’s best healer finds extra herbs and rare ingredients.'
        }
    }
];
