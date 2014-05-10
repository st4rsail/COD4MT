var win = Titanium.UI.currentWindow;
var tabGroup = win.tabGroup;

var data = [
	{title: 'Ambush'    , hasChild: true, leftImage: 'images/tiny/ambush.png'    , url: 'tactics/ambush.html'   },
	{title: 'Backlot'   , hasChild: true, leftImage: 'images/tiny/backlot.png'   , url: 'tactics/backlot.html'  },
	{title: 'Bloc'      , hasChild: true, leftImage: 'images/tiny/bloc.png'      , url: 'tactics/bloc.html'     },
	{title: 'Bog'       , hasChild: true, leftImage: 'images/tiny/bog.png'       , url: 'tactics/bog.html'      },
	{title: 'Countdown' , hasChild: true, leftImage: 'images/tiny/countdown.png' , url: 'tactics/countdown.html'},
	{title: 'Crash'     , hasChild: true, leftImage: 'images/tiny/crash.png'     , url: 'tactics/crash.html'    },
	{title: 'Crossfire' , hasChild: true, leftImage: 'images/tiny/crossfire.png' , url: 'tactics/crossfire.html'},
	{title: 'District'  , hasChild: true, leftImage: 'images/tiny/district.png'  , url: 'tactics/district.html' },
	{title: 'Downpour'  , hasChild: true, leftImage: 'images/tiny/downpour.png'  , url: 'tactics/downpour.html' },
	{title: 'Overgrown' , hasChild: true, leftImage: 'images/tiny/overgrown.png' , url: 'tactics/overgrown.html'},
	{title: 'Pipeline'  , hasChild: true, leftImage: 'images/tiny/pipeline.png'  , url: 'tactics/pipeline.html' },
	{title: 'Shipment'  , hasChild: true, leftImage: 'images/tiny/shipment.png'  , url: 'tactics/shipment.html' },
	{title: 'Showdown'  , hasChild: true, leftImage: 'images/tiny/showdown.png'  , url: 'tactics/showdown.html' },
	{title: 'Strike'    , hasChild: true, leftImage: 'images/tiny/strike.png'    , url: 'tactics/strike.html'   },
	{title: 'Vacant'    , hasChild: true, leftImage: 'images/tiny/vacant.png'    , url: 'tactics/vacant.html'   },
	{title: 'Wet Work'   , hasChild: true, leftImage: 'images/tiny/wetwork.png'   , url: 'tactics/wetwork.html'  },
	{title: 'Broadcast' , hasChild: true, leftImage: 'images/tiny/broadcast.png' , url: 'tactics/broadcast.html', header:'Variety Map Pack'},
	{title: 'Chinatown' , hasChild: true, leftImage: 'images/tiny/chinatown.png' , url: 'tactics/chinatown.html'},
	{title: 'Creek'     , hasChild: true, leftImage: 'images/tiny/creek.png'     , url: 'tactics/creek.html'    },
	{title: 'Killhouse' , hasChild: true, leftImage: 'images/tiny/killhouse.png' , url: 'tactics/killhouse.html'}
];

var tableView = Titanium.UI.createTableView({
	data: data,
	backgroundColor: 'transparent'
});

tableView.addEventListener('click', function(e)
{
	var webView = Titanium.UI.createWebView({url: e.rowData.url});
	var win = Titanium.UI.createWindow({title: 'Tactics'});
	win.backgroundImage = 'images/tactic-bg.jpg';
	win.orientationModes = [
		Titanium.UI.PORTRAIT
	];
	webView.backgroundColor = 'transparent';
	win.add(webView);
		
	Titanium.UI.currentTab.open(win,{animated: true});
});

win.add(tableView);
