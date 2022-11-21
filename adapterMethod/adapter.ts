class PNGimage {
  pngInterface() {
    console.log('This is PNG');
  }
}

class JPEGimage {
  jpegInterface() {
    console.log('This is JPEG');
  }
}

class JPEGadapter {
  public image:any;

  constructor(image:any) {
    this.image = image;
  }

  pngInterface() {
    this.image.jpegInterface();
  }
}

class convertImage {
  convert(image:any) {
    image.pngInterface();
  }
}

const newImage = new convertImage();
const imageAdapter = new JPEGadapter(new JPEGimage());
console.log(newImage.convert(imageAdapter));
