cordova-plugin-brightness
==========================

A cordova plugin for brightness control within android and ios.
Also recently I have added the function for keep screen on.

Installing
======
You may use cordova CLI as follows:

<pre>
cordova plugin add https://github.com/jlsuarezs/cordova-plugin-brightness.git
</pre>

Using
====
The code below can be placed into script tag.

```javascript
		document.addEventListener('deviceready', onDeviceReady);
		function onDeviceReady() {
			window.brightness = cordova.require("cordova.plugin.Brightness.Brightness");
		}
		function setBrightness(value) {
			brightness.setBrightness(value, win, fail);
		}
		function getBrightness() {
			brightness.getBrightness( win, fail);
		}
		function win(status) {
			alert('Message: ' + status);
		}
		function fail(status) {
			alert('Error: ' + status);
		}
```

You may also prevent a sleep (or keep screen on).

```javascript
		// prevents sleep
		brightness.setKeepScreenOn(true);
		// returns normal behavior
		pluginService.brightness.setKeepScreenOn(false);
```
