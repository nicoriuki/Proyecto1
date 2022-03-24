const d = document,
      modalTitle = d.querySelector(".modal-title"),
      modalbody = d.querySelector(".modal-body"),
      t1 = d.querySelector(".titulo1").innerHTML;
(c1 = d.querySelector(".descripcion1").innerHTML),
      (t2 = d.querySelector(".titulo2").innerHTML),
      (c2 = d.querySelector(".descripcion2").innerHTML),
      (t3 = d.querySelector(".titulo3").innerHTML);
c3 = d.querySelector(".descripcion3").innerHTML;
function modal(titulo, cuerpo) {
      modalTitle.innerHTML = titulo;
      modalbody.innerHTML = cuerpo;
}
