var imgId = 1;
function wpbefore(){
  var imgId = document.getElementById("wpnum").style.datatext;
  switch (imgId) {
    case 1:
      var imgId = 27;
      console.log("imgId : " + imgId);
      var url = `myimages/${imgId}`;
      console.log("BACKGROUND IMAGE USED : " + url);
      $(".background").css(`background-image`, `url("${url}.jpg")`);
      document.getElementById("wpnum").style.datatext = imgId;
      document.getElementById("wpcurnum").innerHTML = imgId;
      break;
    default:
      var imgId = imgId - 1;
      console.log("imgId : " + imgId);
      var url = `myimages/${imgId}`;
      console.log("BACKGROUND IMAGE USED : " + url);
      $(".background").css(`background-image`, `url("${url}.jpg")`);
      document.getElementById("wpnum").style.datatext = imgId;
      document.getElementById("wpcurnum").innerHTML = imgId;
  }
}
function wpnext(){
  var imgId = document.getElementById("wpnum").style.datatext;
  switch (imgId) {
    case 27:
      var imgId = 1;
      console.log("imgId : " + imgId);
      var url = `myimages/${imgId}`;
      console.log("BACKGROUND IMAGE USED : " + url);
      $(".background").css(`background-image`, `url("${url}.jpg")`);
      document.getElementById("wpnum").style.datatext = imgId;
      document.getElementById("wpcurnum").innerHTML = imgId;
      break;
    default:
      var imgId = imgId + 1;
      console.log("imgId : " + imgId);
      var url = `myimages/${imgId}`;
      console.log("BACKGROUND IMAGE USED : " + url);
      $(".background").css(`background-image`, `url("${url}.jpg")`);
      document.getElementById("wpnum").style.datatext = imgId;
      document.getElementById("wpcurnum").innerHTML = imgId;
  }
}
