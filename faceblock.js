var body = document.getElementsByTagName('body')[0];

body.innerHTML = "<h1>get back to work</h1>";

// Clean up:
// browser.storage.local.clear();

browser.storage.local.get("counter").then(function(_res){
  var today = (new Date()).toDateString(),
    res = _res.counter || {
      currentDate : today,
      dayCounter : 0,
      allTimeCounter : 0
    },
    currentDate = res.currentDate,
    currentCounter = parseInt(res.dayCounter),
    currentAllTime = parseInt(res.allTimeCounter) + 1;

  currentCounter = (today === currentDate) ? (currentCounter + 1) : 1;

  browser.storage.local.set({
    counter : {
      currentDate : today,
      dayCounter : currentCounter,
      allTimeCounter : currentAllTime
    }
  });

  body.innerHTML = '<h1>get back to work</h1><h2>we\'ve done this ' + currentCounter + ' time' + (currentCounter === 1 ? '' : 's') + ' today.</h2><h3>total counter: ' + currentAllTime + '</h3>';
}, function(error){
  alert(error);
});