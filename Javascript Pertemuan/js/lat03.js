let isi=document.querySelector("#isi");
isi.innerHTML="<h1>Soto</h1>" + "<p>Deskripsi Soto</p>" + '<img src="js/Bakso_mi_bihun.jpg" alt="">';

isi.innerHTML="<h1>Rawon</h1>";
isi.innerHTML+="<p>Deskripsi Rawon</p>";
isi.innerHTML+='<img src="js/Bakso_mi_bihun.jpg" alt="">';

for (let i = 0; i < 10; i++) {
    // console.log(i);
    document.querySelector("#content").innerHTML+="<h1>"+i+"</h1>";
    
}

let tabel = document.querySelector("#tabel");
tabel.innerHTML="<table>" 
                + "<thead><tr><th>Nomor</th></tr></thead>"
                + "<tbody>"
                + "<tr><td>1</td></tr>"
                + "<tr><td>2</td></tr>"
                + "<tr><td>3</td></tr>"
                + "<tr><td>4</td></tr>"
                + "<tr><td>5</td></tr>"
                + "</tbody>"
                + "</table>"

let tabel = document.querySelector("#tabel");

tabel.innerHTML='<tr><th>Nomor</th></tr>';

for (let i = 0; i <= 5; i++) {
    tabel.innerHTML='<tr><th>$(i)</th></tr>';    
}