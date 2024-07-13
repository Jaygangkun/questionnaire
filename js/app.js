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
    let qId = $(this).parents('.form-group-container').attr('data-id');

    if (qId == 'null') {
        qId = $(this).parents('.form-group-container').attr('data-qIndex');
    }
    
    let answer = $(this).attr('data-value');
    let maxOptions = parseInt($(this).parents('.image-select-group').attr('data-maxoptions'));

    let curAnswers = typeof userData[qId] == 'undefined' ? [] : userData[qId];
    
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
        curAnswers = curAnswers.filter((curAnswer) => curAnswer != answer);
    }
    else {

        if (maxOptions == 'infinity' || curAnswers.length < maxOptions) {
            $(this).addClass('selected');
            curAnswers.push(answer);
        }

        if (maxOptions == 1) {
            $(this).parents('.form-group-container').find('.image-select-option').removeClass('selected');
            $(this).addClass('selected');
            curAnswers = [answer];
        }
    }

    if (curAnswers.length == 0) {
        $(this).parents('.form-group-container').addClass('error');
    }
    else {
        $(this).parents('.form-group-container').removeClass('error');
    }

    // $(this).parents('.form-group-container').find('.image-select-option').removeClass('selected');
    // $(this).addClass('selected');

    // $(this).parents('.form-group-container').removeClass('error');

    submitAnswer(qId, curAnswers);
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
                    let othersExistInAnswers = others.filter((other) => other == answer);

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

        if (maxOptions == 1) {
            $(this).parents('.form-group-container').find('.multiselect-option').removeClass('selected');
            $(this).addClass('selected');
            curAnswers = [answer];
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
        $(this).parents('.form-group-container').find('.multiselect-option').removeClass('selected');

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

$(document).on('click', '.btn-add-text-option-input, .btn-add-multi-text-input', function() {
    let qIndex = $(this).attr('data-qIndex');
    let tIndex = $(this).parents('.form-group-input-list-wrap').find('.form-group-input').length;
    let maxCount = parseInt($(this).attr('data-maxCount'));
    let tabbing = $(this).attr('data-tabbing');

    $(this).parents('.form-group-input-list-wrap').find('.form-group-input-list input').attr('data-tabbing', 'true');

    $(this).parents('.form-group-input-list-wrap').find('.form-group-input-list').append(`
        <div class="form-group form-group-input">
            <input type="text" class="inputbox text-option-input" data-qindex="${qIndex}" data-tindex="${tIndex}" value="" data-tabbing="${tabbing}">
        </div>
    `);

    if(tIndex >= (maxCount -1)) {
        $(this).parent().hide();
    }
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
    let qId = $(this).parents('.form-group-container').attr('data-id');

    if($(this).val() == '') {
        $(this).parents('.form-group-container').addClass('error');
    }
    else {
        $(this).parents('.form-group-container').removeClass('error');
    }

    if(qId == 'null') {
        qId = $(this).attr('data-qIndex');
    }
    
    submitAnswer(qId, $(this).val());
})

$(document).on('keydown', 'input', function(e){ 

    if($(this).attr('data-tabbing') == 'false') {
        if (e.keyCode == 9)  e.preventDefault() 
    }
});

// multi-text handlers
$(document).on('change', '.inputbox.multi-text-input', function() {
    let qId = $(this).parents('.form-group-container').attr('data-id');

    if(qId == 'null') {
        qId = $(this).attr('data-qIndex');
    }
    
    let tIndex = $(this).attr('data-tIndex');
    let curAnswers = typeof userData[qId] == 'undefined' ? {} : userData[qId];

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

    submitAnswer(qId, curAnswers);
})

// custom handlers

$(document).on('change', '[data-id="q_percent_ethnicity"] input', function(){
    let inputs = $('[data-id="q_percent_ethnicity"] input');
    let sum = 0;

    for(let index = 0; index < inputs.length; index ++) {

        if($(inputs[index]).val() != '') {
            sum += parseFloat($(inputs[index]).val());
        }
    }

    if(Math.round(sum*100)/100 == 100.0) {
        $(this).parents('.form-group-container').find('.error-message').text('Please select a response.');
        $(this).parents('.form-group-container').removeClass('error');
    }
    else {
        $(this).parents('.form-group-container').find('.error-message').text('Sum must equal 100.');
        $(this).parents('.form-group-container').addClass('error');
    }
})

// alert handlers
function setAlertMessage(message) {
    $('#alert .alert-message').text(message);
}

function showAlert() {
    $('#alert').removeClass('hide');
}

function hideAlert() {
    $('#alert').addClass('hide');
}

$(document).on('click', '#alert_btn_ok', function() {
    // hideAlert();
    location.href = "https://www.lovestory.ai";
})

// loader handlers
function showLoader() {
    $('#loader').removeClass('hide');
}

function hideLoader() {
    $('#loader').addClass('hide');
}

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

    $(document).trigger('answerUpdate', { qIndex, userData })
}

