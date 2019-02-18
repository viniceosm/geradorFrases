//0 - masc
//1 - fem
//2 - qualquer
var GEN_MASC = 0;
var GEN_FEM = 1;
var GEN_QQR = 2;

var BE_ARE = 0;
var BE_IS = 1;
var BE_AM = 2;

var toBe = ['are', 'is', 'am'];

var sintaxes = ['pronomePossesivo', 'substantivo', 'verboLigacao', 'predicativo', 'delaDele'];


function montaFrase() {
    // padrao: {{pronomePossesivo}} {{substantivo}} {{verboLigacao}} {{predicativo}}
    // exemplo: my friend is cool

    sorteado = {};
    sorteado['pronomePossesivo'] = randomOfArr(dados.pronomePossesivo);
    var generoSorteado = sorteado.pronomePossesivo[1];
    sorteado['substantivo'] = randomOfArr(filtrarGenero(dados.substantivo, generoSorteado));

    // pega verbo de ligacao conforme o substantivo
    sorteado['verboLigacao'] = [toBe[sorteado.substantivo[2]]];

    sorteado['predicativo'] = randomOfArr(filtrarGenero(dados.predicativo, generoSorteado));

    sorteado['delaDele'] = randomOfArr([['her', 1], ['his', 0]]);

    var padroesFrase = [
        '{{pronomePossesivo}} {{substantivo}} {{verboLigacao}} {{predicativo}}',
        '{{substantivo}} {{delaDele}} {{verboLigacao}} {{predicativo}}'
    ];

    var padraoFrase = randomOfArr(padroesFrase);
    var frase = padraoFrase;

    for (sintaxe of sintaxes) {
        frase = frase.replace(new RegExp('{{' + sintaxe + '}}'), sorteado[sintaxe.toString()][0]);
    }

    return frase;
}

function filtrarGenero(arr, genero) {
    return arr.filter(el => el[1] == genero).concat(arr.filter(el => el[1] == 2));
}

function randomOfArr(arr) {
    return arr[getRandomInt(arr.length)];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function adicionaPronomePossesivo(_pronome, genero, toBe) {
    validaGeneroNaAdicao(dados.pronomePossesivo, _pronome, genero, toBe);
}

function adicionaSubstantivo(_substantivo, genero, toBe) {
    validaGeneroNaAdicao(dados.substantivo, _substantivo, genero, toBe);
}

function adicionaVerboLigacao(_verboLigacao, genero, toBe) {
    validaGeneroNaAdicao(dados.verboLigacao, _verboLigacao, genero, toBe);
}

function adicionaPredicativo(_predicativo, genero, toBe) {
    validaGeneroNaAdicao(dados.predicativo, _predicativo, genero, toBe);
}

function validaGeneroNaAdicao(arr, val1, genero, toBe) {
    if (genero >= 0 && genero <= 2) {
        arr.push([val1, genero, toBe]);
    } else {
        arr.push([val1, GEN_QQR, BE_IS]);
    }
}

var dados = {
    pronomePossesivo: [],
    substantivo: [],
    verboLigacao: [],
    predicativo: []
}

//pronome possessivo

adicionaPronomePossesivo('the', GEN_QQR);
adicionaPronomePossesivo('my', GEN_QQR);
adicionaPronomePossesivo('your', GEN_QQR);
adicionaPronomePossesivo('our', GEN_QQR);
adicionaPronomePossesivo('your', GEN_QQR);

//substantivo

adicionaSubstantivo('friend', GEN_QQR, BE_IS);
adicionaSubstantivo('girl', GEN_FEM, BE_IS);
adicionaSubstantivo('girlfriend', GEN_FEM, BE_IS);
adicionaSubstantivo('princess', GEN_FEM, BE_IS);
adicionaSubstantivo('commitment', GEN_MASC, BE_IS);
adicionaSubstantivo('cousin', GEN_MASC, BE_IS);
adicionaSubstantivo('car', GEN_MASC, BE_IS);
adicionaSubstantivo('money', GEN_MASC, BE_IS);
adicionaSubstantivo('cellphone', GEN_MASC, BE_IS);
adicionaSubstantivo('payment', GEN_MASC, BE_IS);
adicionaSubstantivo('time', GEN_MASC, BE_IS);
adicionaSubstantivo('article', GEN_MASC, BE_IS);
adicionaSubstantivo('algorithm', GEN_MASC, BE_IS);
adicionaSubstantivo('face', GEN_MASC, BE_IS);
adicionaSubstantivo('project', GEN_MASC, BE_IS);

adicionaSubstantivo('wife', GEN_FEM, BE_IS);
adicionaSubstantivo('night', GEN_FEM, BE_IS);
adicionaSubstantivo('house', GEN_FEM, BE_IS);
adicionaSubstantivo('hope', GEN_FEM, BE_IS);
adicionaSubstantivo('conversation', GEN_FEM);
adicionaSubstantivo('bed', GEN_FEM, BE_IS);
adicionaSubstantivo('match', GEN_FEM, BE_IS);
adicionaSubstantivo('cousin', GEN_FEM, BE_IS);
adicionaSubstantivo('photo', GEN_FEM, BE_IS);
adicionaSubstantivo('mug', GEN_FEM, BE_IS);
adicionaSubstantivo('salad', GEN_FEM, BE_IS);

//verbo de ligação

adicionaVerboLigacao('is', GEN_QQR);
adicionaVerboLigacao('are', GEN_QQR);
// adicionaVerboLigacao('am', GEN_QQR);

//predicativo

adicionaPredicativo('cool', GEN_QQR);
adicionaPredicativo('big', GEN_QQR);
adicionaPredicativo('blue', GEN_QQR);
adicionaPredicativo('purple', GEN_QQR);
adicionaPredicativo('gross', GEN_QQR);

adicionaPredicativo('hardworking', GEN_MASC);
adicionaPredicativo('annoying', GEN_MASC);
adicionaPredicativo('fast', GEN_MASC);
adicionaPredicativo('beautiful', GEN_MASC);
adicionaPredicativo('funny', GEN_MASC);
adicionaPredicativo('small', GEN_MASC);
// adicionaPredicativo('noiado', GEN_MASC);

adicionaPredicativo('huge', GEN_FEM);
// adicionaPredicativo('feia', GEN_FEM);
adicionaPredicativo('unfeigned', GEN_FEM);

str = fillArray(10, 1).reduce((acc, val) => {
    return acc += '<br>' + (montaFrase());
}, '')

function fillArray(quantidade, valor){
    return new Array(quantidade).fill(valor);
}

document.querySelector('#res').innerHTML = str;