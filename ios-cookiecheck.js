//  Show help message for iOS with cookies disabled
window.onload = function() {
  if (navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/) && !navigator.cookieEnabled) {
    //  Styles
    var nStyle    = 'background: rgba(255, 255, 255, 0.8); color: #fff; font: 1.5em "Helvetica Neue",Helvetica,Arial,sans-serif; height: 100%; left: 0; min-height: 940px; position: fixed; top: 0; width: 100%; z-index: 9999;';
    var headStyle = 'color: #000; text-align: center;';
    var msgStyle  = 'background: rgba(0, 0, 0, 0.8); border-radius: 1em; margin: 0 auto; padding: 1em; width: 66%;';
    var linkStyle = 'color: #66c;';

    //  Message markup
    var cWarn = '<h1 style="' + headStyle + '">No Cookies!</h1>' +
                '<div style="' + msgStyle + '">' +
                    '<p>It appears your browser currently has cookies disabled. Unfortunately proper use of this site requires cookies to be enabled.</p>' +
                    '<p>If you require assistance enabling cookies on your device please visit <a href="http://support.apple.com/kb/HT1677" style="' + linkStyle + '">Apple Support</a> for further information.</p>' +
                '</div>';

    //  Create container and insert message
    var nDiv = document.createElement('div');
    nDiv.setAttribute('id','cookieError');
    nDiv.innerHTML = cWarn;
    nDiv.style.cssText = nStyle;

    //  Insert to DOM
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(nDiv);
  }
}