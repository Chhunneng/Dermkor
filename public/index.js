function getAPPStore() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    if (/windows phone/i.test(userAgent)) {
        return "https://play.google.com/store/apps/details?id=com.psar.dermkor";
    }
    
    if (/android/i.test(userAgent)) {
        return "https://play.google.com/store/apps/details?id=com.psar.dermkor";
    }
    
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "https://apps.apple.com/kh/app/psar-dermkor/id1489856291";
    }
    
    return "https://www.facebook.com/Dermkor-APP-109442467473927";
  }