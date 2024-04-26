
    // document.addEventListener("click",function click(){
    //     let c = confirm("Are you sure??");
    //     console.log(c);
    // })
    
    //jquery        

    $(document).ready(function () {
        $('#btn1').click(function () {
            let c = confirm("are you sure??");
            console.log(c);
        });
        $('#btn2').click(function () {
            alert("its ok its hurts me leave me alone");
        });
    })