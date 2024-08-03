$(function() {

    // Populate state options
    let state_options= ""
    for (let state in state_city_col) {
        if (state=="Illinois") {
            state_options+= `<option value="${state}" selected>${state}</option>`
        } else{
            state_options+= `<option value="${state}">${state}</option>`
        }
    }
    $("#state_select").html(state_options)

    // Populate city options
    let initial_city_options= ""
    let initial_state_selected= $("#state_select").val()
    let initial_city_array= state_city_col[initial_state_selected]
    for (let city_col of initial_city_array) {
        let city= city_col.city
        if (city!= "Unlisted") {
            initial_city_options+= `<option value="${city}">${city}</option>`
        }
    }
    initial_city_options+= `<option value="Unlisted">Unlisted</option>`
    $("#city_select").html(initial_city_options)

    $("#state_select").on("change", function() {
        let city_options= ""
        let state_selected= $("#state_select").val()
        let city_array= state_city_col[state_selected]
        for(let city_col of city_array) {
            let city= city_col.city
            if(city!="Unlisted") {
                city_options+= `<option value="${city}">${city}</option>`
            }
        }
        city_options+= `<option value="Unlisted">Unlisted</option>`
        $("#city_select").html(city_options)
    })

    // Populate licensure options
    let licensure_options= ""
    let licensure_array= ["None/EIT","PE"]
    for(let license of licensure_array){
        licensure_options+= `<option value="${license}">${license}</option>`
    }
    $("#licensure_select").html(licensure_options)

    // Populate education options
    let education_options= ""
    let education_array= ["Bachelors","Masters"]
    for(let degree of education_array){
        education_options+= `<option value="${degree}">${degree}</option>`
    }
    $("#education_select").html(education_options)

    // Populate subdiscipline options
    let subdiscipline_options=""
    let subdiscipline_array= ["Bridges", "Construction/Field", "Environmental", "Geotechnical", "Government/Municipal",
        "Land Development", "Power/Electrical/Utilities", "Structural", "Transportation", "Water Resources"
    ]
    for(let subdiscipline of subdiscipline_array){
        subdiscipline_options+=`<option value="${subdiscipline}">${subdiscipline}</option>`
    }
    $("#subdiscipline_select").html(subdiscipline_options)

    // Populate sector options
    let sector_options=""
    let sector_array= ["Private", "Public"]
    for (let sector of sector_array){
        sector_options+=`<option value="${sector}">${sector}</option>`
    }
    $("#sector_select").html(sector_options)


})