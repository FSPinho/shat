package com.cytech.shat.data;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class DataManagerModule extends ReactContextBaseJavaModule {

    public DataManagerModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "DataManager";
    }

    @ReactMethod
    public void getAssetsItem(ReadableMap options, Promise promise) {

        String dataPath = options.getString("path");
        String dataBuff = "";

        BufferedReader reader = null;

        try {

            reader = new BufferedReader(
                    new InputStreamReader(
                            getReactApplicationContext()
                                    .getAssets()
                                    .open(dataPath),
                            "UTF-8"
                    )
            );

            String mLine;
            while ((mLine = reader.readLine()) != null) {
                dataBuff += mLine;
            }
            promise.resolve(dataBuff);

        } catch (IOException e) {

            promise.reject(e);

        } finally {

            if (reader != null) {
                try {
                    reader.close();
                } catch (IOException e) {
                    /** ... */
                }
            }

        }

    }

}
