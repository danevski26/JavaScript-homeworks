console.log ("CONNECTED")

function typeOf(input) {
    let type = typeof input;
    
    switch(type) {
        case 'object':
            console.log('Type: object');
            break;
        case 'boolean':
            console.log('Type: boolean');
            break;
        case 'number':
            console.log('Type: number');
            break;
        case 'string':
            console.log('Type: string');
            break;
        case 'undefined':
            console.log('Type: undefined');
            break;
        default:
            console.log('Type: other');
    }
}

typeOf ()