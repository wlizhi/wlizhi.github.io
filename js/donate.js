window.onload = initDonate();

function initDonate() {
    let tBei = document.createElement("div");
    let tOpo = document.createElement("div");
    tBei.id = "t-bei";
    tBei.style.display = "none";
    tBei.onclick = removeDonate;
    tOpo.id = "t-opo";
    tOpo.style.display = "none";
    let tOpoChild = '<a href="javascript:void(0)" id="tca"><i class="fa fa-times"></i></a>';
    tOpoChild += '<div id="t-opo-title"><i class="fa fa-credit-card"></i>&nbsp;&nbsp;请我喝杯咖啡吧~</div>';
    tOpoChild += '<div id="t-opo-content">';
    tOpoChild += '<img src="https://eddie-public-img.oss-cn-hangzhou.aliyuncs.com/blog/ali-pay-code.png">';
    tOpoChild += '<img src="https://eddie-public-img.oss-cn-hangzhou.aliyuncs.com/blog/wechat-pay-code.png">';
    tOpoChild += '<p>支付宝</p>';
    tOpoChild += '<p>微信</p>';
    tOpoChild += '</div>';
    tOpo.innerHTML = tOpoChild;
    let body = document.getElementsByTagName("body")[0];
    body.appendChild(tBei);
    body.appendChild(tOpo);
    document.getElementById("donate").onclick = donate;
    document.getElementById("tca").onclick = removeDonate;
}

function removeDonate() {
    document.getElementById('t-bei').style.display = 'none';
    document.getElementById('t-opo').style.display = 'none';
}

function donate() {
    document.getElementById('t-bei').style.display = 'block';
    document.getElementById('t-opo').style.display = 'block';
}