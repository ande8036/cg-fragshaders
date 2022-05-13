#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {

    vec2 ripcoord = texcoord * 2.0 - 1.0;
    float radius = sqrt((ripcoord[0] * ripcoord[0]) + (ripcoord[1] * ripcoord[1]));
    vec2 offset = ripcoord * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;

    FragColor = texture(image, texcoord + offset);
}
