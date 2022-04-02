const pokeColor = document.querySelector(".pokefoto");
const pokeDis = document.querySelector(".disName");
const pokeIdt = document.querySelector(".pokeId");
const pokeTypo = document.querySelector(".pokeType");
const pokeTypo2 = document.querySelector(".pokeType-2");

const pokMov = document.querySelector(".pokeHab");
const Mov1 = document.querySelector(".stat0");
const Mov2 = document.querySelector(".stat1");
const Mov3 = document.querySelector(".stat2");
const Mov4 = document.querySelector(".stat3")

const pStatics = document.querySelector(".menu1");
const pStatics1 = document.querySelector(".menu1");
const pStatics2 = document.querySelector(".menu2");
const pStatics3 = document.querySelector(".menu3");
const pStatics4 = document.querySelector(".menu4");
const pStatics5 = document.querySelector(".menu5");
const pStatics6 = document.querySelector(".menu6");

const pNum = document.querySelector(".menua");
const pNum1 = document.querySelector(".menua");
const pNum2 = document.querySelector(".menub");
const pNum3 = document.querySelector(".menuc");
const pNum4 = document.querySelector(".menud");
const pNum5 = document.querySelector(".menue");
const pNum6 = document.querySelector(".menuf");




const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./try.jpg");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokePic = data.sprites.front_default;
        console.log(pokePic);
        pokeImage(pokePic);
    })
   
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeInput}`)
.then(res => res.json())
.then(data => {
    console.log(data);
    
    pokeDis.textContent = capitalize(data['name']);
    pokeIdt.textContent = "#" + data['id'].toString().padStart(3, '0');
    const dataTypes = data['types'];
    const dataPokeTypo1 = dataTypes [0];
    const dataPokeTypo2 = dataTypes [1];
    pokeTypo.textContent = dataPokeTypo1['type']['name'];
        if (dataPokeTypo2) {
            pokeTypo2.textContent = dataPokeTypo2 ['type']['name'];

        } else {
                pokeTypo2.textContent= '';
            }
                
            




        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeInput}`)
.then(res => res.json())
.then(data => {
    console.log(data);
    
   
    Mov1.textContent = capitalize(data['name']);
    const dataMoves = data['moves'];
    const dataPokeMov1= dataMoves [0];
    const dataPokeMove2 = dataMoves [1];
    const dataPokeMov3 = dataMoves [2];
    const dataPokeMov4 = dataMoves [3];
    
    Mov1.textContent = dataPokeMov1['move']['name'];
    Mov3.textContent = dataPokeMov3 ['move']['name'];
    Mov4.textContent = dataPokeMov4 ['move']['name'];

   
        if (dataPokeMove2) {
            Mov2.textContent = dataPokeMove2 ['move']['name'];

        } else {
                Mov2.textContent= '';
            }
           
        })

        const dataStats = data['stats'];
        

        pStatics.textContent = dataStats['stat'];
        const dataPokeStat1 = dataStats[0];
        const dataPokeStat2 = dataStats[1];
        const dataPokeStat3 = dataStats[2];
        const dataPokeStat4 = dataStats[3];
        const dataPokeStat5 = dataStats[4];
        const dataPokeStat6 = dataStats[5];

       pStatics1.textContent = dataPokeStat1.stat.name;
       pStatics2.textContent = dataPokeStat2.stat.name;
       pStatics3.textContent = dataPokeStat3.stat.name;
       pStatics4.textContent = dataPokeStat4.stat.name;
       pStatics5.textContent = dataPokeStat5.stat.name;
       pStatics6.textContent = dataPokeStat6.stat.name;
       console.log(dataStats)

        const dataNum = data ['stats'];
        pNum.textContent = dataNum['base_stat'];
        const dataNum1 = dataNum[0];
        const dataNum2 = dataNum[1];
        const dataNum3 = dataNum[2];
        const dataNum4 = dataNum[3];
        const dataNum5 = dataNum[4];
        const dataNum6 = dataNum[5];



        pNum1.textContent = dataNum1.base_stat;
        pNum2.textContent = dataNum2.base_stat;
        pNum3.textContent = dataNum3.base_stat;
        pNum4.textContent = dataNum4.base_stat;
        pNum5.textContent = dataNum5.base_stat;
        pNum6.textContent = dataNum6.base_stat;
        console.log(pNum1);
        
        
            })

// Functions
const capitalize = (str) => str[0].toUpperCase() + str.substr(1);

}
const pokeImage = (url) => {
        const pokePic = document.getElementById("pokePic");
        pokePic.src = url;
}


//stats



    

    