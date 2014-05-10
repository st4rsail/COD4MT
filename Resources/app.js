// Globals
// Titanium.App.freeware = false;
// Titanium.App.adware = false;

if (Titanium.Platform.name == 'iPhone OS') {
	Titanium.UI.setBackgroundColor('#fff');
} else {
	Titanium.UI.setBackgroundColor('#000');
}

var tabGroup = Titanium.UI.createTabGroup();

var mapWin = Titanium.UI.createWindow({
	titleImage: 'images/title.png',
	backgroundImage: 'images/map-bg.jpg',
	title: 'Maps'
});

var mapTab = Titanium.UI.createTab({
	icon: 'images/tabs/world.png',
	title: 'Maps',
	window: mapWin
});

var videoWin = Titanium.UI.createWindow({
	url: 'youtube.js',
	titleImage: 'images/title.png',
	title: 'Maps'
});

var videoTab = Titanium.UI.createTab({
	icon: 'images/tabs/clapboard.png',
	title: 'Videos',
	window: videoWin
});

var tacticWin = Titanium.UI.createWindow({
	url: 'tactic_list.js',
	titleImage: 'images/title.png',
	backgroundImage: 'images/tactic-bg.jpg',
	title: 'Maps'
});

var tacticTab = Titanium.UI.createTab({
	icon: 'images/tabs/briefcase.png',
	title: 'Tactics',
	window: tacticWin
});

var aboutWin = Titanium.UI.createWindow({
	url: 'about.js',
	titleImage: 'images/title.png',
	backgroundImage: 'images/about-bg.jpg',
	title: 'MW2 Map Tactics'
});

var aboutTab = Titanium.UI.createTab({
	icon: 'images/tabs/speechmedia.png',
	title: 'About',
	window: aboutWin
});

if (Titanium.Platform.name == 'iPhone OS') {
	mapWin.backgroundColor = '#fff';
	videoWin.backgroundColor = '#fff';
	tacticWin.backgroundColor = '#fff';
	aboutWin.backgroundColor = '#fff';
} else {
	mapWin.backgroundColor = '#000';
	videoWin.backgroundColor = '#000';
	tacticWin.backgroundColor = '#000';
	aboutWin.backgroundColor = '#000';
}

var data = [
	{title: 'Ambush'    , hasChild: true, leftImage: 'images/tiny/ambush.png'    , map: 'images/maps/ambush.jpg'   },
	{title: 'Backlot'   , hasChild: true, leftImage: 'images/tiny/backlot.png'   , map: 'images/maps/backlot.jpg'  },
	{title: 'Bloc'      , hasChild: true, leftImage: 'images/tiny/bloc.png'      , map: 'images/maps/bloc.jpg'     },
	{title: 'Bog'       , hasChild: true, leftImage: 'images/tiny/bog.png'       , map: 'images/maps/bog.jpg'      },
	{title: 'Countdown' , hasChild: true, leftImage: 'images/tiny/countdown.png' , map: 'images/maps/countdown.jpg'},
	{title: 'Crash'     , hasChild: true, leftImage: 'images/tiny/crash.png'     , map: 'images/maps/crash.jpg'    },
	{title: 'Crossfire' , hasChild: true, leftImage: 'images/tiny/crossfire.png' , map: 'images/maps/crossfire.jpg'},
	{title: 'District'  , hasChild: true, leftImage: 'images/tiny/district.png'  , map: 'images/maps/district.jpg' },
	{title: 'Downpour'  , hasChild: true, leftImage: 'images/tiny/downpour.png'  , map: 'images/maps/downpour.jpg' },
	{title: 'Overgrown' , hasChild: true, leftImage: 'images/tiny/overgrown.png' , map: 'images/maps/overgrown.jpg'},
	{title: 'Pipeline'  , hasChild: true, leftImage: 'images/tiny/pipeline.png'  , map: 'images/maps/pipeline.jpg' },
	{title: 'Shipment'  , hasChild: true, leftImage: 'images/tiny/shipment.png'  , map: 'images/maps/shipment.jpg' },
	{title: 'Showdown'  , hasChild: true, leftImage: 'images/tiny/showdown.png'  , map: 'images/maps/showdown.jpg' },
	{title: 'Strike'    , hasChild: true, leftImage: 'images/tiny/strike.png'    , map: 'images/maps/strike.jpg'   },
	{title: 'Vacant'    , hasChild: true, leftImage: 'images/tiny/vacant.png'    , map: 'images/maps/vacant.jpg'   },
	{title: 'Wetwork'   , hasChild: true, leftImage: 'images/tiny/wetwork.png'   , map: 'images/maps/wetwork.jpg'  },
	{title: 'Broadcast' , hasChild: true, leftImage: 'images/tiny/broadcast.png' , map: 'images/maps/broadcast.jpg', header:'Variety Map Pack'},
	{title: 'Chinatown' , hasChild: true, leftImage: 'images/tiny/chinatown.png' , map: 'images/maps/chinatown.jpg'},
	{title: 'Creek'     , hasChild: true, leftImage: 'images/tiny/creek.png'     , map: 'images/maps/creek.jpg'    },
	{title: 'Killhouse' , hasChild: true, leftImage: 'images/tiny/killhouse.png' , map: 'images/maps/killhouse.jpg'}
];

var tableView = Titanium.UI.createTableView({
	data: data,
	backgroundColor: 'transparent'
});

function loadWebView(url, title) {
	var mapView = Titanium.UI.createWebView({url: url});
	var win = Titanium.UI.createWindow({title: title});
	win.add(mapView);
	mapTab.open(win,{animated: true});
}

tableView.addEventListener('click', function(e)
{
	if (e.rowData.map)
	{
		if (Titanium.Platform.name == 'iPhone OS') {
			var win = Titanium.UI.createWindow({
				url: 'map.js',
				title: e.rowData.title,
				mapImage: e.rowData.map
			});
			mapTab.open(win,{animated: true});
		} else {
			// webview for android
			loadWebView(e.rowData.url, e.rowData.title);
		}
	}
});

mapWin.add(tableView);

tabGroup.addTab(mapTab);
tabGroup.addTab(tacticTab);
// tabGroup.addTab(videoTab);
tabGroup.addTab(aboutTab);
tabGroup.open();
tabGroup.setActiveTab(0);

// Rater pop-up
// if (Titanium.Platform.name == 'iPhone OS') {
// 	Ti.include("rater.js");
// 	Rater.init("COD4 Map Tactics","http://phobos.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=383062530");
// 	Rater.run();
// }
