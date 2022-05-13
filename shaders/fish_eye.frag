#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {

    
    vec2 fishcoord = (texcoord * 2.0) - 1.0;

    float theta = atan(fishcoord[1], fishcoord[0]);
    float radius = pow(sqrt((fishcoord[0] * fishcoord[0]) + (fishcoord[1] * fishcoord[1])), 1.5);

    fishcoord[0] = radius * cos(theta);
    fishcoord[1] = radius * sin(theta);
    
    FragColor = texture(image, (fishcoord + 1.0) * 0.5);
    
}
