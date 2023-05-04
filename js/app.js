const LS_KEY = 'answers';

var userData = {};
console.log(questionnareData);

$(document).on('click', '.image-select-option', function() {
    let qIndex = $(this).parent().attr('data-qindex');
    let answer = $(this).attr('data-value');

    $(this).parent().find('.image-select-option').removeClass('selected');
    $(this).addClass('selected');

    submitAnswer(qIndex, answer);
})

$(document).on('click', '.multiselect-option', function() {
    let qIndex = $(this).parent().attr('data-qindex');
    let answer = $(this).attr('data-value');
    let maxOptions = $(this).parent().attr('data-maxOptions') == 'infinity' ? 'infinity' : parseInt($(this).parent().attr('data-maxOptions'));

    let curAnswers = typeof userData[qIndex] == 'undefined' ? [] : userData[qIndex];
    
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
        curAnswers = curAnswers.filter((curAnswer) => curAnswer != answer);
    }
    else {
        if (maxOptions == 'infinity' || curAnswers.length < maxOptions) {
            $(this).addClass('selected');
            curAnswers.push(answer);
        }
    }

    submitAnswer(qIndex, curAnswers);
})

$(document).on('customChange', '.fancy-dropdown', function(event, data) {
    submitAnswer($(this).attr('data-qindex'), data.value);
})

$(document).on('change', '.inputbox', function() {
    submitAnswer($(this).attr('data-qindex'), $(this).val());
})


function loadUserAnswers() {
    if (localStorage.getItem(LS_KEY)) {
        userData = JSON.parse(localStorage.getItem(LS_KEY));
    }
}

function saveUserAnswers() {
    localStorage.setItem(LS_KEY, JSON.stringify(userData));
}

function submitAnswer(qIndex, answer) {
    userData[qIndex] = answer;
    saveUserAnswers();
}

function renderPage() {
    let stepsHtml = '';
    let questionIndex = 1;

    for(let qIndex = 0; qIndex < questionnareData.length; qIndex ++) {
        let sections = questionnareData[qIndex]['sections'];
        let sectionsHtml = '';

        for(let sIndex = 0; sIndex < sections.length; sIndex ++) {
            let sectionTitle = sections[sIndex]['title'];
            let parts = sections[sIndex]['parts'];

            let partsHtml = '';

            for(let pIndex = 0; pIndex < parts.length; pIndex ++) {
                let question = questionIndex + '. ' + parts[pIndex]['question'];
                let options = parts[pIndex]['options'];
                let type = parts[pIndex]['type'];
                let width = parts[pIndex]['width'];
                let height = parts[pIndex]['height'];
                let maxOptions = parts[pIndex]['maxOptions'] ? parts[pIndex]['maxOptions'] : 1;
                let min = parts[pIndex]['min'] ? parts[pIndex]['min'] : null;
                let max = parts[pIndex]['max'] ? parts[pIndex]['max'] : null;

                let userAnswer = typeof userData[questionIndex] != 'undefined' ? userData[questionIndex] : '';

                let formGroupHtml = '';

                if (type == 'text') {
                    formGroupHtml = `
                        <div class="form-group">
                            <label>${question}</label>
                            <input type="text" class="inputbox" data-qindex="${questionIndex}" value="${userAnswer}" min="${min}" max="${max}">
                        </div>
                    `;

                } else if (type == 'select') {
                    formGroupHtml = `
                        <div class="form-group">
                            <label>${question}</label>
                            <input type="text" value="${userAnswer}" class="fancy-dropdown" data-fd-options='${JSON.stringify(options)}' data-qindex="${questionIndex}">
                        </div>
                    `;
                    
                } else if (type == 'image-select') {
                    let optionsHtml = '';
                    for(let oIndex = 0; oIndex < options.length; oIndex ++) {
                        let selected = '';

                        if(userAnswer == oIndex) {
                            selected = 'selected';
                        }

                        optionsHtml += `
                            <div class="image-select-option ${selected}" style="background-image:url(${options[oIndex]}); width: ${width}px; height: ${height}px" data-value="${oIndex}"></div>
                        `
                    }

                    formGroupHtml = `
                        <div class="form-group">
                            <label>${question}</label>
                            <div class="image-select" data-qindex="${questionIndex}" data-maxOptions="${maxOptions}">${optionsHtml}</div>
                        </div>
                    `;

                } else if (type == 'multi-select') {
                    let optionsHtml = '';
                    for(let oIndex = 0; oIndex < options.length; oIndex ++) {
                        let selected = '';

                        if(userAnswer != '' && userAnswer.filter((answer) => answer == oIndex).length) {
                            selected = 'selected';
                        }

                        optionsHtml += `
                            <span class="multiselect-option ${selected}" data-value="${oIndex}">${options[oIndex]}</span>
                        `
                    }

                    formGroupHtml = `
                        <div class="form-group">
                            <label>${question}</label>
                            <div class="multiselect" data-qindex="${questionIndex}" data-maxOptions="${maxOptions}">${optionsHtml}</div>
                        </div>
                    `;
                }
                partsHtml += `
                    <div class="form-group-container">${formGroupHtml}</div>
                `;

                questionIndex ++;
            }

            sectionsHtml += `
                <div class="section-container">
                    <h2>${sectionTitle}</h2>
                    ${partsHtml}
                </div>
            `;
        }

        stepsHtml += `
            <div class="step-container">${sectionsHtml}</div>
        `
    }

    $('.container').html(stepsHtml);
    
    initializeFancyDropdown();
}

$(document).ready(function() {
    loadUserAnswers();
    renderPage();
})
