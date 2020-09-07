let progressBar = $("#myProgressBar");
let currentProgressBarWidth = 0;


$("#btn-1").click(function(){
    currentProgressBarWidth+=1;
    progressBar.width(`${currentProgressBarWidth}%`);
});
$("#btn-3").click(function(){
    currentProgressBarWidth+=3;
    progressBar.width(`${currentProgressBarWidth}%`);
});
$("#btn-7").click((function(){
    currentProgressBarWidth+=7;
    progressBar.width(`${currentProgressBarWidth}%`);
}));

