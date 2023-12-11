console.log ('CONNECTED')

function cToFConverter (Celsius){
    let convertedCToF =parseFloat ((Celsius)*1.8+32)
    console.log(convertedCToF)
    document.write (Celsius,' degrees Celsius is equal to ',convertedCToF, ' degrees Fahrenheit. | ')
    return convertedCToF

};

cToFConverter (34)

function fToCConverter (Fahrenheit){
    let convertedFToC =parseFloat ((Fahrenheit)-32)*(5/9)
    console.log(convertedFToC)
    document.write (Fahrenheit, ' degrees Fahrenheit is equal to ',convertedFToC, ' degrees Celsius.')
    return convertedFToC
}

fToCConverter (67)