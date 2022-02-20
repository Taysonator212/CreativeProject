//reviews
 let getReview = () => {
  console.log("Start")
  let product = document.getElementById("userReview")
  var userName = document.getElementById('name').value;
  console.log(userName)
  var description = document.getElementById("description").value;
  console.log(description)
  //var stars = document.getElementById("star").value;
  //console.log(stars)
  let review = document.createTextNode(description + "     -" + userName);
  console.log(review);
  product.appendChild(review);
}
