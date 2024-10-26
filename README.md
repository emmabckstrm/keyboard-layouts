# Keyboard layouts

This repository is the version history of my keyboard layout(s).

If nothing else stated, I manage my layout with VIA ([https://usevia.app](https://usevia.app/))

## Resources

Keymap from VIA. Converted to YAML through:

```bash
qmk via2json -kb crkbd/r2g keymap_from_via.json -l LAYOUT_split_3x6_3 | keymap parse -c 10 -q - >keymap_from_via.yaml
```

https://github.com/caksoylar/keymap-drawer?tab=readme-ov-file#bootstrapping-your-keymap-representation

## Drawing svg

```bash
keymap draw keymap_from_via.yaml >keymap-diagram.svg
```

https://github.com/caksoylar/keymap-drawer?tab=readme-ov-file#producing-the-svg
