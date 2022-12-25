window.onload = () => {
  // console.log("SDFsd");
  $.ajax({
    url: "./province.php",
    // dataType: "json",

    success: function (data) {
      console.log(data);
      // console.log(JSON.parse(data));

      JSON.parse(data).forEach((element) => {
        console.log(element);

        // $("select").append('<option value="2">One</option>');
        $("#province").append(
          $("<option>", { value: `${element.id}`, text: `${element.name}` })
        );
      });
    },
    error: () => {
      console.log("SDf");
    },
  });
  // $("p").append(" <b>Appended text</b>.");
};
function loadCity() {
  let provinceId = $("select option:selected").val();
  $.ajax({
    url: `./city.php?provinceID=${provinceId}`,

    dataType: "json",

    success: function (data) {
      console.log("Im here");
      console.log(data);
      // console.log(JSON.parse(data));
      $("#city").html("");
      data.forEach((element) => {
        console.log(element);

        // $("select").append('<option value="2">One</option>');

        $("#city").append(
          $("<option>", { value: `${element}`, text: `${element}` })
        );
      });
    },
  });
}
