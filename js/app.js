const LS_KEY = 'answers';

var userData = {};

function isJson(data) {
    var objectConstructor = ({}).constructor;

    if (data.constructor === objectConstructor) {
        return true;
    }

    return false;
}

// image-select handler

$(document).on('click', '.image-select-option', function() {
    let qIndex = $(this).parent().attr('data-qIndex');
    let answer = $(this).attr('data-value');

    $(this).parent().find('.image-select-option').removeClass('selected');
    $(this).addClass('selected');

    $(this).parents('.form-group-container').removeClass('error');

    submitAnswer(qIndex, answer);
})

// multi-select hander

$(document).on('click', '.multiselect-option:not(.text-option-itself)', function() {
    let qIndex = $(this).parent().attr('data-qIndex');

    if ($(this).parents('.form-group-container').attr('data-id') != 'null') {
        qIndex = $(this).parents('.form-group-container').attr('data-id');
    }
    
    let answer = parseInt($(this).attr('data-value'));
    let optionText = $(this).text().trim();
    let maxOptions = $(this).parent().attr('data-maxOptions') == 'infinity' ? 'infinity' : parseInt($(this).parent().attr('data-maxOptions'));
    let exclusive = $(this).parent().attr('data-exclusive');
    let optionExclusives = $(this).parent().attr('data-optionExclusives');

    if(typeof optionExclusives != 'undefined') {
        optionExclusives = JSON.parse(optionExclusives);
    }

    let curAnswers = typeof userData[qIndex] == 'undefined' ? [] : userData[qIndex];
    
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
        curAnswers = curAnswers.filter((curAnswer) => curAnswer != answer);
    }
    else {

        if (optionExclusives) {

            for(let oIndex = 0; oIndex < optionExclusives.length; oIndex ++) {
                let main = optionExclusives[oIndex]['main'];
                let others = optionExclusives[oIndex]['others'];

                if (main == answer) {
                    let othersExistInAnswers = curAnswers.filter((curAnswer) => others.includes(curAnswer));

                    if(othersExistInAnswers.length > 0) {
                        return;
                    }
                }

                let mainExistInAnswers = curAnswers.filter((curAnswer) => curAnswer == main);
                
                if(mainExistInAnswers.length > 0) {
                    let othersExistInAnswers = others.filter((other) => other == curAnswer);

                    if(othersExistInAnswers.length > 0) {
                        return;
                    }
                }
            }
        }

        exclusiveAnswers = curAnswers.filter((curAnswer) => curAnswer == exclusive);

        if (exclusiveAnswers.length > 0) {
            return;
        }

        if (answer == exclusive && curAnswers.length > 0) {
            return;
        }

        if (maxOptions == 'infinity' || curAnswers.length < maxOptions) {
            $(this).addClass('selected');
            curAnswers.push(answer);
        }
    }

    if (curAnswers.length == 0) {
        $(this).parents('.form-group-container').addClass('error');
    }
    else {
        $(this).parents('.form-group-container').removeClass('error');
    }

    submitAnswer(qIndex, curAnswers);
})

// text-option handlers
$(document).on('change', '.inputbox.text-option-input', function() {
    let qIndex = $(this).attr('data-qIndex');
    let tIndex = $(this).attr('data-tIndex');
    let curAnswers = typeof userData[qIndex] == 'undefined' ? {} : userData[qIndex];

    if($(this).val() == '') {
        delete curAnswers[tIndex];
    }
    else {
        curAnswers[tIndex] = $(this).val();
    }

    if (Object.keys(curAnswers).length == 0) {
        $(this).parents('.form-group-container').addClass('error');
    }
    else {
        $(this).parents('.form-group-container').removeClass('error');
    }

    submitAnswer(qIndex, curAnswers);
})

