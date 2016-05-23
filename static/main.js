var SETTINGS__DEFAULT__ANALYTICS = 'true';

if(typeof(Storage) !== "undefined") {
    var SETTINGS__ANALYTICS = SETTINGS__STORAGE = 'true';
    var SETTINGS__ANALYTICS = localStorage.getItem("SETTINGS__ANALYTICS") || SETTINGS__DEFAULT__ANALYTICS;
} else {
    var SETTINGS__ANALYTICS = SETTINGS__STORAGE = 'false';
    var SETTINGS__ANALYTICS = SETTINGS__ANALYTICS;
}

