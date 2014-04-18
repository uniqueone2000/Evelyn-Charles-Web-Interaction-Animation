$(document).ready functon(){
	$("header").headroom({
  "tolerance": 5,
  "offset": 205,
  "classes": {
    "initial": "animated",
    "pinned": "swingInX",
    "unpinned": "swingOutX",
    "top": "headroom--top",
    "notTop": "headroom--not-top"
  }
});

// to destroy
$("#header").headroom("destroy");
}
