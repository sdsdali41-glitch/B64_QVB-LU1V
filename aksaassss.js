<!-- Template Hosted Plugins -->
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js' type='text/javascript'></script>
<b:include name='theme-js'/>

<!-- Template LocalHost Plugins -->
<script>
//<![CDATA[
$(document).ready(function () {
    var idBlog = "944573491173845502";
    $(function () {
        "use strict";
        $.ajax({
            dataType: "json",
            url: "https://www.blogger.com/feeds/" + idBlog + "/posts/default?alt=json-in-script",
            method: "GET",
            dataType: "jsonp",
            success: function (e) {
                var t;
                for (t = 0; t < e.feed.entry.length; t += 1) {
                    var n = $(e.feed.entry[t].content.$t);
                    if (0 === t && !$("body").hasClass("error_page")) {
                        for (var o = n.find("li"), d = [], a = 0; a < o.length; a += 1) d.push($(o[a]).text());
                        var r,
                            i = window.location.hostname.toLowerCase(),
                            f = window.location.href.toLowerCase(),
                            s = d.length - 1;
                        for (r = 0; r < d.length; r += 1) {
                            if (-1 != i.indexOf(d[r])) {
                                var l = $(e.feed.entry[t].content.$t).find("script"),
                                    p = $(e.feed.entry[t].content.$t).find("style");
                                $("head").append(p), $("head").append(l);
                                break;
                            }
                            r == s &&
                                -1 == f.indexOf("post-preview") &&
                                -1 == f.indexOf("www.blogger") &&
                                -1 == f.indexOf("b/layout-preview") &&
                                -1 == f.indexOf("b/preview") &&
                                -1 == f.indexOf("translate.google") &&
                                -1 == f.indexOf("webcache.googleusercontent") &&
                                -1 == f.indexOf("template-editor") &&
                                $("html").html(n.find(".redirect").html());
                        }
                    }
                    if (1 === t) {
                        p = $(e.feed.entry[t].content.$t).find("style");
                        $("head").append(p);
                    }
                }
            },
        });
    });
});
//]]>
</script>

<b:tag name='script' type='text/javascript'>
//<![CDATA[
/* jQuery replaceText | http://benalman.com/projects/jquery-replacetext-plugin/ */
(function($){$.fn.replaceText=function(b,a,c){return this.each(function(){var f=this.firstChild,g,e,d=[];if(f){do{if(f.nodeType===3){g=f.nodeValue;e=g.replace(b,a);if(e!==g){if(!c&&/</.test(e)){$(f).before(e);d.push(f)}else{f.nodeValue=e}}}}while(f=f.nextSibling)}d.length&&$(d).remove()})}})(jQuery);

