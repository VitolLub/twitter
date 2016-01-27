	
		
		window.localStorage.setItem('tlastname','0');

		var currentdate = new Date(); 
		var current = currentdate.getHours();
		alert(current);
		if(current>12)
		{
			iimPlay("CODE:URL GOTO=imacros://run/?m=twitterDayFollow.js");
		}
		
		try {
			var a = 0;
			a = window.localStorage.getItem('tlastname');
			//alert(a);
			if(isNaN(a))
			{
				window.localStorage.setItem('tlastname','0');
			}
			a = window.localStorage.getItem('tlastname');
			var num = 0;
			num = parseInt(a);
		}  catch(err) {
			window.localStorage.setItem('tlastname','0');
			iimPlay("CODE:URL GOTO=imacros://run/?m=twitterCbase.js");
					}
	


	
	
	var emails = ['vitollubomir','max_si_m','devbattles','alex.kabir@ymail.com','smm_anna','mr_start_up','palenu4ka@gmail.com','lisafoxtrue@gmail.com','Kleopatis','Kaleopatis','vbyryi@gmail.com','m.zagirska@gmail.com','pochtidaromm','YuliaStoyko','kuzyak.anastasia@gmail.com','kobbo.digital@gmail.com'];
	var pass = ['486070920','mak7imka','rbnfyxjec486070920','Apass2010','mak7imka','d31h-r16l-f1fj','23101993','420201olejko','qweasdzxc123','Akaler2010','VB486359','09101519masha','levelS7!','levelS1990#','n14071996','dana21376']
	

	
		a = parseInt(a)+1;
	 //alert(a);
		window.localStorage.setItem('tlastname',String(a));
		
		var macro = "CODE:"+"\n";
		macro += "" + "\n";
		macro += "SET !ERRORIGNORE YES" + "\n";
		macro +="TAB T=1" + "\n";
		macro +="WAIT SECONDS=0" + "\n";
		macro +="TAB CLOSEALLOTHERS" + "\n";
		//macro += "URL GOTO=https://twitter.com/login" + "\n";
		macro +="WAIT SECONDS=2" + "\n";
		macro += "TAG POS=1 TYPE=INPUT ATTR=CLASS:js-username-field<SP>email-input<SP>js-initial-focus CONTENT="+emails[num]+" " + "\n";
		macro +="WAIT SECONDS=1" + "\n";
		macro += "TAG POS=1 TYPE=INPUT ATTR=CLASS:js-password-field CONTENT="+pass[num]+" " + "\n";
		macro +="WAIT SECONDS=1" + "\n";		
		macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Log<SP>in" + "\n";
		macro +="WAIT SECONDS=3" + "\n";
		
		window.localStorage.setItem('tlastname',String(a));
	iimPlay(macro);

	
	
	
	
	
	
	//auto retwit
	if(num!=2) {
		var goToDevbattles = "CODE:";
		goToDevbattles +="WAIT SECONDS=0.5" + "\n";
		goToDevbattles += "URL GOTO=https://twitter.com/search?f=tweets&vertical=default&q=devbattles&src=typd&lang=en" + "\n";
		goToDevbattles +="WAIT SECONDS=5" + "\n";
		iimPlay(goToDevbattles)
		
		var aaaa = window.document.getElementsByClassName('ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet').length;
		aaaa = parseInt(aaaa)-2;
		for(var i=0;i<=aaaa;i++) {
					
			var element = window.document.getElementsByClassName('ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet')[0].getElementsByClassName('Icon Icon--retweet')[0];
			var colorProp = window.getComputedStyle(element).getPropertyValue("color");
			if(colorProp=='rgb(92, 145, 59)')
			{ 
				window.document.getElementsByClassName('ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet')[0].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
				
			}
			else
			{
				var text = window.document.getElementsByClassName('TweetTextSize  js-tweet-text tweet-text')[0].innerHTML;
				text = text.replace(/<\/?[^>]+(>|$)/g, "");
				var n = text.search(/@devbattles|@DevBattles|Kaleopatis|Kleopatis|Palenu4kaJulia|vitollubomir|max_si_m|alex_kabir|lisafoxtrue|Alex_de_Miguel|rida_shah|H3bK11|smm_anna|Dev Battles/);

				
				if(n<0)
				{
					var retwPos = window.document.getElementById('stream-items-id').getElementsByClassName('ProfileTweet-actionList js-actions')[0].children[1].children[0].getBoundingClientRect();
					retwLeft = retwPos.left+8;
					retwTop = retwPos.top+10;
					
					var macroStart = "CODE:";
					macroStart +="WAIT SECONDS=0.5" + "\n";
					macroStart +="CLICK X="+parseInt(retwLeft)+" Y="+parseInt(retwTop)+"" + "\n";
					macroStart +="WAIT SECONDS=2" + "\n";
					iimPlay(macroStart)
					
					var retwBtn = window.document.getElementsByClassName('RetweetDialog-retweetActionLabel')[0].getBoundingClientRect();
					retwLeft2 = retwBtn.left+8;
					retwTop2 = retwBtn.top+10;
					var macroStart2 = "CODE:";
					//macroStart2 += "TAG POS=1 TYPE=SPAN ATTR=TXT:Retweet" + "\n";
					macroStart2 +="WAIT SECONDS=2" + "\n";
					macroStart2 +="CLICK X="+parseInt(retwLeft2)+" Y="+parseInt(retwTop2)+"" + "\n";
					macroStart2 +="WAIT SECONDS=5" + "\n";
					iimPlay(macroStart2)
					
					
					window.document.getElementsByClassName('ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet')[0].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
				
				}
				else
				{
					window.document.getElementsByClassName('ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet')[0].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
				}
			}
		}
	}
	
	var macroStart3 = "CODE:";
	macroStart3 += "URL GOTO=https://twitter.com" + "\n";
	macroStart3 +="WAIT SECONDS=5" + "\n";
	iimPlay(macroStart3)
	

	window.scrollTo(0, window.document.body.scrollHeight || window.document.documentElement.scrollHeight);
	var macro10 = "CODE:"+"\n";
	macro10 += "" + "\n";
	macro10 +="WAIT SECONDS=2" + "\n";	
	iimPlay(macro10);
	window.scrollTo(0, window.document.body.scrollHeight || window.document.documentElement.scrollHeight);
	var macro11 = "CODE:"+"\n";
	macro11 += "" + "\n";
	macro11 +="WAIT SECONDS=2" + "\n";	
	iimPlay(macro11);
	window.scrollTo(0, window.document.body.scrollHeight || window.document.documentElement.scrollHeight);
	window.scrollTo(0, 0);
	
	
	var arrayCat = ['computer','tech','Csharp','devbattles','facebook','technology','tesla','apple','java','javascript','','iphone','html','ruby','scala','jquery','microsoft','css','php','itjob','recruitment','nike','tv','magento','robots','hitech','angular','google','programmers','programming','web','webdev','developers','development','itjoke'];
