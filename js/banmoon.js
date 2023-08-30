'use strict'

function getId(id){
    return document.getElementById(id);
};

function copy(e) {
    console.log(e);
    e.select();
    e.setSelectionRange(0, e.value.length);
    document.execCommand('copy');
    alert("已复制到剪切板");
}

function insertMaven () {
    let $g = getId('g');
    let $a = getId('a');
    let $v = getId('v');
    let $f = getId('f');
    let $result = getId('result');
    let result = `mvn install:install-file -DgroupId=${$g.value} -DartifactId=${$a.value} -Dversion=${$v.value} -Dpackaging=jar -Dfile=${$f.value}`
    $result.value = result;
}

// getId("card-info-btn").onclick = function () {
//     btf.snackbarShow("点击 ctrl + D 加入书签");
// }