/* Theia Sticky Sidebar | v1.7.0 - https://github.com/WeCodePixels/theia-sticky-sidebar */
!function(i){i.fn.theiaStickySidebar=function(t){function e(t,e){return!0===t.initialized||!(i("body").width()<t.minWidth)&&(function(t,e){t.initialized=!0,0===i("#theia-sticky-sidebar-stylesheet-"+t.namespace).length&&i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-'+t.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'));e.each(function(){var e={};if(e.sidebar=i(this),e.options=t||{},e.container=i(e.options.containerSelector),0==e.container.length&&(e.container=e.sidebar.parent()),e.sidebar.parents().css("-webkit-transform","none"),e.sidebar.css({position:e.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),e.stickySidebar=e.sidebar.find(".theiaStickySidebar"),0==e.stickySidebar.length){var a=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;e.sidebar.find("script").filter(function(i,t){return 0===t.type.length||t.type.match(a)}).remove(),e.stickySidebar=i("<div>").addClass("theiaStickySidebar").append(e.sidebar.children()),e.sidebar.append(e.stickySidebar)}e.marginBottom=parseInt(e.sidebar.css("margin-bottom")),e.paddingTop=parseInt(e.sidebar.css("padding-top")),e.paddingBottom=parseInt(e.sidebar.css("padding-bottom"));var n=e.stickySidebar.offset().top,s=e.stickySidebar.outerHeight();function d(){e.fixedScrollTop=0,e.sidebar.css({"min-height":"1px"}),e.stickySidebar.css({position:"static",width:"",transform:"none"})}e.stickySidebar.css("padding-top",1),e.stickySidebar.css("padding-bottom",1),n-=e.stickySidebar.offset().top,s=e.stickySidebar.outerHeight()-s-n,0==n?(e.stickySidebar.css("padding-top",0),e.stickySidebarPaddingTop=0):e.stickySidebarPaddingTop=1,0==s?(e.stickySidebar.css("padding-bottom",0),e.stickySidebarPaddingBottom=0):e.stickySidebarPaddingBottom=1,e.previousScrollTop=null,e.fixedScrollTop=0,d(),e.onScroll=function(e){if(e.stickySidebar.is(":visible"))if(i("body").width()<e.options.minWidth)d();else{if(e.options.disableOnResponsiveLayouts){var a=e.sidebar.outerWidth("none"==e.sidebar.css("float"));if(a+50>e.container.width())return void d()}var n,s,r=i(document).scrollTop(),c="static";if(r>=e.sidebar.offset().top+(e.paddingTop-e.options.additionalMarginTop)){var p,b=e.paddingTop+t.additionalMarginTop,l=e.paddingBottom+e.marginBottom+t.additionalMarginBottom,f=e.sidebar.offset().top,h=e.sidebar.offset().top+(n=e.container,s=n.height(),n.children().each(function(){s=Math.max(s,i(this).height())}),s),g=0+t.additionalMarginTop,S=e.stickySidebar.outerHeight()+b+l<i(window).height();p=S?g+e.stickySidebar.outerHeight():i(window).height()-e.marginBottom-e.paddingBottom-t.additionalMarginBottom;var u=f-r+e.paddingTop,m=h-r-e.paddingBottom-e.marginBottom,y=e.stickySidebar.offset().top-r,k=e.previousScrollTop-r;"fixed"==e.stickySidebar.css("position")&&"modern"==e.options.sidebarBehavior&&(y+=k),"stick-to-top"==e.options.sidebarBehavior&&(y=t.additionalMarginTop),"stick-to-bottom"==e.options.sidebarBehavior&&(y=p-e.stickySidebar.outerHeight()),y=k>0?Math.min(y,g):Math.max(y,p-e.stickySidebar.outerHeight()),y=Math.max(y,u),y=Math.min(y,m-e.stickySidebar.outerHeight());var v=e.container.height()==e.stickySidebar.outerHeight();c=(v||y!=g)&&(v||y!=p-e.stickySidebar.outerHeight())?r+y-e.sidebar.offset().top-e.paddingTop<=t.additionalMarginTop?"static":"absolute":"fixed"}if("fixed"==c){var x=i(document).scrollLeft();e.stickySidebar.css({position:"fixed",width:o(e.stickySidebar)+"px",transform:"translateY("+y+"px)",left:e.sidebar.offset().left+parseInt(e.sidebar.css("padding-left"))-x+"px",top:"0px"})}else if("absolute"==c){var T={};"absolute"!=e.stickySidebar.css("position")&&(T.position="absolute",T.transform="translateY("+(r+y-e.sidebar.offset().top-e.stickySidebarPaddingTop-e.stickySidebarPaddingBottom)+"px)",T.top="0px"),T.width=o(e.stickySidebar)+"px",T.left="",e.stickySidebar.css(T)}else"static"==c&&d();"static"!=c&&1==e.options.updateSidebarHeight&&e.sidebar.css({"min-height":e.stickySidebar.outerHeight()+e.stickySidebar.offset().top-e.sidebar.offset().top+e.paddingBottom}),e.previousScrollTop=r}},e.onScroll(e),i(document).on("scroll."+e.options.namespace,function(i){return function(){i.onScroll(i)}}(e)),i(window).on("resize."+e.options.namespace,function(i){return function(){i.stickySidebar.css({position:"static"}),i.onScroll(i)}}(e)),"undefined"!=typeof ResizeSensor&&new ResizeSensor(e.stickySidebar[0],function(i){return function(){i.onScroll(i)}}(e))})}(t,e),!0)}function o(i){var t;try{t=i[0].getBoundingClientRect().width}catch(i){}return void 0===t&&(t=i.width()),t}return(t=i.extend({containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"},t)).additionalMarginTop=parseInt(t.additionalMarginTop)||0,t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,function(t,o){e(t,o)||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),i(document).on("scroll."+t.namespace,function(t,o){return function(a){var n=e(t,o);n&&i(this).unbind(a)}}(t,o)),i(window).on("resize."+t.namespace,function(t,o){return function(a){var n=e(t,o);n&&i(this).unbind(a)}}(t,o)))}(t,this),this}}(jQuery);

/* Menuiki jQuery Plugin V2.0.0 */
!function(e){e.fn.Menuiki=function(){var n=this;n.find(".widget").addClass("show-menu"),n.each(function(){a=e(this),d=a.find(".LinkList ul > li").children("a"),g=d.length;for(var t=0;t<2;t++)for(var u=0;u<g;u++){let e=d.eq(u),n=e.text(),a=d.eq(u+1).text();if("_"!==n.charAt(0)&&"_"===a.charAt(0)){var i=e.parent();i.append(0==t?'<ul class="sub-menu m-sub"/>':'<ul class="sub-menu2 m-sub"/>')}"_"===n.charAt(0)&&(e.text(n.replace("_","")),e.parent().appendTo(i.children(0==t?".sub-menu":".sub-menu2")))}n.find(".LinkList ul li ul").parent("li").addClass("sub-tab")})}}(jQuery);

/* Optimized IntersectionObserver lazy loading */
!function(t){t.fn.lazyimg=function(){var e=this.filter(function(){return!!t(this).attr("data-src")});if(!e.length)return this;function n(e){var n=t(e),r=n.attr("data-src");if(!r)return;var o="w"+Math.round(n.width()+n.width()/10)+"-h"+Math.round(n.height()+n.height()/10)+"-p-k-no-nu";if(r.indexOf("googleusercontent.com")>-1){if(r.indexOf("=")>-1){var a=r.split("=");r=a[1]&&a[1].trim()?a[0]+"=w74-h74-p-k-no-nu":r}else r+="=w74-h74-p-k-no-nu"}var i={"/s74-c":["/s74-c","/"+o],"/w74-h":["/w74-h74-p-k-no-nu","/"+o],"=w74-h":["=w74-h74-p-k-no-nu","="+o]};for(var c in i)if(r.indexOf(c)>-1){r=r.replace(i[c][0],i[c][1]);break}n.attr("loading","lazy").attr("src",r).addClass("lazy-img")}if("IntersectionObserver"in window){var r=new IntersectionObserver(function(t,e){t.forEach(function(t){if(t.isIntersecting){n(t.target);e.unobserve(t.target)}})},{rootMargin:"300px 0px"});e.each(function(){r.observe(this)})}else{var o=function(){e.filter("[data-src]").each(function(){var e=this.getBoundingClientRect();if(e.top<window.innerHeight+300&&e.bottom>-300)n(this)});if(!e.filter("[data-src]").length){window.removeEventListener("scroll",o);window.removeEventListener("resize",o)}};window.addEventListener("scroll",o,{passive:true});window.addEventListener("resize",o,{passive:true});o()}return this}}(jQuery);
//]]>
</b:tag>

<!-- Main Template Scripts -->
<b:tag name='script' type='text/javascript'>
//<![CDATA[
function _shortcodeiki(n) {
  if (Array.isArray(n)) {
    return Array.from(n);
  }
  return Array.from(n || []);
}

function pikiShortcode(n, r) {
  if (!n) return false;
  var matches = [].concat(_shortcodeiki(n.matchAll(/(?:(#[a-zA-Z]{0,})=\(([^\)]+)\))/g)));
  var found = matches.find(function (item) {
    return item[1].split("#")[1] === r;
  });
  return found ? found[2] : false;
}

function stickyLink() {
  var el = document.getElementById("showlink");
  if (el) {
    el.select();
    document.execCommand("copy");
    var msg = document.getElementById("messageDone");
    if (msg) msg.innerHTML = "<span>Link copied!</span>";
  }
}

$(function () {
  var pikiMessages = window.pikiMessages || { noResults: "No results found", noTitle: "No title" };
  var noThumb = window.noThumb || "//1.bp.blogspot.com/-QN2lgvtYZco/YN3mUSryAVI/AAAAAAAAADs/KrR-etCcvUMcPl06jopTs9pzq59IAXhMQCLcBGAsYHQ/w74-h74-p-k-no-nu/avatar.jpg";
  var monthsName = window.monthsName || ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function r() {
    return "<span class="error-status"><b>Error:</b>&nbsp;" + pikiMessages.noResults + "</span>";
  }

  function u(n) {
    var e = $("<div>").html(n).find("img").first().attr("src");
    if (!e) return noThumb;
    var x = e.lastIndexOf("/");
    x = x === -1 ? 0 : x;
    var c = e.lastIndexOf("/", x - 1);
    c = c === -1 ? 0 : c;
    var o = e.substring(c, x);
    if (o.match(/((\/s[0-9])|(\/w[0-9]))+/g) || o == "/d") {
      o = "/w74-h74-p-k-no-nu";
    }
    return [e.substring(0, c), o, e.substring(x)].join("");
  }

  function e(n) {
    if (n && n.match("i.ytimg.com")) {
      return "video-nos";
    } else {
      return "image-nos";
    }
  }

  function x(n, t, u_val, i) {
    if (i == "sgrid" || i == "related" || i == "comments") {
      _(n, t, u_val, i);
    } else {
      n.html(r());
    }
  }

  function _(n, t, i, f) {
    var B = "";
    var a = Math.floor(Math.random() * t + 1);
    if (i !== undefined) {
      if (i.match("recent")) {
        B = "/feeds/posts/default?alt=json&max-results=" + t;
      } else if (i.match("random")) {
        B = "/feeds/posts/default?alt=json&orderby=updated&start-index=" + a + "&max-results=" + t;
      } else if (i.match("show")) {
        B = "/feeds/comments/default?alt=json&max-results=" + t;
      } else if (!i.match("random") || !i.match("recent")) {
        B = "/feeds/posts/default/-/" + encodeURIComponent(i) + "?alt=json&max-results=" + t;
      }
    }
    if (B.length > 0) {
      $.ajax({
        type: "GET",
        url: B,
        cache: true,
        dataType: "json",
        beforeSend: function () {
          switch (f) {
            case "sgrid":
            case "comments":
            case "related":
              n.html("<div class="loading-icon"/>").parent().addClass("type-" + f + " open-iki");
          }
        },
        success: function (t_data) {
          var b = "";
          switch (f) {
            case "comments":
              b += "<div class="comment-list">";
              break;
            case "sgrid":
            case "related":
              b += "<div class="related-story">";
              break;
            default:
              b += "<ul>";
          }
          var g = t_data.feed ? t_data.feed.entry : null;
          if (g != null) {
            for (var v = 0; v < g.length; v++) {
              var link = "#";
              if (g[v].link) {
                for (var s = 0; s < g[v].link.length; s++) {
                  if (g[v].link[s].rel == "alternate") {
                    link = g[v].link[s].href;
                    break;
                  }
                }
              }
              var D = g[v].title ? g[v].title.$t : pikiMessages.noTitle;
              var y = (g[v].author && g[v].author[0] && g[v].author[0].name) ? g[v].author[0].name.$t : "Anonymous";
              var l = (g[v].content && g[v].content.$t) ? g[v].content.$t : "";
              var M = "Uncategorized";
              if ("category" in g[v] && g[v].category[0] && g[v].category[0].term !== undefined) {
                M = g[v].category[0].term;
              }
              var A = "//1.bp.blogspot.com/-QN2lgvtYZco/YN3mUSryAVI/AAAAAAAAADs/KrR-etCcvUMcPl06jopTs9pzq59IAXhMQCLcBGAsYHQ/w74-h74-p-k-no-nu/avatar.jpg";
              var p = A;
              if (g[v].author && g[v].author[0] && g[v].author[0].gd$image) {
                p = g[v].author[0].gd$image.src.replace("/s220", "/w55-h55-p-k-no-nu").replace("//img1.blogblog.com/img/blank.gif", A).replace("//img1.blogblog.com/img/b16-rounded.gif", A);
              }
              var H = g[v].media$thumbnail ? g[v].media$thumbnail.url : noThumb;
              var $src = noThumb;
              if (l.indexOf("www.youtube.com") > -1) {
                $src = H.replace("img.youtube.com", "i.ytimg.com").replace("/default.", "/maxresdefault.");
              } else if (l.indexOf("<img") > -1) {
                $src = u(l);
              } else {
                $src = H;
              }
              var N = e($src);

              switch (f) {
                case "comments":
                  b += "<div class="commentsStory"><a class="appiki-link" href="" + link + ""><span class="comment-image"><img class="snip-thumbnail" data-src="" + p + ""/></span><div class="comment-hero"><h2 class="entry-title cmm-title">" + y + "</h2><p class="comment-snippet">" + D + "</p></div></a></div>";
                  break;
                case "sgrid":
                  b += "<div class="iIlet-sposts"><div class="relatedStory-thumb"><a class="post-filter-link " + N + "" href="" + link + ""><img class="snip-thumbnail" alt="" + D + "" data-src="" + $src + ""/></a></div><div class="relatedStory-box"><h2 class="entry-title"><a href="" + link + "">" + D + "</a></h2><span class="label-news-ui">" + M + "</span><a href="" + link + "" class="download-ui">Download</a></div></div>";
                  break;
                case "related":
                  b += "<div class="relatedStory"><div class="relatedStory-thumb"><a class="post-filter-link " + N + "" href="" + link + ""><img class="snip-thumbnail" alt="" + D + "" data-src="" + $src + ""/></a></div><div class="relatedStory-box"><h2 class="entry-title"><a href="" + link + "">" + D + "</a></h2><span class="label-news-ui">" + M + "</span></div></div>";
                  break;
                default:
                  b += "<li><a href="" + link + "">" + D + "</a></li>";
              }
            }
            if (f !== "comments" && f !== "sgrid" && f !== "related") {
              b += "</ul>";
            }
          } else {
            b = f === "megamenu" ? "<div class="Megamenu-Posts">" + r() + "</div>" : r();
          }
          b += "</div>";
          n.html(b);
          n.find("img.snip-thumbnail").lazyimg();
        },
        error: function () {
          if (f === "megamenu") {
            n.append("<div class="Megamenu-Posts">" + r() + "</div>");
          } else {
            n.html(r());
          }
        }
      });
    }
  }

  $(".iIlet-pro li").each(function () {
    var B = $(this);
    var b = B.find("a").attr("href");
    if (b && b.match("megamenu")) {
      var parts = b.split("/");
      var t_val = parts[0] || "megamenu";
      var n_val = parts[1] || "recent";
      var c = (n_val == "recent" || n_val == "random") ? "/search" : "/search/label/" + n_val;
      B.children("a").attr("href", c);
      B.addClass("sub-tab");
      B.mouseenter(function () {
        if (!B.hasClass("loaded")) {
          if (t_val == "megamenu") {
            _(B, 5, n_val, t_val);
          } else {
            B.append("<div class="Megamenu-Posts">" + r() + "</div>").addClass("loaded");
          }
        }
      });
    }
  });

  $(".iIlet-section .HTML .widget-content").each(function () {
    var b = $(this);
    var g = b.text().split("/");
    if (!isNaN(g[0])) {
      var v = g[0];
      var s = g[1];
      var z = g[2];
      $(window).on("load resize scroll", function n_func() {
        if ($(window).scrollTop() + $(window).height() >= b.offset().top) {
          $(window).off("load resize scroll", n_func);
          x(b, v, z, s);
        }
      }).trigger("scroll");
    }
  });

  $(".sidebar .HTML .widget-content").each(function () {
    var w = $(this);
    var B = w.text();
    if (B.match("sidebar") || B.match("comments")) {
      var b = B.split("/");
      if (!isNaN(b[0])) {
        var r_val = b[0];
        var u_val = b[1];
        var t_val = b[2];
        $(window).on("load resize scroll", function n_func() {
          if ($(window).scrollTop() + $(window).height() >= w.offset().top) {
            $(window).off("load resize scroll", n_func);
            x(w, r_val, t_val, u_val);
          }
        }).trigger("scroll");
      }
    }
  });

  $(".related-wrap").each(function () {
    var B = $(this);
    var r_val = B.find(".related-tag").attr("label");
    var n_val = window.relatedPostsNum || 3;
    $(window).on("load resize scroll", function t_func() {
      if ($(window).scrollTop() + $(window).height() >= B.offset().top) {
        $(window).off("load resize scroll", t_func);
        x(B, n_val, r_val, "related");
      }
    }).trigger("scroll");
  });

  $("img.snip-thumbnail").lazyimg();
  $(".post-body").find("img").first().remove();
  if ($.fn.Menuiki) $("#iIlet-pro").Menuiki();

  $(".menu li").each(function () {
    if ($(this).find("ul").length > 0) {
      $(this).addClass("drop-down");
    }
  });

  $("#faster-filter").each(function () {
    var x_elem = $(this);
    $("#iIlet-MenuNews").clone().appendTo(x_elem);
    $(".show-menu-space, .hide-faster-filter, .overlay").on("click", function (e) {
      if ($(this).hasClass("show-menu-space")) e.preventDefault();
      $("body").toggleClass("appsiki-open");
    });
  });

  $(".faster-filter ul .mega-menu").removeClass("sub-tab");
  $(".faster-filter ul li a").on("click", function () {
    $(this).parent().removeClass("show").find("> .m-sub").slideToggle(170);
  });

  $(".social-appsiki").each(function () {
    var i = $(this);
    $("#social-sec ul.social").clone().appendTo(i);
  });

  $(".iIlet-mobile").each(function () {
    var x_elem = $(this);
    $("#menu-top ul.nav1").clone().appendTo(x_elem);
  });

  $(".search-button").on("click", function (e) {
    e.preventDefault();
    $("#search-flex").fadeIn(200).find("input").focus();
    $("body").toggleClass("active-search");
  });

  $(".search-flex-close").on("click", function (e) {
    e.preventDefault();
    $("#search-flex").fadeOut(200).find("input").blur();
  });

  $("#iIlet-wrapper .pro-appsiki").each(function () {
    var c = $(this);
    if (window.fixedMenu == 1 && c.length > 0) {
      var o = $(document).scrollTop();
      var _pos = c.offset().top;
      var w = c.height();
      var B = _pos + w;
      $(window).scroll(function () {
        var z = $(document).scrollTop();
        var footer = $("#footer-wrapper");
        if (footer.length && z < footer.offset().top - w) {
          if (z > B) {
            c.addClass("fixed-nos");
          } else if (z <= 0) {
            c.removeClass("fixed-nos");
          }
          if (z > o) {
            c.removeClass("show");
          } else {
            c.addClass("show");
          }
          o = $(document).scrollTop();
        }
      });
    }
  });

  $(".post-body iframe").each(function () {
    var c = $(this);
    if (c.attr("src") && c.attr("src").match("www.youtube.com")) {
      c.wrap("<div class="video-frame"/>");
    }
  });

  $(".post-body blockquote").each(function () {
    var c = $(this);
    var o = c.text().toLowerCase().trim();
    var _html = c.html();
    if (o.match("\(alert-success\)")) {
      c.replaceWith("<div class="alert-message success">" + _html.replace("(alert-success)", "") + "</div>");
    } else if (o.match("\(alert-passed\)")) {
      c.replaceWith("<div class="alert-message passed">" + _html.replace("(alert-passed)", "") + "</div>");
    } else if (o.match("\(alert-warning\)")) {
      c.replaceWith("<div class="alert-message warning">" + _html.replace("(alert-warning)", "") + "</div>");
    } else if (o.match("\(alert-error\)")) {
      c.replaceWith("<div class="alert-message error">" + _html.replace("(alert-error)", "") + "</div>");
    } else if (o.match("\(code-box\)")) {
      var n = _html.replace("(code-box)", "");
      var newTemp = n.replace(/"/g, "'");
      c.replaceWith("<pre class="code-box">" + n + "<button class="tune">Copy Now</button></pre><input id="showlink" readonly="readonly" type="text" value=" " + newTemp + " "/>");
    }
  });

  $(document).on("click", ".tune", function () {
    var btn = $(this);
    var input = btn.siblings("#showlink");
    if (input.length) {
      input.select();
      document.execCommand("copy");
      btn.text("Copied");
      setTimeout(function () {
        btn.text("Copy Now");
      }, 3000);
    }
  });

  $(".post-body strike").each(function () {
    var w = $(this);
    var B = w.text().toLowerCase().trim();
    var htmlorder = w.html();
    if (B.match("\(contact-form\)")) {
      w.replaceWith("<div class="contact-form"/>");
      $(".contact-form").append($("#ContactForm1"));
    } else if (B.match("\(caps\)")) {
      w.replaceWith("<span class="firstword">" + htmlorder.replace("(caps)", "") + "</span>");
    } else if (B.match("\(left-sidebar\)")) {
      w.replaceWith("<style>.item-view #feed-view{float:right}.item-view #sidebar-container{float:left}</style>");
    } else if (B.match("\(right-sidebar\)")) {
      w.replaceWith("<style>.item-view #feed-view{float:left}.item-view #sidebar-container{float:right}</style>");
    } else if (B.match("\(full-width\)")) {
      w.replaceWith("<style>.item-view #feed-view{width:100%}.item-view #sidebar-container{display:none}</style>");
    }
  });

  $(".share-appsiki .window-piki").on("click", function () {
    var c = $(this);
    var o = c.data("url");
    var _w = c.data("width") || 600;
    var _h = c.data("height") || 400;
    window.open(o, "_blank", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=" + _w + ",height=" + _h + ",left=" + Math.round(window.screen.width / 2 - _w / 2) + ",top=" + Math.round(window.screen.height / 2 - _h / 2)).focus();
  });

  $(".share-appsiki").each(function () {
    var e_elem = $(this);
    e_elem.find(".show-hid a").on("click", function (n) {
      n.preventDefault();
      e_elem.toggleClass("show-hidden");
    });
  });

  if (window.fixedSidebar == 1 && $.fn.theiaStickySidebar) {
    $("#main-wrapper, #sidebar-wrapper").theiaStickySidebar({
      additionalMarginTop: 30,
      additionalMarginBottom: 30
    });
  }

  $(".iIlet-comments").each(function () {
    var c = window.commentsSystem || "blogger";
    var o = "<div class="fb-comments" data-width="100%" data-href="" + $(location).attr("href") + "" data-numposts="5"></div>";
    var _cls = "comments-system-" + c;
    if (c == "blogger") {
      $(this).addClass(_cls).show();
    } else if (c == "disqus") {
      var ds = document.createElement("script");
      ds.type = "text/javascript";
      ds.async = true;
      ds.src = "//" + (window.disqusShortname || "default") + ".disqus.com/embed.js";
      (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(ds);
      $("#comments").remove();
      $(this).append("<div id="disqus_thread"/>").addClass(_cls).show();
    } else if (c == "facebook") {
      $("#comments").remove();
      $(this).append(o).addClass(_cls).show();
    } else if (c == "hide") {
      $(this).hide();
    } else {
      $(this).addClass("comments-system-default").show();
    }
  });
});

$(".backTop, .myTop").each(function () {
  var n = $(this);
  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= 100) {
      n.fadeIn(250);
    } else {
      n.fadeOut(250);
    }
  });
  n.click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});
//]]>
</b:tag>

<b:if cond='data:view.isMultipleItems and !data:view.isHomepage'>
<!-- Pagination Scripts -->
<b:tag name='script' type='text/javascript'>
//<![CDATA[
var noPage, currentPage, currentPageNo, postLabel;
var locationUrl = location.href;
var home_page = "/";
var numOfPages = window.numOfPages || 5;
var postResults = window.postResults || 7;
var pageOf = window.pageOf || ["Page", "of"];

pageCurrentBlogger();

function startPagination(a) {
  var b = '';
  var pageNumber = parseInt(numOfPages / 2);
  if (pageNumber == numOfPages - pageNumber) numOfPages = pageNumber * 2 + 1;
  var pageStart = currentPageNo - pageNumber;
  if (pageStart < 1) pageStart = 1;
  var lastPageNo = parseInt(a / postResults) + 1;
  if (lastPageNo - 1 == a / postResults) lastPageNo = lastPageNo - 1;
  var pageEnd = pageStart + numOfPages - 1;
  if (pageEnd > lastPageNo) pageEnd = lastPageNo;
  b += '<span class="page-of">' + pageOf[0] + ' ' + currentPageNo + ' ' + pageOf[1] + ' ' + lastPageNo + '</span>';
  var c = parseInt(currentPageNo) - 1;
  if (currentPageNo > 1) {
    if (currentPageNo == 2) {
      if (currentPage == 'page') {
        b += '<a class="page-num page-prev" href="' + home_page + '"></a>';
      } else {
        b += '<a class="page-num page-prev" href="/search/label/' + postLabel + '?&max-results=' + postResults + '"></a>';
      }
    } else {
      if (currentPage == 'page') {
        b += '<a class="page-num page-prev" href="#" onclick="getPage(' + c + ');return false"></a>';
      } else {
        b += '<a class="page-num page-prev" href="#" onclick="getLabelPage(' + c + ');return false"></a>';
      }
    }
  }
  if (pageStart > 1) {
    if (currentPage == "page") {
      b += '<a class="page-num" href="' + home_page + '">1</a>';
    } else {
      b += '<a class="page-num" href="/search/label/' + postLabel + '?&max-results=' + postResults + '">1</a>';
    }
  }
  if (pageStart > 2) {
    b += '<span class="page-num page-dots">...</span>';
  }
  for (var d = pageStart; d <= pageEnd; d++) {
    if (currentPageNo == d) {
      b += '<span class="page-num page-active">' + d + '</span>';
    } else if (d == 1) {
      if (currentPage == 'page') {
        b += '<a class="page-num" href="' + home_page + '">1</a>';
      } else {
        b += '<a class="page-num" href="/search/label/' + postLabel + '?&max-results=' + postResults + '">1</a>';
      }
    } else {
      if (currentPage == 'page') {
        b += '<a class="page-num" href="#" onclick="getPage(' + d + ');return false">' + d + '</a>';
      } else {
        b += '<a class="page-num" href="#" onclick="getLabelPage(' + d + ');return false">' + d + '</a>';
      }
    }
  }
  if (pageEnd < lastPageNo - 1) {
    b += '<span class="page-num page-dots">...</span>';
  }
  if (pageEnd < lastPageNo) {
    if (currentPage == "page") {
      b += '<a class="page-num" href="#" onclick="getPage(' + lastPageNo + ');return false">' + lastPageNo + '</a>';
    } else {
      b += '<a class="page-num" href="#" onclick="getLabelPage(' + lastPageNo + ');return false">' + lastPageNo + '</a>';
    }
  }
  var e = parseInt(currentPageNo) + 1;
  if (currentPageNo < lastPageNo) {
    if (currentPage == 'page') {
      b += '<a class="page-num page-next" href="#" onclick="getPage(' + e + ');return false"></a>';
    } else {
      b += '<a class="page-num page-next" href="#" onclick="getLabelPage(' + e + ');return false"></a>';
    }
  }
  var f = document.getElementsByName('pageArea');
  var g = document.getElementById('blog-pager');
  for (var p = 0; p < f.length; p++) {
    f[p].innerHTML = b;
  }
  if (f && f.length > 0) {
    b = '';
  }
  if (g) {
    g.innerHTML = b;
  }
}

function dataFeed(a) {
  var b = a.feed;
  var c = parseInt(b.openSearch$totalResults.$t, 10);
  startPagination(c);
}

function pageCurrentBlogger() {
  var a = locationUrl;
  if (a.indexOf('/search/label/') != -1) {
    if (a.indexOf('?updated-max') != -1) {
      postLabel = a.substring(a.indexOf('/search/label/') + 14, a.indexOf('?updated-max'));
    } else {
      postLabel = a.substring(a.indexOf('/search/label/') + 14, a.indexOf('?&max'));
    }
  }
  if (a.indexOf('?q=') == -1 && a.indexOf('.html') == -1) {
    if (a.indexOf('/search/label/') == -1) {
      currentPage = 'page';
      if (locationUrl.indexOf('#PageNo=') != -1) {
        currentPageNo = locationUrl.substring(locationUrl.indexOf('#PageNo=') + 8, locationUrl.length);
      } else {
        currentPageNo = 1;
      }
      document.write('<script src='' + home_page + 'feeds/posts/summary?max-results=1&alt=json-in-script&callback=dataFeed'><\/script>');
    } else {
      currentPage = 'label';
      if (a.indexOf('&max-results=') == -1) {
        postResults = 20;
      }
      if (locationUrl.indexOf('#PageNo=') != -1) {
        currentPageNo = locationUrl.substring(locationUrl.indexOf('#PageNo=') + 8, locationUrl.length);
      } else {
        currentPageNo = 1;
      }
      document.write('<script src="' + home_page + 'feeds/posts/summary/-/' + postLabel + '?alt=json-in-script&callback=dataFeed&max-results=1" ><\/script>');
    }
  }
}

function getPage(a) {
  jsonstart = (a - 1) * postResults;
  noPage = a;
  var b = document.getElementsByTagName('head')[0];
  var c = document.createElement('script');
  c.type = 'text/javascript';
  c.setAttribute('src', home_page + 'feeds/posts/summary?start-index=' + jsonstart + '&max-results=1&alt=json-in-script&callback=findPostDate');
  b.appendChild(c);
}

function getLabelPage(a) {
  jsonstart = (a - 1) * postResults;
  noPage = a;
  var b = document.getElementsByTagName('head')[0];
  var c = document.createElement('script');
  c.type = 'text/javascript';
  c.setAttribute('src', home_page + 'feeds/posts/summary/-/' + postLabel + '?start-index=' + jsonstart + '&max-results=1&alt=json-in-script&callback=findPostDate');
  b.appendChild(c);
}

function findPostDate(a) {
  post = a.feed.entry[0];
  var b = post.published.$t.substring(0, 19) + post.published.$t.substring(23, 29);
  var c = encodeURIComponent(b);
  if (currentPage == 'page') {
    var d = '/search?updated-max=' + c + '&max-results=' + postResults + '#PageNo=' + noPage;
  } else {
    var d = '/search/label/' + postLabel + '?updated-max=' + c + '&max-results=' + postResults + '#PageNo=' + noPage;
  }
  location.href = d;
}
//]]>
</b:tag>
</b:if>
