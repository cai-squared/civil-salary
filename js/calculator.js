$(function() {

    // Create state input
    var state_options= ""

    states.map((op)=> {

        if (op=="Illinois") {
            state_options += `<option value="${op}" selected>${op}</option>`
        } else {
            state_options += `<option value="${op}">${op}</option>`
        }

    })

    $("#state_select").html(state_options)

    // Create city input

    $("#state_select").on("change", function() {

        var city_options= ""

    })



})