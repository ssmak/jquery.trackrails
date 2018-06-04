<h1 align="center">jquery.trackrails</h1>

<h5 align="center">Create track points for a webpage and make the section browsering more easily.</h5>

<br />

## History
This is one of my side projects and it's especially useful on a single infinite web page browsing. Let your user have the best understanding which contents that your page provides and go to each section more easily by tap/click the track point.

<div align="center">
  <a href="https://paypal.me/ssmak">
    <img src="https://img.shields.io/badge/Donate-PayPal-green.svg" alt="PayPal Donation" />
  </a>
  <br />
  <a href="https://paypal.me/ssmak">
    <img src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg" alt="PayPal" />
  </a>
</div>

## Demonstration on CodePen
https://codepen.io/ssmak/pen/zarLVV

## Installation + Use
1. Install to your project as dependency from NPM (https://www.npmjs.com/package/jquery.trackrails)
``` bash
npm install jquery.trackrails --save
```
2. Load the dependency
``` html
<!-- // HEAD -->
<!-- put below stylesheets between the 'head' tag in below order -->
<!-- font awesome 3 - optional, but I use it in my test page. -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<!-- jquery.trackrails, css(default) - provide default rendering -->
<link rel="stylesheet" href="/node_modules/jquery.trackrails/dist/jquery.trackrails.min.css">
<!-- jquery.trackrails, css(overrides) - you can overrides any styles by your own -->
<link rel="stylesheet" href="/project_root/css/jquery.trackrails.overrides.css">
<!-- // BODY -->
<!-- jquery.trackrails - put below script tag above the close tag of 'body' -->
<script src="/node_modules/jquery.trackrails/dist/jquery.trackrails.js" rails-easing="easeOutExpo" rails-duration="2000"></script>
```
3. Write your page content
``` html
<!-- mock content -->
<div class="section rails" style="background-color:#f00">
  Section-A
</div>
<div class="section rails" rails-title="use title" style="background-color:#0f0">
  Section-2
</div>
<div class="section rails" style="background-color:#00f">
  Section-C
</div>
<div class="section rails" style="background-color:yellow; height:100px">
  Section-D
</div>
<div class="section rails" style="background-color:pink; height:50px">
  Section-E Section-E Section-E
</div>
```
4. Place below tag within the 'body' tag which you want the DOM of jquery.trackrails to create in
``` html
<!-- jquery.trackrails, dom will attach here. If this tag not find, the DOM will append as a child to the 'body' tag -->
<div class="jq-trackrails"></div>
```

## Test
A demo page is located in the /test folder. You can test it with the live reload by using lite-server which can be installed by
``` bash
npm install lite-server -g
cd /project_root && lite-server
```

## License
MIT
