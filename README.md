# jquery.trackrails
Provides section/page navigation through a roadmap. You will know where are you and never lose the navigation again!

## Dependencies
Targeted on the ease of use. All the dependecies that're required by jquery.trackrails will be loaded automatically from cdnjs.com on demand. If the dependency haa already loaded like jQuery, the existing version will be used.

## How to use (step-by-step) ?
###1) Install the library by npm
```
npm install jquery.trackrails --save
```

###2) Includes the stylesheet in &lt;header&gt;
```  
<link rel="stylesheet" href="../dist/jquery.trackrails.min.css">
```

###3) Includes the script at the last line of &lt;body&gt;
```
<script src="../dist/jquery.trackrails.js" rails-easing="easeOutExpo" rails-duration="1000"></script>
```  

###4) Construct the track like this:
```
<div class="section rails" style="background-color:#f00">
  Section-A
</div>
<div class="section rails" rails-title="use title" style="background-color:#0f0">
  Section-2
</div>
<div class="section rails" style="background-color:#00f">
  Section-C
</div>
```

## Reference
This plugin is quite simple and you can refer to the test page (~/test/index.html) directly which locates in the test folder.
