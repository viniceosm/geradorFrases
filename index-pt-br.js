//0 - masc
//1 - fem
//2 - qualquer
var GEN_MASC = 0;
var GEN_FEM = 1;
var GEN_QQR = 2;

var sintaxes = ['pronomePossesivo', 'substantivo', 'verboLigacao', 'predicativo', 'delaDele'];

function montaFrase() {
    // padrao: {{pronomePossesivo}} {{substantivo}} {{verboLigacao}} {{predicativo}}
    // exemplo: meu amigo é legal

    sorteado = {};
    sorteado['pronomePossesivo'] = randomOfArr(dados.pronomePossesivo);
    var generoSorteado = sorteado.pronomePossesivo[1];
    sorteado['substantivo'] = randomOfArr(filtrarGenero(dados.substantivo, generoSorteado));
    sorteado['verboLigacao'] = randomOfArr(filtrarGenero(dados.verboLigacao, generoSorteado));
    sorteado['predicativo'] = randomOfArr(filtrarGenero(dados.predicativo, generoSorteado));

    sorteado['delaDele'] = randomOfArr([['dela', GEN_FEM], ['dele', GEN_MASC]]);

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

function adicionaPronomePossesivo(_pronome, genero) {
    validaGeneroNaAdicao(dados.pronomePossesivo, _pronome, genero);
}

function adicionaSubstantivo(_substantivo, genero) {
    validaGeneroNaAdicao(dados.substantivo, _substantivo, genero);
}

function adicionaVerboLigacao(_verboLigacao, genero) {
    validaGeneroNaAdicao(dados.verboLigacao, _verboLigacao, genero);
}

function adicionaPredicativo(_predicativo, genero) {
    validaGeneroNaAdicao(dados.predicativo, _predicativo, genero);
}

function validaGeneroNaAdicao(arr, val1, genero) {
    if (genero >= 0 && genero <= 2) {
        arr.push([val1, genero]);
    } else {
        arr.push([val1, GEN_QQR]);
    }
}

var dados = {
    pronomePossesivo: [],
    substantivo: [],
    verboLigacao: [],
    predicativo: []
}

//pronome possessivo

adicionaPronomePossesivo('o', GEN_MASC);
adicionaPronomePossesivo('a', GEN_FEM);
adicionaPronomePossesivo('meu', GEN_MASC);
adicionaPronomePossesivo('minha', GEN_FEM);
adicionaPronomePossesivo('teu', GEN_MASC);
adicionaPronomePossesivo('tua', GEN_FEM);
adicionaPronomePossesivo('seu', GEN_MASC);
adicionaPronomePossesivo('sua', GEN_FEM);
adicionaPronomePossesivo('nosso', GEN_MASC);
adicionaPronomePossesivo('nossa', GEN_FEM);
adicionaPronomePossesivo('seu', GEN_MASC);
adicionaPronomePossesivo('sua', GEN_FEM);

//substantivo

adicionaSubstantivo('amigo', GEN_MASC);
adicionaSubstantivo('amiga', GEN_FEM);
adicionaSubstantivo('menina', GEN_FEM);
adicionaSubstantivo('namorada', GEN_FEM);
adicionaSubstantivo('princesa', GEN_FEM);

adicionaSubstantivo('compromisso', GEN_MASC);
adicionaSubstantivo('primo', GEN_MASC);
adicionaSubstantivo('carro', GEN_MASC);
adicionaSubstantivo('dinheiro', GEN_MASC);
adicionaSubstantivo('celular', GEN_MASC);
adicionaSubstantivo('pagamento', GEN_MASC);
adicionaSubstantivo('tempo', GEN_MASC);
adicionaSubstantivo('artigo', GEN_MASC);
adicionaSubstantivo('algoritmo', GEN_MASC);
adicionaSubstantivo('cara', GEN_MASC);
adicionaSubstantivo('projeto', GEN_MASC);
adicionaSubstantivo('casaco', GEN_MASC);

adicionaSubstantivo('amiga', GEN_FEM);
adicionaSubstantivo('namorada', GEN_FEM);
adicionaSubstantivo('esposa', GEN_FEM);
adicionaSubstantivo('noite', GEN_FEM);
adicionaSubstantivo('casa', GEN_FEM);
adicionaSubstantivo('esperança', GEN_FEM);
adicionaSubstantivo('conversa', GEN_FEM);
adicionaSubstantivo('cama', GEN_FEM);
adicionaSubstantivo('partida', GEN_FEM);
adicionaSubstantivo('prima', GEN_FEM);
adicionaSubstantivo('persiana', GEN_FEM);
adicionaSubstantivo('foto', GEN_FEM);
adicionaSubstantivo('xicara', GEN_FEM);
adicionaSubstantivo('salada', GEN_FEM);

//verbo de ligação

adicionaVerboLigacao('é', GEN_QQR);
adicionaVerboLigacao('está', GEN_QQR);

//predicativo

adicionaPredicativo('legal', GEN_QQR);
adicionaPredicativo('grande', GEN_QQR);
adicionaPredicativo('azul', GEN_QQR);

adicionaPredicativo('esforçado', GEN_MASC);
adicionaPredicativo('chato', GEN_MASC);
adicionaPredicativo('abusado', GEN_MASC);
adicionaPredicativo('rápido', GEN_MASC);
adicionaPredicativo('lindo', GEN_MASC);
adicionaPredicativo('grosso', GEN_MASC);
adicionaPredicativo('engraçado', GEN_MASC);
adicionaPredicativo('viciado', GEN_MASC);
adicionaPredicativo('pequeno', GEN_MASC);
adicionaPredicativo('noiado', GEN_MASC);
adicionaPredicativo('roxo', GEN_MASC);

adicionaPredicativo('larga', GEN_FEM);
adicionaPredicativo('feia', GEN_FEM);
adicionaPredicativo('verdadeira', GEN_FEM);
adicionaPredicativo('roxa', GEN_FEM);


// Monta 10 frases
str = fillArray(10, 1).reduce((acc) => {
    return acc += '<br>' + (montaFrase());
}, '')

function fillArray(quantidade, valor) {
    return new Array(quantidade).fill(valor);
}

document.querySelector('#res').innerHTML = str;