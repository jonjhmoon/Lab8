const formatVolumeIconPath = require("../assets/scripts/main");

describe(formatVolumeIconPath, () => {
    test("volume lvl 3", () => {
        expect(formatVolumeIconPath("70")).toMatch(`./assets/media/icons/volume-level-3.svg`);
    });

    test("volume lvl 2", () => {
        expect(formatVolumeIconPath("35")).toMatch(`./assets/media/icons/volume-level-2.svg`);
    });

    test("volume lvl 1", () => {
        expect(formatVolumeIconPath("1")).toMatch(`./assets/media/icons/volume-level-1.svg`);
    });

    test("volume lvl 0", () => {
        expect(formatVolumeIconPath("0")).toMatch(`./assets/media/icons/volume-level-0.svg`);
    });
})