$(document).on('click', '.multiselect-option.text-option-itself', function() {
    let qIndex = $(this).parent().attr('data-qIndex');
    let answer = $(this).attr('data-value');
    let curAnswers = typeof userData[qIndex] == 'undefined' ? {} : userData[qIndex];

    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');

        curAnswers = {};
        $(this).parents('.text-option-container').find('.form-group-input-list-wrap').show();
        
        let formInputs = $(this).parents('.text-option-container').find('.inputbox');

        for(let fIndex = 0; fIndex < formInputs.length; fIndex ++) {

            if ($(formInputs[fIndex]).val() == '') {
                continue;
            }

            let fTIndex = $(formInputs[fIndex]).attr('data-tIndex');
            curAnswers[fTIndex] = $(formInputs[fIndex]).val();
        }
    }
    else {
        $(this).addClass('selected');
        
        $(this).parents('.text-option-container').find('.form-group-input-list-wrap').hide();

        curAnswers = answer;
    }

    if(curAnswers == '' || Object.keys(curAnswers).length == 0) {
        $(this).parents('.form-group-container').addClass('error');
    }
    else {
        $(this).parents('.form-group-container').removeClass('error');
    }

    submitAnswer(qIndex, curAnswers);
})

$(document).on('click', '.btn-add-text-option-input', function() {
    let qIndex = $(this).attr('data-qIndex');
    let tIndex = $(this).parents('.form-group-input-list-wrap').find('.form-group-input').length;
    let maxCount = parseInt($(this).attr('data-maxCount'));

    if(tIndex >= maxCount) {
        return;
    }

    $(this).parents('.form-group-input-list-wrap').find('.form-group-input-list').append(`
        <div class="form-group form-group-input">
            <input type="text" class="inputbox text-option-input" data-qindex="${qIndex}" data-tindex="${tIndex}" value="">
        </div>
    `);
})

// select handler
$(document).on('customChange', '.fancy-dropdown', function(event, data) {
    if ($(this).attr('data-id') != 'null') {
        submitAnswer($(this).attr('data-id'), data.value);
    }
    else {
        submitAnswer($(this).attr('data-qIndex'), data.value);
    }
    
    if (data.value != '') {
        $(this).parents('.form-group-container').removeClass('error');
    }
    else {
        $(this).parents('.form-group-container').addClass('error');
    }
})

// text handler
$(document).on('change', '.inputbox.single-input', function() {

    if($(this).val() == '') {
        $(this).parents('.form-group-container').addClass('error');
    }
    else {
        $(this).parents('.form-group-container').removeClass('error');
    }

    submitAnswer($(this).attr('data-qIndex'), $(this).val());
})

// multi-text handlers
$(document).on('change', '.inputbox.multi-text-input', function() {
    let qIndex = $(this).attr('data-qIndex');
    let tIndex = $(this).attr('data-tIndex');
    let curAnswers = typeof userData[qIndex] == 'undefined' ? {} : userData[qIndex];

    if($(this).val() == '') {
        delete curAnswers[tIndex];
    }
    else {
        curAnswers[tIndex] = $(this).val();
    }
    
    if(Object.keys(curAnswers).length > 0) {
        $(this).parents('.form-group-container').removeClass('error');
    }
    else {
        $(this).parents('.form-group-container').addClass('error');
    }

    submitAnswer(qIndex, curAnswers);
})

