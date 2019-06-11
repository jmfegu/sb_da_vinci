#!/bin/bash
find node_modules/ -name "*.info" -type f -delete

# cp node_modules js componentes to theme js/vendors
find node_modules/slick-carousel/ -name "slick.js" -exec cp {} ./js/vendors \;
find node_modules/imagesloaded/ -name "imagesloaded.js" -exec cp {} ./js/vendors \;
find node_modules/is-in-viewport/ -name "isInViewport.js" -exec cp {} ./js/vendors \;
