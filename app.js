// Download page: three questions (where the game was bought, its language, which mods), then the matching zips and the install steps.
// The mod list is mods.js; the published files are releases.json (written by tools/publish.ps1).
(function () {
    'use strict';
    var SITE = window.K3_SITE, MODS = window.K3_MODS;

    var T = {
        ru: {
            brand: 'Konung 3 Mods',
            title: 'Моды для «Князь 3: Новая династия»',
            intro: 'Выберите свою версию игры, и здесь появятся архивы, которые к ней подходят, и как их установить.',
            q_edition: 'Где куплена игра',
            opt_other: 'Другой магазин',
            other_note: 'Моды сделаны для версий GOG и Steam. Загрузчик проверяет Konung3.exe и в другой версии ничего не делает. Напишите на форуме, какая у вас версия.',
            q_lang: 'На каком языке игра',
            game_ru: 'Русский',
            game_en: 'Английский',
            hint_gog: 'Язык виден по надписям в главном меню игры.',
            hint_steam: 'В Steam: правый щелчок по игре → «Свойства» → «Язык».',
            q_mods: 'Какие моды поставить',
            ru_only: 'Только для русской версии игры',
            soon: 'Скоро',
            more: 'Подробнее о моде',
            version: 'версия',
            need_visuals: 'Пауза на пробел в Controls работает только вместе с Visuals & Fixes.',
            pick_one: 'Отметьте хотя бы один мод.',
            no_list: 'Не удалось загрузить список файлов. Обновите страницу чуть позже.',
            q_result: 'Архивы для вашей игры',
            sha: 'Контрольная сумма SHA-256:',
            download: 'Скачать',
            mb: 'МБ',
            vt: 'проверить в VirusTotal',
            install_title: 'Установка',
            i_download: 'Скачайте архивы выше.',
            i_folder_gog: 'Откройте папку игры (там лежит Konung3.exe). В GOG Galaxy: игра → кнопка настроек → «Управление установкой» → «Показать папку».',
            i_folder_steam: 'Откройте папку игры (там лежит Konung3.exe). В Steam: правый щелчок по игре → «Управление» → «Просмотреть локальные файлы».',
            i_unzip: 'Распакуйте каждый архив прямо в эту папку, рядом с Konung3.exe. Если система спросит о замене <code>dinput8.dll</code> или <code>loader.ini</code>, соглашайтесь: во всех архивах они одинаковые.',
            i_setup_steam: 'Дважды щёлкните <code>visuals-setup.bat</code> в папке игры. <b>В Steam это обязательно:</b> скрипт отключает лаунчер Fulqrum, с которым мод не работает. После «Проверки целостности файлов» или обновления игры запустите его снова.',
            i_setup_gog: 'Дважды щёлкните <code>visuals-setup.bat</code> в папке игры: он проверит, что архив подходит к вашей игре.',
            i_play: 'Запускайте игру как обычно.',
            remove_title: 'Удаление',
            r_one: 'Один мод: удалите его папку в <code>mods</code>, например <code>mods\\controls</code>.',
            r_all: 'Все моды сразу: удалите <code>dinput8.dll</code> и папку <code>mods</code>.',
            r_visuals: 'Visuals & Fixes: пункт «Удалить» в меню <code>visuals-setup.bat</code> (в Steam он возвращает и лаунчер).',
            r_files: 'Файлы игры моды не меняют, всё происходит в памяти (кроме <code>launcher.ini</code> в Steam, его меняет <code>visuals-setup.bat</code>).',
            av_title: 'Если антивирус ругается',
            av_text: 'Моды загружаются через файл dinput8.dll рядом с игрой, так устроено большинство модов для старых игр. Некоторые антивирусы считают такой файл подозрительным. У каждого архива выше есть контрольная сумма SHA-256 и ссылка на его проверку в VirusTotal.',
            fb_title: 'Ошибки и пожелания',
            fb_text: 'Напишите в теме на форуме или в комментариях к руководству в Steam. Если что-то не работает, приложите файлы mods\\logs\\loader.log, mods\\logs\\events.log и message.log из папки игры.',
            fb_forum: 'Тема на форуме',
            fb_steam: 'Руководство в Steam',
            fb_github: 'GitHub (нужна учётная запись)',
            foot: 'Неофициальные моды, сделанные поклонником игры. «Князь 3» принадлежит её правообладателям.'
        },
        en: {
            brand: 'Konung 3 Mods',
            title: 'Mods for Konung 3: Ties of the Dynasty',
            intro: 'Pick your edition of the game and the archives that fit it appear here, with how to install them.',
            q_edition: 'Where you bought the game',
            opt_other: 'Another store',
            other_note: 'The mods are made for the GOG and Steam editions. The loader checks Konung3.exe and does nothing in another edition. Tell us on the forum which edition you have.',
            q_lang: 'Which language the game is in',
            game_ru: 'Russian',
            game_en: 'English',
            hint_gog: 'You can tell by the text of the game’s main menu.',
            hint_steam: 'In Steam: right-click the game → Properties → Language.',
            q_mods: 'Which mods to install',
            ru_only: 'Russian game only',
            soon: 'Coming soon',
            more: 'About this mod',
            version: 'version',
            need_visuals: 'The Space pause of Controls works only together with Visuals & Fixes.',
            pick_one: 'Tick at least one mod.',
            no_list: 'The list of files could not be loaded. Please reload the page a bit later.',
            q_result: 'Archives for your game',
            sha: 'SHA-256 checksum:',
            download: 'Download',
            mb: 'MB',
            vt: 'check on VirusTotal',
            install_title: 'Install',
            i_download: 'Download the archives above.',
            i_folder_gog: 'Open the game folder (the one with Konung3.exe). In GOG Galaxy: the game → settings button → Manage installation → Show folder.',
            i_folder_steam: 'Open the game folder (the one with Konung3.exe). In Steam: right-click the game → Manage → Browse local files.',
            i_unzip: 'Unzip every archive straight into that folder, next to Konung3.exe. If Windows asks to replace <code>dinput8.dll</code> or <code>loader.ini</code>, say yes: they are the same in every archive.',
            i_setup_steam: 'Double-click <code>visuals-setup.bat</code> in the game folder. <b>On Steam this is required:</b> it turns off the Fulqrum launcher, which the mod does not work with. Run it again after Verify integrity of game files or a game update.',
            i_setup_gog: 'Double-click <code>visuals-setup.bat</code> in the game folder: it checks that the archive fits your game.',
            i_play: 'Start the game as usual.',
            remove_title: 'Uninstall',
            r_one: 'One mod: delete its folder in <code>mods</code>, for example <code>mods\\controls</code>.',
            r_all: 'All mods at once: delete <code>dinput8.dll</code> and the <code>mods</code> folder.',
            r_visuals: 'Visuals & Fixes: Uninstall in the menu of <code>visuals-setup.bat</code> (on Steam it also turns the launcher back on).',
            r_files: 'The mods change no game files, everything happens in memory (except <code>launcher.ini</code> on Steam, changed by <code>visuals-setup.bat</code>).',
            av_title: 'If your antivirus complains',
            av_text: 'The mods load through a dinput8.dll file next to the game, the way most mods for old games work. Some antivirus programs find such a file suspicious. Every archive above has its SHA-256 checksum and a link to its VirusTotal check.',
            fb_title: 'Bugs and wishes',
            fb_text: 'Write in the forum topic or in the comments of the Steam guide. If something does not work, attach mods\\logs\\loader.log, mods\\logs\\events.log and message.log from the game folder.',
            fb_forum: 'Forum topic',
            fb_steam: 'Steam guide',
            fb_github: 'GitHub (needs an account)',
            foot: 'Unofficial mods made by a fan of the game. Konung 3 belongs to its rights holders.'
        }
    };

    var state = { lang: 'ru', edition: null, game: null, picked: {} };
    var releases = null, releasesFailed = false;

    function $(id) { return document.getElementById(id); }
    function t(key) { return T[state.lang][key]; }
    function el(tag, cls, html) {
        var e = document.createElement(tag);
        if (cls) e.className = cls;
        if (html != null) e.innerHTML = html;
        return e;
    }
    function released(id) { return releases && releases.mods && releases.mods[id]; }
    function guideUrl(mod) {
        var lang = state.game === 'en' && mod.langs.indexOf('en') >= 0 ? 'en' : 'ru';
        return 'https://github.com/' + SITE.repo + '/blob/main/guides/' + mod.id + '.' + lang + '.md';
    }

    function initialLang() {
        try { var saved = localStorage.getItem('k3-lang'); if (saved === 'ru' || saved === 'en') return saved; } catch (e) { }
        return (navigator.language || '').toLowerCase().indexOf('ru') === 0 ? 'ru' : 'en';
    }

    function setLang(lang) {
        state.lang = lang;
        try { localStorage.setItem('k3-lang', lang); } catch (e) { }
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-t]').forEach(function (e) { e.innerHTML = t(e.getAttribute('data-t')); });
        document.querySelectorAll('[data-lang]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang)); });
        document.title = t('title');
        render();
    }

    function choose(group, value) {
        state[group] = value;
        document.querySelectorAll('[data-group="' + group + '"] button').forEach(function (b) {
            b.setAttribute('aria-pressed', String(b.getAttribute('data-value') === value));
        });
        render();
    }

    function renderMods() {
        var list = $('mod-list');
        // the rows are rebuilt on every change: keep the keyboard focus on the same checkbox
        var focused = list.contains(document.activeElement) ? document.activeElement.getAttribute('data-mod') : null;
        list.innerHTML = '';
        MODS.forEach(function (mod) {
            var fits = mod.langs.indexOf(state.game) >= 0;
            var rel = released(mod.id);
            var usable = fits && rel && rel.files && rel.files[state.game];
            if (!usable) delete state.picked[mod.id];
            var row = el('label', 'mod' + (usable ? '' : ' off'));
            var box = el('input');
            box.type = 'checkbox';
            box.id = 'mod-' + mod.id;
            box.setAttribute('data-mod', mod.id);
            box.disabled = !usable;
            box.checked = !!state.picked[mod.id];
            box.addEventListener('change', function () {
                if (box.checked) state.picked[mod.id] = true; else delete state.picked[mod.id];
                render();
            });
            row.appendChild(box);
            var name = el('span', 'name');
            name.textContent = mod.title[state.lang] + ' ';
            if (rel) name.appendChild(el('span', 'ver', t('version') + ' ' + rel.version));
            row.appendChild(name);
            row.appendChild(el('span', 'about')).textContent = mod.about[state.lang];
            if (!fits) row.appendChild(el('span', 'tag', t('ru_only')));
            else if (!rel) row.appendChild(el('span', 'tag', releasesFailed ? t('no_list') : t('soon')));
            var more = el('a', 'more');
            more.href = guideUrl(mod);
            more.target = '_blank';
            more.rel = 'noopener';
            more.textContent = t('more');
            if (rel) row.appendChild(more);
            list.appendChild(row);
        });
        if (focused && $('mod-' + focused)) $('mod-' + focused).focus();
        var note = $('mods-note');
        var picked = Object.keys(state.picked);
        if (state.picked.controls && !state.picked.visuals) { note.textContent = t('need_visuals'); note.hidden = false; }
        else if (!picked.length && releases) { note.textContent = t('pick_one'); note.hidden = false; }
        else note.hidden = true;
    }

    function renderResult() {
        var downloads = $('downloads');
        downloads.innerHTML = '';
        MODS.forEach(function (mod) {
            if (!state.picked[mod.id]) return;
            var rel = released(mod.id), file = rel.files[state.game];
            var row = el('div', 'dl');
            var info = el('div');
            info.appendChild(el('div', 'file')).textContent = mod.title[state.lang] + ', ' + t('version') + ' ' + rel.version;
            info.appendChild(el('div', 'meta')).textContent = file.name + ', ' +
                (file.size / 1048576).toLocaleString(state.lang, { maximumFractionDigits: 1 }) + ' ' + t('mb');
            var metaLine = el('div', 'meta');
            metaLine.textContent = t('sha') + ' ' + file.sha256 + ', ';
            var vt = el('a');
            vt.href = 'https://www.virustotal.com/gui/file/' + file.sha256;
            vt.target = '_blank';
            vt.rel = 'noopener';
            vt.textContent = t('vt');
            metaLine.appendChild(vt);
            info.appendChild(metaLine);
            row.appendChild(info);
            var btn = el('a', 'btn');
            btn.href = file.url;
            btn.textContent = t('download');
            row.appendChild(btn);
            downloads.appendChild(row);
        });
        var steam = state.edition === 'steam';
        var steps = [t('i_download'), t(steam ? 'i_folder_steam' : 'i_folder_gog'), t('i_unzip')];
        if (state.picked.visuals) steps.push(t(steam ? 'i_setup_steam' : 'i_setup_gog'));
        steps.push(t('i_play'));
        $('install').innerHTML = steps.map(function (s) { return '<li>' + s + '</li>'; }).join('');
        var remove = [t('r_one'), t('r_all')];
        if (state.picked.visuals) remove.push(t('r_visuals'));
        remove.push(t('r_files'));
        $('remove').innerHTML = remove.map(function (s) { return '<li>' + s + '</li>'; }).join('');
    }

    function renderFeedback() {
        var links = [];
        if (SITE.forum) links.push([SITE.forum, t('fb_forum')]);
        if (SITE.steamGuide) links.push([SITE.steamGuide, t('fb_steam')]);
        links.push(['https://github.com/' + SITE.repo + '/issues', t('fb_github')]);
        $('feedback-links').innerHTML = links.map(function (l) {
            return '<li><a href="' + l[0] + '" target="_blank" rel="noopener">' + l[1] + '</a></li>';
        }).join('');
    }

    function render() {
        var supported = state.edition === 'gog' || state.edition === 'steam';
        $('edition-other').hidden = state.edition !== 'other';
        $('step-lang').hidden = !supported;
        $('lang-hint').textContent = state.edition === 'steam' ? t('hint_steam') : t('hint_gog');
        var showMods = supported && !!state.game;
        $('step-mods').hidden = !showMods;
        if (showMods) renderMods();
        var showResult = showMods && Object.keys(state.picked).length > 0;
        $('step-result').hidden = !showResult;
        if (showResult) renderResult();
        renderFeedback();
    }

    document.querySelectorAll('[data-lang]').forEach(function (b) {
        b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
    });
    document.querySelectorAll('[data-group]').forEach(function (g) {
        g.querySelectorAll('button').forEach(function (b) {
            b.addEventListener('click', function () { choose(g.getAttribute('data-group'), b.getAttribute('data-value')); });
        });
    });

    setLang(initialLang());
    fetch('releases.json', { cache: 'no-cache' })
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(function (data) { releases = data; render(); })
        .catch(function () { releasesFailed = true; render(); });
})();
