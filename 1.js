//Поле
let input = document.querySelector('.input')

// Ввод символа
function insert(num) {
    input.textContent == "0" ? input.textContent = "" + num : input.textContent += num
    input.textContent = input.textContent
        .replace("-+", "+")
        .replace("--", "-")
        .replace("++", "+")
        .replace("-/", "/")
        .replace("-*", "*")
        .replace("+-", "-")
        .replace("^*", "*")
        .replace("^+", "+")
        .replace("^/", "/")
        .replace("+*", "*")
        .replace("+/", "/")
        .replace("*+", "+")
        .replace("*/", "/")
        .replace("**", "*")
        .replace("//", "/")
        .replace("/+", "+")
        .replace("/*", "*")
}
// Очистка поля
function clean() {
    input.textContent = "0"
}
// Удалить символ
function back() {
    input.textContent != 0 ? input.textContent = input.textContent.slice(0, -1)
        : input.textContent = input.textContent = "0"

}
// Вычисление выражения

function equal() {
        try {
            input.textContent = eval(input.textContent.replace('^', "**"))
        } catch (error) {
            alert('Неверное выражение')
        }
}

function percent() {
    input.textContent = eval(input.textContent) / 100
}
// Константы
function constant(name) {
    if (input.textContent == 0) {
        input.textContent = "";
    }
    switch(name) {
        case "pi":
        input.textContent += Math.PI.toFixed(8)
        break;
        case "e":
        input.textContent += Math.E.toFixed(8)
        break;
    }      
}
// Степени числа
function operation(name) {
    switch(name) {
        case "sqrt":
            input.textContent = eval(input.textContent) ** (1/2)
        break;
        case "^2":
            input.textContent = eval(input.textContent) ** 2
        break;
        case "^-1":
            input.textContent = eval(input.textContent) ** -1
        break;
        case "^":
            input.textContent = (input.textContent + "^")
            .replace("+^", "^")
            .replace("-^", "^")
            .replace("*^", "^")
            .replace("/^", "^")
            .replace("^^", "^")
        break;
    }      
}
//факториал
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1
}
function fact() {
    input.textContent = factorial(eval(input.textContent))
}
//Логарифмы
function log(name) {
    switch(name) {
        case "lg":
            input.textContent = Math.log10(eval(input.textContent)).toFixed(8).replace('NaN', "Error")
        break;
        case "ln":
            input.textContent = Math.log(eval(input.textContent)).toFixed(8).replace('NaN', "Error")
        break;
    }
}
//Пепеключение между графусами и радианами
document.querySelector('.type').addEventListener('click', function () {
    if (document.querySelector('.type').textContent == "deg") {
        this.textContent = "rad"
    } else if (document.querySelector('.type').textContent == "rad") {
        this.textContent = "deg"
    }
})
//синусы и косинусы
function f(name) {
    if (name == "sin") {
        if (document.querySelector('.type').textContent == "deg") {
            input.textContent = parseFloat(Math.sin(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString())
        } else
            input.textContent = parseFloat(Math.sin(eval(input.textContent)).toFixed(8).toString());
    }
    if (name == "cos") {
        if (document.querySelector('.type').textContent == "deg") {
            input.textContent = parseFloat(Math.cos(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString())
        } else
            input.textContent = parseFloat(Math.cos(eval(input.textContent)).toFixed(8).toString())
    }
    if (name == "tan") {
        if (document.querySelector('.type').textContent == "deg") {
            input.textContent = parseFloat(Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString())
        } else
            input.textContent = parseFloat(Math.tan(eval(input.textContent)).toFixed(8).toString())
    }
    if (name == "ctg") {
        if (document.querySelector('.type').textContent == "deg") {
            input.textContent = parseFloat(1 / (Math.tan(eval(input.textContent) / 180 * Math.PI)).toFixed(8).toString())
        } else
            input.textContent = parseFloat(1 / (Math.tan(eval(input.textContent))).toFixed(8).toString())
    }
}
