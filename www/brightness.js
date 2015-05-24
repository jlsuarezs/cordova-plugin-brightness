 /*
 * @author Evgeniy Lukovsky updated by jlsuarez 
 * 
 * */

var argscheck = require('cordova/argscheck'),
utils = require('cordova/utils'),
exec = require('cordova/exec');

var Brightness=function(){
};

Brightness.getBrightness = function(successCallback, errorCallback) 
{
	exec(successCallback, errorCallback, "Brightness", "getBrightness", []);
};

Brightness.setBrightness = function(value, successCallback, errorCallback) 
{
	exec(successCallback, errorCallback, "Brightness", "setBrightness", [value]);
};

Brightness.setKeepScreenOn = function(value, successCallback, errorCallback) 
{
	exec(successCallback, errorCallback, "Brightness", "setKeepScreenOn", [value]);
};

module.exports= Brightness;
