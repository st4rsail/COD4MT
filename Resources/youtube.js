var win = Titanium.UI.currentWindow;
var tabGroup = win.tabGroup;

var scrollView = Titanium.UI.createScrollView({
	contentWidth:'auto',
	contentHeight:'auto',
	top:0,
	showVerticalScrollIndicator:true,
	showHorizontalScrollIndicator:true
});

var disclaimer = 'The following videos require internet connection. Tap image to load.';
var label00 = Titanium.UI.createLabel({backgroundColor:'transparent',color:'#f00',width:'auto',height:'auto',textAlign:'center',top:10,left:0,text:disclaimer});

var label01 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Afghan '});
var label02 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Bailout '});
var label03 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Carnival '});
var label04 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Crash '});
var label05 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Derail '});
var label06 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Estate '});
var label07 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Favela '});
var label08 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Fuel '});
var label09 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Highrise '});
var label10 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Invasion '});
var label11 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Karachi '});
var label12 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Overgrown '});
var label13 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Quarry '});
var label14 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Rundown '});
var label15 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Rust '});
var label16 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Salvage '});
var label17 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Scrapyard '});
var label18 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Skidrow '});
var label19 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Storm '});
var label20 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Strike '});
var label21 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Sub Base '});
var label22 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Terminal '});
var label23 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Trailer Park '});
var label24 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Underpass '});
var label25 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Vacant '});
var label26 = Titanium.UI.createLabel({borderRadius:5,backgroundColor:'#fff',width:'auto',height:'auto',textAlign:'right',bottom:10,right:10,text:' Wasteland '});

var view00 = Titanium.UI.createView({width:300,height:50,top:0,left:'auto'});
var view01 = Titanium.UI.createView({borderRadius:15,width:300,height:150,  top:60,left:'auto',backgroundImage:'images/thumbnails/afghan.png'});
var view02 = Titanium.UI.createView({borderRadius:15,width:300,height:150, top:220,left:'auto',backgroundImage:'images/thumbnails/bailout.png'});
var view03 = Titanium.UI.createView({borderRadius:15,width:300,height:150, top:380,left:'auto',backgroundImage:'images/thumbnails/carnival.png'});
var view04 = Titanium.UI.createView({borderRadius:15,width:300,height:150, top:540,left:'auto',backgroundImage:'images/thumbnails/crash.png'});
var view05 = Titanium.UI.createView({borderRadius:15,width:300,height:150, top:700,left:'auto',backgroundImage:'images/thumbnails/derail.png'});
var view06 = Titanium.UI.createView({borderRadius:15,width:300,height:150, top:860,left:'auto',backgroundImage:'images/thumbnails/estate.png'});
var view07 = Titanium.UI.createView({borderRadius:15,width:300,height:150,top:1020,left:'auto',backgroundImage:'images/thumbnails/favela.png'});
var view08 = Titanium.UI.createView({borderRadius:15,width:300,height:150,top:1180,left:'auto',backgroundImage:'images/thumbnails/fuel.png'});
var view09 = Titanium.UI.createView({borderRadius:15,width:300,height:150,top:1340,left:'auto',backgroundImage:'images/thumbnails/highrise.png'});
var view10 = Titanium.UI.createView({borderRadius:15,width:300,height:150,top:1500,left:'auto',backgroundImage:'images/thumbnails/invasion.png'});
var view11 = Titanium.UI.createView({borderRadius:15,width:300,height:150,top:1660,left:'auto',backgroundImage:'images/thumbnails/karachi.png'});
var view12 = Titanium.UI.createView({borderRadius:15,width:300,height:150,top:1820,left:'auto',backgroundImage:'images/thumbnails/overgrown.png'});
var view13 = Titanium.UI.createView({borderRadius:15,width:300,height:150,top:1980,left:'auto',backgroundImage:'images/thumbnails/quarry.png'});
var view14 = Titanium.UI.createView({borderRadius:15,width:300,height:150,top:2140,left:'auto',backgroundImage:'images/thumbnails/rundown.png'});
var view15 = Titanium.UI.createView({borderRadius:15,width:300,height:150,top:2300,left:'auto',backgroundImage:'images/thumbnails/rust.png'});
var view16 = Titanium.UI.createView({borderRadius:15,width:300,height:150,top:2460,left:'auto',backgroundImage:'images/thumbnails/salvage.png'});
var view17 = Titanium.UI.createView({borderRadius:15,width:300,height:150,top:2620,left:'auto',backgroundImage:'images/thumbnails/scrapyard.png'});
var view18 = Titanium.UI.createView({borderRadius:15,width:300,height:150,top:2780,left:'auto',backgroundImage:'images/thumbnails/skidrow.png'});
var view19 = Titanium.UI.createView({borderRadius:15,width:300,height:150,top:2940,left:'auto',backgroundImage:'images/thumbnails/storm.png'});
var view20 = Titanium.UI.createView({borderRadius:15,width:300,height:150,top:3100,left:'auto',backgroundImage:'images/thumbnails/strike.png'});
var view21 = Titanium.UI.createView({borderRadius:15,width:300,height:150,top:3260,left:'auto',backgroundImage:'images/thumbnails/sub_base.png'});
var view22 = Titanium.UI.createView({borderRadius:15,width:300,height:150,top:3420,left:'auto',backgroundImage:'images/thumbnails/terminal.png'});
var view23 = Titanium.UI.createView({borderRadius:15,width:300,height:150,top:3580,left:'auto',backgroundImage:'images/thumbnails/trailer_park.png'});
var view24 = Titanium.UI.createView({borderRadius:15,width:300,height:150,top:3740,left:'auto',backgroundImage:'images/thumbnails/underpass.png'});
var view25 = Titanium.UI.createView({borderRadius:15,width:300,height:150,top:3900,left:'auto',backgroundImage:'images/thumbnails/vacant.png'});
var view26 = Titanium.UI.createView({borderRadius:15,width:300,height:150,top:4060,left:'auto',backgroundImage:'images/thumbnails/wasteland.png'});

