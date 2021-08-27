function nilaiAkhir(){
    const nilaiMahaiswa = 50;

    if (nilaiMahaiswa >=80){
        console.log("Nilai A")
    } else if (nilaiMahaiswa<80 && nilaiMahaiswa >60){
        console.log("Nilai B")
    } else if (nilaiMahaiswa<=60 && nilaiMahaiswa>50){
        console.log("Nilai C")
    } else {
        console.log("Remedial")
    }
}

// if Bersarang
function ifBersarang(){
    const x = 30
    const y = 50
    const z =10
    if (x>y){
        if(x>z){
            console.log("x adalah yang paling besar")
        }else{
            console.log("x adalah Yang paling besar ke dua")
        }
    } else{
        if(x<z){
            console.log("x adalah yang paling kecil")
        }else{
            console.log("x adalah yang paling kecil ke dua")
        }
    }
}

nilaiAkhir()
ifBersarang()




