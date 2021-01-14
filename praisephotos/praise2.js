var image = new Array();

for (var i = 1; i < 86; i++) {
  image[i] = `img/download (${[i]}).png`;
}
console.log(image[1]);
//defining variables for the functions && setting the dafault values

var dimg = 1;
var num = 1;
$(".image .imgcont img").attr("src",image[1]);
  $(".download a").attr("href",image[dimg]);
fullnum = num+'/'+image.length;
$(".number h4").text(fullnum);

function fimagei(iimg){
  iimg += 0;
  dimg += iimg;
  $(".image .imgcont img").attr("src",image[dimg]);
  $(".download a").attr("href",image[dimg]);

  //increasing numbertext

  num += iimg;
  fullnum = num+'/'+image.length;
  $(".number h4").text(fullnum);

  if (num > image.length) {
    num = image.length;
    fullnum = num+'/'+image.length;
    $(".number h4").text(fullnum);
  }

}
function fimager(rimg){
  dimg += rimg;
  if (dimg <= 0) {
    dimg = 1;
    dimg += rimg;
    $(".image .imgcont img").attr("src",image[dimg]);
    $(".download a").attr("href",image[dimg]);
  }
  else {
  $(".image .imgcont img").attr("src",image[dimg]);
  }

  //decreasing numbertext

  num += rimg;
  if (num <= 0) {
    num = 1;
    fullnum = num+'/'+image.length;
    $(".number h4").text(fullnum);
  }
  else{
    fullnum = num+'/'+image.length;
    $(".number h4").text(fullnum);
  }

}

//creating a preview
var preview = $(".preview");

for (var i = 0; i < image.length; i++) {
  cimg = document.createElement("img");
  preview.append(cimg);




  // $(".preview img").attr("class",`image${[i]}`);
  // console.log($(`.preview .image${[86]}`).attr("class"));
  // let mark = 1;
  //
  // $(`.preview .image${[86]}`).attr("src",image[0]);
}


//creating an array of currentSlide function

current = new Array();
for (var i = 0; i < 87; i++) {
  current[i] = `currentSlide(${i})`;

}
console.log(current[2]);



 var aimg = document.querySelectorAll(`.preview img`);



for (var i = 0; i < image.length; i++) {
  aimg[i].src = image[i];

   var cattr = document.createAttribute("onclick");
   cattr.value = current[i];
  aimg[i].setAttributeNode(cattr);

  var crimg = aimg[i];
  console.log(crimg);
}


function currentSlide(val){
    var cnum = val + 0;
    fullnum = cnum+'/'+image.length;
    $(".number h4").text(fullnum);
    $(".image .imgcont img").attr("src",image[val]);
    $(".download a").attr("href",image[val]);
}


console.log(cnum);
// function currentSlide(){
//   for (var i = 0; i < image.length; i++) {
//     aimg[i].onclick = ()=>{
//       $(".image .imgcont img").attr("src",image[i]);
//     }
//   }
// }
// $(document).ready(currentSlide());
