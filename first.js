const params = process.argv.slice(2);

function circlearea (r){
    let area = Math.floor(Math.PI)*(r*r)
    console.log('Yarı çapı ${12} olan dairenin alanı: ${452.16}')
}

circlearea(params[0]*1);
