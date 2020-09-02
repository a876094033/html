			var nt = !1;
			$(window).bind("scroll",
				function() {
				var st = $(document).scrollTop();//往下滚的高度
				nt = nt ? nt: $("#header").offset().top;
				// document.title=st;
				var sel=$("#header");
				if (nt < st) {
					sel.addClass("fixed");
				} else {
					sel.removeClass("fixed");
				}
			});