function loadWebView(title, link) {
	var webView = Titanium.UI.createWebView({url: link, controls: true});
	var win = Titanium.UI.createWindow({title: title});
	win.orientationModes = [
		Titanium.UI.PORTRAIT,
		Titanium.UI.LANDSCAPE_LEFT,
		Titanium.UI.LANDSCAPE_RIGHT
	];

	// web controls
	var bb2 = Titanium.UI.createButtonBar({
		labels:['Back', 'Reload', 'Forward']
	});
	var flexSpace = Titanium.UI.createButton({
		systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});
	win.setToolbar([flexSpace,bb2,flexSpace]);
	webView.addEventListener('load',function(e)
	{
		Ti.API.debug("url = "+webView.url);
		Ti.API.debug("event url = "+e.url);
	});
	bb2.addEventListener('click',function(ce)
	{
		if (ce.index == 0)
		{
			webView.goBack();
		}
		else if (ce.index == 1)
		{
			webView.reload();
		}
		else
		{
			webView.goForward();
		}
	});
	// END of web controls

	win.add(webView);
	Titanium.UI.currentTab.open(win,{animated: true});
}

view01.addEventListener('click', function(e) {loadWebView('Afghan',      'http://m.youtube.com/watch?v=Qc5JdBuYr4U'); });
view02.addEventListener('click', function(e) {loadWebView('Bailout',     'http://m.youtube.com/watch?v=GSiDI-wxIfQ'); });
view03.addEventListener('click', function(e) {loadWebView('Carnival',    'http://m.youtube.com/watch?v=kIOcWvjKgiw'); });
view04.addEventListener('click', function(e) {loadWebView('Crash',       'http://m.youtube.com/watch?v=OvG8eF9Vqaw'); });
view05.addEventListener('click', function(e) {loadWebView('Derail',      'http://m.youtube.com/watch?v=No4kDIxt8AI'); });
view06.addEventListener('click', function(e) {loadWebView('Estate',      'http://m.youtube.com/watch?v=HFzxTUiPE8Y'); });
view07.addEventListener('click', function(e) {loadWebView('Favela',      'http://m.youtube.com/watch?v=AUocVIu1ptI'); });
view08.addEventListener('click', function(e) {loadWebView('Fuel',        'http://m.youtube.com/watch?v=FFMCKIqNebU'); });
view09.addEventListener('click', function(e) {loadWebView('Highrise',    'http://m.youtube.com/watch?v=PGCEtpsH7gA'); });
view10.addEventListener('click', function(e) {loadWebView('Invasion',    'http://m.youtube.com/watch?v=5IYPbpwxOBA'); });
view11.addEventListener('click', function(e) {loadWebView('Karachi',     'http://m.youtube.com/watch?v=N55f53bsT-0'); });
view12.addEventListener('click', function(e) {loadWebView('Overgrown',   'http://m.youtube.com/watch?v=CWh9gkn17y0'); });
view13.addEventListener('click', function(e) {loadWebView('Quarry',      'http://m.youtube.com/watch?v=gLhSFHpqdQI'); });
view14.addEventListener('click', function(e) {loadWebView('Rundown',     'http://m.youtube.com/watch?v=VMAJ0tRzT1k'); });
view15.addEventListener('click', function(e) {loadWebView('Rust',        'http://m.youtube.com/watch?v=rQC_PrOfKHo'); });
view16.addEventListener('click', function(e) {loadWebView('Salvage',     'http://m.youtube.com/watch?v=Opg18TQYNyo'); });
view17.addEventListener('click', function(e) {loadWebView('Scrapyard',   'http://m.youtube.com/watch?v=Tne6XL0bV9k'); });
view18.addEventListener('click', function(e) {loadWebView('Skidrow',     'http://m.youtube.com/watch?v=Kg_5CBzgyrE'); });
view19.addEventListener('click', function(e) {loadWebView('Storm',       'http://m.youtube.com/watch?v=3stfoQNjhZE'); });
view20.addEventListener('click', function(e) {loadWebView('Strike',      'http://m.youtube.com/watch?v=guslxnEZURQ'); });
view21.addEventListener('click', function(e) {loadWebView('Sub Base',    'http://m.youtube.com/watch?v=xnS3sccUnM0'); });
view22.addEventListener('click', function(e) {loadWebView('Terminal',    'http://m.youtube.com/watch?v=ZpdSK-Lbfyw'); });
view23.addEventListener('click', function(e) {loadWebView('Trailer Park','http://m.youtube.com/watch?v=LIWbjhhAv8Q'); });
view24.addEventListener('click', function(e) {loadWebView('Underpass',   'http://m.youtube.com/watch?v=zLpWn-_5yak'); });
view25.addEventListener('click', function(e) {loadWebView('Vacant',      'http://m.youtube.com/watch?v=L2Im0-SAXwc'); });
view26.addEventListener('click', function(e) {loadWebView('Wasteland',   'http://m.youtube.com/watch?v=sKwxwQ2nICg'); });

