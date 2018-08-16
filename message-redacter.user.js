// ==UserScript==
// @name         Redact Chat Messages
// @version      0.0.1
// @description  Allows moderators to redact the text of deleted messages.
// @author       thesecretmaster
// @match        https://chat.stackexchange.com/transcript/*
// @match        https://chat.stackoverflow.com/transcript/*
// @match        https://chat.meta.stackexchange.com/transcript/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function fkey(e){return e||(e={}),e.fkey||(e.fkey=$("input[name='fkey']").attr("value")),e};

    var messages = $(".message");
    var fkey_v = fkey().fkey;
    for (var i = 0; i < messages.length; i++) {
        var message = messages[i];
        if ($("#"+message.id+" .deleted").length > 0) {
            var btn = document.createElement("span");
            btn.textContent = "purge";
            btn.style = "font-weight: bold;color: white;border: 1px red solid;padding: 2px;background: red;";
            $("#"+message.id+" .content")[0].appendChild(btn);
            $(btn).on("click", function(e) {
                var id = $($(this).parent()[0]).parent()[0].id.split("-")[1];
                var host = window.location.host;
                if (window.confirm("Do you really want to purge this message?\nhttps://"+host+"/transcript/message/"+id+"/history")) {
                    console.log('https://'+host+'/messages/'+id);
                    $.post('https://'+host+'/messages/'+id, {text: 'redacted', fkey: fkey_v});
                }
            })
        }
    }
})();
