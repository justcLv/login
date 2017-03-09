shaderProg = new THREE.ShaderMaterial({
  uniforms,
  vertexShader: require('./shader.vert').join('\n'),
  fragmentShader: require('./shader.frag').join('\n')
});
