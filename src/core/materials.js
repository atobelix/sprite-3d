// 自定义双色阶跃卡通着色器 (2-Tone Cel-Shading Material，支持统一背景暗化调节)
export function createCloudToonMaterial(mainHex, shadeHex, rimStrength = 0.20) {
    return new THREE.ShaderMaterial({
        uniforms: {
            uMainColor: { value: new THREE.Color(mainHex) },
            uShadeColor: { value: new THREE.Color(shadeHex) },
            uLightDir: { value: new THREE.Vector3(0.55, 0.85, 0.70).normalize() },
            uRimStrength: { value: rimStrength },
            uDim: { value: 1.0 }
        },
        vertexShader: /* glsl */`
            varying vec3 vNormal;
            varying vec3 vViewPosition;
            void main() {
                vNormal = normalize(normalMatrix * normal);
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                vViewPosition = -mvPosition.xyz;
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: /* glsl */`
            uniform vec3 uMainColor;
            uniform vec3 uShadeColor;
            uniform vec3 uLightDir;
            uniform float uRimStrength;
            uniform float uDim;
            varying vec3 vNormal;
            varying vec3 vViewPosition;
            void main() {
                vec3 normal = normalize(vNormal);
                vec3 viewDir = normalize(vViewPosition);
                float NdotL = dot(normal, uLightDir);
                float stepVal = smoothstep(0.04, 0.12, NdotL);
                vec3 baseColor = mix(uShadeColor, uMainColor, stepVal);

                float rim = 1.0 - max(dot(viewDir, normal), 0.0);
                rim = smoothstep(0.65, 0.98, rim);
                vec3 rimColor = vec3(1.0) * rim * uRimStrength;

                gl_FragColor = vec4((baseColor + rimColor) * uDim, 1.0);
            }
        `
    });
}

export const EYE_WHITE_MAT = new THREE.MeshBasicMaterial({ color: 0xffffff });
export const DARK_VISOR_MAT = new THREE.MeshBasicMaterial({ color: 0x0f172a });
