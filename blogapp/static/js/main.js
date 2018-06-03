  
 $(document).ready(function(){
   $(".upvote").click(function(){
   	   $.ajax({
    	url: "https://upvote/"+$(".upvote").attr("data-index"),
    	type:"GET", 
        success: function(result){
                $(".upvote").html("<i class='fas fa-chevron-up fa-4x'></i><p>"+result)
            }
     });
   });
});

