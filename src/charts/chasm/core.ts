/**
 * @author: lencx
 * @create_at: Jan 23, 2020
 */

export const s1 = `
// vertex position attribure
attribute vec2 a_Position;

// set vertex position
void main() {
  gl_Position = vec4(a_Position, 0, 1);
}
`;

export const s2 = `
// choose flot precision
precision mediump float;

// uniform values
uniform vec2 u_viewport;
uniform vec2 u_juliaComplex;

// function to map from a range to another (I know there's an extra pair of parenthesis but it makes the operation easier to understand)
float map (float v, float inMin, float inMax, float outMin, float outMax) {
  return ((v - inMin) * ((outMax - outMin) / (inMax - inMin))) + outMin;
}

// set the opacity of every pixel by checking if any of its position's components, mapped to the complex plane, tend to infinity or not after applying recursively to them the function f(z) = z^2 + c (c being the mouse's position's x and y coordinates, relative to the viewport, mapped to -1.4 -> 1.4 range and -2 -> 2 respectively; this additional mapping is not necessary but I simply used it for aesthetic purposes)
void main() {

  // check if any of the components of the current complex number tend to infinity (and if so after how many iterations)
  float real = map(gl_FragCoord.x, 0.0, u_viewport.x, -2.0, 2.0);
      float imaginary = map(gl_FragCoord.y, 0.0, u_viewport.y, 1.4, -1.4);
      float realSquared = real * real;
      float imaginarySquared = imaginary * imaginary;
      int iterationCount;
      for(int i = 0; i < 255; i++){
          imaginary = 2.0 * real * imaginary + map(u_juliaComplex.y, 0.0, u_viewport.y, .8, -.8);
          real = realSquared - imaginarySquared + map(u_juliaComplex.x, 0.0, u_viewport.x, -.9, .4);
          realSquared = real * real;
          imaginarySquared = imaginary * imaginary;
          iterationCount = i;
          if( abs((imaginarySquared) / (imaginary + real)) > 10.0 ){ break; }
      }

      // set pixels color
      if (iterationCount == 254){
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
      } else {
    gl_FragColor = vec4(0.0, 0.0, 0.0, map(float(iterationCount), 0.0, 253.0, 0.0, 1.0) + .75);
  }
}
`;

export function init(canvasId: string) {
  // create shader utility function
  function createShader(gl: any, id: string, type: string) {
    const shaderScript = document.getElementById(id) as HTMLScriptElement;

    if (!shaderScript) {
      alert('shader script not found');
      return;
    }

    const shaderSource = shaderScript.text,
      shader = gl.createShader(type);

    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      alert('could not compile shader: ' + gl.getShaderInfoLog(shader));
      return;
    }

    return shader;
  }

  // create program utility function
  function createProgram(gl: any, vertexShader: any, fragmentShader: any) {
    const program = gl.createProgram();

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      alert(
        'Unable to create shader program: ' + gl.getProgramInfoLog(program)
      );
      return;
    }

    return program;
  }

  // canvas and context
  const canvas: any = document.getElementById(canvasId),
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

  // check if gl context was successfully initialized
  if (!gl) {
    alert('WebGL not supported');
    return;
  }

  // fit the canvas to the viewport
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // actual and lerped mouse coordinates
  const mousePosition = { x: canvas.width / 2, y: canvas.height / 2 },
    mouseLerpPosition = { x: canvas.width / 2, y: canvas.height / 2 };

  const lerpingFactor = 0.07;

  gl.viewport(0, 0, canvas.width, canvas.height);

  // create shaders and link them in a program
  const vertexShader = createShader(gl, 'vertex-shader', gl.VERTEX_SHADER);
  const fragmentShader = createShader(
    gl,
    'fragment-shader',
    gl.FRAGMENT_SHADER
  );

  const program = createProgram(gl, vertexShader, fragmentShader);

  gl.useProgram(program);

  // get the locations of attributes (and activate their address in the vertex attributes array) and uniforms
  const vertexPositionLocation = gl.getAttribLocation(program, 'a_Position');
  gl.enableVertexAttribArray(vertexPositionLocation);

  const viewportUniformLocation = gl.getUniformLocation(program, 'u_viewport'),
    juliaComplexUniformLocation = gl.getUniformLocation(
      program,
      'u_juliaComplex'
    );

  // create the buffer that the GPU will get the vertex data from
  const rectangleVerticesBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, rectangleVerticesBuffer);

  const vertices = [-1, -1, -1, 1, 1, -1, 1, 1];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  function loop() {
    // add lerp effect to make the transition between complex numbers smooth
    mouseLerpPosition.x +=
      (mousePosition.x - mouseLerpPosition.x) * lerpingFactor;
    mouseLerpPosition.y +=
      (mousePosition.y - mouseLerpPosition.y) * lerpingFactor;

    gl.uniform2f(
      juliaComplexUniformLocation,
      mouseLerpPosition.x,
      mouseLerpPosition.y
    );

    // tell webgl where to look for vertex data inside the vertex buffer
    gl.vertexAttribPointer(vertexPositionLocation, 2, gl.FLOAT, false, 0, 0);

    // draw two triangle strips (will form a rectangle)
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    requestAnimationFrame(loop);
  }

  // set the viewport uniform's two float values to the canvas' dimensions
  gl.uniform2f(viewportUniformLocation, canvas.width, canvas.height);

  // start
  loop();

  // event listeners
  canvas.addEventListener('mousemove', function(e: MouseEvent) {
    mousePosition.x = e.clientX;
    mousePosition.y = e.clientY;
  });

  window.addEventListener('touchmove', function(e) {
    const touch = e.targetTouches[0];
    mousePosition.x = touch.clientX;
    mousePosition.y = touch.clientY;
  });

  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(viewportUniformLocation, canvas.width, canvas.height);
  });
}
