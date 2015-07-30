cordova-plugin-brightness
==========================

A cordova plugin for brightness control within android and ios.
Also recently I have added the function for keep screen on.

Thank you @Evgeniy Lukovsky - 
Updated by me! @jlsuarezs

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
		if (window.cordova.plugins.Brightness) {
		      // set Brightness
		      window.cordova.plugins.Brightness.setBrightness(0.3);
		      // prevents sleep
		      window.cordova.plugins.Brightness.setKeepScreenOn(true);
		      // returns normal behavior
		      window.cordova.plugins.Brightness.setKeepScreenOn(false);
		}
```