arrayCount = arrayCat.length;
//alert(arrayCount);
var random = Math.floor((Math.random() * 32) + 1);

	var macro = "CODE:";
	macro += "" + "\n";
    macro +="TAB T=1" + "\n";
    macro +="WAIT SECONDS=5" + "\n";
	iimPlay(macro)


	
	
	
	
	//click  on Follow button
	var followCount = window.document.getElementsByClassName('Icon--follow').length;
	if(followCount!=0)
	{
				for(var k=0;k<followCount;k++) {
					try {
						var followClick = window.document.getElementsByClassName('Icon--follow')[k].getBoundingClientRect();
						followLeft = followClick.left+8;
						followTop = followClick.top+10; 
						
						var macroFollow = "CODE:";
						macroFollow +="WAIT SECONDS=0.5" + "\n";
						macroFollow +="CLICK X="+parseInt(followLeft)+" Y="+parseInt(followTop)+"" + "\n";
						macroFollow +="WAIT SECONDS=0.5" + "\n";
						iimPlay(macroFollow)
					} catch(err) {
						iimPlay("CODE:URL GOTO=imacros://run/?m=twitterCbase.js");
					}
				}

	}
	
	
	//кликает на лайки

	
	try {
		var sss = window.document.getElementById('stream-items-id').getElementsByClassName('js-stream-item stream-item stream-item expanding-stream-item').length;
		sss = parseInt(sss)-5;
	} catch(err) {
				var mm6 = "CODE:";
				mm6 +="WAIT SECONDS=0.5" + "\n";
				mm6 += "URL GOTO=https://twitter.com/login" + "\n";
				iimPlay(mm6)
				window.localStorage.setItem('tlastname',0);
				iimPlay("CODE:URL GOTO=imacros://run/?m=twitterCbase.js");
	}

	
	
	for(var i=0;i<=sss;i++)
	{
		var aaa = window.document.getElementById('stream-items-id').getElementsByClassName('ProfileTweet-actionList js-actions').length;
		var bbb = window.document.getElementById('stream-items-id');
		if(aaa==0||bbb===null)
		{
				var mm = "CODE:";
				mm +="WAIT SECONDS=0.5" + "\n";
				mm += "URL GOTO=https://twitter.com/login" + "\n";
				iimPlay(mm)
				iimPlay("CODE:URL GOTO=imacros://run/?m=twitterExit.js");
		} 
		else {
			try{
				var click = window.document.getElementById('stream-items-id').getElementsByClassName('ProfileTweet-actionList js-actions')[0].children[2].children[0].getBoundingClientRect();			
				clickLeft = click.left+8;
				clickTop = click.top+10; 
			} catch(err) {
				var mm = "CODE:";
				mm +="WAIT SECONDS=0.5" + "\n";
				mm += "URL GOTO=https://twitter.com/login" + "\n";
				iimPlay(mm)
				iimPlay("CODE:URL GOTO=imacros://run/?m=twitterExit.js");
			}
				var macroStart = "CODE:";
				macroStart +="WAIT SECONDS=1" + "\n";
				macroStart +="CLICK X="+parseInt(clickLeft)+" Y="+parseInt(clickTop)+"" + "\n";
				macroStart +="WAIT SECONDS=2" + "\n";
				iimPlay(macroStart)
				
				var rlast = window.document.getElementById('stream-items-id');
				if(typeof rlast==='undefined' || rlast==null)
				{
					var mm2 = "CODE:";
					mm2 +="WAIT SECONDS=0.5" + "\n";
					mm2 += "URL GOTO=https://twitter.com/login" + "\n";
					iimPlay(mm2)
					iimPlay("CODE:URL GOTO=imacros://run/?m=twitterExit.js");	
				}
				else
				{
					try{
						window.document.getElementById('stream-items-id').children[0].remove();
					} catch(err) {
						var mm = "CODE:";
						mm +="WAIT SECONDS=0.5" + "\n";
						mm += "URL GOTO=https://twitter.com/login" + "\n";
						iimPlay(mm)
						iimPlay("CODE:URL GOTO=imacros://run/?m=twitterExit.js");
					}
				}
			
			
		}		
	
	}


	
iimPlay("CODE:URL GOTO=imacros://run/?m=twitterExit.js");
	
	










