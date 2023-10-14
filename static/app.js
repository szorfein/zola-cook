function assert(test, msg) {
  var res = test ? "pass" : "fail"
  console.log(msg + " " + res)
};

function load_explore() {
  var link = document.getElementsByClassName("explore");
  var html = '<i>widgets</i><span>Explore</span>'

  for (let i = 0; i < link.length; i++) {
    link[i].setAttribute("href", "javascript:void(0)");
    link[i].setAttribute("data-ui", "#dialog");
    link[i].classList.add("active");
    link[i].innerHTML = html
  }
};

function load_sticky() {
  var header = document.getElementsByClassName("my-sticky");

  for (let i = 0; i < header.length; i++) {

    var sticky = header[i].offsetTop;

    if (window.pageYOffset > sticky) {
      header[i].classList.add("fixed");
      header[i].classList.add("top");
      header[i].classList.add("sticky");
    } else {
      header[i].classList.remove("fixed");
      header[i].classList.remove("top");
      header[i].classList.remove("sticky");
    }
  };
  //header.classList.toggle("fixed", window.pageYOffset > sticky);
};

function change_color() {
  let mode = ui("mode")
  var x = document.getElementsByTagName("BODY")[0];

  if (mode === "light") {
    ui("mode", "dark")
    x.classList.remove("light")
    x.classList.add("dark")
    document.cookie = "theme=dark;"
  } else {
    ui("mode", "light")
    x.classList.remove("dark")
    x.classList.add("light")
    document.cookie = "theme=light;"
  }
};

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

function load_change_color() {

  // load current theme
  let name = getCookie("theme");
  if (name != "") {
    ui("mode", name);
  } else { // load default
    ui("mode", "light");
    document.cookie = "theme=light;"
  }

  // enable button to change color
  let button = document.getElementById("change_color");
  button.addEventListener("click", () => {
    change_color();
  });
};

function go_back() {
  var class_back = document.getElementsByClassName("history");

  for (let i=0; i<class_back.length; i++) {
    class_back[i].setAttribute("href", "javascript:void(0)");
    class_back[i].addEventListener("click", () => {
      history.back();
    });
  }
};
