// @ts-nocheck
import * as dat from "dat.gui"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import threeGlobe from "./globe/three-globe"
import countries from "./globe-data-min.json"
import travel from "./my-flights.json"
import airportHistory from "./my-airports.json"

/*Import only needed classes*/
import {
  Scene,
  MeshBasicMaterial,
  Mesh,
  PerspectiveCamera,
  WebGLRenderer,
  Clock,
  DirectionalLight,
  Fog,
  SphereGeometry,
  Color,
} from "three"

/* Global varialble */
let canvas,
  scene,
  sizes,
  camera,
  renderer,
  controls,
  clock,
  elapsedTime,
  directionLight,
  directionLight1,
  directionLight2,
  directionLight3,
  globeMaterial

/**
 * Sizes
 */
sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

const init = () => {
  // Canvas
  canvas = document.querySelector("canvas.model")

  // Scene
  scene = new Scene()

  // RESIZE
  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })

  // Base camera
  camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
  camera.position.z = 77
  scene.add(camera)

  /* Lights */
  directionLight = new DirectionalLight(0xffffff, 0.8)
  directionLight.position.set(-800, 200, 400)
  camera.add(directionLight)

  directionLight1 = new DirectionalLight(0x7982f6, 1)
  directionLight1.position.set(-200, 500, 200)
  camera.add(directionLight1)

  directionLight2 = new DirectionalLight(0x8566cc, 0.5)
  directionLight2.position.set(-200, 500, 200)
  camera.add(directionLight2)

  directionLight3 = new DirectionalLight(0xdb469f, 0.4)
  directionLight3.position.set(200, -600, -200)
  camera.add(directionLight3)

  // Controls
  controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true
  controls.dampingFactor = 0.01
  controls.enablePan = false
  controls.enableZoom = false
  controls.rotateSpeed = 0.8
  controls.autoRotate = true
  controls.minPolarAngle = Math.PI / 3.5
  controls.maxPolarAngle = Math.PI - Math.PI / 3

  globeMaterial = new Mesh(
    new SphereGeometry(1, 32, 16),
    new MeshBasicMaterial()
  )

  const Globe = new threeGlobe()
    .arcsData(travel.flights)
    .arcColor((e) => {
      return "#E867B7"
    })
    .arcAltitude((e) => {
      return e.arcAlt
    })
    .arcStroke(() => {
      return 0.3
    })
    .arcDashLength(0.9)
    .arcDashGap(4)
    .arcDashAnimateTime(2000)
    .arcsTransitionDuration(2000)
    .arcDashInitialGap((e) => e.order * 1)
    .labelsData(airportHistory.airports)
    .labelColor(() => "#fff")
    .labelDotRadius(0.3)
    .labelSize((e) => e.size)
    .labelText(() => {
      return ""
    })
    .labelResolution(6)
    .labelAltitude(0.1)
    .pointsData(airportHistory.airports)
    .pointColor(() => "#4169e1")
    .pointsMerge(true)
    .pointAltitude(0.1)
    .pointRadius(0.05)
    .hexPolygonsData(countries.features)
    .hexPolygonResolution(3)
    .hexPolygonMargin(0.7)
    .showAtmosphere(true)
    .atmosphereColor("#4169e1")
    .atmosphereAltitude(0.2)
    .hexPolygonColor(() => {
      return "rgba(255, 255, 255, 1)"
    })

  Globe.rotateY(-Math.PI * (5 / 9))
  Globe.rotateZ(-Math.PI / 6)

  globeMaterial = Globe.globeMaterial()
  globeMaterial.color = new Color(0x3a228a)
  globeMaterial.emissive = new Color(0x220038)
  globeMaterial.emissiveIntensity = 0.1
  globeMaterial.shininess = 0.7

  Globe.onGlobeReady((e) => {
    Globe.scale.x = 0.4
    Globe.scale.y = 0.4
    Globe.scale.z = 0.4
  })

  scene.add(Globe)

  /**
   * Renderer
   */
  renderer = new WebGLRenderer({
    canvas: canvas,
    alpha: true,
  })
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  /**
   * Animate
   */
  clock = new Clock()

  const tick = () => {
    elapsedTime = clock.getElapsedTime()

    // Animate Globe
    Globe.rotation.y = -0.025 * elapsedTime

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
  }

  tick()
}

export default init