$(document).on('answerUpdate', function(event, data) {
    
    if (data['qIndex'] == 'q_sex' || data['qIndex'] == 'q_sexual_orientation') {
        setQuestionVisible(data['userData']);
    }
    
})

$(document).on('click', '#btn_submit', function() {
    if(isValid()) {
        showLoader();

        $.ajax({
            url: 'send-email.php',
            type: 'post',
            data: {
                qa: JSON.stringify(getFullQAList()),
                user_email: $('#user_email').val()
            },
            dataType: 'json',
            success: function(resp) {
                if (resp.success) {
                    setAlertMessage('Thank you! Your submission has been sent.');
                } else {
                    setAlertMessage(resp.message);
                }

                hideLoader();
                showAlert();
            }
        });
    }
    else {
        let errorContainers = $('.form-group-container.error');
        console.log('errorContainers:', errorContainers);
        if(errorContainers.length > 0) {
            $('html, body').animate({
                scrollTop: $(errorContainers[0]).offset().top
            });
        }
    }
})

function setQuestionVisible(data) {

    if (typeof data['q_sex'] != 'undefined') {
        let q_sex = data['q_sex'][0];

        if (q_sex == 1) {
            // Female
            $('.form-group-container[data-id="q_hormonal_birth"]').removeClass('hide');
    
            $('.form-group-container[data-id="q_have_abortion"]').removeClass('hide');
    
            $('.form-group-container[data-id="q_have_plan_b"]').removeClass('hide');
    
            // $('.form-group-container[data-id="q_conceive_child"]').removeClass('hide');
    
            $('.form-group-container[data-id="q_girl_type"]').removeClass('hide');
        }
        else {
            $('.form-group-container[data-id="q_hormonal_birth"]').addClass('hide');
    
            $('.form-group-container[data-id="q_have_abortion"]').addClass('hide');
    
            $('.form-group-container[data-id="q_have_plan_b"]').addClass('hide');
    
            // $('.form-group-container[data-id="q_conceive_child"]').addClass('hide');
    
            $('.form-group-container[data-id="q_girl_type"]').addClass('hide');
        }
    
        if (q_sex == 0) {
            // Male
            $('.form-group-container[data-id="q_guy_type"]').removeClass('hide');
        }
        else {
            $('.form-group-container[data-id="q_guy_type"]').addClass('hide');
        }
    
        $('.form-group-container[data-id="q_body_type"').find('.image-select').addClass('hide');
        $('.form-group-container[data-id="q_body_type"').find('.image-select[data-type="' + q_sex + '"]').removeClass('hide');


        if (q_sex == 2) {
            // If Sex = "Intersex" display images M1-20, F1-20, I1-20.

            $('.form-group-container[data-id="q_body_type_attracted"').find('.image-select').removeClass('hide');
        }

        if (typeof data['q_sexual_orientation'] != 'undefined') {
            let q_sexual_orientation = data['q_sexual_orientation'][0];

            if (q_sex == 0 && q_sexual_orientation == 0) {
                // If Sex = "Male" and Orientation = "Straight" display images F1-20.

                $('.form-group-container[data-id="q_body_type_attracted"').find('.image-select').addClass('hide');
                $('.form-group-container[data-id="q_body_type_attracted"').find('.image-select[data-type="1"]').removeClass('hide');
            }

            if (q_sex == 0 && q_sexual_orientation == 1) {
                // If Sex = "Male" and Orientation = "Homosexual" display images M1-20.

                $('.form-group-container[data-id="q_body_type_attracted"').find('.image-select').addClass('hide');
                $('.form-group-container[data-id="q_body_type_attracted"').find('.image-select[data-type="0"]').removeClass('hide');
            }

            if (q_sex == 0 && (q_sexual_orientation == 2 || q_sexual_orientation == 3 || q_sexual_orientation == 4 || q_sexual_orientation == 5 || q_sexual_orientation == 6)) {
                // If Sex = "Male" and Orientation = "Bisexual", "Pansexual", "Asexual", "Queer", or "Other" display images M1-20, F1-20, I1-20.

                $('.form-group-container[data-id="q_body_type_attracted"').find('.image-select').removeClass('hide');
            }

            if (q_sex == 1 && q_sexual_orientation == 0) {
                // If Sex = "Female" and Orientation = "Straight" display images M1-20.

                $('.form-group-container[data-id="q_body_type_attracted"').find('.image-select').addClass('hide');
                $('.form-group-container[data-id="q_body_type_attracted"').find('.image-select[data-type="0"]').removeClass('hide');
            }

            if (q_sex == 1 && q_sexual_orientation == 1) {
                // If Sex = "Female" and Orientation = "Homosexual" display images F1-20.

                $('.form-group-container[data-id="q_body_type_attracted"').find('.image-select').addClass('hide');
                $('.form-group-container[data-id="q_body_type_attracted"').find('.image-select[data-type="1"]').removeClass('hide');
            }

            if (q_sex == 1 && (q_sexual_orientation == 2 || q_sexual_orientation == 3 || q_sexual_orientation == 4 || q_sexual_orientation == 5 || q_sexual_orientation == 6)) {
                // If Sex = "Female" and Orientation = "Bisexual", "Pansexual", "Asexual", "Queer", or "Other" display images M1-20, F1-20, I1-20.

                $('.form-group-container[data-id="q_body_type_attracted"').find('.image-select').removeClass('hide');
            }
        }
    }

    if (typeof data['q_sexual_orientation'] != 'undefined') {
        let q_sexual_orientation = data['q_sexual_orientation'][0];

        if (q_sexual_orientation != 0) {
            $('.form-group-container[data-id="q_believe_man_responsibilities"]').addClass('hide');
    
            $('.form-group-container[data-id="q_believe_woman_responsibilities"]').addClass('hide');
        }
        else {
            $('.form-group-container[data-id="q_believe_man_responsibilities"]').removeClass('hide');
    
            $('.form-group-container[data-id="q_believe_woman_responsibilities"]').removeClass('hide');
        }
    }
}

