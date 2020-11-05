function escolha(){
    var comboCursos = document.getElementById("comboCursos");
    curso = (comboCursos.options[comboCursos.selectedIndex].text);
    valor = (comboCursos.options[comboCursos.selectedIndex].value);
    var escolha = confirm(`Deseja abrir mais informações sobre ${curso} ?`);
    if (escolha == true)
      {
        window.open(`cursos/${valor}.html`, "janela", "width = 600, height = 300")
      }
    else
      {
      alert("Beleza, sem problemas");
      }
}
