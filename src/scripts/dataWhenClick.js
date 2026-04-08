function buttonLog(id, value, buttonPressed) {
    // Fire analytics as fire-and-forget (do not block navigation)
    var date = new Date();
    $.ajax({
        async: true,
        type: "POST",
        url: "saveData.php",
        data: { "name": id, "date": date },
    });

    var url = 'http://WIZnetD9E9F9.istb4.dhcp.asu.edu/' + buttonPressed;
    console.log(url);
    fetch(url, { method: 'POST', mode: 'no-cors' }).catch(function() {});

    // Navigate immediately using local relative path
    window.location.href = value;
}