function isValidDate(dateString) {
    // var regEx = /^\d{4}-\d{2}-\d{2}$/;
    var regEx = /^([0][1-9]|[1][0-2])\/([1-2][0-9]|[0][1-9]|[3][0-1])\/[1-9][0-9][0-9]{2}$/;
    return dateString.match(regEx) != null;
}

function isValid() {
    let questions = $('.form-group-container:not(.hide)');
    let isValid = true;

    for(let index = 0; index < questions.length; index ++) {
        let qId = $(questions[index]).attr('data-id');

        if ($(questions[index]).attr('data-required') == 'false') {
            continue;
        }

        if(qId == 'null') {
            qId = $(questions[index]).attr('data-qIndex');
        }

        if (qId != 'null') {

            if (typeof userData[qId] == 'undefined') {

                if (qId == 'q_birthdate') {
                    $(questions[index]).find('.error-message').text('Please select a response.');
                }

                $(questions[index]).addClass('error');
                isValid = false;
            }
            else {

                if (userData[qId] == '' || Object.keys(userData[qId]).length == 0) {

                    if (qId == 'q_birthdate') {
                        $(questions[index]).find('.error-message').text('Please select a response.');
                    }

                    $(questions[index]).addClass('error');
                    isValid = false;
                }
                else {

                    if (qId == 'q_birthdate' && !isValidDate(userData[qId])) {
                        $(questions[index]).find('.error-message').text('Please provide a valid date of birth.');
                        $(questions[index]).addClass('error');
                        isValid = false;
                    } else {
                        $(questions[index]).removeClass('error');
                    }
                }

                if (qId == 'q_body_type_attracted' && $(questions[index]).find('.image-select-option.selected').parent().hasClass('hide')) {
                    $(questions[index]).addClass('error');
                    isValid = false;
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
                let answerIncludeSubTitle = parts[pIndex]['answerIncludeSubTitle'] ? parts[pIndex]['answerIncludeSubTitle'] : null;

                let userAnswer = '';
                let formGroupContainer = null;

                if (id == 'q_guy_type') {
                    let dataTest = 1;
                }

                if (id) {
                    userAnswer = typeof userData[id] != 'undefined' ? userData[id] : '';

                    formGroupContainer = $('.form-group-container[data-id="' + id + '"]');
                }
                else {
                    userAnswer = typeof userData[questionIndex] != 'undefined' ? userData[questionIndex] : '';

                    formGroupContainer = $('.form-group-container[data-qindex="' + questionIndex + '"]');
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

                    if (optionGroups) {

                        for(let gIndex = 0; gIndex < optionGroups.length; gIndex ++) {
                            let groupOptions = optionGroups[gIndex]['options'];

                            for(let oIndex = 0; oIndex < groupOptions.length; oIndex ++) {
                                let value = '';
    
                                if (optionGroups[gIndex]['valuePrefix']) {
                                    value = optionGroups[gIndex]['valuePrefix'] + (oIndex + 1);
                                }

                                if (value) {
                                    if (userAnswer.includes(value)) {
                                        answers.push({
                                            'subText': '',
                                            'text': value
                                        });
                                    }
                                }
                            }

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

                                    if (answerIncludeSubTitle) {
                                        answers.push({
                                            'subText': groupTitle,
                                            'text': groupOptions[oIndex]
                                        })
                                    }
                                    else {
                                        answers.push({
                                            'subText': '',
                                            'text': groupOptions[oIndex]
                                        })
                                    }
                                }

                                answerIndex ++;
                            }
                        }
                    }
                    
                }


                let answerVisible = true;
                if ($(formGroupContainer).hasClass('hide')) {
                    answerVisible = false;
                }

                qaList.push({
                    'webQuestion': questionIndex + '. ' + parts[pIndex]['question'],
                    'question': parts[pIndex]['question'],
                    'questionEmail': parts[pIndex]['questionEmail'],
                    'type': type,
                    'answers': answers,
                    'visible': answerVisible
                });

                questionIndex ++;
            }
        }
    }

    console.log('qaList:', qaList);
    return qaList;
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
                let inputType = parts[pIndex]['inputType'] ? parts[pIndex]['inputType'] : 'text';
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
                let errorMessage = parts[pIndex]['errorMessage'] ? parts[pIndex]['errorMessage'] : 'Please select a response.';
                let required = typeof parts[pIndex]['required'] != 'undefined' ? parts[pIndex]['required'] : true;

                let placeholder = typeof parts[pIndex]['placeholder'] != 'undefined' ? parts[pIndex]['placeholder'] : '';

                let tabbing = typeof parts[pIndex]['tabbing'] != 'undefined' ? parts[pIndex]['tabbing'] : true;

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
                            <input type="text" class="inputbox single-input" data-qIndex="${questionIndex}" data-tabbing="${tabbing}" value="${userAnswer}" min="${min}" max="${max}" placeholder="${placeholder}">
                            <div class="error-message">${errorMessage}</div>
                        </div>
                    `;

                } else if(type == 'multi-text') {

                    if(inputGroups) {
                        
                        for(let gIndex = 0; gIndex < inputGroups.length; gIndex ++) {
                            
                            let answer = typeof userAnswer[gIndex] != 'undefined' ? userAnswer[gIndex] : '';
                            let optionTabbing = typeof inputGroups[gIndex]['tabbing'] != 'undefined' ? inputGroups[gIndex]['tabbing'] : true;

                            formGroupHtml += `
                                <div class="form-group">
                                    <label>${inputGroups[gIndex]['title']}</label>
                                    <input type="${inputType}" class="inputbox multi-text-input" data-qIndex="${questionIndex}" data-tabbing="${optionTabbing}" data-tIndex="${gIndex}" value="${answer}">
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
                                <span class="button is-navbar2-button w-button button-inline btn-add-multi-text-input" data-qIndex="${questionIndex}" data-maxCount="${textMaxCount}">+</span>
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
                            let optionTabbing = true;

                            if(tIndex == (textInputCount - 1) && !tabbing) {
                                optionTabbing = false;
                            }

                            let textAnswer = '';

                            if (isJson(userAnswer)) {
                                textAnswer = typeof userAnswer[tIndex] != 'undefined' ? userAnswer[tIndex] : '';
                            }

                            textListHtml += `
                                <div class="form-group form-group-input">
                                    <input type="text" class="inputbox text-option-input" data-qIndex="${questionIndex}" data-tIndex="${tIndex}" value="${textAnswer}" data-tabbing="${optionTabbing}">
                                </div>
                            `;
                        }
                    } else if (textCount) {

                        for(let tIndex = 0; tIndex < textCount; tIndex++) {
                            let optionTabbing = true;

                            if(tIndex == (textCount - 1) && !tabbing) {
                                optionTabbing = false;
                            }

                            let textAnswer = '';

                            if (isJson(userAnswer)) {
                                textAnswer = typeof userAnswer[tIndex] != 'undefined' ? userAnswer[tIndex] : '';
                            }

                            textListHtml += `
                                <div class="form-group form-group-input">
                                    <input type="text" class="inputbox text-option-input" data-qIndex="${questionIndex}" data-tIndex="${tIndex}" value="${textAnswer}" data-tabbing="${optionTabbing}">
                                </div>
                            `;
                        }
                    }

                    let btnDisplayStyle = '';
                    
                    if (textCount >= textMaxCount) {
                        btnDisplayStyle = 'display: none';
                    }

                    textListHtml = `
                        <div class="form-group-input-list">
                        ${textListHtml}
                        </div>
                    `;

                    textListHtml += `
                        <div class="form-group form-group-btn-add" style="${btnDisplayStyle}">
                            <span class="button is-navbar2-button w-button button-inline btn-add-text-option-input" data-qIndex="${questionIndex}" data-maxCount="${textMaxCount}" data-tabbing="${tabbing}">+</span>
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
                    
                    if (optionGroups) {
                        let groupOptionsHtml = '';
                        let gAnswerIndex = 0;

                        for(let gIndex = 0; gIndex < optionGroups.length; gIndex ++) {
                            let optionsHtml = '';
                            let groupOptions = optionGroups[gIndex]['options'];
                            let visibleClass = '';

                            for(let oIndex = 0; oIndex < groupOptions.length; oIndex ++) {
                                let value = null;
                                let selected = '';
    
                                // if(parseInt(userAnswer) == gAnswerIndex) {
                                //     selected = 'selected';
                                // }

                                if (optionGroups[gIndex]['valuePrefix']) {
                                    value = optionGroups[gIndex]['valuePrefix'] + (oIndex + 1);
                                }

                                if (value) {
                                    if (userAnswer.includes(value)) {
                                        selected = 'selected';
                                    }
                                }
        
                                optionsHtml += `
                                    <div class="image-select-option ${selected}" data-value="${value}" style="background-image:url(${groupOptions[oIndex]}); width: ${width}px; height: ${height}px" data-value="${gAnswerIndex}"></div>
                                `;

                                gAnswerIndex ++;
                            }

                            if (id == 'q_body_type') {

                                if (typeof userData['q_sex'] != 'undefined' && typeof optionGroups[gIndex]['type'] != 'undefined') {

                                    if (userData['q_sex'][0] == optionGroups[gIndex]['type']) {
                                        visibleClass = 'hide';
                                    }
                                }
                            }

                            if (id == 'q_body_type_attracted') {
                                if (typeof userData['q_sex'] != 'undefined' && typeof optionGroups[gIndex]['type'] != 'undefined') {

                                    if (typeof userData['q_sexual_orientation'] != 'undefined') {

                                        if (userData['q_sex'] == 0 && userData['q_sexual_orientation'] == 0) {
                                            // If Sex = "Male" and Orientation = "Straight" display images F1-20.
                            
                                            if (optionGroups[gIndex]['type'] == '1') {
                                                visibleClass = '';
                                            }
                                            else {
                                                visibleClass = 'hide';
                                            }
                                        }
                            
                                        if (userData['q_sex'] == 0 && userData['q_sexual_orientation'] == 1) {
                                            // If Sex = "Male" and Orientation = "Homosexual" display images M1-20.
                            
                                            if (optionGroups[gIndex]['type'] == '0') {
                                                visibleClass = '';
                                            }
                                            else {
                                                visibleClass = 'hide';
                                            }
                                        }
                            
                                        if (userData['q_sex'] == 0 && (userData['q_sexual_orientation'] == 2 || userData['q_sexual_orientation'] == 3 || userData['q_sexual_orientation'] == 4 || userData['q_sexual_orientation'] == 5 || userData['q_sexual_orientation'] == 6)) {
                                            // If Sex = "Male" and Orientation = "Bisexual", "Pansexual", "Asexual", "Queer", or "Other" display images M1-20, F1-20, I1-20.
                            
                                            visibleClass = '';
                                        }
                            
                                        if (userData['q_sex'] == 1 && userData['q_sexual_orientation'] == 0) {
                                            // If Sex = "Female" and Orientation = "Straight" display images M1-20.
                            
                                            if (optionGroups[gIndex]['type'] == '0') {
                                                visibleClass = '';
                                            }
                                            else {
                                                visibleClass = 'hide';
                                            }
                                        }
                            
                                        if (userData['q_sex'] == 1 && userData['q_sexual_orientation'] == 1) {
                                            // If Sex = "Female" and Orientation = "Homosexual" display images F1-20.
                            
                                            if (optionGroups[gIndex]['type'] == '1') {
                                                visibleClass = '';
                                            }
                                            else {
                                                visibleClass = 'hide';
                                            }
                                        }
                            
                                        if (userData['q_sex'] == 0 && (userData['q_sexual_orientation'] == 2 || userData['q_sexual_orientation'] == 3 || userData['q_sexual_orientation'] == 4 || userData['q_sexual_orientation'] == 5 || userData['q_sexual_orientation'] == 6)) {
                                            // If Sex = "Female" and Orientation = "Bisexual", "Pansexual", "Asexual", "Queer", or "Other" display images M1-20, F1-20, I1-20.
                            
                                            visibleClass = '';
                                        }
                                    }

                                    if (userData['q_sex'] == 2) {
                                        visibleClass = '';
                                    }
                                }
                            }

                            groupOptionsHtml += `<div class="image-select ${visibleClass}" data-type="${optionGroups[gIndex]['type']}">
                                    ${optionsHtml}
                                </div>
                            `
                        }

                        formGroupHtml = `
                            <div class="form-group">
                                <label>${question}</label>
                                <div class="image-select-group" data-qIndex="${questionIndex}" data-maxOptions="${maxOptions}">${groupOptionsHtml}</div>
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
                    <div class="form-group-container" data-id="${id}" data-type="${type}" data-qIndex="${questionIndex}" data-required="${required}">${formGroupHtml}</div>
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
