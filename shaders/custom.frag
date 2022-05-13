#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 roundedcoord = round(texcoord * 64.0) / 64.0;

    vec2 tempcoord = roundedcoord + 0.05;

    vec2 FragColorSamp1 = tempcoord;
    tempcoord -= 0.1;
    vec2 FragColorSamp2 = tempcoord;
    tempcoord[0] += 0.1;
    vec2 FragColorSamp3 = tempcoord;
    tempcoord[0] -= 0.1;
    tempcoord[1] += 0.1;
    vec2 FragColorSamp4 = tempcoord;

    vec2 average = (roundedcoord + FragColorSamp1 + FragColorSamp2 + FragColorSamp3 + FragColorSamp4) / 5.0;


    FragColor = texture(image, average);

    
}
