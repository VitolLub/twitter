	//get time
	var currentdate = new Date(); 
	var getTimeVar = currentdate.getHours();
	if(getTimeVar==9||getTimeVar>9&&getTimeVar<20)
	{
		
		macross()
	}
	else
	{
		var macroStart;
		macroStart ="CODE:";
		macroStart +="SET !ERRORIGNORE YES" + "\n"; 	
		macroStart +="TAB T=1" + "\n";
		macroStart +="WAIT SECONDS=60" + "\n";
		iimPlay(macroStart)
		iimPlay("CODE:URL GOTO=imacros://run/?m=twitterDayFollow.js");
	}
		
		
		
		
		
		
		
		
		
		
		
function macross(){

		//jquery 
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



		//alert("twitterDayFollow");
		//window.localStorage.setItem('tlastname','2');
		try {
			var a = 0;
			a = window.localStorage.getItem('tlastname');
			//alert(a);
			if(isNaN(a))
			{
				window.localStorage.setItem('tlastname','0');
			}
			a = window.localStorage.getItem('tlastname');
			var num = parseInt(a);
			//alert(num)
		}  catch(err) {
			window.localStorage.setItem('tlastname','0');
			iimPlay("CODE:URL GOTO=imacros://run/?m=twitterCbase.js");
		}
		
	
		
		var emails = ['Kaleopatis','YuliaStoyko','palenu4ka@gmail.com','lisafoxtrue@gmail.com','Kleopatis','vitollubomir','max_si_m','devbattles','alex.kabir@ymail.com','smm_anna'];
		var pass = ['Akaler2010','levelS1990#','23101993','420201olejko','qweasdzxc123','486070920','mak7imka','rbnfyxjec486070920','Apass2010','mak7imka']
	
		//var lastId = window.localStorage.getItem('lastId');
		//alert(lastId);
	
		a = parseInt(a)+1;
		//alert(a);
		window.localStorage.setItem('tlastname',String(a));
		alert(emails[num])
		alert(pass[num])
		var macro = "CODE:"+"\n";
		macro += "" + "\n";
		macro += "SET !ERRORIGNORE YES" + "\n";
		macro +="TAB T=1" + "\n";
		macro +="WAIT SECONDS=0" + "\n";
		macro +="TAB CLOSEALLOTHERS" + "\n";
		macro +="WAIT SECONDS=5" + "\n";
		macro +="TAG POS=1 TYPE=INPUT ATTR=CLASS:js-username-field<SP>email-input<SP>js-initial-focus CONTENT="+emails[num]+"" + "\n";
		macro +="WAIT SECONDS=1" + "\n";
		macro +="TAG POS=1 TYPE=INPUT ATTR=CLASS:js-password-field CONTENT="+pass[num]+"" + "\n";
		macro +="WAIT SECONDS=1" + "\n";		
		macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Log<SP>in" + "\n";
		macro +="WAIT SECONDS=5" + "\n";
		
		window.localStorage.setItem('tlastname',String(a));
		iimPlay(macro);

	
	
		var following = window.document.getElementsByClassName('ProfileCardStats-statValue')[1].innerHTML;
		following = parseInt(following);
		var followers = window.document.getElementsByClassName('ProfileCardStats-stat Arrange-sizeFit')[2].children[0].getElementsByClassName('ProfileCardStats-statValue')[0].innerHTML;
		followers = parseInt(followers);
		
		if(following==5001||following>=followers||(followers-following)>=300)
		{
		
		
				
		var macro = "CODE:"+"\n";
		macro += "URL GOTO=https://twitter.com/following" + "\n";
		macro +="WAIT SECONDS=3" + "\n";	
		iimPlay(macro);
		

				var scroll = 0;
				var k = 1;

				for (var s=1; s <= 250; s++)
				{

						$(window).scrollTop($(window.document).height());
				}

				for (i=200; i <= 300; i++)
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
		}
	
		
		//alert(users.length);
		//allID = parseInt(lastId)+1000;
		for(var m =0;m<=10;m++)
		{
			try{
				getLogin()
				var acc = window.document.getElementsByTagName('body')[0].innerHTML;
			}
			 catch(err) {
				if(typeof acc==='undefined' || acc==null)
				{
					getLogin()
					var macro = "CODE:"+"\n";
					macro +="WAIT SECONDS=5" + "\n";
					iimPlay(macro);
				}
			}
			
			var macro2 = "CODE:"+"\n"
			macro2 += "URL GOTO=https://twitter.com/"+acc+"" + "\n";
			macro2 += "TAG POS=1 TYPE=SPAN ATTR=TXT:Follow" + "\n";
			macro2 +="REFRESH" + "\n"; 
			iimPlay(macro2);
			iimDisplay (m);
		}
		a = window.localStorage.getItem('tlastname');
		//alert(a);
		window.localStorage.setItem('tlastname',a);
		var macro;
		macro ="CODE:";
		macro +="SET !ERRORIGNORE YES" + "\n"; 
		macro +="SET !TIMEOUT_TAG 1" + "\n";
		macro +="SET !TIMEOUT_STEP 1" + "\n";
		macro +="SET !TIMEOUT_PAGE 30" + "\n";
		macro +=" SET !REPLAYSPEED FAST" + "\n";
		macro +="SET !TIMEOUT_MACRO 150" + "\n"; 
		macro += "URL GOTO=https://twitter.com/" + "\n";
		macro +="WAIT SECONDS=4" + "\n";
		macro +="EVENT TYPE=CLICK SELECTOR=#user-dropdown-toggle BUTTON=0" + "\n";
		macro +="WAIT SECONDS=2" + "\n";
		macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Log<SP>out" + "\n";
		macro +="WAIT SECONDS=10" + "\n";
		macro += "URL GOTO=https://twitter.com/login" + "\n";
		macro += "CLEAR" + "\n";
		var b = a;
		//alert(b)
		window.localStorage.setItem('tlastname',parseInt(b));
		iimPlay(macro);
		//alert(b)
		//var lastId = window.localStorage.getItem('lastId');
		//lastId = allID;
		//window.localStorage.setItem('lastId',lastId);
		window.localStorage.setItem('tlastname',parseInt(b));
		//alert(lastId);
	
	
		if(parseInt(b)>9)
		{
			window.localStorage.setItem('tlastname','0');
			//alert("Last ID -"+users[lastId]);
		}
	macross();	
}	
		
function getLogin()
{
			window.location = 'http://www.devbattles.com/system/external/check/twitter/server.php';
			var macro = "CODE:"+"\n";
			macro +="WAIT SECONDS=3" + "\n";
			iimPlay(macro);
}	