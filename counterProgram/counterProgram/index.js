const d = document.getElementById("d") ;
const i = document.getElementById("i") ;
const r = document.getElementById("r") ;
let c = 0 ;
d.onclick = function()
{c--;
  cn.textContent=c ;
}
i.onclick = function()
{c++ ;
  cn.textContent=c ;
}
r.onclick = function()
{c=0 ;
  cn.textContent=c ;
}