$(document).on('click', '.btn-add-multi-text-input', function() {
    let qIndex = $(this).attr('data-qIndex');
    let tIndex = $(this).parents('.form-group-input-list-wrap').find('.form-group-input').length;
    let maxCount = parseInt($(this).attr('data-maxCount'));

    if(tIndex >= maxCount) {
        return;
    }

    $(this).parents('.form-group-input-list-wrap').find('.form-group-input-list').append(`
        <div class="form-group form-group-input">
            <input type="text" class="inputbox text-option-input" data-qindex="${qIndex}" data-tindex="${tIndex}" value="">
        </div>
    `);
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

    if(answer == '') {
        delete userData[qIndex];

    } else {
        userData[qIndex] = answer;
    }
    
    saveUserAnswers();

    $(document).trigger('answerUpdate', { userData })
}

$(document).on('answerUpdate', function(event, data) {
    setQuestionVisible(data['userData']);
})

$(document).on('click', '#btn_submit', function() {
    if(isValid()) {
        getFullQAList();
        alert('Sent');
    }
})

function setQuestionVisible(data) {

    if (data['q_sex'] == 'Female') {
        $('.form-group-container[data-id="q_hormonal_birth"]').removeClass('hide');

        $('.form-group-container[data-id="q_have_abortion"]').removeClass('hide');

        $('.form-group-container[data-id="q_have_plan_b"]').removeClass('hide');

        $('.form-group-container[data-id="q_conceive_child"]').removeClass('hide');
    }
    else {
        $('.form-group-container[data-id="q_hormonal_birth"]').addClass('hide');

        $('.form-group-container[data-id="q_have_abortion"]').addClass('hide');

        $('.form-group-container[data-id="q_have_plan_b"]').addClass('hide');

        $('.form-group-container[data-id="q_conceive_child"]').addClass('hide');
    }
}

function isValid() {
    let questions = $('.form-group-container');
    let isValid = true;

    for(let index = 0; index < questions.length; index ++) {
        let qId = $(questions[index]).attr('data-id');

        if(qId == 'null') {
            qId = $(questions[index]).attr('data-qIndex');
        }

        if (qId != 'null') {

            if (typeof userData[qId] == 'undefined') {
                $(questions[index]).addClass('error');
                isValid = false;
            }
            else {

                if (userData[qId] == '' || Object.keys(userData[qId]).length == 0) {
                    $(questions[index]).addClass('error');
                    isValid = false;
                }
                else {
                    $(questions[index]).removeClass('error');
                }
            }
        }
    }

    return isValid;

    // $('.form-group-container').addClass('error');
}

function getFullQAList() {
    let qaList = [];
    let questionIndex = 1;

    for(let qIndex = 0; qIndex < questionnareData.length; qIndex ++) {
        let sections = questionnareData[qIndex]['sections'];

        for(let sIndex = 0; sIndex < sections.length; sIndex ++) {
            let parts = sections[sIndex]['parts'];

            for(let pIndex = 0; pIndex < parts.length; pIndex ++) {
                let options = parts[pIndex]['options'] ? parts[pIndex]['options'] : null;
                let id = parts[pIndex]['id'] ? parts[pIndex]['id'] : null;
                let type = parts[pIndex]['type'];
                let optionGroups = parts[pIndex]['optionGroups'] ? parts[pIndex]['optionGroups'] : null;
                let textCount = parts[pIndex]['textCount'] ? parts[pIndex]['textCount'] : null;
                let textMinCount = parts[pIndex]['textMinCount'] ? parts[pIndex]['textMinCount'] : 5;
                let inputGroups = parts[pIndex]['inputGroups'] ? parts[pIndex]['inputGroups'] : null;

                let userAnswer = '';

                if (id) {
                    userAnswer = typeof userData[id] != 'undefined' ? userData[id] : '';
                }
                else {
                    userAnswer = typeof userData[questionIndex] != 'undefined' ? userData[questionIndex] : '';
                }

                let answers = [];

                if (type == 'text') {

                    if(userAnswer != '') {
                        answers.push({
                            'subText': '',
                            'text': userAnswer
                        })
                    }

                } else if(type == 'multi-text') {

                    if(inputGroups) {
                        
                        for(let gIndex = 0; gIndex < inputGroups.length; gIndex ++) {
                            let answer = typeof userAnswer[gIndex] != 'undefined' ? userAnswer[gIndex] : '';

                            if(answer != '') {
                                answers.push({
                                    'subText': inputGroups[gIndex]['title'],
                                    'text': answer
                                });
                            }
                        }

                    } else {
                        let textInputCount = textMinCount;

                        Object.keys(userAnswer).map((tIndex) => {

                            answers.push({
                                'subText': '',
                                'text': userAnswer[tIndex]
                            });
                        });
                    }

                } else if (type == 'select') {

                    if (userAnswer != '') {
                        answers.push({
                            'subText': '',
                            'text': userAnswer
                        });
                    }
                    
                } else if (type == 'text-option') {

                    if (textCount == 'infinity') {

                        let textInputCount = textMinCount;
                        Object.keys(userAnswer).map((tIndex) => {
                            if (parseInt(textInputCount) <= parseInt(tIndex) && userAnswer[tIndex] != '') {
                                textInputCount = parseInt(tIndex) + 1;
                            }
                        });

                        for(let tIndex = 0; tIndex < textInputCount; tIndex++) {
                            let textAnswer = '';

                            if (isJson(userAnswer)) {
                                textAnswer = typeof userAnswer[tIndex] != 'undefined' ? userAnswer[tIndex] : '';
                            }

                            if (textAnswer != '') {
                                answers.push({
                                    'subText': '',
                                    'text': textAnswer
                                })
                            }
                        }
                        
                    } else if (textCount) {

                        for(let tIndex = 0; tIndex < textCount; tIndex++) {
                            let textAnswer = '';

                            if (isJson(userAnswer)) {
                                textAnswer = typeof userAnswer[tIndex] != 'undefined' ? userAnswer[tIndex] : '';
                            }

                            if (textAnswer != '') {
                                answers.push({
                                    'subText': '',
                                    'text': textAnswer
                                })
                            }
                        }
                    }
                    
                    if (options) {

                        for(let oIndex = 0; oIndex < options.length; oIndex++) {

                            if (userAnswer != '' && !isJson(userAnswer)) {

                                if(userAnswer != '' && userAnswer == oIndex) {
                                    answers.push({
                                        'subText': '',
                                        'text': options[oIndex]
                                    })
                                }
                            }
                        }
                    }

                } else if (type == 'image-select') {

                    if (options) {

                        if(userAnswer != '') {
                            answers.push({
                                'subText': '',
                                'text': options[userAnswer]
                            });
                        }
                        
                    }
                    
                } else if (type == 'multi-select') {

                    if (options) {
                        
                        for(let oIndex = 0; oIndex < options.length; oIndex ++) {
    
                            if(userAnswer != '' && userAnswer.filter((answer) => answer == oIndex).length) {
                                answers.push({
                                    'subText': '',
                                    'text': options[oIndex]
                                })
                            }
                        }

                    } else if (optionGroups) {

                        let answerIndex = 0;

                        for(let gIndex = 0; gIndex < optionGroups.length; gIndex ++) {
                            let groupTitle = optionGroups[gIndex]['title'];
                            let groupOptions = optionGroups[gIndex]['options'];

                            for(let oIndex = 0; oIndex < groupOptions.length; oIndex ++) {
    
                                if(userAnswer != '' && userAnswer.filter((answer) => answer == answerIndex).length) {
                                    answers.push({
                                        'subText': groupTitle,
                                        'text': groupOptions[oIndex]
                                    })
                                }

                                answerIndex ++;
                            }
                        }
                    }
                    
                }

                if (answers.length > 0) {
                    qaList.push({
                        'question': parts[pIndex]['question'],
                        'answers': answers
                    });
                }

                questionIndex ++;
            }
        }
    }

    console.log(qaList);
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
                let options = parts[pIndex]['options'] ? parts[pIndex]['options'] : null;
                let id = parts[pIndex]['id'] ? parts[pIndex]['id'] : null;
                let type = parts[pIndex]['type'];
                let width = parts[pIndex]['width'];
                let height = parts[pIndex]['height'];
                let maxOptions = parts[pIndex]['maxOptions'] ? parts[pIndex]['maxOptions'] : 1;
                let min = parts[pIndex]['min'] ? parts[pIndex]['min'] : null;
                let max = parts[pIndex]['max'] ? parts[pIndex]['max'] : null;
                let optionGroups = parts[pIndex]['optionGroups'] ? parts[pIndex]['optionGroups'] : null;
                let exclusive = parts[pIndex]['exclusive'] ? parts[pIndex]['exclusive'] : null;
                let optionExclusives = parts[pIndex]['optionExclusives'] ? parts[pIndex]['optionExclusives'] : null;
                let textCount = parts[pIndex]['textCount'] ? parts[pIndex]['textCount'] : null;
                let textMinCount = parts[pIndex]['textMinCount'] ? parts[pIndex]['textMinCount'] : 5;
                let textMaxCount = parts[pIndex]['textMaxCount'] ? parts[pIndex]['textMaxCount'] : 10;
                let inputGroups = parts[pIndex]['inputGroups'] ? parts[pIndex]['inputGroups'] : null;
                let errorMessage = parts[pIndex]['errorMessage'] ? parts[pIndex]['errorMessage'] : 'This is required.';

                let userAnswer = '';

                if (id) {
                    userAnswer = typeof userData[id] != 'undefined' ? userData[id] : '';
                }
                else {
                    userAnswer = typeof userData[questionIndex] != 'undefined' ? userData[questionIndex] : '';
                }

                let formGroupHtml = '';

                if (type == 'text') {
                    formGroupHtml = `
                        <div class="form-group">
                            <label>${question}</label>
                            <input type="text" class="inputbox single-input" data-qIndex="${questionIndex}" value="${userAnswer}" min="${min}" max="${max}">
                            <div class="error-message">${errorMessage}</div>
                        </div>
                    `;

                } else if(type == 'multi-text') {

                    if(inputGroups) {
                        
                        for(let gIndex = 0; gIndex < inputGroups.length; gIndex ++) {
                            
                            let answer = typeof userAnswer[gIndex] != 'undefined' ? userAnswer[gIndex] : '';

                            formGroupHtml += `
                                <div class="form-group">
                                    <label>${inputGroups[gIndex]['title']}</label>
                                    <input type="text" class="inputbox multi-text-input" data-qIndex="${questionIndex}" data-tIndex="${gIndex}" value="${answer}">
                                </div>
                            `;
                        }

                        formGroupHtml = `
                            <label>${question}</label>
                            <div class="multi-text-input-container">${formGroupHtml}</div>
                            <div class="error-message">${errorMessage}</div>
                        `;
                    } else {
                        let textInputCount = textMinCount;
                        Object.keys(userAnswer).map((tIndex) => {
                            if (parseInt(textInputCount) <= parseInt(tIndex) && userAnswer[tIndex] != '') {
                                textInputCount = parseInt(tIndex) + 1;
                            }
                        });

                        for(let gIndex = 0; gIndex < textInputCount; gIndex ++) {
                            
                            let answer = typeof userAnswer[gIndex] != 'undefined' ? userAnswer[gIndex] : '';

                            formGroupHtml += `
                                <div class="form-group form-group-input">
                                    <input type="text" class="inputbox multi-text-input" data-qIndex="${questionIndex}" data-tIndex="${gIndex}" value="${answer}">
                                </div>
                            `;
                        }

                        formGroupHtml = `
                            <div class="form-group-input-list">
                            ${formGroupHtml}
                            </div>
                            <div class="error-message">${errorMessage}</div>
                        `;

                        formGroupHtml += `
                            <div class="form-group form-group-btn-add">
                                <span class="btn btn-add-multi-text-input" data-qIndex="${questionIndex}" data-maxCount="${textMaxCount}">+</span>
                            </div>
                        `;

                        formGroupHtml = `
                            <div class="form-group-input-list-wrap">
                            ${formGroupHtml}
                            </div>
                        `

                        formGroupHtml = `
                            <label>${question}</label>
                            <div class="multi-text-input-container">${formGroupHtml}</div>
                        `;
                    }
                } else if (type == 'select') {

                    if (options) {
                        formGroupHtml = `
                            <label>${question}</label>
                            <div class="form-group">
                                <input type="text" value="${userAnswer}" class="fancy-dropdown" data-fd-options='${JSON.stringify(options)}' data-qIndex="${questionIndex}" data-id="${id}">
                                <div class="error-message">${errorMessage}</div>
                            </div>
                        `;
                    }
                    
                } else if (type == 'text-option') {
                    let textListHtml = '';
                    let optionListHtml = '';
                    let exclusiveIndex = null;
                    let formGroupInputStyle = '';

                    if (userAnswer != '' && !isJson(userAnswer)) {
                        formGroupInputStyle = 'display: none';
                    }

                    if (textCount == 'infinity') {

                        let textInputCount = textMinCount;
                        Object.keys(userAnswer).map((tIndex) => {
                            if (parseInt(textInputCount) <= parseInt(tIndex) && userAnswer[tIndex] != '') {
                                textInputCount = parseInt(tIndex) + 1;
                            }
                        });

                        for(let tIndex = 0; tIndex < textInputCount; tIndex++) {
                            let textAnswer = '';

                            if (isJson(userAnswer)) {
                                textAnswer = typeof userAnswer[tIndex] != 'undefined' ? userAnswer[tIndex] : '';
                            }

                            textListHtml += `
                                <div class="form-group form-group-input">
                                    <input type="text" class="inputbox text-option-input" data-qIndex="${questionIndex}" data-tIndex="${tIndex}" value="${textAnswer}">
                                </div>
                            `;
                        }
                    } else if (textCount) {

                        for(let tIndex = 0; tIndex < textCount; tIndex++) {
                            let textAnswer = '';

                            if (isJson(userAnswer)) {
                                textAnswer = typeof userAnswer[tIndex] != 'undefined' ? userAnswer[tIndex] : '';
                            }

                            textListHtml += `
                                <div class="form-group form-group-input">
                                    <input type="text" class="inputbox text-option-input" data-qIndex="${questionIndex}" data-tIndex="${tIndex}" value="${textAnswer}">
                                </div>
                            `;
                        }
                    }

                    textListHtml = `
                        <div class="form-group-input-list">
                        ${textListHtml}
                        </div>
                    `;

                    textListHtml += `
                        <div class="form-group form-group-btn-add">
                            <span class="btn btn-add-text-option-input" data-qIndex="${questionIndex}">+</span>
                        </div>
                    `;

                    textListHtml = `
                        <div class="form-group-input-list-wrap" style="${formGroupInputStyle}">
                        ${textListHtml}
                        </div>
                    `;
                    
                    if (options) {

                        for(let oIndex = 0; oIndex < options.length; oIndex++) {
                            let selected = '';
    
                            if(options[oIndex] == exclusive) {
                                exclusiveIndex = oIndex;
                            }

                            if (userAnswer != '' && !isJson(userAnswer)) {

                                if(userAnswer != '' && userAnswer == oIndex) {
                                    selected = 'selected';
                                }
                            }
                            
                            optionListHtml += `
                                <span class="text-option-itself multiselect-option ${selected}" data-value="${oIndex}">${options[oIndex]}</span>
                            `;
                        }

                        optionListHtml = `
                            <div class="multiselect" data-qIndex="${questionIndex}">
                            ${optionListHtml}
                            </div>
                        `;
                    }

                    formGroupHtml = `
                        <div class="text-option-container">
                            <div class="form-group">
                                <label>${question}</label>
                                ${textListHtml}${optionListHtml}
                            </div>
                            <div class="error-message">${errorMessage}</div>
                        </div>
                    `;
                    
                } else if (type == 'image-select') {

                    if (options) {
                        let optionsHtml = '';

                        for(let oIndex = 0; oIndex < options.length; oIndex ++) {
                            let selected = '';
    
                            if(parseInt(userAnswer) == oIndex) {
                                selected = 'selected';
                            }
    
                            optionsHtml += `
                                <div class="image-select-option ${selected}" style="background-image:url(${options[oIndex]}); width: ${width}px; height: ${height}px" data-value="${oIndex}"></div>
                            `
                        }
    
                        formGroupHtml = `
                            <div class="form-group">
                                <label>${question}</label>
                                <div class="image-select" data-qIndex="${questionIndex}" data-maxOptions="${maxOptions}">${optionsHtml}</div>
                                <div class="error-message">${errorMessage}</div>
                            </div>
                        `;
                    }
                    

                } else if (type == 'multi-select') {

                    if (options) {
                        let optionsHtml = '';
                        let exclusiveIndex = null;
                        
                        for(let oIndex = 0; oIndex < options.length; oIndex ++) {
                            let selected = '';
    
                            if(userAnswer != '' && userAnswer.filter((answer) => answer == oIndex).length) {
                                selected = 'selected';
                            }

                            if (options[oIndex] == exclusive) {
                                exclusiveIndex = oIndex;
                            }

                            if(optionExclusives) {

                                for(let excIndex = 0; excIndex < optionExclusives.length; excIndex ++) {
                                    let main = optionExclusives[excIndex]['main'];
                                    let others = optionExclusives[excIndex]['others'];

                                    if (main == options[oIndex]) {
                                        optionExclusives[excIndex]['main'] = oIndex;
                                    }

                                    for(let excoIndex = 0; excoIndex < others.length; excoIndex ++) {

                                        if(others[excoIndex] == options[oIndex]) {
                                            others[excoIndex] = oIndex;
                                        }
                                    }
                                }
                            }
    
                            optionsHtml += `
                                <span class="multiselect-option ${selected}" data-value="${oIndex}">${options[oIndex]}</span>
                            `
                        }
    
                        formGroupHtml = `
                            <div class="form-group">
                                <label>${question}</label>
                                <div class="multiselect" data-qIndex="${questionIndex}" data-maxOptions="${maxOptions}" data-exclusive="${exclusiveIndex}" data-optionExclusives='${JSON.stringify(optionExclusives)}'>${optionsHtml}</div>
                                <div class="error-message">${errorMessage}</div>
                            </div>
                        `;

                    } else if (optionGroups) {
                        let answerIndex = 0;
                        let exclusiveIndex = null;

                        for(let gIndex = 0; gIndex < optionGroups.length; gIndex ++) {
                            let groupTitle = optionGroups[gIndex]['title'];
                            let groupOptions = optionGroups[gIndex]['options'];
                            let optionsHtml = '';

                            for(let oIndex = 0; oIndex < groupOptions.length; oIndex ++) {
                                let selected = '';
    
                                if(userAnswer != '' && userAnswer.filter((answer) => answer == answerIndex).length) {
                                    selected = 'selected';
                                }

                                if (groupOptions[oIndex] == exclusive) {
                                    exclusiveIndex = answerIndex;
                                }
        
                                optionsHtml += `
                                    <span class="multiselect-option ${selected}" data-value="${answerIndex}">${groupOptions[oIndex]}</span>
                                `;

                                answerIndex ++;
                            }

                            formGroupHtml += `
                                <div class="options-group">
                                    <div class="form-group">
                                        <label>${groupTitle}</label>
                                        <div class="multiselect" data-qIndex="${questionIndex}" data-maxOptions="${maxOptions}" data-exclusive>${optionsHtml}</div>
                                    </div>
                                </div>
                            `;
                        }

                        formGroupHtml = formGroupHtml.replaceAll('data-exclusive', 'data-exclusive="' + exclusiveIndex + '"');

                        formGroupHtml = `
                            <label>${question}</label>
                            <div class="options-group-container">${formGroupHtml}</div>
                            <div class="error-message">${errorMessage}</div>
                        `;
                    }
                    
                }

                partsHtml += `
                    <div class="form-group-container" data-id="${id}" data-type="${type}" data-qIndex="${questionIndex}">${formGroupHtml}</div>
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

    $('#qList').html(stepsHtml);
    
    initializeFancyDropdown();

    setQuestionVisible(userData);
}

$(document).ready(function() {
    loadUserAnswers();
    renderPage();
})
