const idSearch = async () => {
    const text = document.querySelector('#idText');
    const result = document.querySelector('#idResult');

    return fetch('db.json')
        .then((response) => response.json())
        .then((data) => {
            let query = parseInt(text.value);
            if(query < 1 || query == NaN || query == undefined) {
                return
            };
            let match = data[query - 1];
            if(!match) {return;}
            translate(match);
            result.querySelector('#id').innerHTML = `ID: ${query}`;
            result.querySelector('#lang').innerHTML = `Language: ${match.lang}`;
            result.querySelector('#age').innerHTML = `Age: ${match.age}`;
            result.querySelector('#gender').innerHTML = `Gender: ${match.gender}`;
            result.querySelector('#edu').innerHTML = `Education: ${match.edu}`;
            result.querySelector('#mh').innerHTML = `Medical History: ${match.mh}`;
            result.querySelector('#home').innerHTML = `Resident: ${match.home}`;
            result.querySelector('#app').innerHTML = `App: ${match.app}`;
            result.querySelector('#appPp').innerHTML = `Purpose of Use: ${match.appPp}`;
            result.querySelector('#usage').innerHTML = `Time spent a day: ${match.usage}`;
            result.querySelector('#mediaLength').innerHTML = `Content Length: ${match.mediaLength}`;
            result.querySelector('#start').innerHTML = `Start watching: ${match.start}`;
            result.querySelector('#q11').innerHTML = `Studying in class: ${match.q11}`;
            result.querySelector('#q12').innerHTML = `Studying online: ${match.q12}`;
            result.querySelector('#q13').innerHTML = `Working alone: ${match.q13}`;
            result.querySelector('#q14').innerHTML = `Working in group: ${match.q14}`;
            result.querySelector('#q15').innerHTML = `Watching entertainment media: ${match.q15}`;
            result.querySelector('#q16').innerHTML = `Scrolling through social media: ${match.q16}`;
            result.querySelector('#q21').innerHTML = `You often have trouble with getting things done: ${match.q21}`;
            result.querySelector('#q22').innerHTML = `You are easily distracted by your surroundings: ${match.q22}`;
            result.querySelector('#q23').innerHTML = `You often feel restless: ${match.q23}`;
            result.querySelector('#q24').innerHTML = `You have a hard time paying attention: ${match.q24}`;
            result.querySelector('#q25').innerHTML = `You often find yourself fidgeting: ${match.q25}`;
            result.querySelector('#q26').innerHTML = `You have a hard time remembering things: ${match.q26}`;
            result.querySelector('#q31').innerHTML = `You often find yourself unintentionally opening your social media when you are supposed to work: ${match.q31}`;
            result.querySelector('#q32').innerHTML = `Your performance in school or work starts to degrade after you start to consume Short-Video-Based media": ${match.q32}`;
            result.querySelector('#q33').innerHTML = `Your attention span has worsened after being introduced to Short-Video-Based Media: ${match.q33}`;
            result.querySelector('#q34').innerHTML  = `You often find yourself procrastinating: ${match.q34}`;
            result.querySelector('#q35').innerHTML = `You think that short-video-based media is responsible for your shorter attention span: ${match.q35}`
        })
}

