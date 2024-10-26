# Keyboard layouts

This repository is the version history of my keyboard layout(s).

If nothing else stated, I manage my layout with VIA.

## Resources

- [VIA GUI (needs to be used in Chrome)](https://usevia.app/)
- [QMK basic keycodes](https://docs.qmk.fm/keycodes)
- QMK advanced keycodes:
  - [Mod-Tap](https://docs.qmk.fm/mod_tap)

Keymap from VIA. Converted to YAML through:

```bash
qmk via2json -kb crkbd/r2g keymap_from_via.json -l LAYOUT_split_3x6_3 | keymap -c ../../keymap-drawer-config.yaml parse -c 10 -q - >keymap_from_via.yaml
```

https://github.com/caksoylar/keymap-drawer?tab=readme-ov-file#bootstrapping-your-keymap-representation

## Drawing svg

```bash
keymap -c ../../keymap-drawer-config.yaml draw keymap_from_via.yaml >keymap-diagram.svg
```

https://github.com/caksoylar/keymap-drawer?tab=readme-ov-file#producing-the-svg
