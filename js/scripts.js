const callHistoryWrapper    = document.getElementById('call-history-wrapper');
const heartCount            = document.getElementById('heart-count');
const copyCount             = document.getElementById('copy-count');
const callBtns              = document.querySelectorAll('.call-btn');
const historyClearBtn       = document.getElementById('history-clear-btn');
const heartBtns             = document.querySelectorAll('.heart-btn');
const copyBtns              = document.querySelectorAll('.copy-btn');

//Todo-------Manage Incoming Calls & Track Diamond Count-------
function callFeature() {
    let coinCount = document.getElementById('coin-count');
    for(const callBtn of callBtns) {
        callBtn.addEventListener('click', function() {
            const helplineService   = callBtn.parentNode.parentNode.querySelector('.helpline-service').innerText;
            const helplineNumber    = callBtn.parentNode.parentNode.querySelector('.helpline-number').innerText;
            
            if(coinCount.innerText >= 20) {
                coinCount.innerText -= 20;
                alert(`Calling ${helplineService} ${helplineNumber}...`);
                callHistoryWrapper.innerHTML += `
                    <div class="single-call-history flex gap-4 justify-between items-center bg-[#fafafa] rounded-lg p-4 mb-2">
                        <div>
                            <h4 class="inter-semibold text-lg text-[#111111]">${helplineService}</h4>
                            <p class="hind-madurai-regular text-lg text-[#5c5c5c]">${helplineNumber}</p>
                        </div>
                        <p class="hind-madurai-regular text-lg text-[#111111]" id="time">${new Date().toLocaleTimeString()}</p>
                    </div>
                `;
            } else {
                alert('❌ You don\'t have enough coins to make call. At least 20 coins need to call.');
            }
        })
    }
}

//Todo------Track Bookmark Count------
function getHeartCount() {
    for(const heartBtn of heartBtns) {
        heartBtn.addEventListener('click', function() {
            heartCount.innerText++;
        });
    }
}

//Todo------Track Copy Button Clicks & Copy Helpline Number to Clipboard------
function getCopiedCount() {
    for(const copyBtn of copyBtns) {
        copyBtn.addEventListener('click', function() {
            alert('Hotline number copied to clipboard.');
            //Todo------Increment Copy Button Counter by 1------
            copyCount.innerText++;

            //Todo------Copy Helpline Number to Clipboard------
            const helplineNumber    = copyBtn.parentNode.parentNode.querySelector('.helpline-number').innerText;
            copyHotlineToClipboard(helplineNumber)
        })
    }
}

//Todo------Manage Clipboard Copy------
function copyHotlineToClipboard(text) {
    if(navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
    }
}

//Todo------Reset Call History Content------
historyClearBtn.addEventListener('click', function() {
    callHistoryWrapper.innerHTML = '';
});

//Todo------Execute Function------
callFeature();
getHeartCount();
getCopiedCount();