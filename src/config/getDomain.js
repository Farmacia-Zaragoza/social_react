let hostName = window.location.protocol+'//'+window.location.hostname;
if(window.location.hostname === 'localhost') {
    hostName = 'http://social.vbrqx.com'
}
export default hostName;