// Matching function
const match = () => {
    const advancedResult = document.querySelector('#advancedResult');
    const form = document.querySelector('#searchList');
    let mhArray = [];
    if (form.querySelector('#mh1').checked) {mhArray.push(1)};
    if (form.querySelector('#mh2').checked) {mhArray.push(2)};
    if (form.querySelector('#mh3').checked) {mhArray.push(3)};
    if (form.querySelector('#mh4').checked) {mhArray.push(4)};
    if (form.querySelector('#mh5').checked) {mhArray.push('SAD and PTSD')};
    if (form.querySelector('#mh6').checked) {mhArray.push('Depression')};
    if (form.querySelector('#mh7').checked) {mhArray.push('OCD')};
    const query = {
        'lang': parseInt(form.querySelector('#lang').value),
        'age': parseInt(form.querySelector('#age').value),
        'gender': parseInt(form.querySelector('#gender').value),
        'edu': parseInt(form.querySelector('#edu').value),
        'mh': mhArray,
        'home': parseInt(form.querySelector('#home').value),
        'app': parseInt(form.querySelector('#app').value),
        'appPp': parseInt(form.querySelector('#appPp').value),
        'usage': parseInt(form.querySelector('#usage').value),
        'mediaLength': parseInt(form.querySelector('#mediaLength').value),
        'start': parseInt(form.querySelector('#start').value),
        'q11': parseInt(form.querySelector('#q11').value),
        'q12': parseInt(form.querySelector('#q12').value),
        'q13': parseInt(form.querySelector('#q13').value),
        'q14': parseInt(form.querySelector('#q14').value),
        'q15': parseInt(form.querySelector('#q15').value),
        'q16': parseInt(form.querySelector('#q16').value),
        'q21': parseInt(form.querySelector('#q21').value),
        'q22': parseInt(form.querySelector('#q22').value),
        'q23': parseInt(form.querySelector('#q23').value),
        'q24': parseInt(form.querySelector('#q24').value),
        'q25': parseInt(form.querySelector('#q25').value),
        'q26': parseInt(form.querySelector('#q26').value),
        'q31': parseInt(form.querySelector('#q31').value),
        'q32': parseInt(form.querySelector('#q32').value),
        'q33': parseInt(form.querySelector('#q33').value),
        'q34': parseInt(form.querySelector('#q34').value),
        'q35': parseInt(form.querySelector('#q35').value)
    }
    
    // set A = set B
    const setAB = (a, b) => {
        let j = 0;
        for(const el of a) {
            if(!b.includes(el)) {j++};
        }
        for(const el of b){
            if(!a.includes(el)) {j++};
        }
        if(j!=0){ 
            return false;
        }else{
            return true;
        }
    }

    // main function
    return fetch('db.json')
        .then((response) => response.json())
        .then((data) => {
            let list = 0;
            let idList = '';
            for(const el of data){
                let i = 0;
                if(query.lang == 0 || el.lang == query.lang) {i++;} 
                if(query.age == 0 || el.age == query.age) {i++; } 
                if(query.gender == 0 || el.gender == query.gender) {i++; } 
                if(query.edu == 0 || el.edu == query.edu) {i++; } 
                if(query.mh.length == 0 || setAB(el.mh, query.mh)) {i++;} 
                if(query.home == 0 || el.home == query.home) {i++; } 
                if(query.app == 0 || el.app == query.app) {i++; } 
                if(query.appPp == 0 || el.appPp == query.appPp) {i++; } 
                if(query.mediaLength == 0 || el.mediaLength == query.mediaLength) {i++; } 
                if(query.usage == 0 || el.usage == query.usage) {i++; }
                if(query.q11 == 0 || el.q11 == query.q11) {i++; } 
                if(query.q12 == 0 || el.q12 == query.q12) {i++; }
                if(query.q13 == 0 || el.q13 == query.q13) {i++; }
                if(query.q14 == 0 || el.q14 == query.q14) {i++; }
                if(query.q15 == 0 || el.q15 == query.q15) {i++; }
                if(query.q16 == 0 || el.q16 == query.q16) {i++; }
                if(query.q21 == 0 || el.q21 == query.q21) {i++; }
                if(query.q22 == 0 || el.q22 == query.q22) {i++; }
                if(query.q23 == 0 || el.q23 == query.q23) {i++; }
                if(query.q24 == 0 || el.q24 == query.q24) {i++; }
                if(query.q25 == 0 || el.q25 == query.q25) {i++; }
                if(query.q26 == 0 || el.q26 == query.q26) {i++; }
                if(query.q31 == 0 || el.q31 == query.q31) {i++; }
                if(query.q32 == 0 || el.q32 == query.q32) {i++; }
                if(query.q33 == 0 || el.q33 == query.q33) {i++; }
                if(query.q34 == 0 || el.q34 == query.q34) {i++; }
                if(query.q35 == 0 || el.q35 == query.q35) {i++; }
                console.log(i);
                if(i==27) { list++; idList = `${idList}, ${data.indexOf(el) + 1}` };
            }
            advancedResult.innerHTML = `Matched count(s): ${list} <br/> Matched IDS: [${idList.substring(1)}]`;
    })
}


// Translate function
const translate = (data) => {
    switch (data.lang) {
        case 1: data.lang = 'English'; break;
        case 2: data.lang = 'Thai'; break;
    }
    switch (data.age) {
        case 1: data.age = '1-9 years old'; break;
        case 2: data.age = '10-13 years old'; break;
        case 3: data.age = '14-19 years old'; break;
        case 4: data.age = '20-27 years old'; break;
        case 5: data.age = '28-43 years old'; break;
        case 6: data.age = '44-59 years old'; break;
        case 7: data.age = '60 or more years old'; break;
    }
    switch (data.gender) {
        case 1: data.gender = 'Male'; break;
        case 2: data.gender = 'Female'; break;
        case 3: data.gender = 'Prefer not to say'; break;
    }
    switch (data.edu) {
        case 1: data.edu = 'Primary'; break;
        case 2: data.edu = 'Secondary'; break;
        case 3: data.edu = 'High School'; break;
        case 4: data.edu = `Bachelor's Degree (both pursuing and graduated)`; break;
        case 5: data.edu = 'Higher (both pursuing and graduated)'; break;
    }
    let array = [];
    for(let el of data.mh){
        switch (el) {
            case 1: array.push('No'); break;
            case 2: array.push('Anxiety'); break;
            case 3: array.push('ADHD'); break;
            case 4: array.push('Autism'); break;
            default: array.push(el.toString()); 
        }
    data.mh = array;
    }   
    switch (data.home) {
        case 1: data.home = 'Bangkok Metropolitan Area, Thailand'; break;
        case 2: data.home = 'Outside Bangkok Metropolitan Area, Thailand'; break;
    }
    switch (data.app) {
        case 1: data.app = 'TikTok'; break;
        case 2: data.app = 'Instagram'; break;
        case 3: data.app = 'Twitter (X)'; break;
        case 4: data.app = 'Facebook'; break;
    }
    switch (data.appPp) {
        case 1: data.appPp = 'Entertainment'; break;
        case 2: data.appPp = 'Political and global situations (News)'; break;
        case 3: data.appPp = `Seeing what's going on in your social circles`; break;
        case 4: data.appPp = 'Running and promoting business'; break;
        case 5: data.appPp = 'Others'; break;
    }
    switch (data.usage) {
        case 1: data.usage = 'Less than 2 hours'; break;
        case 2: data.usage = '2-5 hours'; break;
        case 3: data.usage = '5-8 hours'; break;
        case 4: data.usage = '8 or more hours'; break;
    }
    switch (data.mediaLength) {
        case 1: data.mediaLength = 'Long (≥ 2 minutes & < 5 minutes)'; break;
        case 2: data.mediaLength = 'Short (< 2 minutes)'; break;
    }
    switch (data.start) {
        case 1: data.start = 'Less than a year'; break;
        case 2: data.start = '1-2 years ago'; break;
        case 3: data.start = '3-4 years ago'; break;
        case 4: data.start = '4 years or more'; break;
        case 5: data.start = 'I have no idea'; break;
    }
};
