'use strict'

//1000 simple test
function laterCompareExpect(tm, cb, fn, args) {
    function testColor() {
        expect(fn.apply(null, args)).to.be.equal(true);
        cb();
    }

    setTimeout(testColor, tm);
}

describe("Laya.Sprite", function () {
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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

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
            expect(sprite.scrollRect).to.be.equal(null);
            expect(sprite.viewport).to.be.equal(null);
        });
    });

});
