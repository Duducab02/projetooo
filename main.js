    var images = 
    ["dia-internacional-do-design-plano-do-conceito-de-familias_23-2148492790.avif" , "mae-com-sua-filha-festas-dia-da-mae-1525507.jpg" , "2-irmaos-familia-1360891.jpg" , "14623149-pai-de-personagem-de-desenho-animado-comemorando-o-dia-dos-pais-vetor.jpg"  ,  "pngtree-cartoon-hand-painted-smiling-boy-png-image_2945062.jpg" ]
    var nome = 
    ["Minha Família", "Minha mãe", "Minha irmã", "Meu pai", "Eu"]
    var i = 0;
    function proximomembro()
    {
        i++;
        var numberOfFamilyMemberInAray = 4
        if( i > numberOfFamilyMemberInAray ){
            i = 0;
        }
        var updatedImage = images[i];
        var updatedName = nome[i];
        document.getElementById("imagem").src = updatedImage
        document.getElementById("nome").innerHTML = updatedName
    }