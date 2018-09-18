package com.cytech.shat;

import android.app.Application;

import com.cytech.shat.data.DataManagerPackage;
import com.facebook.react.ReactApplication;
import com.geektime.rnonesignalandroid.ReactNativeOneSignalPackage;
import com.entria.views.RNViewOverflowPackage;

import co.apptailor.googlesignin.RNGoogleSigninPackage;

import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.auth.RNFirebaseAuthPackage;
import io.invertase.firebase.database.RNFirebaseDatabasePackage;

import com.RNFetchBlob.RNFetchBlobPackage;
import com.reactcommunity.rnlanguages.RNLanguagesPackage;

import fr.greweb.reactnativeviewshot.RNViewShotPackage;

import com.idehub.GoogleAnalyticsBridge.GoogleAnalyticsBridgePackage;
import com.sbugert.rnadmob.RNAdMobPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import org.devio.rn.splashscreen.SplashScreenReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new ReactNativeOneSignalPackage(),
                    new RNViewOverflowPackage(),
                    new RNGoogleSigninPackage(),
                    new RNFirebasePackage(),
                    new RNFirebaseAuthPackage(),
                    new RNFirebaseDatabasePackage(),
                    new RNFetchBlobPackage(),
                    new RNLanguagesPackage(),
                    new RNViewShotPackage(),
                    new GoogleAnalyticsBridgePackage(),
                    new VectorIconsPackage(),
                    new SplashScreenReactPackage(),
                    new DataManagerPackage(),
                    new RNAdMobPackage()
            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }
}
