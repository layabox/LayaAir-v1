'use strict';

describe("laya.resource.Texture", function () {
    beforeEach(clearContext);
    afterEach(clearContext);

    describe("constructor", function () {
        it("应该初始化正确的属性值", function (done) {
            expect(compareSimpleArr(Laya.Texture.DEF_UV, [0, 0, 1.0, 0, 1.0, 1.0, 0, 1.0])).to.be.equal(true);
            expect(compareSimpleArr(Laya.Texture.INV_UV, [0, 1, 1.0, 1, 1.0, 0.0, 0, 0.0])).to.be.equal(true);
            expect(Laya.Texture._rect1).to.be.instanceOf(Laya.Rectangle);
            expect(Laya.Texture._rect2).to.be.instanceOf(Laya.Rectangle);

            var tex = new Laya.Texture();
            expect(!!tex.bitmap).to.be.equal(false);
            expect(compareSimpleArr(tex.uv, Laya.Texture.DEF_UV)).to.be.equal(true);
            expect(tex.offsetX).to.be.equal(0);
            expect(tex.offsetY).to.be.equal(0);
            expect(tex.sourceWidth).to.be.equal(0);
            expect(tex.sourceHeight).to.be.equal(0);
            expect(tex._loaded).to.be.equal(false);
            expect(tex._w).to.be.equal(0);
            expect(tex._h).to.be.equal(0);
            expect(!!tex.$_GID).to.be.equal(false);
            expect(!!tex.url).to.be.equal(false);
            expect(tex._uvID).to.be.equal(0);
            expect(tex.loaded).to.be.equal(false);
            expect(tex.released).to.be.equal(true);
            expect(tex.source).to.be.equal(null);
            expect(tex.width).to.be.equal(0);
            expect(tex.height).to.be.equal(0);
            expect(tex.isLinearSampling).to.be.equal(true);
            expect(tex.repeat).to.be.equal(true);

            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(11, 7));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            // g.drawTexture(tex, 2, 4, 25, 35, null, 0.5);
            tex.on(Laya.Event.LOADED, null, function (fileBitmap) {
                expect(fileBitmap.width).to.be.equal(90);
                expect(fileBitmap.height).to.be.equal(90);

                const myuv = [0.5, 0.5, 1.0, 0.5, 0.5, 1.0, 1.0, 1.0];
                const tex2 = new Laya.Texture(fileBitmap, myuv);

                expect(tex2.bitmap).to.be.instanceOf(Laya.FileBitmap);
                expect(compareSimpleArr(tex2.uv, myuv)).to.be.equal(true);
                expect(tex2._w).to.be.equal(90);
                expect(tex2._h).to.be.equal(90);
                expect(tex2.sourceWidth).to.be.equal(90);
                expect(tex2.sourceHeight).to.be.equal(90);
                expect(tex2._loaded).to.be.equal(true);
                expect(tex2.loaded).to.be.equal(true);
                expect(tex2.released).to.be.equal(false);
                expect(tex2.source).to.be.equal(fileBitmap.source);
                expect(tex2.width).to.be.equal(90);
                expect(tex2.height).to.be.equal(90);
                expect(tex2.isLinearSampling).to.be.equal(true);
                expect(tex2.repeat).to.be.equal(true);

                g.drawTexture(tex2, 0, 0, 0, 0, null, 0.5);
                var colors = getColorObjArr([[0, 0, 253, 253, 247, 128], [24, 0, 128, 205, 193, 128], [89, 0, 255, 253, 251, 128], [8, 15, 159, 219, 211, 128], [0, 89, 211, 255, 253, 128], [89, 89, 255, 255, 255, 128]]);
                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRect, [11, 7, 90, 90, colors]);
            });
            tex.load('./res/laya.jpg');

        });
    });

    describe("setTo", function () {
        it("应该正确设置此对象的位图资源、UV数据信息", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(11, 7));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            // g.drawTexture(tex, 2, 4, 25, 35, null, 0.5);
            const tex = new Laya.Texture();
            tex.on(Laya.Event.LOADED, null, function (fileBitmap) {
                expect(fileBitmap.width).to.be.equal(90);
                expect(fileBitmap.height).to.be.equal(90);

                const myuv = [0.5, 0.5, 1.0, 0.5, 0.5, 1.0, 1.0, 1.0];
                const tex2 = new Laya.Texture();
                tex2.setTo(fileBitmap, myuv);

                expect(tex2.bitmap).to.be.instanceOf(Laya.FileBitmap);
                expect(compareSimpleArr(tex2.uv, myuv)).to.be.equal(true);
                expect(tex2._w).to.be.equal(90);
                expect(tex2._h).to.be.equal(90);
                expect(tex2.sourceWidth).to.be.equal(90);
                expect(tex2.sourceHeight).to.be.equal(90);
                expect(tex2._loaded).to.be.equal(true);
                expect(tex2.loaded).to.be.equal(true);
                expect(tex2.released).to.be.equal(false);
                expect(tex2.source).to.be.equal(fileBitmap.source);
                expect(tex2.width).to.be.equal(90);
                expect(tex2.height).to.be.equal(90);
                expect(tex2.isLinearSampling).to.be.equal(true);
                expect(tex2.repeat).to.be.equal(true);

                g.drawTexture(tex2, 0, 0, 0, 0, null, 0.5);
                var colors = getColorObjArr([[0, 0, 253, 253, 247, 128], [24, 0, 128, 205, 193, 128], [89, 0, 255, 253, 251, 128], [8, 15, 159, 219, 211, 128], [0, 89, 211, 255, 253, 128], [89, 89, 255, 255, 255, 128]]);
                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRect, [11, 7, 90, 90, colors]);
            });
            tex.load('./res/laya.jpg');

        });
    });

    describe("moveUV", function () {
        it("应该正确平移UV", function () {
            const uv = [0.5, 0.5, 1.0, 0.5, 0.5, 1.0, 1.0, 1.0];
            const uv2 = Laya.Texture.moveUV(0.2, 0.3, uv);
            expect(compareSimpleArr(uv2, [0.5 + 0.2, 0.5 + 0.3, 1.0+0.2, 0.5 + 0.3, 0.5 + 0.2, 1.0+0.3, 1.0+0.2, 1.0+0.3])).to.be.equal(true);
        });
    });

    describe("create", function () {
        it("应该正确创建Texture对象", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(11, 7));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            // g.drawTexture(tex, 2, 4, 25, 35, null, 0.5);
            const tex = new Laya.Texture();
            tex.on(Laya.Event.LOADED, null, function (fileBitmap) {
                expect(fileBitmap.width).to.be.equal(90);
                expect(fileBitmap.height).to.be.equal(90);

                const tex2 = Laya.Texture.create(fileBitmap, 20, 30, 85, 70, 5, 7, 25, 35);

                expect(tex2.bitmap).to.be.instanceOf(Laya.FileBitmap);
                var myuv = [0.22222222222222224,0.33333333333333337,1,0.33333333333333337,1,1,0.22222222222222224,1];
                expect(compareNearSimpleArr(tex2.uv, myuv)).to.be.equal(true);
                expect(tex2._w).to.be.equal(70);
                expect(tex2._h).to.be.equal(60);
                expect(tex2.sourceWidth).to.be.equal(25);
                expect(tex2.sourceHeight).to.be.equal(35);
                expect(tex2._loaded).to.be.equal(true);
                expect(tex2.loaded).to.be.equal(true);
                expect(tex2.released).to.be.equal(false);
                expect(tex2.source).to.be.equal(fileBitmap.source);
                expect(tex2.width).to.be.equal(70);
                expect(tex2.height).to.be.equal(60);
                expect(tex2.isLinearSampling).to.be.equal(true);
                expect(tex2.repeat).to.be.equal(true);

                g.drawTexture(tex2, 0, 0, 0, 0, null, 0.5);
                var colors = getColorObjArr([[0, 0, 40, 181, 165, 128], [31, 0, 235, 247, 249, 128], [69, 0, 253, 253, 251, 128], [69, 59, 255, 255, 255, 128], [25, 59, 211, 255, 253, 128], [0, 59, 255, 255, 255, 128]]);
                laterCompareExpect(WaitRenderTime, function () {
                    g.clear();
                    const tex3 = Laya.Texture.create(tex, 20, 30, 85, 70, 5, 7, 25, 35);
                    g.drawTexture(tex3, 0, 0, 0, 0, null, 0.5);

                    expect(tex3.bitmap).to.be.instanceOf(Laya.FileBitmap);
                    expect(compareNearSimpleArr(tex3.uv, myuv)).to.be.equal(true);
                    expect(tex3._w).to.be.equal(70);
                    expect(tex3._h).to.be.equal(60);
                    expect(tex3.sourceWidth).to.be.equal(25);
                    expect(tex3.sourceHeight).to.be.equal(35);
                    expect(tex3._loaded).to.be.equal(true);
                    expect(tex3.loaded).to.be.equal(true);
                    expect(tex3.released).to.be.equal(false);
                    expect(tex3.source).to.be.equal(fileBitmap.source);
                    expect(tex3.width).to.be.equal(70);
                    expect(tex3.height).to.be.equal(60);
                    expect(tex3.isLinearSampling).to.be.equal(true);
                    expect(tex3.repeat).to.be.equal(true);

                    laterCompareExpect(WaitRenderTime, function () {
                        done();
                    }, compareCanvasPixelRect, [16, 14, 70, 60, colors]);
                }, compareCanvasPixelRect, [16, 14, 70, 60, colors]);
            });
            tex.load('./res/laya.jpg');
        });
    });

    describe("createFromTexture", function () {
        it("应该正确截取Texture", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(11, 7));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            // g.drawTexture(tex, 2, 4, 25, 35, null, 0.5);
            const tex = new Laya.Texture();
            tex.on(Laya.Event.LOADED, null, function (fileBitmap) {
                expect(fileBitmap.width).to.be.equal(90);
                expect(fileBitmap.height).to.be.equal(90);

                var tex2 = Laya.Texture.createFromTexture(tex, 95, 115, 23, 29);
                expect(tex2).to.be.equal(null);

                tex2 = Laya.Texture.createFromTexture(tex, 13, 17, 23, 29);
                expect(tex2).to.be.instanceOf(Laya.Texture);

                expect(tex2.bitmap).to.be.instanceOf(Laya.FileBitmap);
                var myuv = [0.14444444444444446,0.18888888888888888,0.4,0.18888888888888888,0.4,0.5111111111111111,0.14444444444444446,0.5111111111111111];
                expect(compareNearSimpleArr(tex2.uv, myuv)).to.be.equal(true);
                expect(tex2._w).to.be.equal(23);
                expect(tex2._h).to.be.equal(29);
                expect(tex2.sourceWidth).to.be.equal(23);
                expect(tex2.sourceHeight).to.be.equal(29);
                expect(tex2._loaded).to.be.equal(true);
                expect(tex2.loaded).to.be.equal(true);
                expect(tex2.released).to.be.equal(false);
                expect(tex2.source).to.be.equal(fileBitmap.source);
                expect(tex2.width).to.be.equal(23);
                expect(tex2.height).to.be.equal(29);
                expect(tex2.isLinearSampling).to.be.equal(true);
                expect(tex2.repeat).to.be.equal(true);

                g.drawTexture(tex2, 0, 0, 0, 0, null, 0.5);
                var colors = getColorObjArr([[0, 0, 247, 253, 249, 128], [14, 0, 32, 177, 163, 128], [13, 8, 36, 171, 145, 128], [22, 9, 197, 255, 249, 128], [22, 28, 229, 255, 255, 128], [0, 28, 44, 177, 159, 128]]);
                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRect, [11, 7, 23, 29, colors]);
            });
            tex.load('./res/laya.jpg');
        });
    });

    describe("source", function () {
        it("应该激活并获取资源", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(11, 7));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            // g.drawTexture(tex, 2, 4, 25, 35, null, 0.5);
            const tex = new Laya.Texture();
            tex.on(Laya.Event.LOADED, null, function (fileBitmap) {
                const myuv = [0.5, 0.5, 1.0, 0.5, 0.5, 1.0, 1.0, 1.0];
                const tex2 = new Laya.Texture();
                tex2.setTo(fileBitmap, myuv);
                expect(tex2.source).to.be.equal(fileBitmap.source);

                g.drawTexture(tex2, 0, 0, 0, 0, null, 0.5);
                var colors = getColorObjArr([[0, 0, 253, 253, 247, 128], [24, 0, 128, 205, 193, 128], [89, 0, 255, 253, 251, 128], [8, 15, 159, 219, 211, 128], [0, 89, 211, 255, 253, 128], [89, 89, 255, 255, 255, 128]]);
                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRect, [11, 7, 90, 90, colors]);
            });
            tex.load('./res/laya.jpg');
        });
    });

    describe("destroy", function () {
        it("应该正确销毁", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(11, 7));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            // g.drawTexture(tex, 2, 4, 25, 35, null, 0.5);
            const tex = new Laya.Texture();
            expect(tex.released).to.be.equal(false);
            tex.on(Laya.Event.LOADED, null, function (fileBitmap) {
                expect(tex.released).to.be.equal(false);
                expect(tex.loaded).to.be.equal(true);
                expect(fileBitmap.useNum).to.be.equal(1);
                const tex2 = new Laya.Texture(fileBitmap, [0.5, 0.5, 1.0, 0.5, 0.5, 1.0, 1.0, 1.0]);
                expect(fileBitmap.useNum).to.be.equal(2);
                tex.destroy(false);
                expect(tex.bitmap).to.be.equal(null);
                expect(tex.loaded).to.be.equal(false);
                expect(tex.released).to.be.equal(true);
                expect(fileBitmap.useNum).to.be.equal(1);

                const tex3 = Laya.Texture.create(fileBitmap,3,5,13,17);
                expect(fileBitmap.useNum).to.be.equal(2);
                tex3.destroy(true);
                expect(fileBitmap.useNum).to.be.equal(0);

                g.drawTexture(tex2, 0, 0, 0, 0, null, 0.5);
                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRectVertex, [11, 7, 90, 90, 1, GlobalBlankColorObj]);
            });
            tex.load('./res/laya.jpg');
        });
    });

    describe("width", function () {
        it("应该正确设置/获取宽度", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(11, 7));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            // g.drawTexture(tex, 2, 4, 25, 35, null, 0.5);
            const tex = new Laya.Texture();
            tex.on(Laya.Event.LOADED, null, function (fileBitmap) {
                const tex2 = new Laya.Texture(fileBitmap, [0.5, 0.5, 1.0, 0.5, 0.5, 1.0, 1.0, 1.0]);
                expect(tex2.width).to.be.equal(90);
                tex2.width = 40;
                expect(tex2.width).to.be.equal(40);

                g.drawTexture(tex2, 0, 0, 0, 0, null, 0.5);
                var colors = getColorObjArr([[0,0,253,253,247,128],[39,89,255,255,255,128],[10,0,153,221,211,128],[40,0,253,255,247,128],[0,89,211,255,253,128],[4,10,82,153,145,128]]);
                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRect, [11,7,40,90, colors]);
            });
            tex.load('./res/laya.jpg');
        });
    });

    describe("height", function () {
        it("应该正确设置/获取宽度", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(11, 7));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            // g.drawTexture(tex, 2, 4, 25, 35, null, 0.5);
            const tex = new Laya.Texture();
            tex.on(Laya.Event.LOADED, null, function (fileBitmap) {
                const tex2 = new Laya.Texture(fileBitmap, [0.5, 0.5, 1.0, 0.5, 0.5, 1.0, 1.0, 1.0]);
                expect(tex2.height).to.be.equal(90);
                tex2.height = 40;
                expect(tex2.height).to.be.equal(40);

                g.drawTexture(tex2, 0, 0, 0, 0, null, 0.5);
                var colors = getColorObjArr([[0,0,253,253,247,128],[89,39,255,255,255,128],[25,0,124,203,189,128],[89,0,255,253,251,128],[45,28,155,221,211,128],[0,39,203,249,245,128]]);
                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRect, [11, 7, 90, 40, colors]);
            });
            tex.load('./res/laya.jpg');
        });
    });

    describe("isLinearSampling", function () {
        it("应该正确获取/设置线性采样", function () {
            expect(Laya.Render.isWebGL).to.be.equal(false);
            const tex = new Laya.Texture();
            expect(tex.isLinearSampling).to.be.equal(true);
            tex.isLinearSampling = false;
            expect(tex.isLinearSampling).to.be.equal(true);
        });
    });

    describe("repeat", function () {
        it("应该正确获取/设置线性采样", function () {
            expect(Laya.Render.isWebGL).to.be.equal(false);
            const tex = new Laya.Texture();
            expect(tex.repeat).to.be.equal(true);
            tex.repeat = false;
            expect(tex.repeat).to.be.equal(true);
        });
    });

    describe("load", function () {
        it("应该正确设置/获取宽度", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(11, 7));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            // g.drawTexture(tex, 2, 4, 25, 35, null, 0.5);
            const myuv = [0.5, 0.5, 1.0, 0.5, 0.5, 1.0, 1.0, 1.0];
            const tex = new Laya.Texture(null, myuv);
            expect(tex.loaded).to.be.equal(false);
            expect(!!tex.bitmap).to.be.equal(false);
            expect(compareSimpleArr(tex.uv, myuv)).to.be.equal(true);
            expect(tex.offsetX).to.be.equal(0);
            expect(tex.offsetY).to.be.equal(0);
            expect(tex.sourceWidth).to.be.equal(0);
            expect(tex.sourceHeight).to.be.equal(0);
            expect(tex._loaded).to.be.equal(false);
            expect(tex._w).to.be.equal(0);
            expect(tex._h).to.be.equal(0);
            expect(!!tex.$_GID).to.be.equal(false);
            expect(!!tex.url).to.be.equal(false);
            expect(tex._uvID).to.be.equal(0);
            expect(tex.released).to.be.equal(true);
            expect(tex.source).to.be.equal(null);
            expect(tex.width).to.be.equal(0);
            expect(tex.height).to.be.equal(0);

            tex.on(Laya.Event.LOADED, null, function (fileBitmap) {
                expect(tex.url).to.be.equal('./res/laya.jpg');

                expect(fileBitmap).to.be.instanceOf(Laya.FileBitmap);
                expect(fileBitmap.useNum).to.be.equal(1);

                expect(tex.bitmap).to.be.instanceOf(Laya.FileBitmap);
                expect(compareSimpleArr(tex.uv, myuv)).to.be.equal(true);
                expect(tex._w).to.be.equal(90);
                expect(tex._h).to.be.equal(90);
                expect(tex.sourceWidth).to.be.equal(90);
                expect(tex.sourceHeight).to.be.equal(90);
                expect(tex._loaded).to.be.equal(true);
                expect(tex.loaded).to.be.equal(true);
                // expect(tex.released).to.be.equal(false);
                expect(tex.source).to.be.equal(fileBitmap.source);
                expect(tex.width).to.be.equal(90);
                expect(tex.height).to.be.equal(90);


                g.drawTexture(tex, 0, 0, 0, 0, null, 0.5);
                var colors = getColorObjArr([[0, 0, 253, 253, 247, 128], [24, 0, 128, 205, 193, 128], [89, 0, 255, 253, 251, 128], [8, 15, 159, 219, 211, 128], [0, 89, 211, 255, 253, 128], [89, 89, 255, 255, 255, 128]]);
                laterCompareExpect(WaitRenderTime, function () {
                    done();
                }, compareCanvasPixelRect, [11, 7, 90, 90, colors]);
            });
            tex.load('./res/laya.jpg');
            expect(tex.url).to.be.equal('./res/laya.jpg');
        });
    });

    describe("getPixels", function () {
        it("应该正确获取Texture中指定范围的像素", function (done) {
            const sprite = Laya.stage.addChild(new Laya.Sprite().pos(7, 11));
            const g = new Laya.Graphics();
            sprite.graphics = g;
            // g.drawTexture(tex, 2, 4, 25, 35, null, 0.5);
            const myuv = [0.5, 0.5, 1.0, 0.5, 0.5, 1.0, 1.0, 1.0];
            const tex = new Laya.Texture(null, myuv);
            tex.on(Laya.Event.LOADED, null, function (fileBitmap) {
                var pixels = tex.getPixels(7, 11, 90, 90);
                var tarr = new Uint8Array(new ArrayBuffer(32));
                tarr.set(pixels.slice(0,8),0);
                tarr.set(pixels.slice(9990,9998),8);
                tarr.set(pixels.slice(19990,19998),16);
                tarr.set(pixels.slice(29990,29998),24);
                expect(compareSimpleArr(tarr, [59,156,139,255,60,154,138,255,157,255,64,182,162,255,90,190,254,255,250,252,254,255,252,252,0,0,0,0,0,0,0,0])).to.be.equal(true);
                // console.log(pixels.slice(0,8).join(',') + '\n' + pixels.slice(9990,9998).join(',') + '\n'  + pixels.slice(19990,19998).join(',') + '\n'  + pixels.slice(29990,29998).join(','));
                done();
            });
            tex.load('./res/laya.jpg');
        });
    });


});
