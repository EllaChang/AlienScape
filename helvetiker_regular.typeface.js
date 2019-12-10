





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-/YEVWs7BzxfKyUd6zVxjEQcXRWsLbcEjv045Rq8DSoipySmQblhVKxlXLva2GtNd5DhwCxHwW1RM0N9I7S2Vew==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-481a47a96965f6706fb41bae0d14b09a.css" />
  
    <link crossorigin="anonymous" media="all" integrity="sha512-be5r5xuxODmYFmuTS+1cSN8d6F0RzdeVfs0ROLxLMm2LZZBhFIbm/d3qYpjkDPQzCCvtMzJdFLe4whQ7qttY3g==" rel="stylesheet" href="https://github.githubassets.com/assets/github-a642f13ab8f184aef0b02fdcda9ef474.css" />
    
    
    
    


  <meta name="viewport" content="width=device-width">
  
  <title>threejs-text-example/helvetiker_regular.typeface.js at master · ninth-mind/threejs-text-example</title>
    <meta name="description" content="A small Three.js text example using r75. Contribute to ninth-mind/threejs-text-example development by creating an account on GitHub.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta name="twitter:image:src" content="https://avatars1.githubusercontent.com/u/6209618?s=400&amp;v=4" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="ninth-mind/threejs-text-example" /><meta name="twitter:description" content="A small Three.js text example using r75. Contribute to ninth-mind/threejs-text-example development by creating an account on GitHub." />
    <meta property="og:image" content="https://avatars1.githubusercontent.com/u/6209618?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="ninth-mind/threejs-text-example" /><meta property="og:url" content="https://github.com/ninth-mind/threejs-text-example" /><meta property="og:description" content="A small Three.js text example using r75. Contribute to ninth-mind/threejs-text-example development by creating an account on GitHub." />

  <link rel="assets" href="https://github.githubassets.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6NDM4MTYwNjIzOjkxODBiMWU2OGFiNGQzZTdmMzBiNGMxN2JjZDRiNjEyN2YxMjA0OTk3NzI1ZTJjY2RkZTJhYzg1YjU3OTA0NjI=--6c6e75c00e6b4064582ca16d6103b14cae8713b6">
  <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="request-id" content="D59C:32F5:2CD4FD:602A2B:5DDD8273" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

    <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="D59C:32F5:2CD4FD:602A2B:5DDD8273" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-dimension-ga_id" content="" class="js-octo-ga-id" /><meta name="octolytics-dimension-visitor_id" content="1882323600046043670" /><meta name="octolytics-actor-id" content="19506523" /><meta name="octolytics-actor-login" content="EllaChang" /><meta name="octolytics-actor-hash" content="dec3a6014e2c00d74edac38ef2dd1f801f7ce5c14d60cd48a672ed16cc1c8912" />

<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">

  <meta class="js-ga-set" name="userId" content="1065f14548398aa04b8341a818ed35fc">

<meta class="js-ga-set" name="dimension1" content="Logged In">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="EllaChang">

      <meta name="expected-hostname" content="github.com">

      <meta name="js-proxy-site-detection-payload" content="M2Y0NTczNWUyNTc4YmYxZGUwNDc4Y2YwMTdmNjU4ZmVkMDZlMTllNWMwY2EyNTI0ODFkNzkzMjM4ZjAwOTdkZnx7InJlbW90ZV9hZGRyZXNzIjoiMTQ0LjEyMS4zNi4yMTIiLCJyZXF1ZXN0X2lkIjoiRDU5QzozMkY1OjJDRDRGRDo2MDJBMkI6NURERDgyNzMiLCJ0aW1lc3RhbXAiOjE1NzQ3OTc5NDQsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="LAUNCH_PROJECT,MARKETPLACE_FEATURED_BLOG_POSTS,MARKETPLACE_INVOICED_BILLING,MARKETPLACE_SOCIAL_PROOF_CUSTOMERS,MARKETPLACE_TRENDING_SOCIAL_PROOF,MARKETPLACE_RECOMMENDATIONS,MARKETPLACE_PENDING_INSTALLATIONS,NOTIFY_ON_BLOCK,RELATED_ISSUES,GHE_CLOUD_TRIAL">

    <meta name="html-safe-nonce" content="22dffee644325202ded126110437586c9850a6c2">

  <meta http-equiv="x-pjax-version" content="6c4e86d8fbc52112b036aa88feb86f45">
  

      <link href="https://github.com/ninth-mind/threejs-text-example/commits/master.atom" rel="alternate" title="Recent Commits to threejs-text-example:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/ninth-mind/threejs-text-example git https://github.com/ninth-mind/threejs-text-example.git">

  <meta name="octolytics-dimension-user_id" content="6209618" /><meta name="octolytics-dimension-user_login" content="ninth-mind" /><meta name="octolytics-dimension-repository_id" content="55185084" /><meta name="octolytics-dimension-repository_nwo" content="ninth-mind/threejs-text-example" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="55185084" /><meta name="octolytics-dimension-repository_network_root_nwo" content="ninth-mind/threejs-text-example" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/ninth-mind/threejs-text-example/blob/master/helvetiker_regular.typeface.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  <meta name="webauthn-auth-enabled" content="true">

  <meta name="webauthn-registration-enabled" content="true">

  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production emoji-size-boost page-responsive page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <span class="Progress progress-pjax-loader position-fixed width-full js-pjax-loader-bar">
      <span class="progress-pjax-loader-bar top-0 left-0" style="width: 0%;"></span>
    </span>

    
    
    


          <header class="Header js-details-container Details flex-wrap flex-lg-nowrap p-responsive" role="banner">

    <div class="Header-item d-none d-lg-flex">
      <a class="Header-link" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
</a>

    </div>

    <div class="Header-item d-lg-none">
      <button class="Header-link btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
        <svg height="24" class="octicon octicon-three-bars" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
      </button>
    </div>

    <div class="Header-item Header-item--full flex-column flex-lg-row width-full flex-order-2 flex-lg-order-none mr-0 mr-lg-3 mt-3 mt-lg-0 Details-content--hidden">
        <div class="header-search flex-self-stretch flex-lg-self-auto mr-0 mr-lg-3 mb-3 mb-lg-0 scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="55185084" data-scoped-search-url="/ninth-mind/threejs-text-example/search" data-unscoped-search-url="/search" action="/ninth-mind/threejs-text-example/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search or jump to…"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=G5to09rMVIubDP8Ibib6wCnDhwKKZeg6GDgNgcwsKD/WkOCZpzU7xbAkSwkYYwCchzpnzByKv4HYymVvbwQ2OQ=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


    <li class="d-flex flex-justify-center flex-items-center p-0 f5 js-jump-to-suggestion">
      <img src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
    </li>
</ul>

            </div>
      </label>
</form>  </div>
</div>


      <nav class="d-flex flex-column flex-lg-row flex-self-stretch flex-lg-self-auto" aria-label="Global">
    <a class="Header-link d-block d-lg-none py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:dashboard:user" aria-label="Dashboard" href="/dashboard">
      Dashboard
</a>
  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
    Pull requests
</a>
  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
    Issues
</a>
    <div class="mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15">
      <a class="js-selected-navigation-item Header-link" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
        Marketplace
</a>      

    </div>

  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
    Explore
</a>


    <a class="Header-link d-block d-lg-none mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" href="https://github.com/EllaChang">
      <img class="avatar" height="20" width="20" alt="@EllaChang" src="https://avatars3.githubusercontent.com/u/19506523?s=60&amp;v=4" />
      EllaChang
</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="frUkIfUxCcywFGA++XvEQzZ0uTZTBAoDlDFg4ojLkyJX52OdFhVmEjd6MRoVC51CRaCVK/v/p34LKIImJ+45aQ==" />
      <button type="submit" class="Header-link mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15 d-lg-none btn-link d-block width-full text-left" data-ga-click="Header, sign out, icon:logout" style="padding-left: 2px;">
        <svg class="octicon octicon-sign-out v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9V7H8V5h4V3l4 3-4 3zm-2 3H6V3L2 1h8v3h1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v11.38c0 .39.22.73.55.91L6 16.01V13h4c.55 0 1-.45 1-1V8h-1v4z"/></svg>
        Sign out
      </button>
</form></nav>

    </div>

    <div class="Header-item Header-item--full flex-justify-center d-lg-none position-relative">
      <div class="css-truncate css-truncate-target width-fit position-absolute left-0 right-0 text-center">
              <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
    <a class="Header-link" href="/ninth-mind">ninth-mind</a>
    /
    <a class="Header-link" href="/ninth-mind/threejs-text-example">threejs-text-example</a>

</div>
    </div>


    <div class="Header-item mr-0 mr-lg-3 flex-order-1 flex-lg-order-none">
      

    <a aria-label="You have no unread notifications" class="Header-link notification-indicator position-relative tooltipped tooltipped-sw js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:read" data-channel="notification-changed:19506523" href="/notifications">
        <span class="mail-status "></span>
        <svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
    </div>


    <div class="Header-item position-relative d-none d-lg-flex">
      <details class="details-overlay details-reset">
  <summary class="Header-link"
      aria-label="Create new…"
      data-ga-click="Header, create new, icon:add">
    <svg class="octicon octicon-plus" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/></svg> <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw">
    
<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>


  <div role="none" class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="ninth-mind/threejs-text-example">This repository</span>
  </div>
    <a role="menuitem" class="dropdown-item" href="/ninth-mind/threejs-text-example/issues/new" data-ga-click="Header, create new issue" data-skip-pjax>
      New issue
    </a>


  </details-menu>
</details>

    </div>

    <div class="Header-item position-relative mr-0 d-none d-lg-flex">
      
  <details class="details-overlay details-reset js-feature-preview-indicator-container" data-feature-preview-indicator-src="/users/EllaChang/feature_preview/indicator_check.json">

  <summary class="Header-link"
    aria-label="View profile and more"
    data-ga-click="Header, show menu, icon:avatar">
    <img alt="@EllaChang" class="avatar" src="https://avatars0.githubusercontent.com/u/19506523?s=40&amp;v=4" height="20" width="20">
      <span class="feature-preview-indicator js-feature-preview-indicator" hidden></span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw mt-2" style="width: 180px">
    <div class="header-nav-current-user css-truncate"><a role="menuitem" class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="/EllaChang" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">EllaChang</strong></a></div>
    <div role="none" class="dropdown-divider"></div>

      <div class="pl-3 pr-3 f6 user-status-container js-user-status-context pb-1" data-url="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1">
        
<div class="js-user-status-container
    user-status-compact rounded-1 px-2 py-1 mt-2
    border
  " data-team-hovercards-enabled>
  <details class="js-user-status-details details-reset details-overlay details-overlay-dark">
    <summary class="btn-link btn-block link-gray no-underline js-toggle-user-status-edit toggle-user-status-edit "
      role="menuitem" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:6209618,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:19506523,&quot;client_id&quot;:&quot;438262615.1561604630&quot;,&quot;originating_request_id&quot;:&quot;D59C:32F5:2CD4FD:602A2B:5DDD8273&quot;,&quot;originating_url&quot;:&quot;https://github.com/ninth-mind/threejs-text-example/blob/master/helvetiker_regular.typeface.js&quot;,&quot;referrer&quot;:&quot;https://github.com/ninth-mind/threejs-text-example&quot;}}" data-hydro-click-hmac="6cb0bd8bd5a1044eedc8674deb43336f672f88a4da43f19c358d2cb5fa794500">
      <div class="d-flex">
        <div class="f6 lh-condensed user-status-header
          d-inline-block v-align-middle
            user-status-emoji-only-header circle
            pr-2
"
            style="max-width: 29px"
          >
          <div class="user-status-emoji-container flex-shrink-0 mr-1 mt-1 lh-condensed-ultra v-align-bottom" style="">
            <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
          </div>
        </div>
        <div class="
          d-inline-block v-align-middle
          
          
           css-truncate css-truncate-target 
           user-status-message-wrapper f6"
           style="line-height: 20px;" >
          <div class="d-inline-block text-gray-dark v-align-text-top text-left">
              <span class="text-gray ml-2">Set status</span>
          </div>
        </div>
      </div>
    </summary>
    <details-dialog class="details-dialog rounded-1 anim-fade-in fast Box Box--overlay" role="dialog" tabindex="-1">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="position-relative flex-auto js-user-status-form" action="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="NHFvovy5gC2HigovRpB3wMwbKbfoE+mRSnffRZPIuX0gWlBoFxhk4VzlybvdU2ObqPZCEyIhUmAn2xHXAGl++Q==" />
        <div class="Box-header bg-gray border-bottom p-3">
          <button class="Box-btn-octicon js-toggle-user-status-edit btn-octicon float-right" type="reset" aria-label="Close dialog" data-close-dialog>
            <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
          </button>
          <h3 class="Box-title f5 text-bold text-gray-dark">Edit status</h3>
        </div>
        <input type="hidden" name="emoji" class="js-user-status-emoji-field" value="">
        <input type="hidden" name="organization_id" class="js-user-status-org-id-field" value="">
        <div class="px-3 py-2 text-gray-dark">
          <div class="js-characters-remaining-container position-relative mt-2">
            <div class="input-group d-table form-group my-0 js-user-status-form-group">
              <span class="input-group-button d-table-cell v-align-middle" style="width: 1%">
                <button type="button" aria-label="Choose an emoji" class="btn-outline btn js-toggle-user-status-emoji-picker btn-open-emoji-picker p-0">
                  <span class="js-user-status-original-emoji" hidden></span>
                  <span class="js-user-status-custom-emoji"></span>
                  <span class="js-user-status-no-emoji-icon" >
                    <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
                  </span>
                </button>
              </span>
              <text-expander keys=": @" data-mention-url="/autocomplete/user-suggestions" data-emoji-url="/autocomplete/emoji">
                <input
                  type="text"
                  autocomplete="off"
                  data-no-org-url="/autocomplete/user-suggestions"
                  data-org-url="/suggestions?mention_suggester=1"
                  data-maxlength="80"
                  class="d-table-cell width-full form-control js-user-status-message-field js-characters-remaining-field"
                  placeholder="What's happening?"
                  name="message"
                  value=""
                  aria-label="What is your current status?">
              </text-expander>
              <div class="error">Could not update your status, please try again.</div>
            </div>
            <div style="margin-left: 53px" class="my-1 text-small label-characters-remaining js-characters-remaining" data-suffix="remaining" hidden>
              80 remaining
            </div>
          </div>
          <include-fragment class="js-user-status-emoji-picker" data-url="/users/status/emoji"></include-fragment>
          <div class="overflow-auto ml-n3 mr-n3 px-3 border-bottom" style="max-height: 33vh">
            <div class="user-status-suggestions js-user-status-suggestions collapsed overflow-hidden">
              <h4 class="f6 text-normal my-3">Suggestions:</h4>
              <div class="mx-3 mt-2 clearfix">
                  <div class="float-left col-6">
                      <button type="button" value=":palm_tree:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="palm_tree" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png">🌴</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          On vacation
                        </div>
                      </button>
                      <button type="button" value=":face_with_thermometer:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="face_with_thermometer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png">🤒</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Out sick
                        </div>
                      </button>
                  </div>
                  <div class="float-left col-6">
                      <button type="button" value=":house:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="house" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png">🏠</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Working from home
                        </div>
                      </button>
                      <button type="button" value=":dart:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Focusing
                        </div>
                      </button>
                  </div>
              </div>
            </div>
            <div class="user-status-limited-availability-container">
              <div class="form-checkbox my-0">
                <input type="checkbox" name="limited_availability" value="1" class="js-user-status-limited-availability-checkbox" data-default-message="I may be slow to respond." aria-describedby="limited-availability-help-text-truncate-true-compact-true" id="limited-availability-truncate-true-compact-true">
                <label class="d-block f5 text-gray-dark mb-1" for="limited-availability-truncate-true-compact-true">
                  Busy
                </label>
                <p class="note" id="limited-availability-help-text-truncate-true-compact-true">
                  When others mention you, assign you, or request your review,
                  GitHub will let them know that you have limited availability.
                </p>
              </div>
            </div>
          </div>
            

<div class="d-inline-block f5 mr-2 pt-3 pb-2" >
  <div class="d-inline-block mr-1">
    Clear status
  </div>

  <details class="js-user-status-expire-drop-down f6 dropdown details-reset details-overlay d-inline-block mr-2">
    <summary class="f5 btn-link link-gray-dark border px-2 py-1 rounded-1" aria-haspopup="true">
      <div class="js-user-status-expiration-interval-selected d-inline-block v-align-baseline">
        Never
      </div>
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-se pl-0 overflow-auto" style="width: 220px; max-height: 15.5em">
      <li>
        <button type="button" class="btn-link dropdown-item js-user-status-expire-button ws-normal" title="Never">
          <span class="d-inline-block text-bold mb-1">Never</span>
          <div class="f6 lh-condensed">Keep this status until you clear your status or edit your status.</div>
        </button>
      </li>
      <li class="dropdown-divider" role="none"></li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 30 minutes" value="2019-11-26T15:22:24-05:00">
            in 30 minutes
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 1 hour" value="2019-11-26T15:52:24-05:00">
            in 1 hour
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 4 hours" value="2019-11-26T18:52:24-05:00">
            in 4 hours
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="today" value="2019-11-26T23:59:59-05:00">
            today
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="this week" value="2019-12-01T23:59:59-05:00">
            this week
          </button>
        </li>
    </ul>
  </details>
  <input class="js-user-status-expiration-date-input" type="hidden" name="expires_at" value="">
</div>

          <include-fragment class="js-user-status-org-picker" data-url="/users/status/organizations"></include-fragment>
        </div>
        <div class="d-flex flex-items-center flex-justify-between p-3 border-top">
          <button type="submit" disabled class="width-full btn btn-primary mr-2 js-user-status-submit">
            Set status
          </button>
          <button type="button" disabled class="width-full js-clear-user-status-button btn ml-2 ">
            Clear status
          </button>
        </div>
</form>    </details-dialog>
  </details>
</div>

      </div>
      <div role="none" class="dropdown-divider"></div>


    <a role="menuitem" class="dropdown-item" href="/EllaChang" data-ga-click="Header, go to profile, text:your profile">Your profile</a>

    <a role="menuitem" class="dropdown-item" href="/EllaChang?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories">Your repositories</a>

    <a role="menuitem" class="dropdown-item" href="/EllaChang?tab=projects" data-ga-click="Header, go to projects, text:your projects">Your projects</a>

    <a role="menuitem" class="dropdown-item" href="/EllaChang?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">Your stars</a>
      <a role="menuitem" class="dropdown-item" href="https://gist.github.com/mine" data-ga-click="Header, your gists, text:your gists">Your gists</a>





    <div role="none" class="dropdown-divider"></div>
      
<div id="feature-enrollment-toggle" class="hide-sm hide-md feature-preview-details position-relative">
  <button
    type="button"
    class="dropdown-item btn-link"
    role="menuitem"
    data-feature-preview-trigger-url="/users/EllaChang/feature_previews"
    data-feature-preview-close-details="{&quot;event_type&quot;:&quot;feature_preview.clicks.close_modal&quot;,&quot;payload&quot;:{&quot;client_id&quot;:&quot;438262615.1561604630&quot;,&quot;originating_request_id&quot;:&quot;D59C:32F5:2CD4FD:602A2B:5DDD8273&quot;,&quot;originating_url&quot;:&quot;https://github.com/ninth-mind/threejs-text-example/blob/master/helvetiker_regular.typeface.js&quot;,&quot;referrer&quot;:&quot;https://github.com/ninth-mind/threejs-text-example&quot;,&quot;user_id&quot;:19506523}}"
    data-feature-preview-close-hmac="e9f7f8eee0c94780b7b270510e75b6f1ea5794d88e59d1c2f31ab70049ec4648"
    data-hydro-click="{&quot;event_type&quot;:&quot;feature_preview.clicks.open_modal&quot;,&quot;payload&quot;:{&quot;link_location&quot;:&quot;user_dropdown&quot;,&quot;client_id&quot;:&quot;438262615.1561604630&quot;,&quot;originating_request_id&quot;:&quot;D59C:32F5:2CD4FD:602A2B:5DDD8273&quot;,&quot;originating_url&quot;:&quot;https://github.com/ninth-mind/threejs-text-example/blob/master/helvetiker_regular.typeface.js&quot;,&quot;referrer&quot;:&quot;https://github.com/ninth-mind/threejs-text-example&quot;,&quot;user_id&quot;:19506523}}"
    data-hydro-click-hmac="a88b70c21dd845fbbf0dbf8c079d42b999cbd6d1c9396b04f70a5510a147b9a1"
  >
    Feature preview
  </button>
    <span class="feature-preview-indicator js-feature-preview-indicator" hidden></span>
</div>

    <a role="menuitem" class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
    <a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">Settings</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="aPnk9sZieJOJmoK1ACHOv1kymDAJ0Z0y2kO8cD0vyu1Bq6NKJUYXTQ7005HsUZe+Kua0LaEqME9FWl60kgpgpg==" />
      
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" role="menuitem">
        Sign out
      </button>
</form>  </details-menu>
</details>

    </div>

  </header>

      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>


    <div id="js-flash-container">

</div>



  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main  >
      


  











  <div class=" pagehead repohead instapaper_ignore readability-menu experiment-repo-nav pt-0 pt-lg-4 ">
    <div class="repohead-details-container clearfix container-lg p-responsive d-none d-lg-block">

      <ul class="pagehead-actions">




  <li>
    
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" class="clearfix js-social-form js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="TFp3mnVJKEP8kj7mW/Ab2IadZyBt+8ybCXbL807DoFHZx3IvmHRsJUiDt2s86OlmQAyUZa0Ln/K8NrS+G+QjEQ==" />      <input type="hidden" name="repository_id" value="55185084">

      <details class="details-reset details-overlay select-menu float-left">
        <summary class="select-menu-button float-left btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;WATCH_BUTTON&quot;,&quot;repository_id&quot;:55185084,&quot;client_id&quot;:&quot;438262615.1561604630&quot;,&quot;originating_request_id&quot;:&quot;D59C:32F5:2CD4FD:602A2B:5DDD8273&quot;,&quot;originating_url&quot;:&quot;https://github.com/ninth-mind/threejs-text-example/blob/master/helvetiker_regular.typeface.js&quot;,&quot;referrer&quot;:&quot;https://github.com/ninth-mind/threejs-text-example&quot;,&quot;user_id&quot;:19506523}}" data-hydro-click-hmac="057a6349d56e02000fb9f6742d01f36bf62caca8d4f0af956f80589f476e4078" data-ga-click="Repository, click Watch settings, action:blob#show">          <span data-menu-button>
              <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Watch
          </span>
</summary>        <details-menu
          class="select-menu-modal position-absolute mt-5"
          style="z-index: 99;">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
          </div>
          <div class="select-menu-list">
            <button type="submit" name="do" value="included" class="select-menu-item width-full" aria-checked="true" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Not watching</span>
                <span class="description">Be notified only when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Watch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="release_only" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Releases only</span>
                <span class="description">Be notified of new releases, and when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch releases
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="subscribed" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Watching</span>
                <span class="description">Be notified of all conversations.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="ignore" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Ignoring</span>
                <span class="description">Never be notified.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-mute v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                  Stop ignoring
                </span>
              </div>
            </button>
          </div>
        </details-menu>
      </details>
        <a class="social-count js-social-count"
          href="/ninth-mind/threejs-text-example/watchers"
          aria-label="1 user is watching this repository">
          1
        </a>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="starred js-social-form" action="/ninth-mind/threejs-text-example/unstar" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="0ZYNApk/IfBegyDAR39Aowg5J8nyrwwayxjCq8IslSdG0MYSL0GXIlZ9Jor0v/2+T/LOtuimNJZkO3U5pNRVcg==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Unstar ninth-mind/threejs-text-example" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;UNSTAR_BUTTON&quot;,&quot;repository_id&quot;:55185084,&quot;client_id&quot;:&quot;438262615.1561604630&quot;,&quot;originating_request_id&quot;:&quot;D59C:32F5:2CD4FD:602A2B:5DDD8273&quot;,&quot;originating_url&quot;:&quot;https://github.com/ninth-mind/threejs-text-example/blob/master/helvetiker_regular.typeface.js&quot;,&quot;referrer&quot;:&quot;https://github.com/ninth-mind/threejs-text-example&quot;,&quot;user_id&quot;:19506523}}" data-hydro-click-hmac="44f2d195b5abfb75fd863bac162a45684cbfe2d0b8521d2555f3685cb184adcc" data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Unstar
