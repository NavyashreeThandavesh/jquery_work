$("#first").hide();
    $("button").click(function(){
        if($("#fname").val() == "" || $("#lname").val()== "" || $("#email").val()== "" || $("#add").val()== "")
   {
    alert("Please fill the form!!");
}

else{
     $("#second").hide();
     $("#first").show();
    var f_name = $("#fname").val();
    $("#form1").text(f_name);
}
});
