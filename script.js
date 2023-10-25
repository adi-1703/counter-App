let curcnt=document.getElementById("cur-cnt");
let para=document.getElementById("paragraph");
let cnt=0;
function mybtn1(){
    cnt++;
    curcnt.textContent=cnt;
}
function mybtn2(){
    let str= cnt + " - ";
    para.textContent+=str;
    cnt=0;
    curcnt.textContent=0;
}