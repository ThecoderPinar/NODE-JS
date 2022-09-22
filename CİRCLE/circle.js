const Pi = Math.PI;

function circleArea( radius ) {
    const Area = Pi * radius * radius;
    console.log ("Alan: ",Area) ;
}

function circleCircumference ( radius ) {
    const Circumference = 2 * Pi * radius;
    console.log ("Çevre: ",Circumference)        
}




module.exports = {
    circleArea,
    circleCircumference
};

// export {
//     circleArea,
//     circleCircumference
// };