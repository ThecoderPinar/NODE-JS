const params = process.argv.slice(2);

function circlearea (radius){
    const area = Math.PI.toFixed(2) * radius ** 2;
    return console.log('Yarı çapı ${12} olan dairenin alanı: ${452.16}')
}

circlearea(params[0] * 1);

