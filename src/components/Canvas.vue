<template>
  <div class="canvas-container" ref="canvasContainer"></div>
</template>
<script>
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Mesh,
  MeshBasicMaterial,
  CircleGeometry,
  Color,
} from 'three';
import { mapState } from 'vuex';
import { throttle } from 'lodash-es';

const RESIZE_UPDATE_INTERVAL = 300;

export default {
  name: 'Canvas',
  data() {
    return {
      currentMesh: null,
    };
  },
  computed: {
    ...mapState(['shapeSides', 'shapeColor']),
  },
  mounted() {
    this.setupScene();
    this.updateShape();
  },
  destroyed() {
    this.renderer.dispose();
  },
  methods: {
    setupScene() {
      const { canvasContainer } = this.$refs;
      const cameraAspect = canvasContainer.clientWidth / canvasContainer.clientHeight;

      // Setup scene and renderer
      this.scene = new Scene();
      this.renderer = new WebGLRenderer({ antialias: true });
      this.renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);

      // Camera
      this.camera = new PerspectiveCamera(70, cameraAspect, 0.01, 10);
      this.camera.position.z = 5;

      canvasContainer.appendChild(this.renderer.domElement);

      const animate = () => {
        requestAnimationFrame(animate);
        if (this.currentMesh) {
          this.currentMesh.rotation.z -= 0.005;
        }
        this.renderer.render(this.scene, this.camera);
      };
      animate();
      this.addResizeListener();
    },
    updateShape() {
      if (this.currentMesh) {
        this.scene.remove(this.currentMesh);
      }
      const geometry = new CircleGeometry(1, this.shapeSides);
      const material = new MeshBasicMaterial({
        color: this.shapeColor,
        depthWrite: false,
        wireframe: false,
      });
      const mesh = new Mesh(geometry, material);

      this.scene.add(mesh);
      this.currentMesh = mesh;
    },
    setShapeColor() {
      this.currentMesh.material.color = new Color(this.shapeColor);
    },
    addResizeListener() {
      window.addEventListener(
        'resize',
        throttle(
          () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(width, height);
          },
          RESIZE_UPDATE_INTERVAL,
          { trailing: true },
        ),
      );
    },
  },
  watch: {
    shapeSides() {
      this.updateShape();
    },
    shapeColor() {
      this.setShapeColor();
    },
  },
};
</script>
<style lang="scss">
.canvas-container {
  min-height: 100%;
  min-width: 100%;
  canvas {
    height: 100%;
    width: 100%;
  }
}
</style>
