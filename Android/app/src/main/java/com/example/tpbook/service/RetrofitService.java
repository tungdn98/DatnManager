package com.example.tpbook.service;

import com.example.tpbook.utils.Commons;

import java.io.IOException;

import okhttp3.Interceptor;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class RetrofitService {
    public static String basePath = "http://172.24.48.1:8080/";
    //public static String basePath = "http://43d2aebdbcea.ngrok.io/api/";

    private static OkHttpClient client = new OkHttpClient.Builder().addInterceptor(new Interceptor() {
        @Override
        public Response intercept(Chain chain) throws IOException {
            Request newRequest  = chain.request().newBuilder()
                    .addHeader("Authorization", "Bearer " + Commons.auth)
                    .build();
            return chain.proceed(newRequest);
        }
    }).build();

    private static Retrofit retrofit = new Retrofit.Builder()
            .client(client)
            .baseUrl(basePath)
            .addConverterFactory(GsonConverterFactory.create())
            .build();


    public static <S> S cteateService(Class<S> serviceClass) {
        return retrofit.create(serviceClass);
    }
}
