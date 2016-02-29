### RT3 Angular directives

The directives below work as drop-in data sources which inject
specific piece of data from RT3 API into the page scope.
The structure of API responses is described in [RT3 API Specification](https://docs.google.com/document/d/1_aiq2ghNQydT3hu5JPne-qwQTUQHnJn99iqUz58jWxg/edit)

## Setup from scratch

This package can be added to any jekyll-assets-enabled website.

Make sure it's listed in your `package.json`
`npm install jquery angular rt3api angular-rt3app --save`

Then in `_assets/javascripts/application.js` manifest
```js
//= require rt3api/rt3api
//= require angular-rt3app/dist/angular-rt3app
```

Then you need to set up Angular in you website and instantiate `rt3api` object:
```js
angular
  .module('rezTrip', ['rt3app'], function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  })
  .value('rt3api', new Rt3Api({
    portalId: 'your-portal-id',
    hotelId: 'YOUR-HOTEL-ID',
    defaultLocale: 'en',
    defaultCurrency: 'USD'
  }));
```

## Angular Directives

Most directives accept just one argument: the name of variable which
will contain a specific piece of RT3 API information.

### rt3HotelInfo

The example below makes hotel info available in the underlying Angular scope:
```html
<body rt3-hotel-info="hotelInfo" ng-cloak>
  <h1>Welcome to [[hotelInfo.name]]</h1>
</body>
```

### rt3RecentBookings

This directive exposes the number of recent (last 48 hours) bookings into the current scope.
The available fields are explained in [Recent Bookings API](https://docs.google.com/document/d/1wZtZ2C8W3tIgQRzeuUOuG38lt7-hnm_8pLf-hSOY9NM/edit) doc

```html
<div rt3-recent-bookings="recent" ng-cloak>
  There were [[recent.totalBookings]] bookings in the last 48 hours
</div>
```

# TODO - explain these directives

`rt3SearchForm`,
`rt3RoomsBrowser`,
`rt3SpecialRates`,
`rt3RoomDetails`,
`rt3RateShopping`
