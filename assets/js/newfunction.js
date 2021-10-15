//클릭을 몇번하는지 셀 수 있는 변수
let clickCount = 0;

//문장을 html에 출력해주는것
$('#documentWrite').click(function(){
    clickCount++;
    if(clickCount%2 == 0){
        //두번째 누르게 되면 
        $('.showResult').html('');
    }else{
        $('.showResult').html('<p>&nbsp;&nbsp;이렇게 화면에서 출력문을 볼 수 있습니다.</p>');
    }
})

$('#consoleLog').click(function(){
    console.log('뿅! 이렇게 콘솔창에서 내용을 확인할 수 있어요😏');
})

$('#promptShow').click(function(){
    prompt('이곳은 프롬프트 창입니다','내용을 입력할 수 있어요!');
})

$('.hAnimation').click(function(){
    clickCount++;
    console.log(`clickCount : ${clickCount}`);
    if(clickCount % 2 == 0){
        $('#hAniFrame').html('');
    }else{
        $('#hAniFrame').html('<iframe src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=javascript&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%2540font-face%2520%257B%250A%2520%2520%2520%2520src%253A%2520url%28%2522https%253A%252F%252Fwww.axis-praxis.org%252Ffonts%252Fwebfonts%252FMetaVariableDemo-Set.woff2%2522%29%250A%2520%2520%2520%2520%2520%2520format%28%2522woff2%2522%29%253B%250A%2520%2520%2520%2520font-family%253A%2520%2522Meta%2522%253B%250A%2520%2520%2520%2520font-style%253A%2520normal%253B%250A%2520%2520%2520%2520font-weight%253A%2520normal%253B%250A%2520%2520%257D%250A%2520%2520%250A%2520%2520%2520body%2520%257B%250A%2520%2520%2520%2520box-sizing%253A%2520border-box%253B%250A%2520%2520%2520%2520margin%253A%25200%253B%250A%2520%2520%2520%2520padding%253A%25200%253B%250A%2520%2520%2520%2520display%253A%2520flex%253B%250A%2520%2520%2520%2520justify-content%253A%2520space-evenly%253B%250A%2520%2520%2520%2520align-items%253A%2520center%253B%250A%2520%2520%257D%250A%2520%2520%250A%2520%2520h1%2520%257B%250A%2520%2520%2520%2520transition%253A%2520all%25200.5s%253B%250A%2520%2520%2520%2520-webkit-text-stroke%253A%25204px%2520%2523d6f4f4%253B%250A%2520%2520%2520%2520font-variation-settings%253A%2520%2522wght%2522%2520900%252C%2520%2522ital%2522%25201%253B%250A%2520%2520%2520%2520font-size%253A%25208rem%253B%250A%2520%2520%2520%2520text-align%253A%2520center%253B%250A%2520%2520%2520%2520color%253A%2520transparent%253B%250A%2520%2520%2520%2520font-family%253A%2520%2522Meta%2522%252C%2520sans-serif%253B%250A%2520%2520%2520%2520text-shadow%253A%252010px%252010px%25200px%2520%252307bccc%252C%250A%2520%2520%2520%2520%2520%252015px%252015px%25200px%2520%2523e601c0%252C%250A%2520%2520%2520%2520%2520%252020px%252020px%25200px%2520%2523e9019a%252C%250A%2520%2520%2520%2520%2520%252025px%252025px%25200px%2520%2523f40468%252C%250A%2520%2520%2520%2520%2520%252045px%252045px%252010px%2520%2523482896%253B%250A%2520%2520%2520%2520cursor%253A%2520pointer%253B%250A%2520%2520%257D%250A%2520%2520%250A%2520%2520h1%253Ahover%2520%257B%250A%2520%2520%2520%2520font-variation-settings%253A%2520%2522wght%2522%2520100%252C%2520%2522ital%2522%25200%253B%250A%2520%2520%2520%2520text-shadow%253A%25205px%25205px%25200px%2520%252309aebd%253B%250A%2520%2520%257D" style="width: 780px; height: 830px; border:0; transform: scale(1); overflow:hidden;" sandbox="allow-scripts allow-same-origin"> </iframe>');
    }
})

$('.hAnimationTwo').click(function(){
    clickCount++;
    console.log(`clickCount : ${clickCount}`);
    if(clickCount % 2 == 0){
        $('#hAniFrameRainbow').html('');
    }else{
        $('#hAniFrameRainbow').html('<iframe src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=javascript&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=h4%253Ahover%252C%2520h4%253Afocus%2520%257B%2520%250A%2520%2520%2520%2520animation-duration%253A%25203s%253B%2520%250A%2520%2520%2520%2520animation-name%253A%2520rainbowLink%253B%2520%250A%2520%2520%2520%2520animation-iteration-count%253A%2520infinite%253B%2520%250A%257D%2520%250A%250A%2540keyframes%2520rainbowLink%2520%257B%2520%2520%2520%2520%2520%250A%2520%2520%2520%25200%2525%2520%257B%2520color%253A%2520%2523ff2a2a%253B%2520%257D%250A%2520%2520%2520%252015%2525%2520%257B%2520color%253A%2520%2523ff7a2a%253B%2520%257D%250A%2520%2520%2520%252030%2525%2520%257B%2520color%253A%2520%2523ffc52a%253B%2520%257D%250A%2520%2520%2520%252045%2525%2520%257B%2520color%253A%2520%25237ae91f%253B%2520%257D%250A%2520%2520%2520%252060%2525%2520%257B%2520color%253A%2520%25232a89ff%253B%2520%257D%250A%2520%2520%2520%252075%2525%2520%257B%2520color%253A%2520%2523202082%253B%2520%257D%250A%2520%2520%2520%252090%2525%2520%257B%2520color%253A%2520%25237440ee%253B%2520%257D%2520%250A%2520%2520%2520100%2525%2520%257B%2520color%253A%2520%2523ff66c4%253B%2520%257D%250A%257D" style="width: 384px; height: 394px; border:0; transform: scale(1); overflow:hidden;" sandbox="allow-scripts allow-same-origin"></iframe>');
    }
})

$('.hAnimationThree').click(function(){
    clickCount++;
    console.log(`clickCount : ${clickCount}`);
    if(clickCount % 2 == 0){
        $('#hAniFrameScript').html('');
    }else{
        $('#hAniFrameScript').html('<iframe src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=javascript&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%2524%28%27.hAnimation%27%29.click%28function%28%29%257B%250A%2520%2520%2520%2520clickCount%252B%252B%253B%250A%2520%2520%2520%2520console.log%28%2560clickCount%2520%253A%2520%2524%257BclickCount%257D%2560%29%253B%250A%2520%2520%2520%2520if%28clickCount%2520%2525%25202%2520%253D%253D%25200%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27%2523hAniFrame%27%29.html%28%27%27%29%253B%250A%2520%2520%2520%2520%257Delse%257B%250A%2520%2520%2520%2520%2520%2520%2509%2524%28%27%2523hAinFrame%27%29.html%28%27%25EC%2595%2584%25EC%259D%25B4%25ED%2594%2584%25EB%25A0%2588%25EC%259E%2584%2520%25EA%25B2%25BD%25EB%25A1%259C%27%29%253B%250A%2520%2520%2520%2520%257D%2520%2520%2520%2520%2520%2520%2520%2520%250A%257D%29" style="width: 426px; height: 254px; border:0; transform: scale(1); overflow:hidden;" sandbox="allow-scripts allow-same-origin"></iframe>');
    }
})