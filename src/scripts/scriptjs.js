var inputValor = document.getElementById("valor");
var result = document.getElementById("resultado");
var inputType = document.getElementById("unidade1");
var resultType = document.getElementById("unidade2");
var inputTypeValue, resultTypeValue;


inputValor.addEventListener('keyup',converter);
inputType.addEventListener('change',converter);
resultType.addEventListener('change',converter);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;
function converter(){

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;
    if(result.value === ""){
        result.value = "0"
    }
    switch(inputTypeValue){
        case "kg":
            result.value = "0"
            switch(resultTypeValue){
                case "kg":
                    result.value = inputValor.value
                break;
                case "hg":
                    result.value = Number(parseFloat(inputValor.value)) * 10
                    break;
                case "dag":
                    result.value = Number(parseFloat(inputValor.value)) * 100
                    break;
                case "g":
                    result.value = Number(parseFloat(inputValor.value)) * 1000
                    break;
                case "dg":
                    result.value = Number(parseFloat(inputValor.value)) * 10000
                    break;
                case "cg":
                    result.value = Number(parseFloat(inputValor.value)) * 100000
                    break;
                case "mg":
                    result.value = Number(parseFloat(inputValor.value)) * 1000000
                    break;
                default:
                    result.value = "0"
                    break; 
            }
        case "hg":
            switch(resultTypeValue){
                case "kg":
                    result.value = Number(parseFloat(inputValor.value)) / 10
                break;
                case "hg":
                    result.value = inputValor.value
                    break;
                case "dag":
                    result.value = Number(parseFloat(inputValor.value)) * 10
                    break;
                case "g":
                    result.value = Number(parseFloat(inputValor.value)) * 100
                    break;
                case "dg":
                    result.value = Number(parseFloat(inputValor.value)) * 1000
                    break;
                case "cg":
                    result.value = Number(parseFloat(inputValor.value)) * 10000
                    break;
                case "mg":
                    result.value = Number(parseFloat(inputValor.value)) * 100000
                    break;  
                default:
                    result.value = 0
                    break;
            }
        break;
        case "dag":
            switch(resultTypeValue){
                case "kg":
                    result.value = Number(parseFloat(inputValor.value)) / 100
                break;
                case "hg":
                    result.value = Number(parseFloat(inputValor.value)) / 10
                    break;
                case "dag":
                    result.value = inputValor.value
                    break;
                case "g":
                    result.value = Number(parseFloat(inputValor.value)) * 10
                    break;
                case "dg":
                    result.value = Number(parseFloat(inputValor.value)) * 100
                    break;
                case "cg":
                    result.value = Number(parseFloat(inputValor.value)) * 1000
                    break;
                case "mg":
                    result.value = Number(parseFloat(inputValor.value)) * 10000
                    break;  
                default:
                    result.value = 0
                    break;
            }
            break;
        case "g":
            switch(resultTypeValue){
                case "kg":
                    result.value = Number(parseFloat(inputValor.value)) / 1000
                break;
                case "hg":
                    result.value = Number(parseFloat(inputValor.value)) / 100
                    break;
                case "dag":
                    result.value = Number(parseFloat(inputValor.value)) / 10
                    break;
                case "g":
                    result.value = inputValor.value
                    
                    break;
                case "dg":
                    result.value = Number(parseFloat(inputValor.value)) * 10
                    break;
                case "cg":
                    result.value = Number(parseFloat(inputValor.value)) * 100
                    break;
                case "mg":
                    result.value = Number(parseFloat(inputValor.value)) * 1000
                    break; 
                default:
                    result.value = 0
                    break;
            }
        break;
        case "dg":
            switch(resultTypeValue){
                case "kg":
                    result.value = Number(parseFloat(inputValor.value)) / 10000
                break;
                case "hg":
                    result.value = Number(parseFloat(inputValor.value)) / 1000
                    break;
                case "dag":
                    result.value = Number(parseFloat(inputValor.value)) / 100
                    break;
                case "g":
                    result.value = Number(parseFloat(inputValor.value)) / 10
                    break;
                case "dg":
                    result.value = inputValor.value
                    break;
                case "cg":
                    result.value = Number(parseFloat(inputValor.value)) * 10
                    break;
                case "mg":
                    result.value = Number(parseFloat(inputValor.value)) * 100
                    break; 
                default:
                    result.value = 0
                    break;
            }
            break;
        case "cg":
                switch(resultTypeValue){
                    case "kg":
                        result.value = Number(parseFloat(inputValor.value)) / 100000
                    break;
                    case "hg":
                        result.value = Number(parseFloat(inputValor.value)) / 10000
                        break;
                    case "dag":
                        result.value = Number(parseFloat(inputValor.value)) / 1000
                        break;
                    case "g":
                        result.value = Number(parseFloat(inputValor.value)) / 100
                        break;
                    case "dg":
                        result.value = Number(parseFloat(inputValor.value)) / 10
                        break;
                    case "cg":
                        result.value = inputValor.value
                        break;
                    case "mg":
                        result.value = Number(parseFloat(inputValor.value)) * 100
                        break; 
                    default:
                        result.value = 0
                        break;
                }
                break;
        case "mg":
                    switch(resultTypeValue){
                        case "kg":
                            result.value = Number(parseFloat(inputValor.value)) / 1000000
                        break;
                        case "hg":
                            result.value = Number(parseFloat(inputValor.value)) / 100000
                            break;
                        case "dag":
                            result.value = Number(parseFloat(inputValor.value)) / 10000
                            break;
                        case "g":
                            result.value = Number(parseFloat(inputValor.value)) / 1000
                            break;
                        case "dg":
                            result.value = Number(parseFloat(inputValor.value)) / 100
                            break;
                        case "cg":
                            result.value = Number(parseFloat(inputValor.value)) / 10
                            break;
                        case "mg":
                            result.value = inputValor.value
                            break; 
                        default: 
                        result.value = 0
                        break;
                    }
                    break;
    }
}







