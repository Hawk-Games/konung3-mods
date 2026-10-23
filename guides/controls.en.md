# Controls for Konung 3 (English game)

For the **GOG English build** of Konung 3 (Konung3.exe 3,686,400 bytes) and the **English Steam edition**; needs the mod loader that is in this package.
Unzip the package into the game folder, next to Konung3.exe.

| Key | Action |
|---|---|
| 1..6 (top row) | Select one party member by portrait position |
| Same number twice quickly | Focus/follow that member like a portrait double-click |
| R | Toggle melee/ranged for the first selected member |
| Shift+R | Native weapon toggle for all selected members |
| E | Unsheathe/sheathe weapons of the selected members (the original Space action) |
| Space | Pause/resume (shared with the pause button of Visuals & Fixes) |
| WASD / arrows | Pan the camera, also while paused |

Numbers, R and Space work in the ordinary world view with no open panel or held item. Holding a key triggers once; release and
press again for another switch. Empty, dead and unselectable positions do nothing. The double-tap uses Windows' double-click
speed and works while paused. The native weapon-button hints now read "Unsheathe/sheathe weapon ({E})" and "Switch weapon
({R})" and follow your bindings after a restart. The original 1/2 weapon choice, the R option toggle and the A/S/T hotkeys are
unbound; the original Space stance action is on E. Other keys stay as they are.

Space needs Visuals & Fixes with `[hud] pause=1`. Configure `[keys]` in `mods\controls\mod.ini`: `select_1`..`select_6`,
`switch_weapon`, `toggle_pause`, `pan_up/down/left/right` and `hotkey_X` (named after the original key); up to four
comma-separated keys per action, empty disables. Key names: A-Z 0-9 F1-F12 NUM0-NUM9 UP DOWN LEFT RIGHT SPACE TAB GRAVE ENTER
BACKSPACE HOME END PGUP PGDN INS DEL MINUS EQUALS LBRACKET RBRACKET SEMICOLON APOSTROPHE COMMA PERIOD SLASH BACKSLASH MOUSE3
MOUSE4 MOUSE5, or a hex virtual-key code such as 0x5A. Restart the game after a change. There is no binding menu and no save
is modified. `[mod] enabled=0` switches the mod off; delete `mods\controls` to remove it.
