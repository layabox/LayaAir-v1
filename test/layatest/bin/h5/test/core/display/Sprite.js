'use strict';

describe("laya.display.Sprite", function () {
    beforeEach(clearContext);
    afterEach(clearContext);

    describe("constructor", function () {
        it("应该初始化正确的属性值", function () {
            const sprite = new Laya.Sprite();
            expect(sprite.alpha).to.be.equal(1);
            expect(sprite.visible).to.be.equal(true);
            expect(sprite.scaleX).to.be.equal(1);
            expect(sprite.scaleY).to.be.equal(1);
            expect(sprite.width).to.be.equal(0);
            expect(sprite.height).to.be.equal(0);
            expect(sprite.pivotX).to.be.equal(0);
            expect(sprite.pivotY).to.be.equal(0);
            expect(sprite.skewX).to.be.equal(0);
            expect(sprite.skewY).to.be.equal(0);
            expect(!!sprite.scrollRect).to.be.equal(false);
            expect(!!sprite.viewport).to.be.equal(false);
            expect(sprite.staticCache).to.be.equal(false);
            expect(sprite.cacheAsBitmap).to.be.equal(false);
        });
    });

    describe("autoSize", function () {
        it("应该自动计算宽高", function () {
            const sprite = Laya.stage.addChild(new Laya.Sprite());
            expect(sprite.width).to.be.equal(0);
            expect(sprite.height).to.be.equal(0);

            sprite.graphics.drawRect(0, 0, 50, 30, DefaultTestColorHexStr);
            expect(sprite.width).to.be.equal(0);
            expect(sprite.height).to.be.equal(0);

            sprite.autoSize = true;
            expect(sprite.width).to.be.equal(50);
            expect(sprite.height).to.be.equal(30);

            sprite.size(10, 20);
            expect(sprite.width).to.be.equal(50);
            expect(sprite.height).to.be.equal(30);
        });
    });

    describe("graphics", function () {
        describe("drawRect", function () {
            it("应该正确绘制矩形", function (done) {
                const sprite = new Laya.Sprite();
                Laya.stage.addChild(sprite);
                sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
            });
        });
    });

    describe("alpha", function () {
        it("应该正确绘制图形透明度信息", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite());
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            sprite.alpha = 0.5;
            const tColorObj = {
                'r': DefaultTestColorObj.r,
                'g': DefaultTestColorObj.g,
                'b': DefaultTestColorObj.b,
                'a': DefaultTestColorObj.a >> 1
            };

            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, tColorObj]);
        });
    });

    describe("pos", function () {
        it("应该正确设置坐标", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite()).pos(7, 11);
            sprite.graphics.drawRect(0, 0, 13, 17, DefaultTestColorHexStr);
            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareCanvasPixelRectVertex, [7, 11, 13, 17, 1, DefaultTestColorObj]);
        });
    });

    describe("scale", function () {
        it("应该正确对对象进行缩放", function (done) {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5).scale(2, 4);
            parent.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = parent.addChild(new Laya.Sprite()).pos(7, 9).scale(3, 2);
            child.graphics.drawRect(0, 0, 17, 13, DefaultTestColorHexStr2);

            expect(parent.scaleX).to.be.equal(2);
            expect(parent.scaleY).to.be.equal(4);
            expect(child.scaleX).to.be.equal(3);
            expect(child.scaleY).to.be.equal(2);
            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareSimpleCrossRect, [[3, 5, 11 * 2, 19 * 4, 1, DefaultTestColorObj], [3 + 7 * 2, 5 + 9 * 4, 17 * 3 * 2, 13 * 2 * 4, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });
    });

    describe("visible", function () {
        it("应该正确显示可见性", function (done) {
            const sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 13, 7, DefaultTestColorHexStr);
            expect(sprite.visible).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.visible = false;
                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, GlobalBlankColorObj, false]);
            }, compareCanvasPixelRectVertex, [3, 5, 13, 7, 1, DefaultTestColorObj]);
        });
    });

    describe("scrollRect", function () {
        it("应该正确裁剪显示对象", function (done) {
            const sprite = new Laya.Sprite();
            Laya.stage.addChild(sprite);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            expect(sprite.scrollRect).to.be.equal(null);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.scrollRect = new Laya.Rectangle(2, 3, 5, 7);
                sprite.optimizeScrollRect = true;
                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRectVertex, [1, 2, 4, 5, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [3, 5, 11, 17, 1, DefaultTestColorObj]);
        });
    });

    describe("viewport", function () {
        it("应该正确显示设置了视口的显示对象", function (done) {
            Laya.stage.bgColor = GlobalBlankColorHexStr;
            const parent = Laya.stage.addChild(new Laya.Sprite());
            const sprite = parent.addChild(new Laya.Sprite()).pos(5, 7);
            sprite.graphics.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

            expect(parent.viewport).to.be.equal(null);
            expect(sprite.width).to.be.equal(0);
            expect(sprite.height).to.be.equal(0);
            parent.viewport = new Laya.Rectangle(10, 15, 20, 20);

            laterCompareExpect(WaitRenderTime, function () {
                sprite.size(11, 17);
                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [8, 12, 11, 17, 1, GlobalBlankColorObj, false]);
        });
    });

    describe("destroy", function () {
        it("应该正确销毁对象本身，而不销毁子对象", function (done) {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            parent.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = parent.addChild(new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);

            laterCompareExpect(WaitRenderTime, function () {
                parent.destroy(false);

                expect(!!parent._graphics).to.be.equal(false);
                expect(!!parent._style).to.be.equal(false);
                expect(!!parent._transform).to.be.equal(false);

                expect(!!child._graphics).to.be.equal(true);

                Laya.stage.addChild(child).pos(11, 13);

                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRectVertex, [11, 13, 17, 23, 1, DefaultTestColorObj2]);
            }, compareSimpleCrossRect, [[3, 5, 11, 19, 1, DefaultTestColorObj], [10, 14, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });

        it("应该正确销毁对象及其子对象", function (done) {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            parent.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = parent.addChild(new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);

            parent.destroy(true);

            expect(!!parent._graphics).to.be.equal(false);
            expect(!!parent._style).to.be.equal(false);
            expect(!!parent._transform).to.be.equal(false);

            expect(!!child._graphics).to.be.equal(false);
            expect(!!child._style).to.be.equal(false);
            expect(!!child._transform).to.be.equal(false);

            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareSimpleCrossRect, [[3, 5, 11, 19, 1, GlobalBlankColorObj], [10, 14, 17, 23, 1, GlobalBlankColorObj, false]]);
        });
    });

    describe("updateZOrder", function () {
        it("应该正确进行Z轴排序", function (done) {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            var child0 = parent.addChild(new Laya.Sprite()).pos(2, 3);
            child0.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            child0.zOrder = 2;
            var child = parent.addChild(new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);
            child.zOrder = 1;
            expect(parent.getChildIndex(child0)).to.be.equal(0);
            expect(parent.getChildIndex(child)).to.be.equal(1);
            parent.updateZOrder();
            expect(parent.getChildIndex(child0)).to.be.equal(1);
            expect(parent.getChildIndex(child)).to.be.equal(0);

            laterCompareExpect(WaitRenderTime, function () {
                child0.zOrder = 0;
                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [10, 14, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
            }, compareSimpleCrossRect, [[10, 14, 17, 23, 1, DefaultTestColorObj2], [5, 8, 11, 19, 1, DefaultTestColorObj, true, DefaultTestColorObj, true], 2]);
        });
    });

    describe("cacheAsBitmap", function () {
        it("应该正确设置缓存位图", function (done) {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            expect(parent.staticCache).to.be.equal(false);
            expect(parent.cacheAsBitmap).to.be.equal(false);

            var child0 = parent.addChild(new Laya.Sprite()).pos(2, 3);
            child0.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = parent.addChild(new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);

            parent.cacheAsBitmap = true;
            expect(parent.cacheAsBitmap).to.be.equal(true);
            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [10, 14, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });
    });

    describe("cacheAs", function () {
        it("应该正确设置缓存类型", function (done) {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            expect(parent.staticCache).to.be.equal(false);
            expect(parent.cacheAs === "none").to.be.equal(true);

            var child0 = parent.addChild(new Laya.Sprite()).pos(2, 3);
            child0.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = parent.addChild(new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);

            expect(parent.cacheAs === "none").to.be.equal(true);
            parent.cacheAs = "normal";
            expect(parent.cacheAs === "normal").to.be.equal(true);
            laterCompareExpect(WaitRenderTime, function () {
                parent.cacheAs = "bitmap";
                expect(parent.cacheAs === "bitmap").to.be.equal(true);
                laterCompareExpect(WaitRenderTime, function () {
                    parent.cacheAs = "none";
                    expect(parent.cacheAs === "none").to.be.equal(true);
                    laterCompareExpect(WaitRenderTime, function () {
                        done();
                    }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [10, 14, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
                }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [10, 14, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
            }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [10, 14, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });
    });

    describe("staticCache", function () {
        it("应该正确设置是否静态缓存", function (done) {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            expect(parent.staticCache).to.be.equal(false);
            expect(parent.cacheAs === "none").to.be.equal(true);

            parent.cacheAs = "normal";
            expect(parent.cacheAs === "normal").to.be.equal(true);
            expect(parent.staticCache).to.be.equal(false);
            parent.staticCache = true;

            var child0 = parent.addChild(new Laya.Sprite()).pos(2, 3);
            child0.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = parent.addChild(new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);

            laterCompareExpect(WaitRenderTime, function () {
                child.pos(4, 6);
                laterCompareExpect(WaitRenderTime, function () {
                    parent.staticCache = false;
                    parent.cacheAs = "bitmap";
                    expect(parent.cacheAs === "bitmap").to.be.equal(true);
                    expect(parent.staticCache).to.be.equal(false);
                    parent.staticCache = true;
                    child.pos(12, 7);
                    laterCompareExpect(WaitRenderTime, function () {
                        child.pos(3, 5);
                        laterCompareExpect(WaitRenderTime, function () {
                            parent.cacheAs = "none";
                            expect(parent.cacheAs === "none").to.be.equal(true);
                            expect(parent.staticCache).to.be.equal(true);
                            laterCompareExpect(WaitRenderTime, function () {
                                done();
                            }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [3 + 3, 5 + 5, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
                        }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [12 + 3, 7 + 5, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
                    }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [12 + 3, 7 + 5, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
                }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [10, 14, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
            }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [10, 14, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });
    });

    describe("reCache", function () {
        it("应该正确刷新缓存", function (done) {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            expect(parent.staticCache).to.be.equal(false);
            expect(parent.cacheAs === "none").to.be.equal(true);

            parent.cacheAs = "normal";
            expect(parent.cacheAs === "normal").to.be.equal(true);
            expect(parent.staticCache).to.be.equal(false);
            parent.staticCache = true;

            var child0 = parent.addChild(new Laya.Sprite()).pos(2, 3);
            child0.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = parent.addChild(new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);

            laterCompareExpect(WaitRenderTime, function () {
                child.pos(4, 6);
                parent.reCache();
                laterCompareExpect(WaitRenderTime, function () {
                    parent.cacheAs = "bitmap";
                    expect(parent.cacheAs === "bitmap").to.be.equal(true);
                    expect(parent.staticCache).to.be.equal(true);
                    child.pos(12, 7);
                    laterCompareExpect(WaitRenderTime, function () {
                        child.pos(4, 7);
                        parent.cacheAs = "none";
                        expect(parent.cacheAs === "none").to.be.equal(true);
                        expect(parent.staticCache).to.be.equal(true);
                        laterCompareExpect(WaitRenderTime, function () {
                            done();
                        }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [4 + 3, 7 + 5, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
                    }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [12 + 3, 7 + 5, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
                }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [4 + 3, 6 + 5, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
            }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [7 + 3, 9 + 5, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });
    });

    describe("size", function () {
        it("设置对象宽高不应该影响绘图区域大小", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            sprite.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            sprite.size(7, 9);
            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 19, 1, DefaultTestColorObj]);
        });
    });

    describe("rotation", function () {
        it("应正确对对象进行旋转", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite()).pos(20, 30);
            sprite.graphics.drawRect(3, 5, 13, 16, DefaultTestColorHexStr);
            sprite.rotation = -90;
            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareCanvasPixelRectVertex, [20 + 5, 30 - 3 - 13, 16, 13, 1, DefaultTestColorObj]);
        });
    });

    describe("skew", function () {
        it("应该正确对对象进行倾斜", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite()).pos(20, 30);
            sprite.graphics.drawRect(3, 5, 60, 80, DefaultTestColorHexStr);
            sprite.skew(30, 45);
            var colors = getColorObjArr([[0, 0, 255, 0, 0, 16], [82, 111, 255, 0, 0, 80], [43, 43, 255, 0, 0, 96], [40, 69, 255, 0, 0, 128]]);
            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareCanvasPixelRect, [24, 36, 83, 112, colors]);
        });
    });

    describe("transform", function () {
        it("应该正确设置对象矩阵");
    });

    describe("pivot", function () {
        it("应该正确设置对象轴心点", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite()).pos(20, 30);
            sprite.graphics.drawRect(3, 5, 60, 80, DefaultTestColorHexStr);
            sprite.pivot(30, 45);
            expect(compareRect(sprite.getBounds(), 20 + 3, 30 + 5, 60, 80)).to.be.equal(true);
            var colors = getColorObjArr([[0, 0, 255, 0, 0, 16], [82, 111, 255, 0, 0, 80], [43, 43, 255, 0, 0, 96], [40, 69, 255, 0, 0, 128]]);
            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareCanvasPixelRect, [20 + 3, 30 + 5, 60, 80, colors]);
        });
    });

    describe("getBounds", function () {
        it("应该正确显示图形范围", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite());
            sprite.graphics.drawRect(7, 25, 3, 16, DefaultTestColorHexStr);
            expect(compareRect(sprite.getBounds(), 7, 25, 3, 16)).to.be.equal(true);
            sprite.pos(3, 23);
            expect(compareRect(sprite.getBounds(), 7 + 3, 25 + 23, 3, 16)).to.be.equal(true);
            sprite.pivot(2, 21);
            expect(compareRect(sprite.getBounds(), 7 + 3, 25 + 23, 3, 16)).to.be.equal(true);
            sprite.size(31, 19);
            expect(compareRect(sprite.getBounds(), 7 + 3, 25 + 23, 3, 16)).to.be.equal(true);
            sprite.rotation = -90;
            expect(compareNearRect(sprite.getBounds(), 3 + 2 + (25 + 23) - (21 + 23), 23 + 21 - ((7 + 3) - (2 + 3)) - 3, 16, 3)).to.be.equal(true);
            sprite.scale(2, 0.5);
            expect(compareNearRect(sprite.getBounds(), 3 + 2 + (25 + 23) - (21 + 23), 23 + 21 - ((7 + 3) - (2 + 3)) - 3, 16 * 0.5, 3 * 2)).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareCanvasPixelRectVertex, [3 + 2 + (25 + 23) - (21 + 23), 23 + 21 - ((7 + 3) - (2 + 3)) - 3, 16 * 0.5, 3 * 2, 1, DefaultTestColorObj]);
        });
    });

    describe("setSelfBounds", function () {
        it("应该设置对象在自身坐标系下的边界范围，包括子对象的绘图区域，且不影响图形大小和位置", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            sprite.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            // setBounds and scrollRect will influence getBounds and getSelfBounds, not influence getGraphicBounds.
            // if setBounds and scrollRect exist at same time, setBounds is the priority value.
            // setBounds will not influence scrollRect, and vice versa.
            expect(sprite.scrollRect).to.be.equal(null);
            expect(compareRect(sprite.getBounds(), 3, 5, 11, 19)).to.be.equal(true);

            // setBounds will affect the bound directly.
            sprite.setSelfBounds(new Laya.Rectangle(2, 3, 6, 7));
            expect(sprite.scrollRect).to.be.equal(null);
            expect(compareRect(sprite.getBounds(), 2 + 3, 3 + 5, 6, 7)).to.be.equal(true);

            // if setBounds set, scrollRect will just influence the bound's offsetX or offsetY.
            sprite.scrollRect = new Laya.Rectangle(2, 4, 20, 25);
            expect(compareRect(sprite.getBounds(), 2 + 3 - 2, 3 + 5 - 4, 6, 7)).to.be.equal(true);

            // if not setBounds, scrollRect will be the bounds instead.
            sprite.setSelfBounds(null);
            expect(compareRect(sprite.getBounds(), 2 + 3 - 2, 4 + 5 - 4, 20, 25)).to.be.equal(true);

            // no setBounds and no scrollRect, the bound back to origin, which is the graphic's bound, including the childs.
            sprite.scrollRect = null;
            expect(compareRect(sprite.getBounds(), 3, 5, 11, 19)).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 19, 1, DefaultTestColorObj]);
        });
    });

    describe("getSelfBounds2", function () {
        it("应该获取本对象在自己坐标系的绘图区域，包括子对象的绘图区域", function (done) {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            var child0 = parent.addChild(new Laya.Sprite()).pos(2, 3);
            child0.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = parent.addChild(new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);

            // setBounds and scrollRect will influence getBounds and getSelfBounds, not influence getGraphicBounds.
            // if setBounds and scrollRect exist at same time, setBounds is the priority value.
            // setBounds will not influence scrollRect, and vice versa.
            expect(parent.scrollRect).to.be.equal(null);
            expect(compareRect(parent.getSelfBounds(), 2, 3, 7 + 17 - 2, 9 + 23 - 3)).to.be.equal(true);

            // setBounds will affect the bound directly.
            parent.setSelfBounds(new Laya.Rectangle(2, 3, 6, 7));
            expect(parent.scrollRect).to.be.equal(null);
            expect(compareRect(parent.getSelfBounds(), 2, 3, 6, 7)).to.be.equal(true);

            // if setBounds set, scrollRect will not influence the bound.
            parent.scrollRect = new Laya.Rectangle(2, 4, 20, 25);
            expect(compareRect(parent.getSelfBounds(), 2, 3, 6, 7)).to.be.equal(true);

            // if not setBounds, scrollRect will be the bounds instead.
            parent.setSelfBounds(null);
            expect(compareRect(parent.getSelfBounds(), 2, 4, 20, 25)).to.be.equal(true);

            // no setBounds and no scrollRect, the bound back to origin, which is the graphic's bound, including the childs.
            parent.scrollRect = null;
            expect(compareRect(parent.getSelfBounds(), 2, 3, 7 + 17 - 2, 9 + 23 - 3)).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [7 + 3, 9 + 5, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });
    });

    describe("getGraphicBounds2", function () {
        it("应该正确获取自身绘图区域，基于自身坐标系，不包括子对象的绘图区域", function (done) {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            parent.graphics.drawRect(2, 3, 11, 19, DefaultTestColorHexStr);
            var child = parent.addChild(new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);

            // setBounds and scrollRect should not influence getGraphicBounds.
            expect(parent.scrollRect).to.be.equal(null);
            expect(compareRect(parent.getGraphicBounds(), 2, 3, 11, 19)).to.be.equal(true);

            parent.setSelfBounds(new Laya.Rectangle(2, 3, 6, 7));
            expect(parent.scrollRect).to.be.equal(null);
            expect(compareRect(parent.getGraphicBounds(), 2, 3, 11, 19)).to.be.equal(true);

            parent.scrollRect = new Laya.Rectangle(2, 4, 20, 25);
            expect(compareRect(parent.getGraphicBounds(), 2, 3, 11, 19)).to.be.equal(true);

            parent.setSelfBounds(null);
            expect(compareRect(parent.getGraphicBounds(), 2, 3, 11, 19)).to.be.equal(true);

            parent.scrollRect = null;
            expect(compareRect(parent.getGraphicBounds(), 2, 3, 11, 19)).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareSimpleCrossRect, [[3 + 2, 5 + 3, 11, 19, 1, DefaultTestColorObj], [7 + 3, 9 + 5, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });
    });

    describe("setBounds", function () {
        it("应该设置对象在自身坐标系下的边界范围，包括子对象的绘图区域，且不影响图形大小和位置", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            sprite.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            // setBounds and scrollRect will influence getBounds and getSelfBounds, not influence getGraphicBounds.
            // if setBounds and scrollRect exist at same time, setBounds is the priority value.
            // setBounds will not influence scrollRect, and vice versa.
            expect(sprite.scrollRect).to.be.equal(null);
            expect(compareRect(sprite.getBounds(), 3, 5, 11, 19)).to.be.equal(true);

            // setBounds will affect the bound directly.
            sprite.setBounds(new Laya.Rectangle(2, 3, 6, 7));
            expect(sprite.scrollRect).to.be.equal(null);
            expect(compareRect(sprite.getBounds(), 2 + 3, 3 + 5, 6, 7)).to.be.equal(true);

            // if setBounds set, scrollRect will just influence the bound's offsetX or offsetY.
            sprite.scrollRect = new Laya.Rectangle(2, 4, 20, 25);
            expect(compareRect(sprite.getBounds(), 2 + 3 - 2, 3 + 5 - 4, 6, 7)).to.be.equal(true);

            // if not setBounds, scrollRect will be the bounds instead.
            sprite.setBounds(null);
            expect(compareRect(sprite.getBounds(), 2 + 3 - 2, 4 + 5 - 4, 20, 25)).to.be.equal(true);

            // no setBounds and no scrollRect, the bound back to origin, which is the graphic's bound, including the childs.
            sprite.scrollRect = null;
            expect(compareRect(sprite.getBounds(), 3, 5, 11, 19)).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareCanvasPixelRectVertex, [3, 5, 11, 19, 1, DefaultTestColorObj]);
        });
    });

    describe("getSelfBounds", function () {
        it("应该获取本对象在自己坐标系的绘图区域，包括子对象的绘图区域", function (done) {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            var child0 = parent.addChild(new Laya.Sprite()).pos(2, 3);
            child0.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = parent.addChild(new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);

            // setBounds and scrollRect will influence getBounds and getSelfBounds, not influence getGraphicBounds.
            // if setBounds and scrollRect exist at same time, setBounds is the priority value.
            // setBounds will not influence scrollRect, and vice versa.
            expect(parent.scrollRect).to.be.equal(null);
            expect(compareRect(parent.getSelfBounds(), 2, 3, 7 + 17 - 2, 9 + 23 - 3)).to.be.equal(true);

            // setBounds will affect the bound directly.
            parent.setBounds(new Laya.Rectangle(2, 3, 6, 7));
            expect(parent.scrollRect).to.be.equal(null);
            expect(compareRect(parent.getSelfBounds(), 2, 3, 6, 7)).to.be.equal(true);

            // if setBounds set, scrollRect will not influence the bound.
            parent.scrollRect = new Laya.Rectangle(2, 4, 20, 25);
            expect(compareRect(parent.getSelfBounds(), 2, 3, 6, 7)).to.be.equal(true);

            // if not setBounds, scrollRect will be the bounds instead.
            parent.setBounds(null);
            expect(compareRect(parent.getSelfBounds(), 2, 4, 20, 25)).to.be.equal(true);

            // no setBounds and no scrollRect, the bound back to origin, which is the graphic's bound, including the childs.
            parent.scrollRect = null;
            expect(compareRect(parent.getSelfBounds(), 2, 3, 7 + 17 - 2, 9 + 23 - 3)).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [7 + 3, 9 + 5, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });
    });

    describe("getGraphicBounds", function () {
        it("应该正确获取自身绘图区域，基于自身坐标系，不包括子对象的绘图区域", function (done) {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            parent.graphics.drawRect(2, 3, 11, 19, DefaultTestColorHexStr);
            var child = parent.addChild(new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);

            // setBounds and scrollRect should not influence getGraphicBounds.
            expect(parent.scrollRect).to.be.equal(null);
            expect(compareRect(parent.getGraphicBounds(), 2, 3, 11, 19)).to.be.equal(true);

            parent.setBounds(new Laya.Rectangle(2, 3, 6, 7));
            expect(parent.scrollRect).to.be.equal(null);
            expect(compareRect(parent.getGraphicBounds(), 2, 3, 11, 19)).to.be.equal(true);

            parent.scrollRect = new Laya.Rectangle(2, 4, 20, 25);
            expect(compareRect(parent.getGraphicBounds(), 2, 3, 11, 19)).to.be.equal(true);

            parent.setBounds(null);
            expect(compareRect(parent.getGraphicBounds(), 2, 3, 11, 19)).to.be.equal(true);

            parent.scrollRect = null;
            expect(compareRect(parent.getGraphicBounds(), 2, 3, 11, 19)).to.be.equal(true);

            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareSimpleCrossRect, [[3 + 2, 5 + 3, 11, 19, 1, DefaultTestColorObj], [7 + 3, 9 + 5, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });
    });

    describe("graphics", function () {
        it("应该正确设置对象绘图对象", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            sprite.graphics.drawRect(2, 3, 11, 19, DefaultTestColorHexStr);

            const g = new Laya.Graphics();
            g.drawRect(7, 9, 17, 23, DefaultTestColorHexStr2);
            sprite.graphics = g;

            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareCanvasPixelRectVertex, [7 + 3, 9 + 5, 17, 23, 1, DefaultTestColorObj2]);
        });
    });

    describe("drawToCanvas", function () {
        it("应该正确获取显示对象的裁剪截图并显示", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            sprite.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);

            //expect just draw the 'sprite' self, not draw the 'sprite3' that upon the 'sprite'.
            const sprite3 = Laya.stage.addChild(new Laya.Sprite().pos(3 + 2, 5 + 3));
            sprite3.graphics.drawRect(1, 2, 12, 23, DefaultTestColorHexStr2);

            const sprite2 = Laya.stage.addChild(new Laya.Sprite()).pos(3 + 2 + 12 + 8, 5);
            sprite2.texture = new Laya.Texture(sprite.drawToCanvas(11 + 2 + 1, 19 + 3 + 1, 2, 3));

            laterCompareExpect(WaitRenderTime, function () {
                sprite.scrollRect = new Laya.Rectangle(3, 5, 4, 6);
                sprite2.texture = new Laya.Texture(sprite.drawToCanvas(11 + 2 + 1, 19 + 3 + 1, 2, 3));
                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRectVertex, [3 + 2 + 12 + 8 + 2, 5 + 3, 4, 6, 1, DefaultTestColorObj]);
            }, compareCanvasPixelRectVertex, [3 + 2 + 12 + 8 + 2, 5 + 3, 11, 19, 1, DefaultTestColorObj]);
        });
    });

    describe("filters", function () {
        it("应该正确设置滤镜", function (done) {
            const orgStageColor = Laya.stage.bgColor;
            Laya.stage.bgColor = GlobalBlankColorHexStr;
            const sprite = Laya.stage.addChild(new Laya.Sprite()).pos(30, 40);
            const COLOR_MATRIX = [0.1086, 0.5094, 0.082, 0.6, 0, 0.2086, 0.3094, -0.082, 0.01, 0, 0.2158, 0.3046, 0.158, 0.02, 0, 0.1, 0.05, 0.06, 0.15, 0];
            sprite.filters = [new Laya.ColorFilter(COLOR_MATRIX), new Laya.GlowFilter("#FF0000", 14, 3, 8), new Laya.BlurFilter(5)];
            sprite.loadImage('./res/laya.jpg', -3, -2, 0, 0, Laya.Handler.create(null, function (tex) {
                // const colorsOrg = [
                //     {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 255}},
                //     {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 255}},
                //     {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 255}}];
                const colors = [
                    {'x': 45, 'y': 15, 'color': {'r': 255, 'g': 54, 'b': 92, 'a': 61}},
                    {'x': 42, 'y': 53, 'color': {'r': 255, 'g': 104, 'b': 166, 'a': 86}},
                    {'x': 83, 'y': 77, 'color': {'r': 255, 'g': 112, 'b': 174, 'a': 91}}];
                laterCompareExpect(WaitRenderTime, function () {
                    Laya.stage.bgColor = orgStageColor;
                    done();
                }, compareCanvasPixelRect, [30 - 3, 40 - 2, tex.width, tex.height, colors]);
            }));
        });
    });

    describe("blendMode", function () {
        it("应该正确设置对象混合模式", function (done) {
            Laya.stage.bgColor = DefaultTestColorHexStr;
            const sprite = Laya.stage.addChild(new Laya.Sprite()).pos(11, 7);
            sprite.blendMode = "lighter";
            sprite.loadImage('./res/phoenix0001.jpg', -3, -5, 0, 0, Laya.Handler.create(null, function (tex) {

                // const colors = [
                //     {'x': 43, 'y': 18, 'color': {'r': 56, 'g': 61, 'b': 3, 'a': 255}},
                //     {'x': 137, 'y': 90, 'color': {'r': 192, 'g': 186, 'b': 36, 'a': 255}},
                //     {'x': 21, 'y': 120, 'color': {'r': 12, 'g': 13, 'b': 5, 'a': 255}}];
                const colors = [
                    {'x': 43, 'y': 18, 'color': {'r': 255, 'g': 61, 'b': 5, 'a': 255}},
                    {'x': 137, 'y': 90, 'color': {'r': 255, 'g': 188, 'b': 31, 'a': 255}},
                    {'x': 21, 'y': 120, 'color': {'r': 255, 'g': 13, 'b': 2, 'a': 255}}];
                Laya.stage.bgColor = GlobalBlankColorHexStr;
                Laya.stage.graphics.clear();
                Laya.stage.graphics.drawRect(0, 0, Laya.stage.designWidth, Laya.stage.designHeight, DefaultTestColorHexStr);
                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRect, [11 - 3, 7 - 5, tex.width, tex.height, colors, true, {
                    'r': 255,
                    'g': 0,
                    'b': 0,
                    'a': 255
                }]);
            }));
        });
    });

    describe("localToGlobal", function () {
        it("应该正确地将本地坐标转换为全局坐标", function () {
            const parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            parent.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            const child = parent.addChild(new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);

            const globalPnt = child.localToGlobal(new Laya.Point.TEMP.setTo(2, 3));
            const expectPntX = 2 + 7 + 3;
            const expectPntY = 3 + 9 + 5;
            expect((expectPntX === globalPnt.x) && (expectPntY === globalPnt.y)).to.be.equal(true);
        });
    });

    describe("globalToLocal", function () {
        it("应该正确地将全局坐标转换为本地坐标", function () {
            const parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            parent.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            const child = parent.addChild(new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);

            const globalPntX = 2 + 7 + 3;
            const globalPntY = 3 + 9 + 5;
            const localPnt = child.globalToLocal(new Laya.Point.TEMP.setTo(globalPntX, globalPntY));
            const expectPntX = 2;
            const expectPntY = 3;
            expect(expectPntX === localPnt.x && expectPntY === localPnt.y).to.be.equal(true);
        });
    });

    describe("toParentPoint", function () {
        it("应该将本地坐标系坐标转转换到父容器坐标系", function () {
            const parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            parent.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            const child = parent.addChild(new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);

            const localPntX = 2;
            const localPntY = 3;
            const parentPnt = child.toParentPoint(new Laya.Point.TEMP.setTo(localPntX, localPntY));
            const expectPntX = 2 + 7;
            const expectPntY = 3 + 9;
            expect(expectPntX === parentPnt.x && expectPntY === parentPnt.y).to.be.equal(true);
        });
    });

    describe("fromParentPoint", function () {
        it("应该将父容器坐标系坐标转换到本地坐标系", function () {
            const parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            parent.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            const child = parent.addChild(new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);

            const parentPntX = 2 + 7;
            const parentPntY = 3 + 9;
            const localPnt = child.fromParentPoint(new Laya.Point.TEMP.setTo(parentPntX, parentPntY));
            const expectPntX = 2;
            const expectPntY = 3;
            expect(expectPntX === localPnt.x && expectPntY === localPnt.y).to.be.equal(true);
        });
    });

    describe("on", function () {
        it("应该正确设置事件侦听", function () {
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            var evtSpy = sinon.spy();
            sprite.on("myevent", null, evtSpy, ["five", 2, [1]]);
            sprite.event("myevent", [["five"], "2", null]);
            expect(evtSpy).to.have.been.calledWith("five", 2, [1], ["five"], "2", null);
            evtSpy.reset();
            sprite.event("myevent");
            expect(evtSpy).to.have.been.calledWith("five", 2, [1]);
        });
    });

    describe("once", function () {
        it("应该只触发一次事件侦听", function () {
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            var evtSpy = sinon.spy();
            sprite.once("myevent", null, evtSpy, ["five", 2, [1]]);
            sprite.event("myevent", [["five"], "2", null]);
            sprite.event("myevent", [[5], "2", 1]);
            expect(evtSpy).to.have.been.calledOnce;
            expect(evtSpy).to.have.been.calledWith("five", 2, [1], ["five"], "2", null);
        });
    });

    // mod to private
    // describe("parent", function () {
    //     it("应该正确设置父对象", function (done) {
    //             //         var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
    //         parent.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
    //
    //         var child = (new Laya.Sprite()).pos(7, 9);
    //         child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);
    //         child.parent = parent;
    //         // parent.addChild(child);
    //
    //         laterCompareExpect(WaitRenderTime, function () {
    //                 //             done();
    //         }, compareSimpleCrossRect, [[3, 5, 11, 19, 1, DefaultTestColorObj], [7 + 3, 9 + 5, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
    //     });
    // });

    describe("fromImage", function () {
        it("应该返回一个新的显示对象并加载指定图像", function (done) {
            Laya.loader.clearRes('./res/laya.jpg');
            const sprite = Laya.stage.addChild(Laya.Sprite.fromImage('./res/laya.jpg').pos(11, 7));
            expect(sprite.width).to.be.equal(0);
            expect(sprite.height).to.be.equal(0);
            const colors = [
                {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 255}},
                {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 255}},
                {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 255}}];
            expect(sprite.getGraphicBounds().width).to.be.equal(0);
            expect(sprite.getGraphicBounds().height).to.be.equal(0);
            // wait load completed.
            setTimeout(function () {
                expect(sprite.getGraphicBounds().width).to.not.be.equal(0);
                expect(sprite.getGraphicBounds().height).to.not.be.equal(0);
                laterCompareExpect(0, function () {
                    done();
                }, compareCanvasPixelRect, [11, 7, sprite.getGraphicBounds().width, sprite.getGraphicBounds().height, colors]);
            }, WaitRenderTime * 10);
        });
    });

    describe("render", function () {
        it("应该正确渲染对象");
    });

    describe("repaint", function () {
        it("应该正确进行重绘", function (done) {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            expect(parent.staticCache).to.be.equal(false);
            expect(parent.cacheAs === "none").to.be.equal(true);

            parent.cacheAs = "bitmap";
            expect(parent.cacheAs === "bitmap").to.be.equal(true);
            expect(parent.staticCache).to.be.equal(false);
            parent.staticCache = true;

            var child0 = parent.addChild(new Laya.Sprite()).pos(2, 3);
            child0.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = parent.addChild(new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);

            laterCompareExpect(WaitRenderTime, function () {
                child.pos(4, 6);
                laterCompareExpect(WaitRenderTime, function () {
                    child.pos(12, 7);
                    parent.repaint();
                    laterCompareExpect(WaitRenderTime, function () {
                        done();
                    }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [10, 14, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
                }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [10, 14, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
            }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [10, 14, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });
    });

    describe("parentRepaint", function () {
        it("应该正确设置父对象进行重绘", function (done) {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            expect(parent.staticCache).to.be.equal(false);
            expect(parent.cacheAs === "none").to.be.equal(true);

            parent.cacheAs = "bitmap";
            expect(parent.cacheAs === "bitmap").to.be.equal(true);
            expect(parent.staticCache).to.be.equal(false);
            parent.staticCache = true;

            var child0 = parent.addChild(new Laya.Sprite()).pos(2, 3);
            child0.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = parent.addChild(new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);

            laterCompareExpect(WaitRenderTime, function () {
                child.pos(4, 6);
                laterCompareExpect(WaitRenderTime, function () {
                    child.pos(12, 7);
                    child.parentRepaint();
                    laterCompareExpect(WaitRenderTime, function () {
                        done();
                    }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [10, 14, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
                }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [10, 14, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
            }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [10, 14, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });
    });

    describe("stage", function () {
        it("应该正确获取舞台对象", function () {
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            expect(sprite.stage === Laya.stage).to.be.equal(true);
        });
    });

    describe("mask", function () {
        it("应该正确设置遮罩", function (done) {
            var child = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            child.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var mask = new Laya.Sprite();
            mask.graphics.drawRect(2, 3, 5, 7, DefaultTestColorHexStr2);
            child.mask = mask;

            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareCanvasPixelRectVertex, [3 + 2, 5 + 3, 5, 7, 1, DefaultTestColorObj]);
        });
    });

    /*
     // Will test in MouseManager.js
     describe("mouseEnabled", function () {
     it("应该正确设置是否接收鼠标事件");
     });

     describe("startDrag", function () {
     it("应该正确拖动对象");
     });

     describe("stopDrag", function () {
     it("应该能够对正在拖动中的对象进行停止操作");
     });

     describe("hitTestPoint", function () {
     it("应该正确检测指定点是否在对象碰撞检测区域内");
     });

     describe("getMousePoint", function () {
     it("应该能够正确获取鼠标坐标在本对象坐标系内的坐标");
     });

     describe("hitArea", function () {
     it("应该正确影响事件响应区域");
     });
     */

    describe("globalScale", function () {
        it("应该正确获取此对象相对于stage的全局缩放值", function () {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5).scale(2, 4);
            parent.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = parent.addChild(new Laya.Sprite()).pos(7, 9).size(11, 22).scale(3, 2);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);

            expect(child.globalScaleX).to.be.equal(3 * 2);
            expect(child.globalScaleY).to.be.equal(2 * 4);
            expect(parent.width).to.be.equal(0);
            expect(parent.height).to.be.equal(0);
            expect(child.width).to.be.equal(11);
            expect(child.height).to.be.equal(22);
        });
    });

    describe("texture", function () {
        it("应该能够正确根据纹理绘图", function (done) {
            const colors = [
                {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 255}},
                {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 255}},
                {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 255}}];
            const sprite = Laya.stage.addChild(new Laya.Sprite()).pos(11, 7);
            var texture = new Laya.Texture();
            //it should be ok. laya 1.x will throw an error, otherwise laya 2.x will not.
            sprite.texture = texture;
            texture.on(Laya.Event.LOADED, null, function (fileBitmap) {
                // sprite.texture = texture;
                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRect, [11, 7, fileBitmap.width, fileBitmap.height, colors]);
            });
            texture.load('./res/laya.jpg');
        });
    });

    describe("loadImage", function () {
        it("应该正确加载并显示图形", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite()).pos(11, 7);
            sprite.loadImage('./res/laya.jpg', -3, -5, 0, 0, Laya.Handler.create(null, function (tex) {
                const colors = [
                    {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 255}},
                    {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 255}},
                    {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 255}}];
                //延后判断，为了先通过像素检测，关于宽高的问题，以后再修复
                expect(sprite.width).to.be.equal(0);
                expect(sprite.height).to.be.equal(0);
                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRect, [8, 2, tex.width, tex.height, colors]);
            }));
        });
    });

    /****************** Extends from Node *******************/
    describe("destroyChildren", function () {
        it("应该正确销毁子对象", function (done) {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            parent.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = parent.addChild(new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);

            laterCompareExpect(WaitRenderTime, function () {
                parent.destroyChildren();

                expect(!!child._graphics).to.be.equal(false);
                expect(!!child._style).to.be.equal(false);
                expect(!!child._transform).to.be.equal(false);

                expect(!!parent._graphics).to.be.equal(true);

                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRectVertex, [3, 5, 11, 19, 1, DefaultTestColorObj]);
            }, compareSimpleCrossRect, [[3, 5, 11, 19, 1, DefaultTestColorObj], [10, 14, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });
    });

    describe("addChild", function () {
        it("应该正确添加子对象", function (done) {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            parent.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = parent.addChild(new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);

            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareSimpleCrossRect, [[3, 5, 11, 19, 1, DefaultTestColorObj], [10, 14, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });
    });

    describe("addChildren", function () {
        it("应该能够批量添加子对象", function (done) {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            var child0 = (new Laya.Sprite()).pos(2, 3);
            child0.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = (new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);
            parent.addChildren(child0, child);

            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [7 + 3, 9 + 5, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });
    });

    describe("addChildAt", function () {
        it("应该能够将子对象添加到指定的索引位置", function (done) {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            var child0 = (new Laya.Sprite()).pos(2, 3);
            child0.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = (new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);
            parent.addChild(child);
            parent.addChildAt(child0, 0);

            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [7 + 3, 9 + 5, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });
    });

    describe("getChildIndex", function () {
        it("应该正确获取子对象索引", function () {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            var child0 = (new Laya.Sprite()).pos(2, 3);
            child0.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = (new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);
            parent.addChild(child);
            expect(parent.getChildIndex(child)).to.be.equal(0);
            parent.addChildAt(child0, 0);
            expect(parent.getChildIndex(child)).to.be.equal(1);
            expect(parent.getChildIndex(child0)).to.be.equal(0);
        });
    });

    describe("getChildByName", function () {
        it("应该能够获取指定名称的子对象", function () {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            var child0 = (new Laya.Sprite()).pos(2, 3);
            child0.name = 'child0';
            child0.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = (new Laya.Sprite()).pos(7, 9);
            child.name = 'child';
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);
            parent.addChild(child);
            parent.addChildAt(child0, 0);
            expect(parent.getChildByName('child')).to.be.equal(child);
            expect(parent.getChildByName('child0')).to.be.equal(child0);
        });
    });

    describe("getChildAt", function () {
        it("应该能够获取指定索引的子对象", function () {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            var child0 = (new Laya.Sprite()).pos(2, 3);
            child0.name = 'child0';
            child0.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = (new Laya.Sprite()).pos(7, 9);
            child.name = 'child';
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);
            expect(parent.getChildAt(0)).to.be.equal(null);
            parent.addChild(child);
            expect(parent.getChildAt(0)).to.be.equal(child);
            parent.addChildAt(child0, 0);
            expect(parent.getChildAt(0)).to.be.equal(child0);
            expect(parent.getChildAt(1)).to.be.equal(child);
        });
    });

    describe("setChildIndex", function (done) {
        it("应该正确设置子对象索引", function (done) {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            var child0 = (new Laya.Sprite()).pos(2, 3);
            child0.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = (new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);
            parent.addChild(child);
            parent.addChild(child0);
            parent.setChildIndex(child, 1);

            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [7 + 3, 9 + 5, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });
    });

    describe("removeChild", function () {
        it("应该能够正确删除子对象", function (done) {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            var child0 = (new Laya.Sprite()).pos(2, 3);
            child0.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = (new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);
            parent.addChildren(child0, child);

            laterCompareExpect(WaitRenderTime, function () {
                expect(parent.getChildIndex(child)).to.be.equal(1);
                parent.removeChild(child);
                expect(parent.getChildIndex(child)).to.be.equal(-1);
                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRectVertex, [5, 8, 11, 19, 1, DefaultTestColorObj]);
            }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [7 + 3, 9 + 5, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });
    });

    describe("removeSelf", function () {
        it("应该能够正确移除自身", function (done) {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            var child0 = (new Laya.Sprite()).pos(2, 3);
            child0.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = (new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);
            parent.addChildren(child0, child);

            laterCompareExpect(WaitRenderTime, function () {
                expect(parent.getChildIndex(child)).to.be.equal(1);
                child.removeSelf();
                expect(parent.getChildIndex(child)).to.be.equal(-1);
                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRectVertex, [5, 8, 11, 19, 1, DefaultTestColorObj]);
            }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [7 + 3, 9 + 5, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });
    });

    describe("removeChildByName", function () {
        it("应该根据指定名称移除相应的子对象", function (done) {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            var child0 = (new Laya.Sprite()).pos(2, 3);
            child0.name = 'child0';
            child0.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = (new Laya.Sprite()).pos(7, 9);
            child.name = 'child';
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);
            parent.addChildren(child0, child);

            laterCompareExpect(WaitRenderTime, function () {
                expect(parent.getChildIndex(child)).to.be.equal(1);
                parent.removeChildByName('child');
                expect(parent.getChildIndex(child)).to.be.equal(-1);
                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRectVertex, [5, 8, 11, 19, 1, DefaultTestColorObj]);
            }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [7 + 3, 9 + 5, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });
    });

    describe("removeChildAt", function () {
        it("应该根据指定索引移除相应的子对象", function (done) {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            var child0 = (new Laya.Sprite()).pos(2, 3);
            child0.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = (new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);
            parent.addChildren(child0, child);

            laterCompareExpect(WaitRenderTime, function () {
                expect(parent.getChildIndex(child)).to.be.equal(1);
                parent.removeChildAt(1);
                expect(parent.getChildIndex(child)).to.be.equal(-1);
                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRectVertex, [5, 8, 11, 19, 1, DefaultTestColorObj]);
            }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [7 + 3, 9 + 5, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });
    });

    describe("removeChildren", function () {
        it("应该移除指定索引区间的子对象", function (done) {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            var child0 = (new Laya.Sprite()).pos(2, 3);
            child0.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = (new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);
            parent.addChildren(child0, child);

            laterCompareExpect(WaitRenderTime, function () {
                expect(parent.getChildIndex(child0)).to.be.equal(0);
                parent.removeChildren(0, 1);
                expect(parent.getChildIndex(child0)).to.be.equal(-1);
                laterCompareExpect(WaitRenderTime, function () {
                    parent.addChild(child0);
                    parent.removeChildren(0, 2);
                    expect(parent.getChildIndex(child0)).to.be.equal(-1);
                    expect(parent.getChildIndex(child)).to.be.equal(-1);
                    laterCompareExpect(WaitRenderTime, function () {
                        done();
                    }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, GlobalBlankColorObj], [7 + 3, 9 + 5, 17, 23, 1, GlobalBlankColorObj]]);
                }, compareCanvasPixelRectVertex, [7 + 3, 9 + 5, 17, 23, 1, DefaultTestColorObj2]);
            }, compareSimpleCrossRect, [[5, 8, 11, 19, 1, DefaultTestColorObj], [7 + 3, 9 + 5, 17, 23, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });
    });

    describe("replaceChild", function () {
        it("应该能够用新的对象替换当前已有的子对象", function (done) {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            var child0 = (new Laya.Sprite()).pos(2, 3);
            child0.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = (new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);
            parent.addChild(child0);
            parent.replaceChild(child, child0);

            expect(parent.getChildIndex(child)).to.be.equal(0);
            expect(parent.getChildIndex(child0)).to.be.equal(-1);
            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareCanvasPixelRectVertex, [7 + 3, 9 + 5, 17, 23, 1, DefaultTestColorObj2]);
        });
    });

    describe("numChildren", function () {
        it("应该能够正确获取子对象数量", function () {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            var child0 = (new Laya.Sprite()).pos(2, 3);
            child0.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = (new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);
            parent.addChildren(child0, child);
            expect(parent.numChildren).to.be.equal(2);
        });
    });

    describe("displayedInStage", function () {
        it("应该能够正确获取此对象是否在显示列表中显示");
    });

    describe("contains", function () {
        it("应该正确判断当前容器中是否包含指定的子对象", function () {
            var parent = Laya.stage.addChild(new Laya.Sprite()).pos(3, 5);
            var child0 = (new Laya.Sprite()).pos(2, 3);
            child0.graphics.drawRect(0, 0, 11, 19, DefaultTestColorHexStr);
            var child = (new Laya.Sprite()).pos(7, 9);
            child.graphics.drawRect(0, 0, 17, 23, DefaultTestColorHexStr2);
            parent.addChildren(child0, child);
            expect(parent.contains(child0)).to.be.equal(true);
            expect(parent.contains(child)).to.be.equal(true);
        });
    });

    describe("timerLoop", function () {
        it("应该能够定时重复执行某函数", function (done) {
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            var evtSpy = sinon.spy();
            sprite.timerLoop(1, null, evtSpy, ["five", 2, [2]]);
            sprite.timerLoop(1, null, evtSpy, ["five", 2, [1]]);
            sprite.timerLoop(1, null, evtSpy, ["five", 2, [3]], false);

            setTimeout(function () {
                expect(evtSpy.callCount > 6).to.be.equal(true);
                expect(evtSpy).to.have.been.calledWith("five", 2, [3]);

                sprite.clearTimer(null, evtSpy);
                done();
            }, WaitTimerTime * 3);
        });
    });

    describe("timerOnce", function () {
        it("应该能够定时执行某函数且仅一次", function (done) {
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            var evtSpy = sinon.spy();
            sprite.timerOnce(1, null, evtSpy, ["five", 2, [2]]);
            sprite.timerOnce(1, null, evtSpy, ["five", 2, [1]]);
            sprite.timerOnce(1, null, evtSpy, ["five", 2, [3]], false);

            setTimeout(function () {
                expect(evtSpy).to.have.been.calledTwice;
                expect(evtSpy).to.have.been.calledWith("five", 2, [3]);
                done();
            }, WaitTimerTime * 3);
        });
    });

    describe("frameLoop", function () {
        it("应该能够基于帧频定时重复执行某函数", function () {
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            var evtSpy = sinon.spy();
            sprite.frameLoop(1, null, evtSpy, ["five", 2, [2]]);

            sprite.timer._update();
            expect(evtSpy).to.have.been.calledOnce;
            expect(evtSpy).to.have.been.calledWith("five", 2, [2]);

            sprite.frameLoop(1, null, evtSpy, ["five", 2, [1]]);

            sprite.timer._update();
            expect(evtSpy).to.have.been.calledTwice;
            expect(evtSpy).to.have.been.calledWith("five", 2, [1]);

            sprite.frameLoop(1, null, evtSpy, ["five", 2, [3]], false);

            sprite.timer._update();
            expect(evtSpy.callCount).to.be.equal(4);
            expect(evtSpy).to.have.been.calledWith("five", 2, [3]);

            sprite.clearTimer(null, evtSpy);
        });
    });

    describe("frameOnce", function () {
        it("应该能够基于帧频定时执行某函数且仅一次", function () {
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            var evtSpy = sinon.spy();
            sprite.frameOnce(1, null, evtSpy, ["five", 2, [2]]);
            sprite.frameOnce(1, null, evtSpy, ["five", 2, [1]]);
            sprite.frameOnce(1, null, evtSpy, ["five", 2, [3]], false);

            sprite.timer._update();
            expect(evtSpy).to.have.been.calledTwice;
            expect(evtSpy).to.have.been.calledWith("five", 2, [3]);

            sprite.timer._update();
            expect(evtSpy).to.have.been.calledTwice;
            expect(evtSpy).to.have.been.calledWith("five", 2, [3]);
        });
    });

    describe("clearTimer", function () {
        it("应该能够正确清理指定的定时器", function () {
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            var evtSpy = sinon.spy();
            sprite.frameOnce(1, null, evtSpy, ["five", 2, [2]]);
            sprite.clearTimer(null, evtSpy);

            sprite.timer._update();
            expect(evtSpy).to.not.have.been.called;
        });
    });

    /***************** Extends from EventDispatcher **************/
    describe("event", function () {
        it("应该能够正确派发事件", function () {
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            var evtSpy = sinon.spy();
            sprite.on("myevent", null, evtSpy, ["five", 2, [1]]);
            sprite.event("myevent", [["five"], "2", null]);
            expect(evtSpy).to.have.been.calledWith("five", 2, [1], ["five"], "2", null);
            evtSpy.reset();
            sprite.event("myevent");
            expect(evtSpy).to.have.been.calledWith("five", 2, [1]);
        });
    });

    describe("off", function () {
        it("应该能够正确移除指定的事件侦听", function () {
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            var evtSpy = sinon.spy();
            sprite.on("myevent", null, evtSpy, ["five", 2, [1]]);
            sprite.event("myevent", [["five"], "2", null]);
            expect(evtSpy).to.have.been.calledWith("five", 2, [1], ["five"], "2", null);
            evtSpy.reset();
            sprite.off('myevent', null, evtSpy);
            sprite.event("myevent");
            expect(evtSpy).to.not.have.been.called;
        });
    });

    describe("offAll", function () {
        it("应该能够移除此对象所有的事件侦听", function () {
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            var evtSpy = sinon.spy();
            sprite.on("myevent", null, evtSpy, ["five", 2, [1]]);
            var evtSpy2 = sinon.spy();
            sprite.on("myevent", null, evtSpy2, ["five", 2, [1]]);
            sprite.offAll('myevent');
            sprite.event("myevent");
            expect(evtSpy).to.not.have.been.called;
            expect(evtSpy2).to.not.have.been.called;
        });
    });

    describe("isMouseEvent", function () {
        it("应该能够正确判断指定的事件类型是否为鼠标事件", function () {
            var sprite = Laya.stage.addChild(new Laya.Sprite());
            expect(sprite.isMouseEvent("myevent")).to.be.equal(false);
            expect(sprite.isMouseEvent(Laya.Event.MOUSE_DOWN)).to.be.equal(true);
        });
    });


})
;
