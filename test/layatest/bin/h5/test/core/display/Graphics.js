'use strict';

describe("laya.display.Graphics", function () {
    beforeEach(clearContext);
    afterEach(clearContext);

    describe("constructor", function () {
        it("应该初始化正确的属性值", function () {
            expect(Laya.Graphics._cache && Laya.Graphics._cache.length !== 0).to.be.equal(false);
            const g = new Laya.Graphics();
            expect(!!g._sp).to.be.equal(false);
            expect(!!g._one).to.be.equal(false);
            expect(g._render).to.be.equal(g._renderEmpty);
            expect(!!g._cmds && g._cmds.length !== 0).to.be.equal(false);
            expect(!!g._vectorgraphArray && g._vectorgraphArray.length !== 0).to.be.equal(false);
            expect(!!g._graphicBounds).to.be.equal(false);
        });
    });

    describe("destroy", function () {
        it("应该正确销毁对象", function (done) {
            expect(!!Laya.Graphics._cache && Laya.Graphics._cache.length !== 0).to.be.equal(false);
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(3, 5));
            expect(sprite._renderType).to.be.equal(0);
            const g = new Laya.Graphics();

            g.drawRect(0, 0, 30, 50, DefaultTestColorHexStr);
            expect(!!Laya.Graphics._cache && Laya.Graphics._cache.length !== 0).to.be.equal(false);
            expect(!!g._sp).to.be.equal(false);
            expect(!!g._one && g._one.length > 0).to.be.equal(true);
            expect(g._render).to.be.equal(g._renderOne);
            expect(!!g._cmds && g._cmds.length !== 0).to.be.equal(false);
            expect(!!g._vectorgraphArray && g._vectorgraphArray.length !== 0).to.be.equal(false);
            expect(!!g._graphicBounds).to.be.equal(false);

            g.drawRect(20, 30, 25, 35, DefaultTestColorHexStr2);
            expect(!!Laya.Graphics._cache && Laya.Graphics._cache.length !== 0).to.be.equal(false);
            expect(!!g._sp).to.be.equal(false);
            expect(!!g._one && g._one.length > 0).to.be.equal(true);
            expect(g._render).to.be.equal(g._renderAll);
            expect(!!g._cmds && 2 === g._cmds.length).to.be.equal(true);
            expect(!!g._vectorgraphArray && g._vectorgraphArray.length > 0).to.be.equal(false);
            expect(!!g._graphicBounds).to.be.equal(false);

            sprite.graphics = g;
            expect(!!Laya.Graphics._cache && Laya.Graphics._cache.length !== 0).to.be.equal(false);
            expect(g._sp).to.be.equal(sprite);
            expect(!!g._one && g._one.length > 0).to.be.equal(true);
            expect(g._render).to.be.equal(g._renderAll);
            expect(!!g._cmds && 2 === g._cmds.length).to.be.equal(true);
            expect(!!g._vectorgraphArray && g._vectorgraphArray.length > 0).to.be.equal(false);
            expect(!!g._graphicBounds).to.be.equal(false);

            laterCompareExpect(WaitRenderTime, function () {
                g.destroy();
                expect(!!Laya.Graphics._cache && Laya.Graphics._cache.length !== 0).to.be.equal(false);
                expect(sprite._renderType).to.be.equal(0);
                expect(g._sp).to.be.equal(null);
                expect(!!g._one).to.be.equal(false);
                expect(g._render).to.be.equal(g._renderEmpty);
                expect(!!g._cmds && g._cmds.length !== 0).to.be.equal(false);
                expect(!!g._vectorgraphArray && g._vectorgraphArray.length !== 0).to.be.equal(false);
                expect(!!g._graphicBounds).to.be.equal(false);

                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareSimpleCrossRect, [[3, 5, 30, 50, 1, GlobalBlankColorObj], [20 + 3, 30 + 5, 25, 35, 1, GlobalBlankColorObj]]);
            }, compareSimpleCrossRect, [[3, 5, 30, 50, 1, DefaultTestColorObj], [20 + 3, 30 + 5, 25, 35, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });
    });

    describe("clear", function () {
        it("应该正确清空绘图", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(3, 5));
            const g = new Laya.Graphics();

            // detail tests has been done in "destroy" test. In this test, we care about "clear" mainly.
            g.drawRect(0, 0, 30, 50, DefaultTestColorHexStr);
            g.drawRect(20, 30, 25, 35, DefaultTestColorHexStr2);
            sprite.graphics = g;

            laterCompareExpect(WaitRenderTime, function () {
                g.clear(true);
                expect(Laya.Graphics._cache && Laya.Graphics._cache.length !== 0).to.be.equal(false);
                expect(sprite._renderType).to.be.equal(0);
                // expect(g._sp).to.be.equal(null);
                expect(!!g._one).to.be.equal(false);
                expect(g._render).to.be.equal(g._renderEmpty);
                expect(!!g._cmds && g._cmds.length !== 0).to.be.equal(false);
                expect(!!g._vectorgraphArray && g._vectorgraphArray.length !== 0).to.be.equal(false);
                expect(!!g._graphicBounds).to.be.equal(false);

                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareSimpleCrossRect, [[3, 5, 30, 50, 1, GlobalBlankColorObj], [20 + 3, 30 + 5, 25, 35, 1, GlobalBlankColorObj]]);
            }, compareSimpleCrossRect, [[3, 5, 30, 50, 1, DefaultTestColorObj], [20 + 3, 30 + 5, 25, 35, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });
    });

    describe("getBounds", function () {
        it("应该正确获取位置及宽高信息矩阵", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(3, 5));
            const g = new Laya.Graphics();
            g.drawRect(2, 3, 17, 23, DefaultTestColorHexStr);
            sprite.graphics = g;
            expect(compareRect(g.getBounds(), 2, 3, 17, 23)).to.be.equal(true);
            g.loadImage('./res/laya.jpg', 11, 13, 15, 17, complete);
            function complete(tex) {
                expect(compareRect(g.getBounds(), 2, 3, 11 + 15 - 2, 13 + 17 - 3)).to.be.equal(true);
                done();
            }
        });
    });

    describe("drawTexture", function () {
        it("应该正确绘制纹理", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(3, 5));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            const tex = new Laya.Texture();
            // g.drawTexture(tex, 2, 4, 25, 35, null, 0.5);
            tex.on(Laya.Event.LOADED, null, function (fileBitmap) {
                g.save();
                g.drawTexture(tex, 2, 4, 0, 0, null, 0.5);
                g.restore();
                expect(fileBitmap.width).to.be.equal(90);
                expect(fileBitmap.height).to.be.equal(90);
                var colors = getColorObjArr([[45, 15, 34, 183, 163, 128], [42, 53, 201, 253, 245, 128], [83, 77, 249, 249, 251, 128]]);
                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRect, [3 + 2, 5 + 4, 90, 90, colors]);
            });
            tex.load('./res/laya.jpg');
        });
    });

    describe("drawTextures", function () {
        it("应该正确批量绘制同样纹理", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(3, 5));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            const tex = new Laya.Texture();
            // g.drawTexture(tex, 2, 4, 25, 35, null, 0.5);
            tex.on(Laya.Event.LOADED, null, function (fileBitmap) {
                g.drawTextures(tex, [2, 4, 2 + 83 + 1, 4 + 77 + 1]);
                expect(fileBitmap.width).to.be.equal(90);
                expect(fileBitmap.height).to.be.equal(90);
                const colors = [
                    {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 0xFF}},
                    {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 0xFF}},
                    {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 0xFF}},
                    {'x': 45 + 83 + 1, 'y': 15 + 77 + 1, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 0xFF}},
                    {'x': 42 + 83 + 1, 'y': 53 + 77 + 1, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 0xFF}},
                    {'x': 83 + 83 + 1, 'y': 77 + 77 + 1, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 0xFF}}
                ];
                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRect, [3 + 2, 5 + 4, (83 + 1) * 2 + tex.width, (77 + 1) * 2 + tex.height, colors]);
            });
            tex.load('./res/laya.jpg');
        });
    });

    describe("fillTexture", function () {
        it("应该正确填充纹理", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(3, 7));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            const tex = new Laya.Texture();
            tex.on(Laya.Event.LOADED, null, function (fileBitmap) {
                g.fillTexture(tex, 2, 4, 192, 188, 'repeat', Laya.Point.TEMP.setTo(-39, 18));
                const colors = [
                    {'x': 83 - 39, 'y': 77 + 18 - tex.height, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 0xFF}},
                    {
                        'x': 83 - 39 + tex.width,
                        'y': 77 + 18 - tex.height,
                        'color': {'r': 250, 'g': 250, 'b': 252, 'a': 0xFF}
                    },

                    {'x': 45 - 39, 'y': 15 + 18, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 0xFF}},
                    {'x': 42 - 39, 'y': 53 + 18, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 0xFF}},
                    {'x': 83 - 39, 'y': 77 + 18, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 0xFF}},

                    {
                        'x': 45 - 39 + tex.width,
                        'y': 15 + 18 + tex.height,
                        'color': {'r': 34, 'g': 183, 'b': 163, 'a': 0xFF}
                    },
                    {
                        'x': 42 - 39 + tex.width,
                        'y': 53 + 18 + tex.height,
                        'color': {'r': 202, 'g': 253, 'b': 246, 'a': 0xFF}
                    },
                    {
                        'x': 83 - 39 + tex.width,
                        'y': 77 + 18 + tex.height,
                        'color': {'r': 250, 'g': 250, 'b': 252, 'a': 0xFF}
                    }
                ];
                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRect, [3 + 2, 7 + 4, 192, 188, colors]);
            });
            tex.load('./res/laya.jpg');
        });
    });

    describe("clipRect", function () {
        it("应该正确设置裁剪区域", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(3, 7));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            g.save();
            g.clipRect(3, 2, 5, 7);
            g.drawRect(2, 4, 15, 17, DefaultTestColorHexStr);
            g.restore();
            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareCanvasPixelRectVertex, [3 + 3, 7 + 4, 5, 5, 1, DefaultTestColorObj]);
        });
    });

    describe("fillText", function () {
        it("应该正确绘制文本", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(5, 3));
            const g = new Laya.Graphics();
            sprite.graphics = g;

            g.fillText("❶人和Dog是☆1+@好友！", 0, 0, '15px Microsoft YaHei', '#EEAA66', 'left');
            expect(compareNearRect(g.getBounds(), 0, 0, 0, 0)).to.be.equal(false);
            var colorData = [[6, 3, 238, 169, 101, 169], [19, 6, 237, 170, 101, 114], [66, 10, 237, 169, 101, 157], [173, 7, 238, 170, 101, 162]];
            var colors = getColorObjArr(colorData);
            laterCompareExpect(WaitRenderTime, function () {
                g.clear();
                g.fillText("❶人和Dog是☆1+@好友！", 180, 0, '15px Microsoft YaHei', '#EEAA66', 'right');
                expect(compareNearRect(g.getBounds(), 0, 0, 0, 0)).to.be.equal(false);
                colorData = [[34, 7, 238, 170, 102, 75], [50, 9, 238, 169, 99, 59], [108, 11, 238, 170, 101, 162], [134, 8, 238, 170, 101, 162]];
                colors = getColorObjArr(colorData);
                laterCompareExpect(WaitRenderTime, function () {
                    g.clear();
                    g.fillText("❶人和Dog是☆1+@好友！", 90, 0, '15px Microsoft YaHei', '#EEAA66', 'center');
                    expect(compareNearRect(g.getBounds(), 0, 0, 0, 0)).to.be.equal(false);
                    colorData = [[56, 9, 238, 172, 100, 46], [118, 7, 238, 169, 100, 89], [156, 6, 238, 169, 101, 152], [174, 11, 255, 128, 128, 2]];
                    colors = getColorObjArr(colorData);
                    laterCompareExpect(WaitRenderTime, function () {
                        done();
                    }, compareCanvasPixelRect, [5, 7, 187 - 12, 52 - 36, colors]);
                }, compareCanvasPixelRect, [4, 7, 186 - 11, 52 - 36, colors]);
            }, compareCanvasPixelRect, [5, 7, 187 - 12, 52 - 36, colors]);
        });
    });

    describe("fillBorderText", function () {
        it("应该正确绘制“被填充且镶边的”文本", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(5, 3));
            const g = new Laya.Graphics();
            sprite.graphics = g;

            g.fillBorderText("❶人和Dog是☆1+@好友！", 0, 0, '15px Microsoft YaHei', '#EEAA66', '#66AAEE', 3, 'left');
            expect(compareNearRect(g.getBounds(), 0, 0, 0, 0)).to.be.equal(false);
            var colorData = [[0, 11, 103, 171, 239, 97], [18, 0, 103, 169, 238, 77], [50, 1, 101, 169, 238, 146], [176, 1, 103, 169, 238, 77]];
            // transform and amend offset.
            var colors = getColorObjArr(colorData, 0, 1);
            laterCompareExpect(WaitRenderTime, function () {
                g.clear();
                g.fillBorderText("❶人和Dog是☆1+@好友！", 180, 0, '15px Microsoft YaHei', '#EEAA66', '#66AAEE', 3, 'right');
                expect(compareNearRect(g.getBounds(), 0, 0, 0, 0)).to.be.equal(false);
                colorData = [[39, 11, 101, 169, 238, 161], [57, 4, 103, 169, 238, 77], [94, 1, 102, 172, 241, 55], [108, 0, 102, 172, 241, 55]];
                colors = getColorObjArr(colorData, 0, 1);
                laterCompareExpect(WaitRenderTime, function () {
                    g.clear();
                    g.fillBorderText("❶人和Dog是☆1+@好友！", 91, 0, '15px Microsoft YaHei', '#EEAA66', '#66AAEE', 3, 'center');
                    expect(compareNearRect(g.getBounds(), 0, 0, 0, 0)).to.be.equal(false);
                    colorData = [[61, 4, 101, 169, 238, 146], [74, 0, 103, 171, 239, 97], [94, 1, 101, 170, 239, 96], [131, 1, 101, 169, 238, 161]];
                    colors = getColorObjArr(colorData, 0, 1);
                    laterCompareExpect(WaitRenderTime, function () {
                        done();
                    }, compareCanvasPixelRect, [5, 4, 189 - 12, 54 - 33, colors]);
                }, compareCanvasPixelRect, [3, 4, 187 - 10, 54 - 33, colors]);
            }, compareCanvasPixelRect, [4, 4, 188 - 11, 54 - 33, colors]);
        });
    });

    describe("strokeText", function () {
        it("应该正确绘制没有填色的文本", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(5, 3));
            const g = new Laya.Graphics();
            sprite.graphics = g;

            g.strokeText("❶人和Dog是☆1+@好友！", 0, 0, '15px Microsoft YaHei', '#EEAA66', 3, 'left');
            expect(compareNearRect(g.getBounds(), 0, 0, 0, 0)).to.be.equal(false);
            var colorData = [[3, 8, 238, 169, 102, 235], [20, 12, 238, 170, 101, 176], [50, 2, 238, 169, 101, 146], [176, 14, 238, 170, 100, 132]];
            // transform and amend offset.
            var colors = getColorObjArr(colorData);
            laterCompareExpect(WaitRenderTime, function () {
                g.clear();
                g.strokeText("❶人和Dog是☆1+@好友！", 180, 0, '15px Microsoft YaHei', '#EEAA66', 3, 'right');
                expect(compareNearRect(g.getBounds(), 0, 0, 0, 0)).to.be.equal(false);
                colorData = [[39, 12, 238, 169, 101, 161], [52, 3, 237, 170, 102, 200], [79, 12, 237, 170, 102, 246], [105, 2, 238, 170, 101, 212]];
                colors = getColorObjArr(colorData);
                laterCompareExpect(WaitRenderTime, function () {
                    g.clear();
                    g.strokeText("❶人和Dog是☆1+@好友！", 91, 0, '15px Microsoft YaHei', '#EEAA66', 3, 'center');
                    expect(compareNearRect(g.getBounds(), 0, 0, 0, 0)).to.be.equal(false);
                    colorData = [[59, 9, 238, 170, 101, 162], [94, 2, 239, 170, 101, 96], [105, 2, 238, 170, 101, 234], [128, 10, 238, 170, 101, 224]];
                    colors = getColorObjArr(colorData);
                    laterCompareExpect(WaitRenderTime, function () {
                        done();
                    }, compareCanvasPixelRect, [5, 4, 189 - 12, 54 - 33, colors]);
                }, compareCanvasPixelRect, [3, 4, 187 - 10, 54 - 33, colors]);
            }, compareCanvasPixelRect, [4, 4, 188 - 11, 54 - 33, colors]);
        });
    });

    describe("alpha", function () {
        it("应该正确设置不透明度", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(0, 0));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            g.save();
            g.alpha(0.5);
            g.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            g.restore();
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

    describe("setAlpha", function () {
        it("应该正确设置不透明度", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(0, 0));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            g.save();
            g.setAlpha(0.5);
            g.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            g.restore();
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

    describe("transform", function () {
        it("应该正确应用矩阵"/*, function (done) {
         const sprite = Laya.stage.addChild(new Laya.Sprite().pos(0, 0));
         const g = new Laya.Graphics();
         sprite.graphics = g;
         g.save();
         g.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
         g.transform(new Laya.Matrix(6,9,0,0,2,3), 3, 5);
         g.restore();
         laterCompareExpect(WaitRenderTime, function () {
         done();
         }, compareCanvasPixelRectVertex, [3 + 2 + (25 + 23) - (21 + 23), 23 + 21 - ((7 + 3) - (2 + 3)) - 3, 16 * 0.5, 3 * 2, 1, DefaultTestColorObj]);
         }*/);
    });

    describe("rotate", function () {
        it("应该正确应用旋转", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(0, 0));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            g.save();
            g.rotate(Math.PI / 2, 3 + 11, 5 + 17);
            g.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);
            g.restore();
            expect(compareNearRect(g.getBounds(), 14, 11, 17, 11)).to.be.equal(true);
            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareCanvasPixelRectVertex, [14, 11, 17, 11, 1, DefaultTestColorObj]);
        });
    });

    describe("scale", function () {
        it("应该正确应用缩放", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(0, 0));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            g.save();
            g.scale(2, 0.5, 3, 5 + 18);
            g.drawRect(3, 5, 11, 18, DefaultTestColorHexStr);
            g.restore();
            expect(compareRect(g.getBounds(), 3, 5 + 18 / 2, 22, 9)).to.be.equal(true);
            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareCanvasPixelRectVertex, [3, 5 + 18 / 2, 22, 9, 1, DefaultTestColorObj]);
        });
    });

    describe("translate", function () {
        it("应该正确应用位置", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(0, 0));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            g.save();
            g.translate(2, 4);
            g.drawRect(3, 5, 11, 18, DefaultTestColorHexStr);
            g.restore();
            expect(compareRect(g.getBounds(), 2 + 3, 4 + 5, 11, 18)).to.be.equal(true);
            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareCanvasPixelRectVertex, [2 + 3, 4 + 5, 11, 18, 1, DefaultTestColorObj]);
        });
    });

    describe("save", function () {
        it("应该正确保存当前上下文", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(2, 4));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            g.save();
            g.translate(3, 5);
            g.drawRect(0, 0, 11, 18, DefaultTestColorHexStr);
            g.restore();
            g.drawRect(3+3, 5+5, 11, 18, DefaultTestColorHexStr2);
            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareSimpleCrossRect, [[2+3, 4+5, 11, 18, 1, DefaultTestColorObj], [2 + 3 + 3, 4 + 5 + 5, 11, 18, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });
    });

    describe("restore", function () {
        it("应该正确恢复已存储的上下文", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(2, 4));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            g.save();
            g.translate(3, 5);
            g.drawRect(0, 0, 11, 18, DefaultTestColorHexStr);
            g.restore();
            g.drawRect(3+3, 5+5, 11, 18, DefaultTestColorHexStr2);
            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareSimpleCrossRect, [[2+3, 4+5, 11, 18, 1, DefaultTestColorObj], [2 + 3 + 3, 4 + 5 + 5, 11, 18, 1, DefaultTestColorObj2, true, DefaultTestColorObj2, true]]);
        });
    });

    describe("loadImage", function () {
        it("应该正确加载并显示图形", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(11, 7));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            g.loadImage('./res/laya.jpg', -3, -5, 0, 0, function (tex) {
                expect(compareRect(g.getBounds(), -3, -5, 90, 90)).to.be.equal(true);
                const colors = [
                    {'x': 45, 'y': 15, 'color': {'r': 34, 'g': 183, 'b': 163, 'a': 255}},
                    {'x': 42, 'y': 53, 'color': {'r': 202, 'g': 253, 'b': 246, 'a': 255}},
                    {'x': 83, 'y': 77, 'color': {'r': 250, 'g': 250, 'b': 252, 'a': 255}}];
                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRect, [8, 2, tex.width, tex.height, colors]);
            });
        });
    });

    describe("drawLine", function () {
        it("应该正确绘制一条线", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(11, 7));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            g.drawLine(3, 5, 3, 17, DefaultTestColorHexStr, 3);
            var colors = getColorObjArr([[0, 0, 255, 0, 0, 128], [2, 1, 255, 0, 0, 255], [2, 12, 255, 0, 0, 128], [0, 11, 255, 0, 0, 255]]);
            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareCanvasPixelRect, [13, 12, 3, 13, colors]);
        });
    });

    describe("drawLines", function () {
        it("应该正确绘制多条线", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(11, 7));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            g.drawLines(3, 5, [20, 20, 30, 20, 30, 30, 20, 30, 20, 20], DefaultTestColorHexStr, 1);
            var colors = getColorObjArr([[0, 0, 255, 0, 0, 190], [10, 1, 255, 0, 0, 255], [10, 10, 255, 0, 0, 191], [0, 9, 255, 0, 0, 255]]);
            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareCanvasPixelRect, [34, 32, 11, 11, colors]);
        });
    });

    describe("drawCurves", function () {
        it("应该正确绘制多条曲线", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(11, 7));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            g.drawCurves(0, 0, [20, 20, 40, 30, 60, 20, 80, 10, 100, 20], DefaultTestColorHexStr, 1);
            // expect(compareRect(g.getBounds(), 20, 20, 81, 11)).to.be.equal(true);

            var colors = getColorObjArr([[0, 5, 255, 0, 0, 78], [18, 10, 255, 0, 0, 175], [40, 5, 255, 0, 0, 175], [61, 0, 255, 0, 0, 78], [79, 6, 255, 0, 0, 79]]);
            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareCanvasPixelRect, [20 + 11, 14 + 7, 80, 12, colors]);
        });
    });

    describe("drawRect", function () {
        it("应该正确绘制矩形", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(11, 7));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            g.drawRect(3, 5, 11, 17, DefaultTestColorHexStr);

            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareCanvasPixelRectVertex, [3 + 11, 5 + 7, 11, 17, 1, DefaultTestColorObj]);
        });
    });

    describe("drawCircle", function () {
        it("应该正确绘制圆形", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(11, 7));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            g.drawCircle(20, 20, 10, DefaultTestColorHexStr, DefaultTestColorHexStr2, 2);
            // expect(compareRect(g.getBounds(), 20, 20, 81, 11)).to.be.equal(true);

            var colors = getColorObjArr([[0, 8, 0, 255, 0, 192], [2, 8, 191, 64, 0, 255], [12, 2, 127, 128, 0, 255], [17, 12, 127, 128, 0, 255], [12, 17, 128, 127, 0, 255]]);
            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareCanvasPixelRect, [10 + 11, 10 + 7, 20, 20, colors]);
        });
    });

    describe("drawPie", function () {
        it("应该正确绘制扇形", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(11, 7));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            g.drawPie(20, 30, 10, 0, 45, DefaultTestColorHexStr, DefaultTestColorHexStr2, 2);
            // expect(compareRect(g.getBounds(), 20, 20, 81, 11)).to.be.equal(true);

            var colors = getColorObjArr([[0, 0, 0, 255, 0, 16], [9, 3, 111, 144, 0, 255], [11, 4, 0, 255, 0, 64], [9, 7, 0, 255, 0, 48]]);
            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareCanvasPixelRect, [29, 37, 12, 8, colors]);
        });
    });

    describe("drawPoly", function () {
        it("应该正确绘制多边形", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(11, 7));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            g.drawPoly(19, 23, [20, 20, 30, 10, 40, 20, 40, 30, 30, 40, 20, 30], DefaultTestColorHexStr, DefaultTestColorHexStr2, 2);
            // expect(compareRect(g.getBounds(), 20, 20, 81, 11)).to.be.equal(true);

            var colors = getColorObjArr([[0, 11, 0, 255, 0, 208], [3, 11, 239, 16, 0, 255], [10, 1, 0, 255, 0, 207], [11, 4, 239, 16, 0, 255], [21, 11, 0, 255, 0, 207], [19, 21, 239, 16, 0, 255], [21, 22, 0, 255, 0, 208], [11, 32, 0, 255, 0, 208], [0, 22, 0, 255, 0, 208]]);
            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareCanvasPixelRect, [49, 38, 22, 34, colors]);
        });
    });

    describe("drawPath", function () {
        it("应该正确绘制路径", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(11, 7));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            g.drawPath(0, 0, [["moveTo", 20, 30], ["lineTo", 40, 10], ["lineTo", 60, 30], ["arcTo", 100, 30, 140, 70, 40], ["closePath"]], {fillStyle: DefaultTestColorHexStr}, {
                strokeStyle: DefaultTestColorHexStr2,
                lineWidth: 2,
                lineJoin: "miter",
                lineCap: "square",
                miterLimit: 3
            });
            // expect(compareRect(g.getBounds(), 20, 20, 81, 11)).to.be.equal(true);

            var colors = getColorObjArr([[0, 22, 0, 255, 0, 144], [5, 20, 239, 16, 0, 255], [22, 1, 0, 255, 0, 207], [41, 22, 47, 208, 0, 255], [67, 23, 191, 64, 0, 255], [84, 28, 223, 32, 0, 255], [90, 32, 16, 239, 0, 255], [42, 26, 48, 207, 0, 255]]);
            laterCompareExpect(WaitRenderTime, function () {
                done();
            }, compareCanvasPixelRect, [18 + 11, 8 + 7, 95, 35, colors]);
        });
    });


});