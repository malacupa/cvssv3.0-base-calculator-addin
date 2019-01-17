// The initialize function must be run each time a new page is loaded
Office.initialize = (reason) => {
  //OfficeExtension.config.extendedErrorLogging = true;
};

async function insertScore(score, vector) {
    return Word.run(async context => {
            const range = context.document.getSelection();
            
            range.insertText(score, 'Replace');

            // Save vector that generated the value right after it as hidden HTML
            var html = `<span style="display:none">${vector}/span>`;
            range.insertHtml(html, 'After');

            await context.sync();
        });
}

// :)
setTimeout(() => {
  var observer = new MutationObserver(function (mutations) {

    var btn = document.createElement('button');
    btn.innerHTML = 'Insert Value';
    btn.setAttribute('id', 'ins-btn');
    btn.addEventListener('click', () => {
      // need to get this value as the event is triggered multiple times, not just this context
      var score = document.querySelector('span.score');
      var vector = document.querySelector('a.vector');
      insertScore(score.innerText, vector.innerText);
    });
    document.getElementById('cvssboard').appendChild(btn);
    observer.disconnect();
  });
  
  var config = { characterData: true, subtree: true };
  var scoreNode = document.querySelector('span.score');
  observer.observe(scoreNode, config);
}, 500);
