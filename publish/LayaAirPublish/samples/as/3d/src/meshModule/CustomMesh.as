package meshModule {
    import laya.d3.core.Camera;
    import laya.d3.core.MeshSprite3D;
    import laya.d3.core.PhasorSpriter3D;
    import laya.d3.core.Sprite3D;
    import laya.d3.core.light.DirectionLight;
    import laya.d3.core.material.StandardMaterial;
    import laya.d3.core.render.RenderState;
    import laya.d3.core.scene.Scene;
    import laya.d3.graphics.IndexBuffer3D;
    import laya.d3.graphics.VertexBuffer3D;
    import laya.d3.math.Quaternion;
    import laya.d3.math.Vector3;
    import laya.d3.math.Vector4;
    import laya.d3.resource.Texture2D;
    import laya.d3.resource.models.BoxMesh;
    import laya.d3.resource.models.CapsuleMesh;
    import laya.d3.resource.models.CylinderMesh;
    import laya.d3.resource.models.Mesh;
    import laya.d3.resource.models.PlaneMesh;
    import laya.d3.resource.models.SphereMesh;
    import laya.d3.resource.models.SubMesh;
    import laya.display.Stage;
    import laya.events.Event;
    import laya.ui.Button;
    import laya.utils.Browser;
    import laya.utils.Handler;
    import laya.utils.Stat;
    import laya.webgl.WebGLContext;
    import common.CameraMoveScript;
    import common.Tool;
    
    /**
     * ...
     * @author
     */
    public class CustomMesh {
        
        public function CustomMesh() {
			
            Laya3D.init(0, 0, true);
            Laya.stage.scaleMode = Stage.SCALE_FULL;
            Laya.stage.screenMode = Stage.SCREEN_NONE;
            Stat.show();
            
            var scene:Scene = Laya.stage.addChild(new Scene()) as Scene;
            
            var camera:Camera = scene.addChild(new Camera(0, 0.1, 100)) as Camera;
            camera.transform.translate(new Vector3(0, 2, 5));
            camera.transform.rotate(new Vector3(-15, 0, 0), true, false);
            
            var directionLight:DirectionLight = scene.addChild(new DirectionLight()) as DirectionLight;
            directionLight.color = new Vector3(0.6, 0.6, 0.6);
            directionLight.direction = new Vector3(1, -1, -1);
            
            //平面
            var plane:MeshSprite3D = scene.addChild(new MeshSprite3D(new PlaneMesh(6, 6, 10, 10))) as MeshSprite3D;
            
            //正方体
            var box:MeshSprite3D = scene.addChild(new MeshSprite3D(new BoxMesh(0.5, 0.5, 0.5))) as MeshSprite3D;
            box.transform.position = new Vector3(1.5, 0.25, 0.6);
            box.transform.rotate(new Vector3(0, 45, 0), false, false);
            
            //球体
            var sphere:MeshSprite3D = scene.addChild(new MeshSprite3D(new SphereMesh(0.25))) as MeshSprite3D;
            sphere.transform.position = new Vector3(0.5, 0.25, 0.6);
            
            //圆柱体
            var cylinder:MeshSprite3D = scene.addChild(new MeshSprite3D(new CylinderMesh(0.25, 1))) as MeshSprite3D;
            cylinder.transform.position = new Vector3(-0.5, 0.5, 0.6);
            
            //胶囊体
            var capsule:MeshSprite3D = scene.addChild(new MeshSprite3D(new CapsuleMesh(0.25, 1))) as MeshSprite3D;
            capsule.transform.position = new Vector3(-1.5, 0.5, 0.6);
        }
    }
}