</button>        <a class="social-count js-social-count" href="/ninth-mind/threejs-text-example/stargazers"
           aria-label="2 users starred this repository">
           2
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="unstarred js-social-form" action="/ninth-mind/threejs-text-example/star" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="7NQ2dtwejzLvC0jxWsGGbSSjfLofGia3fM00RW4+ss+CbJnYXdX2cLxA7EfpgQ6AP6zqfaIHLNfNTXY5sGqbzg==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Star ninth-mind/threejs-text-example" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;STAR_BUTTON&quot;,&quot;repository_id&quot;:55185084,&quot;client_id&quot;:&quot;438262615.1561604630&quot;,&quot;originating_request_id&quot;:&quot;D59C:32F5:2CD4FD:602A2B:5DDD8273&quot;,&quot;originating_url&quot;:&quot;https://github.com/ninth-mind/threejs-text-example/blob/master/helvetiker_regular.typeface.js&quot;,&quot;referrer&quot;:&quot;https://github.com/ninth-mind/threejs-text-example&quot;,&quot;user_id&quot;:19506523}}" data-hydro-click-hmac="e5aa7c604c2af66c8720ea7caa78714b96f7e0e5506d657033634d3c2532f062" data-ga-click="Repository, click star button, action:blob#show; text:Star">        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Star
</button>        <a class="social-count js-social-count" href="/ninth-mind/threejs-text-example/stargazers"
           aria-label="2 users starred this repository">
          2
        </a>
</form>  </div>

  </li>

  <li>
          <details class="details-reset details-overlay details-overlay-dark d-inline-block float-left">
            <summary class="btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FORK_BUTTON&quot;,&quot;repository_id&quot;:55185084,&quot;client_id&quot;:&quot;438262615.1561604630&quot;,&quot;originating_request_id&quot;:&quot;D59C:32F5:2CD4FD:602A2B:5DDD8273&quot;,&quot;originating_url&quot;:&quot;https://github.com/ninth-mind/threejs-text-example/blob/master/helvetiker_regular.typeface.js&quot;,&quot;referrer&quot;:&quot;https://github.com/ninth-mind/threejs-text-example&quot;,&quot;user_id&quot;:19506523}}" data-hydro-click-hmac="024698e7a5c69a56e660328b968e3d9525bc79d66d0b168652bb97a146a97b65" data-ga-click="Repository, show fork modal, action:blob#show; text:Fork" title="Fork your own copy of ninth-mind/threejs-text-example to your account">              <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
</summary>            <details-dialog
              class="anim-fade-in fast Box Box--overlay d-flex flex-column"
              src="/ninth-mind/threejs-text-example/fork?fragment=1"
              preload>
              <div class="Box-header">
                <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
                  <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
                </button>
                <h3 class="Box-title">Fork threejs-text-example</h3>
              </div>
              <div class="overflow-auto text-center">
                <include-fragment>
                  <div class="octocat-spinner my-3" aria-label="Loading..."></div>
                  <p class="f5 text-gray">If this dialog fails to load, you can visit <a href="/ninth-mind/threejs-text-example/fork">the fork page</a> directly.</p>
                </include-fragment>
              </div>
            </details-dialog>
          </details>

    <a href="/ninth-mind/threejs-text-example/network/members" class="social-count"
       aria-label="6 users forked this repository">
      6
    </a>
  </li>
</ul>

      <h1 class="public ">
    <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/users/ninth-mind/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ninth-mind">ninth-mind</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/ninth-mind/threejs-text-example">threejs-text-example</a></strong>
  

</h1>

    </div>
    
<nav class="hx_reponav reponav js-repo-nav js-sidenav-container-pjax container-lg p-responsive d-none d-lg-block"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /ninth-mind/threejs-text-example" href="/ninth-mind/threejs-text-example">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /ninth-mind/threejs-text-example/issues" href="/ninth-mind/threejs-text-example/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">1</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" data-skip-pjax="true" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /ninth-mind/threejs-text-example/pulls" href="/ninth-mind/threejs-text-example/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0010 15a1.993 1.993 0 001-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v6.56A1.993 1.993 0 002 15a1.993 1.993 0 001-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement" class="position-relative float-left">
      <a data-hotkey="g w" data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="repo_actions /ninth-mind/threejs-text-example/actions" href="/ninth-mind/threejs-text-example/actions">
        <svg class="octicon octicon-play" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 8A7 7 0 110 8a7 7 0 0114 0zm-8.223 3.482l4.599-3.066a.5.5 0 000-.832L5.777 4.518A.5.5 0 005 4.934v6.132a.5.5 0 00.777.416z"/></svg>
        Actions
</a>
    </span>

    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /ninth-mind/threejs-text-example/projects" href="/ninth-mind/threejs-text-example/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>

    <a class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /ninth-mind/threejs-text-example/wiki" href="/ninth-mind/threejs-text-example/wiki">
      <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>
    <a data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy code_scanning /ninth-mind/threejs-text-example/security/advisories" href="/ninth-mind/threejs-text-example/security/advisories">
      <svg class="octicon octicon-shield" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 2l7-2 7 2v6.02C14 12.69 8.69 16 7 16c-1.69 0-7-3.31-7-7.98V2zm1 .75L7 1l6 1.75v5.268C13 12.104 8.449 15 7 15c-1.449 0-6-2.896-6-6.982V2.75zm1 .75L7 2v12c-1.207 0-5-2.482-5-5.985V3.5z"/></svg>
      Security
</a>
    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse people /ninth-mind/threejs-text-example/pulse" href="/ninth-mind/threejs-text-example/pulse">
      <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
      Insights
</a>

</nav>

  <div class="reponav-wrapper reponav-small d-lg-none">
  <nav class="reponav js-reponav text-center no-wrap"
       itemscope
       itemtype="http://schema.org/BreadcrumbList">

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a class="js-selected-navigation-item selected reponav-item" itemprop="url" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /ninth-mind/threejs-text-example" href="/ninth-mind/threejs-text-example">
        <span itemprop="name">Code</span>
        <meta itemprop="position" content="1">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /ninth-mind/threejs-text-example/issues" href="/ninth-mind/threejs-text-example/issues">
          <span itemprop="name">Issues</span>
          <span class="Counter">1</span>
          <meta itemprop="position" content="2">
</a>      </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /ninth-mind/threejs-text-example/pulls" href="/ninth-mind/threejs-text-example/pulls">
        <span itemprop="name">Pull requests</span>
        <span class="Counter">0</span>
        <meta itemprop="position" content="3">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /ninth-mind/threejs-text-example/projects" href="/ninth-mind/threejs-text-example/projects">
          <span itemprop="name">Projects</span>
          <span class="Counter">0</span>
          <meta itemprop="position" content="4">
</a>      </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_wiki /ninth-mind/threejs-text-example/wiki" href="/ninth-mind/threejs-text-example/wiki">
          <span itemprop="name">Wiki</span>
          <meta itemprop="position" content="5">
</a>      </span>

      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy code_scanning /ninth-mind/threejs-text-example/security/advisories" href="/ninth-mind/threejs-text-example/security/advisories">
        <span itemprop="name">Security</span>
        <meta itemprop="position" content="6">
</a>
      <a class="js-selected-navigation-item reponav-item" data-selected-links="pulse /ninth-mind/threejs-text-example/pulse" href="/ninth-mind/threejs-text-example/pulse">
        Pulse
</a>
      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="community /ninth-mind/threejs-text-example/community" href="/ninth-mind/threejs-text-example/community">
          Community
</a>      </span>

  </nav>
</div>


  </div>
<div class="container-lg clearfix new-discussion-timeline experiment-repo-nav  p-responsive">
  <div class="repository-content ">

    
    


  


    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/ninth-mind/threejs-text-example/blob/c3704b070f72e3bc05751aa1ae5b9770ced9f8bd/helvetiker_regular.typeface.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v21:6296a49c4785f8605737566ebbb342a5 -->
      

    <div class="d-flex flex-items-start flex-shrink-0 pb-3 flex-column flex-md-row">
      <span class="d-flex flex-justify-between width-full width-md-auto">
        
<details class="details-reset details-overlay select-menu branch-select-menu  hx_rsm" id="branch-select-menu">
  <summary class="btn btn-sm select-menu-button css-truncate"
           data-hotkey="w"
           title="Switch branches or tags">
    <i>Branch:</i>
    <span class="css-truncate-target" data-menu-button>master</span>
  </summary>

  <details-menu class="select-menu-modal hx_rsm-modal position-absolute" style="z-index: 99;" src="/ninth-mind/threejs-text-example/ref-list/master/helvetiker_regular.typeface.js?source_action=show&amp;source_controller=blob" preload>
    <include-fragment class="select-menu-loading-overlay anim-pulse">
      <svg height="32" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/></svg>
    </include-fragment>
  </details-menu>
</details>

        <div class="BtnGroup flex-shrink-0 d-md-none">
          <a href="/ninth-mind/threejs-text-example/find/master"
                class="js-pjax-capture-input btn btn-sm BtnGroup-item"
                data-pjax
                data-hotkey="t">
            Find file
          </a>
          <clipboard-copy value="helvetiker_regular.typeface.js" class="btn btn-sm BtnGroup-item">
            Copy path
          </clipboard-copy>
        </div>
      </span>
      <h2 id="blob-path" class="breadcrumb flex-auto min-width-0 text-normal flex-md-self-center ml-md-2 mr-md-3 my-2 my-md-0">
        <span class="js-repo-root text-bold"><span class="js-path-segment"><a data-pjax="true" href="/ninth-mind/threejs-text-example"><span>threejs-text-example</span></a></span></span><span class="separator">/</span><strong class="final-path">helvetiker_regular.typeface.js</strong>
      </h2>

      <div class="BtnGroup flex-shrink-0 d-none d-md-inline-block">
        <a href="/ninth-mind/threejs-text-example/find/master"
              class="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy value="helvetiker_regular.typeface.js" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
    </div>

    



    
  <div class="Box Box--condensed d-flex flex-column flex-shrink-0">
      <div class="Box-body d-flex flex-justify-between bg-blue-light flex-column flex-md-row flex-items-start flex-md-items-center">
        <span class="pr-md-4 f6">
          <img class="avatar" width="20" height="20" alt="" src="https://camo.githubusercontent.com/71c568e66f59f79395bad4ccf8d559d443f283e4/68747470733a2f2f302e67726176617461722e636f6d2f6176617461722f35313564646430373232376332633963323136666161313132663163663665393f643d68747470732533412532462532466769746875622e6769746875626173736574732e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d313430" data-canonical-src="https://0.gravatar.com/avatar/515ddd07227c2c9c216faa112f1cf6e9?d=https%3A%2F%2Fgithub.githubassets.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=g&amp;s=140" />
          <span class="text-bold link-gray-dark lh-default v-align-middle">Jamie Skinner</span>
            <span class="lh-default v-align-middle">
              <a data-pjax="true" title="initial commit" class="link-gray" href="/ninth-mind/threejs-text-example/commit/c3704b070f72e3bc05751aa1ae5b9770ced9f8bd">initial commit</a>
            </span>
        </span>
        <span class="d-inline-block flex-shrink-0 v-align-bottom f6 mt-2 mt-md-0">
          <a class="pr-2 text-mono link-gray" href="/ninth-mind/threejs-text-example/commit/c3704b070f72e3bc05751aa1ae5b9770ced9f8bd" data-pjax>c3704b0</a>
          <relative-time datetime="2016-03-31T21:48:44Z" class="no-wrap">Mar 31, 2016</relative-time>
        </span>
      </div>

    <div class="Box-body d-flex flex-items-center flex-auto f6 border-bottom-0 flex-wrap" >
      <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark float-left mr-2" id="blob_contributors_box">
        <summary class="btn-link">
          <span><strong>0</strong> contributors</span>
        </summary>
        <details-dialog
          class="Box Box--overlay d-flex flex-column anim-fade-in fast"
          aria-label="Users who have contributed to this file"
          src="/ninth-mind/threejs-text-example/contributors-list/master/helvetiker_regular.typeface.js" preload>
          <div class="Box-header">
            <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
              <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
            </button>
            <h3 class="Box-title">
              Users who have contributed to this file
            </h3>
          </div>
          <include-fragment class="octocat-spinner my-3" aria-label="Loading..."></include-fragment>
        </details-dialog>
      </details>
    </div>
  </div>





    <div class="Box mt-3 position-relative">
      
<div class="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center">
  <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">

      1 lines (1 sloc)
      <span class="file-info-divider"></span>
    82.6 KB
  </div>

  <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/ninth-mind/threejs-text-example/raw/master/helvetiker_regular.typeface.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/ninth-mind/threejs-text-example/blame/master/helvetiker_regular.typeface.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/ninth-mind/threejs-text-example/commits/master/helvetiker_regular.typeface.js">History</a>
    </div>


    <div>
            <a class="btn-octicon tooltipped tooltipped-nw"
               href="x-github-client://openRepo/https://github.com/ninth-mind/threejs-text-example?branch=master&amp;filepath=helvetiker_regular.typeface.js"
               aria-label="Open this file in GitHub Desktop"
               data-ga-click="Repository, open with desktop, type:mac">
                <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
            </a>

            <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/ninth-mind/threejs-text-example/edit/master/helvetiker_regular.typeface.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="B0LeTsmsCDfl5JEaMIuZp0HGcVyzMX3gkdq5ZtAFOHNgeDZdIVAqcEgg8UXE+UmCseG+hmbhsUtfTWs2j+JWhQ==" />
              <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
                aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
                <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 011.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
              </button>
</form>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/ninth-mind/threejs-text-example/delete/master/helvetiker_regular.typeface.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="kcXjwivFJJE8/pW80sSyNvUS9u8mEHdcLSkWMbQVGy03nGcdgo432cw1aW9qIm2J6MieTlGS73QA454yTF6SAA==" />
            <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and delete the file" data-disable-with>
              <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
            </button>
</form>    </div>
  </div>
</div>




      

  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-javascript ">
      
