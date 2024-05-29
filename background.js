chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [
        {
          "id": 1,
          "priority": 1,
          "action": { "type": "modifyHeaders", "responseHeaders": [
            { "header": "content-security-policy", "operation": "remove" },
            { "header": "x-frame-options", "operation": "remove" }
          ]},
          "condition": { "urlFilter": "telegram.blum.codes", "resourceTypes": ["main_frame", "sub_frame"] }
        }
      ],
      removeRuleIds: [1]
    });
  });
  