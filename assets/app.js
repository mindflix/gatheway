// any CSS you import will output into a single css file (app.css in this case)
import "./styles/main.sass";

// append images to build
const imagesContext = require.context(
  "./images",
  true,
  /\.(png|jpg|jpeg|gif|ico|svg|webp)$/
);
imagesContext.keys().forEach(imagesContext);
