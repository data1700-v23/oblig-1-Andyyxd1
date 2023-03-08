let billetter = [];

let ut = '<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>E-post-adresse</th></tr>';

$("#alle-billetter").html(ut);

$('#kjop').click(function() {
    let data = {
        film : $("#film").val(),
        ant : $("#antall").val(),
        forn : $("#fornavn").val(),
        enavn : $("#etternavn").val(),
        telefon : $("#tlf").val(),
        epostadresse : $("#epost").val()
    };
    console.log(data);
    if (data.forn === "") {
        $("#fornavn-feil").html("skriv inn gyldig verdi");
        $('#fornavn-feil').css("color", "red");
    }
    if (data.enavn === "") {
        $("#etternavn-feil").html("skriv inn gyldig verdi");
        $('#etternavn-feil').css("color", "red");
    }
    if (data.telefon === "") {
        $("#tlf-feil").html("skriv inn gyldig verdi");
        $('#tlf-feil').css("color", "red");
    }
    if (data.epostadresse === "") {
        $("#epost-feil").html("skriv inn gyldig verdi");
        $('#epost-feil').css("color", "red");
    }
    else if (data.forn !== "" && data.enavn !== "" && data.telefon !== "" && data.epostadresse !== ""){
        $('#fornavn-feil').html("");
        $('#etternavn-feil').html("");
        $('#epost-feil').html("");
        $('#tlf-feil').html("");
        $('#tlf').val("");
        $('#fornavn').val("");
        $('#etternavn').val("");
        $('#epost').val("");

        billetter.push(data);
        ut += `<tr><td>${data.film}</td><td>${data.ant}</td><td>${data.forn}</td><td>${data.enavn}</td><td>${data.telefon}</td><td>${data.epostadresse}</td></tr>`;
        $("#alle-billetter").html(ut);

    }
})

$('#slett').click(function() {
    billetter = [];
    $("#alle-billetter").html(" ");
    ut = `<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>E-post-adresse</th></tr>`
})

