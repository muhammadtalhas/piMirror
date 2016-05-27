function loadUserData() {
        console.log("trying load")
        $.ajax({
        url: "http://192.168.1.10:8081/getLoginData",
        type: "GET",
        dataType: "jsonp",
        success: function(data) {
            console.log(data.primaryKey)
          

        },
        error: function(e) {
            console.log(e.statusText);
        },
        timeout: 10000
    })
}