function mobile_detect(mobile,tablet,mobile_redirect,tablet_redirect,debug) {
	var ismobile = (/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile/i.test(navigator.userAgent.toLowerCase()));
	var istablet = (/ipad|android 3|sch-i800|playbook|tablet|kindle|gt-p1000|sgh-t849|shw-m180s|a510|a511|a100|dell streak|silk/i.test(navigator.userAgent.toLowerCase()));

	if (debug == true) {
		alert(navigator.userAgent);
	}

	if (ismobile && mobile==true) {
		if (debug == true) {
			alert("Mobile Browser");
		}
		window.location = mobile_redirect;
	} else if (istablet && tablet==true) {
		if (debug == true) {
			alert("Tablet Browser");
		}
		window.location = tablet_redirect;
	}
}
