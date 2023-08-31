'use strict'

function getId(id) {
    return document.getElementById(id);
};

function copy(e) {
    e.select();
    e.setSelectionRange(0, e.value.length);
    document.execCommand('copy');
    alert("已复制到剪切板");
}

function insertMaven() {
    let $g = getId('g');
    let $a = getId('a');
    let $v = getId('v');
    let $f = getId('f');
    let $result = getId('result');
    let result = `mvn install:install-file -DgroupId=${$g.value} -DartifactId=${$a.value} -Dversion=${$v.value} -Dpackaging=jar -Dfile=${$f.value}`
    $result.value = result;
}

window.onload = function () {
    // 处理内部a标签跳转动画问题，但还没有解决
    const $alink = document.querySelectorAll('a[href^="#"]');
    if ($alink) {
        for (let i = 0; i < $alink.length; i++) {
            const alink = $alink[i];
            if (!alink.classList.contains('toc-link')) {
                alink.addEventListener('click', e => {
                    const $target = document.getElementById(decodeURI(e.target.getAttribute('href')).replace('#', ''));
                    btf.scrollToDest(btf.getEleTop($target), 300)
                    if (window.innerWidth < 900) {
                        window.mobileToc.close()
                    }
                })
            }
        }
    }

    // 首页按钮点击
    const $cardBtn = document.querySelector('#card-info-btn');
    if ($cardBtn) {
        $cardBtn.addEventListener('click', e => {
            btf.snackbarShow("点击 ctrl + D 加入书签");
        })
    }
}