function FindProxyForURL(url, host) {

if (dnsDomainIs(host, ".zoom.us")) return "DIRECT";
if (dnsDomainIs(host, ".drc-centraloffice.com")) return "DIRECT";
if(dnsDomainIs(host, "chromepolicy.googleapis.com")) return "PROXY 128.123.223.234";
if(dnsDomainIs(host, ".mrhschools.net")) return "PROXY 128.123.223.234";
if(dnsDomainIs(host, ".linewise.net")) return "PROXY 128.123.223.234";

else return "DIRECT";
}
