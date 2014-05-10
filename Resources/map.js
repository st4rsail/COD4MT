var win = Titanium.UI.currentWindow;

// use toggleTabBar() function to hide or show tabbar
// Titanium.include("toggle_tab_bar.js");

// toggleTabBar('hide');

var scrollView = Titanium.UI.createScrollView({
	contentWidth:'auto',
	contentHeight:'auto',
	top:0,
	bottom:0,
	backgroundColor:'#000000',
	// backgroundImage:'images/filler.png',
	contentOffset : {x: 240, y: 275},
	showVerticalScrollIndicator:true,
	showHorizontalScrollIndicator:true,
	zoomScale:1,
	maxZoomScale:2,
	minZoomScale:0.4
});

var view = Titanium.UI.createView({
	// borderRadius:30,
	width:'auto',
	height:'auto',
	top:60
});

var mapImage = Titanium.UI.createImageView({
	image: win.mapImage,
	width: 800,
	height: 800,
	canScale: true
});

view.add(mapImage);
scrollView.add(view);
win.add(scrollView);

var zoomButton = Titanium.UI.createButtonBar({
	labels:['zoom', 'fit'],
	top:50,
	style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
	height:25,
	width:100
});

win.setRightNavButton(zoomButton);

zoomButton.addEventListener('click',function(e){
	if (e.index == 0)
	{
		scrollView.zoomScale = 1;
		// toggleTabBar('hide');
	}
	else
	{
		scrollView.zoomScale = 0.4;
		// toggleTabBar('show');
	}
	// label.text = "Scale: " + scrollView.scale; --> what is this for??
});

var zoomState = 0; // default state is zoomed
view.addEventListener('doubletap', function(){
	if (zoomState == 0) {
		// if zoomed, then shrink
		scrollView.zoomScale = 0.4;
		zoomState = 1;
	} else {
		// else if not zoomed, then zoom
		scrollView.zoomScale = 1;
		zoomState = 0;
	}
});

// scrollView.zoomScale = 0.52; --> this does work but canvas area is way huge
								// and image is small in the center, so commented for now
