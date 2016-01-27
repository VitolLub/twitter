		
var macro;
    macro ="CODE:";
    macro +="SET !ERRORIGNORE YES" + "\n"; 
    macro +="SET !TIMEOUT_TAG 1" + "\n";
    macro +="SET !TIMEOUT_STEP 1" + "\n";
    macro +="SET !TIMEOUT_PAGE 30" + "\n";
    macro +=" SET !REPLAYSPEED FAST" + "\n";
    macro +="SET !TIMEOUT_MACRO 150" + "\n"; 
	macro +="EVENT TYPE=CLICK SELECTOR=#user-dropdown-toggle BUTTON=0" + "\n";
	macro +="WAIT SECONDS=2" + "\n";
	macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Log<SP>out" + "\n";
	macro +="WAIT SECONDS=10" + "\n";
	macro += "URL GOTO=https://twitter.com/login" + "\n";
	a = window.localStorage.getItem('tlastname');
	//alert(a);
	iimPlay(macro);
	var b = a;
	//alert(b);
	window.localStorage.setItem('tlastname',parseInt(b));
	if(parseInt(b)>15)
	{
		window.localStorage.setItem('tlastname','0');
	}
	iimPlay("CODE:URL GOTO=imacros://run/?m=twitterCbase.js");