<table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">if (_typeface_js &amp;&amp; _typeface_js.loadFace) _typeface_js.loadFace({&quot;glyphs&quot;:{&quot;0&quot;:{&quot;ha&quot;:926,&quot;x_min&quot;:35,&quot;x_max&quot;:890,&quot;o&quot;:&quot;m 463 807 q 340 763 380 807 q 300 627 300 719 q 309 512 300 568 q 335 401 317 455 q 395 271 362 316 q 463 225 429 225 q 513 250 488 225 q 561 322 538 274 q 609 464 592 387 q 625 619 625 541 q 586 762 625 717 q 463 807 547 807 m 35 647 q 140 944 35 846 q 463 1042 246 1042 q 785 944 680 1042 q 890 647 890 847 q 859 401 890 519 q 766 184 827 284 q 625 25 699 77 q 463 -26 551 -26 q 301 25 374 -26 q 160 184 227 76 q 66 402 98 284 q 35 647 35 521 z &quot;},&quot;1&quot;:{&quot;ha&quot;:926,&quot;x_min&quot;:179,&quot;x_max&quot;:621,&quot;o&quot;:&quot;m 621 0 l 347 0 l 347 794 l 179 794 l 240 1029 l 621 1029 l 621 0 z &quot;},&quot;2&quot;:{&quot;ha&quot;:926,&quot;x_min&quot;:72,&quot;x_max&quot;:799,&quot;o&quot;:&quot;m 189 1029 l 498 1029 q 697 976 629 1029 q 765 821 765 923 q 754 746 765 784 q 721 664 744 707 l 501 240 l 799 240 l 729 0 l 72 0 l 437 705 q 450 733 446 723 q 453 751 453 743 q 439 783 453 771 q 403 794 426 794 l 127 794 l 189 1029 z &quot;},&quot;3&quot;:{&quot;ha&quot;:926,&quot;x_min&quot;:102,&quot;x_max&quot;:817,&quot;o&quot;:&quot;m 121 794 l 182 1029 l 517 1029 q 714 968 642 1029 q 786 802 786 906 q 752 673 786 734 q 647 554 718 612 q 776 406 735 478 q 817 256 817 334 q 782 122 817 180 q 686 33 747 63 q 597 8 649 16 q 416 0 546 0 l 170 0 l 102 240 l 428 240 q 486 256 465 240 q 507 297 507 271 q 451 398 507 339 q 267 546 394 456 q 431 673 381 624 q 481 754 481 722 q 468 783 481 772 q 435 794 455 794 l 121 794 z &quot;},&quot;4&quot;:{&quot;ha&quot;:926,&quot;x_min&quot;:77,&quot;x_max&quot;:851,&quot;o&quot;:&quot;m 768 458 l 851 458 l 851 224 l 768 224 l 768 0 l 504 0 l 504 224 l 77 224 l 77 433 l 336 1029 l 614 1029 l 358 454 l 504 454 l 504 654 l 768 654 l 768 458 z &quot;},&quot;5&quot;:{&quot;ha&quot;:926,&quot;x_min&quot;:167,&quot;x_max&quot;:806,&quot;o&quot;:&quot;m 768 794 l 446 794 l 440 690 l 478 690 q 725 620 644 690 q 806 406 806 549 q 659 104 806 220 q 271 -12 511 -12 l 240 -12 l 167 228 l 195 228 q 438 270 351 228 q 525 386 525 311 q 494 449 525 429 q 396 469 463 469 l 167 469 l 197 1029 l 707 1029 l 768 794 z &quot;},&quot;6&quot;:{&quot;ha&quot;:926,&quot;x_min&quot;:78,&quot;x_max&quot;:857,&quot;o&quot;:&quot;m 710 1029 q 569 835 624 916 q 481 690 514 754 q 760 590 662 681 q 857 342 857 500 q 752 81 857 174 q 456 -12 646 -12 q 176 77 275 -12 q 78 330 78 166 q 158 653 78 477 q 396 1029 239 830 l 710 1029 m 379 471 q 357 410 365 441 q 350 350 350 380 q 381 255 350 288 q 468 221 412 221 q 550 253 519 221 q 582 335 582 284 q 533 435 582 399 q 397 471 485 471 l 379 471 z &quot;},&quot;7&quot;:{&quot;ha&quot;:926,&quot;x_min&quot;:119,&quot;x_max&quot;:821,&quot;o&quot;:&quot;m 180 1029 l 821 1029 l 503 0 l 214 0 l 461 794 l 119 794 l 180 1029 z &quot;},&quot;8&quot;:{&quot;ha&quot;:926,&quot;x_min&quot;:83,&quot;x_max&quot;:842,&quot;o&quot;:&quot;m 463 668 q 536 729 517 707 q 554 778 554 752 q 530 820 554 804 q 463 836 505 836 q 397 820 420 836 q 374 775 374 804 q 393 728 374 751 q 463 668 412 705 m 463 419 q 374 332 396 362 q 351 277 351 302 q 379 224 351 241 q 463 207 406 207 q 547 224 518 207 q 575 273 575 241 q 553 333 575 302 q 463 419 530 363 m 665 547 q 801 407 760 475 q 842 256 842 338 q 814 130 842 186 q 736 40 786 74 q 635 0 694 12 q 463 -12 576 -12 q 291 0 349 -12 q 191 40 233 12 q 112 131 140 74 q 83 256 83 187 q 124 407 83 338 q 260 547 165 475 q 148 672 182 613 q 114 800 114 732 q 200 982 114 922 q 463 1042 286 1042 q 725 982 638 1042 q 812 800 812 922 q 778 673 812 732 q 665 547 743 613 z &quot;},&quot;9&quot;:{&quot;ha&quot;:926,&quot;x_min&quot;:66,&quot;x_max&quot;:857,&quot;o&quot;:&quot;m 469 325 q 171 462 275 361 q 66 715 66 563 q 164 956 66 870 q 436 1042 261 1042 q 754 946 651 1042 q 857 650 857 850 q 797 347 857 491 q 635 119 736 203 q 453 20 555 53 q 224 -12 351 -12 l 160 228 l 168 228 q 354 253 277 228 q 469 325 431 277 m 566 547 q 577 603 573 578 q 581 650 581 627 q 547 768 581 728 q 449 807 514 807 q 374 780 403 807 q 345 708 345 752 q 401 606 345 647 q 566 547 457 565 z &quot;},&quot;ÄŽ&quot;:{&quot;ha&quot;:833,&quot;x_min&quot;:69,&quot;x_max&quot;:764,&quot;o&quot;:&quot;m 69 -245 l 69 979 l 764 979 l 764 -245 l 69 -245 m 147 -168 l 686 -168 l 686 901 l 147 901 l 147 -168 z &quot;},&quot; &quot;:{&quot;ha&quot;:463,&quot;x_min&quot;:0,&quot;x_max&quot;:0,&quot;o&quot;:&quot;&quot;},&quot;!&quot;:{&quot;ha&quot;:469,&quot;x_min&quot;:100,&quot;x_max&quot;:370,&quot;o&quot;:&quot;m 370 298 l 100 298 l 100 1029 l 370 1029 l 370 298 m 370 241 l 370 0 l 100 0 l 100 241 l 370 241 z &quot;},&quot;\&quot;&quot;:{&quot;ha&quot;:484,&quot;x_min&quot;:52,&quot;x_max&quot;:433,&quot;o&quot;:&quot;m 282 975 l 433 975 l 433 595 l 282 595 l 282 975 m 52 975 l 200 975 l 200 595 l 52 595 l 52 975 z &quot;},&quot;#&quot;:{&quot;ha&quot;:1068,&quot;x_min&quot;:16,&quot;x_max&quot;:1053,&quot;o&quot;:&quot;m 479 571 l 424 414 l 590 414 l 646 571 l 479 571 m 464 994 l 633 994 l 539 728 l 699 728 l 794 994 l 964 994 l 869 728 l 1053 728 l 994 571 l 812 571 l 758 415 l 946 415 l 889 258 l 703 258 l 607 -8 l 437 -8 l 532 258 l 372 258 l 277 -8 l 107 -8 l 201 258 l 16 258 l 74 415 l 257 415 l 313 571 l 121 571 l 179 728 l 368 728 l 464 994 z &quot;},&quot;$&quot;:{&quot;ha&quot;:926,&quot;x_min&quot;:134,&quot;x_max&quot;:791,&quot;o&quot;:&quot;m 340 1120 l 562 1120 l 562 1029 l 704 1029 l 766 794 l 493 794 q 453 786 465 794 q 440 760 440 778 q 446 739 440 749 q 465 713 452 728 l 690 461 q 767 348 742 403 q 791 236 791 293 q 731 78 791 139 q 562 3 671 16 l 562 -113 l 340 -113 l 340 0 l 200 0 l 134 235 l 436 235 q 472 244 460 235 q 484 272 484 254 q 478 292 484 281 q 463 314 472 303 l 214 591 q 155 685 176 633 q 135 790 135 737 q 190 948 135 885 q 340 1023 245 1010 l 340 1120 z &quot;},&quot;%&quot;:{&quot;ha&quot;:1010,&quot;x_min&quot;:35,&quot;x_max&quot;:974,&quot;o&quot;:&quot;m 679 267 q 702 170 679 216 q 749 125 725 125 q 795 170 772 125 q 818 268 818 216 q 801 314 818 299 q 749 329 784 329 q 696 314 713 329 q 679 267 679 298 m 524 294 q 577 431 524 388 q 749 473 631 473 q 920 431 866 473 q 974 294 974 388 q 908 67 974 161 q 749 -26 842 -26 q 590 67 656 -26 q 524 294 524 161 m 694 1029 l 844 947 l 273 0 l 129 89 l 694 1029 m 191 836 q 214 739 191 785 q 261 693 237 693 q 308 738 285 693 q 330 836 330 783 q 313 882 330 867 q 261 897 296 897 q 208 882 225 897 q 191 836 191 867 m 35 863 q 89 999 35 956 q 261 1042 143 1042 q 432 999 378 1042 q 486 863 486 956 q 420 636 486 729 q 261 543 354 543 q 101 636 168 543 q 35 863 35 730 z &quot;},&quot;&amp;&quot;:{&quot;ha&quot;:1000,&quot;x_min&quot;:56,&quot;x_max&quot;:926,&quot;o&quot;:&quot;m 772 794 l 437 794 q 405 783 417 794 q 393 751 393 771 q 445 669 393 720 q 606 546 497 619 q 422 399 478 458 q 366 297 366 340 q 387 252 366 269 q 444 235 408 235 l 646 235 l 646 633 l 926 633 l 926 450 l 890 450 l 890 0 l 456 0 q 275 8 326 0 q 186 33 223 16 q 91 122 125 63 q 56 256 56 181 q 96 406 56 334 q 225 554 137 478 q 120 673 155 612 q 86 802 86 734 q 158 968 86 906 q 355 1029 231 1029 l 711 1029 l 772 794 z &quot;},&quot;&#39;&quot;:{&quot;ha&quot;:252,&quot;x_min&quot;:52,&quot;x_max&quot;:200,&quot;o&quot;:&quot;m 52 975 l 200 975 l 200 595 l 52 595 l 52 975 z &quot;},&quot;(&quot;:{&quot;ha&quot;:561,&quot;x_min&quot;:109,&quot;x_max&quot;:521,&quot;o&quot;:&quot;m 519 1048 q 413 745 449 892 q 378 464 378 599 q 414 182 378 330 q 521 -125 450 34 l 290 -233 q 154 110 199 -63 q 109 460 109 282 q 154 830 109 654 q 290 1157 200 1006 l 519 1048 z &quot;},&quot;)&quot;:{&quot;ha&quot;:561,&quot;x_min&quot;:33,&quot;x_max&quot;:444,&quot;o&quot;:&quot;m 35 -125 q 140 177 104 30 q 175 460 175 324 q 139 743 175 595 q 33 1048 104 891 l 264 1157 q 399 815 355 988 q 444 464 444 643 q 399 92 444 268 q 264 -233 353 -83 l 35 -125 z &quot;},&quot;*&quot;:{&quot;ha&quot;:694,&quot;x_min&quot;:37,&quot;x_max&quot;:657,&quot;o&quot;:&quot;m 231 431 l 92 530 l 221 692 l 37 743 l 90 904 l 267 842 l 267 1029 l 428 1029 l 428 842 l 604 903 l 657 742 l 472 693 l 602 530 l 463 433 l 347 600 l 231 431 z &quot;},&quot;+&quot;:{&quot;ha&quot;:1157,&quot;x_min&quot;:172,&quot;x_max&quot;:985,&quot;o&quot;:&quot;m 498 828 l 660 828 l 660 493 l 985 493 l 985 336 l 660 336 l 660 0 l 498 0 l 498 336 l 172 336 l 172 493 l 498 493 l 498 828 z &quot;},&quot;,&quot;:{&quot;ha&quot;:479,&quot;x_min&quot;:18,&quot;x_max&quot;:378,&quot;o&quot;:&quot;m 268 -114 l 18 -114 l 127 243 l 378 243 l 268 -114 z &quot;},&quot;-&quot;:{&quot;ha&quot;:482,&quot;x_min&quot;:35,&quot;x_max&quot;:447,&quot;o&quot;:&quot;m 35 494 l 447 494 l 447 286 l 35 286 l 35 494 z &quot;},&quot;.&quot;:{&quot;ha&quot;:479,&quot;x_min&quot;:119,&quot;x_max&quot;:359,&quot;o&quot;:&quot;m 359 241 l 359 0 l 119 0 l 119 241 l 359 241 z &quot;},&quot;/&quot;:{&quot;ha&quot;:701,&quot;x_min&quot;:-65,&quot;x_max&quot;:729,&quot;o&quot;:&quot;m 578 1029 l 729 937 l 87 -129 l -65 -39 l 578 1029 z &quot;},&quot;:&quot;:{&quot;ha&quot;:479,&quot;x_min&quot;:119,&quot;x_max&quot;:359,&quot;o&quot;:&quot;m 359 711 l 359 471 l 119 471 l 119 711 l 359 711 m 359 241 l 359 0 l 119 0 l 119 241 l 359 241 z &quot;},&quot;;&quot;:{&quot;ha&quot;:479,&quot;x_min&quot;:18,&quot;x_max&quot;:378,&quot;o&quot;:&quot;m 268 -114 l 18 -114 l 127 243 l 378 243 l 268 -114 m 359 711 l 359 471 l 119 471 l 119 711 l 359 711 z &quot;},&quot;&lt;&quot;:{&quot;ha&quot;:1157,&quot;x_min&quot;:179,&quot;x_max&quot;:978,&quot;o&quot;:&quot;m 978 823 l 978 652 l 399 414 l 978 178 l 978 5 l 179 335 l 179 493 l 978 823 z &quot;},&quot;=&quot;:{&quot;ha&quot;:1157,&quot;x_min&quot;:172,&quot;x_max&quot;:985,&quot;o&quot;:&quot;m 172 340 l 985 340 l 985 184 l 172 184 l 172 340 m 172 644 l 985 644 l 985 488 l 172 488 l 172 644 z &quot;},&quot;&gt;&quot;:{&quot;ha&quot;:1157,&quot;x_min&quot;:179,&quot;x_max&quot;:978,&quot;o&quot;:&quot;m 179 823 l 978 493 l 978 335 l 179 5 l 179 178 l 758 414 l 179 652 l 179 823 z &quot;},&quot;?&quot;:{&quot;ha&quot;:753,&quot;x_min&quot;:29,&quot;x_max&quot;:717,&quot;o&quot;:&quot;m 147 339 q 160 423 147 394 q 207 481 174 452 l 350 606 q 409 668 391 640 q 427 724 427 696 q 401 778 427 761 q 319 794 376 794 l 29 794 l 90 1029 l 374 1029 q 626 952 535 1029 q 717 741 717 876 q 673 579 717 656 q 538 424 630 503 l 458 357 q 446 346 454 353 q 418 301 418 322 l 418 298 l 147 298 l 147 339 m 421 0 l 144 0 l 144 241 l 421 241 l 421 0 z &quot;},&quot;@&quot;:{&quot;ha&quot;:1389,&quot;x_min&quot;:56,&quot;x_max&quot;:1335,&quot;o&quot;:&quot;m 787 178 q 702 96 749 122 q 587 71 654 71 q 420 130 477 71 q 363 304 363 189 q 459 578 363 468 q 696 689 555 689 q 787 668 748 689 q 851 606 825 648 l 886 668 l 1026 668 l 922 254 q 922 250 922 253 q 920 232 920 238 q 930 202 920 212 q 962 192 941 192 q 1125 289 1055 192 q 1196 517 1196 387 q 1074 781 1196 679 q 757 884 952 884 q 571 859 656 884 q 415 785 486 834 q 253 598 310 710 q 196 357 196 487 q 334 30 196 152 q 703 -92 471 -92 q 917 -59 814 -92 q 1107 35 1020 -27 l 1173 -57 q 949 -176 1067 -136 q 703 -215 832 -215 q 462 -182 572 -215 q 267 -83 352 -149 q 108 107 160 -1 q 56 353 56 216 q 92 570 56 467 q 197 758 127 673 q 441 947 298 882 q 758 1011 585 1011 q 975 980 873 1011 q 1152 890 1077 949 q 1289 726 1244 818 q 1335 518 1335 633 q 1290 310 1335 405 q 1161 147 1246 215 q 1057 89 1114 109 q 937 69 999 69 q 828 96 865 69 q 787 178 791 123 m 812 472 q 779 551 806 524 q 704 578 751 578 q 581 495 634 578 q 528 301 528 413 q 551 214 528 245 q 618 183 575 183 q 718 223 675 183 q 778 330 762 263 l 812 472 z &quot;},&quot;A&quot;:{&quot;ha&quot;:978,&quot;x_min&quot;:37,&quot;x_max&quot;:926,&quot;o&quot;:&quot;m 699 1029 l 864 1029 l 926 798 l 717 798 q 478 742 566 798 q 345 562 389 686 l 607 562 l 607 755 l 885 755 l 885 0 l 607 0 l 607 325 l 317 325 q 347 160 321 241 q 422 0 374 79 l 203 -144 q 79 110 120 -18 q 37 368 37 238 q 86 645 37 515 q 225 864 136 774 q 426 988 309 947 q 699 1029 543 1029 z &quot;},&quot;B&quot;:{&quot;ha&quot;:983,&quot;x_min&quot;:52,&quot;x_max&quot;:943,&quot;o&quot;:&quot;m 100 755 l 370 755 l 370 235 l 562 235 q 619 249 600 235 q 637 292 637 263 q 573 413 637 350 q 376 547 509 476 q 544 670 493 623 q 595 749 595 717 q 576 786 595 774 q 517 798 557 798 l 52 798 l 114 1029 l 568 1029 q 813 972 731 1029 q 896 800 896 914 q 864 674 896 732 q 764 559 832 616 q 897 422 851 498 q 943 262 943 345 q 914 136 943 191 q 828 47 885 81 q 717 11 785 22 q 497 0 648 0 l 100 0 l 100 755 z &quot;},&quot;C&quot;:{&quot;ha&quot;:778,&quot;x_min&quot;:39,&quot;x_max&quot;:742,&quot;o&quot;:&quot;m 659 0 q 428 34 527 0 q 249 140 329 68 q 94 356 149 230 q 39 624 39 483 q 72 808 39 728 q 170 943 105 889 q 300 1009 224 989 q 498 1029 375 1029 l 659 1029 l 725 794 l 533 794 q 365 750 415 794 q 314 606 314 707 q 423 332 314 433 q 721 232 532 232 l 742 232 l 672 0 l 659 0 z &quot;},&quot;D&quot;:{&quot;ha&quot;:990,&quot;x_min&quot;:52,&quot;x_max&quot;:960,&quot;o&quot;:&quot;m 100 755 l 376 755 l 376 237 q 599 355 512 251 q 686 607 686 459 q 638 748 686 699 q 498 798 589 798 l 52 798 l 114 1029 l 496 1029 q 699 1008 623 1029 q 832 939 774 987 q 927 804 895 886 q 960 618 960 722 q 907 364 960 486 q 758 157 854 243 q 556 37 667 74 q 283 0 446 0 l 100 0 l 100 755 z &quot;},&quot;E&quot;:{&quot;ha&quot;:836,&quot;x_min&quot;:87,&quot;x_max&quot;:811,&quot;o&quot;:&quot;m 777 800 l 364 800 l 364 640 l 741 640 l 672 408 l 364 408 l 364 232 l 811 232 l 737 0 l 87 0 l 87 1029 l 714 1029 l 777 800 z &quot;},&quot;F&quot;:{&quot;ha&quot;:810,&quot;x_min&quot;:86,&quot;x_max&quot;:765,&quot;o&quot;:&quot;m 703 1029 l 765 794 l 364 794 l 364 636 l 729 636 l 663 399 l 364 399 l 364 216 q 368 72 364 121 q 379 0 371 24 l 140 -153 q 99 -34 111 -109 q 86 197 86 42 l 86 1029 l 703 1029 z &quot;},&quot;G&quot;:{&quot;ha&quot;:990,&quot;x_min&quot;:39,&quot;x_max&quot;:903,&quot;o&quot;:&quot;m 721 0 q 440 38 557 0 q 240 155 323 76 q 90 371 142 251 q 39 625 39 491 q 72 809 39 728 q 170 943 105 889 q 300 1009 224 989 q 498 1029 375 1029 l 825 1029 l 890 794 l 533 794 q 365 750 415 794 q 314 604 314 706 q 402 354 314 454 q 636 239 490 254 l 636 476 l 526 476 l 526 704 l 903 704 l 903 0 l 721 0 z &quot;},&quot;H&quot;:{&quot;ha&quot;:1003,&quot;x_min&quot;:86,&quot;x_max&quot;:917,&quot;o&quot;:&quot;m 364 1029 l 364 707 l 640 707 l 640 1029 l 917 1029 l 917 0 l 640 0 l 640 469 l 364 469 l 364 216 q 368 72 364 121 q 379 0 371 24 l 140 -153 q 99 -34 111 -109 q 86 197 86 42 l 86 1029 l 364 1029 z &quot;},&quot;I&quot;:{&quot;ha&quot;:469,&quot;x_min&quot;:93,&quot;x_max&quot;:376,&quot;o&quot;:&quot;m 93 1029 l 376 1029 l 376 0 l 93 0 l 93 1029 z &quot;},&quot;J&quot;:{&quot;ha&quot;:589,&quot;x_min&quot;:-4,&quot;x_max&quot;:494,&quot;o&quot;:&quot;m 218 229 l 218 794 l 11 794 l 78 1029 l 494 1029 l 494 229 q 404 -89 494 31 q 104 -283 313 -208 l -4 -66 q 170 50 121 -15 q 218 229 218 115 z &quot;},&quot;K&quot;:{&quot;ha&quot;:954,&quot;x_min&quot;:86,&quot;x_max&quot;:953,&quot;o&quot;:&quot;m 86 1029 l 364 1029 l 364 575 l 603 1029 l 913 1029 l 660 576 l 953 0 l 631 0 l 364 558 l 364 0 l 86 0 l 86 1029 z &quot;},&quot;L&quot;:{&quot;ha&quot;:736,&quot;x_min&quot;:93,&quot;x_max&quot;:726,&quot;o&quot;:&quot;m 93 1029 l 370 1029 l 370 252 l 726 252 l 656 0 l 93 0 l 93 1029 z &quot;},&quot;M&quot;:{&quot;ha&quot;:1137,&quot;x_min&quot;:90,&quot;x_max&quot;:1048,&quot;o&quot;:&quot;m 90 1029 l 347 1029 l 570 685 l 790 1029 l 1048 1029 l 1048 0 l 775 0 l 786 616 l 570 317 l 353 616 l 364 0 l 90 0 l 90 1029 z &quot;},&quot;N&quot;:{&quot;ha&quot;:1015,&quot;x_min&quot;:93,&quot;x_max&quot;:922,&quot;o&quot;:&quot;m 370 646 l 370 0 l 93 0 l 93 1029 l 357 1029 l 650 656 l 650 1029 l 922 1029 l 922 0 l 650 0 l 650 289 l 370 646 z &quot;},&quot;O&quot;:{&quot;ha&quot;:1013,&quot;x_min&quot;:39,&quot;x_max&quot;:974,&quot;o&quot;:&quot;m 318 624 q 333 479 318 551 q 376 340 348 407 q 437 245 403 279 q 507 212 471 212 q 555 228 531 212 q 596 269 578 243 q 669 432 643 342 q 694 616 694 523 q 653 763 694 721 q 507 804 611 804 q 361 763 404 804 q 318 624 318 722 m 507 1042 q 861 945 748 1042 q 974 640 974 848 q 928 360 974 496 q 803 123 883 223 q 669 11 742 47 q 507 -26 595 -26 q 344 11 418 -26 q 210 123 271 48 q 84 359 129 223 q 39 640 39 496 q 152 944 39 847 q 507 1042 266 1042 z &quot;},&quot;P&quot;:{&quot;ha&quot;:897,&quot;x_min&quot;:52,&quot;x_max&quot;:869,&quot;o&quot;:&quot;m 100 0 l 100 755 l 374 755 l 374 501 q 533 609 477 553 q 590 717 590 666 q 566 777 590 756 q 493 798 541 798 l 52 798 l 114 1029 l 545 1029 q 784 953 698 1029 q 869 742 869 877 q 744 461 869 589 q 374 236 618 333 l 374 0 l 100 0 z &quot;},&quot;Q&quot;:{&quot;ha&quot;:1013,&quot;x_min&quot;:37,&quot;x_max&quot;:987,&quot;o&quot;:&quot;m 917 0 l 581 0 q 403 17 467 0 q 289 72 339 33 q 205 153 243 108 q 140 254 168 199 q 64 452 91 351 q 37 644 37 553 q 152 945 37 848 q 507 1042 266 1042 q 861 945 746 1042 q 975 646 975 848 q 942 438 975 542 q 843 235 908 334 l 987 237 l 917 0 m 507 237 q 555 253 531 237 q 596 294 578 268 q 669 453 642 364 q 696 624 696 543 q 653 763 696 721 q 507 804 610 804 q 360 763 404 804 q 317 625 317 722 q 343 453 317 542 q 416 294 370 365 q 458 253 434 268 q 507 237 482 237 z &quot;},&quot;R&quot;:{&quot;ha&quot;:978,&quot;x_min&quot;:52,&quot;x_max&quot;:1000,&quot;o&quot;:&quot;m 100 755 l 376 755 l 376 0 l 100 0 l 100 755 m 703 441 q 845 205 771 313 q 1000 12 919 98 l 781 -151 q 566 137 665 -21 q 382 488 468 294 q 563 628 505 568 q 621 734 621 688 q 600 781 621 764 q 541 798 579 798 l 52 798 l 114 1029 l 596 1029 q 837 961 751 1029 q 922 768 922 892 q 868 591 922 672 q 703 441 813 511 z &quot;},&quot;S&quot;:{&quot;ha&quot;:733,&quot;x_min&quot;:45,&quot;x_max&quot;:707,&quot;o&quot;:&quot;m 679 794 l 408 794 q 368 786 380 794 q 355 760 355 778 q 361 739 355 749 q 380 713 367 728 l 606 461 q 682 348 657 403 q 707 236 707 293 q 683 131 707 180 q 616 52 659 83 q 522 12 578 24 q 350 0 466 0 l 113 0 l 45 237 l 345 237 q 381 247 368 237 q 393 275 393 256 q 388 294 393 283 q 372 317 382 305 l 126 591 q 68 686 88 635 q 47 790 47 738 q 60 870 47 832 q 96 940 72 908 q 191 1009 132 988 q 366 1029 250 1029 l 616 1029 l 679 794 z &quot;},&quot;T&quot;:{&quot;ha&quot;:851,&quot;x_min&quot;:0,&quot;x_max&quot;:851,&quot;o&quot;:&quot;m 564 0 l 288 0 l 288 790 l 0 790 l 62 1029 l 790 1029 l 851 790 l 564 790 l 564 0 z &quot;},&quot;U&quot;:{&quot;ha&quot;:974,&quot;x_min&quot;:39,&quot;x_max&quot;:888,&quot;o&quot;:&quot;m 888 1029 l 888 0 l 564 0 q 353 9 418 0 q 240 40 288 18 q 90 183 142 84 q 39 429 39 283 q 83 708 39 559 q 220 1029 127 856 l 507 1029 q 363 687 407 823 q 319 450 319 551 q 367 286 319 338 q 517 235 414 235 l 611 235 l 611 1029 l 888 1029 z &quot;},&quot;V&quot;:{&quot;ha&quot;:868,&quot;x_min&quot;:-7,&quot;x_max&quot;:875,&quot;o&quot;:&quot;m -7 1029 l 277 1029 l 433 350 l 593 1029 l 875 1029 l 590 0 l 278 0 l -7 1029 z &quot;},&quot;W&quot;:{&quot;ha&quot;:1367,&quot;x_min&quot;:0,&quot;x_max&quot;:1367,&quot;o&quot;:&quot;m 418 340 l 550 1029 l 817 1029 l 949 334 l 1075 1029 l 1367 1029 l 1096 0 l 806 0 l 684 566 l 561 0 l 269 0 l 0 1029 l 290 1029 l 418 340 z &quot;},&quot;X&quot;:{&quot;ha&quot;:907,&quot;x_min&quot;:0,&quot;x_max&quot;:907,&quot;o&quot;:&quot;m 269 539 l 22 1029 l 328 1029 l 453 729 l 579 1029 l 885 1029 l 636 539 l 907 0 l 602 0 l 453 338 l 306 0 l 0 0 l 269 539 z &quot;},&quot;Y&quot;:{&quot;ha&quot;:856,&quot;x_min&quot;:-9,&quot;x_max&quot;:865,&quot;o&quot;:&quot;m 582 0 l 343 -153 q 301 -34 314 -109 q 289 197 289 42 l 289 408 l -9 1029 l 289 1029 l 428 693 l 566 1029 l 865 1029 l 566 408 l 566 216 q 569 77 566 128 q 582 0 573 25 z &quot;},&quot;Z&quot;:{&quot;ha&quot;:865,&quot;x_min&quot;:39,&quot;x_max&quot;:806,&quot;o&quot;:&quot;m 395 794 l 90 794 l 149 1029 l 806 1029 l 452 237 l 794 237 l 725 0 l 39 0 l 395 794 z &quot;},&quot;[&quot;:{&quot;ha&quot;:562,&quot;x_min&quot;:110,&quot;x_max&quot;:526,&quot;o&quot;:&quot;m 526 804 l 357 804 l 357 64 l 465 64 l 526 -161 l 110 -161 l 110 1029 l 465 1029 l 526 804 z &quot;},&quot;\\&quot;:{&quot;ha&quot;:701,&quot;x_min&quot;:-29,&quot;x_max&quot;:765,&quot;o&quot;:&quot;m -29 937 l 123 1029 l 765 -39 l 614 -129 l -29 937 z &quot;},&quot;]&quot;:{&quot;ha&quot;:562,&quot;x_min&quot;:36,&quot;x_max&quot;:453,&quot;o&quot;:&quot;m 36 64 l 205 64 l 205 804 l 97 804 l 36 1029 l 453 1029 l 453 -161 l 97 -161 l 36 64 z &quot;},&quot;^&quot;:{&quot;ha&quot;:1389,&quot;x_min&quot;:281,&quot;x_max&quot;:1107,&quot;o&quot;:&quot;m 596 991 l 791 991 l 1107 610 l 928 610 l 694 842 l 460 610 l 281 610 l 596 991 z &quot;},&quot;_&quot;:{&quot;ha&quot;:694,&quot;x_min&quot;:0,&quot;x_max&quot;:694,&quot;o&quot;:&quot;m 0 -165 l 694 -165 l 694 -328 l 0 -328 l 0 -165 z &quot;},&quot;`&quot;:{&quot;ha&quot;:694,&quot;x_min&quot;:114,&quot;x_max&quot;:464,&quot;o&quot;:&quot;m 329 1023 l 464 832 l 343 832 l 114 1023 l 329 1023 z &quot;},&quot;a&quot;:{&quot;ha&quot;:794,&quot;x_min&quot;:32,&quot;x_max&quot;:717,&quot;o&quot;:&quot;m 404 566 q 310 538 340 566 q 281 452 281 511 q 333 296 281 363 q 469 208 385 229 l 469 566 l 404 566 m 545 0 q 331 28 417 0 q 180 118 244 56 q 70 280 108 189 q 32 475 32 371 q 114 697 32 622 q 355 772 195 772 l 717 772 l 717 0 l 545 0 z &quot;},&quot;b&quot;:{&quot;ha&quot;:794,&quot;x_min&quot;:78,&quot;x_max&quot;:768,&quot;o&quot;:&quot;m 78 1029 l 325 1029 l 325 772 l 471 772 q 693 701 618 772 q 768 488 768 629 q 726 275 768 372 q 603 107 684 179 q 451 25 538 50 q 229 0 365 0 l 78 0 l 78 1029 m 325 566 l 325 208 q 467 289 413 219 q 521 463 521 359 q 493 540 521 515 q 410 566 466 566 l 325 566 z &quot;},&quot;c&quot;:{&quot;ha&quot;:591,&quot;x_min&quot;:32,&quot;x_max&quot;:570,&quot;o&quot;:&quot;m 498 0 q 319 30 399 0 q 180 118 239 59 q 70 281 107 191 q 32 475 32 371 q 114 697 32 622 q 355 772 195 772 l 503 772 l 562 566 l 404 566 q 310 539 339 566 q 281 453 281 512 q 354 276 281 346 q 541 205 427 205 l 570 205 l 511 0 l 498 0 z &quot;},&quot;d&quot;:{&quot;ha&quot;:794,&quot;x_min&quot;:32,&quot;x_max&quot;:724,&quot;o&quot;:&quot;m 390 566 q 307 539 333 566 q 281 457 281 513 q 335 287 281 356 q 476 208 389 218 l 476 566 l 390 566 m 572 0 q 350 25 437 0 q 197 107 262 50 q 74 275 115 179 q 32 488 32 372 q 107 700 32 628 q 330 772 182 772 l 476 772 l 476 1029 l 724 1029 l 724 0 l 572 0 z &quot;},&quot;e&quot;:{&quot;ha&quot;:733,&quot;x_min&quot;:32,&quot;x_max&quot;:715,&quot;o&quot;:&quot;m 285 364 q 417 454 371 409 q 464 538 464 499 q 444 573 464 561 q 386 586 423 586 q 298 551 330 586 q 265 456 265 516 q 270 411 265 433 q 285 364 275 389 m 513 0 q 323 31 408 0 q 175 122 237 62 q 69 281 106 189 q 32 476 32 372 q 118 708 32 635 q 392 781 205 781 q 640 730 564 781 q 715 568 715 680 q 649 385 715 471 q 446 221 582 299 q 487 209 465 213 q 541 205 510 205 l 675 205 l 618 0 l 513 0 z &quot;},&quot;f&quot;:{&quot;ha&quot;:538,&quot;x_min&quot;:52,&quot;x_max&quot;:534,&quot;o&quot;:&quot;m 106 562 l 52 562 l 52 772 l 106 772 l 106 786 q 160 973 106 916 q 340 1029 214 1029 l 473 1029 l 534 836 l 429 836 q 372 822 388 836 q 357 772 357 808 l 357 765 l 497 765 l 497 562 l 357 562 l 357 0 l 106 0 l 106 562 z &quot;},&quot;g&quot;:{&quot;ha&quot;:798,&quot;x_min&quot;:32,&quot;x_max&quot;:721,&quot;o&quot;:&quot;m 379 566 q 307 538 331 566 q 282 458 282 511 q 335 300 282 364 q 472 229 387 236 l 472 566 l 379 566 m 90 -52 l 427 -52 q 474 -41 461 -52 q 486 3 486 -30 l 486 14 q 157 153 282 25 q 32 476 32 281 q 120 700 32 627 q 392 772 209 772 l 721 772 l 721 16 q 657 -197 721 -137 q 429 -257 593 -257 l 151 -257 l 90 -52 z &quot;},&quot;h&quot;:{&quot;ha&quot;:804,&quot;x_min&quot;:78,&quot;x_max&quot;:729,&quot;o&quot;:&quot;m 78 1029 l 325 1029 l 325 772 l 436 772 q 664 706 600 772 q 729 471 729 640 l 729 0 l 482 0 l 482 435 q 462 543 482 524 q 386 562 441 562 l 325 562 l 325 0 l 78 0 l 78 1029 z &quot;},&quot;i&quot;:{&quot;ha&quot;:418,&quot;x_min&quot;:83,&quot;x_max&quot;:335,&quot;o&quot;:&quot;m 83 1029 l 335 1029 l 335 827 l 83 827 l 83 1029 m 83 772 l 335 772 l 335 0 l 83 0 l 83 772 z &quot;},&quot;j&quot;:{&quot;ha&quot;:428,&quot;x_min&quot;:-29,&quot;x_max&quot;:345,&quot;o&quot;:&quot;m 93 1029 l 345 1029 l 345 827 l 93 827 l 93 1029 m 164 -279 l -29 -144 q 64 3 36 -67 q 93 155 93 73 l 93 772 l 345 772 l 345 182 q 302 -70 345 37 q 164 -279 260 -177 z &quot;},&quot;k&quot;:{&quot;ha&quot;:778,&quot;x_min&quot;:78,&quot;x_max&quot;:778,&quot;o&quot;:&quot;m 78 1029 l 325 1029 l 325 431 l 475 772 l 746 772 l 585 428 l 778 0 l 503 0 l 325 411 l 325 0 l 78 0 l 78 1029 z &quot;},&quot;l&quot;:{&quot;ha&quot;:418,&quot;x_min&quot;:83,&quot;x_max&quot;:335,&quot;o&quot;:&quot;m 83 1029 l 335 1029 l 335 0 l 83 0 l 83 1029 z &quot;},&quot;m&quot;:{&quot;ha&quot;:1154,&quot;x_min&quot;:78,&quot;x_max&quot;:1076,&quot;o&quot;:&quot;m 78 772 l 783 772 q 1011 706 947 772 q 1076 471 1076 640 l 1076 0 l 833 0 l 833 435 q 813 543 833 524 q 737 562 793 562 l 699 562 l 699 0 l 456 0 l 456 562 l 321 562 l 321 0 l 78 0 l 78 772 z &quot;},&quot;n&quot;:{&quot;ha&quot;:804,&quot;x_min&quot;:78,&quot;x_max&quot;:729,&quot;o&quot;:&quot;m 78 772 l 436 772 q 664 706 600 772 q 729 471 729 640 l 729 0 l 482 0 l 482 435 q 462 543 482 524 q 386 562 441 562 l 325 562 l 325 0 l 78 0 l 78 772 z &quot;},&quot;o&quot;:{&quot;ha&quot;:787,&quot;x_min&quot;:32,&quot;x_max&quot;:755,&quot;o&quot;:&quot;m 505 461 q 478 545 505 518 q 395 572 451 572 q 310 545 337 572 q 282 461 282 517 q 290 387 282 427 q 311 307 297 348 q 350 227 330 254 q 395 200 371 200 q 427 215 411 200 q 458 262 443 231 q 493 361 480 309 q 505 461 505 414 m 395 781 q 670 712 585 781 q 755 494 755 644 q 719 275 755 382 q 616 90 682 169 q 515 7 570 35 q 395 -20 460 -20 q 272 8 328 -20 q 171 90 216 35 q 69 273 106 168 q 32 482 32 378 q 116 710 32 640 q 395 781 201 781 z &quot;},&quot;p&quot;:{&quot;ha&quot;:798,&quot;x_min&quot;:78,&quot;x_max&quot;:765,&quot;o&quot;:&quot;m 325 215 q 464 307 412 241 q 515 456 515 372 q 487 536 515 509 q 400 562 458 562 l 325 562 l 325 215 m 78 772 l 375 772 q 524 764 471 772 q 616 737 577 756 q 726 635 686 705 q 765 473 765 565 q 647 171 765 299 q 325 0 528 43 l 325 -257 l 78 -257 l 78 772 z &quot;},&quot;q&quot;:{&quot;ha&quot;:794,&quot;x_min&quot;:32,&quot;x_max&quot;:724,&quot;o&quot;:&quot;m 476 0 l 330 0 q 107 72 182 0 q 32 285 32 144 q 74 496 32 400 q 197 664 115 591 q 350 747 262 721 q 572 772 437 772 l 724 772 l 724 -257 l 476 -257 l 476 0 m 390 205 l 476 205 l 476 562 q 335 483 389 552 q 281 314 281 414 q 307 232 281 258 q 390 205 333 205 z &quot;},&quot;r&quot;:{&quot;ha&quot;:533,&quot;x_min&quot;:83,&quot;x_max&quot;:494,&quot;o&quot;:&quot;m 83 772 l 335 772 l 335 733 q 396 769 359 757 q 479 781 432 781 l 494 781 l 494 566 q 399 545 439 564 q 335 486 359 525 l 335 0 l 83 0 l 83 772 z &quot;},&quot;s&quot;:{&quot;ha&quot;:566,&quot;x_min&quot;:39,&quot;x_max&quot;:541,&quot;o&quot;:&quot;m 39 203 l 228 203 q 251 208 244 203 q 258 224 258 212 q 254 240 258 231 q 241 260 250 250 l 113 428 q 64 511 80 470 q 47 590 47 551 q 67 674 47 637 q 127 739 87 711 q 195 765 155 757 q 317 772 236 772 l 457 772 l 517 570 l 375 570 q 346 563 355 570 q 336 543 336 557 q 339 529 336 536 q 346 517 342 522 l 479 345 q 525 264 509 305 q 541 184 541 224 q 478 45 541 90 q 283 0 416 0 l 100 0 l 39 203 z &quot;},&quot;t&quot;:{&quot;ha&quot;:533,&quot;x_min&quot;:31,&quot;x_max&quot;:504,&quot;o&quot;:&quot;m 364 0 q 160 55 217 0 q 103 252 103 111 l 103 562 l 31 562 l 31 772 l 103 772 l 103 909 l 354 983 l 354 772 l 481 772 l 481 562 l 354 562 l 354 257 q 367 215 354 227 q 414 203 380 203 l 504 203 l 447 0 l 364 0 z &quot;},&quot;u&quot;:{&quot;ha&quot;:804,&quot;x_min&quot;:32,&quot;x_max&quot;:726,&quot;o&quot;:&quot;m 376 0 q 116 76 200 0 q 32 311 32 152 q 64 515 32 401 q 164 772 97 629 l 411 772 q 315 499 344 602 q 286 335 286 397 q 317 236 286 264 q 429 208 349 208 l 479 208 l 479 772 l 726 772 l 726 0 l 376 0 z &quot;},&quot;v&quot;:{&quot;ha&quot;:762,&quot;x_min&quot;:0,&quot;x_max&quot;:762,&quot;o&quot;:&quot;m 239 0 l 0 772 l 258 772 l 380 237 l 503 772 l 762 772 l 522 0 l 239 0 z &quot;},&quot;w&quot;:{&quot;ha&quot;:1183,&quot;x_min&quot;:9,&quot;x_max&quot;:1174,&quot;o&quot;:&quot;m 817 253 l 918 772 l 1174 772 l 962 0 l 693 0 l 591 457 l 490 0 l 221 0 l 9 772 l 268 772 l 366 253 l 472 772 l 711 772 l 817 253 z &quot;},&quot;x&quot;:{&quot;ha&quot;:753,&quot;x_min&quot;:0,&quot;x_max&quot;:755,&quot;o&quot;:&quot;m 212 410 l 20 772 l 289 772 l 378 570 l 467 772 l 736 772 l 543 407 l 755 0 l 479 0 l 378 227 l 277 0 l 0 0 l 212 410 z &quot;},&quot;y&quot;:{&quot;ha&quot;:762,&quot;x_min&quot;:-9,&quot;x_max&quot;:772,&quot;o&quot;:&quot;m 261 78 l -9 772 l 272 772 l 387 387 l 515 772 l 772 772 l 399 -257 l 139 -257 l 261 78 z &quot;},&quot;z&quot;:{&quot;ha&quot;:668,&quot;x_min&quot;:20,&quot;x_max&quot;:647,&quot;o&quot;:&quot;m 282 566 l 57 566 l 117 772 l 647 772 l 385 205 l 628 205 l 564 0 l 20 0 l 282 566 z &quot;},&quot;{&quot;:{&quot;ha&quot;:694,&quot;x_min&quot;:103,&quot;x_max&quot;:606,&quot;o&quot;:&quot;m 606 1002 l 606 838 q 591 838 601 838 q 578 839 582 839 q 488 815 511 839 q 465 715 465 791 l 465 553 q 434 417 465 458 q 322 359 403 376 q 434 303 404 343 q 465 168 465 264 l 465 4 q 488 -94 465 -71 q 576 -118 511 -118 q 591 -117 581 -118 q 606 -117 601 -117 l 606 -281 q 577 -281 595 -281 q 550 -282 559 -282 q 428 -274 477 -282 q 347 -249 380 -266 q 291 -189 307 -227 q 275 -58 275 -151 l 275 115 q 242 242 275 205 q 127 279 208 279 q 116 279 125 279 q 103 278 107 278 l 103 441 q 115 441 107 441 q 127 440 123 440 q 241 478 208 440 q 275 606 275 515 l 275 778 q 292 909 275 870 q 347 970 308 948 q 429 995 380 987 q 551 1003 478 1003 q 577 1002 559 1003 q 606 1002 595 1002 z &quot;},&quot;|&quot;:{&quot;ha&quot;:694,&quot;x_min&quot;:267,&quot;x_max&quot;:429,&quot;o&quot;:&quot;m 267 1061 l 429 1061 l 429 -328 l 267 -328 l 267 1061 z &quot;},&quot;}&quot;:{&quot;ha&quot;:694,&quot;x_min&quot;:90,&quot;x_max&quot;:593,&quot;o&quot;:&quot;m 90 1002 q 118 1002 100 1002 q 144 1003 136 1003 q 267 995 218 1003 q 349 970 315 987 q 405 909 388 948 q 421 778 421 870 l 421 606 q 454 477 421 515 q 568 440 488 440 q 581 441 572 440 q 593 441 589 441 l 593 278 q 581 279 589 278 q 568 279 572 279 q 454 242 488 279 q 421 115 421 205 l 421 -58 q 405 -190 421 -151 q 349 -250 388 -229 q 272 -274 318 -267 q 151 -282 225 -282 q 121 -281 142 -282 q 90 -281 101 -281 l 90 -117 q 106 -117 96 -117 q 119 -118 115 -118 q 208 -95 185 -118 q 231 4 231 -71 l 231 168 q 262 303 231 263 q 374 359 293 343 q 261 416 292 376 q 231 553 231 456 l 231 715 q 208 815 231 791 q 122 839 185 839 q 107 838 117 839 q 90 838 96 838 l 90 1002 z &quot;},&quot;~&quot;:{&quot;ha&quot;:1157,&quot;x_min&quot;:121,&quot;x_max&quot;:1038,&quot;o&quot;:&quot;m 1038 555 l 1038 383 q 906 313 969 336 q 782 290 843 290 q 722 295 751 290 q 665 310 692 300 q 640 319 656 313 q 380 379 467 379 q 261 354 323 379 q 121 272 199 328 l 121 444 q 261 518 197 494 q 383 542 326 542 q 469 534 426 542 q 584 503 512 526 q 618 491 595 499 q 786 453 726 453 q 904 477 843 453 q 1038 555 964 502 z &quot;},&quot;Ã„&quot;:{&quot;ha&quot;:978,&quot;x_min&quot;:37,&quot;x_max&quot;:926,&quot;o&quot;:&quot;m 699 1029 l 864 1029 l 926 798 l 717 798 q 478 742 566 798 q 345 562 389 686 l 607 562 l 607 755 l 885 755 l 885 0 l 607 0 l 607 325 l 317 325 q 347 160 321 241 q 422 0 374 79 l 203 -144 q 79 110 120 -18 q 37 368 37 238 q 86 645 37 515 q 225 864 136 774 q 426 988 309 947 q 699 1029 543 1029 m 764 1278 l 764 1100 l 598 1100 l 598 1278 l 764 1278 m 524 1278 l 524 1100 l 358 1100 l 358 1278 l 524 1278 z &quot;},&quot;Ã…&quot;:{&quot;ha&quot;:978,&quot;x_min&quot;:37,&quot;x_max&quot;:926,&quot;o&quot;:&quot;m 684 1181 q 667 1223 684 1206 q 625 1240 650 1240 q 583 1223 600 1240 q 566 1181 566 1206 q 583 1140 566 1157 q 625 1124 600 1124 q 667 1140 650 1124 q 684 1181 684 1156 m 618 1026 q 510 1077 551 1034 q 469 1183 469 1120 q 515 1293 469 1248 q 625 1337 560 1337 q 734 1293 690 1337 q 779 1183 779 1248 q 743 1083 779 1125 q 647 1028 707 1040 q 690 1029 667 1028 q 699 1029 697 1029 l 864 1029 l 926 798 l 717 798 q 478 742 566 798 q 345 562 389 686 l 607 562 l 607 755 l 885 755 l 885 0 l 607 0 l 607 325 l 317 325 q 347 160 321 241 q 422 0 374 79 l 203 -144 q 79 110 120 -18 q 37 368 37 238 q 113 705 37 553 q 319 937 188 857 q 458 999 384 977 q 618 1026 532 1021 z &quot;},&quot;Ã‡&quot;:{&quot;ha&quot;:778,&quot;x_min&quot;:39,&quot;x_max&quot;:742,&quot;o&quot;:&quot;m 659 0 q 428 34 527 0 q 249 140 329 68 q 94 356 149 230 q 39 624 39 483 q 72 808 39 728 q 170 943 105 889 q 300 1009 224 989 q 498 1029 375 1029 l 659 1029 l 725 794 l 533 794 q 365 750 415 794 q 314 606 314 707 q 423 332 314 433 q 721 232 532 232 l 742 232 l 672 0 l 659 0 m 429 -150 l 456 -57 l 507 -57 q 633 -90 591 -57 q 675 -187 675 -122 q 630 -292 675 -255 q 503 -329 585 -329 q 414 -321 463 -329 q 305 -297 366 -313 l 334 -203 q 423 -222 387 -216 q 485 -228 458 -228 q 525 -217 512 -228 q 538 -186 538 -207 q 520 -158 538 -167 q 461 -149 501 -149 q 446 -149 456 -149 q 429 -150 435 -150 z &quot;},&quot;Ã‰&quot;:{&quot;ha&quot;:836,&quot;x_min&quot;:87,&quot;x_max&quot;:811,&quot;o&quot;:&quot;m 777 800 l 364 800 l 364 640 l 741 640 l 672 408 l 364 408 l 364 232 l 811 232 l 737 0 l 87 0 l 87 1029 l 714 1029 l 777 800 m 644 1284 l 416 1093 l 296 1093 l 431 1284 l 644 1284 z &quot;},&quot;Ã‘&quot;:{&quot;ha&quot;:1015,&quot;x_min&quot;:93,&quot;x_max&quot;:922,&quot;o&quot;:&quot;m 370 646 l 370 0 l 93 0 l 93 1029 l 357 1029 l 650 656 l 650 1029 l 922 1029 l 922 0 l 650 0 l 650 289 l 370 646 m 720 1276 q 668 1158 706 1200 q 575 1116 630 1116 q 554 1117 564 1116 q 534 1121 544 1118 l 448 1146 q 439 1148 444 1147 q 423 1149 434 1149 q 386 1137 400 1149 q 366 1101 372 1125 l 283 1101 q 334 1219 298 1180 q 423 1258 369 1258 q 445 1256 434 1258 q 469 1251 456 1255 l 551 1230 q 566 1226 559 1227 q 581 1225 573 1225 q 617 1238 604 1225 q 636 1276 631 1251 l 720 1276 z &quot;},&quot;Ã–&quot;:{&quot;ha&quot;:1013,&quot;x_min&quot;:39,&quot;x_max&quot;:974,&quot;o&quot;:&quot;m 318 624 q 333 479 318 551 q 376 340 348 407 q 437 245 403 279 q 507 212 471 212 q 555 228 531 212 q 596 269 578 243 q 669 432 643 342 q 694 616 694 523 q 653 763 694 721 q 507 804 611 804 q 361 763 404 804 q 318 624 318 722 m 507 1042 q 861 945 748 1042 q 974 640 974 848 q 928 360 974 496 q 803 123 883 223 q 669 11 742 47 q 507 -26 595 -26 q 344 11 418 -26 q 210 123 271 48 q 84 359 129 223 q 39 640 39 496 q 152 944 39 847 q 507 1042 266 1042 m 703 1278 l 703 1100 l 537 1100 l 537 1278 l 703 1278 m 463 1278 l 463 1100 l 297 1100 l 297 1278 l 463 1278 z &quot;},&quot;Ãœ&quot;:{&quot;ha&quot;:974,&quot;x_min&quot;:39,&quot;x_max&quot;:888,&quot;o&quot;:&quot;m 888 1029 l 888 0 l 564 0 q 353 9 418 0 q 240 40 288 18 q 90 183 142 84 q 39 429 39 283 q 83 708 39 559 q 220 1029 127 856 l 507 1029 q 363 687 407 823 q 319 450 319 551 q 367 286 319 338 q 517 235 414 235 l 611 235 l 611 1029 l 888 1029 m 753 1278 l 753 1100 l 587 1100 l 587 1278 l 753 1278 m 513 1278 l 513 1100 l 347 1100 l 347 1278 l 513 1278 z &quot;},&quot;Ã¡&quot;:{&quot;ha&quot;:794,&quot;x_min&quot;:32,&quot;x_max&quot;:717,&quot;o&quot;:&quot;m 404 566 q 310 538 340 566 q 281 452 281 511 q 333 296 281 363 q 469 208 385 229 l 469 566 l 404 566 m 545 0 q 331 28 417 0 q 180 118 244 56 q 70 280 108 189 q 32 475 32 371 q 114 697 32 622 q 355 772 195 772 l 717 772 l 717 0 l 545 0 m 675 1023 l 447 832 l 326 832 l 461 1023 l 675 1023 z &quot;},&quot;Ã &quot;:{&quot;ha&quot;:794,&quot;x_min&quot;:32,&quot;x_max&quot;:717,&quot;o&quot;:&quot;m 404 566 q 310 538 340 566 q 281 452 281 511 q 333 296 281 363 q 469 208 385 229 l 469 566 l 404 566 m 545 0 q 331 28 417 0 q 180 118 244 56 q 70 280 108 189 q 32 475 32 371 q 114 697 32 622 q 355 772 195 772 l 717 772 l 717 0 l 545 0 m 423 1023 l 558 832 l 437 832 l 208 1023 l 423 1023 z &quot;},&quot;Ã¢&quot;:{&quot;ha&quot;:794,&quot;x_min&quot;:32,&quot;x_max&quot;:717,&quot;o&quot;:&quot;m 404 566 q 310 538 340 566 q 281 452 281 511 q 333 296 281 363 q 469 208 385 229 l 469 566 l 404 566 m 545 0 q 331 28 417 0 q 180 118 244 56 q 70 280 108 189 q 32 475 32 371 q 114 697 32 622 q 355 772 195 772 l 717 772 l 717 0 l 545 0 m 354 1023 l 528 1023 l 663 832 l 553 832 l 441 926 l 332 832 l 220 832 l 354 1023 z &quot;},&quot;Ã¤&quot;:{&quot;ha&quot;:794,&quot;x_min&quot;:32,&quot;x_max&quot;:717,&quot;o&quot;:&quot;m 404 566 q 310 538 340 566 q 281 452 281 511 q 333 296 281 363 q 469 208 385 229 l 469 566 l 404 566 m 545 0 q 331 28 417 0 q 180 118 244 56 q 70 280 108 189 q 32 475 32 371 q 114 697 32 622 q 355 772 195 772 l 717 772 l 717 0 l 545 0 m 644 1017 l 644 839 l 479 839 l 479 1017 l 644 1017 m 404 1017 l 404 839 l 239 839 l 239 1017 l 404 1017 z &quot;},&quot;Ã£&quot;:{&quot;ha&quot;:794,&quot;x_min&quot;:32,&quot;x_max&quot;:717,&quot;o&quot;:&quot;m 404 566 q 310 538 340 566 q 281 452 281 511 q 333 296 281 363 q 469 208 385 229 l 469 566 l 404 566 m 545 0 q 331 28 417 0 q 180 118 244 56 q 70 280 108 189 q 32 475 32 371 q 114 697 32 622 q 355 772 195 772 l 717 772 l 717 0 l 545 0 m 660 1015 q 608 897 646 939 q 515 854 570 854 q 494 856 505 854 q 475 860 484 857 l 389 885 q 379 887 385 886 q 363 888 374 888 q 326 876 340 888 q 307 840 312 864 l 223 840 q 274 958 239 919 q 363 997 309 997 q 386 995 374 997 q 410 990 397 994 l 491 968 q 506 965 499 966 q 521 964 513 964 q 557 977 544 964 q 576 1015 571 989 l 660 1015 z &quot;},&quot;Ã¥&quot;:{&quot;ha&quot;:794,&quot;x_min&quot;:32,&quot;x_max&quot;:717,&quot;o&quot;:&quot;m 533 971 q 517 1014 533 997 q 475 1031 500 1031 q 433 1013 450 1031 q 415 971 415 996 q 433 930 415 947 q 475 913 450 913 q 516 930 500 913 q 533 971 533 947 m 475 1128 q 584 1082 539 1128 q 629 972 629 1036 q 585 862 629 907 q 475 817 540 817 q 365 862 410 817 q 319 972 319 907 q 365 1082 319 1037 q 475 1128 410 1128 m 404 566 q 310 538 340 566 q 281 452 281 511 q 333 296 281 363 q 469 208 385 229 l 469 566 l 404 566 m 545 0 q 331 28 417 0 q 180 118 244 56 q 70 280 108 189 q 32 475 32 371 q 114 697 32 622 q 355 772 195 772 l 717 772 l 717 0 l 545 0 z &quot;},&quot;Ã§&quot;:{&quot;ha&quot;:591,&quot;x_min&quot;:32,&quot;x_max&quot;:570,&quot;o&quot;:&quot;m 498 0 q 319 30 399 0 q 180 118 239 59 q 70 281 107 191 q 32 475 32 371 q 114 697 32 622 q 355 772 195 772 l 503 772 l 562 566 l 404 566 q 310 539 339 566 q 281 453 281 512 q 354 276 281 346 q 541 205 427 205 l 570 205 l 511 0 l 498 0 m 298 -150 l 324 -57 l 375 -57 q 502 -90 460 -57 q 543 -187 543 -122 q 498 -292 543 -255 q 371 -329 454 -329 q 283 -321 332 -329 q 174 -297 234 -313 l 203 -203 q 291 -222 256 -216 q 353 -228 327 -228 q 394 -217 380 -228 q 407 -186 407 -207 q 388 -158 407 -167 q 330 -149 370 -149 q 314 -149 325 -149 q 298 -150 303 -150 z &quot;},&quot;Ã©&quot;:{&quot;ha&quot;:733,&quot;x_min&quot;:32,&quot;x_max&quot;:715,&quot;o&quot;:&quot;m 285 364 q 417 454 371 409 q 464 538 464 499 q 444 573 464 561 q 386 586 423 586 q 298 551 330 586 q 265 456 265 516 q 270 411 265 433 q 285 364 275 389 m 513 0 q 323 31 408 0 q 175 122 237 62 q 69 281 106 189 q 32 476 32 372 q 118 708 32 635 q 392 781 205 781 q 640 730 564 781 q 715 568 715 680 q 649 385 715 471 q 446 221 582 299 q 487 209 465 213 q 541 205 510 205 l 675 205 l 618 0 l 513 0 m 619 1023 l 391 832 l 271 832 l 406 1023 l 619 1023 z &quot;},&quot;Ã¨&quot;:{&quot;ha&quot;:733,&quot;x_min&quot;:32,&quot;x_max&quot;:715,&quot;o&quot;:&quot;m 285 364 q 417 454 371 409 q 464 538 464 499 q 444 573 464 561 q 386 586 423 586 q 298 551 330 586 q 265 456 265 516 q 270 411 265 433 q 285 364 275 389 m 513 0 q 323 31 408 0 q 175 122 237 62 q 69 281 106 189 q 32 476 32 372 q 118 708 32 635 q 392 781 205 781 q 640 730 564 781 q 715 568 715 680 q 649 385 715 471 q 446 221 582 299 q 487 209 465 213 q 541 205 510 205 l 675 205 l 618 0 l 513 0 m 368 1023 l 503 832 l 382 832 l 153 1023 l 368 1023 z &quot;},&quot;Ãª&quot;:{&quot;ha&quot;:733,&quot;x_min&quot;:32,&quot;x_max&quot;:715,&quot;o&quot;:&quot;m 285 364 q 417 454 371 409 q 464 538 464 499 q 444 573 464 561 q 386 586 423 586 q 298 551 330 586 q 265 456 265 516 q 270 411 265 433 q 285 364 275 389 m 513 0 q 323 31 408 0 q 175 122 237 62 q 69 281 106 189 q 32 476 32 372 q 118 708 32 635 q 392 781 205 781 q 640 730 564 781 q 715 568 715 680 q 649 385 715 471 q 446 221 582 299 q 487 209 465 213 q 541 205 510 205 l 675 205 l 618 0 l 513 0 m 298 1023 l 472 1023 l 607 832 l 497 832 l 386 926 l 276 832 l 165 832 l 298 1023 z &quot;},&quot;Ã«&quot;:{&quot;ha&quot;:733,&quot;x_min&quot;:32,&quot;x_max&quot;:715,&quot;o&quot;:&quot;m 285 364 q 417 454 371 409 q 464 538 464 499 q 444 573 464 561 q 386 586 423 586 q 298 551 330 586 q 265 456 265 516 q 270 411 265 433 q 285 364 275 389 m 513 0 q 323 31 408 0 q 175 122 237 62 q 69 281 106 189 q 32 476 32 372 q 118 708 32 635 q 392 781 205 781 q 640 730 564 781 q 715 568 715 680 q 649 385 715 471 q 446 221 582 299 q 487 209 465 213 q 541 205 510 205 l 675 205 l 618 0 l 513 0 m 589 1017 l 589 839 l 423 839 l 423 1017 l 589 1017 m 349 1017 l 349 839 l 183 839 l 183 1017 l 349 1017 z &quot;},&quot;Ã­&quot;:{&quot;ha&quot;:418,&quot;x_min&quot;:83,&quot;x_max&quot;:443,&quot;o&quot;:&quot;m 83 772 l 335 772 l 335 0 l 83 0 l 83 772 m 443 1023 l 215 832 l 94 832 l 229 1023 l 443 1023 z &quot;},&quot;Ã¬&quot;:{&quot;ha&quot;:418,&quot;x_min&quot;:-24,&quot;x_max&quot;:335,&quot;o&quot;:&quot;m 83 772 l 335 772 l 335 0 l 83 0 l 83 772 m 191 1023 l 326 832 l 205 832 l -24 1023 l 191 1023 z &quot;},&quot;Ã®&quot;:{&quot;ha&quot;:418,&quot;x_min&quot;:-12,&quot;x_max&quot;:431,&quot;o&quot;:&quot;m 83 772 l 335 772 l 335 0 l 83 0 l 83 772 m 122 1023 l 296 1023 l 431 832 l 321 832 l 210 926 l 100 832 l -12 832 l 122 1023 z &quot;},&quot;Ã¯&quot;:{&quot;ha&quot;:418,&quot;x_min&quot;:7,&quot;x_max&quot;:412,&quot;o&quot;:&quot;m 83 772 l 335 772 l 335 0 l 83 0 l 83 772 m 412 1017 l 412 839 l 247 839 l 247 1017 l 412 1017 m 172 1017 l 172 839 l 7 839 l 7 1017 l 172 1017 z &quot;},&quot;Ã±&quot;:{&quot;ha&quot;:804,&quot;x_min&quot;:78,&quot;x_max&quot;:729,&quot;o&quot;:&quot;m 78 772 l 436 772 q 664 706 600 772 q 729 471 729 640 l 729 0 l 482 0 l 482 435 q 462 543 482 524 q 386 562 441 562 l 325 562 l 325 0 l 78 0 l 78 772 m 621 1015 q 570 897 608 939 q 477 854 532 854 q 456 856 466 854 q 436 860 446 857 l 350 885 q 341 887 346 886 q 325 888 336 888 q 288 876 302 888 q 268 840 273 864 l 184 840 q 235 958 200 919 q 325 997 271 997 q 347 995 336 997 q 371 990 358 994 l 452 968 q 468 965 460 966 q 482 964 475 964 q 519 977 505 964 q 538 1015 532 989 l 621 1015 z &quot;},&quot;Ã³&quot;:{&quot;ha&quot;:787,&quot;x_min&quot;:32,&quot;x_max&quot;:755,&quot;o&quot;:&quot;m 505 461 q 478 545 505 518 q 395 572 451 572 q 310 545 337 572 q 282 461 282 517 q 290 387 282 427 q 311 307 297 348 q 350 227 330 254 q 395 200 371 200 q 427 215 411 200 q 458 262 443 231 q 493 361 480 309 q 505 461 505 414 m 395 781 q 670 712 585 781 q 755 494 755 644 q 719 275 755 382 q 616 90 682 169 q 515 7 570 35 q 395 -20 460 -20 q 272 8 328 -20 q 171 90 216 35 q 69 273 106 168 q 32 482 32 378 q 116 710 32 640 q 395 781 201 781 m 628 1023 l 400 832 l 279 832 l 414 1023 l 628 1023 z &quot;},&quot;Ã²&quot;:{&quot;ha&quot;:787,&quot;x_min&quot;:32,&quot;x_max&quot;:755,&quot;o&quot;:&quot;m 505 461 q 478 545 505 518 q 395 572 451 572 q 310 545 337 572 q 282 461 282 517 q 290 387 282 427 q 311 307 297 348 q 350 227 330 254 q 395 200 371 200 q 427 215 411 200 q 458 262 443 231 q 493 361 480 309 q 505 461 505 414 m 395 781 q 670 712 585 781 q 755 494 755 644 q 719 275 755 382 q 616 90 682 169 q 515 7 570 35 q 395 -20 460 -20 q 272 8 328 -20 q 171 90 216 35 q 69 273 106 168 q 32 482 32 378 q 116 710 32 640 q 395 781 201 781 m 376 1023 l 511 832 l 391 832 l 161 1023 l 376 1023 z &quot;},&quot;Ã´&quot;:{&quot;ha&quot;:787,&quot;x_min&quot;:32,&quot;x_max&quot;:755,&quot;o&quot;:&quot;m 505 461 q 478 545 505 518 q 395 572 451 572 q 310 545 337 572 q 282 461 282 517 q 290 387 282 427 q 311 307 297 348 q 350 227 330 254 q 395 200 371 200 q 427 215 411 200 q 458 262 443 231 q 493 361 480 309 q 505 461 505 414 m 395 781 q 670 712 585 781 q 755 494 755 644 q 719 275 755 382 q 616 90 682 169 q 515 7 570 35 q 395 -20 460 -20 q 272 8 328 -20 q 171 90 216 35 q 69 273 106 168 q 32 482 32 378 q 116 710 32 640 q 395 781 201 781 m 307 1023 l 481 1023 l 616 832 l 506 832 l 395 926 l 285 832 l 174 832 l 307 1023 z &quot;},&quot;Ã¶&quot;:{&quot;ha&quot;:787,&quot;x_min&quot;:32,&quot;x_max&quot;:755,&quot;o&quot;:&quot;m 505 461 q 478 545 505 518 q 395 572 451 572 q 310 545 337 572 q 282 461 282 517 q 290 387 282 427 q 311 307 297 348 q 350 227 330 254 q 395 200 371 200 q 427 215 411 200 q 458 262 443 231 q 493 361 480 309 q 505 461 505 414 m 395 781 q 670 712 585 781 q 755 494 755 644 q 719 275 755 382 q 616 90 682 169 q 515 7 570 35 q 395 -20 460 -20 q 272 8 328 -20 q 171 90 216 35 q 69 273 106 168 q 32 482 32 378 q 116 710 32 640 q 395 781 201 781 m 597 1017 l 597 839 l 432 839 l 432 1017 l 597 1017 m 357 1017 l 357 839 l 192 839 l 192 1017 l 357 1017 z &quot;},&quot;Ãµ&quot;:{&quot;ha&quot;:787,&quot;x_min&quot;:32,&quot;x_max&quot;:755,&quot;o&quot;:&quot;m 505 461 q 478 545 505 518 q 395 572 451 572 q 310 545 337 572 q 282 461 282 517 q 290 387 282 427 q 311 307 297 348 q 350 227 330 254 q 395 200 371 200 q 427 215 411 200 q 458 262 443 231 q 493 361 480 309 q 505 461 505 414 m 395 781 q 670 712 585 781 q 755 494 755 644 q 719 275 755 382 q 616 90 682 169 q 515 7 570 35 q 395 -20 460 -20 q 272 8 328 -20 q 171 90 216 35 q 69 273 106 168 q 32 482 32 378 q 116 710 32 640 q 395 781 201 781 m 613 1015 q 562 897 600 939 q 469 854 524 854 q 448 856 458 854 q 428 860 437 857 l 342 885 q 333 887 338 886 q 317 888 328 888 q 279 876 294 888 q 260 840 265 864 l 176 840 q 227 958 192 919 q 317 997 262 997 q 339 995 328 997 q 363 990 350 994 l 444 968 q 459 965 452 966 q 474 964 467 964 q 511 977 497 964 q 530 1015 524 989 l 613 1015 z &quot;},&quot;Ãº&quot;:{&quot;ha&quot;:804,&quot;x_min&quot;:32,&quot;x_max&quot;:726,&quot;o&quot;:&quot;m 376 0 q 116 76 200 0 q 32 311 32 152 q 64 515 32 401 q 164 772 97 629 l 411 772 q 315 499 344 602 q 286 335 286 397 q 317 236 286 264 q 429 208 349 208 l 479 208 l 479 772 l 726 772 l 726 0 l 376 0 m 689 1023 l 461 832 l 340 832 l 475 1023 l 689 1023 z &quot;},&quot;Ã¹&quot;:{&quot;ha&quot;:804,&quot;x_min&quot;:32,&quot;x_max&quot;:726,&quot;o&quot;:&quot;m 376 0 q 116 76 200 0 q 32 311 32 152 q 64 515 32 401 q 164 772 97 629 l 411 772 q 315 499 344 602 q 286 335 286 397 q 317 236 286 264 q 429 208 349 208 l 479 208 l 479 772 l 726 772 l 726 0 l 376 0 m 437 1023 l 572 832 l 452 832 l 222 1023 l 437 1023 z &quot;},&quot;Ã»&quot;:{&quot;ha&quot;:804,&quot;x_min&quot;:32,&quot;x_max&quot;:726,&quot;o&quot;:&quot;m 376 0 q 116 76 200 0 q 32 311 32 152 q 64 515 32 401 q 164 772 97 629 l 411 772 q 315 499 344 602 q 286 335 286 397 q 317 236 286 264 q 429 208 349 208 l 479 208 l 479 772 l 726 772 l 726 0 l 376 0 m 368 1023 l 542 1023 l 677 832 l 567 832 l 456 926 l 346 832 l 235 832 l 368 1023 z &quot;},&quot;Ã¼&quot;:{&quot;ha&quot;:804,&quot;x_min&quot;:32,&quot;x_max&quot;:726,&quot;o&quot;:&quot;m 376 0 q 116 76 200 0 q 32 311 32 152 q 64 515 32 401 q 164 772 97 629 l 411 772 q 315 499 344 602 q 286 335 286 397 q 317 236 286 264 q 429 208 349 208 l 479 208 l 479 772 l 726 772 l 726 0 l 376 0 m 659 1017 l 659 839 l 493 839 l 493 1017 l 659 1017 m 418 1017 l 418 839 l 253 839 l 253 1017 l 418 1017 z &quot;},&quot;â€ &quot;:{&quot;ha&quot;:694,&quot;x_min&quot;:18,&quot;x_max&quot;:676,&quot;o&quot;:&quot;m 471 746 l 676 746 l 676 554 l 471 554 l 471 -161 l 224 -161 l 224 554 l 18 554 l 18 746 l 224 746 l 224 1029 l 471 1029 l 471 746 z &quot;},&quot;Â°&quot;:{&quot;ha&quot;:457,&quot;x_min&quot;:18,&quot;x_max&quot;:440,&quot;o&quot;:&quot;m 229 896 q 150 863 182 896 q 117 785 117 831 q 149 705 117 737 q 229 672 182 672 q 308 705 275 672 q 340 785 340 739 q 308 863 340 831 q 229 896 275 896 m 229 994 q 378 932 317 994 q 440 783 440 871 q 378 634 440 696 q 228 572 316 572 q 79 634 140 572 q 18 783 18 695 q 80 933 18 872 q 229 994 141 994 z &quot;},&quot;Â¢&quot;:{&quot;ha&quot;:926,&quot;x_min&quot;:154,&quot;x_max&quot;:725,&quot;o&quot;:&quot;m 667 138 l 621 138 q 592 139 607 138 q 563 142 578 140 l 562 0 l 338 0 l 338 229 q 202 390 251 289 q 154 614 154 492 q 203 797 154 723 q 338 890 252 870 l 338 1029 l 562 1029 l 562 909 l 660 909 l 718 704 l 526 704 q 432 677 462 704 q 403 590 403 650 q 476 413 403 484 q 663 343 549 343 l 725 343 l 667 138 z &quot;},&quot;Â£&quot;:{&quot;ha&quot;:926,&quot;x_min&quot;:113,&quot;x_max&quot;:865,&quot;o&quot;:&quot;m 184 403 l 113 403 l 113 642 l 184 642 l 184 755 q 254 967 184 905 q 497 1029 323 1029 l 751 1029 l 817 794 l 533 794 q 474 779 490 794 q 458 724 458 764 l 458 642 l 696 642 l 696 403 l 458 403 l 458 240 l 865 240 l 794 0 l 184 0 l 184 403 z &quot;},&quot;Â§&quot;:{&quot;ha&quot;:694,&quot;x_min&quot;:8,&quot;x_max&quot;:686,&quot;o&quot;:&quot;m 372 318 q 451 354 422 331 q 479 403 479 376 q 470 438 479 422 q 439 472 461 454 l 335 562 q 255 526 283 549 q 228 473 228 503 q 237 442 228 457 q 268 408 247 427 l 372 318 m 623 847 l 419 847 q 386 840 397 847 q 375 819 375 833 q 379 803 375 812 q 388 790 383 793 l 619 589 q 669 520 652 560 q 686 432 686 481 q 636 298 686 357 q 497 208 587 239 l 538 174 q 588 106 572 142 q 604 24 604 71 q 542 -116 604 -71 q 347 -161 479 -161 l 139 -161 l 83 18 l 317 18 q 343 24 335 18 q 351 41 351 29 q 347 61 351 52 q 332 79 342 71 l 81 294 q 27 366 46 323 q 8 456 8 408 q 60 583 8 531 q 216 667 111 635 l 186 694 q 129 766 146 730 q 111 847 111 802 q 131 931 111 894 q 192 996 151 968 q 259 1022 218 1014 q 380 1029 300 1029 l 570 1029 l 623 847 z &quot;},&quot;â€¢&quot;:{&quot;ha&quot;:819,&quot;x_min&quot;:208,&quot;x_max&quot;:610,&quot;o&quot;:&quot;m 208 517 q 267 659 208 600 q 410 717 326 717 q 551 658 492 717 q 610 517 610 600 q 550 375 610 434 q 408 315 491 315 q 267 374 325 315 q 208 517 208 433 z &quot;},&quot;Â¶&quot;:{&quot;ha&quot;:694,&quot;x_min&quot;:20,&quot;x_max&quot;:676,&quot;o&quot;:&quot;m 676 1003 l 676 920 l 604 920 l 604 0 l 485 0 l 485 920 l 383 920 l 383 0 l 265 0 l 265 532 q 87 600 154 536 q 20 766 20 665 q 92 938 20 873 q 283 1003 163 1003 l 676 1003 z &quot;},&quot;ÃŸ&quot;:{&quot;ha&quot;:848,&quot;x_min&quot;:83,&quot;x_max&quot;:802,&quot;o&quot;:&quot;m 83 755 q 158 977 83 912 q 414 1042 233 1042 q 665 986 583 1042 q 747 814 747 930 q 719 696 747 758 q 636 572 691 635 q 761 405 720 490 q 802 231 802 320 q 734 55 802 111 q 521 0 667 0 l 428 0 l 364 205 l 449 205 q 528 218 505 205 q 550 261 550 231 q 497 384 550 305 q 351 555 445 463 q 465 681 425 624 q 504 775 504 737 q 483 819 504 804 q 422 835 461 835 q 350 813 370 835 q 330 704 330 791 l 330 0 l 83 0 l 83 755 z &quot;},&quot;Â®&quot;:{&quot;ha&quot;:1157,&quot;x_min&quot;:72,&quot;x_max&quot;:1084,&quot;o&quot;:&quot;m 517 693 l 517 545 l 571 545 q 646 563 621 545 q 671 616 671 581 q 645 675 671 656 q 562 693 619 693 l 517 693 m 364 789 l 587 789 q 767 748 705 789 q 828 628 828 707 q 797 534 828 573 q 710 478 766 494 l 833 233 l 665 233 l 561 454 l 517 454 l 517 233 l 364 233 l 364 789 m 579 916 q 422 886 495 916 q 290 799 349 856 q 197 661 229 738 q 165 500 165 585 q 195 345 165 418 q 283 212 225 271 q 418 119 342 151 q 578 86 494 86 q 735 117 660 86 q 871 205 811 148 q 962 339 930 263 q 993 500 993 414 q 963 658 993 584 q 876 790 933 732 q 740 884 816 852 q 579 916 665 916 m 578 1007 q 777 968 684 1007 q 943 854 871 929 q 1048 693 1012 784 q 1084 500 1084 602 q 1046 302 1084 395 q 935 140 1008 210 q 768 31 861 69 q 578 -7 676 -7 q 383 33 475 -7 q 218 147 291 72 q 110 311 147 220 q 72 500 72 401 q 112 696 72 602 q 227 864 152 791 q 387 971 298 935 q 578 1007 477 1007 z &quot;},&quot;Â©&quot;:{&quot;ha&quot;:1157,&quot;x_min&quot;:72,&quot;x_max&quot;:1084,&quot;o&quot;:&quot;m 828 604 l 684 604 q 651 675 679 650 q 578 700 624 700 q 490 648 522 700 q 458 501 458 595 q 491 357 458 406 q 585 309 523 309 q 657 336 630 309 q 688 414 684 363 l 833 414 q 761 258 829 317 q 582 199 692 199 q 378 278 453 199 q 302 496 302 358 q 378 719 302 636 q 581 802 453 802 q 755 747 687 802 q 828 604 823 693 m 579 916 q 420 885 494 916 q 288 794 346 854 q 196 658 228 734 q 164 500 164 582 q 196 343 164 419 q 288 208 228 268 q 422 118 347 149 q 579 86 497 86 q 738 118 661 86 q 875 210 814 150 q 963 340 933 267 q 993 500 993 414 q 962 660 993 585 q 873 793 932 734 q 739 884 814 853 q 579 916 664 916 m 578 1007 q 774 969 682 1007 q 939 859 866 931 q 1047 695 1010 787 q 1084 500 1084 604 q 1048 305 1084 396 q 940 144 1011 214 q 772 32 866 71 q 578 -7 679 -7 q 386 32 477 -7 q 221 143 294 71 q 110 307 149 216 q 72 500 72 398 q 111 693 72 600 q 222 860 150 786 q 384 969 294 932 q 578 1007 474 1007 z &quot;},&quot;â„¢&quot;:{&quot;ha&quot;:1157,&quot;x_min&quot;:127,&quot;x_max&quot;:996,&quot;o&quot;:&quot;m 541 993 l 692 993 l 768 787 l 846 993 l 996 993 l 996 619 l 890 619 l 890 884 l 791 619 l 747 619 l 646 884 l 646 619 l 541 619 l 541 993 m 127 993 l 468 993 l 468 907 l 357 907 l 357 619 l 239 619 l 239 907 l 127 907 l 127 993 z &quot;},&quot;Â´&quot;:{&quot;ha&quot;:694,&quot;x_min&quot;:232,&quot;x_max&quot;:581,&quot;o&quot;:&quot;m 581 1023 l 353 832 l 232 832 l 367 1023 l 581 1023 z &quot;},&quot;Â¨&quot;:{&quot;ha&quot;:694,&quot;x_min&quot;:144,&quot;x_max&quot;:550,&quot;o&quot;:&quot;m 550 1017 l 550 839 l 385 839 l 385 1017 l 550 1017 m 310 1017 l 310 839 l 144 839 l 144 1017 l 310 1017 z &quot;},&quot;â‰ &quot;:{&quot;ha&quot;:1157,&quot;x_min&quot;:172,&quot;x_max&quot;:985,&quot;o&quot;:&quot;m 810 848 l 924 755 l 832 642 l 985 642 l 985 492 l 729 492 l 607 338 l 985 338 l 985 187 l 507 187 l 340 -21 l 225 72 l 317 187 l 172 187 l 172 338 l 416 338 l 541 492 l 172 492 l 172 642 l 643 642 l 810 848 z &quot;},&quot;Ã†&quot;:{&quot;ha&quot;:1357,&quot;x_min&quot;:37,&quot;x_max&quot;:1332,&quot;o&quot;:&quot;m 699 1029 l 1235 1029 l 1297 794 l 717 794 q 503 755 587 794 q 378 633 420 715 l 607 633 l 607 749 l 885 749 l 885 633 l 1258 633 l 1193 408 l 885 408 l 885 237 l 1332 237 l 1257 0 l 607 0 l 607 408 l 313 408 l 313 382 q 340 182 313 278 q 422 0 368 87 l 203 -144 q 79 110 120 -18 q 37 368 37 238 q 86 645 37 515 q 225 864 136 774 q 426 988 309 947 q 699 1029 543 1029 z &quot;},&quot;Ã˜&quot;:{&quot;ha&quot;:1013,&quot;x_min&quot;:-4,&quot;x_max&quot;:1036,&quot;o&quot;:&quot;m -4 79 l 134 243 q 62 441 86 344 q 39 633 39 538 q 151 944 39 846 q 507 1042 262 1042 q 662 1032 598 1042 q 770 1002 725 1022 l 857 1105 l 1036 954 l 936 838 q 964 747 955 796 q 974 640 974 697 q 928 360 974 496 q 803 123 883 223 q 669 11 742 47 q 507 -26 595 -26 q 385 -7 441 -26 q 279 52 328 13 l 175 -72 l -4 79 m 318 624 q 333 479 318 551 q 376 340 348 407 q 437 245 403 279 q 507 212 471 212 q 555 228 531 212 q 596 269 578 243 q 669 432 643 342 q 694 616 694 523 q 653 763 694 721 q 507 804 611 804 q 361 763 404 804 q 318 624 318 722 z &quot;},&quot;âˆž&quot;:{&quot;ha&quot;:1157,&quot;x_min&quot;:132,&quot;x_max&quot;:1026,&quot;o&quot;:&quot;m 648 380 q 718 312 677 335 q 807 289 758 289 q 906 323 868 289 q 945 411 945 357 q 910 497 945 463 q 823 532 875 532 q 734 497 774 532 q 648 380 694 463 m 510 446 q 441 514 481 491 q 351 536 402 536 q 252 503 290 536 q 214 415 214 469 q 248 329 214 363 q 335 294 283 294 q 425 330 383 294 q 510 446 466 366 m 581 300 q 480 169 534 212 q 361 126 427 126 q 199 209 267 126 q 132 412 132 291 q 192 619 132 540 q 346 699 251 699 q 459 660 407 699 q 578 525 511 622 q 680 657 626 614 q 798 700 733 700 q 959 618 892 700 q 1026 414 1026 536 q 967 206 1026 286 q 812 126 907 126 q 700 163 751 126 q 581 300 649 201 z &quot;},&quot;Â±&quot;:{&quot;ha&quot;:1157,&quot;x_min&quot;:172,&quot;x_max&quot;:985,&quot;o&quot;:&quot;m 172 144 l 985 144 l 985 -12 l 172 -12 l 172 144 m 498 842 l 660 842 l 660 625 l 985 625 l 985 468 l 660 468 l 660 252 l 498 252 l 498 468 l 172 468 l 172 625 l 498 625 l 498 842 z &quot;},&quot;â‰¤&quot;:{&quot;ha&quot;:1157,&quot;x_min&quot;:174,&quot;x_max&quot;:985,&quot;o&quot;:&quot;m 174 144 l 985 144 l 985 -11 l 174 -11 l 174 144 m 983 852 l 983 690 l 457 528 l 983 366 l 983 203 l 174 460 l 174 596 l 983 852 z &quot;},&quot;â‰¥&quot;:{&quot;ha&quot;:1157,&quot;x_min&quot;:174,&quot;x_max&quot;:985,&quot;o&quot;:&quot;m 174 144 l 985 144 l 985 -11 l 174 -11 l 174 144 m 175 852 l 983 596 l 983 460 l 175 203 l 175 366 l 701 528 l 175 690 l 175 852 z &quot;},&quot;Â¥&quot;:{&quot;ha&quot;:888,&quot;x_min&quot;:7,&quot;x_max&quot;:880,&quot;o&quot;:&quot;m 575 0 l 313 0 l 313 408 l 7 408 l 7 538 l 250 538 l 197 640 l 7 640 l 7 768 l 135 768 l 7 1029 l 309 1029 l 443 711 l 581 1029 l 880 1029 l 753 768 l 880 768 l 880 640 l 689 640 l 637 538 l 880 538 l 880 408 l 575 408 l 575 0 z &quot;},&quot;Âµ&quot;:{&quot;ha&quot;:892,&quot;x_min&quot;:-31,&quot;x_max&quot;:854,&quot;o&quot;:&quot;m 131 739 l 374 739 l 319 380 q 313 328 315 353 q 311 283 311 303 q 335 197 311 226 q 408 168 359 168 q 502 215 468 168 q 553 364 536 261 l 612 739 l 854 739 l 736 0 l 518 0 l 530 85 q 470 12 503 34 q 389 -11 436 -11 q 316 10 349 -11 q 264 71 284 31 l 208 -290 l -31 -290 l 131 739 z &quot;},&quot;âˆ‚&quot;:{&quot;ha&quot;:755,&quot;x_min&quot;:40,&quot;x_max&quot;:715,&quot;o&quot;:&quot;m 519 464 q 541 604 534 541 q 549 705 549 667 q 529 806 549 764 q 482 847 509 847 q 393 784 458 847 q 271 721 327 721 q 216 744 238 721 q 195 800 195 766 q 258 885 195 847 q 407 924 321 924 q 632 814 549 924 q 715 515 715 705 q 605 133 715 282 q 322 -17 495 -17 q 119 62 199 -17 q 40 265 40 141 q 121 493 40 403 q 323 583 202 583 q 439 554 392 583 q 519 464 486 526 m 473 361 q 449 480 473 438 q 378 522 424 522 q 269 430 313 522 q 225 195 225 337 q 250 75 225 116 q 322 35 275 35 q 431 126 388 35 q 473 361 473 218 z &quot;},&quot;âˆ‘&quot;:{&quot;ha&quot;:1031,&quot;x_min&quot;:33,&quot;x_max&quot;:999,&quot;o&quot;:&quot;m 49 999 l 954 999 l 954 794 l 386 794 l 790 382 l 392 -60 l 999 -60 l 999 -267 l 33 -267 l 33 -142 l 497 371 l 49 822 l 49 999 z &quot;},&quot;âˆ&quot;:{&quot;ha&quot;:1116,&quot;x_min&quot;:98,&quot;x_max&quot;:1013,&quot;o&quot;:&quot;m 98 999 l 1013 999 l 1013 -267 l 742 -267 l 742 772 l 370 772 l 370 -267 l 98 -267 l 98 999 z &quot;},&quot;Ï€&quot;:{&quot;ha&quot;:1038,&quot;x_min&quot;:4,&quot;x_max&quot;:1043,&quot;o&quot;:&quot;m 1043 739 l 1017 582 l 896 582 l 804 0 l 562 0 l 653 582 l 496 582 l 404 0 l 164 0 l 254 582 l 236 582 q 188 558 208 582 q 164 492 169 534 l 4 492 q 89 686 26 633 q 300 739 151 739 l 1043 739 z &quot;},&quot;âˆ«&quot;:{&quot;ha&quot;:847,&quot;x_min&quot;:35,&quot;x_max&quot;:814,&quot;o&quot;:&quot;m 245 -168 q 326 284 313 -168 q 329 389 328 353 q 417 899 340 743 q 654 1055 494 1055 q 770 1019 726 1055 q 814 926 814 983 q 786 856 814 883 q 714 829 758 829 q 649 856 671 829 q 627 932 627 882 q 622 965 627 958 q 604 972 616 972 q 520 520 536 972 q 518 458 519 479 q 497 138 511 235 q 458 -28 484 41 q 350 -197 416 -140 q 195 -253 284 -253 q 78 -218 122 -253 q 35 -123 35 -182 q 63 -53 35 -79 q 139 -26 92 -26 q 202 -51 180 -26 q 224 -121 224 -75 q 222 -136 224 -129 q 222 -139 222 -138 q 227 -161 222 -155 q 245 -168 233 -168 z &quot;},&quot;Âª&quot;:{&quot;ha&quot;:596,&quot;x_min&quot;:24,&quot;x_max&quot;:538,&quot;o&quot;:&quot;m 302 885 q 233 866 255 885 q 211 806 211 846 q 250 696 211 743 q 353 635 288 649 l 353 885 l 302 885 m 408 489 q 248 509 313 489 q 136 572 184 528 q 52 685 81 621 q 24 821 24 748 q 85 977 24 924 q 267 1029 146 1029 l 538 1029 l 538 489 l 408 489 z &quot;},&quot;Âº&quot;:{&quot;ha&quot;:590,&quot;x_min&quot;:24,&quot;x_max&quot;:567,&quot;o&quot;:&quot;m 379 811 q 359 870 379 851 q 296 889 338 889 q 232 870 253 889 q 211 811 211 850 q 217 761 211 788 q 233 704 222 734 q 263 648 248 667 q 296 629 279 629 q 320 640 308 629 q 345 672 332 650 q 370 743 361 706 q 379 811 379 779 m 296 1035 q 503 987 439 1035 q 567 835 567 940 q 539 681 567 755 q 463 553 512 606 q 387 494 429 513 q 296 475 346 475 q 204 494 245 475 q 127 553 162 513 q 52 681 79 608 q 24 827 24 754 q 87 986 24 937 q 296 1035 150 1035 z &quot;},&quot;Î©&quot;:{&quot;ha&quot;:1116,&quot;x_min&quot;:31,&quot;x_max&quot;:1084,&quot;o&quot;:&quot;m 859 208 l 1084 208 l 1084 0 l 653 0 l 653 239 q 749 372 715 294 q 783 539 783 450 q 722 735 783 663 q 557 807 661 807 q 392 734 453 807 q 330 538 330 661 q 364 371 330 448 q 461 239 398 293 l 461 0 l 31 0 l 31 208 l 256 208 q 120 364 166 273 q 74 567 74 455 q 207 899 74 772 q 557 1025 339 1025 q 908 899 776 1025 q 1040 567 1040 774 q 994 364 1040 455 q 859 208 948 273 z &quot;},&quot;Ã¦&quot;:{&quot;ha&quot;:1149,&quot;x_min&quot;:32,&quot;x_max&quot;:1131,&quot;o&quot;:&quot;m 703 351 q 833 443 788 398 q 878 526 878 488 q 858 561 878 549 q 802 574 838 574 q 714 539 745 574 q 684 440 684 505 q 688 393 684 415 q 703 351 693 371 m 404 566 q 310 538 340 566 q 281 452 281 511 q 333 296 281 363 q 469 208 385 229 l 469 566 l 404 566 m 869 216 q 912 208 891 211 q 956 205 933 205 l 1090 205 l 1034 0 l 928 0 q 786 17 844 0 q 684 71 727 34 l 684 0 l 545 0 q 331 28 417 0 q 180 118 244 56 q 70 280 108 189 q 32 475 32 371 q 114 697 32 622 q 355 772 195 772 l 807 772 q 1054 722 978 772 q 1131 558 1131 671 q 1066 379 1131 464 q 869 216 1002 295 z &quot;},&quot;Ã¸&quot;:{&quot;ha&quot;:787,&quot;x_min&quot;:11,&quot;x_max&quot;:803,&quot;o&quot;:&quot;m 107 187 q 51 339 69 266 q 32 482 32 413 q 116 711 32 641 q 395 781 200 781 q 524 772 469 781 q 611 749 578 764 l 676 819 l 803 707 l 729 625 q 749 558 742 593 q 755 485 755 523 q 718 274 755 380 q 616 90 681 168 q 515 7 570 35 q 395 -20 460 -20 q 297 -3 342 -20 q 211 47 251 14 l 136 -33 l 11 81 l 107 187 m 282 461 q 289 388 282 427 q 310 310 296 349 q 351 227 330 253 q 395 200 371 200 q 427 215 411 200 q 458 262 443 231 q 493 361 480 309 q 505 461 505 414 q 478 545 505 518 q 395 572 451 572 q 310 545 337 572 q 282 461 282 517 z &quot;},&quot;Â¿&quot;:{&quot;ha&quot;:753,&quot;x_min&quot;:36,&quot;x_max&quot;:724,&quot;o&quot;:&quot;m 606 690 q 593 607 606 635 q 546 549 580 578 l 401 422 q 342 358 359 385 q 325 302 325 330 q 351 251 325 267 q 432 235 376 235 l 724 235 l 663 0 l 379 0 q 127 77 218 0 q 36 289 36 154 q 79 450 36 374 q 215 606 123 527 l 293 672 q 307 684 298 677 q 335 728 335 707 l 335 730 l 606 730 l 606 690 m 330 1029 l 608 1029 l 608 787 l 330 787 l 330 1029 z &quot;},&quot;Â¡&quot;:{&quot;ha&quot;:469,&quot;x_min&quot;:100,&quot;x_max&quot;:370,&quot;o&quot;:&quot;m 100 730 l 370 730 l 370 0 l 100 0 l 100 730 m 100 787 l 100 1029 l 370 1029 l 370 787 l 100 787 z &quot;},&quot;Â¬&quot;:{&quot;ha&quot;:1157,&quot;x_min&quot;:172,&quot;x_max&quot;:985,&quot;o&quot;:&quot;m 172 587 l 985 587 l 985 248 l 829 248 l 829 433 l 172 433 l 172 587 z &quot;},&quot;âˆš&quot;:{&quot;ha&quot;:926,&quot;x_min&quot;:52,&quot;x_max&quot;:929,&quot;o&quot;:&quot;m 783 1162 l 929 1162 l 929 1061 l 864 1061 l 464 -28 l 383 -28 l 175 546 l 77 509 l 52 596 l 296 682 l 447 252 l 783 1162 z &quot;},&quot;Æ’&quot;:{&quot;ha&quot;:926,&quot;x_min&quot;:36,&quot;x_max&quot;:798,&quot;o&quot;:&quot;m 692 836 q 636 823 652 836 q 614 772 621 810 l 595 665 l 703 665 l 667 457 l 558 457 l 476 -14 l 475 -22 q 408 -203 451 -160 q 338 -244 378 -232 q 231 -257 298 -257 l 97 -257 l 36 -64 l 142 -64 q 198 -51 182 -64 q 221 0 214 -37 l 300 457 l 225 457 l 261 665 l 336 665 l 357 786 q 359 800 357 790 q 425 974 382 932 q 496 1016 456 1003 q 603 1029 537 1029 l 736 1029 l 798 836 l 692 836 z &quot;},&quot;â‰ˆ&quot;:{&quot;ha&quot;:1157,&quot;x_min&quot;:121,&quot;x_max&quot;:1038,&quot;o&quot;:&quot;m 1038 408 l 1038 236 q 905 165 966 188 q 782 143 843 143 q 590 188 721 143 q 380 232 459 232 q 263 207 325 232 q 121 125 202 182 l 121 297 q 262 371 196 347 q 395 395 329 395 q 601 350 473 395 q 786 306 730 306 q 901 330 842 306 q 1038 408 960 353 m 1038 703 l 1038 530 q 904 461 965 483 q 783 439 843 439 q 591 483 722 439 q 380 526 460 526 q 264 502 323 526 q 121 419 204 477 l 121 593 q 262 666 197 643 q 395 689 328 689 q 601 645 473 689 q 786 600 730 600 q 902 624 842 600 q 1038 703 961 648 z &quot;},&quot;âˆ†&quot;:{&quot;ha&quot;:996,&quot;x_min&quot;:-1,&quot;x_max&quot;:999,&quot;o&quot;:&quot;m 497 718 l 319 193 l 676 193 l 497 718 m 364 999 l 632 999 l 999 0 l -1 0 l 364 999 z &quot;},&quot;Â«&quot;:{&quot;ha&quot;:611,&quot;x_min&quot;:49,&quot;x_max&quot;:570,&quot;o&quot;:&quot;m 421 690 l 555 621 l 446 396 l 570 149 l 433 82 l 277 396 l 421 690 m 192 690 l 326 621 l 216 396 l 340 149 l 204 82 l 49 396 l 192 690 z &quot;},&quot;Â»&quot;:{&quot;ha&quot;:611,&quot;x_min&quot;:41,&quot;x_max&quot;:562,&quot;o&quot;:&quot;m 419 82 l 283 150 l 393 375 l 269 624 l 406 690 l 562 375 l 419 82 m 191 82 l 56 150 l 165 375 l 41 624 l 178 690 l 335 375 l 191 82 z &quot;},&quot;â€¦&quot;:{&quot;ha&quot;:1389,&quot;x_min&quot;:111,&quot;x_max&quot;:1278,&quot;o&quot;:&quot;m 351 241 l 351 0 l 111 0 l 111 241 l 351 241 m 814 241 l 814 0 l 574 0 l 574 241 l 814 241 m 1278 241 l 1278 0 l 1038 0 l 1038 241 l 1278 241 z &quot;},&quot;Â &quot;:{&quot;ha&quot;:926,&quot;x_min&quot;:0,&quot;x_max&quot;:0,&quot;o&quot;:&quot;&quot;},&quot;Ã€&quot;:{&quot;ha&quot;:978,&quot;x_min&quot;:37,&quot;x_max&quot;:926,&quot;o&quot;:&quot;m 699 1029 l 864 1029 l 926 798 l 717 798 q 478 742 566 798 q 345 562 389 686 l 607 562 l 607 755 l 885 755 l 885 0 l 607 0 l 607 325 l 317 325 q 347 160 321 241 q 422 0 374 79 l 203 -144 q 79 110 120 -18 q 37 368 37 238 q 86 645 37 515 q 225 864 136 774 q 426 988 309 947 q 699 1029 543 1029 m 543 1284 l 677 1093 l 557 1093 l 328 1284 l 543 1284 z &quot;},&quot;Ãƒ&quot;:{&quot;ha&quot;:978,&quot;x_min&quot;:37,&quot;x_max&quot;:926,&quot;o&quot;:&quot;m 699 1029 l 864 1029 l 926 798 l 717 798 q 478 742 566 798 q 345 562 389 686 l 607 562 l 607 755 l 885 755 l 885 0 l 607 0 l 607 325 l 317 325 q 347 160 321 241 q 422 0 374 79 l 203 -144 q 79 110 120 -18 q 37 368 37 238 q 86 645 37 515 q 225 864 136 774 q 426 988 309 947 q 699 1029 543 1029 m 779 1276 q 728 1158 766 1200 q 635 1116 690 1116 q 614 1117 624 1116 q 594 1121 604 1118 l 508 1146 q 499 1148 504 1147 q 483 1149 494 1149 q 446 1137 460 1149 q 426 1101 431 1125 l 342 1101 q 393 1219 358 1180 q 483 1258 429 1258 q 505 1256 494 1258 q 529 1251 516 1255 l 610 1230 q 626 1226 618 1227 q 640 1225 633 1225 q 677 1238 663 1225 q 696 1276 690 1251 l 779 1276 z &quot;},&quot;Ã•&quot;:{&quot;ha&quot;:1013,&quot;x_min&quot;:39,&quot;x_max&quot;:974,&quot;o&quot;:&quot;m 318 624 q 333 479 318 551 q 376 340 348 407 q 437 245 403 279 q 507 212 471 212 q 555 228 531 212 q 596 269 578 243 q 669 432 643 342 q 694 616 694 523 q 653 763 694 721 q 507 804 611 804 q 361 763 404 804 q 318 624 318 722 m 507 1042 q 861 945 748 1042 q 974 640 974 848 q 928 360 974 496 q 803 123 883 223 q 669 11 742 47 q 507 -26 595 -26 q 344 11 418 -26 q 210 123 271 48 q 84 359 129 223 q 39 640 39 496 q 152 944 39 847 q 507 1042 266 1042 m 718 1276 q 667 1158 705 1200 q 574 1116 629 1116 q 553 1117 563 1116 q 533 1121 543 1118 l 447 1146 q 438 1148 443 1147 q 422 1149 433 1149 q 385 1137 399 1149 q 365 1101 370 1125 l 281 1101 q 332 1219 297 1180 q 422 1258 368 1258 q 444 1256 433 1258 q 468 1251 455 1255 l 549 1230 q 565 1226 557 1227 q 579 1225 572 1225 q 616 1238 602 1225 q 635 1276 629 1251 l 718 1276 z &quot;},&quot;Å’&quot;:{&quot;ha&quot;:1443,&quot;x_min&quot;:39,&quot;x_max&quot;:1418,&quot;o&quot;:&quot;m 1383 794 l 971 794 l 971 646 l 1348 646 l 1280 408 l 971 408 l 971 237 l 1418 237 l 1344 0 l 705 0 l 705 68 q 618 -3 667 20 q 507 -26 569 -26 q 344 11 418 -26 q 210 123 271 48 q 84 359 129 223 q 39 640 39 496 q 152 944 39 847 q 507 1042 266 1042 q 600 1039 555 1042 q 683 1029 644 1036 l 1321 1029 l 1383 794 m 318 624 q 333 479 318 551 q 376 340 348 407 q 437 245 403 279 q 507 212 471 212 q 555 228 531 212 q 596 269 578 243 q 669 432 643 342 q 694 616 694 523 q 653 763 694 721 q 507 804 611 804 q 361 763 404 804 q 318 624 318 722 z &quot;},&quot;Å“&quot;:{&quot;ha&quot;:1206,&quot;x_min&quot;:32,&quot;x_max&quot;:1187,&quot;o&quot;:&quot;m 1147 205 l 1090 0 l 985 0 q 787 33 875 0 q 647 126 699 66 q 530 16 591 51 q 395 -20 469 -20 q 272 8 328 -20 q 171 90 216 35 q 69 272 106 168 q 32 482 32 377 q 116 710 32 640 q 395 781 201 781 q 539 770 481 781 q 633 737 597 760 q 728 770 671 759 q 864 781 785 781 q 1111 730 1035 781 q 1187 568 1187 680 q 1121 385 1187 471 q 918 221 1054 299 q 960 209 937 213 q 1014 205 983 205 l 1147 205 m 757 364 q 889 454 843 409 q 936 538 936 499 q 916 573 936 561 q 860 586 897 586 q 770 551 804 586 q 737 456 737 516 q 742 411 737 433 q 757 364 747 389 m 505 461 q 478 545 505 518 q 395 572 451 572 q 310 545 337 572 q 282 461 282 517 q 290 387 282 427 q 311 307 297 348 q 350 227 330 254 q 395 200 371 200 q 427 215 411 200 q 458 262 443 231 q 493 361 480 309 q 505 461 505 414 z &quot;},&quot;â€“&quot;:{&quot;ha&quot;:694,&quot;x_min&quot;:0,&quot;x_max&quot;:694,&quot;o&quot;:&quot;m 0 469 l 694 469 l 694 306 l 0 306 l 0 469 z &quot;},&quot;â€”&quot;:{&quot;ha&quot;:1389,&quot;x_min&quot;:0,&quot;x_max&quot;:1389,&quot;o&quot;:&quot;m 1389 306 l 0 306 l 0 469 l 1389 469 l 1389 306 z &quot;},&quot;â€œ&quot;:{&quot;ha&quot;:616,&quot;x_min&quot;:58,&quot;x_max&quot;:528,&quot;o&quot;:&quot;m 285 1029 l 443 1029 l 528 753 l 376 753 l 285 1029 m 309 753 l 157 753 l 58 1029 l 216 1029 l 309 753 z &quot;},&quot;â€&quot;:{&quot;ha&quot;:616,&quot;x_min&quot;:90,&quot;x_max&quot;:559,&quot;o&quot;:&quot;m 401 1029 l 559 1029 l 461 753 l 310 753 l 401 1029 m 241 753 l 90 753 l 175 1029 l 334 1029 l 241 753 z &quot;},&quot;â€˜&quot;:{&quot;ha&quot;:479,&quot;x_min&quot;:69,&quot;x_max&quot;:404,&quot;o&quot;:&quot;m 314 1029 l 404 677 l 172 677 l 69 1029 l 314 1029 z &quot;},&quot;â€™&quot;:{&quot;ha&quot;:479,&quot;x_min&quot;:77,&quot;x_max&quot;:424,&quot;o&quot;:&quot;m 179 1029 l 424 1029 l 310 677 l 77 677 l 179 1029 z &quot;},&quot;Ã·&quot;:{&quot;ha&quot;:1157,&quot;x_min&quot;:172,&quot;x_max&quot;:985,&quot;o&quot;:&quot;m 579 252 q 658 219 625 252 q 690 139 690 186 q 658 60 690 93 q 579 28 626 28 q 499 60 532 28 q 467 139 467 93 q 500 218 467 185 q 579 252 533 252 m 172 493 l 985 493 l 985 336 l 172 336 l 172 493 m 579 802 q 657 768 625 802 q 690 689 690 735 q 657 610 690 643 q 578 578 625 578 q 499 610 531 578 q 467 689 467 643 q 500 768 467 735 q 579 802 533 802 z &quot;},&quot;â—Š&quot;:{&quot;ha&quot;:686,&quot;x_min&quot;:4,&quot;x_max&quot;:682,&quot;o&quot;:&quot;m 343 956 l 82 401 l 343 -158 l 604 401 l 343 956 m 343 1121 l 682 401 l 343 -323 l 4 401 l 343 1121 z &quot;},&quot;Ã¿&quot;:{&quot;ha&quot;:762,&quot;x_min&quot;:-9,&quot;x_max&quot;:772,&quot;o&quot;:&quot;m 261 78 l -9 772 l 272 772 l 387 387 l 515 772 l 772 772 l 399 -257 l 139 -257 l 261 78 m 585 1017 l 585 839 l 419 839 l 419 1017 l 585 1017 m 345 1017 l 345 839 l 179 839 l 179 1017 l 345 1017 z &quot;},&quot;Å¸&quot;:{&quot;ha&quot;:856,&quot;x_min&quot;:-9,&quot;x_max&quot;:865,&quot;o&quot;:&quot;m 582 0 l 343 -153 q 301 -34 314 -109 q 289 197 289 42 l 289 408 l -9 1029 l 289 1029 l 428 693 l 566 1029 l 865 1029 l 566 408 l 566 216 q 569 77 566 128 q 582 0 573 25 m 624 1278 l 624 1100 l 458 1100 l 458 1278 l 624 1278 m 384 1278 l 384 1100 l 218 1100 l 218 1278 l 384 1278 z &quot;},&quot;âˆ•&quot;:{&quot;ha&quot;:232,&quot;x_min&quot;:-232,&quot;x_max&quot;:463,&quot;o&quot;:&quot;m 285 1042 l 463 1042 l -53 -26 l -232 -26 l 285 1042 z &quot;},&quot;Â¤&quot;:{&quot;ha&quot;:842,&quot;x_min&quot;:41,&quot;x_max&quot;:803,&quot;o&quot;:&quot;m 422 777 q 298 724 350 777 q 245 600 245 672 q 297 475 245 527 q 422 424 349 424 q 547 475 495 424 q 599 600 599 527 q 547 724 599 672 q 422 777 495 777 m 121 979 l 258 843 q 335 881 295 868 q 421 893 376 893 q 509 881 468 893 q 586 843 551 868 l 722 979 l 803 900 l 667 761 q 702 685 690 725 q 714 600 714 645 q 702 515 714 555 q 667 439 690 475 l 803 301 l 722 221 l 586 358 q 510 321 551 333 q 422 309 470 309 q 335 320 375 309 q 258 358 296 332 l 121 221 l 41 301 l 178 439 q 141 515 153 475 q 129 600 129 555 q 141 686 129 646 q 178 761 154 726 l 41 900 l 121 979 z &quot;},&quot;â€¹&quot;:{&quot;ha&quot;:382,&quot;x_min&quot;:49,&quot;x_max&quot;:340,&quot;o&quot;:&quot;m 192 690 l 326 621 l 216 396 l 340 149 l 204 82 l 49 396 l 192 690 z &quot;},&quot;â€º&quot;:{&quot;ha&quot;:382,&quot;x_min&quot;:41,&quot;x_max&quot;:335,&quot;o&quot;:&quot;m 191 82 l 56 150 l 165 375 l 41 624 l 178 690 l 335 375 l 191 82 z &quot;},&quot;ï€&quot;:{&quot;ha&quot;:903,&quot;x_min&quot;:52,&quot;x_max&quot;:819,&quot;o&quot;:&quot;m 570 1029 l 819 1029 l 819 827 l 570 827 l 570 1029 m 570 772 l 819 772 l 819 0 l 570 0 l 570 772 m 106 562 l 52 562 l 52 772 l 106 772 l 106 786 q 160 973 106 916 q 340 1029 214 1029 l 473 1029 l 534 836 l 429 836 q 372 822 388 836 q 357 772 357 808 l 357 765 l 497 765 l 497 562 l 357 562 l 357 0 l 106 0 l 106 562 z &quot;},&quot;ï€‚&quot;:{&quot;ha&quot;:903,&quot;x_min&quot;:52,&quot;x_max&quot;:819,&quot;o&quot;:&quot;m 570 1029 l 819 1029 l 819 0 l 570 0 l 570 1029 m 106 562 l 52 562 l 52 772 l 106 772 l 106 786 q 160 973 106 916 q 340 1029 214 1029 l 473 1029 l 534 836 l 429 836 q 373 823 389 836 q 357 774 357 809 l 357 765 l 497 765 l 497 562 l 357 562 l 357 0 l 106 0 l 106 562 z &quot;},&quot;â€¡&quot;:{&quot;ha&quot;:694,&quot;x_min&quot;:18,&quot;x_max&quot;:676,&quot;o&quot;:&quot;m 471 1029 l 471 782 l 676 782 l 676 589 l 471 589 l 471 278 l 676 278 l 676 85 l 471 85 l 471 -161 l 224 -161 l 224 85 l 18 85 l 18 278 l 224 278 l 224 589 l 18 589 l 18 782 l 224 782 l 224 1029 l 471 1029 z &quot;},&quot;Â·&quot;:{&quot;ha&quot;:479,&quot;x_min&quot;:100,&quot;x_max&quot;:379,&quot;o&quot;:&quot;m 100 518 q 140 616 100 575 q 239 657 181 657 q 338 617 298 657 q 379 518 379 576 q 338 419 379 460 q 239 378 296 378 q 141 420 183 378 q 100 518 100 462 z &quot;},&quot;â€š&quot;:{&quot;ha&quot;:479,&quot;x_min&quot;:40,&quot;x_max&quot;:387,&quot;o&quot;:&quot;m 143 241 l 387 241 l 273 -110 l 40 -110 l 143 241 z &quot;},&quot;â€ž&quot;:{&quot;ha&quot;:616,&quot;x_min&quot;:46,&quot;x_max&quot;:515,&quot;o&quot;:&quot;m 357 167 l 515 167 l 416 -110 l 265 -110 l 357 167 m 197 -110 l 46 -110 l 131 167 l 289 167 l 197 -110 z &quot;},&quot;â€°&quot;:{&quot;ha&quot;:1504,&quot;x_min&quot;:35,&quot;x_max&quot;:1470,&quot;o&quot;:&quot;m 1174 267 q 1197 170 1174 216 q 1244 125 1221 125 q 1291 170 1268 125 q 1314 268 1314 216 q 1297 314 1314 299 q 1244 329 1280 329 q 1192 313 1209 329 q 1174 267 1174 298 m 1018 294 q 1072 431 1018 388 q 1243 473 1125 473 q 1415 430 1361 473 q 1470 294 1470 387 q 1403 67 1470 161 q 1243 -26 1336 -26 q 1084 67 1150 -26 q 1018 294 1018 161 m 679 267 q 702 170 679 216 q 749 125 725 125 q 795 170 772 125 q 818 268 818 216 q 801 314 818 299 q 749 329 784 329 q 696 314 713 329 q 679 267 679 298 m 524 294 q 577 431 524 388 q 749 473 631 473 q 920 431 866 473 q 974 294 974 388 q 908 67 974 161 q 749 -26 842 -26 q 590 67 656 -26 q 524 294 524 161 m 694 1029 l 844 947 l 273 0 l 129 89 l 694 1029 m 191 836 q 214 739 191 785 q 261 693 237 693 q 308 738 285 693 q 330 836 330 783 q 313 882 330 867 q 261 897 296 897 q 208 882 225 897 q 191 836 191 867 m 35 863 q 89 999 35 956 q 261 1042 143 1042 q 432 999 378 1042 q 486 863 486 956 q 420 636 486 729 q 261 543 354 543 q 101 636 168 543 q 35 863 35 730 z &quot;},&quot;Ã‚&quot;:{&quot;ha&quot;:978,&quot;x_min&quot;:37,&quot;x_max&quot;:926,&quot;o&quot;:&quot;m 699 1029 l 864 1029 l 926 798 l 717 798 q 478 742 566 798 q 345 562 389 686 l 607 562 l 607 755 l 885 755 l 885 0 l 607 0 l 607 325 l 317 325 q 347 160 321 241 q 422 0 374 79 l 203 -144 q 79 110 120 -18 q 37 368 37 238 q 86 645 37 515 q 225 864 136 774 q 426 988 309 947 q 699 1029 543 1029 m 473 1284 l 647 1284 l 782 1093 l 672 1093 l 561 1187 l 451 1093 l 340 1093 l 473 1284 z &quot;},&quot;ÃŠ&quot;:{&quot;ha&quot;:836,&quot;x_min&quot;:87,&quot;x_max&quot;:811,&quot;o&quot;:&quot;m 777 800 l 364 800 l 364 640 l 741 640 l 672 408 l 364 408 l 364 232 l 811 232 l 737 0 l 87 0 l 87 1029 l 714 1029 l 777 800 m 323 1284 l 497 1284 l 632 1093 l 522 1093 l 411 1187 l 301 1093 l 190 1093 l 323 1284 z &quot;},&quot;Ã&quot;:{&quot;ha&quot;:978,&quot;x_min&quot;:37,&quot;x_max&quot;:926,&quot;o&quot;:&quot;m 699 1029 l 864 1029 l 926 798 l 717 798 q 478 742 566 798 q 345 562 389 686 l 607 562 l 607 755 l 885 755 l 885 0 l 607 0 l 607 325 l 317 325 q 347 160 321 241 q 422 0 374 79 l 203 -144 q 79 110 120 -18 q 37 368 37 238 q 86 645 37 515 q 225 864 136 774 q 426 988 309 947 q 699 1029 543 1029 m 794 1284 l 566 1093 l 446 1093 l 581 1284 l 794 1284 z &quot;},&quot;Ã‹&quot;:{&quot;ha&quot;:836,&quot;x_min&quot;:87,&quot;x_max&quot;:811,&quot;o&quot;:&quot;m 777 800 l 364 800 l 364 640 l 741 640 l 672 408 l 364 408 l 364 232 l 811 232 l 737 0 l 87 0 l 87 1029 l 714 1029 l 777 800 m 614 1278 l 614 1100 l 448 1100 l 448 1278 l 614 1278 m 374 1278 l 374 1100 l 208 1100 l 208 1278 l 374 1278 z &quot;},&quot;Ãˆ&quot;:{&quot;ha&quot;:836,&quot;x_min&quot;:87,&quot;x_max&quot;:811,&quot;o&quot;:&quot;m 777 800 l 364 800 l 364 640 l 741 640 l 672 408 l 364 408 l 364 232 l 811 232 l 737 0 l 87 0 l 87 1029 l 714 1029 l 777 800 m 393 1284 l 528 1093 l 407 1093 l 178 1284 l 393 1284 z &quot;},&quot;Ã&quot;:{&quot;ha&quot;:469,&quot;x_min&quot;:93,&quot;x_max&quot;:461,&quot;o&quot;:&quot;m 93 1029 l 376 1029 l 376 0 l 93 0 l 93 1029 m 461 1284 l 233 1093 l 113 1093 l 248 1284 l 461 1284 z &quot;},&quot;ÃŽ&quot;:{&quot;ha&quot;:469,&quot;x_min&quot;:7,&quot;x_max&quot;:449,&quot;o&quot;:&quot;m 93 1029 l 376 1029 l 376 0 l 93 0 l 93 1029 m 140 1284 l 314 1284 l 449 1093 l 339 1093 l 228 1187 l 118 1093 l 7 1093 l 140 1284 z &quot;},&quot;Ã&quot;:{&quot;ha&quot;:469,&quot;x_min&quot;:25,&quot;x_max&quot;:431,&quot;o&quot;:&quot;m 93 1029 l 376 1029 l 376 0 l 93 0 l 93 1029 m 431 1278 l 431 1100 l 265 1100 l 265 1278 l 431 1278 m 191 1278 l 191 1100 l 25 1100 l 25 1278 l 191 1278 z &quot;},&quot;ÃŒ&quot;:{&quot;ha&quot;:469,&quot;x_min&quot;:-5,&quot;x_max&quot;:376,&quot;o&quot;:&quot;m 93 1029 l 376 1029 l 376 0 l 93 0 l 93 1029 m 210 1284 l 345 1093 l 224 1093 l -5 1284 l 210 1284 z &quot;},&quot;Ã“&quot;:{&quot;ha&quot;:1013,&quot;x_min&quot;:39,&quot;x_max&quot;:974,&quot;o&quot;:&quot;m 318 624 q 333 479 318 551 q 376 340 348 407 q 437 245 403 279 q 507 212 471 212 q 555 228 531 212 q 596 269 578 243 q 669 432 643 342 q 694 616 694 523 q 653 763 694 721 q 507 804 611 804 q 361 763 404 804 q 318 624 318 722 m 507 1042 q 861 945 748 1042 q 974 640 974 848 q 928 360 974 496 q 803 123 883 223 q 669 11 742 47 q 507 -26 595 -26 q 344 11 418 -26 q 210 123 271 48 q 84 359 129 223 q 39 640 39 496 q 152 944 39 847 q 507 1042 266 1042 m 733 1284 l 505 1093 l 385 1093 l 519 1284 l 733 1284 z &quot;},&quot;Ã”&quot;:{&quot;ha&quot;:1013,&quot;x_min&quot;:39,&quot;x_max&quot;:974,&quot;o&quot;:&quot;m 318 624 q 333 479 318 551 q 376 340 348 407 q 437 245 403 279 q 507 212 471 212 q 555 228 531 212 q 596 269 578 243 q 669 432 643 342 q 694 616 694 523 q 653 763 694 721 q 507 804 611 804 q 361 763 404 804 q 318 624 318 722 m 507 1042 q 861 945 748 1042 q 974 640 974 848 q 928 360 974 496 q 803 123 883 223 q 669 11 742 47 q 507 -26 595 -26 q 344 11 418 -26 q 210 123 271 48 q 84 359 129 223 q 39 640 39 496 q 152 944 39 847 q 507 1042 266 1042 m 412 1284 l 586 1284 l 721 1093 l 611 1093 l 500 1187 l 390 1093 l 279 1093 l 412 1284 z &quot;},&quot;ï€€&quot;:{&quot;ha&quot;:1097,&quot;x_min&quot;:77,&quot;x_max&quot;:1021,&quot;o&quot;:&quot;m 567 825 q 566 834 566 829 q 566 850 566 840 q 630 1005 566 934 q 790 1095 694 1077 q 791 1079 791 1088 q 791 1053 791 1070 q 721 893 791 964 q 583 823 651 823 l 578 823 q 573 824 576 823 q 567 825 570 825 m 1021 273 q 882 41 943 106 q 743 -24 820 -24 q 654 -1 709 -24 q 571 21 599 21 q 482 -1 541 21 q 396 -24 424 -24 q 309 6 353 -24 q 221 96 265 36 q 114 296 152 191 q 77 500 77 401 q 161 742 77 648 q 380 835 246 835 q 486 812 427 835 q 570 789 545 789 q 652 812 593 789 q 755 836 711 836 q 890 809 830 836 q 999 725 949 782 q 896 626 930 681 q 863 503 863 572 q 903 367 863 426 q 1021 273 944 308 z &quot;},&quot;Ã’&quot;:{&quot;ha&quot;:1013,&quot;x_min&quot;:39,&quot;x_max&quot;:974,&quot;o&quot;:&quot;m 318 624 q 333 479 318 551 q 376 340 348 407 q 437 245 403 279 q 507 212 471 212 q 555 228 531 212 q 596 269 578 243 q 669 432 643 342 q 694 616 694 523 q 653 763 694 721 q 507 804 611 804 q 361 763 404 804 q 318 624 318 722 m 507 1042 q 861 945 748 1042 q 974 640 974 848 q 928 360 974 496 q 803 123 883 223 q 669 11 742 47 q 507 -26 595 -26 q 344 11 418 -26 q 210 123 271 48 q 84 359 129 223 q 39 640 39 496 q 152 944 39 847 q 507 1042 266 1042 m 481 1284 l 616 1093 l 496 1093 l 267 1284 l 481 1284 z &quot;},&quot;Ãš&quot;:{&quot;ha&quot;:974,&quot;x_min&quot;:39,&quot;x_max&quot;:888,&quot;o&quot;:&quot;m 888 1029 l 888 0 l 564 0 q 353 9 418 0 q 240 40 288 18 q 90 183 142 84 q 39 429 39 283 q 83 708 39 559 q 220 1029 127 856 l 507 1029 q 363 687 407 823 q 319 450 319 551 q 367 286 319 338 q 517 235 414 235 l 611 235 l 611 1029 l 888 1029 m 783 1284 l 555 1093 l 435 1093 l 570 1284 l 783 1284 z &quot;},&quot;Ã›&quot;:{&quot;ha&quot;:974,&quot;x_min&quot;:39,&quot;x_max&quot;:888,&quot;o&quot;:&quot;m 888 1029 l 888 0 l 564 0 q 353 9 418 0 q 240 40 288 18 q 90 183 142 84 q 39 429 39 283 q 83 708 39 559 q 220 1029 127 856 l 507 1029 q 363 687 407 823 q 319 450 319 551 q 367 286 319 338 q 517 235 414 235 l 611 235 l 611 1029 l 888 1029 m 463 1284 l 636 1284 l 771 1093 l 661 1093 l 550 1187 l 440 1093 l 329 1093 l 463 1284 z &quot;},&quot;Ã™&quot;:{&quot;ha&quot;:974,&quot;x_min&quot;:39,&quot;x_max&quot;:888,&quot;o&quot;:&quot;m 888 1029 l 888 0 l 564 0 q 353 9 418 0 q 240 40 288 18 q 90 183 142 84 q 39 429 39 283 q 83 708 39 559 q 220 1029 127 856 l 507 1029 q 363 687 407 823 q 319 450 319 551 q 367 286 319 338 q 517 235 414 235 l 611 235 l 611 1029 l 888 1029 m 532 1284 l 667 1093 l 546 1093 l 317 1284 l 532 1284 z &quot;},&quot;Ä±&quot;:{&quot;ha&quot;:418,&quot;x_min&quot;:83,&quot;x_max&quot;:335,&quot;o&quot;:&quot;m 83 772 l 335 772 l 335 0 l 83 0 l 83 772 z &quot;},&quot;Ë†&quot;:{&quot;ha&quot;:694,&quot;x_min&quot;:126,&quot;x_max&quot;:568,&quot;o&quot;:&quot;m 260 1023 l 433 1023 l 568 832 l 458 832 l 347 926 l 237 832 l 126 832 l 260 1023 z &quot;},&quot;Ëœ&quot;:{&quot;ha&quot;:694,&quot;x_min&quot;:129,&quot;x_max&quot;:566,&quot;o&quot;:&quot;m 566 1015 q 514 897 552 939 q 421 854 476 854 q 400 856 410 854 q 380 860 390 857 l 294 885 q 285 887 290 886 q 269 888 280 888 q 232 876 246 888 q 212 840 218 864 l 129 840 q 180 958 144 919 q 269 997 215 997 q 291 995 280 997 q 315 990 302 994 l 397 968 q 412 965 405 966 q 427 964 419 964 q 463 977 450 964 q 482 1015 477 989 l 566 1015 z &quot;},&quot;Â¯&quot;:{&quot;ha&quot;:694,&quot;x_min&quot;:144,&quot;x_max&quot;:550,&quot;o&quot;:&quot;m 550 987 l 550 867 l 144 867 l 144 987 l 550 987 z &quot;},&quot;Ë˜&quot;:{&quot;ha&quot;:694,&quot;x_min&quot;:134,&quot;x_max&quot;:561,&quot;o&quot;:&quot;m 236 1023 q 269 968 241 986 q 347 950 296 950 q 427 968 399 950 q 458 1023 454 987 l 561 1023 q 499 878 551 924 q 347 832 448 832 q 196 879 248 832 q 134 1023 144 925 l 236 1023 z &quot;},&quot;Ë™&quot;:{&quot;ha&quot;:694,&quot;x_min&quot;:262,&quot;x_max&quot;:432,&quot;o&quot;:&quot;m 432 1019 l 432 836 l 262 836 l 262 1019 l 432 1019 z &quot;},&quot;Ëš&quot;:{&quot;ha&quot;:694,&quot;x_min&quot;:189,&quot;x_max&quot;:507,&quot;o&quot;:&quot;m 407 979 q 390 1022 407 1005 q 349 1039 374 1039 q 306 1022 323 1039 q 289 979 289 1004 q 306 938 289 955 q 349 921 323 921 q 390 938 373 921 q 407 979 407 955 m 347 1140 q 460 1093 414 1140 q 507 981 507 1046 q 460 867 507 914 q 347 821 414 821 q 235 867 281 821 q 189 981 189 913 q 235 1094 189 1047 q 347 1140 281 1140 z &quot;},&quot;Â¸&quot;:{&quot;ha&quot;:694,&quot;x_min&quot;:184,&quot;x_max&quot;:554,&quot;o&quot;:&quot;m 309 -150 l 335 -57 l 386 -57 q 512 -90 471 -57 q 554 -187 554 -122 q 509 -292 554 -255 q 382 -329 465 -329 q 294 -321 342 -329 q 184 -297 245 -313 l 214 -203 q 302 -222 267 -216 q 364 -228 338 -228 q 405 -217 391 -228 q 418 -186 418 -207 q 399 -158 418 -167 q 340 -149 380 -149 q 325 -149 336 -149 q 309 -150 314 -150 z &quot;},&quot;Ë&quot;:{&quot;ha&quot;:694,&quot;x_min&quot;:179,&quot;x_max&quot;:679,&quot;o&quot;:&quot;m 493 1023 l 679 1023 l 481 832 l 382 832 l 493 1023 m 267 1023 l 446 1023 l 267 832 l 179 832 l 267 1023 z &quot;},&quot;Ë›&quot;:{&quot;ha&quot;:694,&quot;x_min&quot;:231,&quot;x_max&quot;:465,&quot;o&quot;:&quot;m 435 0 q 375 -62 394 -33 q 355 -119 355 -91 q 367 -155 355 -143 q 403 -167 379 -167 l 465 -167 l 465 -290 l 416 -290 q 273 -262 315 -290 q 231 -170 231 -234 q 261 -81 231 -123 q 355 0 292 -40 l 435 0 z &quot;},&quot;Ë‡&quot;:{&quot;ha&quot;:694,&quot;x_min&quot;:126,&quot;x_max&quot;:568,&quot;o&quot;:&quot;m 433 832 l 260 832 l 126 1023 l 236 1023 l 347 929 l 457 1023 l 568 1023 l 433 832 z &quot;},&quot;Å&quot;:{&quot;ha&quot;:749,&quot;x_min&quot;:12,&quot;x_max&quot;:739,&quot;o&quot;:&quot;m 106 282 l 12 216 l 12 432 l 106 497 l 106 1029 l 382 1029 l 382 689 l 559 812 l 559 596 l 382 472 l 382 252 l 739 252 l 668 0 l 106 0 l 106 282 z &quot;},&quot;Å‚&quot;:{&quot;ha&quot;:418,&quot;x_min&quot;:0,&quot;x_max&quot;:418,&quot;o&quot;:&quot;m 83 385 l 0 325 l 0 482 l 83 541 l 83 1029 l 335 1029 l 335 682 l 418 741 l 418 583 l 335 525 l 335 0 l 83 0 l 83 385 z &quot;},&quot;Å &quot;:{&quot;ha&quot;:733,&quot;x_min&quot;:45,&quot;x_max&quot;:707,&quot;o&quot;:&quot;m 679 794 l 408 794 q 368 786 380 794 q 355 760 355 778 q 361 739 355 749 q 380 713 367 728 l 606 461 q 682 348 657 403 q 707 236 707 293 q 683 131 707 180 q 616 52 659 83 q 522 12 578 24 q 350 0 466 0 l 113 0 l 45 237 l 345 237 q 381 247 368 237 q 393 275 393 256 q 388 294 393 283 q 372 317 382 305 l 126 591 q 68 686 88 635 q 47 790 47 738 q 60 870 47 832 q 96 940 72 908 q 191 1009 132 988 q 366 1029 250 1029 l 616 1029 l 679 794 m 446 1093 l 272 1093 l 138 1284 l 248 1284 l 359 1190 l 469 1284 l 581 1284 l 446 1093 z &quot;},&quot;Å¡&quot;:{&quot;ha&quot;:566,&quot;x_min&quot;:39,&quot;x_max&quot;:541,&quot;o&quot;:&quot;m 39 203 l 228 203 q 251 208 244 203 q 258 224 258 212 q 254 240 258 231 q 241 260 250 250 l 113 428 q 64 511 80 470 q 47 590 47 551 q 67 674 47 637 q 127 739 87 711 q 195 765 155 757 q 317 772 236 772 l 457 772 l 517 570 l 375 570 q 346 563 355 570 q 336 543 336 557 q 339 529 336 536 q 346 517 342 522 l 479 345 q 525 264 509 305 q 541 184 541 224 q 478 45 541 90 q 283 0 416 0 l 100 0 l 39 203 m 370 832 l 196 832 l 62 1023 l 172 1023 l 283 929 l 393 1023 l 505 1023 l 370 832 z &quot;},&quot;Å½&quot;:{&quot;ha&quot;:865,&quot;x_min&quot;:39,&quot;x_max&quot;:806,&quot;o&quot;:&quot;m 395 794 l 90 794 l 149 1029 l 806 1029 l 452 237 l 794 237 l 725 0 l 39 0 l 395 794 m 513 1093 l 339 1093 l 205 1284 l 315 1284 l 427 1190 l 536 1284 l 648 1284 l 513 1093 z &quot;},&quot;Å¾&quot;:{&quot;ha&quot;:668,&quot;x_min&quot;:20,&quot;x_max&quot;:647,&quot;o&quot;:&quot;m 282 566 l 57 566 l 117 772 l 647 772 l 385 205 l 628 205 l 564 0 l 20 0 l 282 566 m 421 832 l 248 832 l 114 1023 l 224 1023 l 335 929 l 445 1023 l 556 1023 l 421 832 z &quot;},&quot;Â¦&quot;:{&quot;ha&quot;:694,&quot;x_min&quot;:267,&quot;x_max&quot;:429,&quot;o&quot;:&quot;m 267 277 l 429 277 l 429 -237 l 267 -237 l 267 277 m 267 971 l 429 971 l 429 457 l 267 457 l 267 971 z &quot;},&quot;Ã&quot;:{&quot;ha&quot;:990,&quot;x_min&quot;:0,&quot;x_max&quot;:960,&quot;o&quot;:&quot;m 100 428 l 0 428 l 0 604 l 100 604 l 100 755 l 376 755 l 376 604 l 492 604 l 492 428 l 376 428 l 376 237 q 599 355 512 251 q 686 607 686 459 q 638 748 686 699 q 498 798 589 798 l 52 798 l 114 1029 l 496 1029 q 699 1008 623 1029 q 832 939 774 987 q 927 804 895 886 q 960 618 960 722 q 907 364 960 486 q 758 157 854 243 q 556 37 667 74 q 283 0 446 0 l 100 0 l 100 428 z &quot;},&quot;Ã°&quot;:{&quot;ha&quot;:755,&quot;x_min&quot;:31,&quot;x_max&quot;:725,&quot;o&quot;:&quot;m 269 1042 q 314 1016 289 1032 q 374 977 340 1000 l 449 1047 l 510 990 l 440 928 q 654 700 584 819 q 725 447 725 581 q 690 249 725 346 q 591 81 654 152 q 494 5 548 31 q 378 -20 441 -20 q 261 6 315 -20 q 164 81 208 31 q 66 247 102 151 q 31 437 31 342 q 108 643 31 576 q 345 710 185 710 q 389 709 365 710 q 436 705 412 707 q 379 767 406 741 q 325 814 352 794 l 241 737 l 186 799 l 254 863 q 232 879 247 869 q 176 913 218 889 l 269 1042 m 485 418 q 458 494 485 469 q 378 519 432 519 q 297 494 323 519 q 271 418 271 469 q 307 256 271 332 q 378 180 342 180 q 449 256 413 180 q 485 418 485 332 z &quot;},&quot;Ã&quot;:{&quot;ha&quot;:856,&quot;x_min&quot;:-9,&quot;x_max&quot;:865,&quot;o&quot;:&quot;m 582 0 l 343 -153 q 301 -34 314 -109 q 289 197 289 42 l 289 408 l -9 1029 l 289 1029 l 428 693 l 566 1029 l 865 1029 l 566 408 l 566 216 q 569 77 566 128 q 582 0 573 25 m 654 1284 l 427 1093 l 306 1093 l 441 1284 l 654 1284 z &quot;},&quot;Ã½&quot;:{&quot;ha&quot;:762,&quot;x_min&quot;:-9,&quot;x_max&quot;:772,&quot;o&quot;:&quot;m 261 78 l -9 772 l 272 772 l 387 387 l 515 772 l 772 772 l 399 -257 l 139 -257 l 261 78 m 615 1023 l 387 832 l 267 832 l 401 1023 l 615 1023 z &quot;},&quot;Ãž&quot;:{&quot;ha&quot;:900,&quot;x_min&quot;:52,&quot;x_max&quot;:872,&quot;o&quot;:&quot;m 376 637 l 376 383 q 536 491 479 435 q 593 599 593 547 q 569 659 593 639 q 497 679 545 679 l 52 679 l 100 911 l 100 1029 l 376 1029 l 376 911 l 547 911 q 786 834 700 911 q 872 623 872 758 q 747 342 872 470 q 376 118 621 215 l 376 0 l 100 0 l 100 637 l 376 637 z &quot;},&quot;Ã¾&quot;:{&quot;ha&quot;:798,&quot;x_min&quot;:78,&quot;x_max&quot;:765,&quot;o&quot;:&quot;m 325 215 q 464 307 412 241 q 515 456 515 372 q 487 536 515 509 q 400 562 458 562 l 325 562 l 325 215 m 78 1029 l 325 1029 l 325 772 l 375 772 q 524 764 471 772 q 616 737 577 756 q 726 635 686 705 q 765 473 765 565 q 647 171 765 299 q 325 0 528 43 l 325 -257 l 78 -257 l 78 1029 z &quot;},&quot;âˆ’&quot;:{&quot;ha&quot;:1157,&quot;x_min&quot;:172,&quot;x_max&quot;:985,&quot;o&quot;:&quot;m 172 494 l 985 494 l 985 335 l 172 335 l 172 494 z &quot;},&quot;Ã—&quot;:{&quot;ha&quot;:1157,&quot;x_min&quot;:182,&quot;x_max&quot;:999,&quot;o&quot;:&quot;m 292 823 l 590 525 l 889 823 l 999 714 l 700 414 l 999 115 l 889 5 l 590 304 l 292 5 l 182 115 l 481 414 l 182 714 l 292 823 z &quot;},&quot;Â¹&quot;:{&quot;ha&quot;:611,&quot;x_min&quot;:118,&quot;x_max&quot;:410,&quot;o&quot;:&quot;m 410 406 l 229 406 l 229 882 l 118 882 l 158 1023 l 410 1023 l 410 406 z &quot;},&quot;Â²&quot;:{&quot;ha&quot;:611,&quot;x_min&quot;:47,&quot;x_max&quot;:528,&quot;o&quot;:&quot;m 125 1023 l 329 1023 q 460 991 416 1023 q 505 899 505 960 q 498 855 505 878 q 476 804 492 833 l 330 550 l 528 550 l 482 406 l 47 406 l 289 829 q 296 844 294 838 q 298 857 298 850 q 290 875 298 869 q 265 882 281 882 l 85 882 l 125 1023 z &quot;},&quot;Â³&quot;:{&quot;ha&quot;:611,&quot;x_min&quot;:66,&quot;x_max&quot;:539,&quot;o&quot;:&quot;m 79 882 l 119 1023 l 342 1023 q 472 986 424 1023 q 519 886 519 949 q 497 809 519 846 q 428 737 474 772 q 512 650 486 693 q 539 558 539 606 q 516 478 539 514 q 453 425 493 443 q 395 410 429 414 q 275 406 361 406 l 113 406 l 66 550 l 282 550 q 321 559 307 550 q 335 583 335 568 q 297 644 335 609 q 176 733 260 680 q 284 809 252 781 q 317 859 317 838 q 309 875 317 868 q 288 882 300 882 l 79 882 z &quot;},&quot;Â½&quot;:{&quot;ha&quot;:1398,&quot;x_min&quot;:114,&quot;x_max&quot;:1318,&quot;o&quot;:&quot;m 935 576 l 1129 576 q 1254 547 1211 576 q 1297 460 1297 517 q 1291 418 1297 439 q 1270 372 1284 397 l 1131 135 l 1318 135 l 1275 0 l 861 0 l 1090 395 q 1098 409 1095 402 q 1100 421 1100 415 q 1092 438 1100 432 q 1069 444 1084 444 l 896 444 l 935 576 m 868 1042 l 1046 1042 l 530 -26 l 351 -26 l 868 1042 m 392 447 l 220 447 l 220 892 l 114 892 l 151 1023 l 392 1023 l 392 447 z &quot;},&quot;Â¼&quot;:{&quot;ha&quot;:1398,&quot;x_min&quot;:114,&quot;x_max&quot;:1352,&quot;o&quot;:&quot;m 1299 257 l 1352 257 l 1352 125 l 1299 125 l 1299 0 l 1133 0 l 1133 125 l 864 125 l 864 243 l 1026 576 l 1202 576 l 1042 254 l 1133 254 l 1133 367 l 1299 367 l 1299 257 m 868 1042 l 1046 1042 l 530 -26 l 351 -26 l 868 1042 m 392 447 l 220 447 l 220 892 l 114 892 l 151 1023 l 392 1023 l 392 447 z &quot;},&quot;Â¾&quot;:{&quot;ha&quot;:1398,&quot;x_min&quot;:64,&quot;x_max&quot;:1352,&quot;o&quot;:&quot;m 1299 257 l 1352 257 l 1352 125 l 1299 125 l 1299 0 l 1133 0 l 1133 125 l 864 125 l 864 243 l 1026 576 l 1202 576 l 1042 254 l 1133 254 l 1133 367 l 1299 367 l 1299 257 m 868 1042 l 1046 1042 l 530 -26 l 351 -26 l 868 1042 m 77 892 l 115 1023 l 325 1023 q 450 989 404 1023 q 496 896 496 955 q 474 824 496 859 q 408 757 452 789 q 489 675 463 715 q 514 590 514 635 q 492 515 514 548 q 432 465 471 482 q 376 451 408 456 q 262 447 344 447 l 107 447 l 64 582 l 269 582 q 306 590 293 582 q 319 614 319 599 q 284 670 319 637 q 168 753 249 703 q 272 824 241 797 q 302 869 302 851 q 295 885 302 879 q 273 892 287 892 l 77 892 z &quot;},&quot;â‚£&quot;:{&quot;ha&quot;:1343,&quot;x_min&quot;:86,&quot;x_max&quot;:1304,&quot;o&quot;:&quot;m 703 1029 l 765 794 l 364 794 l 364 636 l 729 636 l 663 399 l 364 399 l 364 216 q 368 72 364 121 q 379 0 371 24 l 140 -153 q 99 -34 111 -109 q 86 197 86 42 l 86 1029 l 703 1029 m 893 772 l 1145 772 l 1145 733 q 1205 769 1169 757 q 1289 781 1242 781 l 1304 781 l 1304 566 q 1209 545 1249 564 q 1145 486 1169 525 l 1145 0 l 893 0 l 893 772 z &quot;},&quot;Äž&quot;:{&quot;ha&quot;:990,&quot;x_min&quot;:39,&quot;x_max&quot;:903,&quot;o&quot;:&quot;m 721 0 q 440 38 557 0 q 240 155 323 76 q 90 371 142 251 q 39 625 39 491 q 72 809 39 728 q 170 943 105 889 q 300 1009 224 989 q 498 1029 375 1029 l 825 1029 l 890 794 l 533 794 q 365 750 415 794 q 314 604 314 706 q 402 354 314 454 q 636 239 490 254 l 636 476 l 526 476 l 526 704 l 903 704 l 903 0 l 721 0 m 378 1284 q 410 1229 383 1247 q 489 1211 437 1211 q 568 1230 541 1211 q 600 1284 596 1248 l 703 1284 q 641 1139 692 1185 q 489 1093 589 1093 q 337 1140 389 1093 q 275 1284 286 1186 l 378 1284 z &quot;},&quot;ÄŸ&quot;:{&quot;ha&quot;:798,&quot;x_min&quot;:32,&quot;x_max&quot;:721,&quot;o&quot;:&quot;m 379 566 q 307 538 331 566 q 282 458 282 511 q 335 300 282 364 q 472 229 387 236 l 472 566 l 379 566 m 90 -52 l 427 -52 q 474 -41 461 -52 q 486 3 486 -30 l 486 14 q 157 153 282 25 q 32 476 32 281 q 120 700 32 627 q 392 772 209 772 l 721 772 l 721 16 q 657 -197 721 -137 q 429 -257 593 -257 l 151 -257 l 90 -52 m 288 1023 q 320 968 293 986 q 399 950 347 950 q 478 968 450 950 q 510 1023 506 987 l 612 1023 q 551 878 602 924 q 399 832 499 832 q 247 879 299 832 q 185 1023 195 925 l 288 1023 z &quot;},&quot;Ä°&quot;:{&quot;ha&quot;:469,&quot;x_min&quot;:93,&quot;x_max&quot;:376,&quot;o&quot;:&quot;m 93 1029 l 376 1029 l 376 0 l 93 0 l 93 1029 m 313 1280 l 313 1097 l 143 1097 l 143 1280 l 313 1280 z &quot;},&quot;Åž&quot;:{&quot;ha&quot;:733,&quot;x_min&quot;:45,&quot;x_max&quot;:707,&quot;o&quot;:&quot;m 679 794 l 408 794 q 368 786 380 794 q 355 760 355 778 q 361 739 355 749 q 380 713 367 728 l 606 461 q 682 348 657 403 q 707 236 707 293 q 683 131 707 180 q 616 52 659 83 q 522 12 578 24 q 350 0 466 0 l 113 0 l 45 237 l 345 237 q 381 247 368 237 q 393 275 393 256 q 388 294 393 283 q 372 317 382 305 l 126 591 q 68 686 88 635 q 47 790 47 738 q 60 870 47 832 q 96 940 72 908 q 191 1009 132 988 q 366 1029 250 1029 l 616 1029 l 679 794 m 328 -150 l 355 -57 l 406 -57 q 532 -90 490 -57 q 574 -187 574 -122 q 529 -292 574 -255 q 401 -329 484 -329 q 313 -321 362 -329 q 204 -297 264 -313 l 233 -203 q 322 -222 286 -216 q 384 -228 357 -228 q 424 -217 411 -228 q 437 -186 437 -207 q 419 -158 437 -167 q 360 -149 400 -149 q 345 -149 355 -149 q 328 -150 334 -150 z &quot;},&quot;ÅŸ&quot;:{&quot;ha&quot;:566,&quot;x_min&quot;:39,&quot;x_max&quot;:541,&quot;o&quot;:&quot;m 39 203 l 228 203 q 251 208 244 203 q 258 224 258 212 q 254 240 258 231 q 241 260 250 250 l 113 428 q 64 511 80 470 q 47 590 47 551 q 67 674 47 637 q 127 739 87 711 q 195 765 155 757 q 317 772 236 772 l 457 772 l 517 570 l 375 570 q 346 563 355 570 q 336 543 336 557 q 339 529 336 536 q 346 517 342 522 l 479 345 q 525 264 509 305 q 541 184 541 224 q 478 45 541 90 q 283 0 416 0 l 100 0 l 39 203 m 245 -150 l 271 -57 l 322 -57 q 449 -90 407 -57 q 490 -187 490 -122 q 446 -292 490 -255 q 318 -329 401 -329 q 230 -321 279 -329 q 121 -297 181 -313 l 150 -203 q 238 -222 203 -216 q 300 -228 274 -228 q 341 -217 328 -228 q 354 -186 354 -207 q 335 -158 354 -167 q 277 -149 317 -149 q 261 -149 272 -149 q 245 -150 250 -150 z &quot;},&quot;Ä†&quot;:{&quot;ha&quot;:778,&quot;x_min&quot;:39,&quot;x_max&quot;:742,&quot;o&quot;:&quot;m 659 0 q 428 34 527 0 q 249 140 329 68 q 94 356 149 230 q 39 624 39 483 q 72 808 39 728 q 170 943 105 889 q 300 1009 224 989 q 498 1029 375 1029 l 659 1029 l 725 794 l 533 794 q 365 750 415 794 q 314 606 314 707 q 423 332 314 433 q 721 232 532 232 l 742 232 l 672 0 l 659 0 m 696 1284 l 468 1093 l 347 1093 l 482 1284 l 696 1284 z &quot;},&quot;Ä‡&quot;:{&quot;ha&quot;:591,&quot;x_min&quot;:32,&quot;x_max&quot;:578,&quot;o&quot;:&quot;m 498 0 q 319 30 399 0 q 180 118 239 59 q 70 281 107 191 q 32 475 32 371 q 114 697 32 622 q 355 772 195 772 l 503 772 l 562 566 l 404 566 q 310 539 339 566 q 281 453 281 512 q 354 276 281 346 q 541 205 427 205 l 570 205 l 511 0 l 498 0 m 578 1023 l 350 832 l 229 832 l 364 1023 l 578 1023 z &quot;},&quot;ÄŒ&quot;:{&quot;ha&quot;:778,&quot;x_min&quot;:39,&quot;x_max&quot;:742,&quot;o&quot;:&quot;m 659 0 q 428 34 527 0 q 249 140 329 68 q 94 356 149 230 q 39 624 39 483 q 72 808 39 728 q 170 943 105 889 q 300 1009 224 989 q 498 1029 375 1029 l 659 1029 l 725 794 l 533 794 q 365 750 415 794 q 314 606 314 707 q 423 332 314 433 q 721 232 532 232 l 742 232 l 672 0 l 659 0 m 549 1093 l 375 1093 l 241 1284 l 351 1284 l 463 1190 l 572 1284 l 684 1284 l 549 1093 z &quot;},&quot;Ä&quot;:{&quot;ha&quot;:591,&quot;x_min&quot;:32,&quot;x_max&quot;:570,&quot;o&quot;:&quot;m 498 0 q 319 30 399 0 q 180 118 239 59 q 70 281 107 191 q 32 475 32 371 q 114 697 32 622 q 355 772 195 772 l 503 772 l 562 566 l 404 566 q 310 539 339 566 q 281 453 281 512 q 354 276 281 346 q 541 205 427 205 l 570 205 l 511 0 l 498 0 m 431 832 l 257 832 l 123 1023 l 233 1023 l 345 929 l 454 1023 l 566 1023 l 431 832 z &quot;},&quot;Ä‘&quot;:{&quot;ha&quot;:794,&quot;x_min&quot;:32,&quot;x_max&quot;:794,&quot;o&quot;:&quot;m 390 566 q 307 539 333 566 q 281 457 281 513 q 336 287 281 357 q 476 208 391 216 l 476 566 l 390 566 m 572 0 q 371 18 446 0 q 235 78 296 36 q 85 250 138 143 q 32 488 32 357 q 107 700 32 628 q 330 772 182 772 l 482 772 l 482 842 l 350 842 l 350 964 l 476 964 l 476 1029 l 724 1029 l 724 964 l 794 964 l 794 836 l 724 836 l 724 0 l 572 0 z &quot;},&quot;âˆ™&quot;:{&quot;ha&quot;:479,&quot;x_min&quot;:100,&quot;x_max&quot;:379,&quot;o&quot;:&quot;m 100 518 q 140 616 100 575 q 239 657 181 657 q 338 617 298 657 q 379 518 379 576 q 338 419 379 460 q 239 378 296 378 q 141 420 183 378 q 100 518 100 462 z &quot;},&quot;Â­&quot;:{&quot;ha&quot;:482,&quot;x_min&quot;:35,&quot;x_max&quot;:447,&quot;o&quot;:&quot;m 35 494 l 447 494 l 447 286 l 35 286 l 35 494 z &quot;}},&quot;familyName&quot;:&quot;MK3&quot;,&quot;ascender&quot;:1337,&quot;descender&quot;:-329,&quot;underlinePosition&quot;:-219,&quot;underlineThickness&quot;:242,&quot;boundingBox&quot;:{&quot;yMin&quot;:-485,&quot;xMin&quot;:-342,&quot;yMax&quot;:1972,&quot;xMax&quot;:2167},&quot;resolution&quot;:1000,&quot;original_font_information&quot;:{&quot;format&quot;:0,&quot;copyright&quot;:&quot; &quot;,&quot;fontFamily&quot;:&quot;MK3&quot;,&quot;fontSubfamily&quot;:&quot;Regular&quot;,&quot;uniqueID&quot;:&quot;MK3 normal&quot;,&quot;fullName&quot;:&quot;MK3&quot;,&quot;version&quot;:&quot;1.50&quot;,&quot;postScriptName&quot;:&quot;MK3-Regular&quot;},&quot;cssFontWeight&quot;:&quot;normal&quot;,&quot;cssFontStyle&quot;:&quot;normal&quot;});</td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2" style="width:185px">
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;">
            Copy lines
          </clipboard-copy>
        </li>
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;">
            Copy permalink
          </clipboard-copy>
        </li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/ninth-mind/threejs-text-example/blame/c3704b070f72e3bc05751aa1ae5b9770ced9f8bd/helvetiker_regular.typeface.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="/ninth-mind/threejs-text-example/issues/new">Reference in new issue</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>



  </div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-lg width-full p-responsive" role="contentinfo">
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mr-3 mr-lg-0">&copy; 2019 GitHub, Inc.</li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-nQRXAP+2hZCqfsS4Qic6D16WoLFpw86Fg3KOtx3GA+q/L7eiaH1qmUUartcOTPWhB0jl34UPeA3ma6sOZEyomg==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-9d045700.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-Rt2ZW34RU0KXJaofWHMAakSDCAol8UvpPfSBEry9cLdbriGadGD0TUlfrirXFUwbzhwrkOIBe8Y6SyjeXEquMg==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-46dd995b.js"></script>
    
    
    
  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>

