function onlynumber(e){var n=e||window.event,t=n.keyCode||n.which;t=String.fromCharCode(t);/^[0-9.]+$/.test(t)||(n.returnValue=!1,n.preventDefault&&n.preventDefault())}