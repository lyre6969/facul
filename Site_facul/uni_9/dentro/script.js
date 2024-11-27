function filtraTabela() {
    const input = document.getElementById('CampoBusca');
    const filtro = input.value.toLowerCase();
    const balea = document.getElementById('placas');
    const tr = tabela.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName('td');
        let visibilidade = false;

        for (let j = 0; j < td.length; j++) {
            if (td[j]) {
                const ValorTexto = td[j].ConteudoTexto || td[j].innerText;
                if (ValorTexto.toLowerCase().indexOf(filtro) > -1) {
                    visibilidade = true;
                }
            }
        }
        
        tr[i].style.display = visibilidade ? "" : "none";
    }
} 