# Rebalance for Konung 3 (English game)

Balance of healing, critical hits and some skills for **Konung 3: Ties of the Dynasty**: the **GOG English build** (Konung3.exe 3,686,400 bytes) and the
**English Steam edition**; needs the mod loader that is in this package.

## What the mod does

- **A pause between heals:** each character can use a healing item (Healing balm, Plantain, Celandine, Healing plants, Wine, Beer, Jerky, Kvass, Mead)
  once every 10 seconds of game time: by hand, through a quick slot and automatically after a hit. Healing is still instant.
- A try that comes too early uses nothing up; "Not ready to heal" appears over the portrait. If nobody needs healing, the item is not used up either:
  "Nobody is hurt".
- Healing plants heal the whole party, but only the one who used them has to wait.
- The pause stops when the game is paused and runs faster when the game is sped up. Under the portraits, an item that is cooling down is covered by a dark
  veil with the seconds left.
- Elixir of life, Antidote and mixing liquids with items are not affected.
- **Critical hits** (Fatal blow, Fatal arrow): 5 % per skill level (50 % at level 10), and a critical hit deals the rolled weapon damage twice. The skill
  descriptions show the new chance. Enemies with the same weapons follow the same rules.
- **Training:** when a character gains experience (a victory, a potion, a weapon coating), the others in the party get 5 % of that experience for each
  level of his Training (50 % at level 10; the game gave 3 %). Training is each character's own: the one who earned the experience teaches the others.
- **Fewer dodges:** Dance of Death (against arrows) gives 5 % per level, Invincibility (against melee blows) 3 % per level, when the blow comes from the
  front (the game gave 8 % and 4 %); the bonus from the attribute stays as it was. Standing in a crowd of enemies and simply taking the blows no longer works.
- **Leadership** can be developed only by the hero: only his Leadership decides how many companions he can lead. Points a companion already put into it
  stay with him.

After a save is loaded everyone is ready again. Nothing is written into savegames.

## Install and uninstall

Unzip the package into the game folder (next to Konung3.exe). To uninstall, delete the folder `mods\rebalance`.

## Settings (`mods\rebalance\mod.ini`, restart the game after a change)

| setting | default | |
|---|---|---|
| `[healing] enabled` | 1 | 0: no pause |
| `[healing] cooldown_seconds` | 10 | 0.5 .. 600 |
| `[healing] message` | 1 | 0: no refusal line |
| `[healing] refuse_when_nobody_hurt` | 1 | 0: the item is used up even when nobody is hurt (as in the game) |
| `[hud] cooldown_shade`, `shade_alpha` | 1, 176 | the veil on items that are cooling down and how dark it is (0..255) |
| `[hud] message_over_portrait` | 1 | 0: the refusal line in the game's usual message line |
| `[critical] enabled` | 1 | 0: critical hits and descriptions as in the game |
| `[critical] percent_per_level` | 5 | 0 .. 10 |
| `[critical] double_damage` | 1 | 0: critical hit damage as in the game |
| `[training] enabled`, `percent_per_level` | 1, 5 | share of experience per level of Training, 0 .. 10 (the game: 3) |
| `[dodge] enabled`, `death_dance_per_level`, `invulnerability_per_level` | 1, 5, 3 | chance to dodge per level, 0 .. 10 (the game: 8 and 4) |
| `[leadership] hero_only` | 1 | 0: everyone can develop Leadership, as in the game |

## Limitations

Loading a save and travelling to another map can reset the healing pause (by at most 10 seconds).
