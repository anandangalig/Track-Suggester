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
    } else if (frontOrBack === "backEnd" && popular === "cSharp") {
      $("#cSharpJava").show();
    } else if (frontOrBack === "backEnd" && popular === "ruby") {
      $("#rubyRails").show();
    } else if (frontOrBack === "backEnd" && popular === "java") {
      $("#androidJava").show();
    }
  });
});
