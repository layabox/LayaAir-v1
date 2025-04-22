'use strict'

describe("Laya", function () {
    //test git
    it("应该有一个引擎的全局对象", function (done) {
        setTimeout(function () {
            expect(Laya).to.be.an('object');
            done();
        }, 900);
    });

    require('./core');
});