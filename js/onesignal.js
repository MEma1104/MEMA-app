// js/onesignal.js
// Inițializare OneSignal SDK

const ONESIGNAL_APP_ID = 'e77f8e19-ef31-4239-8545-dfb677a0a6c5';

// Inițializare OneSignal
window.OneSignal = window.OneSignal || [];
OneSignal.push(function() {
    OneSignal.init({
        appId: ONESIGNAL_APP_ID,
        notifyButton: {
            enable: true,
            position: 'bottom-right',
            theme: 'default',
            size: 'medium'
        },
        allowLocalhostAsSecureOrigin: true
    });
});

// Funcții utilitare pentru notificări
const OneSignalUtils = {
    getPlayerId: async function() {
        return await OneSignal.getUserId();
    },
    
    setTag: async function(key, value) {
        await OneSignal.sendTag(key, value);
    },
    
    setTags: async function(tags) {
        await OneSignal.sendTags(tags);
    },
    
    subscribe: async function() {
        await OneSignal.registerForPushNotifications();
    },
    
    unsubscribe: async function() {
        await OneSignal.setSubscription(false);
    },
    
    isSubscribed: async function() {
        return await OneSignal.isPushNotificationsEnabled();
    },
    
    setEmail: async function(email) {
        await OneSignal.setEmail(email);
    },
    
    setExternalUserId: async function(userId) {
        await OneSignal.setExternalUserId(userId);
    }
};

window.OneSignalUtils = OneSignalUtils;
