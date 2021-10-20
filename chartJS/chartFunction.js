// Chart의 font.옵션 설정
Chart.defaults.font.family = 'KOTRA_BOLD-Bold';

// 차트를 생성하는 함수
function makeChart(id,fig){
    const ctx = document.getElementById(id).getContext('2d');
    const cfg = fig;
    new Chart(ctx,cfg);
}




// 데이터셋 A,B,C
let typeA = {
    label: '타입A', //차트 제목
    fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
    data: [
        //21, 19, 25, 20, 23, 26, 25 //x축 label에 대응되는 데이터 값
        Math.floor(Math.random()*50),
        Math.floor(Math.random()*50),
        Math.floor(Math.random()*50),
        Math.floor(Math.random()*50),
        Math.floor(Math.random()*50),
        Math.floor(Math.random()*50),
        Math.floor(Math.random()*50)
    ],
    backgroundColor: ['rgba(255, 99, 132, 0.2)'//색상
    ],
    borderColor: ['rgba(255, 99, 132, 1)'//경계선 색상
    ],
    borderWidth: 2 //경계선 굵기
};

let typeB = {
    label: '타입B',
    fill: false,
    data: [
        // 8, 34, 12, 24, 40, 20, 15
        Math.floor(Math.random()*50),
        Math.floor(Math.random()*50),
        Math.floor(Math.random()*50),
        Math.floor(Math.random()*50),
        Math.floor(Math.random()*50),
        Math.floor(Math.random()*50),
        Math.floor(Math.random()*50)
    ],
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 2
};

let typeC = {
    label: '타입C',
    fill: true,
    data: [
        // 10, 17, 43, 4, 28, 30, 14
        Math.floor(Math.random()*50),
        Math.floor(Math.random()*50),
        Math.floor(Math.random()*50),
        Math.floor(Math.random()*50),
        Math.floor(Math.random()*50),
        Math.floor(Math.random()*50),
        Math.floor(Math.random()*50)
    ],
    backgroundColor: 'rgba(183, 225, 112, 0.2)',
    borderColor: 'rgba(183, 225, 112, 1)',
    borderWidth: 2,
    tension : 0.5
};

// 차트종류 바꾸기
let chartType = 'line';


// context와 config의 기본 형태
// datasets가 미리 생성되어야 한다.
let context = document.getElementById('myChart').getContext('2d');
let config = {
        type: chartType, // 차트의 형태
        data: { // 차트에 들어갈 데이터
            labels: [
                //x 축
                '1', '2', '3', '4', '5', '6', '7'
            ],
            datasets: [typeA, typeB]
        },
        options: {
            animation: {
                duration : 1000
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ],
                x: {
                    title: {
                        color: 'black',
                        display: true,
                        text : '차트 제목입니다.'
                    }
                }
            }
        }
};



let context2 = document.getElementById('myChart2').getContext('2d');
let config2 = {
    type: chartType, // 차트의 형태
    data: { // 차트에 들어갈 데이터
        labels: [
            //x 축
            '1', '2', '3', '4', '5', '6', '7'
        ],
        datasets: [typeA, typeB, typeC]
    },
    options: {
        animation: {
            duration : 1000
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ],
            x: {
                title: {
                    color: 'black',
                    display: true,
                    text : '영역 색칠한 차트입니다.'
                }
            }
        }
    }
};


// 차트 생성하기
var myChart = makeChart('myChart',config);
var myChart2 = makeChart('myChart2',config2);

//해당 버튼의 value값을 받아와 차트종류 설정을 바꾸고 업데이트
// $('.typeButton').click(function(){
//     config.type = $(this).val();
//     console.log(config.type); //value값은 잘 가져와진다...😣
//     myChart.update(); //함수로 차트를 생성했더니 더이상 쓸수 없어졌다...
// });
