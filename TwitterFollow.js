function loadScriptFromURL(url) {
    var request = Components.classes['@mozilla.org/xmlextras/xmlhttprequest;1'].createInstance(Components.interfaces.nsIXMLHttpRequest),
        async = false;
    request.open('GET', url, async);
    request.send();
    if (request.status !== 200) {
        var message = 'an error occurred while loading script at url: ' + url + ', status: ' + request.status;
        iimDisplay(message);
        return false;
    }
    eval(request.response);
    return true;
}
	loadScriptFromURL('http://devbattles.com/js/jq.for.im.js');
	$ = window.$,
	JQuery = window.JQuery;



var scroll = 0;
var k = 1;

for (var s=1; s <= 250; s++)
{

		$(window).scrollTop($(window.document).height());
}

for (i=200; i <= 1600; i++)
{

	
	var macroStart;
    macroStart ="CODE:";
    macroStart +="SET !ERRORIGNORE YES" + "\n"; 	
    macroStart +="TAB T=1" + "\n";
    macroStart +="WAIT SECONDS=1" + "\n";
    macroStart +="EVENT TYPE=CLICK SELECTOR=.GridTimeline-items>div:nth-of-type("+i+")>div:nth-of-type(1)>div>div>div>div>div>div>div>button BUTTON=0" + "\n";
	macroStart +="EVENT TYPE=CLICK SELECTOR=.GridTimeline-items>div:nth-of-type("+i+")>div:nth-of-type(2)>div>div>div>div>div>div>div>button BUTTON=0" + "\n";
	macroStart +="EVENT TYPE=CLICK SELECTOR=.GridTimeline-items>div:nth-of-type("+i+")>div:nth-of-type(3)>div>div>div>div>div>div>div>button BUTTON=0" + "\n";
	macroStart +="EVENT TYPE=CLICK SELECTOR=.GridTimeline-items>div:nth-of-type("+i+")>div:nth-of-type(4)>div>div>div>div>div>div>div>button BUTTON=0" + "\n";
	macroStart +="EVENT TYPE=CLICK SELECTOR=.GridTimeline-items>div:nth-of-type("+i+")>div:nth-of-type(5)>div>div>div>div>div>div>div>button BUTTON=0" + "\n";
	macroStart +="EVENT TYPE=CLICK SELECTOR=.GridTimeline-items>div:nth-of-type("+i+")>div:nth-of-type(6)>div>div>div>div>div>div>div>button BUTTON=0" + "\n";
		 
	macroStart +="WAIT SECONDS=1" + "\n";

iimPlay(macroStart)

iimDisplay("Current loop is: "+i)
}

		
	iimPlay("CODE:URL GOTO=imacros://run/?m=twitterExit.js");