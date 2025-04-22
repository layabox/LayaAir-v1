var MockPointer = (function () {
    function MockPointer() {
        console.log("Hi Laya~ 201706161538");
    }

    var __proto = MockPointer.prototype;

    __proto.hasListener = function (type) {
        return type;
    };

    return MockPointer;
})();
