
 function loopwait(timeWait) {
   var timeStart = new Date().getTime();
   var timeNow   = new Date().getTime();
   while (timeNow < (timeStart+timeWait)) {
     timeNow = new Date().getTime();
   };
 }

 function open_win(url) {
//   alert(url);
   window.open(url, 'win', 'status=no,acrollbars=no,directories=no,menubar=no,resizable=yes,toolbar=no');
 }

 function change2Configured() {
   inputs = document.getElementsByTagName("input");
   inputs[3].src = "../parts/configurationbuttonlight.jpg";
   inputs[5].src = "../parts/beginbutton.jpg";
   inputs[7].src = "../parts/endbuttonlight.jpg";
   inputs[9].src = "../parts/unconfigurebutton.jpg";
   inputs[11].src = "../parts/pausebuttonlight.jpg";
   inputs[13].src = "../parts/restartbuttonlight.jpg";
   $("configId").disabled = true;
   $("beginId").disabled = false;
   $("endId").disabled = true;
   $("unconfigId").disabled = false;
   $("pauseId").disabled = true;
   $("restartId").disabled = true;
   setTimeout("getstate1('./daq.py/Log')", 2000); // after 2 sec
 }

 function change2Running() {
   inputs = document.getElementsByTagName("input");
   inputs[3].src = "../parts/configurationbuttonlight.jpg";
   inputs[5].src = "../parts/beginbuttonlight.jpg";
   inputs[7].src = "../parts/endbutton.jpg";
   inputs[9].src = "../parts/unconfigurebuttonlight.jpg";
   inputs[11].src = "../parts/pausebutton.jpg";
   inputs[13].src = "../parts/restartbuttonlight.jpg";
   $("configId").disabled = true;
   $("beginId").disabled = true;
   $("endId").disabled = false;
   $("unconfigId").disabled = true;
   $("pauseId").disabled = false;
   $("restartId").disabled = true;
   setTimeout("getstate1('./daq.py/Log')", 10000); // after 2 sec
 }

  function change2Paused() {
   inputs = document.getElementsByTagName("input");
   inputs[3].src = "../parts/configurationbuttonlight.jpg";
   inputs[5].src = "../parts/beginbuttonlight.jpg";
   inputs[7].src = "../parts/endbuttonlight.jpg";
   inputs[9].src = "../parts/unconfigurebuttonlight.jpg";
   inputs[11].src = "../parts/pausebuttonlight.jpg";
   inputs[13].src = "../parts/restartbutton.jpg";
   $("configId").disabled = true;
   $("beginId").disabled = false;
   $("endId").disabled = true;
   $("unconfigId").disabled = true;
   $("pauseId").disabled = true;
   $("restartId").disabled = false;
   setTimeout("getstate1('./daq.py/Log')", 10000); // after 2 sec
 }

 function change2Loaded() {
   inputs = document.getElementsByTagName("input");
   inputs[3].src = "../parts/configurationbutton.jpg";
   inputs[5].src = "../parts/beginbuttonlight.jpg";
   inputs[7].src = "../parts/endbuttonlight.jpg";
   inputs[9].src = "../parts/unconfigurebuttonlight.jpg";
   inputs[11].src = "../parts/pausebuttonlight.jpg";
   inputs[13].src = "../parts/restartbuttonlight.jpg";
   $("configId").disabled = false;
   $("beginId").disabled = true;
   $("endId").disabled = true;
   $("unconfigId").disabled = true;
   $("pauseId").disabled = true;
   $("restartId").disabled = true;
   setTimeout("getstate1('./daq.py/Log')", 2000); // after 2 sec
 }

 function change2Loaded1() {
   inputs = document.getElementsByTagName("input");
   inputs[3].src = "../parts/configurationbutton.jpg";
   inputs[5].src = "../parts/beginbuttonlight.jpg";
   inputs[7].src = "../parts/endbuttonlight.jpg";
   inputs[9].src = "../parts/unconfigurebuttonlight.jpg";
   inputs[11].src = "../parts/pausebuttonlight.jpg";
   inputs[13].src = "../parts/restartbuttonlight.jpg";
   $("configId").disabled = false;
   $("beginId").disabled = true;
   $("endId").disabled = true;
   $("unconfigId").disabled = true;
   $("pauseId").disabled = true;
   $("restartId").disabled = true;
   location.reload();
 }

 function change2Configured1() {
   inputs = document.getElementsByTagName("input");
   inputs[3].src = "../parts/configurationbuttonlight.jpg";
   inputs[5].src = "../parts/beginbutton.jpg";
   inputs[7].src = "../parts/endbuttonlight.jpg";
   inputs[9].src = "../parts/unconfigurebutton.jpg";
   inputs[11].src = "../parts/pausebuttonlight.jpg";
   inputs[13].src = "../parts/restartbuttonlight.jpg";
   $("configId").disabled = true;
   $("beginId").disabled = false;
   $("endId").disabled = true;
   $("unconfigId").disabled = false;
   $("pauseId").disabled = true;
   $("restartId").disabled = true;
   location.reload();
 }

 function change2Running1() {
   inputs = document.getElementsByTagName("input");
   inputs[3].src = "../parts/configurationbuttonlight.jpg";
   inputs[5].src = "../parts/beginbuttonlight.jpg";
   inputs[7].src = "../parts/endbutton.jpg";
   inputs[9].src = "../parts/unconfigurebuttonlight.jpg";
   inputs[11].src = "../parts/pausebutton.jpg";
   inputs[13].src = "../parts/restartbuttonlight.jpg";
   $("configId").disabled = true;
   $("beginId").disabled = true;
   $("endId").disabled = false;
   $("unconfigId").disabled = true;
   $("pauseId").disabled = false;
   $("restartId").disabled = true;
   location.reload();
 }

  function change2Paused1() {
   inputs = document.getElementsByTagName("input");
   inputs[3].src = "../parts/configurationbuttonlight.jpg";
   inputs[5].src = "../parts/beginbuttonlight.jpg";
   inputs[7].src = "../parts/endbuttonlight.jpg";
   inputs[9].src = "../parts/unconfigurebuttonlight.jpg";
   inputs[11].src = "../parts/pausebuttonlight.jpg";
   inputs[13].src = "../parts/restartbutton.jpg";
   $("configId").disabled = true;
   $("beginId").disabled = false;
   $("endId").disabled = true;
   $("unconfigId").disabled = true;
   $("pauseId").disabled = true;
   $("restartId").disabled = false;
 }

 function changepanel(state) {
   if (state == "LOADED")
     parent.menu.location = "./operatormenu.html";
   else if (state == "CONFIGURED")
     parent.menu.location = "./operatormenu1.html";
   else if (state == "RUNNING")
     parent.menu.location = "./operatormenu2.html";
 }

 function setstate() {
   getstate('./daq.py/Log', changepanel);
 }

 function getstate(url, callmethod) {
   var msec = (new Date()).getTime();
   new Ajax.Request(url, {
     method: "get",
     parameters: "cache="+msec,
     onCreate:function(httpObj){
//       alert(httpObj+" was got.");
     },
     onSuccess:function(httpObj){
//       alert("OK: "+ httpObj.responseText);
//       $("result1").innerHTML = httpObj.responseText;
//       $("result2").innerHTML = res.getElementsByTagName('state');
       var res = httpObj.responseXML;
       var states = res.getElementsByTagName('state');
       var state = states[0].firstChild.nodeValue;
//       alert("state: "+states+" len = "+states.length);
       callmethod(state);
     },
     onFailure:function(httpObj){
//       alert("Bad: "+ httpObj.responseText);
//       $("result1").innerHTML ="Bad";
     }
   });
 } 

 function getstate1(url) {
   var msec = (new Date()).getTime();
   new Ajax.Request(url, {
     method: "get",
     parameters: "cache="+msec,
     onCreate:function(httpObj){
//       alert(httpObj+" was got.");
     },
     onSuccess:function(httpObj){
//       alert("OK: "+ httpObj.responseText);
       var res = httpObj.responseXML;
//       alert("OK: "+ httpObj.responseXML);
	var compNames = res.getElementsByTagName('compName');
       var status = res.getElementsByTagName('status');
       $("commandStatus").innerHTML = status[0].firstChild.nodeValue;
       var states = res.getElementsByTagName('state');
       var currentstatus = states[0].firstChild.nodeValue;
       var compStatus = res.getElementsByTagName('compStatus');
       var eventnums = res.getElementsByTagName('eventNum');
       var length = states.length;
//       alert("length="+length);
//       alert("status: "+status+" len = "+status.length);
//       alert("state: "+states+" len = "+states.length);
//       alert("compStatus: "+compStatus+" len = "+compStatus.length);
//       alert("eventnums: "+eventnums+" len = "+eventnums.length);
	text="";
	var len = compNames.length;
       for(i=0; i<length;i+=len) {
        text +="<table><tr><th></th><th>State</th><th>Status</th><th>Event Counts</th></tr>";

	for(j = 0; j< len; j++) {
		text +="<tr><td>";
		text += compNames[i+j].firstChild.nodeValue;
		text += "</td><td class='compState'>";
		text += states[i+j].firstChild.nodeValue;
	        text += "</td><td class='compStatus'>";
		text +=compStatus[i+j].firstChild.nodeValue;
        	text +="</td><td class='eventCount'>";
		text += eventnums[i+j].firstChild.nodeValue;
        	text +="</td></tr>";
	}

	text +="</table>";
	//alert(text);
       }
	//alert(text);
	$("DAQStatus").innerHTML = text;

	if(currentstate == "LOADED")
	  change2Loaded1();
	else if (currentstate == "CONFIGURED")
	  change2Configured1();
	else if (currentstat == "RUNNING")
	  change2Running1();
	else if (currentstat == "PAUSED")
	  change2Paused1();
     },
     onFailure:function(httpObj){
//       alert("Bad: "+ httpObj.responseText);
//       $("result1").innerHTML ="Bad";
     }
   });
 }