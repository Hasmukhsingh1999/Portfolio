

function dos() {}
dos();

function moveImages() {
  var main = document.querySelector(".main");
  // main.addEventListener("mousemove", function (value) {
    document
      .querySelector("#r-1")
      .addEventListener("mousemove", function (value) {
        document.querySelector("#elem1>img").style.scale = 1;
        document.querySelector("#elem1 img").style.opacity = 1;

        document.querySelector("#elem1 img").style.left = value.x - 450 + "px";
      });
    document
      .querySelector("#r-2")
      .addEventListener("mousemove", function (value) {
        document.querySelector("#elem2>img").style.scale = 1;
        document.querySelector("#elem2 img").style.opacity = 1;

        document.querySelector("#elem2 img").style.left = value.x - 450 + "px";
      });
    // document
    //   .querySelector("#r-3")
    //   .addEventListener("mousemove", function (value) {
    //     document.querySelector("#elem3>img").style.scale = 1;
    //     document.querySelector("#elem3 img").style.opacity = 1;

    //     document.querySelector("#elem3 img").style.left = value.x - 450 + "px";
    //   });
    // document
    //   .querySelector("#r-4")
    //   .addEventListener("mousemove", function (value) {
    //     document.querySelector("#elem4>img").style.scale = 1;
    //     document.querySelector("#elem4 img").style.opacity = 1;

    //     document.querySelector("#elem4 img").style.left = value.x - 450 + "px";
    //   });
  // });
  document
    .querySelector("#r-1")
    .addEventListener("mouseleave", function (value) {
      document.querySelector("#elem1 img").style.scale = 0;
      document.querySelector("#elem1 img").style.opacity = 0;
    });
  document
    .querySelector("#r-2")
    .addEventListener("mouseleave", function (value) {
      document.querySelector("#elem2 img").style.scale = 0;
      document.querySelector("#elem2 img").style.opacity = 0;
    });
  // document
  //   .querySelector("#r-3")
  //   .addEventListener("mouseleave", function (value) {
  //     document.querySelector("#elem3 img").style.scale = 0;
  //     document.querySelector("#elem3 img").style.opacity = 0;
  //   });
  // document
  //   .querySelector("#r-4")
  //   .addEventListener("mouseleave", function (value) {
  //     document.querySelector("#elem4 img").style.scale = 0;
  //     document.querySelector("#elem4 img").style.opacity = 0;
  //   });
}
moveImages();
