class CustomMesh {
    constructor() {
        Laya3D.init(0, 0, true);
        Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        Laya.Stat.show();

        var scene: Laya.Scene = Laya.stage.addChild(new Laya.Scene()) as Laya.Scene;

        var camera: Laya.Camera = scene.addChild(new Laya.Camera(0, 0.1, 100)) as Laya.Camera;
        camera.transform.translate(new Laya.Vector3(0, 2, 5));
        camera.transform.rotate(new Laya.Vector3(-15, 0, 0), true, false);

        var directionLight: Laya.DirectionLight = scene.addChild(new Laya.DirectionLight()) as Laya.DirectionLight;
        directionLight.color = new Laya.Vector3(0.6, 0.6, 0.6);
        directionLight.direction = new Laya.Vector3(1, -1, -1);

        //平面
        var plane: Laya.MeshSprite3D = scene.addChild(new Laya.MeshSprite3D(new Laya.PlaneMesh(6, 6, 10, 10))) as Laya.MeshSprite3D;

        //正方体
        var box: Laya.MeshSprite3D = scene.addChild(new Laya.MeshSprite3D(new Laya.BoxMesh(0.5, 0.5, 0.5))) as Laya.MeshSprite3D;
        box.transform.position = new Laya.Vector3(1.5, 0.25, 0.6);
        box.transform.rotate(new Laya.Vector3(0, 45, 0), false, false);

        //球体
        var sphere: Laya.MeshSprite3D = scene.addChild(new Laya.MeshSprite3D(new Laya.SphereMesh(0.25))) as Laya.MeshSprite3D;
        sphere.transform.position = new Laya.Vector3(0.5, 0.25, 0.6);

        //圆柱体
        var cylinder: Laya.MeshSprite3D = scene.addChild(new Laya.MeshSprite3D(new Laya.CylinderMesh(0.25, 1))) as Laya.MeshSprite3D;
        cylinder.transform.position = new Laya.Vector3(-0.5, 0.5, 0.6);

        //胶囊体
        var capsule: Laya.MeshSprite3D = scene.addChild(new Laya.MeshSprite3D(new Laya.CapsuleMesh(0.25, 1))) as Laya.MeshSprite3D;
        capsule.transform.position = new Laya.Vector3(-1.5, 0.5, 0.6);
    }
}
new CustomMesh;