view00.add(label00);

view01.add(label01);
view02.add(label02);
view03.add(label03);
view04.add(label04);
view05.add(label05);
view06.add(label06);
view07.add(label07);
view08.add(label08);
view09.add(label09);
view10.add(label10);
view11.add(label11);
view12.add(label12);
view13.add(label13);
view14.add(label14);
view15.add(label15);
view16.add(label16);
view17.add(label17);
view18.add(label18);
view19.add(label19);
view20.add(label20);
view21.add(label21);
view22.add(label22);
view23.add(label23);
view24.add(label24);
view25.add(label25);
view26.add(label26);

scrollView.add(view00);

scrollView.add(view01);
scrollView.add(view02);
scrollView.add(view03);
scrollView.add(view04);
scrollView.add(view05);
scrollView.add(view06);
scrollView.add(view07);
scrollView.add(view08);
scrollView.add(view09);
scrollView.add(view10);
scrollView.add(view11);
scrollView.add(view12);
scrollView.add(view13);
scrollView.add(view14);
scrollView.add(view15);
scrollView.add(view16);
scrollView.add(view17);
scrollView.add(view18);
scrollView.add(view19);
scrollView.add(view20);
scrollView.add(view21);
scrollView.add(view22);
scrollView.add(view23);
scrollView.add(view24);
scrollView.add(view25);
scrollView.add(view26);

if (!Titanium.App.tabBarVisible) {

	var mapButton = Titanium.UI.createButton({
		title: 'Maps'
	});
	win.setRightNavButton(mapButton);

	mapButton.addEventListener('click',function()
	{
		tabGroup.setActiveTab(Titanium.App.tabBarTacticPos);
	});

}

win.add(scrollView);
