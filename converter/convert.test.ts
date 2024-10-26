import { expect, test, describe } from "bun:test";
import { convert } from "./convert";

describe("convert", () => {
  const inputLayer = [
    [
      "KC_TAB",
      "KC_Q",
      "KC_W",
      "KC_E",
      "KC_R",
      "KC_T",
      "KC_LCTL",
      "KC_A",
      "KC_S",
      "KC_D",
      "KC_F",
      "KC_G",
      "KC_LSFT",
      "KC_Z",
      "KC_X",
      "KC_C",
      "KC_V",
      "KC_B",
      "KC_NO",
      "KC_NO",
      "KC_NO",
      "KC_LALT",
      "KC_LGUI",
      "LT(3,KC_SPC)",
      "KC_BSPC",
      "KC_P",
      "KC_O",
      "KC_I",
      "KC_U",
      "KC_Y",
      "S(KC_EQL)",
      "KC_BSLS",
      "KC_L",
      "KC_K",
      "KC_J",
      "KC_H",
      "KC_ESC",
      "KC_SLSH",
      "KC_DOT",
      "KC_COMM",
      "KC_M",
      "KC_N",
      "KC_NO",
      "KC_NO",
      "KC_NO",
      "KC_ESC",
      "MO(1)",
      "LT(2,KC_ENT)",
    ],
  ];

  test("converts to correct format", () => {
    const result = convert(inputLayer);
    expect(result).toEqual([
      [
        "KC_TAB",
        "KC_Q",
        "KC_W",
        "KC_E",
        "KC_R",
        "KC_T",

        "KC_Y",
        "KC_U",
        "KC_I",
        "KC_O",
        "KC_P",
        "KC_BSPC",

        "KC_LCTL",
        "KC_A",
        "KC_S",
        "KC_D",
        "KC_F",
        "KC_G",

        "KC_H",
        "KC_J",
        "KC_K",
        "KC_L",
        "KC_BSLS",
        "S(KC_EQL)",

        "KC_LSFT",
        "KC_Z",
        "KC_X",
        "KC_C",
        "KC_V",
        "KC_B",

        "KC_N",
        "KC_M",
        "KC_COMM",
        "KC_DOT",
        "KC_SLSH",
        "KC_ESC",

        "KC_LALT",
        "KC_LGUI",
        "LT(3,KC_SPC)",

        "LT(2,KC_ENT)",
        "MO(1)",
        "KC_ESC",
      ],
    ]);
  });
});
