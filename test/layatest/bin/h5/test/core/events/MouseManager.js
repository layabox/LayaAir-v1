'use strict';

describe("Laya.events.MouseManager", function () {
    describe("mouseThrough", function () {
        it("应该正确影响鼠标检测对于目标对象绘图区域的穿透性", function () {
            const sprite = Laya.stage.addChild(Laya.Sprite());
            sprite.graphics.drawRect(3, 5, 11, 17);

        });
    });

    describe("hitTestPrior", function () {
        it("应该能够独立影响是优先检测目标对象还是目标对象的子对象");
    });

    describe("hitArea", function () {
        it("应该能够正确影响目标对象的鼠标碰撞检测区域");
    });
});