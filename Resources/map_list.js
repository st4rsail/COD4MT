var win = Titanium.UI.currentWindow;
var tabGroup = win.tabGroup;

var data = [
	{title: 'Ambush'    , hasChild: true, leftImage: 'images/tiny/ambush.png'    , map: 'images/maps/ambush.png'   },
	{title: 'Backlot'   , hasChild: true, leftImage: 'images/tiny/backlot.png'   , map: 'images/maps/backlot.png'  },
	{title: 'Bloc'      , hasChild: true, leftImage: 'images/tiny/bloc.png'      , map: 'images/maps/bloc.png'     },
	{title: 'Bog'       , hasChild: true, leftImage: 'images/tiny/bog.png'       , map: 'images/maps/bog.png'      },
	{title: 'Countdown' , hasChild: true, leftImage: 'images/tiny/countdown.png' , map: 'images/maps/countdown.png'},
	{title: 'Crash'     , hasChild: true, leftImage: 'images/tiny/crash.png'     , map: 'images/maps/crash.png'    },
	{title: 'Crossfire' , hasChild: true, leftImage: 'images/tiny/crossfire.png' , map: 'images/maps/crossfire.png'},
	{title: 'District'  , hasChild: true, leftImage: 'images/tiny/district.png'  , map: 'images/maps/district.png' },
	{title: 'Downpour'  , hasChild: true, leftImage: 'images/tiny/downpour.png'  , map: 'images/maps/downpour.png' },
	{title: 'Overgrown' , hasChild: true, leftImage: 'images/tiny/overgrown.png' , map: 'images/maps/overgrown.png'},
	{title: 'Pipeline'  , hasChild: true, leftImage: 'images/tiny/pipeline.png'  , map: 'images/maps/pipeline.png' },
	{title: 'Shipment'  , hasChild: true, leftImage: 'images/tiny/shipment.png'  , map: 'images/maps/shipment.png' },
	{title: 'Showdown'  , hasChild: true, leftImage: 'images/tiny/showdown.png'  , map: 'images/maps/showdown.png' },
	{title: 'Strike'    , hasChild: true, leftImage: 'images/tiny/strike.png'    , map: 'images/maps/strike.png'   },
	{title: 'Vacant'    , hasChild: true, leftImage: 'images/tiny/vacant.png'    , map: 'images/maps/vacant.png'   },
	{title: 'Wet Work'   , hasChild: true, leftImage: 'images/tiny/wetwork.png'   , map: 'images/maps/wetwork.png'  },
	{title: 'Broadcast' , hasChild: true, leftImage: 'images/tiny/broadcast.png' , map: 'images/maps/broadcast.png', header:'Variety Map Pack'},
	{title: 'Chinatown' , hasChild: true, leftImage: 'images/tiny/chinatown.png' , map: 'images/maps/chinatown.png'},
	{title: 'Creek'     , hasChild: true, leftImage: 'images/tiny/creek.png'     , map: 'images/maps/creek.png'    },
	{title: 'Killhouse' , hasChild: true, leftImage: 'images/tiny/killhouse.png' , map: 'images/maps/killhouse.png'}
];

var tableView = Titanium.UI.createTableView({
	data: data,
	backgroundColor: 'transparent'
});

function loadWebView(url, title) {
	var mapView = Titanium.UI.createWebView({url: url});
	var win = Titanium.UI.createWindow({title: title});
	win.add(mapView);
	Titanium.UI.currentTab.open(win,{animated: true});
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
			Titanium.UI.currentTab.open(win,{animated: true});
		} else {
			// webview for android
			loadWebView(e.rowData.url, e.rowData.title);
		}
	}
});

win.add(tableView);
Titanium.UI.currentTab.open(win,{animated: true});
