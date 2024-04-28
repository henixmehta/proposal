// document.addEventListener("click",function click(){
//     let c = confirm("Are you sure??");
//     console.log(c);
// })

//jquery
//YES
$(document).ready(function () {
  function askConfirmation() {
    Swal.fire({
      title: "YOU LOVE ME",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        swal.fire(
            'YOU : I LOVE YOU TOO',
            'You clicked the button!',
            'success'
          )          
      } else {
        askConfirmation();
      }
    });
  }
  // NO
  function ansNo() {
    Swal.fire({
      title: "ITS NOT RIGHT ANSWER",
      text: "MY HEART SAYS YOU LOVE ME.",
      icon: "warning",
      confirmButtonText: "Got it",
    }).then((result) => {
      if (result.isConfirmed) {
        ansNo();
      }
    });
  }

  $("#btn1").click(function () {
    askConfirmation();
  });

  $("#btn2").click(function () {
    ansNo();
  });
});
