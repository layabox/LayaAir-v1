'use strict'

//(7+3)*20 pixel test
function laterCompareExpect(tm, cb, fn, args) {
    function testColor() {
        expect(fn.apply(null, args)).to.be.equal(true);
        cb();
    }

    setTimeout(testColor, tm);
}

describe("Laya.Sprite", function () {

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("visible", function () {
        it("应该正确显示可见性", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 13, 7, DefaultTestColorHexStr);
            expect(sprite.visible).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.visible = false;
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, GlobalColorObjBlank, false]);
            }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, DefaultTestColorObj]);
        });
    });

    describe("scrollRect", function () {
        it("应该正确裁剪显示对象", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            expect(sprite.scrollRect).to.be.equal(null);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.scrollRect = new Laya.Rectangle(2, 3, 5, 7);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [1, 2, 4, 5, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
        });
    });

    describe("viewport", function () {
        it("应该正确显示设置了视口的显示对象", function (done) {
            Laya.stage.removeChildren();
            var container = Laya.stage.addChild(new Laya.Sprite());
            var sprite = container.addChild(new Laya.Sprite());
            sprite.pos(5, 7);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

            expect(container.viewport).to.be.equal(null);
            container.viewport = new Laya.Rectangle(10, 15, 20, 20);


            laterCompareExpect(WaitRenderTime, function () {
                sprite.size(11, 17);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, GlobalColorObjBlank, false]);
        });
    });

    describe("loadImage", function () {
        it("应该正确加载并显示图形", function (done) {
            Laya.stage.removeChildren();
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            sprite.pos(11, 7);
            var colors = [
                {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 255}},
                {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 255}},
                {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 255}}];
            sprite.loadImage('./res/laya.jpg', -3, -5, 0, 0, Laya.Handler.create(null, function (tex) {
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    expect(sprite.width).to.be.equal(tex.width);
                    expect(sprite.height).to.be.equal(tex.height);
                    done();
                }, compareCanvasPixelRect, [8, 2, tex.width, tex.height, colors]);
            }));
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("visible", function () {
        it("应该正确显示可见性", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 13, 7, DefaultTestColorHexStr);
            expect(sprite.visible).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.visible = false;
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, GlobalColorObjBlank, false]);
            }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, DefaultTestColorObj]);
        });
    });

    describe("scrollRect", function () {
        it("应该正确裁剪显示对象", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            expect(sprite.scrollRect).to.be.equal(null);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.scrollRect = new Laya.Rectangle(2, 3, 5, 7);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [1, 2, 4, 5, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
        });
    });

    describe("viewport", function () {
        it("应该正确显示设置了视口的显示对象", function (done) {
            Laya.stage.removeChildren();
            var container = Laya.stage.addChild(new Laya.Sprite());
            var sprite = container.addChild(new Laya.Sprite());
            sprite.pos(5, 7);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

            expect(container.viewport).to.be.equal(null);
            container.viewport = new Laya.Rectangle(10, 15, 20, 20);


            laterCompareExpect(WaitRenderTime, function () {
                sprite.size(11, 17);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, GlobalColorObjBlank, false]);
        });
    });

    describe("loadImage", function () {
        it("应该正确加载并显示图形", function (done) {
            Laya.stage.removeChildren();
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            sprite.pos(11, 7);
            var colors = [
                {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 255}},
                {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 255}},
                {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 255}}];
            sprite.loadImage('./res/laya.jpg', -3, -5, 0, 0, Laya.Handler.create(null, function (tex) {
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    expect(sprite.width).to.be.equal(tex.width);
                    expect(sprite.height).to.be.equal(tex.height);
                    done();
                }, compareCanvasPixelRect, [8, 2, tex.width, tex.height, colors]);
            }));
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("visible", function () {
        it("应该正确显示可见性", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 13, 7, DefaultTestColorHexStr);
            expect(sprite.visible).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.visible = false;
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, GlobalColorObjBlank, false]);
            }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, DefaultTestColorObj]);
        });
    });

    describe("scrollRect", function () {
        it("应该正确裁剪显示对象", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            expect(sprite.scrollRect).to.be.equal(null);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.scrollRect = new Laya.Rectangle(2, 3, 5, 7);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [1, 2, 4, 5, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
        });
    });

    describe("viewport", function () {
        it("应该正确显示设置了视口的显示对象", function (done) {
            Laya.stage.removeChildren();
            var container = Laya.stage.addChild(new Laya.Sprite());
            var sprite = container.addChild(new Laya.Sprite());
            sprite.pos(5, 7);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

            expect(container.viewport).to.be.equal(null);
            container.viewport = new Laya.Rectangle(10, 15, 20, 20);


            laterCompareExpect(WaitRenderTime, function () {
                sprite.size(11, 17);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, GlobalColorObjBlank, false]);
        });
    });

    describe("loadImage", function () {
        it("应该正确加载并显示图形", function (done) {
            Laya.stage.removeChildren();
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            sprite.pos(11, 7);
            var colors = [
                {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 255}},
                {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 255}},
                {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 255}}];
            sprite.loadImage('./res/laya.jpg', -3, -5, 0, 0, Laya.Handler.create(null, function (tex) {
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    expect(sprite.width).to.be.equal(tex.width);
                    expect(sprite.height).to.be.equal(tex.height);
                    done();
                }, compareCanvasPixelRect, [8, 2, tex.width, tex.height, colors]);
            }));
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("visible", function () {
        it("应该正确显示可见性", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 13, 7, DefaultTestColorHexStr);
            expect(sprite.visible).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.visible = false;
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, GlobalColorObjBlank, false]);
            }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, DefaultTestColorObj]);
        });
    });

    describe("scrollRect", function () {
        it("应该正确裁剪显示对象", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            expect(sprite.scrollRect).to.be.equal(null);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.scrollRect = new Laya.Rectangle(2, 3, 5, 7);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [1, 2, 4, 5, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
        });
    });

    describe("viewport", function () {
        it("应该正确显示设置了视口的显示对象", function (done) {
            Laya.stage.removeChildren();
            var container = Laya.stage.addChild(new Laya.Sprite());
            var sprite = container.addChild(new Laya.Sprite());
            sprite.pos(5, 7);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

            expect(container.viewport).to.be.equal(null);
            container.viewport = new Laya.Rectangle(10, 15, 20, 20);


            laterCompareExpect(WaitRenderTime, function () {
                sprite.size(11, 17);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, GlobalColorObjBlank, false]);
        });
    });

    describe("loadImage", function () {
        it("应该正确加载并显示图形", function (done) {
            Laya.stage.removeChildren();
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            sprite.pos(11, 7);
            var colors = [
                {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 255}},
                {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 255}},
                {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 255}}];
            sprite.loadImage('./res/laya.jpg', -3, -5, 0, 0, Laya.Handler.create(null, function (tex) {
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    expect(sprite.width).to.be.equal(tex.width);
                    expect(sprite.height).to.be.equal(tex.height);
                    done();
                }, compareCanvasPixelRect, [8, 2, tex.width, tex.height, colors]);
            }));
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("visible", function () {
        it("应该正确显示可见性", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 13, 7, DefaultTestColorHexStr);
            expect(sprite.visible).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.visible = false;
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, GlobalColorObjBlank, false]);
            }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, DefaultTestColorObj]);
        });
    });

    describe("scrollRect", function () {
        it("应该正确裁剪显示对象", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            expect(sprite.scrollRect).to.be.equal(null);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.scrollRect = new Laya.Rectangle(2, 3, 5, 7);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [1, 2, 4, 5, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
        });
    });

    describe("viewport", function () {
        it("应该正确显示设置了视口的显示对象", function (done) {
            Laya.stage.removeChildren();
            var container = Laya.stage.addChild(new Laya.Sprite());
            var sprite = container.addChild(new Laya.Sprite());
            sprite.pos(5, 7);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

            expect(container.viewport).to.be.equal(null);
            container.viewport = new Laya.Rectangle(10, 15, 20, 20);


            laterCompareExpect(WaitRenderTime, function () {
                sprite.size(11, 17);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, GlobalColorObjBlank, false]);
        });
    });

    describe("loadImage", function () {
        it("应该正确加载并显示图形", function (done) {
            Laya.stage.removeChildren();
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            sprite.pos(11, 7);
            var colors = [
                {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 255}},
                {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 255}},
                {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 255}}];
            sprite.loadImage('./res/laya.jpg', -3, -5, 0, 0, Laya.Handler.create(null, function (tex) {
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    expect(sprite.width).to.be.equal(tex.width);
                    expect(sprite.height).to.be.equal(tex.height);
                    done();
                }, compareCanvasPixelRect, [8, 2, tex.width, tex.height, colors]);
            }));
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("visible", function () {
        it("应该正确显示可见性", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 13, 7, DefaultTestColorHexStr);
            expect(sprite.visible).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.visible = false;
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, GlobalColorObjBlank, false]);
            }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, DefaultTestColorObj]);
        });
    });

    describe("scrollRect", function () {
        it("应该正确裁剪显示对象", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            expect(sprite.scrollRect).to.be.equal(null);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.scrollRect = new Laya.Rectangle(2, 3, 5, 7);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [1, 2, 4, 5, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
        });
    });

    describe("viewport", function () {
        it("应该正确显示设置了视口的显示对象", function (done) {
            Laya.stage.removeChildren();
            var container = Laya.stage.addChild(new Laya.Sprite());
            var sprite = container.addChild(new Laya.Sprite());
            sprite.pos(5, 7);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

            expect(container.viewport).to.be.equal(null);
            container.viewport = new Laya.Rectangle(10, 15, 20, 20);


            laterCompareExpect(WaitRenderTime, function () {
                sprite.size(11, 17);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, GlobalColorObjBlank, false]);
        });
    });

    describe("loadImage", function () {
        it("应该正确加载并显示图形", function (done) {
            Laya.stage.removeChildren();
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            sprite.pos(11, 7);
            var colors = [
                {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 255}},
                {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 255}},
                {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 255}}];
            sprite.loadImage('./res/laya.jpg', -3, -5, 0, 0, Laya.Handler.create(null, function (tex) {
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    expect(sprite.width).to.be.equal(tex.width);
                    expect(sprite.height).to.be.equal(tex.height);
                    done();
                }, compareCanvasPixelRect, [8, 2, tex.width, tex.height, colors]);
            }));
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("visible", function () {
        it("应该正确显示可见性", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 13, 7, DefaultTestColorHexStr);
            expect(sprite.visible).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.visible = false;
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, GlobalColorObjBlank, false]);
            }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, DefaultTestColorObj]);
        });
    });

    describe("scrollRect", function () {
        it("应该正确裁剪显示对象", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            expect(sprite.scrollRect).to.be.equal(null);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.scrollRect = new Laya.Rectangle(2, 3, 5, 7);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [1, 2, 4, 5, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
        });
    });

    describe("viewport", function () {
        it("应该正确显示设置了视口的显示对象", function (done) {
            Laya.stage.removeChildren();
            var container = Laya.stage.addChild(new Laya.Sprite());
            var sprite = container.addChild(new Laya.Sprite());
            sprite.pos(5, 7);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

            expect(container.viewport).to.be.equal(null);
            container.viewport = new Laya.Rectangle(10, 15, 20, 20);


            laterCompareExpect(WaitRenderTime, function () {
                sprite.size(11, 17);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, GlobalColorObjBlank, false]);
        });
    });

    describe("loadImage", function () {
        it("应该正确加载并显示图形", function (done) {
            Laya.stage.removeChildren();
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            sprite.pos(11, 7);
            var colors = [
                {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 255}},
                {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 255}},
                {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 255}}];
            sprite.loadImage('./res/laya.jpg', -3, -5, 0, 0, Laya.Handler.create(null, function (tex) {
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    expect(sprite.width).to.be.equal(tex.width);
                    expect(sprite.height).to.be.equal(tex.height);
                    done();
                }, compareCanvasPixelRect, [8, 2, tex.width, tex.height, colors]);
            }));
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("visible", function () {
        it("应该正确显示可见性", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 13, 7, DefaultTestColorHexStr);
            expect(sprite.visible).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.visible = false;
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, GlobalColorObjBlank, false]);
            }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, DefaultTestColorObj]);
        });
    });

    describe("scrollRect", function () {
        it("应该正确裁剪显示对象", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            expect(sprite.scrollRect).to.be.equal(null);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.scrollRect = new Laya.Rectangle(2, 3, 5, 7);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [1, 2, 4, 5, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
        });
    });

    describe("viewport", function () {
        it("应该正确显示设置了视口的显示对象", function (done) {
            Laya.stage.removeChildren();
            var container = Laya.stage.addChild(new Laya.Sprite());
            var sprite = container.addChild(new Laya.Sprite());
            sprite.pos(5, 7);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

            expect(container.viewport).to.be.equal(null);
            container.viewport = new Laya.Rectangle(10, 15, 20, 20);


            laterCompareExpect(WaitRenderTime, function () {
                sprite.size(11, 17);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, GlobalColorObjBlank, false]);
        });
    });

    describe("loadImage", function () {
        it("应该正确加载并显示图形", function (done) {
            Laya.stage.removeChildren();
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            sprite.pos(11, 7);
            var colors = [
                {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 255}},
                {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 255}},
                {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 255}}];
            sprite.loadImage('./res/laya.jpg', -3, -5, 0, 0, Laya.Handler.create(null, function (tex) {
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    expect(sprite.width).to.be.equal(tex.width);
                    expect(sprite.height).to.be.equal(tex.height);
                    done();
                }, compareCanvasPixelRect, [8, 2, tex.width, tex.height, colors]);
            }));
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("visible", function () {
        it("应该正确显示可见性", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 13, 7, DefaultTestColorHexStr);
            expect(sprite.visible).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.visible = false;
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, GlobalColorObjBlank, false]);
            }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, DefaultTestColorObj]);
        });
    });

    describe("scrollRect", function () {
        it("应该正确裁剪显示对象", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            expect(sprite.scrollRect).to.be.equal(null);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.scrollRect = new Laya.Rectangle(2, 3, 5, 7);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [1, 2, 4, 5, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
        });
    });

    describe("viewport", function () {
        it("应该正确显示设置了视口的显示对象", function (done) {
            Laya.stage.removeChildren();
            var container = Laya.stage.addChild(new Laya.Sprite());
            var sprite = container.addChild(new Laya.Sprite());
            sprite.pos(5, 7);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

            expect(container.viewport).to.be.equal(null);
            container.viewport = new Laya.Rectangle(10, 15, 20, 20);


            laterCompareExpect(WaitRenderTime, function () {
                sprite.size(11, 17);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, GlobalColorObjBlank, false]);
        });
    });

    describe("loadImage", function () {
        it("应该正确加载并显示图形", function (done) {
            Laya.stage.removeChildren();
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            sprite.pos(11, 7);
            var colors = [
                {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 255}},
                {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 255}},
                {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 255}}];
            sprite.loadImage('./res/laya.jpg', -3, -5, 0, 0, Laya.Handler.create(null, function (tex) {
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    expect(sprite.width).to.be.equal(tex.width);
                    expect(sprite.height).to.be.equal(tex.height);
                    done();
                }, compareCanvasPixelRect, [8, 2, tex.width, tex.height, colors]);
            }));
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("visible", function () {
        it("应该正确显示可见性", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 13, 7, DefaultTestColorHexStr);
            expect(sprite.visible).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.visible = false;
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, GlobalColorObjBlank, false]);
            }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, DefaultTestColorObj]);
        });
    });

    describe("scrollRect", function () {
        it("应该正确裁剪显示对象", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            expect(sprite.scrollRect).to.be.equal(null);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.scrollRect = new Laya.Rectangle(2, 3, 5, 7);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [1, 2, 4, 5, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
        });
    });

    describe("viewport", function () {
        it("应该正确显示设置了视口的显示对象", function (done) {
            Laya.stage.removeChildren();
            var container = Laya.stage.addChild(new Laya.Sprite());
            var sprite = container.addChild(new Laya.Sprite());
            sprite.pos(5, 7);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

            expect(container.viewport).to.be.equal(null);
            container.viewport = new Laya.Rectangle(10, 15, 20, 20);


            laterCompareExpect(WaitRenderTime, function () {
                sprite.size(11, 17);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, GlobalColorObjBlank, false]);
        });
    });

    describe("loadImage", function () {
        it("应该正确加载并显示图形", function (done) {
            Laya.stage.removeChildren();
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            sprite.pos(11, 7);
            var colors = [
                {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 255}},
                {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 255}},
                {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 255}}];
            sprite.loadImage('./res/laya.jpg', -3, -5, 0, 0, Laya.Handler.create(null, function (tex) {
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    expect(sprite.width).to.be.equal(tex.width);
                    expect(sprite.height).to.be.equal(tex.height);
                    done();
                }, compareCanvasPixelRect, [8, 2, tex.width, tex.height, colors]);
            }));
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("visible", function () {
        it("应该正确显示可见性", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 13, 7, DefaultTestColorHexStr);
            expect(sprite.visible).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.visible = false;
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, GlobalColorObjBlank, false]);
            }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, DefaultTestColorObj]);
        });
    });

    describe("scrollRect", function () {
        it("应该正确裁剪显示对象", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            expect(sprite.scrollRect).to.be.equal(null);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.scrollRect = new Laya.Rectangle(2, 3, 5, 7);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [1, 2, 4, 5, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
        });
    });

    describe("viewport", function () {
        it("应该正确显示设置了视口的显示对象", function (done) {
            Laya.stage.removeChildren();
            var container = Laya.stage.addChild(new Laya.Sprite());
            var sprite = container.addChild(new Laya.Sprite());
            sprite.pos(5, 7);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

            expect(container.viewport).to.be.equal(null);
            container.viewport = new Laya.Rectangle(10, 15, 20, 20);


            laterCompareExpect(WaitRenderTime, function () {
                sprite.size(11, 17);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, GlobalColorObjBlank, false]);
        });
    });

    describe("loadImage", function () {
        it("应该正确加载并显示图形", function (done) {
            Laya.stage.removeChildren();
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            sprite.pos(11, 7);
            var colors = [
                {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 255}},
                {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 255}},
                {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 255}}];
            sprite.loadImage('./res/laya.jpg', -3, -5, 0, 0, Laya.Handler.create(null, function (tex) {
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    expect(sprite.width).to.be.equal(tex.width);
                    expect(sprite.height).to.be.equal(tex.height);
                    done();
                }, compareCanvasPixelRect, [8, 2, tex.width, tex.height, colors]);
            }));
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("visible", function () {
        it("应该正确显示可见性", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 13, 7, DefaultTestColorHexStr);
            expect(sprite.visible).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.visible = false;
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, GlobalColorObjBlank, false]);
            }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, DefaultTestColorObj]);
        });
    });

    describe("scrollRect", function () {
        it("应该正确裁剪显示对象", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            expect(sprite.scrollRect).to.be.equal(null);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.scrollRect = new Laya.Rectangle(2, 3, 5, 7);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [1, 2, 4, 5, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
        });
    });

    describe("viewport", function () {
        it("应该正确显示设置了视口的显示对象", function (done) {
            Laya.stage.removeChildren();
            var container = Laya.stage.addChild(new Laya.Sprite());
            var sprite = container.addChild(new Laya.Sprite());
            sprite.pos(5, 7);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

            expect(container.viewport).to.be.equal(null);
            container.viewport = new Laya.Rectangle(10, 15, 20, 20);


            laterCompareExpect(WaitRenderTime, function () {
                sprite.size(11, 17);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, GlobalColorObjBlank, false]);
        });
    });

    describe("loadImage", function () {
        it("应该正确加载并显示图形", function (done) {
            Laya.stage.removeChildren();
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            sprite.pos(11, 7);
            var colors = [
                {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 255}},
                {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 255}},
                {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 255}}];
            sprite.loadImage('./res/laya.jpg', -3, -5, 0, 0, Laya.Handler.create(null, function (tex) {
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    expect(sprite.width).to.be.equal(tex.width);
                    expect(sprite.height).to.be.equal(tex.height);
                    done();
                }, compareCanvasPixelRect, [8, 2, tex.width, tex.height, colors]);
            }));
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("visible", function () {
        it("应该正确显示可见性", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 13, 7, DefaultTestColorHexStr);
            expect(sprite.visible).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.visible = false;
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, GlobalColorObjBlank, false]);
            }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, DefaultTestColorObj]);
        });
    });

    describe("scrollRect", function () {
        it("应该正确裁剪显示对象", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            expect(sprite.scrollRect).to.be.equal(null);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.scrollRect = new Laya.Rectangle(2, 3, 5, 7);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [1, 2, 4, 5, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
        });
    });

    describe("viewport", function () {
        it("应该正确显示设置了视口的显示对象", function (done) {
            Laya.stage.removeChildren();
            var container = Laya.stage.addChild(new Laya.Sprite());
            var sprite = container.addChild(new Laya.Sprite());
            sprite.pos(5, 7);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

            expect(container.viewport).to.be.equal(null);
            container.viewport = new Laya.Rectangle(10, 15, 20, 20);


            laterCompareExpect(WaitRenderTime, function () {
                sprite.size(11, 17);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, GlobalColorObjBlank, false]);
        });
    });

    describe("loadImage", function () {
        it("应该正确加载并显示图形", function (done) {
            Laya.stage.removeChildren();
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            sprite.pos(11, 7);
            var colors = [
                {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 255}},
                {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 255}},
                {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 255}}];
            sprite.loadImage('./res/laya.jpg', -3, -5, 0, 0, Laya.Handler.create(null, function (tex) {
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    expect(sprite.width).to.be.equal(tex.width);
                    expect(sprite.height).to.be.equal(tex.height);
                    done();
                }, compareCanvasPixelRect, [8, 2, tex.width, tex.height, colors]);
            }));
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("visible", function () {
        it("应该正确显示可见性", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 13, 7, DefaultTestColorHexStr);
            expect(sprite.visible).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.visible = false;
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, GlobalColorObjBlank, false]);
            }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, DefaultTestColorObj]);
        });
    });

    describe("scrollRect", function () {
        it("应该正确裁剪显示对象", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            expect(sprite.scrollRect).to.be.equal(null);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.scrollRect = new Laya.Rectangle(2, 3, 5, 7);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [1, 2, 4, 5, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
        });
    });

    describe("viewport", function () {
        it("应该正确显示设置了视口的显示对象", function (done) {
            Laya.stage.removeChildren();
            var container = Laya.stage.addChild(new Laya.Sprite());
            var sprite = container.addChild(new Laya.Sprite());
            sprite.pos(5, 7);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

            expect(container.viewport).to.be.equal(null);
            container.viewport = new Laya.Rectangle(10, 15, 20, 20);


            laterCompareExpect(WaitRenderTime, function () {
                sprite.size(11, 17);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, GlobalColorObjBlank, false]);
        });
    });

    describe("loadImage", function () {
        it("应该正确加载并显示图形", function (done) {
            Laya.stage.removeChildren();
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            sprite.pos(11, 7);
            var colors = [
                {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 255}},
                {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 255}},
                {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 255}}];
            sprite.loadImage('./res/laya.jpg', -3, -5, 0, 0, Laya.Handler.create(null, function (tex) {
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    expect(sprite.width).to.be.equal(tex.width);
                    expect(sprite.height).to.be.equal(tex.height);
                    done();
                }, compareCanvasPixelRect, [8, 2, tex.width, tex.height, colors]);
            }));
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("visible", function () {
        it("应该正确显示可见性", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 13, 7, DefaultTestColorHexStr);
            expect(sprite.visible).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.visible = false;
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, GlobalColorObjBlank, false]);
            }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, DefaultTestColorObj]);
        });
    });

    describe("scrollRect", function () {
        it("应该正确裁剪显示对象", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            expect(sprite.scrollRect).to.be.equal(null);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.scrollRect = new Laya.Rectangle(2, 3, 5, 7);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [1, 2, 4, 5, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
        });
    });

    describe("viewport", function () {
        it("应该正确显示设置了视口的显示对象", function (done) {
            Laya.stage.removeChildren();
            var container = Laya.stage.addChild(new Laya.Sprite());
            var sprite = container.addChild(new Laya.Sprite());
            sprite.pos(5, 7);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

            expect(container.viewport).to.be.equal(null);
            container.viewport = new Laya.Rectangle(10, 15, 20, 20);


            laterCompareExpect(WaitRenderTime, function () {
                sprite.size(11, 17);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, GlobalColorObjBlank, false]);
        });
    });

    describe("loadImage", function () {
        it("应该正确加载并显示图形", function (done) {
            Laya.stage.removeChildren();
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            sprite.pos(11, 7);
            var colors = [
                {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 255}},
                {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 255}},
                {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 255}}];
            sprite.loadImage('./res/laya.jpg', -3, -5, 0, 0, Laya.Handler.create(null, function (tex) {
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    expect(sprite.width).to.be.equal(tex.width);
                    expect(sprite.height).to.be.equal(tex.height);
                    done();
                }, compareCanvasPixelRect, [8, 2, tex.width, tex.height, colors]);
            }));
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("visible", function () {
        it("应该正确显示可见性", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 13, 7, DefaultTestColorHexStr);
            expect(sprite.visible).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.visible = false;
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, GlobalColorObjBlank, false]);
            }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, DefaultTestColorObj]);
        });
    });

    describe("scrollRect", function () {
        it("应该正确裁剪显示对象", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            expect(sprite.scrollRect).to.be.equal(null);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.scrollRect = new Laya.Rectangle(2, 3, 5, 7);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [1, 2, 4, 5, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
        });
    });

    describe("viewport", function () {
        it("应该正确显示设置了视口的显示对象", function (done) {
            Laya.stage.removeChildren();
            var container = Laya.stage.addChild(new Laya.Sprite());
            var sprite = container.addChild(new Laya.Sprite());
            sprite.pos(5, 7);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

            expect(container.viewport).to.be.equal(null);
            container.viewport = new Laya.Rectangle(10, 15, 20, 20);


            laterCompareExpect(WaitRenderTime, function () {
                sprite.size(11, 17);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, GlobalColorObjBlank, false]);
        });
    });

    describe("loadImage", function () {
        it("应该正确加载并显示图形", function (done) {
            Laya.stage.removeChildren();
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            sprite.pos(11, 7);
            var colors = [
                {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 255}},
                {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 255}},
                {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 255}}];
            sprite.loadImage('./res/laya.jpg', -3, -5, 0, 0, Laya.Handler.create(null, function (tex) {
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    expect(sprite.width).to.be.equal(tex.width);
                    expect(sprite.height).to.be.equal(tex.height);
                    done();
                }, compareCanvasPixelRect, [8, 2, tex.width, tex.height, colors]);
            }));
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("visible", function () {
        it("应该正确显示可见性", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 13, 7, DefaultTestColorHexStr);
            expect(sprite.visible).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.visible = false;
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, GlobalColorObjBlank, false]);
            }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, DefaultTestColorObj]);
        });
    });

    describe("scrollRect", function () {
        it("应该正确裁剪显示对象", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            expect(sprite.scrollRect).to.be.equal(null);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.scrollRect = new Laya.Rectangle(2, 3, 5, 7);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [1, 2, 4, 5, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
        });
    });

    describe("viewport", function () {
        it("应该正确显示设置了视口的显示对象", function (done) {
            Laya.stage.removeChildren();
            var container = Laya.stage.addChild(new Laya.Sprite());
            var sprite = container.addChild(new Laya.Sprite());
            sprite.pos(5, 7);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

            expect(container.viewport).to.be.equal(null);
            container.viewport = new Laya.Rectangle(10, 15, 20, 20);


            laterCompareExpect(WaitRenderTime, function () {
                sprite.size(11, 17);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, GlobalColorObjBlank, false]);
        });
    });

    describe("loadImage", function () {
        it("应该正确加载并显示图形", function (done) {
            Laya.stage.removeChildren();
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            sprite.pos(11, 7);
            var colors = [
                {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 255}},
                {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 255}},
                {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 255}}];
            sprite.loadImage('./res/laya.jpg', -3, -5, 0, 0, Laya.Handler.create(null, function (tex) {
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    expect(sprite.width).to.be.equal(tex.width);
                    expect(sprite.height).to.be.equal(tex.height);
                    done();
                }, compareCanvasPixelRect, [8, 2, tex.width, tex.height, colors]);
            }));
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("visible", function () {
        it("应该正确显示可见性", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 13, 7, DefaultTestColorHexStr);
            expect(sprite.visible).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.visible = false;
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, GlobalColorObjBlank, false]);
            }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, DefaultTestColorObj]);
        });
    });

    describe("scrollRect", function () {
        it("应该正确裁剪显示对象", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            expect(sprite.scrollRect).to.be.equal(null);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.scrollRect = new Laya.Rectangle(2, 3, 5, 7);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [1, 2, 4, 5, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
        });
    });

    describe("viewport", function () {
        it("应该正确显示设置了视口的显示对象", function (done) {
            Laya.stage.removeChildren();
            var container = Laya.stage.addChild(new Laya.Sprite());
            var sprite = container.addChild(new Laya.Sprite());
            sprite.pos(5, 7);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

            expect(container.viewport).to.be.equal(null);
            container.viewport = new Laya.Rectangle(10, 15, 20, 20);


            laterCompareExpect(WaitRenderTime, function () {
                sprite.size(11, 17);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, GlobalColorObjBlank, false]);
        });
    });

    describe("loadImage", function () {
        it("应该正确加载并显示图形", function (done) {
            Laya.stage.removeChildren();
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            sprite.pos(11, 7);
            var colors = [
                {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 255}},
                {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 255}},
                {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 255}}];
            sprite.loadImage('./res/laya.jpg', -3, -5, 0, 0, Laya.Handler.create(null, function (tex) {
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    expect(sprite.width).to.be.equal(tex.width);
                    expect(sprite.height).to.be.equal(tex.height);
                    done();
                }, compareCanvasPixelRect, [8, 2, tex.width, tex.height, colors]);
            }));
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("visible", function () {
        it("应该正确显示可见性", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 13, 7, DefaultTestColorHexStr);
            expect(sprite.visible).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.visible = false;
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, GlobalColorObjBlank, false]);
            }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, DefaultTestColorObj]);
        });
    });

    describe("scrollRect", function () {
        it("应该正确裁剪显示对象", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            expect(sprite.scrollRect).to.be.equal(null);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.scrollRect = new Laya.Rectangle(2, 3, 5, 7);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [1, 2, 4, 5, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
        });
    });

    describe("viewport", function () {
        it("应该正确显示设置了视口的显示对象", function (done) {
            Laya.stage.removeChildren();
            var container = Laya.stage.addChild(new Laya.Sprite());
            var sprite = container.addChild(new Laya.Sprite());
            sprite.pos(5, 7);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

            expect(container.viewport).to.be.equal(null);
            container.viewport = new Laya.Rectangle(10, 15, 20, 20);


            laterCompareExpect(WaitRenderTime, function () {
                sprite.size(11, 17);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, GlobalColorObjBlank, false]);
        });
    });

    describe("loadImage", function () {
        it("应该正确加载并显示图形", function (done) {
            Laya.stage.removeChildren();
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            sprite.pos(11, 7);
            var colors = [
                {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 255}},
                {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 255}},
                {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 255}}];
            sprite.loadImage('./res/laya.jpg', -3, -5, 0, 0, Laya.Handler.create(null, function (tex) {
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    expect(sprite.width).to.be.equal(tex.width);
                    expect(sprite.height).to.be.equal(tex.height);
                    done();
                }, compareCanvasPixelRect, [8, 2, tex.width, tex.height, colors]);
            }));
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

    describe("visible", function () {
        it("应该正确显示可见性", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 13, 7, DefaultTestColorHexStr);
            expect(sprite.visible).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.visible = false;
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, GlobalColorObjBlank, false]);
            }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, DefaultTestColorObj]);
        });
    });

    describe("scrollRect", function () {
        it("应该正确裁剪显示对象", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            expect(sprite.scrollRect).to.be.equal(null);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.scrollRect = new Laya.Rectangle(2, 3, 5, 7);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [1, 2, 4, 5, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
        });
    });

    describe("viewport", function () {
        it("应该正确显示设置了视口的显示对象", function (done) {
            Laya.stage.removeChildren();
            var container = Laya.stage.addChild(new Laya.Sprite());
            var sprite = container.addChild(new Laya.Sprite());
            sprite.pos(5, 7);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

            expect(container.viewport).to.be.equal(null);
            container.viewport = new Laya.Rectangle(10, 15, 20, 20);


            laterCompareExpect(WaitRenderTime, function () {
                sprite.size(11, 17);
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, GlobalColorObjBlank, false]);
        });
    });

    describe("loadImage", function () {
        it("应该正确加载并显示图形", function (done) {
            Laya.stage.removeChildren();
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            sprite.pos(11, 7);
            var colors = [
                {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 255}},
                {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 255}},
                {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 255}}];
            sprite.loadImage('./res/laya.jpg', -3, -5, 0, 0, Laya.Handler.create(null, function (tex) {
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    expect(sprite.width).to.be.equal(tex.width);
                    expect(sprite.height).to.be.equal(tex.height);
                    done();
                }, compareCanvasPixelRect, [8, 2, tex.width, tex.height, colors]);
            }));
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制图形", function (done) {
                Laya.stage.removeChildren();
                var sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.removeChildren();
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            var tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            Laya.stage.removeChildren();
            var sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            var gw = 3, gh = 16;
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            sprite.pos(3, 23);
            sprite.pivot(2, 21);
            sprite.size(31, 19);
            sprite.rotation = -90;
            sprite.scale(2, 0.5);

            var tx = 5, ty = 7, tw = gh * 0.5, th = gw * 2;
            var bound = sprite.getBounds();
            expect(Math.abs(bound.x - tx) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.y - ty) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.width - tw) < 0.00001).to.be.equal(true);
            expect(Math.abs(bound.height - th) < 0.00001).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                Laya.stage.removeChildren();
                done();
            }, compareCanvasPixelRectVertex, [tx, ty, tw, th, 1, DefaultTestColorObj]);
        });
    });

});
