function mandawpp(){
    var numerotelefone = '+553798132982'

    var nome = document.querySelector('.pessoaname').value
    var cidade = document.querySelector('.cityname').value
    var endereço = document.querySelector('.endereço').value
    var sn = document.querySelector('.sn').value
    var informações = document.querySelector('.infoadicionais').value

     var url = "https://wa.me/" + numerotelefone + "?text="
    +"*QUEIXA SOBRE O SANEAMENTO BÁSICO*"+ "%0a"
    +"Nome: " +nome+ "%0a"
    +"Cidade: " +cidade+ "%0a"
    +"Endereço do incidente: " +endereço+ "%0a"
    +"Solicita uma estação de tratamento:" +sn+ "%0a"
    +"Informções adicionais: " +informações+ "%0a"
    +"*Muito obrigado por nos reportar problemas no saneamento* "

    window.open(url, '_blank').focus()


}
