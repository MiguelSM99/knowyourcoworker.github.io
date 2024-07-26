$(document).ready(function () {
  $(".bacckButton").hide();
  $(".containerr").hide();
  let currentQuestion = 1;
  let currentName = "";
  const totalQuestions = 5;
  const correctAnswersAysha = {
    q1aysha: "Aysha Gandarova",
    q2aysha: "Si pero sólo para botes",
    q3aysha: "Travis, Don Toliver, Taylor y Kendrick",
    q4aysha: "Entre 51 y 782",
    q5aysha: "Sí y además pendiente de vacaciones con su cónyuge",
  };
  const correctAnswersAndrea = {
    q1andrea: "La 1 y la 3 son correctas",
    q2andrea: "La 1 y la 2 son correctas",
    q3andrea: "Vienna",
    q4andrea: "Todas son correctas",
    q5andrea: "Sí y además pendiente de vacaciones con su cónyuge",
  };
  const correctAnswersAdrian = {
    q1adrian: "Todas son correctas",
    q2adrian: "Escudo",
    q3adrian: "Si, pero está empezando a tenerlo ahora",
    q4adrian: "El Sol",
    q5adrian: "Reventar un monitor",
  };
  const correctAnswersAlex = {
    q1alex: "A una zanahoria",
    q2alex: "Cuando le llama una personita y está 1 minuto hablando",
    q3alex: "Jon, de Booking",
    q4alex: "Todas son correctas",
    q5alex: "Pablo",
  };
  const correctAnswersMiguel = {
    q1miguel: "2 y 3 son correctas",
    q2miguel: "Un burrito",
    q3miguel: "1 y 2 son correctas",
    q4miguel: "Robin Hood",
    q5miguel: "Cervical izquierda",
  };

  function showQuestion(index) {
    $(".question").hide();
    $("#question" + currentName + index).show();

    if (index === 1) {
      $(".previous").hide();
    } else {
      $(".previous").show();
    }

    if (index === totalQuestions) {
      $(".next").hide();
      $(".unlock").show();
    } else {
      $(".next").show();
      $(".unlock").hide();
    }
  }

  $(".previous").click(function () {
    if (currentQuestion > 1) {
      currentQuestion--;
      showQuestion(currentQuestion);
    }
  });

  $(".next").click(function () {
    if (currentQuestion < totalQuestions) {
      currentQuestion++;
      showQuestion(currentQuestion);
    }
  });

  $(".unlock").click(function () {
    let allCorrect = true;
    for (let i = 1; i <= totalQuestions; i++) {
      let answer = $(`input[name=q${i}${currentName}]:checked`).val();
      if (currentName === "aysha") {
        if (answer !== correctAnswersAysha[`q${i}${currentName}`]) {
          allCorrect = false;
          break;
        }
      }
      if (currentName === "andrea") {
        if (answer !== correctAnswersAndrea[`q${i}${currentName}`]) {
          allCorrect = false;
          break;
        }
      }
      if (currentName === "adrian") {
        if (answer !== correctAnswersAdrian[`q${i}${currentName}`]) {
          allCorrect = false;
          break;
        }
      }
      if (currentName === "alex") {
        if (answer !== correctAnswersAlex[`q${i}${currentName}`]) {
          allCorrect = false;
          break;
        }
      }
      if (currentName === "miguel") {
        if (answer !== correctAnswersMiguel[`q${i}${currentName}`]) {
          allCorrect = false;
          break;
        }
      }
    }

    if (allCorrect) {
      $("#" + currentName + "Div").fadeOut(1000);
      $("#story"+currentName).css({
        "z-index": "9999",
        "position": "fixed",
        "top": "0",
        "left": "0"
      }).fadeIn(1000);
      currentQuestion = 1;
    } else {
      $(".result").text("No lo conoces suficiente para desbloquearlo (Una o más respuestas mal), inténtalo de nuevo");
    }
  });

  $(".triggerImage").click(function () {
    $(".result").text("");
    currentQuestion = 1;
    currentName = $(this).attr("id");
    showQuestion(currentQuestion);
    // Get the window's width and height
    var windowWidth = $(document).width();
    var windowHeight = $(document).height();
    $(".container"+currentName).show();
    $("#backButton"+currentName).show();
  
    // Show and animate the div to cover the entire window
    $("#" + currentName + "Div")
      .css({ display: "flex", width: 0, height: 0 })
      .animate(
        {
          width: windowWidth,
          height: windowHeight,
        },
        700,
        "swing" // Use the 'swing' easing function
      );
  });

  $(".bacckButton").click(function () {
    // Hide the back button
    $(this).hide();
  
    // Fade out the div
    $("#" + currentName + "Div").fadeOut(1000);
  });

  $(".backButton").click(function() {
    $("#story"+currentName).css({
      "z-index": "9999",
      "position": "fixed",
      "top": "0",
      "left": "0"
    }).fadeOut(1000);
  });
});
