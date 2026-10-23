# Visuals & Fixes (English game)

For the **GOG English build** of Konung 3 (Konung3.exe 3,686,400 bytes) and the **English Steam edition** (the same game; the loader checks it when the
game starts). Needs the mod loader (`dinput8.dll` in the
game folder, `mods\loader.ini`), both are in this package. Unzip the package **into the game folder**, next to Konung3.exe, then
double-click `visuals-setup.bat` there. It checks that the package fits your game (language, GOG or Steam).

**Steam: running `visuals-setup.bat` is required.** It turns the Fulqrum launcher (the advert page for its store before the game) off at
once: it changes only the line `skip=true` in `launcher.ini`, the launcher's own setting. The mod is not supported with the launcher on:
the launcher waits at most 5 seconds for its page from the Fulqrum site and then starts the game itself, and when the page was late it
starts the game again after you quit it. After Steam's "Verify integrity of game files" or a game update, run the script again.

Its menu has "Uninstall Visuals & Fixes": the mod, the loader `dinput8.dll` when no other mod is left, and `launcher.ini` as Steam installed it.

To remove the mod by hand delete `mods\visuals`; to remove the loader as well delete `dinput8.dll` and `mods`.

One mod for the picture and the interface:
- **Resolutions and windowed mode.** The game runs in a borderless window (`[display] windowed=1`), which modern Windows
  needs: the original exclusive fullscreen loses its Direct3D device and the game crashes. The Settings screen offers
  every desktop resolution from 1024x768 up; the choice is saved in `mods\visuals\state.ini`. Until you choose one,
  the window fills the monitor (its resolution, or the largest listed size below it).
- **UI scale and crisp text.** Menus and the HUD scale with the resolution, text is redrawn from Windows Tahoma, the UI art
  (item icons, portraits, action icons, shield, main menu, settings, new hero, load and save screens, inventory, exchange and journal windows, world map) is replaced by sharper versions.
- **Fixes.** Walking characters and effects no longer freeze near the screen edge (`[graphics] animation_edge_fix=1`);
  the crash on exit and the "assert" message boxes are handled; shadows are drawn at 2048 pixels (`[graphics] shadow_size`,
  1024 / 2048 / 4096 / 8192; needs Shadows on in the game's Settings). The effect textures (fire, smoke, sparks) are already
  present in the English game, so nothing has to be restored there.
- **Clock and speed.** The day and time are shown at the top centre of the world view with three buttons under it:
  **x2**, **pause**, **x4**. A click on x2 or x4 sets that speed and the button then reads **x1**; click x1 to go back to
  normal speed. The other speed button switches straight to its speed. Every map load or travel returns to x1. The speed
  buttons do not work while paused. `[hud] clock=0` hides the clock and buttons, `[hud] pause=0` turns off the shared pause.
- **Settings help.** Hover a Settings row for about a third of a second to see a short explanation (`[help] enabled=0` turns it off).
- **Camera.** The camera can zoom out to 26 (`[camera] max_distance`), starts there (`start_distance`), and keeps a fixed inset
  from the map edge so less of the outside of the map is visible (`stable_edges`, `edge_margin`).

Nothing in your saves or in the game files is changed (only the Steam edition's `launcher.ini`, by `visuals-setup.bat`); everything happens in memory. Set `[mod] enabled=0` in
`mods\visuals\mod.ini` to switch the whole mod off. Do not install this package over the Russian game: the loader checks
the exe and does nothing for a different build. The loader writes `mods\logs\loader.log` and `events.log`; send them if
something does not work.
