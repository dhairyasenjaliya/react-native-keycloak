# React Native Keycloak Working example

#Issue for inapp browser iOS

Check This link for fix : https://github.com/proyecto26/react-native-inappbrowser/issues/256

Directory : node_modules/react-native-inappbrowser-reborn/ios/RNInAppBrowser.m

Change for temporary fix until package updated : (RNInAppBrowser.m)

-----Add This Line -----

NSString *escapedRedirectURL = [redirectURL stringByAddingPercentEncodingWithAllowedCharacters:[NSCharacterSet URLHostAllowedCharacterSet]]; 

-----Add This Line -----


    if (@available(iOS 12.0, *)) {
      webAuthSession = [[ASWebAuthenticationSession alloc]
        initWithURL:url

        -----Modify This Line callbackURLScheme-----
            callbackURLScheme:escapedRedirectURL
        -----Modify This Line callbackURLScheme-----

        completionHandler:completionHandler];
    } else {
      authSession = [[SFAuthenticationSession alloc]
        initWithURL:url

         -----Modify This Line callbackURLScheme-----
            callbackURLScheme:escapedRedirectURL
         -----Modify This Line callbackURLScheme-----

        completionHandler:completionHandler];
    }





