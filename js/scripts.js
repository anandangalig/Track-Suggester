$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    // debugger;
    var name = $("input#name").val();
    var email = $("input#email").val();
    var skillLevel = $("#skillLevel").val();
    var why = $("input#why").val();
    var popular = $("#popular").val();
    var frontOrBack = $("input:radio[name=frontOrBack]:checked").val();

    if (frontOrBack === "frontEnd") {
      $("#cssDesign").show();
      $("#cSharpJava").hide();
      $("#androidJava").hide();
      $("#rubyRails").hide();
    } else if (frontOrBack === "backEnd" && popular === "cSharp") {
      $("#cSharpJava").show();
      $("#cssDesign").hide();
      $("#androidJava").hide();
      $("#rubyRails").hide();
    } else if (frontOrBack === "backEnd" && popular === "ruby") {
      $("#rubyRails").show();
      $("#cssDesign").hide();
      $("#cSharpJava").hide();
      $("#androidJava").hide();
    } else if (frontOrBack === "backEnd" && popular === "java") {
      $("#androidJava").show();
      $("#cssDesign").hide();
      $("#cSharpJava").hide();
      $("#rubyRails").hide();
    }
    else {
      alert("Please enter more information and try again")
    }

    $(".nameInput").text(name);
    $(".whyAnswer").text(why);
  });
});
