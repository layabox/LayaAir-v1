var CustomMesh = /** @class */ (function () {
    function CustomMesh() {
        Laya3D.init(0, 0, true);
        Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        Laya.Stat.show();
        var scene = Laya.stage.addChild(new Laya.Scene());
        var camera = scene.addChild(new Laya.Camera(0, 0.1, 100));
        camera.transform.translate(new Laya.Vector3(0, 2, 5));
        camera.transform.rotate(new Laya.Vector3(-15, 0, 0), true, false);
        var directionLight = scene.addChild(new Laya.DirectionLight());
        directionLight.color = new Laya.Vector3(0.6, 0.6, 0.6);
        directionLight.direction = new Laya.Vector3(1, -1, -1);
        //平面
        var plane = scene.addChild(new Laya.MeshSprite3D(new Laya.PlaneMesh(6, 6, 10, 10)));
        //正方体
        var box = scene.addChild(new Laya.MeshSprite3D(new Laya.BoxMesh(0.5, 0.5, 0.5)));
        box.transform.position = new Laya.Vector3(1.5, 0.25, 0.6);
        box.transform.rotate(new Laya.Vector3(0, 45, 0), false, false);
        //球体
        var sphere = scene.addChild(new Laya.MeshSprite3D(new Laya.SphereMesh(0.25)));
        sphere.transform.position = new Laya.Vector3(0.5, 0.25, 0.6);
        //圆柱体
        var cylinder = scene.addChild(new Laya.MeshSprite3D(new Laya.CylinderMesh(0.25, 1)));
        cylinder.transform.position = new Laya.Vector3(-0.5, 0.5, 0.6);
        //胶囊体
        var capsule = scene.addChild(new Laya.MeshSprite3D(new Laya.CapsuleMesh(0.25, 1)));
        capsule.transform.position = new Laya.Vector3(-1.5, 0.5, 0.6);
    }
    return CustomMesh;
}());
new CustomMesh;
