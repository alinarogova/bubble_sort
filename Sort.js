/**
 * Created by Алина on 08.03.2016.
 */

function Sort(str) {

    if (typeof str != 'string') {
        str = document.getElementById("inputNumber").value;
        document.body.removeChild(document.getElementById("inputNumber"));
    }
    else document.body.removeChild(document.body.firstElementChild);

    createButton1();
    createButton2();
    document.body.insertBefore(document.createElement("br"), document.body.children[2]);
    createMainDiv();

    var div = [];
    createDivForNumber(str);
    var i = 1, j = div.length - 1;

    function createButton1() {
        var button1 = document.createElement('input');
        button1.type = 'button';
        button1.value = 'сброс';
        button1.style.marginTop = '15px';
        document.body.insertBefore(button1, document.body.children[0]);
        button1.onclick = reset;
    }

    function createButton2() {
        var button2 = document.createElement('input');
        button2.type = 'button';
        button2.value = 'шаг вперёд';
        button2.style.margin = '15px ';
        document.body.insertBefore(button2, document.body.children[1]);
        button2.onclick = oneStep;
    }

    function createMainDiv() {
        mainDiv = document.createElement('div');
        mainDiv.style = "margin-top: 10px;" +
            "height: 32px;" +
            "font-weight: bold; " +
            "text-align: center;";
        mainDiv.className = 'mainDiv';
        document.body.insertBefore(mainDiv, document.body.children[document.body.childElementCount - 2]);
    }

    function createDivForNumber() {
        for (i = 0; i < str.split(",").length; i++) {
            div[i] = document.createElement('div');
            div[i].style = "font-size: 15px;" +
                "border: 1px solid #000;" +
                "width: 30px; " +
                "height:30px;" +
                "float:left;" +
                "padding-top:5px;" +
                "box-sizing: border-box;";
            div[i].innerHTML = parseInt(str.split(",")[i]);
            mainDiv.appendChild(div[i]);
        }
    }

    function reset() {
        for (j = 0; j < 4; j++) {
            document.body.removeChild(document.body.firstElementChild);
        }
        var input = document.createElement('input');
        input.onchange = Sort;
        input.id = "inputNumber";
        document.body.appendChild(input);
    }

    function oneStep() {
        if (j > 0) {
            if (i > 1) {
                div[i - 2].style.backgroundColor = "#fff";
                mainDiv.removeChild(div[i - 2]);
                mainDiv.insertBefore(div[i - 2], mainDiv.children[i - 2]);
            }
            else if (j != div.length - 1) {
                div[j].style.backgroundColor = "#fff";
                div[j + 1].style.backgroundColor = "#c1c1c1";
                for (var k = j; k <= j + 1; k++) {
                    mainDiv.removeChild(div[k]);
                    mainDiv.insertBefore(div[k], mainDiv.children[k]);
                }
            }
            if (+div[i].innerHTML < +div[i - 1].innerHTML) {
                var temp = div[i].innerHTML;
                div[i].innerHTML = div[i - 1].innerHTML;
                div[i - 1].innerHTML = temp;

            }

            for (var k = i - 1; k <= i; k++) {
                div[k].style.backgroundColor = "#ffc100";
                mainDiv.removeChild(div[k]);
                mainDiv.insertBefore(div[k], mainDiv.children[k]);
            }

            if (i == j) {
                i = 1;
                j--;
            }
            else
                i++;
        }
        else {
            for (var k = 0; k <= 1; k++) {
                div[k].style.backgroundColor = "#c1c1c1";
                mainDiv.removeChild(div[k]);
                mainDiv.insertBefore(div[k], mainDiv.children[k]);
            }
            alert('Уже отсортирован!');
        }
    }
}


